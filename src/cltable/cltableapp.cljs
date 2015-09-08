(ns cltable.cltableapp
  (:require [reagent.core :as r])
  (:require [cltable.util :as u])
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

<<<<<<< HEAD
(defn table [{:keys [on-mouse-up class table-header table-data-body]}]
  [:div {:class class :on-mouse-up on-mouse-up}
    table-header
    table-data-body
  ]
)

(defn table-header [{:keys [action]}]
  nil
)

=======
>>>>>>> 56858f57d2c150f13b066c9f9c7f2b6aef8fb6b7
(defn show-hide-columns [from-col-index to-col-index show-or-hide]
  nil
)

(defn show-header-menu [x y index]
  nil
)

(defn table-data-body [{:keys [data]}]
  nil
)

(defn table-overlay [{:keys [data]}]
  nil
)

(defn table-header [{:keys [header visible-columns show-hide-columns]}]
  (let
    [
      state
        (r/atom {:active-header-index -1})
      show-columns
        (fn [colIndex left]
          (let
            [
              index (if left (dec colIndex) (inc colIndex))
              col-indices (u/int-range index #(not (visible-columns %)))
            ]
            (show-hide-columns col-indices true)
          )
        )
      default-cell-renderer
        (fn [col colindex hidden]
        )
    ]
    nil
  )
)

(defn cltable
  [{:keys [preheaders header header-cell-renderer get-data-cell-renderer get-cell-spec]}]
  (let [state (r/atom {:is-filter false
        :selected-indices nil
        :overlay-x -1
        :overlay-y -1
      })
      table-class-name nil
      filter-criteria nil
      select-cells
        (fn [cells] nil)
      header-menu-col-index nil
      show-filter-list
        (fn [x y col-index] nil)
      columns-visibility nil
      check-criteria
        (fn [rowData] nil)
      set-cell-data
        (fn [row-index col-index val] nil)
      table-data nil
      tbodyClassName nil
    ]

    [:div {:on-mouse-down #(reset-overlay)
            :class "table-outside-container"
          }
      [:div {:class "table-div-container"}
        [:div {:class "checkbox"}
          [
            :label [:input {:type "checkbox" :on-change #(is-filter-changed) :value (:is-filter @state)}]
          ]
        ]

        [table {
            :on-mouse-up #(on-mouse-up)
            :class table-class-name
            :table-header  [table-header
                {:action (:action @state)
                  :preheaders preheaders
                  :header header
                  :header-cell-renderer header-cell-renderer
                  :show-hide-columns show-hide-columns
                  :show-header-menu show-header-menu
                  :filter-criteria filter-criteria
                  :select-cells select-cells
                  :header-menu-col-index header-menu-col-index
                  :show-filter-list show-filter-list
                  :is-filter (:is-filter @state)
                  :columns-visibility columns-visibility
                  :selected-indices (:selected-indices @state)
                  :index 0
                  :ref "header"
                }
              ]

            :table-data-body [table-data-body
                 {:action (:action @state)
                  :class tbodyClassName
                  :data table-data
                  :is-filter (:is-filter @state)
                  :columns-visibility columns-visibility
                 :filter-criteria filter-criteria
                 :selected-indices (:selected-indices @state)
                 :set-cell-data-change set-cell-data
                 :get-cell-spec get-cell-spec
                 :get-data-cell-renderer get-data-cell-renderer
                 :sort-col-index (:sort-col-index @state)
                 :sort-direction (:sort-direction @state)
                 :check-criteria check-criteria
                 :select-cells select-cells
                 :index 1
                 :ref "body"
                 }
              ]
          }
        ]

        [table-overlay
          {:action (:action @state)
            :ref "overlay"
            :overlay-x (:overlay-x @state)
            :overlay-y (:overlay-y @state)
          }
        ]

      ]
    ]
  )
)

(defn exampleTable []
  (let []
    [
    ]
    [cltable
       {}
    ]
  )
)

(defn tabledemo [props]
  (fn []
    [:div
      [:h1 "react table demo"]
      [exampleTable]
      [:p "This is it."]
    ]
  )
)

(defn ^:export run []
  (r/render [tabledemo]
            (js/document.getElementById "tableDemoSection")))