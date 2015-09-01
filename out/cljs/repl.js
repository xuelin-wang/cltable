// Compiled by ClojureScript 1.7.48 {}
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
var seq__24599_24613 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24600_24614 = null;
var count__24601_24615 = (0);
var i__24602_24616 = (0);
while(true){
if((i__24602_24616 < count__24601_24615)){
var f_24617 = cljs.core._nth.call(null,chunk__24600_24614,i__24602_24616);
cljs.core.println.call(null,"  ",f_24617);

var G__24618 = seq__24599_24613;
var G__24619 = chunk__24600_24614;
var G__24620 = count__24601_24615;
var G__24621 = (i__24602_24616 + (1));
seq__24599_24613 = G__24618;
chunk__24600_24614 = G__24619;
count__24601_24615 = G__24620;
i__24602_24616 = G__24621;
continue;
} else {
var temp__4425__auto___24622 = cljs.core.seq.call(null,seq__24599_24613);
if(temp__4425__auto___24622){
var seq__24599_24623__$1 = temp__4425__auto___24622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24599_24623__$1)){
var c__17256__auto___24624 = cljs.core.chunk_first.call(null,seq__24599_24623__$1);
var G__24625 = cljs.core.chunk_rest.call(null,seq__24599_24623__$1);
var G__24626 = c__17256__auto___24624;
var G__24627 = cljs.core.count.call(null,c__17256__auto___24624);
var G__24628 = (0);
seq__24599_24613 = G__24625;
chunk__24600_24614 = G__24626;
count__24601_24615 = G__24627;
i__24602_24616 = G__24628;
continue;
} else {
var f_24629 = cljs.core.first.call(null,seq__24599_24623__$1);
cljs.core.println.call(null,"  ",f_24629);

var G__24630 = cljs.core.next.call(null,seq__24599_24623__$1);
var G__24631 = null;
var G__24632 = (0);
var G__24633 = (0);
seq__24599_24613 = G__24630;
chunk__24600_24614 = G__24631;
count__24601_24615 = G__24632;
i__24602_24616 = G__24633;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24634 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16472__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24634);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24634)))?cljs.core.second.call(null,arglists_24634):arglists_24634));
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
var seq__24603 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24604 = null;
var count__24605 = (0);
var i__24606 = (0);
while(true){
if((i__24606 < count__24605)){
var vec__24607 = cljs.core._nth.call(null,chunk__24604,i__24606);
var name = cljs.core.nth.call(null,vec__24607,(0),null);
var map__24608 = cljs.core.nth.call(null,vec__24607,(1),null);
var map__24608__$1 = ((((!((map__24608 == null)))?((((map__24608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24608):map__24608);
var doc = cljs.core.get.call(null,map__24608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24635 = seq__24603;
var G__24636 = chunk__24604;
var G__24637 = count__24605;
var G__24638 = (i__24606 + (1));
seq__24603 = G__24635;
chunk__24604 = G__24636;
count__24605 = G__24637;
i__24606 = G__24638;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24603);
if(temp__4425__auto__){
var seq__24603__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24603__$1)){
var c__17256__auto__ = cljs.core.chunk_first.call(null,seq__24603__$1);
var G__24639 = cljs.core.chunk_rest.call(null,seq__24603__$1);
var G__24640 = c__17256__auto__;
var G__24641 = cljs.core.count.call(null,c__17256__auto__);
var G__24642 = (0);
seq__24603 = G__24639;
chunk__24604 = G__24640;
count__24605 = G__24641;
i__24606 = G__24642;
continue;
} else {
var vec__24610 = cljs.core.first.call(null,seq__24603__$1);
var name = cljs.core.nth.call(null,vec__24610,(0),null);
var map__24611 = cljs.core.nth.call(null,vec__24610,(1),null);
var map__24611__$1 = ((((!((map__24611 == null)))?((((map__24611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24611):map__24611);
var doc = cljs.core.get.call(null,map__24611__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24611__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24643 = cljs.core.next.call(null,seq__24603__$1);
var G__24644 = null;
var G__24645 = (0);
var G__24646 = (0);
seq__24603 = G__24643;
chunk__24604 = G__24644;
count__24605 = G__24645;
i__24606 = G__24646;
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