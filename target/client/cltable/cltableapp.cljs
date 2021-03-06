(ns cltable.cltableapp
  (:require
    [clojure.string :as str]
    [rum.core :as rum]
    [datascript.core :as d]
    [cljs-uuid-utils.core :as uuid]
    [cltable.util :as u]
            )
)

(defn reset-overlay []
  nil
)

(defn is-filter-changed []
  nil
)

(defn on-mouse-up []
  nil
)

(defn show-hide-columns [from-col-index to-col-index show-or-hide]
  nil
)

(defn show-header-menu [x y index]
  nil
)

(defn table-overlay [{:keys [data]}]
  nil
)

(def conn
  (d/create-conn {}))


(def table-state
  (atom nil)
  )

(defn set-cell-val! [column row-index val]
  (swap! table-state
         (fn [old]
             (let [
                   old-rows-data (:visible-rows-data old)
                   old-row-data (nth old-rows-data row-index )
                   new-row-data (assoc old-row-data (:data-key column) val)
                   new-rows-data (assoc old-rows-data row-index new-row-data)
                   ]
                  (assoc old :visible-rows-data new-rows-data)
                  )
             )
         )
  )

(defn default-cell-renderer [row-data, row-index, cell-data-key, cell-data, column, width, on-save, on-stop]
    (if (nil? cell-data) "" (str cell-data))
    )

(defmulti cell-renderer-factory :type)
(defn cell-list [value-labels] {:type :list :options value-labels})
(defn cell-text [placeholder on-save on-stop] {:type :text :placeholder placeholder :on-save on-save :on-stop on-stop})
(defn cell-label [] {:type :label})

(defn input [{:keys [placeholder value on-save on-stop]}]
      (let [val (atom value)
            stop #(do (reset! val value)
                      (if on-stop (on-stop)))
            save #(let [v (-> @val str clojure.string/trim)]
                       (on-save v)
                       )]
           [:input {:type "text" :placeholder placeholder :value @val :on-blur save
                    :on-change #(reset! val (-> % .-target .-value))
                    :on-key-down #(case (.-which %)
                                        13 (save)
                                        27 (stop)
                                        nil)}]
           ))

(defmethod cell-renderer-factory :list [cell]
           (fn [row-data, row-index, cell-data-key, cell-data, column, width, on-save, on-stop]
               (reduce-kv
                 (fn [result k v]
                     (into result [[:option (if (= cell-data k) {:value k :selected ""} {:value k})  v]])
                     )
                 [:select {:value cell-data
                           :on-change on-save
                           } ]
                 (:options cell)
                 )
               )
           )

(defmethod cell-renderer-factory :text [cell]
           (fn [row-data, row-index, cell-data-key, cell-data, column, width, on-save, on-stop]
               (input (merge cell {:value cell-data :on-save on-save :on-stop on-stop}))
               )
           )
(defmethod cell-renderer-factory :label [cell]
           (fn [row-data, row-index, cell-data-key, cell-data, column, width, on-save, on-stop]
               (let [label cell-data]
                    (if (nil? label) "" (str label))
                    )
               )
           )

(rum/defc table-cell [{:keys [align class highlighted is-footer is-header
                          width min-width max-width height
                          cell-data cell-data-key
                          cell-renderer column row-data row-index
                          on-column-resize left
                          ]}]
      (let [cell-renderer (or cell-renderer default-cell-renderer)
            style {:position "absolute" :left left :width width :min-width min-width :max-width max-width :height height}
            on-save (fn [val]
                        (set-cell-val! column row-index val)
                        )
            on-stop (fn [] nil)
            ]
           [:div {:style style :class class}
             (cell-renderer row-data row-index cell-data-key cell-data column width on-save on-stop)
            ]
           )
      )

(rum/defc table-cell-group [{:keys [columns z-index left top isHeader isTop width row-data row-index row-height class cell-class]}]
      (let [style {:z-index z-index :position "absolute" :left left :top top}
            ]
           (loop [cell-left 0 column-index 0 cells [:div {:class class :style style}]
                  ]
                 (if (= column-index (count columns))
                   cells
                   (let [column (nth columns column-index)
                         classes1 (if isTop "cellLayout cellLayout_top" "cellLayout")
                         isRightCell (= column-index (dec (count columns)))
                         classes (str "cellLayout" " " cell-class
                                      (if isTop " cellLayout_top" "")
                                      (if isRightCell " cellLayout_right" "")
                                      )
                         cell ^{:key (:label column)} (table-cell {:align "center"
                                                                   :class classes
                                                                   :highlighted false
                                                                   :is-footer false
                                                                   :is-header false
                                                                   :width (:width column)
                                                                   :min-width (:min-width column)
                                                                   :max-width (:max-width column)
                                                                   :height row-height
                                                                   :row-data row-data
                                                                   :row-index row-index
                                                                   :cell-data (row-data (:data-key column))
                                                                   :cell-data-key (:data-key column)
                                                                   :cell-renderer (if isHeader (:header-cell-renderer column) (:cell-renderer column))
                                                                   :column column
                                                                   :on-column-resize nil
                                                                   :left cell-left})
                         new-left (+ cell-left (:width column))
                         ]
                        (recur new-left (inc column-index) (into cells [cell]))
                        )
                   )
                 )
           )
      )

(rum/defc table-row [{:keys [fixed-columns width scrollable-columns row-data row-index row-height isHeader class cell-class top isTop]}]
      (let [fixed-columns-width (reduce #(+ %1 (:width %2)) 0 fixed-columns)
            ]
           [:div {:class (if isHeader (str "row_header " class) class)}
            ^{:key "fixed"}  (table-cell-group {:columns fixed-columns :z-index 2 :left 0
                                                :width fixed-columns-width :row-data row-data :row-index row-index :row-height row-height :top top
                                                :isHeader isHeader :isTop isTop :class "cellgroup_fixed" :cell-class cell-class})
            ;^{:key "scrollable"}  [table-cell-group {:columns fixed-columns :z-index 2 :left 0
            ;                                    :width fixed-columns-width :row-data row-data :row-index row-index :row-height row-height :top top
            ;                                    :isTop isTop :class "cellgroup_scrollable"}]
            ]

        )
      )

(rum/defc table-rows [{:keys [fixed-columns width scrollable-columns row-datas row-indices row-count row-height top isTop]}]
      (let [
            ]
           (loop [result [:div {}] indices row-indices display-index 0 curr-top top curr-isTop isTop]
                 (let [row-index (first indices)
                       ]
                      (if (nil? row-index)
                        result
                        (let [row-data (nth row-datas display-index)
                              new-row ^{:key row-index} (table-row {:fixed-columns fixed-columns
                                                                    :width width
                                                                    :scrollable-columns scrollable-columns
                                                                    :row-data row-data
                                                                    :row-index row-index
                                                                    :row-height row-height
                                                                    :top curr-top
                                                                    :isTop curr-isTop
                                                                    :class "rowLayout"
                                                                    :cell-class (if (even? row-index) "row_light" "row_dark")
                                                                    })
                              new-result (conj result new-row)
                              ]
                             (recur new-result (rest indices ) (inc display-index) (+ curr-top row-height) false)
                             )
                        )
                      )
             )
           )
      )

(rum/defc table [{:keys [on-mouse-up class
                     preheaders columns hidden-columns header-cell-renderer show-hide-columns
                     row-getter row-count row-height data-cell-renderer
                     select-cells show-filter-list is-filter selected-indices
                     filter-criteria header-menu-col-index
                     ]}
             ]
      (let [fixed-columns (filter #(:fixed %) columns)
            fixed-width (reduce #(+ %1 (:width %2)) 0 fixed-columns)
            scrollable-columns (filter #(not (:fixed %)) columns)
            scrollable-width (reduce #(+ %1 (:width %2)) 0 scrollable-columns)
            width (reduce #(+ %1 (:width %2)) 0 columns)
            header (reduce #(assoc %1 (:data-key %2) (:label %2)) {} columns)
            new-state (swap! table-state (fn [_]
                                             {
                                              :width width
                                              :header header
                                              :visible-rows-data (into [] (map row-getter (range row-count)))
                                              :visible-rows-indices (range row-count)
                                              :update-range [-2 -2 -2 -2]
                                              }
                                             )
                        )
            header-row ^{:key "header"} (table-row {:fixed-columns fixed-columns
                                                    :width (:width @table-state)
                                                    :scrollable-columns scrollable-columns
                                                    :row-data (:header @table-state)
                                                    :row-index -1
                                                    :row-height row-height
                                                    :top 0
                                                    :isTop true
                                                    :isHeader true
                                                    :class "rowLayout"
                                                    :cell-class "row_header"
                                                    })

            data-rows  ^{:key "data"} (table-rows {:fixed-columns fixed-columns
                                                   :width (:width @table-state)
                                                   :scrollable-columns scrollable-columns
                                                   :row-datas (:visible-rows-data @table-state)
                                                   :row-indices (:visible-rows-indices @table-state)
                                                   :row-count row-count
                                                   :row-height row-height
                                                   :top row-height
                                                   :isTop false
                                                   })
            ]
           (.log js/console (str "fixed-columns:" fixed-columns))

           (add-watch table-state :header
                      (fn [_ _ _ _]
                          (rum/request-render header-row)))

           (add-watch table-state :body
                      (fn [_ _ _ _]
                          (rum/request-render data-rows)))

           [:div
            {:class (str "tableLayout " class)
             :on-mouse-up on-mouse-up
             :style {:position "relative"  :width (:width @table-state)}
             }
            header-row
            data-rows
            ]
       )
  )

(rum/defc exampleTable []
  (let []
    (table
      {
       :class "exampleTable"
       :columns [{
                  :data-key "col0"
                  :fixed true
                  :label "col 0"
                  :width 100
                  :resizable false
                  :cell-renderer (cell-renderer-factory (cell-list (u/key-mirror ["val0a" "val0b"])))
                  }
                 {
                  :data-key "col1"
                  :fixed true
                  :label "col 1"
                  :width 75
                  :cell-renderer (cell-renderer-factory (cell-text "Enter col 1" #(do) #(do)))
                  :resizable false
                  }
                 {
                  :data-key "col2"
                  :fixed true
                  :label "col 2"
                  :width 100
                  :resizable false
                  }
                 {
                  :data-key "col3"
                  :fixed true
                  :label "col 3"
                  :width 150
                  :resizable false
                  }
                 {
                  :data-key "col4"
                  :fixed true
                  :label "col 4"
                  :width 200
                  :resizable false
                  }
                 ]
       :hidden-columns #{}
       :row-count 3
       :row-height 50
       :row-getter (fn [index] {
                                "col0" (if (even? index) "val0a" "val0b")
                                "col1" (str "val " (repeat index (str index)) " " 1)
                                "col2" (str "val " (repeat index (str index)) " " 2)
                                "col3" (str "val " (repeat index (str index)) " " 3)
                                "col4" (str "val " (repeat index (str index)) " " 4)
                                }
                       )
       }
      )
  )
)

(rum/defc tabledemo [props]
          [:div {:style {:position "relative"}}
           [:h1 "react table demo"]
           [:p "This is it."]
           (exampleTable)
           ]
          )

(defn ^:export run []
      (rum/mount (tabledemo {}) (u/elem "tableDemoSection"))
      )