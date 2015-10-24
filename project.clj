(defproject cltable "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [cljsjs/react "0.14.0-0"]
                 [sablono "0.3.6"]
                 [rum "0.5.0"]
                 [datascript "0.13.1"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]
                 [figwheel "0.4.1"]
                 [codox "0.9.0"]
                 ]

  :global-vars
  { *warn-on-reflection* true }

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]
            [lein-codox "0.9.0"]
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
