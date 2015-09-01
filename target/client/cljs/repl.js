// Compiled by ClojureScript 1.7.107 {}
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
var seq__25146_25160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25147_25161 = null;
var count__25148_25162 = (0);
var i__25149_25163 = (0);
while(true){
if((i__25149_25163 < count__25148_25162)){
var f_25164 = cljs.core._nth.call(null,chunk__25147_25161,i__25149_25163);
cljs.core.println.call(null,"  ",f_25164);

var G__25165 = seq__25146_25160;
var G__25166 = chunk__25147_25161;
var G__25167 = count__25148_25162;
var G__25168 = (i__25149_25163 + (1));
seq__25146_25160 = G__25165;
chunk__25147_25161 = G__25166;
count__25148_25162 = G__25167;
i__25149_25163 = G__25168;
continue;
} else {
var temp__4425__auto___25169 = cljs.core.seq.call(null,seq__25146_25160);
if(temp__4425__auto___25169){
var seq__25146_25170__$1 = temp__4425__auto___25169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25146_25170__$1)){
var c__17311__auto___25171 = cljs.core.chunk_first.call(null,seq__25146_25170__$1);
var G__25172 = cljs.core.chunk_rest.call(null,seq__25146_25170__$1);
var G__25173 = c__17311__auto___25171;
var G__25174 = cljs.core.count.call(null,c__17311__auto___25171);
var G__25175 = (0);
seq__25146_25160 = G__25172;
chunk__25147_25161 = G__25173;
count__25148_25162 = G__25174;
i__25149_25163 = G__25175;
continue;
} else {
var f_25176 = cljs.core.first.call(null,seq__25146_25170__$1);
cljs.core.println.call(null,"  ",f_25176);

var G__25177 = cljs.core.next.call(null,seq__25146_25170__$1);
var G__25178 = null;
var G__25179 = (0);
var G__25180 = (0);
seq__25146_25160 = G__25177;
chunk__25147_25161 = G__25178;
count__25148_25162 = G__25179;
i__25149_25163 = G__25180;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25181 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16508__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25181);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25181)))?cljs.core.second.call(null,arglists_25181):arglists_25181));
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
var seq__25150 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25151 = null;
var count__25152 = (0);
var i__25153 = (0);
while(true){
if((i__25153 < count__25152)){
var vec__25154 = cljs.core._nth.call(null,chunk__25151,i__25153);
var name = cljs.core.nth.call(null,vec__25154,(0),null);
var map__25155 = cljs.core.nth.call(null,vec__25154,(1),null);
var map__25155__$1 = ((((!((map__25155 == null)))?((((map__25155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25155):map__25155);
var doc = cljs.core.get.call(null,map__25155__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25155__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25182 = seq__25150;
var G__25183 = chunk__25151;
var G__25184 = count__25152;
var G__25185 = (i__25153 + (1));
seq__25150 = G__25182;
chunk__25151 = G__25183;
count__25152 = G__25184;
i__25153 = G__25185;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25150);
if(temp__4425__auto__){
var seq__25150__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25150__$1)){
var c__17311__auto__ = cljs.core.chunk_first.call(null,seq__25150__$1);
var G__25186 = cljs.core.chunk_rest.call(null,seq__25150__$1);
var G__25187 = c__17311__auto__;
var G__25188 = cljs.core.count.call(null,c__17311__auto__);
var G__25189 = (0);
seq__25150 = G__25186;
chunk__25151 = G__25187;
count__25152 = G__25188;
i__25153 = G__25189;
continue;
} else {
var vec__25157 = cljs.core.first.call(null,seq__25150__$1);
var name = cljs.core.nth.call(null,vec__25157,(0),null);
var map__25158 = cljs.core.nth.call(null,vec__25157,(1),null);
var map__25158__$1 = ((((!((map__25158 == null)))?((((map__25158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25158):map__25158);
var doc = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25190 = cljs.core.next.call(null,seq__25150__$1);
var G__25191 = null;
var G__25192 = (0);
var G__25193 = (0);
seq__25150 = G__25190;
chunk__25151 = G__25191;
count__25152 = G__25192;
i__25153 = G__25193;
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