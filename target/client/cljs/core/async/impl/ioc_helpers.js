// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843 = (function (fn_handler,f,meta29844){
this.fn_handler = fn_handler;
this.f = f;
this.meta29844 = meta29844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29845,meta29844__$1){
var self__ = this;
var _29845__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843(self__.fn_handler,self__.f,meta29844__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29845){
var self__ = this;
var _29845__$1 = this;
return self__.meta29844;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29844","meta29844",-417488360,null)], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29843";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29843");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers29843 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers29843(fn_handler__$1,f__$1,meta29844){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843(fn_handler__$1,f__$1,meta29844));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29843(cljs$core$async$impl$ioc_helpers$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e29847){if((e29847 instanceof Object)){
var ex = e29847;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));

throw ex;
} else {
throw e29847;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4423__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_29850_29852 = state;
(statearr_29850_29852[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_29850_29852[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_29851_29853 = state;
(statearr_29851_29853[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_29851_29853[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_29856_29858 = state;
(statearr_29856_29858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_29856_29858[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_29857_29859 = state;
(statearr_29857_29859[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_29857_29859[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){
return null;
});})(c))
));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16919__auto__,k__16920__auto__){
var self__ = this;
var this__16919__auto____$1 = this;
return cljs.core._lookup.call(null,this__16919__auto____$1,k__16920__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16921__auto__,k29861,else__16922__auto__){
var self__ = this;
var this__16921__auto____$1 = this;
var G__29863 = (((k29861 instanceof cljs.core.Keyword))?k29861.fqn:null);
switch (G__29863) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29861,else__16922__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__16933__auto__,writer__16934__auto__,opts__16935__auto__){
var self__ = this;
var this__16933__auto____$1 = this;
var pr_pair__16936__auto__ = ((function (this__16933__auto____$1){
return (function (keyval__16937__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,cljs.core.pr_writer,""," ","",opts__16935__auto__,keyval__16937__auto__);
});})(this__16933__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__16934__auto__,pr_pair__16936__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__16935__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$ = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29860){
var self__ = this;
var G__29860__$1 = this;
return (new cljs.core.RecordIter((0),G__29860__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16917__auto__){
var self__ = this;
var this__16917__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16913__auto__){
var self__ = this;
var this__16913__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16923__auto__){
var self__ = this;
var this__16923__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16914__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16915__auto__,other__16916__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16928__auto__,k__16929__auto__){
var self__ = this;
var this__16928__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__16929__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16928__auto____$1),self__.__meta),k__16929__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__16929__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16926__auto__,k__16927__auto__,G__29860){
var self__ = this;
var this__16926__auto____$1 = this;
var pred__29864 = cljs.core.keyword_identical_QMARK_;
var expr__29865 = k__16927__auto__;
if(cljs.core.truth_(pred__29864.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),expr__29865))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29860,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29864.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),expr__29865))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29860,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29864.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),expr__29865))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29860,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29864.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),expr__29865))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29860,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29864.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__29865))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29860,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16927__auto__,G__29860),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__16931__auto__){
var self__ = this;
var this__16931__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16918__auto__,G__29860){
var self__ = this;
var this__16918__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29860,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16924__auto__,entry__16925__auto__){
var self__ = this;
var this__16924__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16925__auto__)){
return cljs.core._assoc.call(null,this__16924__auto____$1,cljs.core._nth.call(null,entry__16925__auto__,(0)),cljs.core._nth.call(null,entry__16925__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16924__auto____$1,entry__16925__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__16953__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__16953__auto__,writer__16954__auto__){
return cljs.core._write.call(null,writer__16954__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__29862){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__29862),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__29862),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__29862),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__29862),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__29862),null,cljs.core.dissoc.call(null,G__29862,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_29869 = state;
(statearr_29869[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_29869;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__16293__auto__ = exception;
if(cljs.core.truth_(and__16293__auto__)){
return cljs.core.not.call(null,exception_frame);
} else {
return and__16293__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__16293__auto__ = exception;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = catch_block;
if(cljs.core.truth_(and__16293__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
var statearr_29875 = state;
(statearr_29875[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_29875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_29875[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_29875[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null));

return statearr_29875;
} else {
if(cljs.core.truth_((function (){var and__16293__auto__ = exception;
if(cljs.core.truth_(and__16293__auto__)){
return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__16293__auto__;
}
})())){
var statearr_29876_29880 = state;
(statearr_29876_29880[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__29881 = state;
state = G__29881;
continue;
} else {
if(cljs.core.truth_((function (){var and__16293__auto__ = exception;
if(cljs.core.truth_(and__16293__auto__)){
var and__16293__auto____$1 = cljs.core.not.call(null,catch_block);
if(and__16293__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__16293__auto____$1;
}
} else {
return and__16293__auto__;
}
})())){
var statearr_29877 = state;
(statearr_29877[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29877[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_29877;
} else {
if(cljs.core.truth_((function (){var and__16293__auto__ = cljs.core.not.call(null,exception);
if(and__16293__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__16293__auto__;
}
})())){
var statearr_29878 = state;
(statearr_29878[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29878[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_29878;
} else {
if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_29879 = state;
(statearr_29879[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29879[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_29879;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map