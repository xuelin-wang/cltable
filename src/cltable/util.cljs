(ns cltable.util
  )

(defn int-range [i pred]
  (if-not (pred i)
    nil
    (let
      [
        from-1 (first (drop-while #(pred %) (range i -1 -1)))
        to+1 (first (drop-while #(pred %) (range i 10000 1)))
      ]
      [range (inc from-1) to+1]
    )
  )
)