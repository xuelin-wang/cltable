(defproject cltable "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107"]
                 [reagent "0.5.1-rc"]
                 [figwheel "0.3.7"]
                 ]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.7"]
            [codox "0.8.12"]
            ]

  :hooks [leiningen.cljsbuild]

  :codox {:language :clojurescript
          :exclude clojure.string}  

  :clean-targets [:target-path "target"]
  :local-repo "local-m2"
  :profiles {:dev {:cljsbuild
                   {:builds {:client
                             {:figwheel {:on-jsload "cltable.cltableapp/run"}
                              :compiler {:main "cltable.cltableapp"
                                         :optimizations :none}}}}}

             :prod {:cljsbuild
                    {:builds {:client
                              {:compiler {:optimizations :advanced
                                          :elide-asserts true
                                          :pretty-print false}}}}}}

  :figwheel {:repl false}

  :cljsbuild {:builds {:client
                       {:source-paths ["src"]
                        :compiler {:output-dir "target/client"
                                   :output-to "target/client.js"}}}})
