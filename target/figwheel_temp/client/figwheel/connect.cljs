(ns figwheel.connect (:require [cltable.cltableapp] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "client", :on-jsload (fn [& x] (if js/cltable.cltableapp.run (apply js/cltable.cltableapp.run x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'cltable.cltableapp/run' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

