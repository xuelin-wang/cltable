// Compiled by ClojureScript 1.7.145 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__16960__auto__ = (((_ == null))?null:_);
var m__16961__auto__ = (datascript.parser._collect[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,_,pred,acc);
} else {
var m__16961__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__16960__auto__ = (((_ == null))?null:_);
var m__16961__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,_,acc);
} else {
var m__16961__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__16960__auto__ = (((_ == null))?null:_);
var m__16961__auto__ = (datascript.parser._postwalk[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,_,f);
} else {
var m__16961__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__24250_SHARP_,p2__24249_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__24249_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__24250_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24257 = arguments.length;
var i__17364__auto___24258 = (0);
while(true){
if((i__17364__auto___24258 < len__17363__auto___24257)){
args__17370__auto__.push((arguments[i__17364__auto___24258]));

var G__24259 = (i__17364__auto___24258 + (1));
i__17364__auto___24258 = G__24259;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((2) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17371__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__24254){
var vec__24255 = p__24254;
var acc = cljs.core.nth.call(null,vec__24255,(0),null);
var acc__$1 = (function (){var or__16305__auto__ = acc;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__24255,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__24255,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq24251){
var G__24252 = cljs.core.first.call(null,seq24251);
var seq24251__$1 = cljs.core.next.call(null,seq24251);
var G__24253 = cljs.core.first.call(null,seq24251__$1);
var seq24251__$2 = cljs.core.next.call(null,seq24251__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__24252,G__24253,seq24251__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__16305__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__16305__auto__){
return or__16305__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__24266){
var vec__24267 = p__24266;
var k = cljs.core.nth.call(null,vec__24267,(0),null);
var v = cljs.core.nth.call(null,vec__24267,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__24260_SHARP_){
return datascript$parser$postwalk.call(null,p1__24260_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__24261_SHARP_){
return datascript$parser$postwalk.call(null,p1__24261_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__16305__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24272,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24274 = k24272;
switch (G__24274) {
default:
return cljs.core.get.call(null,self__.__extmap,k24272,else__16922__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Placeholder{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24271){
var self__ = this;
var G__24271__$1 = this;
return (new cljs.core.RecordIter((0),G__24271__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24271){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24275 = cljs.core.keyword_identical_QMARK_;
var expr__24276 = k__16927__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24271),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24271){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Placeholder(G__24271,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24268){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24269,acc24270){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24270;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24270){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24270;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__24273){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__24273),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24283,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24285 = (((k24283 instanceof cljs.core.Keyword))?k24283.fqn:null);
switch (G__24285) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24283,else__16922__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Variable{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24282){
var self__ = this;
var G__24282__$1 = this;
return (new cljs.core.RecordIter((0),G__24282__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24282){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24286 = cljs.core.keyword_identical_QMARK_;
var expr__24287 = k__16927__auto__;
if(cljs.core.truth_(pred__24286.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__24287))){
return (new datascript.parser.Variable(G__24282,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24282),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24282){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__24282,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24279){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f24279),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24280,acc24281){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24280,self__.symbol,acc24281);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24281){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24281,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__24284){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__24284),null,cljs.core.dissoc.call(null,G__24284,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24294,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24296 = (((k24294 instanceof cljs.core.Keyword))?k24294.fqn:null);
switch (G__24296) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24294,else__16922__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.SrcVar{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24293){
var self__ = this;
var G__24293__$1 = this;
return (new cljs.core.RecordIter((0),G__24293__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24293){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24297 = cljs.core.keyword_identical_QMARK_;
var expr__24298 = k__16927__auto__;
if(cljs.core.truth_(pred__24297.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__24298))){
return (new datascript.parser.SrcVar(G__24293,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24293),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24293){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__24293,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24290){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f24290),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24291,acc24292){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24291,self__.symbol,acc24292);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24292){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24292,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__24295){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__24295),null,cljs.core.dissoc.call(null,G__24295,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24305,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24307 = k24305;
switch (G__24307) {
default:
return cljs.core.get.call(null,self__.__extmap,k24305,else__16922__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24304){
var self__ = this;
var G__24304__$1 = this;
return (new cljs.core.RecordIter((0),G__24304__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24304){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24308 = cljs.core.keyword_identical_QMARK_;
var expr__24309 = k__16927__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24304),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24304){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__24304,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24301){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24302,acc24303){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24303;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24303){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24303;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__24306){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__24306),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24316,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24318 = k24316;
switch (G__24318) {
default:
return cljs.core.get.call(null,self__.__extmap,k24316,else__16922__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.RulesVar{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24315){
var self__ = this;
var G__24315__$1 = this;
return (new cljs.core.RecordIter((0),G__24315__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24315){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24319 = cljs.core.keyword_identical_QMARK_;
var expr__24320 = k__16927__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24315),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24315){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.RulesVar(G__24315,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24312){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24313,acc24314){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24314;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24314){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24314;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__24317){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__24317),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24327,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24329 = (((k24327 instanceof cljs.core.Keyword))?k24327.fqn:null);
switch (G__24329) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24327,else__16922__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Constant{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24326){
var self__ = this;
var G__24326__$1 = this;
return (new cljs.core.RecordIter((0),G__24326__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24326){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24330 = cljs.core.keyword_identical_QMARK_;
var expr__24331 = k__16927__auto__;
if(cljs.core.truth_(pred__24330.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__24331))){
return (new datascript.parser.Constant(G__24326,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24326),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24326){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__24326,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24323){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f24323),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24324,acc24325){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24324,self__.value,acc24325);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24325){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24325,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__24328){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24328),null,cljs.core.dissoc.call(null,G__24328,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24338,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24340 = (((k24338 instanceof cljs.core.Keyword))?k24338.fqn:null);
switch (G__24340) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24338,else__16922__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24337){
var self__ = this;
var G__24337__$1 = this;
return (new cljs.core.RecordIter((0),G__24337__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24337){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24341 = cljs.core.keyword_identical_QMARK_;
var expr__24342 = k__16927__auto__;
if(cljs.core.truth_(pred__24341.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__24342))){
return (new datascript.parser.PlainSymbol(G__24337,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24337),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24337){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__24337,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24334){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f24334),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24335,acc24336){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24335,self__.symbol,acc24336);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24336){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24336,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__24339){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__24339),null,cljs.core.dissoc.call(null,G__24339,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__16305__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24349,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24351 = (((k24349 instanceof cljs.core.Keyword))?k24349.fqn:null);
switch (G__24351) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24349,else__16922__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.RuleVars{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24348){
var self__ = this;
var G__24348__$1 = this;
return (new cljs.core.RecordIter((0),G__24348__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24348){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24352 = cljs.core.keyword_identical_QMARK_;
var expr__24353 = k__16927__auto__;
if(cljs.core.truth_(pred__24352.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__24353))){
return (new datascript.parser.RuleVars(G__24348,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24352.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__24353))){
return (new datascript.parser.RuleVars(self__.required,G__24348,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24348),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24348){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__24348,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24345){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f24345),datascript.parser.postwalk.call(null,self__.free,f24345),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24346,acc24347){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24346,self__.free,datascript.parser.collect.call(null,pred24346,self__.required,acc24347));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24347){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24347,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__24350){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__24350),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__24350),null,cljs.core.dissoc.call(null,G__24350,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__24357 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__24357,(0),null);
var rest = cljs.core.nth.call(null,vec__24357,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24362,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24364 = k24362;
switch (G__24364) {
default:
return cljs.core.get.call(null,self__.__extmap,k24362,else__16922__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24361){
var self__ = this;
var G__24361__$1 = this;
return (new cljs.core.RecordIter((0),G__24361__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24361){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24365 = cljs.core.keyword_identical_QMARK_;
var expr__24366 = k__16927__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24361),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24361){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__24361,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24358){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24359,acc24360){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24360;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24360){
var self__ = this;
var ___21091__auto____$1 = this;
return acc24360;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__24363){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__24363),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24373,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24375 = (((k24373 instanceof cljs.core.Keyword))?k24373.fqn:null);
switch (G__24375) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24373,else__16922__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.BindScalar{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24372){
var self__ = this;
var G__24372__$1 = this;
return (new cljs.core.RecordIter((0),G__24372__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24372){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24376 = cljs.core.keyword_identical_QMARK_;
var expr__24377 = k__16927__auto__;
if(cljs.core.truth_(pred__24376.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__24377))){
return (new datascript.parser.BindScalar(G__24372,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24372),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24372){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__24372,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24369){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f24369),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24370,acc24371){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24370,self__.variable,acc24371);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24371){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24371,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__24374){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__24374),null,cljs.core.dissoc.call(null,G__24374,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24384,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24386 = (((k24384 instanceof cljs.core.Keyword))?k24384.fqn:null);
switch (G__24386) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24384,else__16922__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.BindTuple{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24383){
var self__ = this;
var G__24383__$1 = this;
return (new cljs.core.RecordIter((0),G__24383__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24383){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24387 = cljs.core.keyword_identical_QMARK_;
var expr__24388 = k__16927__auto__;
if(cljs.core.truth_(pred__24387.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__24388))){
return (new datascript.parser.BindTuple(G__24383,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24383),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24383){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__24383,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24380){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f24380),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24381,acc24382){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24381,self__.bindings,acc24382);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24382){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24382,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__24385){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__24385),null,cljs.core.dissoc.call(null,G__24385,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24395,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24397 = (((k24395 instanceof cljs.core.Keyword))?k24395.fqn:null);
switch (G__24397) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24395,else__16922__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.BindColl{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24394){
var self__ = this;
var G__24394__$1 = this;
return (new cljs.core.RecordIter((0),G__24394__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24394){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24398 = cljs.core.keyword_identical_QMARK_;
var expr__24399 = k__16927__auto__;
if(cljs.core.truth_(pred__24398.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__24399))){
return (new datascript.parser.BindColl(G__24394,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24394),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24394){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__24394,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24391){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f24391),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24392,acc24393){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24392,self__.binding,acc24393);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24393){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24393,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__24396){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__24396),null,cljs.core.dissoc.call(null,G__24396,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__16293__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__16293__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__16293__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__16305__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__16293__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__16293__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__16293__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__16305__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
var or__16305__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__16305__auto____$2)){
return or__16305__auto____$2;
} else {
var or__16305__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16305__auto____$3)){
return or__16305__auto____$3;
} else {
var or__16305__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__16305__auto____$4)){
return or__16305__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__16960__auto__ = (((this$ == null))?null:this$);
var m__16961__auto__ = (datascript.parser._find_vars[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,this$);
} else {
var m__16961__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24406,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24408 = (((k24406 instanceof cljs.core.Keyword))?k24406.fqn:null);
switch (G__24408) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24406,else__16922__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Aggregate{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24405){
var self__ = this;
var G__24405__$1 = this;
return (new cljs.core.RecordIter((0),G__24405__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24405){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24409 = cljs.core.keyword_identical_QMARK_;
var expr__24410 = k__16927__auto__;
if(cljs.core.truth_(pred__24409.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__24410))){
return (new datascript.parser.Aggregate(G__24405,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24409.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24410))){
return (new datascript.parser.Aggregate(self__.fn,G__24405,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24405),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24405){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__24405,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24402){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f24402),datascript.parser.postwalk.call(null,self__.args,f24402),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24403,acc24404){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24403,self__.args,datascript.parser.collect.call(null,pred24403,self__.fn,acc24404));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24404){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24404,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__24407){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__24407),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24407),null,cljs.core.dissoc.call(null,G__24407,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24417,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24419 = (((k24417 instanceof cljs.core.Keyword))?k24417.fqn:null);
switch (G__24419) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24417,else__16922__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Pull{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24416){
var self__ = this;
var G__24416__$1 = this;
return (new cljs.core.RecordIter((0),G__24416__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24416){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24420 = cljs.core.keyword_identical_QMARK_;
var expr__24421 = k__16927__auto__;
if(cljs.core.truth_(pred__24420.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__24421))){
return (new datascript.parser.Pull(G__24416,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24420.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__24421))){
return (new datascript.parser.Pull(self__.source,G__24416,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24420.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__24421))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__24416,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24416),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24416){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__24416,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24413){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f24413),datascript.parser.postwalk.call(null,self__.variable,f24413),datascript.parser.postwalk.call(null,self__.pattern,f24413),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24414,acc24415){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24414,self__.pattern,datascript.parser.collect.call(null,pred24414,self__.variable,datascript.parser.collect.call(null,pred24414,self__.source,acc24415)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24415){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24415,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__24418){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__24418),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__24418),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__24418),null,cljs.core.dissoc.call(null,G__24418,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__16960__auto__ = (((this$ == null))?null:this$);
var m__16961__auto__ = (datascript.parser.find_elements[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,this$);
} else {
var m__16961__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24428,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24430 = (((k24428 instanceof cljs.core.Keyword))?k24428.fqn:null);
switch (G__24430) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24428,else__16922__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.FindRel{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24427){
var self__ = this;
var G__24427__$1 = this;
return (new cljs.core.RecordIter((0),G__24427__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24427){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24431 = cljs.core.keyword_identical_QMARK_;
var expr__24432 = k__16927__auto__;
if(cljs.core.truth_(pred__24431.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__24432))){
return (new datascript.parser.FindRel(G__24427,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24427),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24427){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__24427,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24424){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f24424),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24425,acc24426){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24425,self__.elements,acc24426);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24426){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24426,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__24429){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__24429),null,cljs.core.dissoc.call(null,G__24429,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24439,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24441 = (((k24439 instanceof cljs.core.Keyword))?k24439.fqn:null);
switch (G__24441) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24439,else__16922__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.FindColl{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24438){
var self__ = this;
var G__24438__$1 = this;
return (new cljs.core.RecordIter((0),G__24438__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24438){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24442 = cljs.core.keyword_identical_QMARK_;
var expr__24443 = k__16927__auto__;
if(cljs.core.truth_(pred__24442.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__24443))){
return (new datascript.parser.FindColl(G__24438,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24438),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24438){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__24438,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24435){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f24435),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24436,acc24437){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24436,self__.element,acc24437);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24437){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24437,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__24440){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__24440),null,cljs.core.dissoc.call(null,G__24440,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24450,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24452 = (((k24450 instanceof cljs.core.Keyword))?k24450.fqn:null);
switch (G__24452) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24450,else__16922__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.FindScalar{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24449){
var self__ = this;
var G__24449__$1 = this;
return (new cljs.core.RecordIter((0),G__24449__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24449){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24453 = cljs.core.keyword_identical_QMARK_;
var expr__24454 = k__16927__auto__;
if(cljs.core.truth_(pred__24453.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__24454))){
return (new datascript.parser.FindScalar(G__24449,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24449),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24449){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__24449,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24446){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f24446),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24447,acc24448){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24447,self__.element,acc24448);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24448){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24448,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__24451){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__24451),null,cljs.core.dissoc.call(null,G__24451,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24461,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24463 = (((k24461 instanceof cljs.core.Keyword))?k24461.fqn:null);
switch (G__24463) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24461,else__16922__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.FindTuple{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24460){
var self__ = this;
var G__24460__$1 = this;
return (new cljs.core.RecordIter((0),G__24460__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24460){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24464 = cljs.core.keyword_identical_QMARK_;
var expr__24465 = k__16927__auto__;
if(cljs.core.truth_(pred__24464.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__24465))){
return (new datascript.parser.FindTuple(G__24460,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24460),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24460){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__24460,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24457){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f24457),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24458,acc24459){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24458,self__.elements,acc24459);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24459){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24459,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__24462){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__24462),null,cljs.core.dissoc.call(null,G__24462,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__24469 = form;
var fn = cljs.core.nth.call(null,vec__24469,(0),null);
var args = cljs.core.nthnext.call(null,vec__24469,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16293__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16293__auto__)){
return args_STAR_;
} else {
return and__16293__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__24471 = form;
var _ = cljs.core.nth.call(null,vec__24471,(0),null);
var fn = cljs.core.nth.call(null,vec__24471,(1),null);
var args = cljs.core.nthnext.call(null,vec__24471,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16293__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16293__auto__)){
return args_STAR_;
} else {
return and__16293__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__24473 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__24473,(0),null);
var pattern = cljs.core.nth.call(null,vec__24473,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__16305__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__16293__auto__ = src_STAR_;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__16293__auto____$1)){
return pattern_STAR_;
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__16305__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
var or__16305__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__16305__auto____$2)){
return or__16305__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__24475 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__24475__$1 = (((G__24475 == null))?null:(new datascript.parser.FindRel(G__24475,null,null,null)));
return G__24475__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__24477 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__24477__$1 = (((G__24477 == null))?null:(new datascript.parser.FindColl(G__24477,null,null,null)));
return G__24477__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__24479 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__24479__$1 = (((G__24479 == null))?null:(new datascript.parser.FindScalar(G__24479,null,null,null)));
return G__24479__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__24481 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__24481__$1 = (((G__24481 == null))?null:(new datascript.parser.FindTuple(G__24481,null,null,null)));
return G__24481__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__16305__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
var or__16305__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__16305__auto____$2)){
return or__16305__auto____$2;
} else {
var or__16305__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__16305__auto____$3)){
return or__16305__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__16305__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__16305__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__16305__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24486,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24488 = (((k24486 instanceof cljs.core.Keyword))?k24486.fqn:null);
switch (G__24488) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24486,else__16922__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Pattern{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24485){
var self__ = this;
var G__24485__$1 = this;
return (new cljs.core.RecordIter((0),G__24485__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24485){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24489 = cljs.core.keyword_identical_QMARK_;
var expr__24490 = k__16927__auto__;
if(cljs.core.truth_(pred__24489.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__24490))){
return (new datascript.parser.Pattern(G__24485,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24489.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__24490))){
return (new datascript.parser.Pattern(self__.source,G__24485,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24485),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24485){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__24485,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24482){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f24482),datascript.parser.postwalk.call(null,self__.pattern,f24482),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24483,acc24484){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24483,self__.pattern,datascript.parser.collect.call(null,pred24483,self__.source,acc24484));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24484){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24484,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__24487){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__24487),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__24487),null,cljs.core.dissoc.call(null,G__24487,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24497,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24499 = (((k24497 instanceof cljs.core.Keyword))?k24497.fqn:null);
switch (G__24499) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24497,else__16922__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Predicate{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24496){
var self__ = this;
var G__24496__$1 = this;
return (new cljs.core.RecordIter((0),G__24496__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24496){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24500 = cljs.core.keyword_identical_QMARK_;
var expr__24501 = k__16927__auto__;
if(cljs.core.truth_(pred__24500.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__24501))){
return (new datascript.parser.Predicate(G__24496,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24500.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24501))){
return (new datascript.parser.Predicate(self__.fn,G__24496,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24496),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24496){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__24496,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24493){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f24493),datascript.parser.postwalk.call(null,self__.args,f24493),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24494,acc24495){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24494,self__.args,datascript.parser.collect.call(null,pred24494,self__.fn,acc24495));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24495){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24495,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__24498){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__24498),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24498),null,cljs.core.dissoc.call(null,G__24498,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24508,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24510 = (((k24508 instanceof cljs.core.Keyword))?k24508.fqn:null);
switch (G__24510) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24508,else__16922__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Function{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24507){
var self__ = this;
var G__24507__$1 = this;
return (new cljs.core.RecordIter((0),G__24507__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24507){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24511 = cljs.core.keyword_identical_QMARK_;
var expr__24512 = k__16927__auto__;
if(cljs.core.truth_(pred__24511.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__24512))){
return (new datascript.parser.Function(G__24507,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24511.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24512))){
return (new datascript.parser.Function(self__.fn,G__24507,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24511.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__24512))){
return (new datascript.parser.Function(self__.fn,self__.args,G__24507,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24507),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24507){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__24507,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24504){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f24504),datascript.parser.postwalk.call(null,self__.args,f24504),datascript.parser.postwalk.call(null,self__.binding,f24504),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24505,acc24506){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24505,self__.binding,datascript.parser.collect.call(null,pred24505,self__.args,datascript.parser.collect.call(null,pred24505,self__.fn,acc24506)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24506){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24506,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__24509){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__24509),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24509),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__24509),null,cljs.core.dissoc.call(null,G__24509,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24519,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24521 = (((k24519 instanceof cljs.core.Keyword))?k24519.fqn:null);
switch (G__24521) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24519,else__16922__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24518){
var self__ = this;
var G__24518__$1 = this;
return (new cljs.core.RecordIter((0),G__24518__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24518){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24522 = cljs.core.keyword_identical_QMARK_;
var expr__24523 = k__16927__auto__;
if(cljs.core.truth_(pred__24522.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__24523))){
return (new datascript.parser.RuleExpr(G__24518,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24522.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__24523))){
return (new datascript.parser.RuleExpr(self__.source,G__24518,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24522.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__24523))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__24518,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24518),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24518){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__24518,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24515){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f24515),datascript.parser.postwalk.call(null,self__.name,f24515),datascript.parser.postwalk.call(null,self__.args,f24515),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24516,acc24517){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24516,self__.args,datascript.parser.collect.call(null,pred24516,self__.name,datascript.parser.collect.call(null,pred24516,self__.source,acc24517)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24517){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24517,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__24520){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__24520),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__24520),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24520),null,cljs.core.dissoc.call(null,G__24520,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24530,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24532 = (((k24530 instanceof cljs.core.Keyword))?k24530.fqn:null);
switch (G__24532) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24530,else__16922__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Not{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24529){
var self__ = this;
var G__24529__$1 = this;
return (new cljs.core.RecordIter((0),G__24529__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24529){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24533 = cljs.core.keyword_identical_QMARK_;
var expr__24534 = k__16927__auto__;
if(cljs.core.truth_(pred__24533.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__24534))){
return (new datascript.parser.Not(G__24529,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24533.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__24534))){
return (new datascript.parser.Not(self__.source,G__24529,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24533.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__24534))){
return (new datascript.parser.Not(self__.source,self__.vars,G__24529,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24529),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24529){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__24529,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24526){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f24526),datascript.parser.postwalk.call(null,self__.vars,f24526),datascript.parser.postwalk.call(null,self__.clauses,f24526),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24527,acc24528){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24527,self__.clauses,datascript.parser.collect.call(null,pred24527,self__.vars,datascript.parser.collect.call(null,pred24527,self__.source,acc24528)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24528){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24528,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__24531){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__24531),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__24531),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__24531),null,cljs.core.dissoc.call(null,G__24531,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24541,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24543 = (((k24541 instanceof cljs.core.Keyword))?k24541.fqn:null);
switch (G__24543) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24541,else__16922__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Or{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24540){
var self__ = this;
var G__24540__$1 = this;
return (new cljs.core.RecordIter((0),G__24540__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24540){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24544 = cljs.core.keyword_identical_QMARK_;
var expr__24545 = k__16927__auto__;
if(cljs.core.truth_(pred__24544.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__24545))){
return (new datascript.parser.Or(G__24540,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24544.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__24545))){
return (new datascript.parser.Or(self__.source,G__24540,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24544.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__24545))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__24540,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24540),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24540){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__24540,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24537){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f24537),datascript.parser.postwalk.call(null,self__.rule_vars,f24537),datascript.parser.postwalk.call(null,self__.clauses,f24537),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24538,acc24539){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24538,self__.clauses,datascript.parser.collect.call(null,pred24538,self__.rule_vars,datascript.parser.collect.call(null,pred24538,self__.source,acc24539)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24539){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24539,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__24542){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__24542),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__24542),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__24542),null,cljs.core.dissoc.call(null,G__24542,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24552,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24554 = (((k24552 instanceof cljs.core.Keyword))?k24552.fqn:null);
switch (G__24554) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24552,else__16922__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.And{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24551){
var self__ = this;
var G__24551__$1 = this;
return (new cljs.core.RecordIter((0),G__24551__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24551){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24555 = cljs.core.keyword_identical_QMARK_;
var expr__24556 = k__16927__auto__;
if(cljs.core.truth_(pred__24555.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__24556))){
return (new datascript.parser.And(G__24551,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24551),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24551){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__24551,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24548){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f24548),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24549,acc24550){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24549,self__.clauses,acc24550);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24550){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc24550,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__24553){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__24553),null,cljs.core.dissoc.call(null,G__24553,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__16305__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24560 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__24560,(0),null);
var next_form = cljs.core.nth.call(null,vec__24560,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__24562 = form;
var fn = cljs.core.nth.call(null,vec__24562,(0),null);
var args = cljs.core.nthnext.call(null,vec__24562,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__16305__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__16293__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16293__auto__)){
return args_STAR_;
} else {
return and__16293__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24564 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__24564,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__24564,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__24567 = form;
var call = cljs.core.nth.call(null,vec__24567,(0),null);
var binding = cljs.core.nth.call(null,vec__24567,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24568 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__24568,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__24568,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24571 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__24571,(0),null);
var next_form = cljs.core.nth.call(null,vec__24571,(1),null);
var vec__24572 = next_form;
var name = cljs.core.nth.call(null,vec__24572,(0),null);
var args = cljs.core.nthnext.call(null,vec__24572,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_24575 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_24575)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_24575)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24578 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__24578,(0),null);
var next_form = cljs.core.nth.call(null,vec__24578,(1),null);
var vec__24579 = next_form;
var sym = cljs.core.nth.call(null,vec__24579,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__24579,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24582 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__24582,(0),null);
var next_form = cljs.core.nth.call(null,vec__24582,(1),null);
var vec__24583 = next_form;
var sym = cljs.core.nth.call(null,vec__24583,(0),null);
var vars = cljs.core.nth.call(null,vec__24583,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__24583,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__16293__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16293__auto__)){
return clauses_STAR_;
} else {
return and__16293__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__24592 = clause;
var map__24592__$1 = ((((!((map__24592 == null)))?((((map__24592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24592):map__24592);
var map__24593 = cljs.core.get.call(null,map__24592__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__24593__$1 = ((((!((map__24593 == null)))?((((map__24593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24593):map__24593);
var required = cljs.core.get.call(null,map__24593__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__24593__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__24592__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__24596_24600 = cljs.core.seq.call(null,clauses);
var chunk__24597_24601 = null;
var count__24598_24602 = (0);
var i__24599_24603 = (0);
while(true){
if((i__24599_24603 < count__24598_24602)){
var clause_24604__$1 = cljs.core._nth.call(null,chunk__24597_24601,i__24599_24603);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_24604__$1], null),form);

var G__24605 = seq__24596_24600;
var G__24606 = chunk__24597_24601;
var G__24607 = count__24598_24602;
var G__24608 = (i__24599_24603 + (1));
seq__24596_24600 = G__24605;
chunk__24597_24601 = G__24606;
count__24598_24602 = G__24607;
i__24599_24603 = G__24608;
continue;
} else {
var temp__4425__auto___24609 = cljs.core.seq.call(null,seq__24596_24600);
if(temp__4425__auto___24609){
var seq__24596_24610__$1 = temp__4425__auto___24609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24596_24610__$1)){
var c__17108__auto___24611 = cljs.core.chunk_first.call(null,seq__24596_24610__$1);
var G__24612 = cljs.core.chunk_rest.call(null,seq__24596_24610__$1);
var G__24613 = c__17108__auto___24611;
var G__24614 = cljs.core.count.call(null,c__17108__auto___24611);
var G__24615 = (0);
seq__24596_24600 = G__24612;
chunk__24597_24601 = G__24613;
count__24598_24602 = G__24614;
i__24599_24603 = G__24615;
continue;
} else {
var clause_24616__$1 = cljs.core.first.call(null,seq__24596_24610__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_24616__$1], null),form);

var G__24617 = cljs.core.next.call(null,seq__24596_24610__$1);
var G__24618 = null;
var G__24619 = (0);
var G__24620 = (0);
seq__24596_24600 = G__24617;
chunk__24597_24601 = G__24618;
count__24598_24602 = G__24619;
i__24599_24603 = G__24620;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24623 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__24623,(0),null);
var next_form = cljs.core.nth.call(null,vec__24623,(1),null);
var vec__24624 = next_form;
var sym = cljs.core.nth.call(null,vec__24624,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__24624,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__24627 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__24627,(0),null);
var next_form = cljs.core.nth.call(null,vec__24627,(1),null);
var vec__24628 = next_form;
var sym = cljs.core.nth.call(null,vec__24628,(0),null);
var vars = cljs.core.nth.call(null,vec__24628,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__24628,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__16293__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16293__auto__)){
return clauses_STAR_;
} else {
return and__16293__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__16305__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
var or__16305__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__16305__auto____$2)){
return or__16305__auto____$2;
} else {
var or__16305__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__16305__auto____$3)){
return or__16305__auto____$3;
} else {
var or__16305__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__16305__auto____$4)){
return or__16305__auto____$4;
} else {
var or__16305__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__16305__auto____$5)){
return or__16305__auto____$5;
} else {
var or__16305__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__16305__auto____$6)){
return or__16305__auto____$6;
} else {
var or__16305__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__16305__auto____$7)){
return or__16305__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__16305__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24634,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24636 = (((k24634 instanceof cljs.core.Keyword))?k24634.fqn:null);
switch (G__24636) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24634,else__16922__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24633){
var self__ = this;
var G__24633__$1 = this;
return (new cljs.core.RecordIter((0),G__24633__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24633){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24637 = cljs.core.keyword_identical_QMARK_;
var expr__24638 = k__16927__auto__;
if(cljs.core.truth_(pred__24637.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__24638))){
return (new datascript.parser.RuleBranch(G__24633,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24637.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__24638))){
return (new datascript.parser.RuleBranch(self__.vars,G__24633,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24633),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24633){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__24633,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24630){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f24630),datascript.parser.postwalk.call(null,self__.clauses,f24630),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24631,acc24632){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24631,self__.clauses,datascript.parser.collect.call(null,pred24631,self__.vars,acc24632));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24632){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24632,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__24635){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__24635),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__24635),null,cljs.core.dissoc.call(null,G__24635,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24645,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24647 = (((k24645 instanceof cljs.core.Keyword))?k24645.fqn:null);
switch (G__24647) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24645,else__16922__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Rule{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24644){
var self__ = this;
var G__24644__$1 = this;
return (new cljs.core.RecordIter((0),G__24644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24644){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24648 = cljs.core.keyword_identical_QMARK_;
var expr__24649 = k__16927__auto__;
if(cljs.core.truth_(pred__24648.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__24649))){
return (new datascript.parser.Rule(G__24644,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24648.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__24649))){
return (new datascript.parser.Rule(self__.name,G__24644,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24644),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24644){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__24644,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24641){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f24641),datascript.parser.postwalk.call(null,self__.branches,f24641),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24642,acc24643){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24642,self__.branches,datascript.parser.collect.call(null,pred24642,self__.name,acc24643));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24643){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24643,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__24646){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__24646),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__24646),null,cljs.core.dissoc.call(null,G__24646,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__24652_SHARP_){
return (p1__24652_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__24653_SHARP_){
return (p1__24653_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__24656 = form;
var head = cljs.core.nth.call(null,vec__24656,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__24656,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__24657 = head;
var name = cljs.core.nth.call(null,vec__24657,(0),null);
var vars = cljs.core.nthnext.call(null,vec__24657,(1));
var name_STAR_ = (function (){var or__16305__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__16305__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__24664 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__24666 = null;
var count__24667 = (0);
var i__24668 = (0);
while(true){
if((i__24668 < count__24667)){
var b = cljs.core._nth.call(null,chunk__24666,i__24668);
var vars_24670 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_24670))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_24670)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__24671 = seq__24664;
var G__24672 = chunk__24666;
var G__24673 = count__24667;
var G__24674 = (i__24668 + (1));
seq__24664 = G__24671;
chunk__24666 = G__24672;
count__24667 = G__24673;
i__24668 = G__24674;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24664);
if(temp__4425__auto__){
var seq__24664__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24664__$1)){
var c__17108__auto__ = cljs.core.chunk_first.call(null,seq__24664__$1);
var G__24675 = cljs.core.chunk_rest.call(null,seq__24664__$1);
var G__24676 = c__17108__auto__;
var G__24677 = cljs.core.count.call(null,c__17108__auto__);
var G__24678 = (0);
seq__24664 = G__24675;
chunk__24666 = G__24676;
count__24667 = G__24677;
i__24668 = G__24678;
continue;
} else {
var b = cljs.core.first.call(null,seq__24664__$1);
var vars_24679 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_24679))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_24679)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__24680 = cljs.core.next.call(null,seq__24664__$1);
var G__24681 = null;
var G__24682 = (0);
var G__24683 = (0);
seq__24664 = G__24680;
chunk__24666 = G__24681;
count__24667 = G__24682;
i__24668 = G__24683;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__17077__auto__ = (function datascript$parser$parse_rules_$_iter__24693(s__24694){
return (new cljs.core.LazySeq(null,(function (){
var s__24694__$1 = s__24694;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24694__$1);
if(temp__4425__auto__){
var s__24694__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24694__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__24694__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__24696 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__24695 = (0);
while(true){
if((i__24695 < size__17076__auto__)){
var vec__24699 = cljs.core._nth.call(null,c__17075__auto__,i__24695);
var name = cljs.core.nth.call(null,vec__24699,(0),null);
var branches = cljs.core.nth.call(null,vec__24699,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__24695,vec__24699,name,branches,c__17075__auto__,size__17076__auto__,b__24696,s__24694__$2,temp__4425__auto__){
return (function (p1__24684_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__24684_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__24684_SHARP_),null,null,null));
});})(i__24695,vec__24699,name,branches,c__17075__auto__,size__17076__auto__,b__24696,s__24694__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__24696,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__24701 = (i__24695 + (1));
i__24695 = G__24701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24696),datascript$parser$parse_rules_$_iter__24693.call(null,cljs.core.chunk_rest.call(null,s__24694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24696),null);
}
} else {
var vec__24700 = cljs.core.first.call(null,s__24694__$2);
var name = cljs.core.nth.call(null,vec__24700,(0),null);
var branches = cljs.core.nth.call(null,vec__24700,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__24700,name,branches,s__24694__$2,temp__4425__auto__){
return (function (p1__24684_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__24684_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__24684_SHARP_),null,null,null));
});})(vec__24700,name,branches,s__24694__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__24693.call(null,cljs.core.rest.call(null,s__24694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k24706,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__24708 = (((k24706 instanceof cljs.core.Keyword))?k24706.fqn:null);
switch (G__24708) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24706,else__16922__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#datascript.parser.Query{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24705){
var self__ = this;
var G__24705__$1 = this;
return (new cljs.core.RecordIter((0),G__24705__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
var self__ = this;
var this__16914__auto____$1 = this;
var h__16740__auto__ = self__.__hash;
if(!((h__16740__auto__ == null))){
return h__16740__auto__;
} else {
var h__16740__auto____$1 = cljs.core.hash_imap.call(null,this__16914__auto____$1);
self__.__hash = h__16740__auto____$1;

return h__16740__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
var self__ = this;
var this__16915__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16293__auto__ = other__16916__auto__;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = (this__16915__auto____$1.constructor === other__16916__auto__.constructor);
if(and__16293__auto____$1){
return cljs.core.equiv_map.call(null,this__16915__auto____$1,other__16916__auto__);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__24705){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__24709 = cljs.core.keyword_identical_QMARK_;
var expr__24710 = k__16927__auto__;
if(cljs.core.truth_(pred__24709.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__24710))){
return (new datascript.parser.Query(G__24705,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24709.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__24710))){
return (new datascript.parser.Query(self__.find,G__24705,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24709.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__24710))){
return (new datascript.parser.Query(self__.find,self__.with$,G__24705,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24709.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__24710))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__24705,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__24705),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__24705){
var self__ = this;
var this__16918__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__24705,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21088__auto__,f24702){
var self__ = this;
var this__21088__auto____$1 = this;
var new__21089__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f24702),datascript.parser.postwalk.call(null,self__.with$,f24702),datascript.parser.postwalk.call(null,self__.in$,f24702),datascript.parser.postwalk.call(null,self__.where,f24702),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__21088__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__21090__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__21089__auto__,meta__21090__auto__);
} else {
return new__21089__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21091__auto__,pred24703,acc24704){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect.call(null,pred24703,self__.where,datascript.parser.collect.call(null,pred24703,self__.in$,datascript.parser.collect.call(null,pred24703,self__.with$,datascript.parser.collect.call(null,pred24703,self__.find,acc24704))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21091__auto__,acc24704){
var self__ = this;
var ___21091__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc24704,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__24707){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__24707),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__24707),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__24707),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__24707),null,cljs.core.dissoc.call(null,G__24707,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__24713 = parsed;
var G__24714 = q;
var G__24715 = cljs.core.next.call(null,qs);
parsed = G__24713;
key = G__24714;
qs = G__24715;
continue;
} else {
var G__24716 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__24717 = key;
var G__24718 = cljs.core.next.call(null,qs);
parsed = G__24716;
key = G__24717;
qs = G__24718;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_24725 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_24726 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_24727 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_24728 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_24729 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_24725,with_vars_24726),clojure.set.union.call(null,where_vars_24728,in_vars_24727));
var shared_24730 = clojure.set.intersection.call(null,find_vars_24725,with_vars_24726);
if(cljs.core.empty_QMARK_.call(null,unknown_24729)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_24729)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_24729,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_24730)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_24730)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_24730,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_24731 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_24732 = datascript.parser.collect.call(null,((function (in_vars_24731){
return (function (p1__24719_SHARP_){
return (p1__24719_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_24731))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_24733 = datascript.parser.collect.call(null,((function (in_vars_24731,in_sources_24732){
return (function (p1__24720_SHARP_){
return (p1__24720_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_24731,in_sources_24732))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16293__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_24731);
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_24732);
if(cljs.core.truth_(and__16293__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_24733);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_24734 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_24734))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_24735 = datascript.parser.collect.call(null,(function (p1__24721_SHARP_){
return (p1__24721_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_24736 = datascript.parser.collect.call(null,((function (in_sources_24735){
return (function (p1__24722_SHARP_){
return (p1__24722_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_24735))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_24737 = clojure.set.difference.call(null,where_sources_24736,in_sources_24735);
if(cljs.core.empty_QMARK_.call(null,unknown_24737)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_24737)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_24737,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__24723_SHARP_){
return (p1__24723_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__24724_SHARP_){
return (p1__24724_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map