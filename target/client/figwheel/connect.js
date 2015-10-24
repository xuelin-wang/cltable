// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('cltable.cltableapp');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__23417__delegate = function (x){
if(cljs.core.truth_(cltable.cltableapp.run)){
return cljs.core.apply.call(null,cltable.cltableapp.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cltable.cltableapp/run' is missing");
}
};
var G__23417 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__23418__i = 0, G__23418__a = new Array(arguments.length -  0);
while (G__23418__i < G__23418__a.length) {G__23418__a[G__23418__i] = arguments[G__23418__i + 0]; ++G__23418__i;}
  x = new cljs.core.IndexedSeq(G__23418__a,0);
} 
return G__23417__delegate.call(this,x);};
G__23417.cljs$lang$maxFixedArity = 0;
G__23417.cljs$lang$applyTo = (function (arglist__23419){
var x = cljs.core.seq(arglist__23419);
return G__23417__delegate(x);
});
G__23417.cljs$core$IFn$_invoke$arity$variadic = G__23417__delegate;
return G__23417;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map