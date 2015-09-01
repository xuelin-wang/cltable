// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('cltable.cltableapp');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19753__delegate = function (x){
if(cljs.core.truth_(cltable.cltableapp.run)){
return cljs.core.apply.call(null,cltable.cltableapp.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cltable.cltableapp/run' is missing");
}
};
var G__19753 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19754__i = 0, G__19754__a = new Array(arguments.length -  0);
while (G__19754__i < G__19754__a.length) {G__19754__a[G__19754__i] = arguments[G__19754__i + 0]; ++G__19754__i;}
  x = new cljs.core.IndexedSeq(G__19754__a,0);
} 
return G__19753__delegate.call(this,x);};
G__19753.cljs$lang$maxFixedArity = 0;
G__19753.cljs$lang$applyTo = (function (arglist__19755){
var x = cljs.core.seq(arglist__19755);
return G__19753__delegate(x);
});
G__19753.cljs$core$IFn$_invoke$arity$variadic = G__19753__delegate;
return G__19753;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map