// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26039_26053 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26040_26054 = null;
var count__26041_26055 = (0);
var i__26042_26056 = (0);
while(true){
if((i__26042_26056 < count__26041_26055)){
var f_26057 = cljs.core._nth.call(null,chunk__26040_26054,i__26042_26056);
cljs.core.println.call(null,"  ",f_26057);

var G__26058 = seq__26039_26053;
var G__26059 = chunk__26040_26054;
var G__26060 = count__26041_26055;
var G__26061 = (i__26042_26056 + (1));
seq__26039_26053 = G__26058;
chunk__26040_26054 = G__26059;
count__26041_26055 = G__26060;
i__26042_26056 = G__26061;
continue;
} else {
var temp__4425__auto___26062 = cljs.core.seq.call(null,seq__26039_26053);
if(temp__4425__auto___26062){
var seq__26039_26063__$1 = temp__4425__auto___26062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26039_26063__$1)){
var c__17108__auto___26064 = cljs.core.chunk_first.call(null,seq__26039_26063__$1);
var G__26065 = cljs.core.chunk_rest.call(null,seq__26039_26063__$1);
var G__26066 = c__17108__auto___26064;
var G__26067 = cljs.core.count.call(null,c__17108__auto___26064);
var G__26068 = (0);
seq__26039_26053 = G__26065;
chunk__26040_26054 = G__26066;
count__26041_26055 = G__26067;
i__26042_26056 = G__26068;
continue;
} else {
var f_26069 = cljs.core.first.call(null,seq__26039_26063__$1);
cljs.core.println.call(null,"  ",f_26069);

var G__26070 = cljs.core.next.call(null,seq__26039_26063__$1);
var G__26071 = null;
var G__26072 = (0);
var G__26073 = (0);
seq__26039_26053 = G__26070;
chunk__26040_26054 = G__26071;
count__26041_26055 = G__26072;
i__26042_26056 = G__26073;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26074 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16305__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26074);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26074)))?cljs.core.second.call(null,arglists_26074):arglists_26074));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26043 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26044 = null;
var count__26045 = (0);
var i__26046 = (0);
while(true){
if((i__26046 < count__26045)){
var vec__26047 = cljs.core._nth.call(null,chunk__26044,i__26046);
var name = cljs.core.nth.call(null,vec__26047,(0),null);
var map__26048 = cljs.core.nth.call(null,vec__26047,(1),null);
var map__26048__$1 = ((((!((map__26048 == null)))?((((map__26048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26048):map__26048);
var doc = cljs.core.get.call(null,map__26048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26075 = seq__26043;
var G__26076 = chunk__26044;
var G__26077 = count__26045;
var G__26078 = (i__26046 + (1));
seq__26043 = G__26075;
chunk__26044 = G__26076;
count__26045 = G__26077;
i__26046 = G__26078;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26043);
if(temp__4425__auto__){
var seq__26043__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26043__$1)){
var c__17108__auto__ = cljs.core.chunk_first.call(null,seq__26043__$1);
var G__26079 = cljs.core.chunk_rest.call(null,seq__26043__$1);
var G__26080 = c__17108__auto__;
var G__26081 = cljs.core.count.call(null,c__17108__auto__);
var G__26082 = (0);
seq__26043 = G__26079;
chunk__26044 = G__26080;
count__26045 = G__26081;
i__26046 = G__26082;
continue;
} else {
var vec__26050 = cljs.core.first.call(null,seq__26043__$1);
var name = cljs.core.nth.call(null,vec__26050,(0),null);
var map__26051 = cljs.core.nth.call(null,vec__26050,(1),null);
var map__26051__$1 = ((((!((map__26051 == null)))?((((map__26051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26051):map__26051);
var doc = cljs.core.get.call(null,map__26051__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26051__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26083 = cljs.core.next.call(null,seq__26043__$1);
var G__26084 = null;
var G__26085 = (0);
var G__26086 = (0);
seq__26043 = G__26083;
chunk__26044 = G__26084;
count__26045 = G__26085;
i__26046 = G__26086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map