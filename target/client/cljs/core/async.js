// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async27104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27104 = (function (fn_handler,f,meta27105){
this.fn_handler = fn_handler;
this.f = f;
this.meta27105 = meta27105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27106,meta27105__$1){
var self__ = this;
var _27106__$1 = this;
return (new cljs.core.async.t_cljs$core$async27104(self__.fn_handler,self__.f,meta27105__$1));
});

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27106){
var self__ = this;
var _27106__$1 = this;
return self__.meta27105;
});

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27105","meta27105",-1195343641,null)], null);
});

cljs.core.async.t_cljs$core$async27104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27104";

cljs.core.async.t_cljs$core$async27104.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async27104");
});

cljs.core.async.__GT_t_cljs$core$async27104 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27104(fn_handler__$1,f__$1,meta27105){
return (new cljs.core.async.t_cljs$core$async27104(fn_handler__$1,f__$1,meta27105));
});

}

return (new cljs.core.async.t_cljs$core$async27104(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27109 = [];
var len__17363__auto___27112 = arguments.length;
var i__17364__auto___27113 = (0);
while(true){
if((i__17364__auto___27113 < len__17363__auto___27112)){
args27109.push((arguments[i__17364__auto___27113]));

var G__27114 = (i__17364__auto___27113 + (1));
i__17364__auto___27113 = G__27114;
continue;
} else {
}
break;
}

var G__27111 = args27109.length;
switch (G__27111) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27109.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27116 = [];
var len__17363__auto___27119 = arguments.length;
var i__17364__auto___27120 = (0);
while(true){
if((i__17364__auto___27120 < len__17363__auto___27119)){
args27116.push((arguments[i__17364__auto___27120]));

var G__27121 = (i__17364__auto___27120 + (1));
i__17364__auto___27120 = G__27121;
continue;
} else {
}
break;
}

var G__27118 = args27116.length;
switch (G__27118) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27116.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27123 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27123);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27123,ret){
return (function (){
return fn1.call(null,val_27123);
});})(val_27123,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27124 = [];
var len__17363__auto___27127 = arguments.length;
var i__17364__auto___27128 = (0);
while(true){
if((i__17364__auto___27128 < len__17363__auto___27127)){
args27124.push((arguments[i__17364__auto___27128]));

var G__27129 = (i__17364__auto___27128 + (1));
i__17364__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var G__27126 = args27124.length;
switch (G__27126) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27124.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17208__auto___27131 = n;
var x_27132 = (0);
while(true){
if((x_27132 < n__17208__auto___27131)){
(a[x_27132] = (0));

var G__27133 = (x_27132 + (1));
x_27132 = G__27133;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27134 = (i + (1));
i = G__27134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27138 = (function (alt_flag,flag,meta27139){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27139 = meta27139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27140,meta27139__$1){
var self__ = this;
var _27140__$1 = this;
return (new cljs.core.async.t_cljs$core$async27138(self__.alt_flag,self__.flag,meta27139__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27140){
var self__ = this;
var _27140__$1 = this;
return self__.meta27139;
});})(flag))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27138.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27139","meta27139",-1001149832,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27138";

cljs.core.async.t_cljs$core$async27138.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async27138");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27138 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27138(alt_flag__$1,flag__$1,meta27139){
return (new cljs.core.async.t_cljs$core$async27138(alt_flag__$1,flag__$1,meta27139));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27138(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27144 = (function (alt_handler,flag,cb,meta27145){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27145 = meta27145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27146,meta27145__$1){
var self__ = this;
var _27146__$1 = this;
return (new cljs.core.async.t_cljs$core$async27144(self__.alt_handler,self__.flag,self__.cb,meta27145__$1));
});

cljs.core.async.t_cljs$core$async27144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27146){
var self__ = this;
var _27146__$1 = this;
return self__.meta27145;
});

cljs.core.async.t_cljs$core$async27144.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27145","meta27145",-812121662,null)], null);
});

cljs.core.async.t_cljs$core$async27144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27144";

cljs.core.async.t_cljs$core$async27144.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async27144");
});

cljs.core.async.__GT_t_cljs$core$async27144 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27144(alt_handler__$1,flag__$1,cb__$1,meta27145){
return (new cljs.core.async.t_cljs$core$async27144(alt_handler__$1,flag__$1,cb__$1,meta27145));
});

}

return (new cljs.core.async.t_cljs$core$async27144(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27147_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27148_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16305__auto__ = wport;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27149 = (i + (1));
i = G__27149;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16305__auto__ = ret;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16293__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16293__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16293__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17370__auto__ = [];
var len__17363__auto___27155 = arguments.length;
var i__17364__auto___27156 = (0);
while(true){
if((i__17364__auto___27156 < len__17363__auto___27155)){
args__17370__auto__.push((arguments[i__17364__auto___27156]));

var G__27157 = (i__17364__auto___27156 + (1));
i__17364__auto___27156 = G__27157;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((1) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17371__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27152){
var map__27153 = p__27152;
var map__27153__$1 = ((((!((map__27153 == null)))?((((map__27153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27153):map__27153);
var opts = map__27153__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27150){
var G__27151 = cljs.core.first.call(null,seq27150);
var seq27150__$1 = cljs.core.next.call(null,seq27150);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27151,seq27150__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27158 = [];
var len__17363__auto___27208 = arguments.length;
var i__17364__auto___27209 = (0);
while(true){
if((i__17364__auto___27209 < len__17363__auto___27208)){
args27158.push((arguments[i__17364__auto___27209]));

var G__27210 = (i__17364__auto___27209 + (1));
i__17364__auto___27209 = G__27210;
continue;
} else {
}
break;
}

var G__27160 = args27158.length;
switch (G__27160) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27158.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20225__auto___27212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___27212){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___27212){
return (function (state_27184){
var state_val_27185 = (state_27184[(1)]);
if((state_val_27185 === (7))){
var inst_27180 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27186_27213 = state_27184__$1;
(statearr_27186_27213[(2)] = inst_27180);

(statearr_27186_27213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (1))){
var state_27184__$1 = state_27184;
var statearr_27187_27214 = state_27184__$1;
(statearr_27187_27214[(2)] = null);

(statearr_27187_27214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (4))){
var inst_27163 = (state_27184[(7)]);
var inst_27163__$1 = (state_27184[(2)]);
var inst_27164 = (inst_27163__$1 == null);
var state_27184__$1 = (function (){var statearr_27188 = state_27184;
(statearr_27188[(7)] = inst_27163__$1);

return statearr_27188;
})();
if(cljs.core.truth_(inst_27164)){
var statearr_27189_27215 = state_27184__$1;
(statearr_27189_27215[(1)] = (5));

} else {
var statearr_27190_27216 = state_27184__$1;
(statearr_27190_27216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (13))){
var state_27184__$1 = state_27184;
var statearr_27191_27217 = state_27184__$1;
(statearr_27191_27217[(2)] = null);

(statearr_27191_27217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (6))){
var inst_27163 = (state_27184[(7)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27184__$1,(11),to,inst_27163);
} else {
if((state_val_27185 === (3))){
var inst_27182 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27184__$1,inst_27182);
} else {
if((state_val_27185 === (12))){
var state_27184__$1 = state_27184;
var statearr_27192_27218 = state_27184__$1;
(statearr_27192_27218[(2)] = null);

(statearr_27192_27218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (2))){
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27184__$1,(4),from);
} else {
if((state_val_27185 === (11))){
var inst_27173 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27173)){
var statearr_27193_27219 = state_27184__$1;
(statearr_27193_27219[(1)] = (12));

} else {
var statearr_27194_27220 = state_27184__$1;
(statearr_27194_27220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (9))){
var state_27184__$1 = state_27184;
var statearr_27195_27221 = state_27184__$1;
(statearr_27195_27221[(2)] = null);

(statearr_27195_27221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (5))){
var state_27184__$1 = state_27184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27196_27222 = state_27184__$1;
(statearr_27196_27222[(1)] = (8));

} else {
var statearr_27197_27223 = state_27184__$1;
(statearr_27197_27223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (14))){
var inst_27178 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27198_27224 = state_27184__$1;
(statearr_27198_27224[(2)] = inst_27178);

(statearr_27198_27224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (10))){
var inst_27170 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27199_27225 = state_27184__$1;
(statearr_27199_27225[(2)] = inst_27170);

(statearr_27199_27225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (8))){
var inst_27167 = cljs.core.async.close_BANG_.call(null,to);
var state_27184__$1 = state_27184;
var statearr_27200_27226 = state_27184__$1;
(statearr_27200_27226[(2)] = inst_27167);

(statearr_27200_27226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___27212))
;
return ((function (switch__20160__auto__,c__20225__auto___27212){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_27204 = [null,null,null,null,null,null,null,null];
(statearr_27204[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_27204[(1)] = (1));

return statearr_27204;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_27184){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27205){if((e27205 instanceof Object)){
var ex__20164__auto__ = e27205;
var statearr_27206_27227 = state_27184;
(statearr_27206_27227[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27228 = state_27184;
state_27184 = G__27228;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_27184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_27184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___27212))
})();
var state__20227__auto__ = (function (){var statearr_27207 = f__20226__auto__.call(null);
(statearr_27207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___27212);

return statearr_27207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___27212))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27412){
var vec__27413 = p__27412;
var v = cljs.core.nth.call(null,vec__27413,(0),null);
var p = cljs.core.nth.call(null,vec__27413,(1),null);
var job = vec__27413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20225__auto___27595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___27595,res,vec__27413,v,p,job,jobs,results){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___27595,res,vec__27413,v,p,job,jobs,results){
return (function (state_27418){
var state_val_27419 = (state_27418[(1)]);
if((state_val_27419 === (1))){
var state_27418__$1 = state_27418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27418__$1,(2),res,v);
} else {
if((state_val_27419 === (2))){
var inst_27415 = (state_27418[(2)]);
var inst_27416 = cljs.core.async.close_BANG_.call(null,res);
var state_27418__$1 = (function (){var statearr_27420 = state_27418;
(statearr_27420[(7)] = inst_27415);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27418__$1,inst_27416);
} else {
return null;
}
}
});})(c__20225__auto___27595,res,vec__27413,v,p,job,jobs,results))
;
return ((function (switch__20160__auto__,c__20225__auto___27595,res,vec__27413,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0 = (function (){
var statearr_27424 = [null,null,null,null,null,null,null,null];
(statearr_27424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__);

(statearr_27424[(1)] = (1));

return statearr_27424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1 = (function (state_27418){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27425){if((e27425 instanceof Object)){
var ex__20164__auto__ = e27425;
var statearr_27426_27596 = state_27418;
(statearr_27426_27596[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27597 = state_27418;
state_27418 = G__27597;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = function(state_27418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1.call(this,state_27418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___27595,res,vec__27413,v,p,job,jobs,results))
})();
var state__20227__auto__ = (function (){var statearr_27427 = f__20226__auto__.call(null);
(statearr_27427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___27595);

return statearr_27427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___27595,res,vec__27413,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27428){
var vec__27429 = p__27428;
var v = cljs.core.nth.call(null,vec__27429,(0),null);
var p = cljs.core.nth.call(null,vec__27429,(1),null);
var job = vec__27429;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17208__auto___27598 = n;
var __27599 = (0);
while(true){
if((__27599 < n__17208__auto___27598)){
var G__27430_27600 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27430_27600) {
case "compute":
var c__20225__auto___27602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27599,c__20225__auto___27602,G__27430_27600,n__17208__auto___27598,jobs,results,process,async){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (__27599,c__20225__auto___27602,G__27430_27600,n__17208__auto___27598,jobs,results,process,async){
return (function (state_27443){
var state_val_27444 = (state_27443[(1)]);
if((state_val_27444 === (1))){
var state_27443__$1 = state_27443;
var statearr_27445_27603 = state_27443__$1;
(statearr_27445_27603[(2)] = null);

(statearr_27445_27603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (2))){
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(4),jobs);
} else {
if((state_val_27444 === (3))){
var inst_27441 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27443__$1,inst_27441);
} else {
if((state_val_27444 === (4))){
var inst_27433 = (state_27443[(2)]);
var inst_27434 = process.call(null,inst_27433);
var state_27443__$1 = state_27443;
if(cljs.core.truth_(inst_27434)){
var statearr_27446_27604 = state_27443__$1;
(statearr_27446_27604[(1)] = (5));

} else {
var statearr_27447_27605 = state_27443__$1;
(statearr_27447_27605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (5))){
var state_27443__$1 = state_27443;
var statearr_27448_27606 = state_27443__$1;
(statearr_27448_27606[(2)] = null);

(statearr_27448_27606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (6))){
var state_27443__$1 = state_27443;
var statearr_27449_27607 = state_27443__$1;
(statearr_27449_27607[(2)] = null);

(statearr_27449_27607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (7))){
var inst_27439 = (state_27443[(2)]);
var state_27443__$1 = state_27443;
var statearr_27450_27608 = state_27443__$1;
(statearr_27450_27608[(2)] = inst_27439);

(statearr_27450_27608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27599,c__20225__auto___27602,G__27430_27600,n__17208__auto___27598,jobs,results,process,async))
;
return ((function (__27599,switch__20160__auto__,c__20225__auto___27602,G__27430_27600,n__17208__auto___27598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0 = (function (){
var statearr_27454 = [null,null,null,null,null,null,null];
(statearr_27454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__);

(statearr_27454[(1)] = (1));

return statearr_27454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1 = (function (state_27443){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27455){if((e27455 instanceof Object)){
var ex__20164__auto__ = e27455;
var statearr_27456_27609 = state_27443;
(statearr_27456_27609[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27610 = state_27443;
state_27443 = G__27610;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = function(state_27443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1.call(this,state_27443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__;
})()
;})(__27599,switch__20160__auto__,c__20225__auto___27602,G__27430_27600,n__17208__auto___27598,jobs,results,process,async))
})();
var state__20227__auto__ = (function (){var statearr_27457 = f__20226__auto__.call(null);
(statearr_27457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___27602);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(__27599,c__20225__auto___27602,G__27430_27600,n__17208__auto___27598,jobs,results,process,async))
);


break;
case "async":
var c__20225__auto___27611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27599,c__20225__auto___27611,G__27430_27600,n__17208__auto___27598,jobs,results,process,async){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (__27599,c__20225__auto___27611,G__27430_27600,n__17208__auto___27598,jobs,results,process,async){
return (function (state_27470){
var state_val_27471 = (state_27470[(1)]);
if((state_val_27471 === (1))){
var state_27470__$1 = state_27470;
var statearr_27472_27612 = state_27470__$1;
(statearr_27472_27612[(2)] = null);

(statearr_27472_27612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (2))){
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27470__$1,(4),jobs);
} else {
if((state_val_27471 === (3))){
var inst_27468 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27470__$1,inst_27468);
} else {
if((state_val_27471 === (4))){
var inst_27460 = (state_27470[(2)]);
var inst_27461 = async.call(null,inst_27460);
var state_27470__$1 = state_27470;
if(cljs.core.truth_(inst_27461)){
var statearr_27473_27613 = state_27470__$1;
(statearr_27473_27613[(1)] = (5));

} else {
var statearr_27474_27614 = state_27470__$1;
(statearr_27474_27614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (5))){
var state_27470__$1 = state_27470;
var statearr_27475_27615 = state_27470__$1;
(statearr_27475_27615[(2)] = null);

(statearr_27475_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (6))){
var state_27470__$1 = state_27470;
var statearr_27476_27616 = state_27470__$1;
(statearr_27476_27616[(2)] = null);

(statearr_27476_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (7))){
var inst_27466 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
var statearr_27477_27617 = state_27470__$1;
(statearr_27477_27617[(2)] = inst_27466);

(statearr_27477_27617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27599,c__20225__auto___27611,G__27430_27600,n__17208__auto___27598,jobs,results,process,async))
;
return ((function (__27599,switch__20160__auto__,c__20225__auto___27611,G__27430_27600,n__17208__auto___27598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null];
(statearr_27481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1 = (function (state_27470){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__20164__auto__ = e27482;
var statearr_27483_27618 = state_27470;
(statearr_27483_27618[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27619 = state_27470;
state_27470 = G__27619;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = function(state_27470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1.call(this,state_27470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__;
})()
;})(__27599,switch__20160__auto__,c__20225__auto___27611,G__27430_27600,n__17208__auto___27598,jobs,results,process,async))
})();
var state__20227__auto__ = (function (){var statearr_27484 = f__20226__auto__.call(null);
(statearr_27484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___27611);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(__27599,c__20225__auto___27611,G__27430_27600,n__17208__auto___27598,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27620 = (__27599 + (1));
__27599 = G__27620;
continue;
} else {
}
break;
}

var c__20225__auto___27621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___27621,jobs,results,process,async){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___27621,jobs,results,process,async){
return (function (state_27506){
var state_val_27507 = (state_27506[(1)]);
if((state_val_27507 === (1))){
var state_27506__$1 = state_27506;
var statearr_27508_27622 = state_27506__$1;
(statearr_27508_27622[(2)] = null);

(statearr_27508_27622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (2))){
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,(4),from);
} else {
if((state_val_27507 === (3))){
var inst_27504 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else {
if((state_val_27507 === (4))){
var inst_27487 = (state_27506[(7)]);
var inst_27487__$1 = (state_27506[(2)]);
var inst_27488 = (inst_27487__$1 == null);
var state_27506__$1 = (function (){var statearr_27509 = state_27506;
(statearr_27509[(7)] = inst_27487__$1);

return statearr_27509;
})();
if(cljs.core.truth_(inst_27488)){
var statearr_27510_27623 = state_27506__$1;
(statearr_27510_27623[(1)] = (5));

} else {
var statearr_27511_27624 = state_27506__$1;
(statearr_27511_27624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (5))){
var inst_27490 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27506__$1 = state_27506;
var statearr_27512_27625 = state_27506__$1;
(statearr_27512_27625[(2)] = inst_27490);

(statearr_27512_27625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (6))){
var inst_27492 = (state_27506[(8)]);
var inst_27487 = (state_27506[(7)]);
var inst_27492__$1 = cljs.core.async.chan.call(null,(1));
var inst_27493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27494 = [inst_27487,inst_27492__$1];
var inst_27495 = (new cljs.core.PersistentVector(null,2,(5),inst_27493,inst_27494,null));
var state_27506__$1 = (function (){var statearr_27513 = state_27506;
(statearr_27513[(8)] = inst_27492__$1);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,(8),jobs,inst_27495);
} else {
if((state_val_27507 === (7))){
var inst_27502 = (state_27506[(2)]);
var state_27506__$1 = state_27506;
var statearr_27514_27626 = state_27506__$1;
(statearr_27514_27626[(2)] = inst_27502);

(statearr_27514_27626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27507 === (8))){
var inst_27492 = (state_27506[(8)]);
var inst_27497 = (state_27506[(2)]);
var state_27506__$1 = (function (){var statearr_27515 = state_27506;
(statearr_27515[(9)] = inst_27497);

return statearr_27515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,(9),results,inst_27492);
} else {
if((state_val_27507 === (9))){
var inst_27499 = (state_27506[(2)]);
var state_27506__$1 = (function (){var statearr_27516 = state_27506;
(statearr_27516[(10)] = inst_27499);

return statearr_27516;
})();
var statearr_27517_27627 = state_27506__$1;
(statearr_27517_27627[(2)] = null);

(statearr_27517_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___27621,jobs,results,process,async))
;
return ((function (switch__20160__auto__,c__20225__auto___27621,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0 = (function (){
var statearr_27521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__);

(statearr_27521[(1)] = (1));

return statearr_27521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1 = (function (state_27506){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object)){
var ex__20164__auto__ = e27522;
var statearr_27523_27628 = state_27506;
(statearr_27523_27628[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27629 = state_27506;
state_27506 = G__27629;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___27621,jobs,results,process,async))
})();
var state__20227__auto__ = (function (){var statearr_27524 = f__20226__auto__.call(null);
(statearr_27524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___27621);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___27621,jobs,results,process,async))
);


var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__,jobs,results,process,async){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__,jobs,results,process,async){
return (function (state_27562){
var state_val_27563 = (state_27562[(1)]);
if((state_val_27563 === (7))){
var inst_27558 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27564_27630 = state_27562__$1;
(statearr_27564_27630[(2)] = inst_27558);

(statearr_27564_27630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (20))){
var state_27562__$1 = state_27562;
var statearr_27565_27631 = state_27562__$1;
(statearr_27565_27631[(2)] = null);

(statearr_27565_27631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (1))){
var state_27562__$1 = state_27562;
var statearr_27566_27632 = state_27562__$1;
(statearr_27566_27632[(2)] = null);

(statearr_27566_27632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (4))){
var inst_27527 = (state_27562[(7)]);
var inst_27527__$1 = (state_27562[(2)]);
var inst_27528 = (inst_27527__$1 == null);
var state_27562__$1 = (function (){var statearr_27567 = state_27562;
(statearr_27567[(7)] = inst_27527__$1);

return statearr_27567;
})();
if(cljs.core.truth_(inst_27528)){
var statearr_27568_27633 = state_27562__$1;
(statearr_27568_27633[(1)] = (5));

} else {
var statearr_27569_27634 = state_27562__$1;
(statearr_27569_27634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (15))){
var inst_27540 = (state_27562[(8)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27562__$1,(18),to,inst_27540);
} else {
if((state_val_27563 === (21))){
var inst_27553 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27570_27635 = state_27562__$1;
(statearr_27570_27635[(2)] = inst_27553);

(statearr_27570_27635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (13))){
var inst_27555 = (state_27562[(2)]);
var state_27562__$1 = (function (){var statearr_27571 = state_27562;
(statearr_27571[(9)] = inst_27555);

return statearr_27571;
})();
var statearr_27572_27636 = state_27562__$1;
(statearr_27572_27636[(2)] = null);

(statearr_27572_27636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (6))){
var inst_27527 = (state_27562[(7)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(11),inst_27527);
} else {
if((state_val_27563 === (17))){
var inst_27548 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
if(cljs.core.truth_(inst_27548)){
var statearr_27573_27637 = state_27562__$1;
(statearr_27573_27637[(1)] = (19));

} else {
var statearr_27574_27638 = state_27562__$1;
(statearr_27574_27638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (3))){
var inst_27560 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27562__$1,inst_27560);
} else {
if((state_val_27563 === (12))){
var inst_27537 = (state_27562[(10)]);
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(14),inst_27537);
} else {
if((state_val_27563 === (2))){
var state_27562__$1 = state_27562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(4),results);
} else {
if((state_val_27563 === (19))){
var state_27562__$1 = state_27562;
var statearr_27575_27639 = state_27562__$1;
(statearr_27575_27639[(2)] = null);

(statearr_27575_27639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (11))){
var inst_27537 = (state_27562[(2)]);
var state_27562__$1 = (function (){var statearr_27576 = state_27562;
(statearr_27576[(10)] = inst_27537);

return statearr_27576;
})();
var statearr_27577_27640 = state_27562__$1;
(statearr_27577_27640[(2)] = null);

(statearr_27577_27640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (9))){
var state_27562__$1 = state_27562;
var statearr_27578_27641 = state_27562__$1;
(statearr_27578_27641[(2)] = null);

(statearr_27578_27641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (5))){
var state_27562__$1 = state_27562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27579_27642 = state_27562__$1;
(statearr_27579_27642[(1)] = (8));

} else {
var statearr_27580_27643 = state_27562__$1;
(statearr_27580_27643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (14))){
var inst_27542 = (state_27562[(11)]);
var inst_27540 = (state_27562[(8)]);
var inst_27540__$1 = (state_27562[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var inst_27542__$1 = cljs.core.not.call(null,inst_27541);
var state_27562__$1 = (function (){var statearr_27581 = state_27562;
(statearr_27581[(11)] = inst_27542__$1);

(statearr_27581[(8)] = inst_27540__$1);

return statearr_27581;
})();
if(inst_27542__$1){
var statearr_27582_27644 = state_27562__$1;
(statearr_27582_27644[(1)] = (15));

} else {
var statearr_27583_27645 = state_27562__$1;
(statearr_27583_27645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (16))){
var inst_27542 = (state_27562[(11)]);
var state_27562__$1 = state_27562;
var statearr_27584_27646 = state_27562__$1;
(statearr_27584_27646[(2)] = inst_27542);

(statearr_27584_27646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (10))){
var inst_27534 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27585_27647 = state_27562__$1;
(statearr_27585_27647[(2)] = inst_27534);

(statearr_27585_27647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (18))){
var inst_27545 = (state_27562[(2)]);
var state_27562__$1 = state_27562;
var statearr_27586_27648 = state_27562__$1;
(statearr_27586_27648[(2)] = inst_27545);

(statearr_27586_27648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27563 === (8))){
var inst_27531 = cljs.core.async.close_BANG_.call(null,to);
var state_27562__$1 = state_27562;
var statearr_27587_27649 = state_27562__$1;
(statearr_27587_27649[(2)] = inst_27531);

(statearr_27587_27649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto__,jobs,results,process,async))
;
return ((function (switch__20160__auto__,c__20225__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0 = (function (){
var statearr_27591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__);

(statearr_27591[(1)] = (1));

return statearr_27591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1 = (function (state_27562){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27592){if((e27592 instanceof Object)){
var ex__20164__auto__ = e27592;
var statearr_27593_27650 = state_27562;
(statearr_27593_27650[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27651 = state_27562;
state_27562 = G__27651;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__ = function(state_27562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1.call(this,state_27562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20161__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__,jobs,results,process,async))
})();
var state__20227__auto__ = (function (){var statearr_27594 = f__20226__auto__.call(null);
(statearr_27594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__,jobs,results,process,async))
);

return c__20225__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27652 = [];
var len__17363__auto___27655 = arguments.length;
var i__17364__auto___27656 = (0);
while(true){
if((i__17364__auto___27656 < len__17363__auto___27655)){
args27652.push((arguments[i__17364__auto___27656]));

var G__27657 = (i__17364__auto___27656 + (1));
i__17364__auto___27656 = G__27657;
continue;
} else {
}
break;
}

var G__27654 = args27652.length;
switch (G__27654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27652.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27659 = [];
var len__17363__auto___27662 = arguments.length;
var i__17364__auto___27663 = (0);
while(true){
if((i__17364__auto___27663 < len__17363__auto___27662)){
args27659.push((arguments[i__17364__auto___27663]));

var G__27664 = (i__17364__auto___27663 + (1));
i__17364__auto___27663 = G__27664;
continue;
} else {
}
break;
}

var G__27661 = args27659.length;
switch (G__27661) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27659.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27666 = [];
var len__17363__auto___27719 = arguments.length;
var i__17364__auto___27720 = (0);
while(true){
if((i__17364__auto___27720 < len__17363__auto___27719)){
args27666.push((arguments[i__17364__auto___27720]));

var G__27721 = (i__17364__auto___27720 + (1));
i__17364__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var G__27668 = args27666.length;
switch (G__27668) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27666.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20225__auto___27723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___27723,tc,fc){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___27723,tc,fc){
return (function (state_27694){
var state_val_27695 = (state_27694[(1)]);
if((state_val_27695 === (7))){
var inst_27690 = (state_27694[(2)]);
var state_27694__$1 = state_27694;
var statearr_27696_27724 = state_27694__$1;
(statearr_27696_27724[(2)] = inst_27690);

(statearr_27696_27724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (1))){
var state_27694__$1 = state_27694;
var statearr_27697_27725 = state_27694__$1;
(statearr_27697_27725[(2)] = null);

(statearr_27697_27725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (4))){
var inst_27671 = (state_27694[(7)]);
var inst_27671__$1 = (state_27694[(2)]);
var inst_27672 = (inst_27671__$1 == null);
var state_27694__$1 = (function (){var statearr_27698 = state_27694;
(statearr_27698[(7)] = inst_27671__$1);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27672)){
var statearr_27699_27726 = state_27694__$1;
(statearr_27699_27726[(1)] = (5));

} else {
var statearr_27700_27727 = state_27694__$1;
(statearr_27700_27727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (13))){
var state_27694__$1 = state_27694;
var statearr_27701_27728 = state_27694__$1;
(statearr_27701_27728[(2)] = null);

(statearr_27701_27728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (6))){
var inst_27671 = (state_27694[(7)]);
var inst_27677 = p.call(null,inst_27671);
var state_27694__$1 = state_27694;
if(cljs.core.truth_(inst_27677)){
var statearr_27702_27729 = state_27694__$1;
(statearr_27702_27729[(1)] = (9));

} else {
var statearr_27703_27730 = state_27694__$1;
(statearr_27703_27730[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (3))){
var inst_27692 = (state_27694[(2)]);
var state_27694__$1 = state_27694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27694__$1,inst_27692);
} else {
if((state_val_27695 === (12))){
var state_27694__$1 = state_27694;
var statearr_27704_27731 = state_27694__$1;
(statearr_27704_27731[(2)] = null);

(statearr_27704_27731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (2))){
var state_27694__$1 = state_27694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27694__$1,(4),ch);
} else {
if((state_val_27695 === (11))){
var inst_27671 = (state_27694[(7)]);
var inst_27681 = (state_27694[(2)]);
var state_27694__$1 = state_27694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27694__$1,(8),inst_27681,inst_27671);
} else {
if((state_val_27695 === (9))){
var state_27694__$1 = state_27694;
var statearr_27705_27732 = state_27694__$1;
(statearr_27705_27732[(2)] = tc);

(statearr_27705_27732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (5))){
var inst_27674 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27675 = cljs.core.async.close_BANG_.call(null,fc);
var state_27694__$1 = (function (){var statearr_27706 = state_27694;
(statearr_27706[(8)] = inst_27674);

return statearr_27706;
})();
var statearr_27707_27733 = state_27694__$1;
(statearr_27707_27733[(2)] = inst_27675);

(statearr_27707_27733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (14))){
var inst_27688 = (state_27694[(2)]);
var state_27694__$1 = state_27694;
var statearr_27708_27734 = state_27694__$1;
(statearr_27708_27734[(2)] = inst_27688);

(statearr_27708_27734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (10))){
var state_27694__$1 = state_27694;
var statearr_27709_27735 = state_27694__$1;
(statearr_27709_27735[(2)] = fc);

(statearr_27709_27735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27695 === (8))){
var inst_27683 = (state_27694[(2)]);
var state_27694__$1 = state_27694;
if(cljs.core.truth_(inst_27683)){
var statearr_27710_27736 = state_27694__$1;
(statearr_27710_27736[(1)] = (12));

} else {
var statearr_27711_27737 = state_27694__$1;
(statearr_27711_27737[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___27723,tc,fc))
;
return ((function (switch__20160__auto__,c__20225__auto___27723,tc,fc){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_27715 = [null,null,null,null,null,null,null,null,null];
(statearr_27715[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_27715[(1)] = (1));

return statearr_27715;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_27694){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27716){if((e27716 instanceof Object)){
var ex__20164__auto__ = e27716;
var statearr_27717_27738 = state_27694;
(statearr_27717_27738[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27739 = state_27694;
state_27694 = G__27739;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_27694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_27694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___27723,tc,fc))
})();
var state__20227__auto__ = (function (){var statearr_27718 = f__20226__auto__.call(null);
(statearr_27718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___27723);

return statearr_27718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___27723,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__){
return (function (state_27786){
var state_val_27787 = (state_27786[(1)]);
if((state_val_27787 === (1))){
var inst_27772 = init;
var state_27786__$1 = (function (){var statearr_27788 = state_27786;
(statearr_27788[(7)] = inst_27772);

return statearr_27788;
})();
var statearr_27789_27804 = state_27786__$1;
(statearr_27789_27804[(2)] = null);

(statearr_27789_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (2))){
var state_27786__$1 = state_27786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27786__$1,(4),ch);
} else {
if((state_val_27787 === (3))){
var inst_27784 = (state_27786[(2)]);
var state_27786__$1 = state_27786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27786__$1,inst_27784);
} else {
if((state_val_27787 === (4))){
var inst_27775 = (state_27786[(8)]);
var inst_27775__$1 = (state_27786[(2)]);
var inst_27776 = (inst_27775__$1 == null);
var state_27786__$1 = (function (){var statearr_27790 = state_27786;
(statearr_27790[(8)] = inst_27775__$1);

return statearr_27790;
})();
if(cljs.core.truth_(inst_27776)){
var statearr_27791_27805 = state_27786__$1;
(statearr_27791_27805[(1)] = (5));

} else {
var statearr_27792_27806 = state_27786__$1;
(statearr_27792_27806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (5))){
var inst_27772 = (state_27786[(7)]);
var state_27786__$1 = state_27786;
var statearr_27793_27807 = state_27786__$1;
(statearr_27793_27807[(2)] = inst_27772);

(statearr_27793_27807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (6))){
var inst_27775 = (state_27786[(8)]);
var inst_27772 = (state_27786[(7)]);
var inst_27779 = f.call(null,inst_27772,inst_27775);
var inst_27772__$1 = inst_27779;
var state_27786__$1 = (function (){var statearr_27794 = state_27786;
(statearr_27794[(7)] = inst_27772__$1);

return statearr_27794;
})();
var statearr_27795_27808 = state_27786__$1;
(statearr_27795_27808[(2)] = null);

(statearr_27795_27808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (7))){
var inst_27782 = (state_27786[(2)]);
var state_27786__$1 = state_27786;
var statearr_27796_27809 = state_27786__$1;
(statearr_27796_27809[(2)] = inst_27782);

(statearr_27796_27809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20225__auto__))
;
return ((function (switch__20160__auto__,c__20225__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20161__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20161__auto____0 = (function (){
var statearr_27800 = [null,null,null,null,null,null,null,null,null];
(statearr_27800[(0)] = cljs$core$async$reduce_$_state_machine__20161__auto__);

(statearr_27800[(1)] = (1));

return statearr_27800;
});
var cljs$core$async$reduce_$_state_machine__20161__auto____1 = (function (state_27786){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27801){if((e27801 instanceof Object)){
var ex__20164__auto__ = e27801;
var statearr_27802_27810 = state_27786;
(statearr_27802_27810[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27811 = state_27786;
state_27786 = G__27811;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20161__auto__ = function(state_27786){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20161__auto____1.call(this,state_27786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20161__auto____0;
cljs$core$async$reduce_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20161__auto____1;
return cljs$core$async$reduce_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__))
})();
var state__20227__auto__ = (function (){var statearr_27803 = f__20226__auto__.call(null);
(statearr_27803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__))
);

return c__20225__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27812 = [];
var len__17363__auto___27864 = arguments.length;
var i__17364__auto___27865 = (0);
while(true){
if((i__17364__auto___27865 < len__17363__auto___27864)){
args27812.push((arguments[i__17364__auto___27865]));

var G__27866 = (i__17364__auto___27865 + (1));
i__17364__auto___27865 = G__27866;
continue;
} else {
}
break;
}

var G__27814 = args27812.length;
switch (G__27814) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27812.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__){
return (function (state_27839){
var state_val_27840 = (state_27839[(1)]);
if((state_val_27840 === (7))){
var inst_27821 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27841_27868 = state_27839__$1;
(statearr_27841_27868[(2)] = inst_27821);

(statearr_27841_27868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (1))){
var inst_27815 = cljs.core.seq.call(null,coll);
var inst_27816 = inst_27815;
var state_27839__$1 = (function (){var statearr_27842 = state_27839;
(statearr_27842[(7)] = inst_27816);

return statearr_27842;
})();
var statearr_27843_27869 = state_27839__$1;
(statearr_27843_27869[(2)] = null);

(statearr_27843_27869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (4))){
var inst_27816 = (state_27839[(7)]);
var inst_27819 = cljs.core.first.call(null,inst_27816);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27839__$1,(7),ch,inst_27819);
} else {
if((state_val_27840 === (13))){
var inst_27833 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27844_27870 = state_27839__$1;
(statearr_27844_27870[(2)] = inst_27833);

(statearr_27844_27870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (6))){
var inst_27824 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
if(cljs.core.truth_(inst_27824)){
var statearr_27845_27871 = state_27839__$1;
(statearr_27845_27871[(1)] = (8));

} else {
var statearr_27846_27872 = state_27839__$1;
(statearr_27846_27872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (3))){
var inst_27837 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27839__$1,inst_27837);
} else {
if((state_val_27840 === (12))){
var state_27839__$1 = state_27839;
var statearr_27847_27873 = state_27839__$1;
(statearr_27847_27873[(2)] = null);

(statearr_27847_27873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (2))){
var inst_27816 = (state_27839[(7)]);
var state_27839__$1 = state_27839;
if(cljs.core.truth_(inst_27816)){
var statearr_27848_27874 = state_27839__$1;
(statearr_27848_27874[(1)] = (4));

} else {
var statearr_27849_27875 = state_27839__$1;
(statearr_27849_27875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (11))){
var inst_27830 = cljs.core.async.close_BANG_.call(null,ch);
var state_27839__$1 = state_27839;
var statearr_27850_27876 = state_27839__$1;
(statearr_27850_27876[(2)] = inst_27830);

(statearr_27850_27876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (9))){
var state_27839__$1 = state_27839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27851_27877 = state_27839__$1;
(statearr_27851_27877[(1)] = (11));

} else {
var statearr_27852_27878 = state_27839__$1;
(statearr_27852_27878[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (5))){
var inst_27816 = (state_27839[(7)]);
var state_27839__$1 = state_27839;
var statearr_27853_27879 = state_27839__$1;
(statearr_27853_27879[(2)] = inst_27816);

(statearr_27853_27879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (10))){
var inst_27835 = (state_27839[(2)]);
var state_27839__$1 = state_27839;
var statearr_27854_27880 = state_27839__$1;
(statearr_27854_27880[(2)] = inst_27835);

(statearr_27854_27880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27840 === (8))){
var inst_27816 = (state_27839[(7)]);
var inst_27826 = cljs.core.next.call(null,inst_27816);
var inst_27816__$1 = inst_27826;
var state_27839__$1 = (function (){var statearr_27855 = state_27839;
(statearr_27855[(7)] = inst_27816__$1);

return statearr_27855;
})();
var statearr_27856_27881 = state_27839__$1;
(statearr_27856_27881[(2)] = null);

(statearr_27856_27881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto__))
;
return ((function (switch__20160__auto__,c__20225__auto__){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_27860 = [null,null,null,null,null,null,null,null];
(statearr_27860[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_27860[(1)] = (1));

return statearr_27860;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_27839){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_27839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e27861){if((e27861 instanceof Object)){
var ex__20164__auto__ = e27861;
var statearr_27862_27882 = state_27839;
(statearr_27862_27882[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27883 = state_27839;
state_27839 = G__27883;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_27839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_27839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__))
})();
var state__20227__auto__ = (function (){var statearr_27863 = f__20226__auto__.call(null);
(statearr_27863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_27863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__))
);

return c__20225__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16960__auto__ = (((_ == null))?null:_);
var m__16961__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,_);
} else {
var m__16961__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16961__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m,ch);
} else {
var m__16961__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m);
} else {
var m__16961__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28105 = (function (mult,ch,cs,meta28106){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28106 = meta28106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28107,meta28106__$1){
var self__ = this;
var _28107__$1 = this;
return (new cljs.core.async.t_cljs$core$async28105(self__.mult,self__.ch,self__.cs,meta28106__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28107){
var self__ = this;
var _28107__$1 = this;
return self__.meta28106;
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28106","meta28106",50847404,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28105";

cljs.core.async.t_cljs$core$async28105.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async28105");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28105 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28105(mult__$1,ch__$1,cs__$1,meta28106){
return (new cljs.core.async.t_cljs$core$async28105(mult__$1,ch__$1,cs__$1,meta28106));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28105(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20225__auto___28326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___28326,cs,m,dchan,dctr,done){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___28326,cs,m,dchan,dctr,done){
return (function (state_28238){
var state_val_28239 = (state_28238[(1)]);
if((state_val_28239 === (7))){
var inst_28234 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28240_28327 = state_28238__$1;
(statearr_28240_28327[(2)] = inst_28234);

(statearr_28240_28327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (20))){
var inst_28139 = (state_28238[(7)]);
var inst_28149 = cljs.core.first.call(null,inst_28139);
var inst_28150 = cljs.core.nth.call(null,inst_28149,(0),null);
var inst_28151 = cljs.core.nth.call(null,inst_28149,(1),null);
var state_28238__$1 = (function (){var statearr_28241 = state_28238;
(statearr_28241[(8)] = inst_28150);

return statearr_28241;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28242_28328 = state_28238__$1;
(statearr_28242_28328[(1)] = (22));

} else {
var statearr_28243_28329 = state_28238__$1;
(statearr_28243_28329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (27))){
var inst_28110 = (state_28238[(9)]);
var inst_28181 = (state_28238[(10)]);
var inst_28186 = (state_28238[(11)]);
var inst_28179 = (state_28238[(12)]);
var inst_28186__$1 = cljs.core._nth.call(null,inst_28179,inst_28181);
var inst_28187 = cljs.core.async.put_BANG_.call(null,inst_28186__$1,inst_28110,done);
var state_28238__$1 = (function (){var statearr_28244 = state_28238;
(statearr_28244[(11)] = inst_28186__$1);

return statearr_28244;
})();
if(cljs.core.truth_(inst_28187)){
var statearr_28245_28330 = state_28238__$1;
(statearr_28245_28330[(1)] = (30));

} else {
var statearr_28246_28331 = state_28238__$1;
(statearr_28246_28331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (1))){
var state_28238__$1 = state_28238;
var statearr_28247_28332 = state_28238__$1;
(statearr_28247_28332[(2)] = null);

(statearr_28247_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (24))){
var inst_28139 = (state_28238[(7)]);
var inst_28156 = (state_28238[(2)]);
var inst_28157 = cljs.core.next.call(null,inst_28139);
var inst_28119 = inst_28157;
var inst_28120 = null;
var inst_28121 = (0);
var inst_28122 = (0);
var state_28238__$1 = (function (){var statearr_28248 = state_28238;
(statearr_28248[(13)] = inst_28120);

(statearr_28248[(14)] = inst_28121);

(statearr_28248[(15)] = inst_28119);

(statearr_28248[(16)] = inst_28156);

(statearr_28248[(17)] = inst_28122);

return statearr_28248;
})();
var statearr_28249_28333 = state_28238__$1;
(statearr_28249_28333[(2)] = null);

(statearr_28249_28333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (39))){
var state_28238__$1 = state_28238;
var statearr_28253_28334 = state_28238__$1;
(statearr_28253_28334[(2)] = null);

(statearr_28253_28334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (4))){
var inst_28110 = (state_28238[(9)]);
var inst_28110__$1 = (state_28238[(2)]);
var inst_28111 = (inst_28110__$1 == null);
var state_28238__$1 = (function (){var statearr_28254 = state_28238;
(statearr_28254[(9)] = inst_28110__$1);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28255_28335 = state_28238__$1;
(statearr_28255_28335[(1)] = (5));

} else {
var statearr_28256_28336 = state_28238__$1;
(statearr_28256_28336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (15))){
var inst_28120 = (state_28238[(13)]);
var inst_28121 = (state_28238[(14)]);
var inst_28119 = (state_28238[(15)]);
var inst_28122 = (state_28238[(17)]);
var inst_28135 = (state_28238[(2)]);
var inst_28136 = (inst_28122 + (1));
var tmp28250 = inst_28120;
var tmp28251 = inst_28121;
var tmp28252 = inst_28119;
var inst_28119__$1 = tmp28252;
var inst_28120__$1 = tmp28250;
var inst_28121__$1 = tmp28251;
var inst_28122__$1 = inst_28136;
var state_28238__$1 = (function (){var statearr_28257 = state_28238;
(statearr_28257[(13)] = inst_28120__$1);

(statearr_28257[(18)] = inst_28135);

(statearr_28257[(14)] = inst_28121__$1);

(statearr_28257[(15)] = inst_28119__$1);

(statearr_28257[(17)] = inst_28122__$1);

return statearr_28257;
})();
var statearr_28258_28337 = state_28238__$1;
(statearr_28258_28337[(2)] = null);

(statearr_28258_28337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (21))){
var inst_28160 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28262_28338 = state_28238__$1;
(statearr_28262_28338[(2)] = inst_28160);

(statearr_28262_28338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (31))){
var inst_28186 = (state_28238[(11)]);
var inst_28190 = done.call(null,null);
var inst_28191 = cljs.core.async.untap_STAR_.call(null,m,inst_28186);
var state_28238__$1 = (function (){var statearr_28263 = state_28238;
(statearr_28263[(19)] = inst_28190);

return statearr_28263;
})();
var statearr_28264_28339 = state_28238__$1;
(statearr_28264_28339[(2)] = inst_28191);

(statearr_28264_28339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (32))){
var inst_28181 = (state_28238[(10)]);
var inst_28178 = (state_28238[(20)]);
var inst_28179 = (state_28238[(12)]);
var inst_28180 = (state_28238[(21)]);
var inst_28193 = (state_28238[(2)]);
var inst_28194 = (inst_28181 + (1));
var tmp28259 = inst_28178;
var tmp28260 = inst_28179;
var tmp28261 = inst_28180;
var inst_28178__$1 = tmp28259;
var inst_28179__$1 = tmp28260;
var inst_28180__$1 = tmp28261;
var inst_28181__$1 = inst_28194;
var state_28238__$1 = (function (){var statearr_28265 = state_28238;
(statearr_28265[(10)] = inst_28181__$1);

(statearr_28265[(22)] = inst_28193);

(statearr_28265[(20)] = inst_28178__$1);

(statearr_28265[(12)] = inst_28179__$1);

(statearr_28265[(21)] = inst_28180__$1);

return statearr_28265;
})();
var statearr_28266_28340 = state_28238__$1;
(statearr_28266_28340[(2)] = null);

(statearr_28266_28340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (40))){
var inst_28206 = (state_28238[(23)]);
var inst_28210 = done.call(null,null);
var inst_28211 = cljs.core.async.untap_STAR_.call(null,m,inst_28206);
var state_28238__$1 = (function (){var statearr_28267 = state_28238;
(statearr_28267[(24)] = inst_28210);

return statearr_28267;
})();
var statearr_28268_28341 = state_28238__$1;
(statearr_28268_28341[(2)] = inst_28211);

(statearr_28268_28341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (33))){
var inst_28197 = (state_28238[(25)]);
var inst_28199 = cljs.core.chunked_seq_QMARK_.call(null,inst_28197);
var state_28238__$1 = state_28238;
if(inst_28199){
var statearr_28269_28342 = state_28238__$1;
(statearr_28269_28342[(1)] = (36));

} else {
var statearr_28270_28343 = state_28238__$1;
(statearr_28270_28343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (13))){
var inst_28129 = (state_28238[(26)]);
var inst_28132 = cljs.core.async.close_BANG_.call(null,inst_28129);
var state_28238__$1 = state_28238;
var statearr_28271_28344 = state_28238__$1;
(statearr_28271_28344[(2)] = inst_28132);

(statearr_28271_28344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (22))){
var inst_28150 = (state_28238[(8)]);
var inst_28153 = cljs.core.async.close_BANG_.call(null,inst_28150);
var state_28238__$1 = state_28238;
var statearr_28272_28345 = state_28238__$1;
(statearr_28272_28345[(2)] = inst_28153);

(statearr_28272_28345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (36))){
var inst_28197 = (state_28238[(25)]);
var inst_28201 = cljs.core.chunk_first.call(null,inst_28197);
var inst_28202 = cljs.core.chunk_rest.call(null,inst_28197);
var inst_28203 = cljs.core.count.call(null,inst_28201);
var inst_28178 = inst_28202;
var inst_28179 = inst_28201;
var inst_28180 = inst_28203;
var inst_28181 = (0);
var state_28238__$1 = (function (){var statearr_28273 = state_28238;
(statearr_28273[(10)] = inst_28181);

(statearr_28273[(20)] = inst_28178);

(statearr_28273[(12)] = inst_28179);

(statearr_28273[(21)] = inst_28180);

return statearr_28273;
})();
var statearr_28274_28346 = state_28238__$1;
(statearr_28274_28346[(2)] = null);

(statearr_28274_28346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (41))){
var inst_28197 = (state_28238[(25)]);
var inst_28213 = (state_28238[(2)]);
var inst_28214 = cljs.core.next.call(null,inst_28197);
var inst_28178 = inst_28214;
var inst_28179 = null;
var inst_28180 = (0);
var inst_28181 = (0);
var state_28238__$1 = (function (){var statearr_28275 = state_28238;
(statearr_28275[(10)] = inst_28181);

(statearr_28275[(27)] = inst_28213);

(statearr_28275[(20)] = inst_28178);

(statearr_28275[(12)] = inst_28179);

(statearr_28275[(21)] = inst_28180);

return statearr_28275;
})();
var statearr_28276_28347 = state_28238__$1;
(statearr_28276_28347[(2)] = null);

(statearr_28276_28347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (43))){
var state_28238__$1 = state_28238;
var statearr_28277_28348 = state_28238__$1;
(statearr_28277_28348[(2)] = null);

(statearr_28277_28348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (29))){
var inst_28222 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28278_28349 = state_28238__$1;
(statearr_28278_28349[(2)] = inst_28222);

(statearr_28278_28349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (44))){
var inst_28231 = (state_28238[(2)]);
var state_28238__$1 = (function (){var statearr_28279 = state_28238;
(statearr_28279[(28)] = inst_28231);

return statearr_28279;
})();
var statearr_28280_28350 = state_28238__$1;
(statearr_28280_28350[(2)] = null);

(statearr_28280_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (6))){
var inst_28170 = (state_28238[(29)]);
var inst_28169 = cljs.core.deref.call(null,cs);
var inst_28170__$1 = cljs.core.keys.call(null,inst_28169);
var inst_28171 = cljs.core.count.call(null,inst_28170__$1);
var inst_28172 = cljs.core.reset_BANG_.call(null,dctr,inst_28171);
var inst_28177 = cljs.core.seq.call(null,inst_28170__$1);
var inst_28178 = inst_28177;
var inst_28179 = null;
var inst_28180 = (0);
var inst_28181 = (0);
var state_28238__$1 = (function (){var statearr_28281 = state_28238;
(statearr_28281[(10)] = inst_28181);

(statearr_28281[(29)] = inst_28170__$1);

(statearr_28281[(20)] = inst_28178);

(statearr_28281[(12)] = inst_28179);

(statearr_28281[(30)] = inst_28172);

(statearr_28281[(21)] = inst_28180);

return statearr_28281;
})();
var statearr_28282_28351 = state_28238__$1;
(statearr_28282_28351[(2)] = null);

(statearr_28282_28351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (28))){
var inst_28178 = (state_28238[(20)]);
var inst_28197 = (state_28238[(25)]);
var inst_28197__$1 = cljs.core.seq.call(null,inst_28178);
var state_28238__$1 = (function (){var statearr_28283 = state_28238;
(statearr_28283[(25)] = inst_28197__$1);

return statearr_28283;
})();
if(inst_28197__$1){
var statearr_28284_28352 = state_28238__$1;
(statearr_28284_28352[(1)] = (33));

} else {
var statearr_28285_28353 = state_28238__$1;
(statearr_28285_28353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (25))){
var inst_28181 = (state_28238[(10)]);
var inst_28180 = (state_28238[(21)]);
var inst_28183 = (inst_28181 < inst_28180);
var inst_28184 = inst_28183;
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28184)){
var statearr_28286_28354 = state_28238__$1;
(statearr_28286_28354[(1)] = (27));

} else {
var statearr_28287_28355 = state_28238__$1;
(statearr_28287_28355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (34))){
var state_28238__$1 = state_28238;
var statearr_28288_28356 = state_28238__$1;
(statearr_28288_28356[(2)] = null);

(statearr_28288_28356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (17))){
var state_28238__$1 = state_28238;
var statearr_28289_28357 = state_28238__$1;
(statearr_28289_28357[(2)] = null);

(statearr_28289_28357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (3))){
var inst_28236 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28238__$1,inst_28236);
} else {
if((state_val_28239 === (12))){
var inst_28165 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28290_28358 = state_28238__$1;
(statearr_28290_28358[(2)] = inst_28165);

(statearr_28290_28358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (2))){
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(4),ch);
} else {
if((state_val_28239 === (23))){
var state_28238__$1 = state_28238;
var statearr_28291_28359 = state_28238__$1;
(statearr_28291_28359[(2)] = null);

(statearr_28291_28359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (35))){
var inst_28220 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28292_28360 = state_28238__$1;
(statearr_28292_28360[(2)] = inst_28220);

(statearr_28292_28360[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (19))){
var inst_28139 = (state_28238[(7)]);
var inst_28143 = cljs.core.chunk_first.call(null,inst_28139);
var inst_28144 = cljs.core.chunk_rest.call(null,inst_28139);
var inst_28145 = cljs.core.count.call(null,inst_28143);
var inst_28119 = inst_28144;
var inst_28120 = inst_28143;
var inst_28121 = inst_28145;
var inst_28122 = (0);
var state_28238__$1 = (function (){var statearr_28293 = state_28238;
(statearr_28293[(13)] = inst_28120);

(statearr_28293[(14)] = inst_28121);

(statearr_28293[(15)] = inst_28119);

(statearr_28293[(17)] = inst_28122);

return statearr_28293;
})();
var statearr_28294_28361 = state_28238__$1;
(statearr_28294_28361[(2)] = null);

(statearr_28294_28361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (11))){
var inst_28139 = (state_28238[(7)]);
var inst_28119 = (state_28238[(15)]);
var inst_28139__$1 = cljs.core.seq.call(null,inst_28119);
var state_28238__$1 = (function (){var statearr_28295 = state_28238;
(statearr_28295[(7)] = inst_28139__$1);

return statearr_28295;
})();
if(inst_28139__$1){
var statearr_28296_28362 = state_28238__$1;
(statearr_28296_28362[(1)] = (16));

} else {
var statearr_28297_28363 = state_28238__$1;
(statearr_28297_28363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (9))){
var inst_28167 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28298_28364 = state_28238__$1;
(statearr_28298_28364[(2)] = inst_28167);

(statearr_28298_28364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (5))){
var inst_28117 = cljs.core.deref.call(null,cs);
var inst_28118 = cljs.core.seq.call(null,inst_28117);
var inst_28119 = inst_28118;
var inst_28120 = null;
var inst_28121 = (0);
var inst_28122 = (0);
var state_28238__$1 = (function (){var statearr_28299 = state_28238;
(statearr_28299[(13)] = inst_28120);

(statearr_28299[(14)] = inst_28121);

(statearr_28299[(15)] = inst_28119);

(statearr_28299[(17)] = inst_28122);

return statearr_28299;
})();
var statearr_28300_28365 = state_28238__$1;
(statearr_28300_28365[(2)] = null);

(statearr_28300_28365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (14))){
var state_28238__$1 = state_28238;
var statearr_28301_28366 = state_28238__$1;
(statearr_28301_28366[(2)] = null);

(statearr_28301_28366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (45))){
var inst_28228 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28302_28367 = state_28238__$1;
(statearr_28302_28367[(2)] = inst_28228);

(statearr_28302_28367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (26))){
var inst_28170 = (state_28238[(29)]);
var inst_28224 = (state_28238[(2)]);
var inst_28225 = cljs.core.seq.call(null,inst_28170);
var state_28238__$1 = (function (){var statearr_28303 = state_28238;
(statearr_28303[(31)] = inst_28224);

return statearr_28303;
})();
if(inst_28225){
var statearr_28304_28368 = state_28238__$1;
(statearr_28304_28368[(1)] = (42));

} else {
var statearr_28305_28369 = state_28238__$1;
(statearr_28305_28369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (16))){
var inst_28139 = (state_28238[(7)]);
var inst_28141 = cljs.core.chunked_seq_QMARK_.call(null,inst_28139);
var state_28238__$1 = state_28238;
if(inst_28141){
var statearr_28306_28370 = state_28238__$1;
(statearr_28306_28370[(1)] = (19));

} else {
var statearr_28307_28371 = state_28238__$1;
(statearr_28307_28371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (38))){
var inst_28217 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28308_28372 = state_28238__$1;
(statearr_28308_28372[(2)] = inst_28217);

(statearr_28308_28372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (30))){
var state_28238__$1 = state_28238;
var statearr_28309_28373 = state_28238__$1;
(statearr_28309_28373[(2)] = null);

(statearr_28309_28373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (10))){
var inst_28120 = (state_28238[(13)]);
var inst_28122 = (state_28238[(17)]);
var inst_28128 = cljs.core._nth.call(null,inst_28120,inst_28122);
var inst_28129 = cljs.core.nth.call(null,inst_28128,(0),null);
var inst_28130 = cljs.core.nth.call(null,inst_28128,(1),null);
var state_28238__$1 = (function (){var statearr_28310 = state_28238;
(statearr_28310[(26)] = inst_28129);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28130)){
var statearr_28311_28374 = state_28238__$1;
(statearr_28311_28374[(1)] = (13));

} else {
var statearr_28312_28375 = state_28238__$1;
(statearr_28312_28375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (18))){
var inst_28163 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28313_28376 = state_28238__$1;
(statearr_28313_28376[(2)] = inst_28163);

(statearr_28313_28376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (42))){
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(45),dchan);
} else {
if((state_val_28239 === (37))){
var inst_28206 = (state_28238[(23)]);
var inst_28110 = (state_28238[(9)]);
var inst_28197 = (state_28238[(25)]);
var inst_28206__$1 = cljs.core.first.call(null,inst_28197);
var inst_28207 = cljs.core.async.put_BANG_.call(null,inst_28206__$1,inst_28110,done);
var state_28238__$1 = (function (){var statearr_28314 = state_28238;
(statearr_28314[(23)] = inst_28206__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28207)){
var statearr_28315_28377 = state_28238__$1;
(statearr_28315_28377[(1)] = (39));

} else {
var statearr_28316_28378 = state_28238__$1;
(statearr_28316_28378[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (8))){
var inst_28121 = (state_28238[(14)]);
var inst_28122 = (state_28238[(17)]);
var inst_28124 = (inst_28122 < inst_28121);
var inst_28125 = inst_28124;
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28125)){
var statearr_28317_28379 = state_28238__$1;
(statearr_28317_28379[(1)] = (10));

} else {
var statearr_28318_28380 = state_28238__$1;
(statearr_28318_28380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___28326,cs,m,dchan,dctr,done))
;
return ((function (switch__20160__auto__,c__20225__auto___28326,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20161__auto__ = null;
var cljs$core$async$mult_$_state_machine__20161__auto____0 = (function (){
var statearr_28322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28322[(0)] = cljs$core$async$mult_$_state_machine__20161__auto__);

(statearr_28322[(1)] = (1));

return statearr_28322;
});
var cljs$core$async$mult_$_state_machine__20161__auto____1 = (function (state_28238){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_28238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e28323){if((e28323 instanceof Object)){
var ex__20164__auto__ = e28323;
var statearr_28324_28381 = state_28238;
(statearr_28324_28381[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28382 = state_28238;
state_28238 = G__28382;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20161__auto__ = function(state_28238){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20161__auto____1.call(this,state_28238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20161__auto____0;
cljs$core$async$mult_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20161__auto____1;
return cljs$core$async$mult_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___28326,cs,m,dchan,dctr,done))
})();
var state__20227__auto__ = (function (){var statearr_28325 = f__20226__auto__.call(null);
(statearr_28325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___28326);

return statearr_28325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___28326,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28383 = [];
var len__17363__auto___28386 = arguments.length;
var i__17364__auto___28387 = (0);
while(true){
if((i__17364__auto___28387 < len__17363__auto___28386)){
args28383.push((arguments[i__17364__auto___28387]));

var G__28388 = (i__17364__auto___28387 + (1));
i__17364__auto___28387 = G__28388;
continue;
} else {
}
break;
}

var G__28385 = args28383.length;
switch (G__28385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28383.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m,ch);
} else {
var m__16961__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m,ch);
} else {
var m__16961__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m);
} else {
var m__16961__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m,state_map);
} else {
var m__16961__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16960__auto__ = (((m == null))?null:m);
var m__16961__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,m,mode);
} else {
var m__16961__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17370__auto__ = [];
var len__17363__auto___28400 = arguments.length;
var i__17364__auto___28401 = (0);
while(true){
if((i__17364__auto___28401 < len__17363__auto___28400)){
args__17370__auto__.push((arguments[i__17364__auto___28401]));

var G__28402 = (i__17364__auto___28401 + (1));
i__17364__auto___28401 = G__28402;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((3) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17371__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28394){
var map__28395 = p__28394;
var map__28395__$1 = ((((!((map__28395 == null)))?((((map__28395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28395):map__28395);
var opts = map__28395__$1;
var statearr_28397_28403 = state;
(statearr_28397_28403[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28395,map__28395__$1,opts){
return (function (val){
var statearr_28398_28404 = state;
(statearr_28398_28404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28395,map__28395__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28399_28405 = state;
(statearr_28399_28405[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28390){
var G__28391 = cljs.core.first.call(null,seq28390);
var seq28390__$1 = cljs.core.next.call(null,seq28390);
var G__28392 = cljs.core.first.call(null,seq28390__$1);
var seq28390__$2 = cljs.core.next.call(null,seq28390__$1);
var G__28393 = cljs.core.first.call(null,seq28390__$2);
var seq28390__$3 = cljs.core.next.call(null,seq28390__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28391,G__28392,G__28393,seq28390__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28569 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28570){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28570 = meta28570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28571,meta28570__$1){
var self__ = this;
var _28571__$1 = this;
return (new cljs.core.async.t_cljs$core$async28569(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28570__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28571){
var self__ = this;
var _28571__$1 = this;
return self__.meta28570;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28570","meta28570",1912384935,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28569";

cljs.core.async.t_cljs$core$async28569.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async28569");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28569 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28569(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28570){
return (new cljs.core.async.t_cljs$core$async28569(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28570));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28569(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20225__auto___28732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___28732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___28732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28669){
var state_val_28670 = (state_28669[(1)]);
if((state_val_28670 === (7))){
var inst_28587 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
var statearr_28671_28733 = state_28669__$1;
(statearr_28671_28733[(2)] = inst_28587);

(statearr_28671_28733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (20))){
var inst_28599 = (state_28669[(7)]);
var state_28669__$1 = state_28669;
var statearr_28672_28734 = state_28669__$1;
(statearr_28672_28734[(2)] = inst_28599);

(statearr_28672_28734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (27))){
var state_28669__$1 = state_28669;
var statearr_28673_28735 = state_28669__$1;
(statearr_28673_28735[(2)] = null);

(statearr_28673_28735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (1))){
var inst_28575 = (state_28669[(8)]);
var inst_28575__$1 = calc_state.call(null);
var inst_28577 = (inst_28575__$1 == null);
var inst_28578 = cljs.core.not.call(null,inst_28577);
var state_28669__$1 = (function (){var statearr_28674 = state_28669;
(statearr_28674[(8)] = inst_28575__$1);

return statearr_28674;
})();
if(inst_28578){
var statearr_28675_28736 = state_28669__$1;
(statearr_28675_28736[(1)] = (2));

} else {
var statearr_28676_28737 = state_28669__$1;
(statearr_28676_28737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (24))){
var inst_28643 = (state_28669[(9)]);
var inst_28629 = (state_28669[(10)]);
var inst_28622 = (state_28669[(11)]);
var inst_28643__$1 = inst_28622.call(null,inst_28629);
var state_28669__$1 = (function (){var statearr_28677 = state_28669;
(statearr_28677[(9)] = inst_28643__$1);

return statearr_28677;
})();
if(cljs.core.truth_(inst_28643__$1)){
var statearr_28678_28738 = state_28669__$1;
(statearr_28678_28738[(1)] = (29));

} else {
var statearr_28679_28739 = state_28669__$1;
(statearr_28679_28739[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (4))){
var inst_28590 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28590)){
var statearr_28680_28740 = state_28669__$1;
(statearr_28680_28740[(1)] = (8));

} else {
var statearr_28681_28741 = state_28669__$1;
(statearr_28681_28741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (15))){
var inst_28616 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28616)){
var statearr_28682_28742 = state_28669__$1;
(statearr_28682_28742[(1)] = (19));

} else {
var statearr_28683_28743 = state_28669__$1;
(statearr_28683_28743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (21))){
var inst_28621 = (state_28669[(12)]);
var inst_28621__$1 = (state_28669[(2)]);
var inst_28622 = cljs.core.get.call(null,inst_28621__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28623 = cljs.core.get.call(null,inst_28621__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28624 = cljs.core.get.call(null,inst_28621__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28669__$1 = (function (){var statearr_28684 = state_28669;
(statearr_28684[(12)] = inst_28621__$1);

(statearr_28684[(13)] = inst_28623);

(statearr_28684[(11)] = inst_28622);

return statearr_28684;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28669__$1,(22),inst_28624);
} else {
if((state_val_28670 === (31))){
var inst_28651 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28651)){
var statearr_28685_28744 = state_28669__$1;
(statearr_28685_28744[(1)] = (32));

} else {
var statearr_28686_28745 = state_28669__$1;
(statearr_28686_28745[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (32))){
var inst_28628 = (state_28669[(14)]);
var state_28669__$1 = state_28669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28669__$1,(35),out,inst_28628);
} else {
if((state_val_28670 === (33))){
var inst_28621 = (state_28669[(12)]);
var inst_28599 = inst_28621;
var state_28669__$1 = (function (){var statearr_28687 = state_28669;
(statearr_28687[(7)] = inst_28599);

return statearr_28687;
})();
var statearr_28688_28746 = state_28669__$1;
(statearr_28688_28746[(2)] = null);

(statearr_28688_28746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (13))){
var inst_28599 = (state_28669[(7)]);
var inst_28606 = inst_28599.cljs$lang$protocol_mask$partition0$;
var inst_28607 = (inst_28606 & (64));
var inst_28608 = inst_28599.cljs$core$ISeq$;
var inst_28609 = (inst_28607) || (inst_28608);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28609)){
var statearr_28689_28747 = state_28669__$1;
(statearr_28689_28747[(1)] = (16));

} else {
var statearr_28690_28748 = state_28669__$1;
(statearr_28690_28748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (22))){
var inst_28628 = (state_28669[(14)]);
var inst_28629 = (state_28669[(10)]);
var inst_28627 = (state_28669[(2)]);
var inst_28628__$1 = cljs.core.nth.call(null,inst_28627,(0),null);
var inst_28629__$1 = cljs.core.nth.call(null,inst_28627,(1),null);
var inst_28630 = (inst_28628__$1 == null);
var inst_28631 = cljs.core._EQ_.call(null,inst_28629__$1,change);
var inst_28632 = (inst_28630) || (inst_28631);
var state_28669__$1 = (function (){var statearr_28691 = state_28669;
(statearr_28691[(14)] = inst_28628__$1);

(statearr_28691[(10)] = inst_28629__$1);

return statearr_28691;
})();
if(cljs.core.truth_(inst_28632)){
var statearr_28692_28749 = state_28669__$1;
(statearr_28692_28749[(1)] = (23));

} else {
var statearr_28693_28750 = state_28669__$1;
(statearr_28693_28750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (36))){
var inst_28621 = (state_28669[(12)]);
var inst_28599 = inst_28621;
var state_28669__$1 = (function (){var statearr_28694 = state_28669;
(statearr_28694[(7)] = inst_28599);

return statearr_28694;
})();
var statearr_28695_28751 = state_28669__$1;
(statearr_28695_28751[(2)] = null);

(statearr_28695_28751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (29))){
var inst_28643 = (state_28669[(9)]);
var state_28669__$1 = state_28669;
var statearr_28696_28752 = state_28669__$1;
(statearr_28696_28752[(2)] = inst_28643);

(statearr_28696_28752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (6))){
var state_28669__$1 = state_28669;
var statearr_28697_28753 = state_28669__$1;
(statearr_28697_28753[(2)] = false);

(statearr_28697_28753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (28))){
var inst_28639 = (state_28669[(2)]);
var inst_28640 = calc_state.call(null);
var inst_28599 = inst_28640;
var state_28669__$1 = (function (){var statearr_28698 = state_28669;
(statearr_28698[(7)] = inst_28599);

(statearr_28698[(15)] = inst_28639);

return statearr_28698;
})();
var statearr_28699_28754 = state_28669__$1;
(statearr_28699_28754[(2)] = null);

(statearr_28699_28754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (25))){
var inst_28665 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
var statearr_28700_28755 = state_28669__$1;
(statearr_28700_28755[(2)] = inst_28665);

(statearr_28700_28755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (34))){
var inst_28663 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
var statearr_28701_28756 = state_28669__$1;
(statearr_28701_28756[(2)] = inst_28663);

(statearr_28701_28756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (17))){
var state_28669__$1 = state_28669;
var statearr_28702_28757 = state_28669__$1;
(statearr_28702_28757[(2)] = false);

(statearr_28702_28757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (3))){
var state_28669__$1 = state_28669;
var statearr_28703_28758 = state_28669__$1;
(statearr_28703_28758[(2)] = false);

(statearr_28703_28758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (12))){
var inst_28667 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28669__$1,inst_28667);
} else {
if((state_val_28670 === (2))){
var inst_28575 = (state_28669[(8)]);
var inst_28580 = inst_28575.cljs$lang$protocol_mask$partition0$;
var inst_28581 = (inst_28580 & (64));
var inst_28582 = inst_28575.cljs$core$ISeq$;
var inst_28583 = (inst_28581) || (inst_28582);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28583)){
var statearr_28704_28759 = state_28669__$1;
(statearr_28704_28759[(1)] = (5));

} else {
var statearr_28705_28760 = state_28669__$1;
(statearr_28705_28760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (23))){
var inst_28628 = (state_28669[(14)]);
var inst_28634 = (inst_28628 == null);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28634)){
var statearr_28706_28761 = state_28669__$1;
(statearr_28706_28761[(1)] = (26));

} else {
var statearr_28707_28762 = state_28669__$1;
(statearr_28707_28762[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (35))){
var inst_28654 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
if(cljs.core.truth_(inst_28654)){
var statearr_28708_28763 = state_28669__$1;
(statearr_28708_28763[(1)] = (36));

} else {
var statearr_28709_28764 = state_28669__$1;
(statearr_28709_28764[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (19))){
var inst_28599 = (state_28669[(7)]);
var inst_28618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28599);
var state_28669__$1 = state_28669;
var statearr_28710_28765 = state_28669__$1;
(statearr_28710_28765[(2)] = inst_28618);

(statearr_28710_28765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (11))){
var inst_28599 = (state_28669[(7)]);
var inst_28603 = (inst_28599 == null);
var inst_28604 = cljs.core.not.call(null,inst_28603);
var state_28669__$1 = state_28669;
if(inst_28604){
var statearr_28711_28766 = state_28669__$1;
(statearr_28711_28766[(1)] = (13));

} else {
var statearr_28712_28767 = state_28669__$1;
(statearr_28712_28767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (9))){
var inst_28575 = (state_28669[(8)]);
var state_28669__$1 = state_28669;
var statearr_28713_28768 = state_28669__$1;
(statearr_28713_28768[(2)] = inst_28575);

(statearr_28713_28768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (5))){
var state_28669__$1 = state_28669;
var statearr_28714_28769 = state_28669__$1;
(statearr_28714_28769[(2)] = true);

(statearr_28714_28769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (14))){
var state_28669__$1 = state_28669;
var statearr_28715_28770 = state_28669__$1;
(statearr_28715_28770[(2)] = false);

(statearr_28715_28770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (26))){
var inst_28629 = (state_28669[(10)]);
var inst_28636 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28629);
var state_28669__$1 = state_28669;
var statearr_28716_28771 = state_28669__$1;
(statearr_28716_28771[(2)] = inst_28636);

(statearr_28716_28771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (16))){
var state_28669__$1 = state_28669;
var statearr_28717_28772 = state_28669__$1;
(statearr_28717_28772[(2)] = true);

(statearr_28717_28772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (38))){
var inst_28659 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
var statearr_28718_28773 = state_28669__$1;
(statearr_28718_28773[(2)] = inst_28659);

(statearr_28718_28773[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (30))){
var inst_28629 = (state_28669[(10)]);
var inst_28623 = (state_28669[(13)]);
var inst_28622 = (state_28669[(11)]);
var inst_28646 = cljs.core.empty_QMARK_.call(null,inst_28622);
var inst_28647 = inst_28623.call(null,inst_28629);
var inst_28648 = cljs.core.not.call(null,inst_28647);
var inst_28649 = (inst_28646) && (inst_28648);
var state_28669__$1 = state_28669;
var statearr_28719_28774 = state_28669__$1;
(statearr_28719_28774[(2)] = inst_28649);

(statearr_28719_28774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (10))){
var inst_28575 = (state_28669[(8)]);
var inst_28595 = (state_28669[(2)]);
var inst_28596 = cljs.core.get.call(null,inst_28595,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28597 = cljs.core.get.call(null,inst_28595,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28598 = cljs.core.get.call(null,inst_28595,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28599 = inst_28575;
var state_28669__$1 = (function (){var statearr_28720 = state_28669;
(statearr_28720[(7)] = inst_28599);

(statearr_28720[(16)] = inst_28596);

(statearr_28720[(17)] = inst_28598);

(statearr_28720[(18)] = inst_28597);

return statearr_28720;
})();
var statearr_28721_28775 = state_28669__$1;
(statearr_28721_28775[(2)] = null);

(statearr_28721_28775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (18))){
var inst_28613 = (state_28669[(2)]);
var state_28669__$1 = state_28669;
var statearr_28722_28776 = state_28669__$1;
(statearr_28722_28776[(2)] = inst_28613);

(statearr_28722_28776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (37))){
var state_28669__$1 = state_28669;
var statearr_28723_28777 = state_28669__$1;
(statearr_28723_28777[(2)] = null);

(statearr_28723_28777[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28670 === (8))){
var inst_28575 = (state_28669[(8)]);
var inst_28592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28575);
var state_28669__$1 = state_28669;
var statearr_28724_28778 = state_28669__$1;
(statearr_28724_28778[(2)] = inst_28592);

(statearr_28724_28778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___28732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20160__auto__,c__20225__auto___28732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20161__auto__ = null;
var cljs$core$async$mix_$_state_machine__20161__auto____0 = (function (){
var statearr_28728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28728[(0)] = cljs$core$async$mix_$_state_machine__20161__auto__);

(statearr_28728[(1)] = (1));

return statearr_28728;
});
var cljs$core$async$mix_$_state_machine__20161__auto____1 = (function (state_28669){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_28669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e28729){if((e28729 instanceof Object)){
var ex__20164__auto__ = e28729;
var statearr_28730_28779 = state_28669;
(statearr_28730_28779[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28780 = state_28669;
state_28669 = G__28780;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20161__auto__ = function(state_28669){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20161__auto____1.call(this,state_28669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20161__auto____0;
cljs$core$async$mix_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20161__auto____1;
return cljs$core$async$mix_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___28732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20227__auto__ = (function (){var statearr_28731 = f__20226__auto__.call(null);
(statearr_28731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___28732);

return statearr_28731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___28732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16960__auto__ = (((p == null))?null:p);
var m__16961__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16961__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16960__auto__ = (((p == null))?null:p);
var m__16961__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,p,v,ch);
} else {
var m__16961__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28781 = [];
var len__17363__auto___28784 = arguments.length;
var i__17364__auto___28785 = (0);
while(true){
if((i__17364__auto___28785 < len__17363__auto___28784)){
args28781.push((arguments[i__17364__auto___28785]));

var G__28786 = (i__17364__auto___28785 + (1));
i__17364__auto___28785 = G__28786;
continue;
} else {
}
break;
}

var G__28783 = args28781.length;
switch (G__28783) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28781.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16960__auto__ = (((p == null))?null:p);
var m__16961__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,p);
} else {
var m__16961__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16960__auto__ = (((p == null))?null:p);
var m__16961__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16960__auto__)]);
if(!((m__16961__auto__ == null))){
return m__16961__auto__.call(null,p,v);
} else {
var m__16961__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16961__auto____$1 == null))){
return m__16961__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28789 = [];
var len__17363__auto___28914 = arguments.length;
var i__17364__auto___28915 = (0);
while(true){
if((i__17364__auto___28915 < len__17363__auto___28914)){
args28789.push((arguments[i__17364__auto___28915]));

var G__28916 = (i__17364__auto___28915 + (1));
i__17364__auto___28915 = G__28916;
continue;
} else {
}
break;
}

var G__28791 = args28789.length;
switch (G__28791) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28789.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16305__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16305__auto__,mults){
return (function (p1__28788_SHARP_){
if(cljs.core.truth_(p1__28788_SHARP_.call(null,topic))){
return p1__28788_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28788_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16305__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28792 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28793){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28793 = meta28793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28794,meta28793__$1){
var self__ = this;
var _28794__$1 = this;
return (new cljs.core.async.t_cljs$core$async28792(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28793__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28794){
var self__ = this;
var _28794__$1 = this;
return self__.meta28793;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28793","meta28793",-1205141729,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28792";

cljs.core.async.t_cljs$core$async28792.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async28792");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28792 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28793){
return (new cljs.core.async.t_cljs$core$async28792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28793));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28792(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20225__auto___28918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___28918,mults,ensure_mult,p){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___28918,mults,ensure_mult,p){
return (function (state_28866){
var state_val_28867 = (state_28866[(1)]);
if((state_val_28867 === (7))){
var inst_28862 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28868_28919 = state_28866__$1;
(statearr_28868_28919[(2)] = inst_28862);

(statearr_28868_28919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (20))){
var state_28866__$1 = state_28866;
var statearr_28869_28920 = state_28866__$1;
(statearr_28869_28920[(2)] = null);

(statearr_28869_28920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (1))){
var state_28866__$1 = state_28866;
var statearr_28870_28921 = state_28866__$1;
(statearr_28870_28921[(2)] = null);

(statearr_28870_28921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (24))){
var inst_28845 = (state_28866[(7)]);
var inst_28854 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28845);
var state_28866__$1 = state_28866;
var statearr_28871_28922 = state_28866__$1;
(statearr_28871_28922[(2)] = inst_28854);

(statearr_28871_28922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (4))){
var inst_28797 = (state_28866[(8)]);
var inst_28797__$1 = (state_28866[(2)]);
var inst_28798 = (inst_28797__$1 == null);
var state_28866__$1 = (function (){var statearr_28872 = state_28866;
(statearr_28872[(8)] = inst_28797__$1);

return statearr_28872;
})();
if(cljs.core.truth_(inst_28798)){
var statearr_28873_28923 = state_28866__$1;
(statearr_28873_28923[(1)] = (5));

} else {
var statearr_28874_28924 = state_28866__$1;
(statearr_28874_28924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (15))){
var inst_28839 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28875_28925 = state_28866__$1;
(statearr_28875_28925[(2)] = inst_28839);

(statearr_28875_28925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (21))){
var inst_28859 = (state_28866[(2)]);
var state_28866__$1 = (function (){var statearr_28876 = state_28866;
(statearr_28876[(9)] = inst_28859);

return statearr_28876;
})();
var statearr_28877_28926 = state_28866__$1;
(statearr_28877_28926[(2)] = null);

(statearr_28877_28926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (13))){
var inst_28821 = (state_28866[(10)]);
var inst_28823 = cljs.core.chunked_seq_QMARK_.call(null,inst_28821);
var state_28866__$1 = state_28866;
if(inst_28823){
var statearr_28878_28927 = state_28866__$1;
(statearr_28878_28927[(1)] = (16));

} else {
var statearr_28879_28928 = state_28866__$1;
(statearr_28879_28928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (22))){
var inst_28851 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
if(cljs.core.truth_(inst_28851)){
var statearr_28880_28929 = state_28866__$1;
(statearr_28880_28929[(1)] = (23));

} else {
var statearr_28881_28930 = state_28866__$1;
(statearr_28881_28930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (6))){
var inst_28797 = (state_28866[(8)]);
var inst_28845 = (state_28866[(7)]);
var inst_28847 = (state_28866[(11)]);
var inst_28845__$1 = topic_fn.call(null,inst_28797);
var inst_28846 = cljs.core.deref.call(null,mults);
var inst_28847__$1 = cljs.core.get.call(null,inst_28846,inst_28845__$1);
var state_28866__$1 = (function (){var statearr_28882 = state_28866;
(statearr_28882[(7)] = inst_28845__$1);

(statearr_28882[(11)] = inst_28847__$1);

return statearr_28882;
})();
if(cljs.core.truth_(inst_28847__$1)){
var statearr_28883_28931 = state_28866__$1;
(statearr_28883_28931[(1)] = (19));

} else {
var statearr_28884_28932 = state_28866__$1;
(statearr_28884_28932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (25))){
var inst_28856 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28885_28933 = state_28866__$1;
(statearr_28885_28933[(2)] = inst_28856);

(statearr_28885_28933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (17))){
var inst_28821 = (state_28866[(10)]);
var inst_28830 = cljs.core.first.call(null,inst_28821);
var inst_28831 = cljs.core.async.muxch_STAR_.call(null,inst_28830);
var inst_28832 = cljs.core.async.close_BANG_.call(null,inst_28831);
var inst_28833 = cljs.core.next.call(null,inst_28821);
var inst_28807 = inst_28833;
var inst_28808 = null;
var inst_28809 = (0);
var inst_28810 = (0);
var state_28866__$1 = (function (){var statearr_28886 = state_28866;
(statearr_28886[(12)] = inst_28809);

(statearr_28886[(13)] = inst_28810);

(statearr_28886[(14)] = inst_28807);

(statearr_28886[(15)] = inst_28832);

(statearr_28886[(16)] = inst_28808);

return statearr_28886;
})();
var statearr_28887_28934 = state_28866__$1;
(statearr_28887_28934[(2)] = null);

(statearr_28887_28934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (3))){
var inst_28864 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28866__$1,inst_28864);
} else {
if((state_val_28867 === (12))){
var inst_28841 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28888_28935 = state_28866__$1;
(statearr_28888_28935[(2)] = inst_28841);

(statearr_28888_28935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (2))){
var state_28866__$1 = state_28866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28866__$1,(4),ch);
} else {
if((state_val_28867 === (23))){
var state_28866__$1 = state_28866;
var statearr_28889_28936 = state_28866__$1;
(statearr_28889_28936[(2)] = null);

(statearr_28889_28936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (19))){
var inst_28797 = (state_28866[(8)]);
var inst_28847 = (state_28866[(11)]);
var inst_28849 = cljs.core.async.muxch_STAR_.call(null,inst_28847);
var state_28866__$1 = state_28866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28866__$1,(22),inst_28849,inst_28797);
} else {
if((state_val_28867 === (11))){
var inst_28807 = (state_28866[(14)]);
var inst_28821 = (state_28866[(10)]);
var inst_28821__$1 = cljs.core.seq.call(null,inst_28807);
var state_28866__$1 = (function (){var statearr_28890 = state_28866;
(statearr_28890[(10)] = inst_28821__$1);

return statearr_28890;
})();
if(inst_28821__$1){
var statearr_28891_28937 = state_28866__$1;
(statearr_28891_28937[(1)] = (13));

} else {
var statearr_28892_28938 = state_28866__$1;
(statearr_28892_28938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (9))){
var inst_28843 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28893_28939 = state_28866__$1;
(statearr_28893_28939[(2)] = inst_28843);

(statearr_28893_28939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (5))){
var inst_28804 = cljs.core.deref.call(null,mults);
var inst_28805 = cljs.core.vals.call(null,inst_28804);
var inst_28806 = cljs.core.seq.call(null,inst_28805);
var inst_28807 = inst_28806;
var inst_28808 = null;
var inst_28809 = (0);
var inst_28810 = (0);
var state_28866__$1 = (function (){var statearr_28894 = state_28866;
(statearr_28894[(12)] = inst_28809);

(statearr_28894[(13)] = inst_28810);

(statearr_28894[(14)] = inst_28807);

(statearr_28894[(16)] = inst_28808);

return statearr_28894;
})();
var statearr_28895_28940 = state_28866__$1;
(statearr_28895_28940[(2)] = null);

(statearr_28895_28940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (14))){
var state_28866__$1 = state_28866;
var statearr_28899_28941 = state_28866__$1;
(statearr_28899_28941[(2)] = null);

(statearr_28899_28941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (16))){
var inst_28821 = (state_28866[(10)]);
var inst_28825 = cljs.core.chunk_first.call(null,inst_28821);
var inst_28826 = cljs.core.chunk_rest.call(null,inst_28821);
var inst_28827 = cljs.core.count.call(null,inst_28825);
var inst_28807 = inst_28826;
var inst_28808 = inst_28825;
var inst_28809 = inst_28827;
var inst_28810 = (0);
var state_28866__$1 = (function (){var statearr_28900 = state_28866;
(statearr_28900[(12)] = inst_28809);

(statearr_28900[(13)] = inst_28810);

(statearr_28900[(14)] = inst_28807);

(statearr_28900[(16)] = inst_28808);

return statearr_28900;
})();
var statearr_28901_28942 = state_28866__$1;
(statearr_28901_28942[(2)] = null);

(statearr_28901_28942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (10))){
var inst_28809 = (state_28866[(12)]);
var inst_28810 = (state_28866[(13)]);
var inst_28807 = (state_28866[(14)]);
var inst_28808 = (state_28866[(16)]);
var inst_28815 = cljs.core._nth.call(null,inst_28808,inst_28810);
var inst_28816 = cljs.core.async.muxch_STAR_.call(null,inst_28815);
var inst_28817 = cljs.core.async.close_BANG_.call(null,inst_28816);
var inst_28818 = (inst_28810 + (1));
var tmp28896 = inst_28809;
var tmp28897 = inst_28807;
var tmp28898 = inst_28808;
var inst_28807__$1 = tmp28897;
var inst_28808__$1 = tmp28898;
var inst_28809__$1 = tmp28896;
var inst_28810__$1 = inst_28818;
var state_28866__$1 = (function (){var statearr_28902 = state_28866;
(statearr_28902[(12)] = inst_28809__$1);

(statearr_28902[(13)] = inst_28810__$1);

(statearr_28902[(17)] = inst_28817);

(statearr_28902[(14)] = inst_28807__$1);

(statearr_28902[(16)] = inst_28808__$1);

return statearr_28902;
})();
var statearr_28903_28943 = state_28866__$1;
(statearr_28903_28943[(2)] = null);

(statearr_28903_28943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (18))){
var inst_28836 = (state_28866[(2)]);
var state_28866__$1 = state_28866;
var statearr_28904_28944 = state_28866__$1;
(statearr_28904_28944[(2)] = inst_28836);

(statearr_28904_28944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28867 === (8))){
var inst_28809 = (state_28866[(12)]);
var inst_28810 = (state_28866[(13)]);
var inst_28812 = (inst_28810 < inst_28809);
var inst_28813 = inst_28812;
var state_28866__$1 = state_28866;
if(cljs.core.truth_(inst_28813)){
var statearr_28905_28945 = state_28866__$1;
(statearr_28905_28945[(1)] = (10));

} else {
var statearr_28906_28946 = state_28866__$1;
(statearr_28906_28946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___28918,mults,ensure_mult,p))
;
return ((function (switch__20160__auto__,c__20225__auto___28918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_28910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28910[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_28910[(1)] = (1));

return statearr_28910;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_28866){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_28866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e28911){if((e28911 instanceof Object)){
var ex__20164__auto__ = e28911;
var statearr_28912_28947 = state_28866;
(statearr_28912_28947[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28948 = state_28866;
state_28866 = G__28948;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_28866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_28866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___28918,mults,ensure_mult,p))
})();
var state__20227__auto__ = (function (){var statearr_28913 = f__20226__auto__.call(null);
(statearr_28913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___28918);

return statearr_28913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___28918,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28949 = [];
var len__17363__auto___28952 = arguments.length;
var i__17364__auto___28953 = (0);
while(true){
if((i__17364__auto___28953 < len__17363__auto___28952)){
args28949.push((arguments[i__17364__auto___28953]));

var G__28954 = (i__17364__auto___28953 + (1));
i__17364__auto___28953 = G__28954;
continue;
} else {
}
break;
}

var G__28951 = args28949.length;
switch (G__28951) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28949.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28956 = [];
var len__17363__auto___28959 = arguments.length;
var i__17364__auto___28960 = (0);
while(true){
if((i__17364__auto___28960 < len__17363__auto___28959)){
args28956.push((arguments[i__17364__auto___28960]));

var G__28961 = (i__17364__auto___28960 + (1));
i__17364__auto___28960 = G__28961;
continue;
} else {
}
break;
}

var G__28958 = args28956.length;
switch (G__28958) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28956.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28963 = [];
var len__17363__auto___29034 = arguments.length;
var i__17364__auto___29035 = (0);
while(true){
if((i__17364__auto___29035 < len__17363__auto___29034)){
args28963.push((arguments[i__17364__auto___29035]));

var G__29036 = (i__17364__auto___29035 + (1));
i__17364__auto___29035 = G__29036;
continue;
} else {
}
break;
}

var G__28965 = args28963.length;
switch (G__28965) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28963.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20225__auto___29038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29004){
var state_val_29005 = (state_29004[(1)]);
if((state_val_29005 === (7))){
var state_29004__$1 = state_29004;
var statearr_29006_29039 = state_29004__$1;
(statearr_29006_29039[(2)] = null);

(statearr_29006_29039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (1))){
var state_29004__$1 = state_29004;
var statearr_29007_29040 = state_29004__$1;
(statearr_29007_29040[(2)] = null);

(statearr_29007_29040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (4))){
var inst_28968 = (state_29004[(7)]);
var inst_28970 = (inst_28968 < cnt);
var state_29004__$1 = state_29004;
if(cljs.core.truth_(inst_28970)){
var statearr_29008_29041 = state_29004__$1;
(statearr_29008_29041[(1)] = (6));

} else {
var statearr_29009_29042 = state_29004__$1;
(statearr_29009_29042[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (15))){
var inst_29000 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29010_29043 = state_29004__$1;
(statearr_29010_29043[(2)] = inst_29000);

(statearr_29010_29043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (13))){
var inst_28993 = cljs.core.async.close_BANG_.call(null,out);
var state_29004__$1 = state_29004;
var statearr_29011_29044 = state_29004__$1;
(statearr_29011_29044[(2)] = inst_28993);

(statearr_29011_29044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (6))){
var state_29004__$1 = state_29004;
var statearr_29012_29045 = state_29004__$1;
(statearr_29012_29045[(2)] = null);

(statearr_29012_29045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (3))){
var inst_29002 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29004__$1,inst_29002);
} else {
if((state_val_29005 === (12))){
var inst_28990 = (state_29004[(8)]);
var inst_28990__$1 = (state_29004[(2)]);
var inst_28991 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28990__$1);
var state_29004__$1 = (function (){var statearr_29013 = state_29004;
(statearr_29013[(8)] = inst_28990__$1);

return statearr_29013;
})();
if(cljs.core.truth_(inst_28991)){
var statearr_29014_29046 = state_29004__$1;
(statearr_29014_29046[(1)] = (13));

} else {
var statearr_29015_29047 = state_29004__$1;
(statearr_29015_29047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (2))){
var inst_28967 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28968 = (0);
var state_29004__$1 = (function (){var statearr_29016 = state_29004;
(statearr_29016[(7)] = inst_28968);

(statearr_29016[(9)] = inst_28967);

return statearr_29016;
})();
var statearr_29017_29048 = state_29004__$1;
(statearr_29017_29048[(2)] = null);

(statearr_29017_29048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (11))){
var inst_28968 = (state_29004[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29004,(10),Object,null,(9));
var inst_28977 = chs__$1.call(null,inst_28968);
var inst_28978 = done.call(null,inst_28968);
var inst_28979 = cljs.core.async.take_BANG_.call(null,inst_28977,inst_28978);
var state_29004__$1 = state_29004;
var statearr_29018_29049 = state_29004__$1;
(statearr_29018_29049[(2)] = inst_28979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (9))){
var inst_28968 = (state_29004[(7)]);
var inst_28981 = (state_29004[(2)]);
var inst_28982 = (inst_28968 + (1));
var inst_28968__$1 = inst_28982;
var state_29004__$1 = (function (){var statearr_29019 = state_29004;
(statearr_29019[(7)] = inst_28968__$1);

(statearr_29019[(10)] = inst_28981);

return statearr_29019;
})();
var statearr_29020_29050 = state_29004__$1;
(statearr_29020_29050[(2)] = null);

(statearr_29020_29050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (5))){
var inst_28988 = (state_29004[(2)]);
var state_29004__$1 = (function (){var statearr_29021 = state_29004;
(statearr_29021[(11)] = inst_28988);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29004__$1,(12),dchan);
} else {
if((state_val_29005 === (14))){
var inst_28990 = (state_29004[(8)]);
var inst_28995 = cljs.core.apply.call(null,f,inst_28990);
var state_29004__$1 = state_29004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29004__$1,(16),out,inst_28995);
} else {
if((state_val_29005 === (16))){
var inst_28997 = (state_29004[(2)]);
var state_29004__$1 = (function (){var statearr_29022 = state_29004;
(statearr_29022[(12)] = inst_28997);

return statearr_29022;
})();
var statearr_29023_29051 = state_29004__$1;
(statearr_29023_29051[(2)] = null);

(statearr_29023_29051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (10))){
var inst_28972 = (state_29004[(2)]);
var inst_28973 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29004__$1 = (function (){var statearr_29024 = state_29004;
(statearr_29024[(13)] = inst_28972);

return statearr_29024;
})();
var statearr_29025_29052 = state_29004__$1;
(statearr_29025_29052[(2)] = inst_28973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29005 === (8))){
var inst_28986 = (state_29004[(2)]);
var state_29004__$1 = state_29004;
var statearr_29026_29053 = state_29004__$1;
(statearr_29026_29053[(2)] = inst_28986);

(statearr_29026_29053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29038,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20160__auto__,c__20225__auto___29038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29030[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29030[(1)] = (1));

return statearr_29030;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29004){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29031){if((e29031 instanceof Object)){
var ex__20164__auto__ = e29031;
var statearr_29032_29054 = state_29004;
(statearr_29032_29054[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29055 = state_29004;
state_29004 = G__29055;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29038,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20227__auto__ = (function (){var statearr_29033 = f__20226__auto__.call(null);
(statearr_29033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29038);

return statearr_29033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29038,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29057 = [];
var len__17363__auto___29113 = arguments.length;
var i__17364__auto___29114 = (0);
while(true){
if((i__17364__auto___29114 < len__17363__auto___29113)){
args29057.push((arguments[i__17364__auto___29114]));

var G__29115 = (i__17364__auto___29114 + (1));
i__17364__auto___29114 = G__29115;
continue;
} else {
}
break;
}

var G__29059 = args29057.length;
switch (G__29059) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29057.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20225__auto___29117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29117,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29117,out){
return (function (state_29089){
var state_val_29090 = (state_29089[(1)]);
if((state_val_29090 === (7))){
var inst_29068 = (state_29089[(7)]);
var inst_29069 = (state_29089[(8)]);
var inst_29068__$1 = (state_29089[(2)]);
var inst_29069__$1 = cljs.core.nth.call(null,inst_29068__$1,(0),null);
var inst_29070 = cljs.core.nth.call(null,inst_29068__$1,(1),null);
var inst_29071 = (inst_29069__$1 == null);
var state_29089__$1 = (function (){var statearr_29091 = state_29089;
(statearr_29091[(7)] = inst_29068__$1);

(statearr_29091[(9)] = inst_29070);

(statearr_29091[(8)] = inst_29069__$1);

return statearr_29091;
})();
if(cljs.core.truth_(inst_29071)){
var statearr_29092_29118 = state_29089__$1;
(statearr_29092_29118[(1)] = (8));

} else {
var statearr_29093_29119 = state_29089__$1;
(statearr_29093_29119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (1))){
var inst_29060 = cljs.core.vec.call(null,chs);
var inst_29061 = inst_29060;
var state_29089__$1 = (function (){var statearr_29094 = state_29089;
(statearr_29094[(10)] = inst_29061);

return statearr_29094;
})();
var statearr_29095_29120 = state_29089__$1;
(statearr_29095_29120[(2)] = null);

(statearr_29095_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (4))){
var inst_29061 = (state_29089[(10)]);
var state_29089__$1 = state_29089;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29089__$1,(7),inst_29061);
} else {
if((state_val_29090 === (6))){
var inst_29085 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
var statearr_29096_29121 = state_29089__$1;
(statearr_29096_29121[(2)] = inst_29085);

(statearr_29096_29121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (3))){
var inst_29087 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29089__$1,inst_29087);
} else {
if((state_val_29090 === (2))){
var inst_29061 = (state_29089[(10)]);
var inst_29063 = cljs.core.count.call(null,inst_29061);
var inst_29064 = (inst_29063 > (0));
var state_29089__$1 = state_29089;
if(cljs.core.truth_(inst_29064)){
var statearr_29098_29122 = state_29089__$1;
(statearr_29098_29122[(1)] = (4));

} else {
var statearr_29099_29123 = state_29089__$1;
(statearr_29099_29123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (11))){
var inst_29061 = (state_29089[(10)]);
var inst_29078 = (state_29089[(2)]);
var tmp29097 = inst_29061;
var inst_29061__$1 = tmp29097;
var state_29089__$1 = (function (){var statearr_29100 = state_29089;
(statearr_29100[(10)] = inst_29061__$1);

(statearr_29100[(11)] = inst_29078);

return statearr_29100;
})();
var statearr_29101_29124 = state_29089__$1;
(statearr_29101_29124[(2)] = null);

(statearr_29101_29124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (9))){
var inst_29069 = (state_29089[(8)]);
var state_29089__$1 = state_29089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29089__$1,(11),out,inst_29069);
} else {
if((state_val_29090 === (5))){
var inst_29083 = cljs.core.async.close_BANG_.call(null,out);
var state_29089__$1 = state_29089;
var statearr_29102_29125 = state_29089__$1;
(statearr_29102_29125[(2)] = inst_29083);

(statearr_29102_29125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (10))){
var inst_29081 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
var statearr_29103_29126 = state_29089__$1;
(statearr_29103_29126[(2)] = inst_29081);

(statearr_29103_29126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (8))){
var inst_29068 = (state_29089[(7)]);
var inst_29070 = (state_29089[(9)]);
var inst_29061 = (state_29089[(10)]);
var inst_29069 = (state_29089[(8)]);
var inst_29073 = (function (){var cs = inst_29061;
var vec__29066 = inst_29068;
var v = inst_29069;
var c = inst_29070;
return ((function (cs,vec__29066,v,c,inst_29068,inst_29070,inst_29061,inst_29069,state_val_29090,c__20225__auto___29117,out){
return (function (p1__29056_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29056_SHARP_);
});
;})(cs,vec__29066,v,c,inst_29068,inst_29070,inst_29061,inst_29069,state_val_29090,c__20225__auto___29117,out))
})();
var inst_29074 = cljs.core.filterv.call(null,inst_29073,inst_29061);
var inst_29061__$1 = inst_29074;
var state_29089__$1 = (function (){var statearr_29104 = state_29089;
(statearr_29104[(10)] = inst_29061__$1);

return statearr_29104;
})();
var statearr_29105_29127 = state_29089__$1;
(statearr_29105_29127[(2)] = null);

(statearr_29105_29127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29117,out))
;
return ((function (switch__20160__auto__,c__20225__auto___29117,out){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29109[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29109[(1)] = (1));

return statearr_29109;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29089){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29110){if((e29110 instanceof Object)){
var ex__20164__auto__ = e29110;
var statearr_29111_29128 = state_29089;
(statearr_29111_29128[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29129 = state_29089;
state_29089 = G__29129;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29117,out))
})();
var state__20227__auto__ = (function (){var statearr_29112 = f__20226__auto__.call(null);
(statearr_29112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29117);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29117,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29130 = [];
var len__17363__auto___29179 = arguments.length;
var i__17364__auto___29180 = (0);
while(true){
if((i__17364__auto___29180 < len__17363__auto___29179)){
args29130.push((arguments[i__17364__auto___29180]));

var G__29181 = (i__17364__auto___29180 + (1));
i__17364__auto___29180 = G__29181;
continue;
} else {
}
break;
}

var G__29132 = args29130.length;
switch (G__29132) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29130.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20225__auto___29183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29183,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29183,out){
return (function (state_29156){
var state_val_29157 = (state_29156[(1)]);
if((state_val_29157 === (7))){
var inst_29138 = (state_29156[(7)]);
var inst_29138__$1 = (state_29156[(2)]);
var inst_29139 = (inst_29138__$1 == null);
var inst_29140 = cljs.core.not.call(null,inst_29139);
var state_29156__$1 = (function (){var statearr_29158 = state_29156;
(statearr_29158[(7)] = inst_29138__$1);

return statearr_29158;
})();
if(inst_29140){
var statearr_29159_29184 = state_29156__$1;
(statearr_29159_29184[(1)] = (8));

} else {
var statearr_29160_29185 = state_29156__$1;
(statearr_29160_29185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (1))){
var inst_29133 = (0);
var state_29156__$1 = (function (){var statearr_29161 = state_29156;
(statearr_29161[(8)] = inst_29133);

return statearr_29161;
})();
var statearr_29162_29186 = state_29156__$1;
(statearr_29162_29186[(2)] = null);

(statearr_29162_29186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (4))){
var state_29156__$1 = state_29156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29156__$1,(7),ch);
} else {
if((state_val_29157 === (6))){
var inst_29151 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29163_29187 = state_29156__$1;
(statearr_29163_29187[(2)] = inst_29151);

(statearr_29163_29187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (3))){
var inst_29153 = (state_29156[(2)]);
var inst_29154 = cljs.core.async.close_BANG_.call(null,out);
var state_29156__$1 = (function (){var statearr_29164 = state_29156;
(statearr_29164[(9)] = inst_29153);

return statearr_29164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29156__$1,inst_29154);
} else {
if((state_val_29157 === (2))){
var inst_29133 = (state_29156[(8)]);
var inst_29135 = (inst_29133 < n);
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29135)){
var statearr_29165_29188 = state_29156__$1;
(statearr_29165_29188[(1)] = (4));

} else {
var statearr_29166_29189 = state_29156__$1;
(statearr_29166_29189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (11))){
var inst_29133 = (state_29156[(8)]);
var inst_29143 = (state_29156[(2)]);
var inst_29144 = (inst_29133 + (1));
var inst_29133__$1 = inst_29144;
var state_29156__$1 = (function (){var statearr_29167 = state_29156;
(statearr_29167[(8)] = inst_29133__$1);

(statearr_29167[(10)] = inst_29143);

return statearr_29167;
})();
var statearr_29168_29190 = state_29156__$1;
(statearr_29168_29190[(2)] = null);

(statearr_29168_29190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (9))){
var state_29156__$1 = state_29156;
var statearr_29169_29191 = state_29156__$1;
(statearr_29169_29191[(2)] = null);

(statearr_29169_29191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (5))){
var state_29156__$1 = state_29156;
var statearr_29170_29192 = state_29156__$1;
(statearr_29170_29192[(2)] = null);

(statearr_29170_29192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (10))){
var inst_29148 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29171_29193 = state_29156__$1;
(statearr_29171_29193[(2)] = inst_29148);

(statearr_29171_29193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (8))){
var inst_29138 = (state_29156[(7)]);
var state_29156__$1 = state_29156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29156__$1,(11),out,inst_29138);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29183,out))
;
return ((function (switch__20160__auto__,c__20225__auto___29183,out){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29175[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29175[(1)] = (1));

return statearr_29175;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29156){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29176){if((e29176 instanceof Object)){
var ex__20164__auto__ = e29176;
var statearr_29177_29194 = state_29156;
(statearr_29177_29194[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29195 = state_29156;
state_29156 = G__29195;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29183,out))
})();
var state__20227__auto__ = (function (){var statearr_29178 = f__20226__auto__.call(null);
(statearr_29178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29183);

return statearr_29178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29183,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29203 = (function (map_LT_,f,ch,meta29204){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29204 = meta29204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29205,meta29204__$1){
var self__ = this;
var _29205__$1 = this;
return (new cljs.core.async.t_cljs$core$async29203(self__.map_LT_,self__.f,self__.ch,meta29204__$1));
});

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29205){
var self__ = this;
var _29205__$1 = this;
return self__.meta29204;
});

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29206 = (function (map_LT_,f,ch,meta29204,_,fn1,meta29207){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29204 = meta29204;
this._ = _;
this.fn1 = fn1;
this.meta29207 = meta29207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29208,meta29207__$1){
var self__ = this;
var _29208__$1 = this;
return (new cljs.core.async.t_cljs$core$async29206(self__.map_LT_,self__.f,self__.ch,self__.meta29204,self__._,self__.fn1,meta29207__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29208){
var self__ = this;
var _29208__$1 = this;
return self__.meta29207;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29196_SHARP_){
return f1.call(null,(((p1__29196_SHARP_ == null))?null:self__.f.call(null,p1__29196_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29206.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29204","meta29204",-311025741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29203","cljs.core.async/t_cljs$core$async29203",660595892,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29207","meta29207",-156677040,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29206";

cljs.core.async.t_cljs$core$async29206.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async29206");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29206 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29206(map_LT___$1,f__$1,ch__$1,meta29204__$1,___$2,fn1__$1,meta29207){
return (new cljs.core.async.t_cljs$core$async29206(map_LT___$1,f__$1,ch__$1,meta29204__$1,___$2,fn1__$1,meta29207));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29206(self__.map_LT_,self__.f,self__.ch,self__.meta29204,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16293__auto__ = ret;
if(cljs.core.truth_(and__16293__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16293__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29204","meta29204",-311025741,null)], null);
});

cljs.core.async.t_cljs$core$async29203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29203";

cljs.core.async.t_cljs$core$async29203.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async29203");
});

cljs.core.async.__GT_t_cljs$core$async29203 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29203(map_LT___$1,f__$1,ch__$1,meta29204){
return (new cljs.core.async.t_cljs$core$async29203(map_LT___$1,f__$1,ch__$1,meta29204));
});

}

return (new cljs.core.async.t_cljs$core$async29203(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29212 = (function (map_GT_,f,ch,meta29213){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29213 = meta29213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29214,meta29213__$1){
var self__ = this;
var _29214__$1 = this;
return (new cljs.core.async.t_cljs$core$async29212(self__.map_GT_,self__.f,self__.ch,meta29213__$1));
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29214){
var self__ = this;
var _29214__$1 = this;
return self__.meta29213;
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29213","meta29213",815080954,null)], null);
});

cljs.core.async.t_cljs$core$async29212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29212";

cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async29212");
});

cljs.core.async.__GT_t_cljs$core$async29212 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29212(map_GT___$1,f__$1,ch__$1,meta29213){
return (new cljs.core.async.t_cljs$core$async29212(map_GT___$1,f__$1,ch__$1,meta29213));
});

}

return (new cljs.core.async.t_cljs$core$async29212(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29218 = (function (filter_GT_,p,ch,meta29219){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29219 = meta29219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29220,meta29219__$1){
var self__ = this;
var _29220__$1 = this;
return (new cljs.core.async.t_cljs$core$async29218(self__.filter_GT_,self__.p,self__.ch,meta29219__$1));
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29220){
var self__ = this;
var _29220__$1 = this;
return self__.meta29219;
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29219","meta29219",-1095825849,null)], null);
});

cljs.core.async.t_cljs$core$async29218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29218";

cljs.core.async.t_cljs$core$async29218.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"cljs.core.async/t_cljs$core$async29218");
});

cljs.core.async.__GT_t_cljs$core$async29218 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29218(filter_GT___$1,p__$1,ch__$1,meta29219){
return (new cljs.core.async.t_cljs$core$async29218(filter_GT___$1,p__$1,ch__$1,meta29219));
});

}

return (new cljs.core.async.t_cljs$core$async29218(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29221 = [];
var len__17363__auto___29265 = arguments.length;
var i__17364__auto___29266 = (0);
while(true){
if((i__17364__auto___29266 < len__17363__auto___29265)){
args29221.push((arguments[i__17364__auto___29266]));

var G__29267 = (i__17364__auto___29266 + (1));
i__17364__auto___29266 = G__29267;
continue;
} else {
}
break;
}

var G__29223 = args29221.length;
switch (G__29223) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29221.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20225__auto___29269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29269,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29269,out){
return (function (state_29244){
var state_val_29245 = (state_29244[(1)]);
if((state_val_29245 === (7))){
var inst_29240 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29246_29270 = state_29244__$1;
(statearr_29246_29270[(2)] = inst_29240);

(statearr_29246_29270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (1))){
var state_29244__$1 = state_29244;
var statearr_29247_29271 = state_29244__$1;
(statearr_29247_29271[(2)] = null);

(statearr_29247_29271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (4))){
var inst_29226 = (state_29244[(7)]);
var inst_29226__$1 = (state_29244[(2)]);
var inst_29227 = (inst_29226__$1 == null);
var state_29244__$1 = (function (){var statearr_29248 = state_29244;
(statearr_29248[(7)] = inst_29226__$1);

return statearr_29248;
})();
if(cljs.core.truth_(inst_29227)){
var statearr_29249_29272 = state_29244__$1;
(statearr_29249_29272[(1)] = (5));

} else {
var statearr_29250_29273 = state_29244__$1;
(statearr_29250_29273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (6))){
var inst_29226 = (state_29244[(7)]);
var inst_29231 = p.call(null,inst_29226);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29231)){
var statearr_29251_29274 = state_29244__$1;
(statearr_29251_29274[(1)] = (8));

} else {
var statearr_29252_29275 = state_29244__$1;
(statearr_29252_29275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (3))){
var inst_29242 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29244__$1,inst_29242);
} else {
if((state_val_29245 === (2))){
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(4),ch);
} else {
if((state_val_29245 === (11))){
var inst_29234 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29253_29276 = state_29244__$1;
(statearr_29253_29276[(2)] = inst_29234);

(statearr_29253_29276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (9))){
var state_29244__$1 = state_29244;
var statearr_29254_29277 = state_29244__$1;
(statearr_29254_29277[(2)] = null);

(statearr_29254_29277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (5))){
var inst_29229 = cljs.core.async.close_BANG_.call(null,out);
var state_29244__$1 = state_29244;
var statearr_29255_29278 = state_29244__$1;
(statearr_29255_29278[(2)] = inst_29229);

(statearr_29255_29278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (10))){
var inst_29237 = (state_29244[(2)]);
var state_29244__$1 = (function (){var statearr_29256 = state_29244;
(statearr_29256[(8)] = inst_29237);

return statearr_29256;
})();
var statearr_29257_29279 = state_29244__$1;
(statearr_29257_29279[(2)] = null);

(statearr_29257_29279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (8))){
var inst_29226 = (state_29244[(7)]);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29244__$1,(11),out,inst_29226);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29269,out))
;
return ((function (switch__20160__auto__,c__20225__auto___29269,out){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29261 = [null,null,null,null,null,null,null,null,null];
(statearr_29261[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29261[(1)] = (1));

return statearr_29261;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29244){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29262){if((e29262 instanceof Object)){
var ex__20164__auto__ = e29262;
var statearr_29263_29280 = state_29244;
(statearr_29263_29280[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29281 = state_29244;
state_29244 = G__29281;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29269,out))
})();
var state__20227__auto__ = (function (){var statearr_29264 = f__20226__auto__.call(null);
(statearr_29264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29269);

return statearr_29264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29269,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29282 = [];
var len__17363__auto___29285 = arguments.length;
var i__17364__auto___29286 = (0);
while(true){
if((i__17364__auto___29286 < len__17363__auto___29285)){
args29282.push((arguments[i__17364__auto___29286]));

var G__29287 = (i__17364__auto___29286 + (1));
i__17364__auto___29286 = G__29287;
continue;
} else {
}
break;
}

var G__29284 = args29282.length;
switch (G__29284) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29282.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__){
return (function (state_29454){
var state_val_29455 = (state_29454[(1)]);
if((state_val_29455 === (7))){
var inst_29450 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29456_29497 = state_29454__$1;
(statearr_29456_29497[(2)] = inst_29450);

(statearr_29456_29497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (20))){
var inst_29420 = (state_29454[(7)]);
var inst_29431 = (state_29454[(2)]);
var inst_29432 = cljs.core.next.call(null,inst_29420);
var inst_29406 = inst_29432;
var inst_29407 = null;
var inst_29408 = (0);
var inst_29409 = (0);
var state_29454__$1 = (function (){var statearr_29457 = state_29454;
(statearr_29457[(8)] = inst_29407);

(statearr_29457[(9)] = inst_29408);

(statearr_29457[(10)] = inst_29431);

(statearr_29457[(11)] = inst_29406);

(statearr_29457[(12)] = inst_29409);

return statearr_29457;
})();
var statearr_29458_29498 = state_29454__$1;
(statearr_29458_29498[(2)] = null);

(statearr_29458_29498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (1))){
var state_29454__$1 = state_29454;
var statearr_29459_29499 = state_29454__$1;
(statearr_29459_29499[(2)] = null);

(statearr_29459_29499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (4))){
var inst_29395 = (state_29454[(13)]);
var inst_29395__$1 = (state_29454[(2)]);
var inst_29396 = (inst_29395__$1 == null);
var state_29454__$1 = (function (){var statearr_29460 = state_29454;
(statearr_29460[(13)] = inst_29395__$1);

return statearr_29460;
})();
if(cljs.core.truth_(inst_29396)){
var statearr_29461_29500 = state_29454__$1;
(statearr_29461_29500[(1)] = (5));

} else {
var statearr_29462_29501 = state_29454__$1;
(statearr_29462_29501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (15))){
var state_29454__$1 = state_29454;
var statearr_29466_29502 = state_29454__$1;
(statearr_29466_29502[(2)] = null);

(statearr_29466_29502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (21))){
var state_29454__$1 = state_29454;
var statearr_29467_29503 = state_29454__$1;
(statearr_29467_29503[(2)] = null);

(statearr_29467_29503[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (13))){
var inst_29407 = (state_29454[(8)]);
var inst_29408 = (state_29454[(9)]);
var inst_29406 = (state_29454[(11)]);
var inst_29409 = (state_29454[(12)]);
var inst_29416 = (state_29454[(2)]);
var inst_29417 = (inst_29409 + (1));
var tmp29463 = inst_29407;
var tmp29464 = inst_29408;
var tmp29465 = inst_29406;
var inst_29406__$1 = tmp29465;
var inst_29407__$1 = tmp29463;
var inst_29408__$1 = tmp29464;
var inst_29409__$1 = inst_29417;
var state_29454__$1 = (function (){var statearr_29468 = state_29454;
(statearr_29468[(8)] = inst_29407__$1);

(statearr_29468[(9)] = inst_29408__$1);

(statearr_29468[(14)] = inst_29416);

(statearr_29468[(11)] = inst_29406__$1);

(statearr_29468[(12)] = inst_29409__$1);

return statearr_29468;
})();
var statearr_29469_29504 = state_29454__$1;
(statearr_29469_29504[(2)] = null);

(statearr_29469_29504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (22))){
var state_29454__$1 = state_29454;
var statearr_29470_29505 = state_29454__$1;
(statearr_29470_29505[(2)] = null);

(statearr_29470_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (6))){
var inst_29395 = (state_29454[(13)]);
var inst_29404 = f.call(null,inst_29395);
var inst_29405 = cljs.core.seq.call(null,inst_29404);
var inst_29406 = inst_29405;
var inst_29407 = null;
var inst_29408 = (0);
var inst_29409 = (0);
var state_29454__$1 = (function (){var statearr_29471 = state_29454;
(statearr_29471[(8)] = inst_29407);

(statearr_29471[(9)] = inst_29408);

(statearr_29471[(11)] = inst_29406);

(statearr_29471[(12)] = inst_29409);

return statearr_29471;
})();
var statearr_29472_29506 = state_29454__$1;
(statearr_29472_29506[(2)] = null);

(statearr_29472_29506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (17))){
var inst_29420 = (state_29454[(7)]);
var inst_29424 = cljs.core.chunk_first.call(null,inst_29420);
var inst_29425 = cljs.core.chunk_rest.call(null,inst_29420);
var inst_29426 = cljs.core.count.call(null,inst_29424);
var inst_29406 = inst_29425;
var inst_29407 = inst_29424;
var inst_29408 = inst_29426;
var inst_29409 = (0);
var state_29454__$1 = (function (){var statearr_29473 = state_29454;
(statearr_29473[(8)] = inst_29407);

(statearr_29473[(9)] = inst_29408);

(statearr_29473[(11)] = inst_29406);

(statearr_29473[(12)] = inst_29409);

return statearr_29473;
})();
var statearr_29474_29507 = state_29454__$1;
(statearr_29474_29507[(2)] = null);

(statearr_29474_29507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (3))){
var inst_29452 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29454__$1,inst_29452);
} else {
if((state_val_29455 === (12))){
var inst_29440 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29475_29508 = state_29454__$1;
(statearr_29475_29508[(2)] = inst_29440);

(statearr_29475_29508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (2))){
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29454__$1,(4),in$);
} else {
if((state_val_29455 === (23))){
var inst_29448 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29476_29509 = state_29454__$1;
(statearr_29476_29509[(2)] = inst_29448);

(statearr_29476_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (19))){
var inst_29435 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29477_29510 = state_29454__$1;
(statearr_29477_29510[(2)] = inst_29435);

(statearr_29477_29510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (11))){
var inst_29406 = (state_29454[(11)]);
var inst_29420 = (state_29454[(7)]);
var inst_29420__$1 = cljs.core.seq.call(null,inst_29406);
var state_29454__$1 = (function (){var statearr_29478 = state_29454;
(statearr_29478[(7)] = inst_29420__$1);

return statearr_29478;
})();
if(inst_29420__$1){
var statearr_29479_29511 = state_29454__$1;
(statearr_29479_29511[(1)] = (14));

} else {
var statearr_29480_29512 = state_29454__$1;
(statearr_29480_29512[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (9))){
var inst_29442 = (state_29454[(2)]);
var inst_29443 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29454__$1 = (function (){var statearr_29481 = state_29454;
(statearr_29481[(15)] = inst_29442);

return statearr_29481;
})();
if(cljs.core.truth_(inst_29443)){
var statearr_29482_29513 = state_29454__$1;
(statearr_29482_29513[(1)] = (21));

} else {
var statearr_29483_29514 = state_29454__$1;
(statearr_29483_29514[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (5))){
var inst_29398 = cljs.core.async.close_BANG_.call(null,out);
var state_29454__$1 = state_29454;
var statearr_29484_29515 = state_29454__$1;
(statearr_29484_29515[(2)] = inst_29398);

(statearr_29484_29515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (14))){
var inst_29420 = (state_29454[(7)]);
var inst_29422 = cljs.core.chunked_seq_QMARK_.call(null,inst_29420);
var state_29454__$1 = state_29454;
if(inst_29422){
var statearr_29485_29516 = state_29454__$1;
(statearr_29485_29516[(1)] = (17));

} else {
var statearr_29486_29517 = state_29454__$1;
(statearr_29486_29517[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (16))){
var inst_29438 = (state_29454[(2)]);
var state_29454__$1 = state_29454;
var statearr_29487_29518 = state_29454__$1;
(statearr_29487_29518[(2)] = inst_29438);

(statearr_29487_29518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29455 === (10))){
var inst_29407 = (state_29454[(8)]);
var inst_29409 = (state_29454[(12)]);
var inst_29414 = cljs.core._nth.call(null,inst_29407,inst_29409);
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29454__$1,(13),out,inst_29414);
} else {
if((state_val_29455 === (18))){
var inst_29420 = (state_29454[(7)]);
var inst_29429 = cljs.core.first.call(null,inst_29420);
var state_29454__$1 = state_29454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29454__$1,(20),out,inst_29429);
} else {
if((state_val_29455 === (8))){
var inst_29408 = (state_29454[(9)]);
var inst_29409 = (state_29454[(12)]);
var inst_29411 = (inst_29409 < inst_29408);
var inst_29412 = inst_29411;
var state_29454__$1 = state_29454;
if(cljs.core.truth_(inst_29412)){
var statearr_29488_29519 = state_29454__$1;
(statearr_29488_29519[(1)] = (10));

} else {
var statearr_29489_29520 = state_29454__$1;
(statearr_29489_29520[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto__))
;
return ((function (switch__20160__auto__,c__20225__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20161__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20161__auto____0 = (function (){
var statearr_29493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29493[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20161__auto__);

(statearr_29493[(1)] = (1));

return statearr_29493;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20161__auto____1 = (function (state_29454){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29494){if((e29494 instanceof Object)){
var ex__20164__auto__ = e29494;
var statearr_29495_29521 = state_29454;
(statearr_29495_29521[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29522 = state_29454;
state_29454 = G__29522;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20161__auto__ = function(state_29454){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20161__auto____1.call(this,state_29454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20161__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20161__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__))
})();
var state__20227__auto__ = (function (){var statearr_29496 = f__20226__auto__.call(null);
(statearr_29496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_29496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__))
);

return c__20225__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29523 = [];
var len__17363__auto___29526 = arguments.length;
var i__17364__auto___29527 = (0);
while(true){
if((i__17364__auto___29527 < len__17363__auto___29526)){
args29523.push((arguments[i__17364__auto___29527]));

var G__29528 = (i__17364__auto___29527 + (1));
i__17364__auto___29527 = G__29528;
continue;
} else {
}
break;
}

var G__29525 = args29523.length;
switch (G__29525) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29523.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29530 = [];
var len__17363__auto___29533 = arguments.length;
var i__17364__auto___29534 = (0);
while(true){
if((i__17364__auto___29534 < len__17363__auto___29533)){
args29530.push((arguments[i__17364__auto___29534]));

var G__29535 = (i__17364__auto___29534 + (1));
i__17364__auto___29534 = G__29535;
continue;
} else {
}
break;
}

var G__29532 = args29530.length;
switch (G__29532) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29530.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29537 = [];
var len__17363__auto___29588 = arguments.length;
var i__17364__auto___29589 = (0);
while(true){
if((i__17364__auto___29589 < len__17363__auto___29588)){
args29537.push((arguments[i__17364__auto___29589]));

var G__29590 = (i__17364__auto___29589 + (1));
i__17364__auto___29589 = G__29590;
continue;
} else {
}
break;
}

var G__29539 = args29537.length;
switch (G__29539) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29537.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20225__auto___29592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29592,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29592,out){
return (function (state_29563){
var state_val_29564 = (state_29563[(1)]);
if((state_val_29564 === (7))){
var inst_29558 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29565_29593 = state_29563__$1;
(statearr_29565_29593[(2)] = inst_29558);

(statearr_29565_29593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (1))){
var inst_29540 = null;
var state_29563__$1 = (function (){var statearr_29566 = state_29563;
(statearr_29566[(7)] = inst_29540);

return statearr_29566;
})();
var statearr_29567_29594 = state_29563__$1;
(statearr_29567_29594[(2)] = null);

(statearr_29567_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (4))){
var inst_29543 = (state_29563[(8)]);
var inst_29543__$1 = (state_29563[(2)]);
var inst_29544 = (inst_29543__$1 == null);
var inst_29545 = cljs.core.not.call(null,inst_29544);
var state_29563__$1 = (function (){var statearr_29568 = state_29563;
(statearr_29568[(8)] = inst_29543__$1);

return statearr_29568;
})();
if(inst_29545){
var statearr_29569_29595 = state_29563__$1;
(statearr_29569_29595[(1)] = (5));

} else {
var statearr_29570_29596 = state_29563__$1;
(statearr_29570_29596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (6))){
var state_29563__$1 = state_29563;
var statearr_29571_29597 = state_29563__$1;
(statearr_29571_29597[(2)] = null);

(statearr_29571_29597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (3))){
var inst_29560 = (state_29563[(2)]);
var inst_29561 = cljs.core.async.close_BANG_.call(null,out);
var state_29563__$1 = (function (){var statearr_29572 = state_29563;
(statearr_29572[(9)] = inst_29560);

return statearr_29572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29563__$1,inst_29561);
} else {
if((state_val_29564 === (2))){
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29563__$1,(4),ch);
} else {
if((state_val_29564 === (11))){
var inst_29543 = (state_29563[(8)]);
var inst_29552 = (state_29563[(2)]);
var inst_29540 = inst_29543;
var state_29563__$1 = (function (){var statearr_29573 = state_29563;
(statearr_29573[(10)] = inst_29552);

(statearr_29573[(7)] = inst_29540);

return statearr_29573;
})();
var statearr_29574_29598 = state_29563__$1;
(statearr_29574_29598[(2)] = null);

(statearr_29574_29598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (9))){
var inst_29543 = (state_29563[(8)]);
var state_29563__$1 = state_29563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29563__$1,(11),out,inst_29543);
} else {
if((state_val_29564 === (5))){
var inst_29543 = (state_29563[(8)]);
var inst_29540 = (state_29563[(7)]);
var inst_29547 = cljs.core._EQ_.call(null,inst_29543,inst_29540);
var state_29563__$1 = state_29563;
if(inst_29547){
var statearr_29576_29599 = state_29563__$1;
(statearr_29576_29599[(1)] = (8));

} else {
var statearr_29577_29600 = state_29563__$1;
(statearr_29577_29600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (10))){
var inst_29555 = (state_29563[(2)]);
var state_29563__$1 = state_29563;
var statearr_29578_29601 = state_29563__$1;
(statearr_29578_29601[(2)] = inst_29555);

(statearr_29578_29601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29564 === (8))){
var inst_29540 = (state_29563[(7)]);
var tmp29575 = inst_29540;
var inst_29540__$1 = tmp29575;
var state_29563__$1 = (function (){var statearr_29579 = state_29563;
(statearr_29579[(7)] = inst_29540__$1);

return statearr_29579;
})();
var statearr_29580_29602 = state_29563__$1;
(statearr_29580_29602[(2)] = null);

(statearr_29580_29602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29592,out))
;
return ((function (switch__20160__auto__,c__20225__auto___29592,out){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29584[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29584[(1)] = (1));

return statearr_29584;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29563){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29585){if((e29585 instanceof Object)){
var ex__20164__auto__ = e29585;
var statearr_29586_29603 = state_29563;
(statearr_29586_29603[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29604 = state_29563;
state_29563 = G__29604;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29592,out))
})();
var state__20227__auto__ = (function (){var statearr_29587 = f__20226__auto__.call(null);
(statearr_29587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29592);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29592,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29605 = [];
var len__17363__auto___29675 = arguments.length;
var i__17364__auto___29676 = (0);
while(true){
if((i__17364__auto___29676 < len__17363__auto___29675)){
args29605.push((arguments[i__17364__auto___29676]));

var G__29677 = (i__17364__auto___29676 + (1));
i__17364__auto___29676 = G__29677;
continue;
} else {
}
break;
}

var G__29607 = args29605.length;
switch (G__29607) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29605.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20225__auto___29679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29679,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29679,out){
return (function (state_29645){
var state_val_29646 = (state_29645[(1)]);
if((state_val_29646 === (7))){
var inst_29641 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29647_29680 = state_29645__$1;
(statearr_29647_29680[(2)] = inst_29641);

(statearr_29647_29680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (1))){
var inst_29608 = (new Array(n));
var inst_29609 = inst_29608;
var inst_29610 = (0);
var state_29645__$1 = (function (){var statearr_29648 = state_29645;
(statearr_29648[(7)] = inst_29609);

(statearr_29648[(8)] = inst_29610);

return statearr_29648;
})();
var statearr_29649_29681 = state_29645__$1;
(statearr_29649_29681[(2)] = null);

(statearr_29649_29681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (4))){
var inst_29613 = (state_29645[(9)]);
var inst_29613__$1 = (state_29645[(2)]);
var inst_29614 = (inst_29613__$1 == null);
var inst_29615 = cljs.core.not.call(null,inst_29614);
var state_29645__$1 = (function (){var statearr_29650 = state_29645;
(statearr_29650[(9)] = inst_29613__$1);

return statearr_29650;
})();
if(inst_29615){
var statearr_29651_29682 = state_29645__$1;
(statearr_29651_29682[(1)] = (5));

} else {
var statearr_29652_29683 = state_29645__$1;
(statearr_29652_29683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (15))){
var inst_29635 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29653_29684 = state_29645__$1;
(statearr_29653_29684[(2)] = inst_29635);

(statearr_29653_29684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (13))){
var state_29645__$1 = state_29645;
var statearr_29654_29685 = state_29645__$1;
(statearr_29654_29685[(2)] = null);

(statearr_29654_29685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (6))){
var inst_29610 = (state_29645[(8)]);
var inst_29631 = (inst_29610 > (0));
var state_29645__$1 = state_29645;
if(cljs.core.truth_(inst_29631)){
var statearr_29655_29686 = state_29645__$1;
(statearr_29655_29686[(1)] = (12));

} else {
var statearr_29656_29687 = state_29645__$1;
(statearr_29656_29687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (3))){
var inst_29643 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29645__$1,inst_29643);
} else {
if((state_val_29646 === (12))){
var inst_29609 = (state_29645[(7)]);
var inst_29633 = cljs.core.vec.call(null,inst_29609);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29645__$1,(15),out,inst_29633);
} else {
if((state_val_29646 === (2))){
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29645__$1,(4),ch);
} else {
if((state_val_29646 === (11))){
var inst_29625 = (state_29645[(2)]);
var inst_29626 = (new Array(n));
var inst_29609 = inst_29626;
var inst_29610 = (0);
var state_29645__$1 = (function (){var statearr_29657 = state_29645;
(statearr_29657[(7)] = inst_29609);

(statearr_29657[(10)] = inst_29625);

(statearr_29657[(8)] = inst_29610);

return statearr_29657;
})();
var statearr_29658_29688 = state_29645__$1;
(statearr_29658_29688[(2)] = null);

(statearr_29658_29688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (9))){
var inst_29609 = (state_29645[(7)]);
var inst_29623 = cljs.core.vec.call(null,inst_29609);
var state_29645__$1 = state_29645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29645__$1,(11),out,inst_29623);
} else {
if((state_val_29646 === (5))){
var inst_29613 = (state_29645[(9)]);
var inst_29609 = (state_29645[(7)]);
var inst_29618 = (state_29645[(11)]);
var inst_29610 = (state_29645[(8)]);
var inst_29617 = (inst_29609[inst_29610] = inst_29613);
var inst_29618__$1 = (inst_29610 + (1));
var inst_29619 = (inst_29618__$1 < n);
var state_29645__$1 = (function (){var statearr_29659 = state_29645;
(statearr_29659[(12)] = inst_29617);

(statearr_29659[(11)] = inst_29618__$1);

return statearr_29659;
})();
if(cljs.core.truth_(inst_29619)){
var statearr_29660_29689 = state_29645__$1;
(statearr_29660_29689[(1)] = (8));

} else {
var statearr_29661_29690 = state_29645__$1;
(statearr_29661_29690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (14))){
var inst_29638 = (state_29645[(2)]);
var inst_29639 = cljs.core.async.close_BANG_.call(null,out);
var state_29645__$1 = (function (){var statearr_29663 = state_29645;
(statearr_29663[(13)] = inst_29638);

return statearr_29663;
})();
var statearr_29664_29691 = state_29645__$1;
(statearr_29664_29691[(2)] = inst_29639);

(statearr_29664_29691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (10))){
var inst_29629 = (state_29645[(2)]);
var state_29645__$1 = state_29645;
var statearr_29665_29692 = state_29645__$1;
(statearr_29665_29692[(2)] = inst_29629);

(statearr_29665_29692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29646 === (8))){
var inst_29609 = (state_29645[(7)]);
var inst_29618 = (state_29645[(11)]);
var tmp29662 = inst_29609;
var inst_29609__$1 = tmp29662;
var inst_29610 = inst_29618;
var state_29645__$1 = (function (){var statearr_29666 = state_29645;
(statearr_29666[(7)] = inst_29609__$1);

(statearr_29666[(8)] = inst_29610);

return statearr_29666;
})();
var statearr_29667_29693 = state_29645__$1;
(statearr_29667_29693[(2)] = null);

(statearr_29667_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29679,out))
;
return ((function (switch__20160__auto__,c__20225__auto___29679,out){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29671[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29671[(1)] = (1));

return statearr_29671;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29645){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29672){if((e29672 instanceof Object)){
var ex__20164__auto__ = e29672;
var statearr_29673_29694 = state_29645;
(statearr_29673_29694[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29695 = state_29645;
state_29645 = G__29695;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29679,out))
})();
var state__20227__auto__ = (function (){var statearr_29674 = f__20226__auto__.call(null);
(statearr_29674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29679);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29679,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29696 = [];
var len__17363__auto___29770 = arguments.length;
var i__17364__auto___29771 = (0);
while(true){
if((i__17364__auto___29771 < len__17363__auto___29770)){
args29696.push((arguments[i__17364__auto___29771]));

var G__29772 = (i__17364__auto___29771 + (1));
i__17364__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var G__29698 = args29696.length;
switch (G__29698) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29696.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20225__auto___29774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___29774,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___29774,out){
return (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (7))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29742_29775 = state_29740__$1;
(statearr_29742_29775[(2)] = inst_29736);

(statearr_29742_29775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (1))){
var inst_29699 = [];
var inst_29700 = inst_29699;
var inst_29701 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29740__$1 = (function (){var statearr_29743 = state_29740;
(statearr_29743[(7)] = inst_29701);

(statearr_29743[(8)] = inst_29700);

return statearr_29743;
})();
var statearr_29744_29776 = state_29740__$1;
(statearr_29744_29776[(2)] = null);

(statearr_29744_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (4))){
var inst_29704 = (state_29740[(9)]);
var inst_29704__$1 = (state_29740[(2)]);
var inst_29705 = (inst_29704__$1 == null);
var inst_29706 = cljs.core.not.call(null,inst_29705);
var state_29740__$1 = (function (){var statearr_29745 = state_29740;
(statearr_29745[(9)] = inst_29704__$1);

return statearr_29745;
})();
if(inst_29706){
var statearr_29746_29777 = state_29740__$1;
(statearr_29746_29777[(1)] = (5));

} else {
var statearr_29747_29778 = state_29740__$1;
(statearr_29747_29778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (15))){
var inst_29730 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29748_29779 = state_29740__$1;
(statearr_29748_29779[(2)] = inst_29730);

(statearr_29748_29779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (13))){
var state_29740__$1 = state_29740;
var statearr_29749_29780 = state_29740__$1;
(statearr_29749_29780[(2)] = null);

(statearr_29749_29780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (6))){
var inst_29700 = (state_29740[(8)]);
var inst_29725 = inst_29700.length;
var inst_29726 = (inst_29725 > (0));
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29726)){
var statearr_29750_29781 = state_29740__$1;
(statearr_29750_29781[(1)] = (12));

} else {
var statearr_29751_29782 = state_29740__$1;
(statearr_29751_29782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (12))){
var inst_29700 = (state_29740[(8)]);
var inst_29728 = cljs.core.vec.call(null,inst_29700);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(15),out,inst_29728);
} else {
if((state_val_29741 === (2))){
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29740__$1,(4),ch);
} else {
if((state_val_29741 === (11))){
var inst_29708 = (state_29740[(10)]);
var inst_29704 = (state_29740[(9)]);
var inst_29718 = (state_29740[(2)]);
var inst_29719 = [];
var inst_29720 = inst_29719.push(inst_29704);
var inst_29700 = inst_29719;
var inst_29701 = inst_29708;
var state_29740__$1 = (function (){var statearr_29752 = state_29740;
(statearr_29752[(11)] = inst_29718);

(statearr_29752[(7)] = inst_29701);

(statearr_29752[(12)] = inst_29720);

(statearr_29752[(8)] = inst_29700);

return statearr_29752;
})();
var statearr_29753_29783 = state_29740__$1;
(statearr_29753_29783[(2)] = null);

(statearr_29753_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (9))){
var inst_29700 = (state_29740[(8)]);
var inst_29716 = cljs.core.vec.call(null,inst_29700);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29740__$1,(11),out,inst_29716);
} else {
if((state_val_29741 === (5))){
var inst_29708 = (state_29740[(10)]);
var inst_29701 = (state_29740[(7)]);
var inst_29704 = (state_29740[(9)]);
var inst_29708__$1 = f.call(null,inst_29704);
var inst_29709 = cljs.core._EQ_.call(null,inst_29708__$1,inst_29701);
var inst_29710 = cljs.core.keyword_identical_QMARK_.call(null,inst_29701,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29711 = (inst_29709) || (inst_29710);
var state_29740__$1 = (function (){var statearr_29754 = state_29740;
(statearr_29754[(10)] = inst_29708__$1);

return statearr_29754;
})();
if(cljs.core.truth_(inst_29711)){
var statearr_29755_29784 = state_29740__$1;
(statearr_29755_29784[(1)] = (8));

} else {
var statearr_29756_29785 = state_29740__$1;
(statearr_29756_29785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (14))){
var inst_29733 = (state_29740[(2)]);
var inst_29734 = cljs.core.async.close_BANG_.call(null,out);
var state_29740__$1 = (function (){var statearr_29758 = state_29740;
(statearr_29758[(13)] = inst_29733);

return statearr_29758;
})();
var statearr_29759_29786 = state_29740__$1;
(statearr_29759_29786[(2)] = inst_29734);

(statearr_29759_29786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (10))){
var inst_29723 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29760_29787 = state_29740__$1;
(statearr_29760_29787[(2)] = inst_29723);

(statearr_29760_29787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29741 === (8))){
var inst_29708 = (state_29740[(10)]);
var inst_29704 = (state_29740[(9)]);
var inst_29700 = (state_29740[(8)]);
var inst_29713 = inst_29700.push(inst_29704);
var tmp29757 = inst_29700;
var inst_29700__$1 = tmp29757;
var inst_29701 = inst_29708;
var state_29740__$1 = (function (){var statearr_29761 = state_29740;
(statearr_29761[(14)] = inst_29713);

(statearr_29761[(7)] = inst_29701);

(statearr_29761[(8)] = inst_29700__$1);

return statearr_29761;
})();
var statearr_29762_29788 = state_29740__$1;
(statearr_29762_29788[(2)] = null);

(statearr_29762_29788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___29774,out))
;
return ((function (switch__20160__auto__,c__20225__auto___29774,out){
return (function() {
var cljs$core$async$state_machine__20161__auto__ = null;
var cljs$core$async$state_machine__20161__auto____0 = (function (){
var statearr_29766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29766[(0)] = cljs$core$async$state_machine__20161__auto__);

(statearr_29766[(1)] = (1));

return statearr_29766;
});
var cljs$core$async$state_machine__20161__auto____1 = (function (state_29740){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_29740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e29767){if((e29767 instanceof Object)){
var ex__20164__auto__ = e29767;
var statearr_29768_29789 = state_29740;
(statearr_29768_29789[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29790 = state_29740;
state_29740 = G__29790;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
cljs$core$async$state_machine__20161__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20161__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20161__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20161__auto____0;
cljs$core$async$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20161__auto____1;
return cljs$core$async$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___29774,out))
})();
var state__20227__auto__ = (function (){var statearr_29769 = f__20226__auto__.call(null);
(statearr_29769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___29774);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___29774,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map