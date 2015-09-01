// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25468 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25468 = (function (fn_handler,f,meta25469){
this.fn_handler = fn_handler;
this.f = f;
this.meta25469 = meta25469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25470,meta25469__$1){
var self__ = this;
var _25470__$1 = this;
return (new cljs.core.async.t25468(self__.fn_handler,self__.f,meta25469__$1));
});

cljs.core.async.t25468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25470){
var self__ = this;
var _25470__$1 = this;
return self__.meta25469;
});

cljs.core.async.t25468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25469","meta25469",1071236569,null)], null);
});

cljs.core.async.t25468.cljs$lang$type = true;

cljs.core.async.t25468.cljs$lang$ctorStr = "cljs.core.async/t25468";

cljs.core.async.t25468.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t25468");
});

cljs.core.async.__GT_t25468 = (function cljs$core$async$fn_handler_$___GT_t25468(fn_handler__$1,f__$1,meta25469){
return (new cljs.core.async.t25468(fn_handler__$1,f__$1,meta25469));
});

}

return (new cljs.core.async.t25468(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
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
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args25473 = [];
var len__17511__auto___25476 = arguments.length;
var i__17512__auto___25477 = (0);
while(true){
if((i__17512__auto___25477 < len__17511__auto___25476)){
args25473.push((arguments[i__17512__auto___25477]));

var G__25478 = (i__17512__auto___25477 + (1));
i__17512__auto___25477 = G__25478;
continue;
} else {
}
break;
}

var G__25475 = args25473.length;
switch (G__25475) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25473.length)].join('')));

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
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args25480 = [];
var len__17511__auto___25483 = arguments.length;
var i__17512__auto___25484 = (0);
while(true){
if((i__17512__auto___25484 < len__17511__auto___25483)){
args25480.push((arguments[i__17512__auto___25484]));

var G__25485 = (i__17512__auto___25484 + (1));
i__17512__auto___25484 = G__25485;
continue;
} else {
}
break;
}

var G__25482 = args25480.length;
switch (G__25482) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25480.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25487 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25487);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25487,ret){
return (function (){
return fn1.call(null,val_25487);
});})(val_25487,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args25488 = [];
var len__17511__auto___25491 = arguments.length;
var i__17512__auto___25492 = (0);
while(true){
if((i__17512__auto___25492 < len__17511__auto___25491)){
args25488.push((arguments[i__17512__auto___25492]));

var G__25493 = (i__17512__auto___25492 + (1));
i__17512__auto___25492 = G__25493;
continue;
} else {
}
break;
}

var G__25490 = args25488.length;
switch (G__25490) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25488.length)].join('')));

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
var n__17356__auto___25495 = n;
var x_25496 = (0);
while(true){
if((x_25496 < n__17356__auto___25495)){
(a[x_25496] = (0));

var G__25497 = (x_25496 + (1));
x_25496 = G__25497;
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

var G__25498 = (i + (1));
i = G__25498;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25502 = (function (alt_flag,flag,meta25503){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25503 = meta25503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25504,meta25503__$1){
var self__ = this;
var _25504__$1 = this;
return (new cljs.core.async.t25502(self__.alt_flag,self__.flag,meta25503__$1));
});})(flag))
;

cljs.core.async.t25502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25504){
var self__ = this;
var _25504__$1 = this;
return self__.meta25503;
});})(flag))
;

cljs.core.async.t25502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25502.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25503","meta25503",1078708745,null)], null);
});})(flag))
;

cljs.core.async.t25502.cljs$lang$type = true;

cljs.core.async.t25502.cljs$lang$ctorStr = "cljs.core.async/t25502";

cljs.core.async.t25502.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t25502");
});})(flag))
;

cljs.core.async.__GT_t25502 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25502(alt_flag__$1,flag__$1,meta25503){
return (new cljs.core.async.t25502(alt_flag__$1,flag__$1,meta25503));
});})(flag))
;

}

return (new cljs.core.async.t25502(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25508 = (function (alt_handler,flag,cb,meta25509){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25509 = meta25509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25510,meta25509__$1){
var self__ = this;
var _25510__$1 = this;
return (new cljs.core.async.t25508(self__.alt_handler,self__.flag,self__.cb,meta25509__$1));
});

cljs.core.async.t25508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25510){
var self__ = this;
var _25510__$1 = this;
return self__.meta25509;
});

cljs.core.async.t25508.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25509","meta25509",-2089799041,null)], null);
});

cljs.core.async.t25508.cljs$lang$type = true;

cljs.core.async.t25508.cljs$lang$ctorStr = "cljs.core.async/t25508";

cljs.core.async.t25508.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t25508");
});

cljs.core.async.__GT_t25508 = (function cljs$core$async$alt_handler_$___GT_t25508(alt_handler__$1,flag__$1,cb__$1,meta25509){
return (new cljs.core.async.t25508(alt_handler__$1,flag__$1,cb__$1,meta25509));
});

}

return (new cljs.core.async.t25508(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25511_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25511_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25512_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25512_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16472__auto__ = wport;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25513 = (i + (1));
i = G__25513;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16472__auto__ = ret;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16460__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16460__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17518__auto__ = [];
var len__17511__auto___25519 = arguments.length;
var i__17512__auto___25520 = (0);
while(true){
if((i__17512__auto___25520 < len__17511__auto___25519)){
args__17518__auto__.push((arguments[i__17512__auto___25520]));

var G__25521 = (i__17512__auto___25520 + (1));
i__17512__auto___25520 = G__25521;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25516){
var map__25517 = p__25516;
var map__25517__$1 = ((((!((map__25517 == null)))?((((map__25517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var opts = map__25517__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25514){
var G__25515 = cljs.core.first.call(null,seq25514);
var seq25514__$1 = cljs.core.next.call(null,seq25514);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25515,seq25514__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args25522 = [];
var len__17511__auto___25572 = arguments.length;
var i__17512__auto___25573 = (0);
while(true){
if((i__17512__auto___25573 < len__17511__auto___25572)){
args25522.push((arguments[i__17512__auto___25573]));

var G__25574 = (i__17512__auto___25573 + (1));
i__17512__auto___25573 = G__25574;
continue;
} else {
}
break;
}

var G__25524 = args25522.length;
switch (G__25524) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25522.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19655__auto___25576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___25576){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___25576){
return (function (state_25548){
var state_val_25549 = (state_25548[(1)]);
if((state_val_25549 === (7))){
var inst_25544 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25550_25577 = state_25548__$1;
(statearr_25550_25577[(2)] = inst_25544);

(statearr_25550_25577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (1))){
var state_25548__$1 = state_25548;
var statearr_25551_25578 = state_25548__$1;
(statearr_25551_25578[(2)] = null);

(statearr_25551_25578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (4))){
var inst_25527 = (state_25548[(7)]);
var inst_25527__$1 = (state_25548[(2)]);
var inst_25528 = (inst_25527__$1 == null);
var state_25548__$1 = (function (){var statearr_25552 = state_25548;
(statearr_25552[(7)] = inst_25527__$1);

return statearr_25552;
})();
if(cljs.core.truth_(inst_25528)){
var statearr_25553_25579 = state_25548__$1;
(statearr_25553_25579[(1)] = (5));

} else {
var statearr_25554_25580 = state_25548__$1;
(statearr_25554_25580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (13))){
var state_25548__$1 = state_25548;
var statearr_25555_25581 = state_25548__$1;
(statearr_25555_25581[(2)] = null);

(statearr_25555_25581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (6))){
var inst_25527 = (state_25548[(7)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25548__$1,(11),to,inst_25527);
} else {
if((state_val_25549 === (3))){
var inst_25546 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25548__$1,inst_25546);
} else {
if((state_val_25549 === (12))){
var state_25548__$1 = state_25548;
var statearr_25556_25582 = state_25548__$1;
(statearr_25556_25582[(2)] = null);

(statearr_25556_25582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (2))){
var state_25548__$1 = state_25548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25548__$1,(4),from);
} else {
if((state_val_25549 === (11))){
var inst_25537 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
if(cljs.core.truth_(inst_25537)){
var statearr_25557_25583 = state_25548__$1;
(statearr_25557_25583[(1)] = (12));

} else {
var statearr_25558_25584 = state_25548__$1;
(statearr_25558_25584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (9))){
var state_25548__$1 = state_25548;
var statearr_25559_25585 = state_25548__$1;
(statearr_25559_25585[(2)] = null);

(statearr_25559_25585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (5))){
var state_25548__$1 = state_25548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25560_25586 = state_25548__$1;
(statearr_25560_25586[(1)] = (8));

} else {
var statearr_25561_25587 = state_25548__$1;
(statearr_25561_25587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (14))){
var inst_25542 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25562_25588 = state_25548__$1;
(statearr_25562_25588[(2)] = inst_25542);

(statearr_25562_25588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (10))){
var inst_25534 = (state_25548[(2)]);
var state_25548__$1 = state_25548;
var statearr_25563_25589 = state_25548__$1;
(statearr_25563_25589[(2)] = inst_25534);

(statearr_25563_25589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25549 === (8))){
var inst_25531 = cljs.core.async.close_BANG_.call(null,to);
var state_25548__$1 = state_25548;
var statearr_25564_25590 = state_25548__$1;
(statearr_25564_25590[(2)] = inst_25531);

(statearr_25564_25590[(1)] = (10));


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
});})(c__19655__auto___25576))
;
return ((function (switch__19590__auto__,c__19655__auto___25576){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_25568 = [null,null,null,null,null,null,null,null];
(statearr_25568[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_25568[(1)] = (1));

return statearr_25568;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_25548){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25569){if((e25569 instanceof Object)){
var ex__19594__auto__ = e25569;
var statearr_25570_25591 = state_25548;
(statearr_25570_25591[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25592 = state_25548;
state_25548 = G__25592;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_25548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_25548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___25576))
})();
var state__19657__auto__ = (function (){var statearr_25571 = f__19656__auto__.call(null);
(statearr_25571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___25576);

return statearr_25571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___25576))
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
return (function (p__25776){
var vec__25777 = p__25776;
var v = cljs.core.nth.call(null,vec__25777,(0),null);
var p = cljs.core.nth.call(null,vec__25777,(1),null);
var job = vec__25777;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19655__auto___25959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___25959,res,vec__25777,v,p,job,jobs,results){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___25959,res,vec__25777,v,p,job,jobs,results){
return (function (state_25782){
var state_val_25783 = (state_25782[(1)]);
if((state_val_25783 === (1))){
var state_25782__$1 = state_25782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25782__$1,(2),res,v);
} else {
if((state_val_25783 === (2))){
var inst_25779 = (state_25782[(2)]);
var inst_25780 = cljs.core.async.close_BANG_.call(null,res);
var state_25782__$1 = (function (){var statearr_25784 = state_25782;
(statearr_25784[(7)] = inst_25779);

return statearr_25784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25782__$1,inst_25780);
} else {
return null;
}
}
});})(c__19655__auto___25959,res,vec__25777,v,p,job,jobs,results))
;
return ((function (switch__19590__auto__,c__19655__auto___25959,res,vec__25777,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0 = (function (){
var statearr_25788 = [null,null,null,null,null,null,null,null];
(statearr_25788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__);

(statearr_25788[(1)] = (1));

return statearr_25788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1 = (function (state_25782){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25789){if((e25789 instanceof Object)){
var ex__19594__auto__ = e25789;
var statearr_25790_25960 = state_25782;
(statearr_25790_25960[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25961 = state_25782;
state_25782 = G__25961;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = function(state_25782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1.call(this,state_25782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___25959,res,vec__25777,v,p,job,jobs,results))
})();
var state__19657__auto__ = (function (){var statearr_25791 = f__19656__auto__.call(null);
(statearr_25791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___25959);

return statearr_25791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___25959,res,vec__25777,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25792){
var vec__25793 = p__25792;
var v = cljs.core.nth.call(null,vec__25793,(0),null);
var p = cljs.core.nth.call(null,vec__25793,(1),null);
var job = vec__25793;
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
var n__17356__auto___25962 = n;
var __25963 = (0);
while(true){
if((__25963 < n__17356__auto___25962)){
var G__25794_25964 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25794_25964) {
case "compute":
var c__19655__auto___25966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25963,c__19655__auto___25966,G__25794_25964,n__17356__auto___25962,jobs,results,process,async){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (__25963,c__19655__auto___25966,G__25794_25964,n__17356__auto___25962,jobs,results,process,async){
return (function (state_25807){
var state_val_25808 = (state_25807[(1)]);
if((state_val_25808 === (1))){
var state_25807__$1 = state_25807;
var statearr_25809_25967 = state_25807__$1;
(statearr_25809_25967[(2)] = null);

(statearr_25809_25967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (2))){
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,(4),jobs);
} else {
if((state_val_25808 === (3))){
var inst_25805 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25807__$1,inst_25805);
} else {
if((state_val_25808 === (4))){
var inst_25797 = (state_25807[(2)]);
var inst_25798 = process.call(null,inst_25797);
var state_25807__$1 = state_25807;
if(cljs.core.truth_(inst_25798)){
var statearr_25810_25968 = state_25807__$1;
(statearr_25810_25968[(1)] = (5));

} else {
var statearr_25811_25969 = state_25807__$1;
(statearr_25811_25969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (5))){
var state_25807__$1 = state_25807;
var statearr_25812_25970 = state_25807__$1;
(statearr_25812_25970[(2)] = null);

(statearr_25812_25970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (6))){
var state_25807__$1 = state_25807;
var statearr_25813_25971 = state_25807__$1;
(statearr_25813_25971[(2)] = null);

(statearr_25813_25971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (7))){
var inst_25803 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25814_25972 = state_25807__$1;
(statearr_25814_25972[(2)] = inst_25803);

(statearr_25814_25972[(1)] = (3));


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
});})(__25963,c__19655__auto___25966,G__25794_25964,n__17356__auto___25962,jobs,results,process,async))
;
return ((function (__25963,switch__19590__auto__,c__19655__auto___25966,G__25794_25964,n__17356__auto___25962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0 = (function (){
var statearr_25818 = [null,null,null,null,null,null,null];
(statearr_25818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__);

(statearr_25818[(1)] = (1));

return statearr_25818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1 = (function (state_25807){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25819){if((e25819 instanceof Object)){
var ex__19594__auto__ = e25819;
var statearr_25820_25973 = state_25807;
(statearr_25820_25973[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25974 = state_25807;
state_25807 = G__25974;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = function(state_25807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1.call(this,state_25807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__;
})()
;})(__25963,switch__19590__auto__,c__19655__auto___25966,G__25794_25964,n__17356__auto___25962,jobs,results,process,async))
})();
var state__19657__auto__ = (function (){var statearr_25821 = f__19656__auto__.call(null);
(statearr_25821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___25966);

return statearr_25821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(__25963,c__19655__auto___25966,G__25794_25964,n__17356__auto___25962,jobs,results,process,async))
);


break;
case "async":
var c__19655__auto___25975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25963,c__19655__auto___25975,G__25794_25964,n__17356__auto___25962,jobs,results,process,async){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (__25963,c__19655__auto___25975,G__25794_25964,n__17356__auto___25962,jobs,results,process,async){
return (function (state_25834){
var state_val_25835 = (state_25834[(1)]);
if((state_val_25835 === (1))){
var state_25834__$1 = state_25834;
var statearr_25836_25976 = state_25834__$1;
(statearr_25836_25976[(2)] = null);

(statearr_25836_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (2))){
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25834__$1,(4),jobs);
} else {
if((state_val_25835 === (3))){
var inst_25832 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25834__$1,inst_25832);
} else {
if((state_val_25835 === (4))){
var inst_25824 = (state_25834[(2)]);
var inst_25825 = async.call(null,inst_25824);
var state_25834__$1 = state_25834;
if(cljs.core.truth_(inst_25825)){
var statearr_25837_25977 = state_25834__$1;
(statearr_25837_25977[(1)] = (5));

} else {
var statearr_25838_25978 = state_25834__$1;
(statearr_25838_25978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (5))){
var state_25834__$1 = state_25834;
var statearr_25839_25979 = state_25834__$1;
(statearr_25839_25979[(2)] = null);

(statearr_25839_25979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (6))){
var state_25834__$1 = state_25834;
var statearr_25840_25980 = state_25834__$1;
(statearr_25840_25980[(2)] = null);

(statearr_25840_25980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25835 === (7))){
var inst_25830 = (state_25834[(2)]);
var state_25834__$1 = state_25834;
var statearr_25841_25981 = state_25834__$1;
(statearr_25841_25981[(2)] = inst_25830);

(statearr_25841_25981[(1)] = (3));


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
});})(__25963,c__19655__auto___25975,G__25794_25964,n__17356__auto___25962,jobs,results,process,async))
;
return ((function (__25963,switch__19590__auto__,c__19655__auto___25975,G__25794_25964,n__17356__auto___25962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0 = (function (){
var statearr_25845 = [null,null,null,null,null,null,null];
(statearr_25845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__);

(statearr_25845[(1)] = (1));

return statearr_25845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1 = (function (state_25834){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25846){if((e25846 instanceof Object)){
var ex__19594__auto__ = e25846;
var statearr_25847_25982 = state_25834;
(statearr_25847_25982[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25983 = state_25834;
state_25834 = G__25983;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = function(state_25834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1.call(this,state_25834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__;
})()
;})(__25963,switch__19590__auto__,c__19655__auto___25975,G__25794_25964,n__17356__auto___25962,jobs,results,process,async))
})();
var state__19657__auto__ = (function (){var statearr_25848 = f__19656__auto__.call(null);
(statearr_25848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___25975);

return statearr_25848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(__25963,c__19655__auto___25975,G__25794_25964,n__17356__auto___25962,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25984 = (__25963 + (1));
__25963 = G__25984;
continue;
} else {
}
break;
}

var c__19655__auto___25985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___25985,jobs,results,process,async){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___25985,jobs,results,process,async){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (1))){
var state_25870__$1 = state_25870;
var statearr_25872_25986 = state_25870__$1;
(statearr_25872_25986[(2)] = null);

(statearr_25872_25986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (2))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(4),from);
} else {
if((state_val_25871 === (3))){
var inst_25868 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (4))){
var inst_25851 = (state_25870[(7)]);
var inst_25851__$1 = (state_25870[(2)]);
var inst_25852 = (inst_25851__$1 == null);
var state_25870__$1 = (function (){var statearr_25873 = state_25870;
(statearr_25873[(7)] = inst_25851__$1);

return statearr_25873;
})();
if(cljs.core.truth_(inst_25852)){
var statearr_25874_25987 = state_25870__$1;
(statearr_25874_25987[(1)] = (5));

} else {
var statearr_25875_25988 = state_25870__$1;
(statearr_25875_25988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (5))){
var inst_25854 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25870__$1 = state_25870;
var statearr_25876_25989 = state_25870__$1;
(statearr_25876_25989[(2)] = inst_25854);

(statearr_25876_25989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var inst_25851 = (state_25870[(7)]);
var inst_25856 = (state_25870[(8)]);
var inst_25856__$1 = cljs.core.async.chan.call(null,(1));
var inst_25857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25858 = [inst_25851,inst_25856__$1];
var inst_25859 = (new cljs.core.PersistentVector(null,2,(5),inst_25857,inst_25858,null));
var state_25870__$1 = (function (){var statearr_25877 = state_25870;
(statearr_25877[(8)] = inst_25856__$1);

return statearr_25877;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25870__$1,(8),jobs,inst_25859);
} else {
if((state_val_25871 === (7))){
var inst_25866 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25878_25990 = state_25870__$1;
(statearr_25878_25990[(2)] = inst_25866);

(statearr_25878_25990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25856 = (state_25870[(8)]);
var inst_25861 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25879 = state_25870;
(statearr_25879[(9)] = inst_25861);

return statearr_25879;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25870__$1,(9),results,inst_25856);
} else {
if((state_val_25871 === (9))){
var inst_25863 = (state_25870[(2)]);
var state_25870__$1 = (function (){var statearr_25880 = state_25870;
(statearr_25880[(10)] = inst_25863);

return statearr_25880;
})();
var statearr_25881_25991 = state_25870__$1;
(statearr_25881_25991[(2)] = null);

(statearr_25881_25991[(1)] = (2));


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
});})(c__19655__auto___25985,jobs,results,process,async))
;
return ((function (switch__19590__auto__,c__19655__auto___25985,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0 = (function (){
var statearr_25885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__);

(statearr_25885[(1)] = (1));

return statearr_25885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1 = (function (state_25870){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25886){if((e25886 instanceof Object)){
var ex__19594__auto__ = e25886;
var statearr_25887_25992 = state_25870;
(statearr_25887_25992[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25993 = state_25870;
state_25870 = G__25993;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___25985,jobs,results,process,async))
})();
var state__19657__auto__ = (function (){var statearr_25888 = f__19656__auto__.call(null);
(statearr_25888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___25985);

return statearr_25888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___25985,jobs,results,process,async))
);


var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__,jobs,results,process,async){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__,jobs,results,process,async){
return (function (state_25926){
var state_val_25927 = (state_25926[(1)]);
if((state_val_25927 === (7))){
var inst_25922 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25928_25994 = state_25926__$1;
(statearr_25928_25994[(2)] = inst_25922);

(statearr_25928_25994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (20))){
var state_25926__$1 = state_25926;
var statearr_25929_25995 = state_25926__$1;
(statearr_25929_25995[(2)] = null);

(statearr_25929_25995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (1))){
var state_25926__$1 = state_25926;
var statearr_25930_25996 = state_25926__$1;
(statearr_25930_25996[(2)] = null);

(statearr_25930_25996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (4))){
var inst_25891 = (state_25926[(7)]);
var inst_25891__$1 = (state_25926[(2)]);
var inst_25892 = (inst_25891__$1 == null);
var state_25926__$1 = (function (){var statearr_25931 = state_25926;
(statearr_25931[(7)] = inst_25891__$1);

return statearr_25931;
})();
if(cljs.core.truth_(inst_25892)){
var statearr_25932_25997 = state_25926__$1;
(statearr_25932_25997[(1)] = (5));

} else {
var statearr_25933_25998 = state_25926__$1;
(statearr_25933_25998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (15))){
var inst_25904 = (state_25926[(8)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25926__$1,(18),to,inst_25904);
} else {
if((state_val_25927 === (21))){
var inst_25917 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25934_25999 = state_25926__$1;
(statearr_25934_25999[(2)] = inst_25917);

(statearr_25934_25999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (13))){
var inst_25919 = (state_25926[(2)]);
var state_25926__$1 = (function (){var statearr_25935 = state_25926;
(statearr_25935[(9)] = inst_25919);

return statearr_25935;
})();
var statearr_25936_26000 = state_25926__$1;
(statearr_25936_26000[(2)] = null);

(statearr_25936_26000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (6))){
var inst_25891 = (state_25926[(7)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25926__$1,(11),inst_25891);
} else {
if((state_val_25927 === (17))){
var inst_25912 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25912)){
var statearr_25937_26001 = state_25926__$1;
(statearr_25937_26001[(1)] = (19));

} else {
var statearr_25938_26002 = state_25926__$1;
(statearr_25938_26002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (3))){
var inst_25924 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25926__$1,inst_25924);
} else {
if((state_val_25927 === (12))){
var inst_25901 = (state_25926[(10)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25926__$1,(14),inst_25901);
} else {
if((state_val_25927 === (2))){
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25926__$1,(4),results);
} else {
if((state_val_25927 === (19))){
var state_25926__$1 = state_25926;
var statearr_25939_26003 = state_25926__$1;
(statearr_25939_26003[(2)] = null);

(statearr_25939_26003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (11))){
var inst_25901 = (state_25926[(2)]);
var state_25926__$1 = (function (){var statearr_25940 = state_25926;
(statearr_25940[(10)] = inst_25901);

return statearr_25940;
})();
var statearr_25941_26004 = state_25926__$1;
(statearr_25941_26004[(2)] = null);

(statearr_25941_26004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (9))){
var state_25926__$1 = state_25926;
var statearr_25942_26005 = state_25926__$1;
(statearr_25942_26005[(2)] = null);

(statearr_25942_26005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (5))){
var state_25926__$1 = state_25926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25943_26006 = state_25926__$1;
(statearr_25943_26006[(1)] = (8));

} else {
var statearr_25944_26007 = state_25926__$1;
(statearr_25944_26007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (14))){
var inst_25906 = (state_25926[(11)]);
var inst_25904 = (state_25926[(8)]);
var inst_25904__$1 = (state_25926[(2)]);
var inst_25905 = (inst_25904__$1 == null);
var inst_25906__$1 = cljs.core.not.call(null,inst_25905);
var state_25926__$1 = (function (){var statearr_25945 = state_25926;
(statearr_25945[(11)] = inst_25906__$1);

(statearr_25945[(8)] = inst_25904__$1);

return statearr_25945;
})();
if(inst_25906__$1){
var statearr_25946_26008 = state_25926__$1;
(statearr_25946_26008[(1)] = (15));

} else {
var statearr_25947_26009 = state_25926__$1;
(statearr_25947_26009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (16))){
var inst_25906 = (state_25926[(11)]);
var state_25926__$1 = state_25926;
var statearr_25948_26010 = state_25926__$1;
(statearr_25948_26010[(2)] = inst_25906);

(statearr_25948_26010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (10))){
var inst_25898 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25949_26011 = state_25926__$1;
(statearr_25949_26011[(2)] = inst_25898);

(statearr_25949_26011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (18))){
var inst_25909 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25950_26012 = state_25926__$1;
(statearr_25950_26012[(2)] = inst_25909);

(statearr_25950_26012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (8))){
var inst_25895 = cljs.core.async.close_BANG_.call(null,to);
var state_25926__$1 = state_25926;
var statearr_25951_26013 = state_25926__$1;
(statearr_25951_26013[(2)] = inst_25895);

(statearr_25951_26013[(1)] = (10));


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
});})(c__19655__auto__,jobs,results,process,async))
;
return ((function (switch__19590__auto__,c__19655__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0 = (function (){
var statearr_25955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__);

(statearr_25955[(1)] = (1));

return statearr_25955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1 = (function (state_25926){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25956){if((e25956 instanceof Object)){
var ex__19594__auto__ = e25956;
var statearr_25957_26014 = state_25926;
(statearr_25957_26014[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26015 = state_25926;
state_25926 = G__26015;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__ = function(state_25926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1.call(this,state_25926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19591__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__,jobs,results,process,async))
})();
var state__19657__auto__ = (function (){var statearr_25958 = f__19656__auto__.call(null);
(statearr_25958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_25958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__,jobs,results,process,async))
);

return c__19655__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args26016 = [];
var len__17511__auto___26019 = arguments.length;
var i__17512__auto___26020 = (0);
while(true){
if((i__17512__auto___26020 < len__17511__auto___26019)){
args26016.push((arguments[i__17512__auto___26020]));

var G__26021 = (i__17512__auto___26020 + (1));
i__17512__auto___26020 = G__26021;
continue;
} else {
}
break;
}

var G__26018 = args26016.length;
switch (G__26018) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26016.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args26023 = [];
var len__17511__auto___26026 = arguments.length;
var i__17512__auto___26027 = (0);
while(true){
if((i__17512__auto___26027 < len__17511__auto___26026)){
args26023.push((arguments[i__17512__auto___26027]));

var G__26028 = (i__17512__auto___26027 + (1));
i__17512__auto___26027 = G__26028;
continue;
} else {
}
break;
}

var G__26025 = args26023.length;
switch (G__26025) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26023.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args26030 = [];
var len__17511__auto___26083 = arguments.length;
var i__17512__auto___26084 = (0);
while(true){
if((i__17512__auto___26084 < len__17511__auto___26083)){
args26030.push((arguments[i__17512__auto___26084]));

var G__26085 = (i__17512__auto___26084 + (1));
i__17512__auto___26084 = G__26085;
continue;
} else {
}
break;
}

var G__26032 = args26030.length;
switch (G__26032) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26030.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19655__auto___26087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___26087,tc,fc){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___26087,tc,fc){
return (function (state_26058){
var state_val_26059 = (state_26058[(1)]);
if((state_val_26059 === (7))){
var inst_26054 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26060_26088 = state_26058__$1;
(statearr_26060_26088[(2)] = inst_26054);

(statearr_26060_26088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (1))){
var state_26058__$1 = state_26058;
var statearr_26061_26089 = state_26058__$1;
(statearr_26061_26089[(2)] = null);

(statearr_26061_26089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (4))){
var inst_26035 = (state_26058[(7)]);
var inst_26035__$1 = (state_26058[(2)]);
var inst_26036 = (inst_26035__$1 == null);
var state_26058__$1 = (function (){var statearr_26062 = state_26058;
(statearr_26062[(7)] = inst_26035__$1);

return statearr_26062;
})();
if(cljs.core.truth_(inst_26036)){
var statearr_26063_26090 = state_26058__$1;
(statearr_26063_26090[(1)] = (5));

} else {
var statearr_26064_26091 = state_26058__$1;
(statearr_26064_26091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (13))){
var state_26058__$1 = state_26058;
var statearr_26065_26092 = state_26058__$1;
(statearr_26065_26092[(2)] = null);

(statearr_26065_26092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (6))){
var inst_26035 = (state_26058[(7)]);
var inst_26041 = p.call(null,inst_26035);
var state_26058__$1 = state_26058;
if(cljs.core.truth_(inst_26041)){
var statearr_26066_26093 = state_26058__$1;
(statearr_26066_26093[(1)] = (9));

} else {
var statearr_26067_26094 = state_26058__$1;
(statearr_26067_26094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (3))){
var inst_26056 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26058__$1,inst_26056);
} else {
if((state_val_26059 === (12))){
var state_26058__$1 = state_26058;
var statearr_26068_26095 = state_26058__$1;
(statearr_26068_26095[(2)] = null);

(statearr_26068_26095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (2))){
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26058__$1,(4),ch);
} else {
if((state_val_26059 === (11))){
var inst_26035 = (state_26058[(7)]);
var inst_26045 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26058__$1,(8),inst_26045,inst_26035);
} else {
if((state_val_26059 === (9))){
var state_26058__$1 = state_26058;
var statearr_26069_26096 = state_26058__$1;
(statearr_26069_26096[(2)] = tc);

(statearr_26069_26096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (5))){
var inst_26038 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26039 = cljs.core.async.close_BANG_.call(null,fc);
var state_26058__$1 = (function (){var statearr_26070 = state_26058;
(statearr_26070[(8)] = inst_26038);

return statearr_26070;
})();
var statearr_26071_26097 = state_26058__$1;
(statearr_26071_26097[(2)] = inst_26039);

(statearr_26071_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (14))){
var inst_26052 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26072_26098 = state_26058__$1;
(statearr_26072_26098[(2)] = inst_26052);

(statearr_26072_26098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (10))){
var state_26058__$1 = state_26058;
var statearr_26073_26099 = state_26058__$1;
(statearr_26073_26099[(2)] = fc);

(statearr_26073_26099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (8))){
var inst_26047 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
if(cljs.core.truth_(inst_26047)){
var statearr_26074_26100 = state_26058__$1;
(statearr_26074_26100[(1)] = (12));

} else {
var statearr_26075_26101 = state_26058__$1;
(statearr_26075_26101[(1)] = (13));

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
});})(c__19655__auto___26087,tc,fc))
;
return ((function (switch__19590__auto__,c__19655__auto___26087,tc,fc){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_26079 = [null,null,null,null,null,null,null,null,null];
(statearr_26079[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_26079[(1)] = (1));

return statearr_26079;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_26058){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_26058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e26080){if((e26080 instanceof Object)){
var ex__19594__auto__ = e26080;
var statearr_26081_26102 = state_26058;
(statearr_26081_26102[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26103 = state_26058;
state_26058 = G__26103;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_26058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_26058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___26087,tc,fc))
})();
var state__19657__auto__ = (function (){var statearr_26082 = f__19656__auto__.call(null);
(statearr_26082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___26087);

return statearr_26082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___26087,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_26150){
var state_val_26151 = (state_26150[(1)]);
if((state_val_26151 === (1))){
var inst_26136 = init;
var state_26150__$1 = (function (){var statearr_26152 = state_26150;
(statearr_26152[(7)] = inst_26136);

return statearr_26152;
})();
var statearr_26153_26168 = state_26150__$1;
(statearr_26153_26168[(2)] = null);

(statearr_26153_26168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (2))){
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26150__$1,(4),ch);
} else {
if((state_val_26151 === (3))){
var inst_26148 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26150__$1,inst_26148);
} else {
if((state_val_26151 === (4))){
var inst_26139 = (state_26150[(8)]);
var inst_26139__$1 = (state_26150[(2)]);
var inst_26140 = (inst_26139__$1 == null);
var state_26150__$1 = (function (){var statearr_26154 = state_26150;
(statearr_26154[(8)] = inst_26139__$1);

return statearr_26154;
})();
if(cljs.core.truth_(inst_26140)){
var statearr_26155_26169 = state_26150__$1;
(statearr_26155_26169[(1)] = (5));

} else {
var statearr_26156_26170 = state_26150__$1;
(statearr_26156_26170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (5))){
var inst_26136 = (state_26150[(7)]);
var state_26150__$1 = state_26150;
var statearr_26157_26171 = state_26150__$1;
(statearr_26157_26171[(2)] = inst_26136);

(statearr_26157_26171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (6))){
var inst_26139 = (state_26150[(8)]);
var inst_26136 = (state_26150[(7)]);
var inst_26143 = f.call(null,inst_26136,inst_26139);
var inst_26136__$1 = inst_26143;
var state_26150__$1 = (function (){var statearr_26158 = state_26150;
(statearr_26158[(7)] = inst_26136__$1);

return statearr_26158;
})();
var statearr_26159_26172 = state_26150__$1;
(statearr_26159_26172[(2)] = null);

(statearr_26159_26172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (7))){
var inst_26146 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26160_26173 = state_26150__$1;
(statearr_26160_26173[(2)] = inst_26146);

(statearr_26160_26173[(1)] = (3));


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
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19591__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19591__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs$core$async$reduce_$_state_machine__19591__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs$core$async$reduce_$_state_machine__19591__auto____1 = (function (state_26150){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_26150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__19594__auto__ = e26165;
var statearr_26166_26174 = state_26150;
(statearr_26166_26174[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26175 = state_26150;
state_26150 = G__26175;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19591__auto__ = function(state_26150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19591__auto____1.call(this,state_26150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19591__auto____0;
cljs$core$async$reduce_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19591__auto____1;
return cljs$core$async$reduce_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_26167 = f__19656__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args26176 = [];
var len__17511__auto___26228 = arguments.length;
var i__17512__auto___26229 = (0);
while(true){
if((i__17512__auto___26229 < len__17511__auto___26228)){
args26176.push((arguments[i__17512__auto___26229]));

var G__26230 = (i__17512__auto___26229 + (1));
i__17512__auto___26229 = G__26230;
continue;
} else {
}
break;
}

var G__26178 = args26176.length;
switch (G__26178) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26176.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_26203){
var state_val_26204 = (state_26203[(1)]);
if((state_val_26204 === (7))){
var inst_26185 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26205_26232 = state_26203__$1;
(statearr_26205_26232[(2)] = inst_26185);

(statearr_26205_26232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (1))){
var inst_26179 = cljs.core.seq.call(null,coll);
var inst_26180 = inst_26179;
var state_26203__$1 = (function (){var statearr_26206 = state_26203;
(statearr_26206[(7)] = inst_26180);

return statearr_26206;
})();
var statearr_26207_26233 = state_26203__$1;
(statearr_26207_26233[(2)] = null);

(statearr_26207_26233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (4))){
var inst_26180 = (state_26203[(7)]);
var inst_26183 = cljs.core.first.call(null,inst_26180);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26203__$1,(7),ch,inst_26183);
} else {
if((state_val_26204 === (13))){
var inst_26197 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26208_26234 = state_26203__$1;
(statearr_26208_26234[(2)] = inst_26197);

(statearr_26208_26234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (6))){
var inst_26188 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
if(cljs.core.truth_(inst_26188)){
var statearr_26209_26235 = state_26203__$1;
(statearr_26209_26235[(1)] = (8));

} else {
var statearr_26210_26236 = state_26203__$1;
(statearr_26210_26236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (3))){
var inst_26201 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26203__$1,inst_26201);
} else {
if((state_val_26204 === (12))){
var state_26203__$1 = state_26203;
var statearr_26211_26237 = state_26203__$1;
(statearr_26211_26237[(2)] = null);

(statearr_26211_26237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (2))){
var inst_26180 = (state_26203[(7)]);
var state_26203__$1 = state_26203;
if(cljs.core.truth_(inst_26180)){
var statearr_26212_26238 = state_26203__$1;
(statearr_26212_26238[(1)] = (4));

} else {
var statearr_26213_26239 = state_26203__$1;
(statearr_26213_26239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (11))){
var inst_26194 = cljs.core.async.close_BANG_.call(null,ch);
var state_26203__$1 = state_26203;
var statearr_26214_26240 = state_26203__$1;
(statearr_26214_26240[(2)] = inst_26194);

(statearr_26214_26240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (9))){
var state_26203__$1 = state_26203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26215_26241 = state_26203__$1;
(statearr_26215_26241[(1)] = (11));

} else {
var statearr_26216_26242 = state_26203__$1;
(statearr_26216_26242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (5))){
var inst_26180 = (state_26203[(7)]);
var state_26203__$1 = state_26203;
var statearr_26217_26243 = state_26203__$1;
(statearr_26217_26243[(2)] = inst_26180);

(statearr_26217_26243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (10))){
var inst_26199 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26218_26244 = state_26203__$1;
(statearr_26218_26244[(2)] = inst_26199);

(statearr_26218_26244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (8))){
var inst_26180 = (state_26203[(7)]);
var inst_26190 = cljs.core.next.call(null,inst_26180);
var inst_26180__$1 = inst_26190;
var state_26203__$1 = (function (){var statearr_26219 = state_26203;
(statearr_26219[(7)] = inst_26180__$1);

return statearr_26219;
})();
var statearr_26220_26245 = state_26203__$1;
(statearr_26220_26245[(2)] = null);

(statearr_26220_26245[(1)] = (2));


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
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_26224 = [null,null,null,null,null,null,null,null];
(statearr_26224[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_26224[(1)] = (1));

return statearr_26224;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_26203){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_26203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e26225){if((e26225 instanceof Object)){
var ex__19594__auto__ = e26225;
var statearr_26226_26246 = state_26203;
(statearr_26226_26246[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26247 = state_26203;
state_26203 = G__26247;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_26203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_26203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_26227 = f__19656__auto__.call(null);
(statearr_26227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_26227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17108__auto__ = (((_ == null))?null:_);
var m__17109__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,_);
} else {
var m__17109__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17109__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch);
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
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m);
} else {
var m__17109__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26473 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26473 = (function (mult,ch,cs,meta26474){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26474 = meta26474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26475,meta26474__$1){
var self__ = this;
var _26475__$1 = this;
return (new cljs.core.async.t26473(self__.mult,self__.ch,self__.cs,meta26474__$1));
});})(cs))
;

cljs.core.async.t26473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26475){
var self__ = this;
var _26475__$1 = this;
return self__.meta26474;
});})(cs))
;

cljs.core.async.t26473.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26473.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26473.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26473.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26473.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26473.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26474","meta26474",-366484339,null)], null);
});})(cs))
;

cljs.core.async.t26473.cljs$lang$type = true;

cljs.core.async.t26473.cljs$lang$ctorStr = "cljs.core.async/t26473";

cljs.core.async.t26473.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t26473");
});})(cs))
;

cljs.core.async.__GT_t26473 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26473(mult__$1,ch__$1,cs__$1,meta26474){
return (new cljs.core.async.t26473(mult__$1,ch__$1,cs__$1,meta26474));
});})(cs))
;

}

return (new cljs.core.async.t26473(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19655__auto___26694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___26694,cs,m,dchan,dctr,done){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___26694,cs,m,dchan,dctr,done){
return (function (state_26606){
var state_val_26607 = (state_26606[(1)]);
if((state_val_26607 === (7))){
var inst_26602 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26608_26695 = state_26606__$1;
(statearr_26608_26695[(2)] = inst_26602);

(statearr_26608_26695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (20))){
var inst_26507 = (state_26606[(7)]);
var inst_26517 = cljs.core.first.call(null,inst_26507);
var inst_26518 = cljs.core.nth.call(null,inst_26517,(0),null);
var inst_26519 = cljs.core.nth.call(null,inst_26517,(1),null);
var state_26606__$1 = (function (){var statearr_26609 = state_26606;
(statearr_26609[(8)] = inst_26518);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26519)){
var statearr_26610_26696 = state_26606__$1;
(statearr_26610_26696[(1)] = (22));

} else {
var statearr_26611_26697 = state_26606__$1;
(statearr_26611_26697[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (27))){
var inst_26478 = (state_26606[(9)]);
var inst_26554 = (state_26606[(10)]);
var inst_26547 = (state_26606[(11)]);
var inst_26549 = (state_26606[(12)]);
var inst_26554__$1 = cljs.core._nth.call(null,inst_26547,inst_26549);
var inst_26555 = cljs.core.async.put_BANG_.call(null,inst_26554__$1,inst_26478,done);
var state_26606__$1 = (function (){var statearr_26612 = state_26606;
(statearr_26612[(10)] = inst_26554__$1);

return statearr_26612;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26613_26698 = state_26606__$1;
(statearr_26613_26698[(1)] = (30));

} else {
var statearr_26614_26699 = state_26606__$1;
(statearr_26614_26699[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (1))){
var state_26606__$1 = state_26606;
var statearr_26615_26700 = state_26606__$1;
(statearr_26615_26700[(2)] = null);

(statearr_26615_26700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (24))){
var inst_26507 = (state_26606[(7)]);
var inst_26524 = (state_26606[(2)]);
var inst_26525 = cljs.core.next.call(null,inst_26507);
var inst_26487 = inst_26525;
var inst_26488 = null;
var inst_26489 = (0);
var inst_26490 = (0);
var state_26606__$1 = (function (){var statearr_26616 = state_26606;
(statearr_26616[(13)] = inst_26487);

(statearr_26616[(14)] = inst_26490);

(statearr_26616[(15)] = inst_26524);

(statearr_26616[(16)] = inst_26489);

(statearr_26616[(17)] = inst_26488);

return statearr_26616;
})();
var statearr_26617_26701 = state_26606__$1;
(statearr_26617_26701[(2)] = null);

(statearr_26617_26701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (39))){
var state_26606__$1 = state_26606;
var statearr_26621_26702 = state_26606__$1;
(statearr_26621_26702[(2)] = null);

(statearr_26621_26702[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (4))){
var inst_26478 = (state_26606[(9)]);
var inst_26478__$1 = (state_26606[(2)]);
var inst_26479 = (inst_26478__$1 == null);
var state_26606__$1 = (function (){var statearr_26622 = state_26606;
(statearr_26622[(9)] = inst_26478__$1);

return statearr_26622;
})();
if(cljs.core.truth_(inst_26479)){
var statearr_26623_26703 = state_26606__$1;
(statearr_26623_26703[(1)] = (5));

} else {
var statearr_26624_26704 = state_26606__$1;
(statearr_26624_26704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (15))){
var inst_26487 = (state_26606[(13)]);
var inst_26490 = (state_26606[(14)]);
var inst_26489 = (state_26606[(16)]);
var inst_26488 = (state_26606[(17)]);
var inst_26503 = (state_26606[(2)]);
var inst_26504 = (inst_26490 + (1));
var tmp26618 = inst_26487;
var tmp26619 = inst_26489;
var tmp26620 = inst_26488;
var inst_26487__$1 = tmp26618;
var inst_26488__$1 = tmp26620;
var inst_26489__$1 = tmp26619;
var inst_26490__$1 = inst_26504;
var state_26606__$1 = (function (){var statearr_26625 = state_26606;
(statearr_26625[(13)] = inst_26487__$1);

(statearr_26625[(18)] = inst_26503);

(statearr_26625[(14)] = inst_26490__$1);

(statearr_26625[(16)] = inst_26489__$1);

(statearr_26625[(17)] = inst_26488__$1);

return statearr_26625;
})();
var statearr_26626_26705 = state_26606__$1;
(statearr_26626_26705[(2)] = null);

(statearr_26626_26705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (21))){
var inst_26528 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26630_26706 = state_26606__$1;
(statearr_26630_26706[(2)] = inst_26528);

(statearr_26630_26706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (31))){
var inst_26554 = (state_26606[(10)]);
var inst_26558 = done.call(null,null);
var inst_26559 = cljs.core.async.untap_STAR_.call(null,m,inst_26554);
var state_26606__$1 = (function (){var statearr_26631 = state_26606;
(statearr_26631[(19)] = inst_26558);

return statearr_26631;
})();
var statearr_26632_26707 = state_26606__$1;
(statearr_26632_26707[(2)] = inst_26559);

(statearr_26632_26707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (32))){
var inst_26547 = (state_26606[(11)]);
var inst_26549 = (state_26606[(12)]);
var inst_26548 = (state_26606[(20)]);
var inst_26546 = (state_26606[(21)]);
var inst_26561 = (state_26606[(2)]);
var inst_26562 = (inst_26549 + (1));
var tmp26627 = inst_26547;
var tmp26628 = inst_26548;
var tmp26629 = inst_26546;
var inst_26546__$1 = tmp26629;
var inst_26547__$1 = tmp26627;
var inst_26548__$1 = tmp26628;
var inst_26549__$1 = inst_26562;
var state_26606__$1 = (function (){var statearr_26633 = state_26606;
(statearr_26633[(22)] = inst_26561);

(statearr_26633[(11)] = inst_26547__$1);

(statearr_26633[(12)] = inst_26549__$1);

(statearr_26633[(20)] = inst_26548__$1);

(statearr_26633[(21)] = inst_26546__$1);

return statearr_26633;
})();
var statearr_26634_26708 = state_26606__$1;
(statearr_26634_26708[(2)] = null);

(statearr_26634_26708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (40))){
var inst_26574 = (state_26606[(23)]);
var inst_26578 = done.call(null,null);
var inst_26579 = cljs.core.async.untap_STAR_.call(null,m,inst_26574);
var state_26606__$1 = (function (){var statearr_26635 = state_26606;
(statearr_26635[(24)] = inst_26578);

return statearr_26635;
})();
var statearr_26636_26709 = state_26606__$1;
(statearr_26636_26709[(2)] = inst_26579);

(statearr_26636_26709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (33))){
var inst_26565 = (state_26606[(25)]);
var inst_26567 = cljs.core.chunked_seq_QMARK_.call(null,inst_26565);
var state_26606__$1 = state_26606;
if(inst_26567){
var statearr_26637_26710 = state_26606__$1;
(statearr_26637_26710[(1)] = (36));

} else {
var statearr_26638_26711 = state_26606__$1;
(statearr_26638_26711[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (13))){
var inst_26497 = (state_26606[(26)]);
var inst_26500 = cljs.core.async.close_BANG_.call(null,inst_26497);
var state_26606__$1 = state_26606;
var statearr_26639_26712 = state_26606__$1;
(statearr_26639_26712[(2)] = inst_26500);

(statearr_26639_26712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (22))){
var inst_26518 = (state_26606[(8)]);
var inst_26521 = cljs.core.async.close_BANG_.call(null,inst_26518);
var state_26606__$1 = state_26606;
var statearr_26640_26713 = state_26606__$1;
(statearr_26640_26713[(2)] = inst_26521);

(statearr_26640_26713[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (36))){
var inst_26565 = (state_26606[(25)]);
var inst_26569 = cljs.core.chunk_first.call(null,inst_26565);
var inst_26570 = cljs.core.chunk_rest.call(null,inst_26565);
var inst_26571 = cljs.core.count.call(null,inst_26569);
var inst_26546 = inst_26570;
var inst_26547 = inst_26569;
var inst_26548 = inst_26571;
var inst_26549 = (0);
var state_26606__$1 = (function (){var statearr_26641 = state_26606;
(statearr_26641[(11)] = inst_26547);

(statearr_26641[(12)] = inst_26549);

(statearr_26641[(20)] = inst_26548);

(statearr_26641[(21)] = inst_26546);

return statearr_26641;
})();
var statearr_26642_26714 = state_26606__$1;
(statearr_26642_26714[(2)] = null);

(statearr_26642_26714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (41))){
var inst_26565 = (state_26606[(25)]);
var inst_26581 = (state_26606[(2)]);
var inst_26582 = cljs.core.next.call(null,inst_26565);
var inst_26546 = inst_26582;
var inst_26547 = null;
var inst_26548 = (0);
var inst_26549 = (0);
var state_26606__$1 = (function (){var statearr_26643 = state_26606;
(statearr_26643[(11)] = inst_26547);

(statearr_26643[(27)] = inst_26581);

(statearr_26643[(12)] = inst_26549);

(statearr_26643[(20)] = inst_26548);

(statearr_26643[(21)] = inst_26546);

return statearr_26643;
})();
var statearr_26644_26715 = state_26606__$1;
(statearr_26644_26715[(2)] = null);

(statearr_26644_26715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (43))){
var state_26606__$1 = state_26606;
var statearr_26645_26716 = state_26606__$1;
(statearr_26645_26716[(2)] = null);

(statearr_26645_26716[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (29))){
var inst_26590 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26646_26717 = state_26606__$1;
(statearr_26646_26717[(2)] = inst_26590);

(statearr_26646_26717[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (44))){
var inst_26599 = (state_26606[(2)]);
var state_26606__$1 = (function (){var statearr_26647 = state_26606;
(statearr_26647[(28)] = inst_26599);

return statearr_26647;
})();
var statearr_26648_26718 = state_26606__$1;
(statearr_26648_26718[(2)] = null);

(statearr_26648_26718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (6))){
var inst_26538 = (state_26606[(29)]);
var inst_26537 = cljs.core.deref.call(null,cs);
var inst_26538__$1 = cljs.core.keys.call(null,inst_26537);
var inst_26539 = cljs.core.count.call(null,inst_26538__$1);
var inst_26540 = cljs.core.reset_BANG_.call(null,dctr,inst_26539);
var inst_26545 = cljs.core.seq.call(null,inst_26538__$1);
var inst_26546 = inst_26545;
var inst_26547 = null;
var inst_26548 = (0);
var inst_26549 = (0);
var state_26606__$1 = (function (){var statearr_26649 = state_26606;
(statearr_26649[(29)] = inst_26538__$1);

(statearr_26649[(30)] = inst_26540);

(statearr_26649[(11)] = inst_26547);

(statearr_26649[(12)] = inst_26549);

(statearr_26649[(20)] = inst_26548);

(statearr_26649[(21)] = inst_26546);

return statearr_26649;
})();
var statearr_26650_26719 = state_26606__$1;
(statearr_26650_26719[(2)] = null);

(statearr_26650_26719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (28))){
var inst_26565 = (state_26606[(25)]);
var inst_26546 = (state_26606[(21)]);
var inst_26565__$1 = cljs.core.seq.call(null,inst_26546);
var state_26606__$1 = (function (){var statearr_26651 = state_26606;
(statearr_26651[(25)] = inst_26565__$1);

return statearr_26651;
})();
if(inst_26565__$1){
var statearr_26652_26720 = state_26606__$1;
(statearr_26652_26720[(1)] = (33));

} else {
var statearr_26653_26721 = state_26606__$1;
(statearr_26653_26721[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (25))){
var inst_26549 = (state_26606[(12)]);
var inst_26548 = (state_26606[(20)]);
var inst_26551 = (inst_26549 < inst_26548);
var inst_26552 = inst_26551;
var state_26606__$1 = state_26606;
if(cljs.core.truth_(inst_26552)){
var statearr_26654_26722 = state_26606__$1;
(statearr_26654_26722[(1)] = (27));

} else {
var statearr_26655_26723 = state_26606__$1;
(statearr_26655_26723[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (34))){
var state_26606__$1 = state_26606;
var statearr_26656_26724 = state_26606__$1;
(statearr_26656_26724[(2)] = null);

(statearr_26656_26724[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (17))){
var state_26606__$1 = state_26606;
var statearr_26657_26725 = state_26606__$1;
(statearr_26657_26725[(2)] = null);

(statearr_26657_26725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (3))){
var inst_26604 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26606__$1,inst_26604);
} else {
if((state_val_26607 === (12))){
var inst_26533 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26658_26726 = state_26606__$1;
(statearr_26658_26726[(2)] = inst_26533);

(statearr_26658_26726[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (2))){
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26606__$1,(4),ch);
} else {
if((state_val_26607 === (23))){
var state_26606__$1 = state_26606;
var statearr_26659_26727 = state_26606__$1;
(statearr_26659_26727[(2)] = null);

(statearr_26659_26727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (35))){
var inst_26588 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26660_26728 = state_26606__$1;
(statearr_26660_26728[(2)] = inst_26588);

(statearr_26660_26728[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (19))){
var inst_26507 = (state_26606[(7)]);
var inst_26511 = cljs.core.chunk_first.call(null,inst_26507);
var inst_26512 = cljs.core.chunk_rest.call(null,inst_26507);
var inst_26513 = cljs.core.count.call(null,inst_26511);
var inst_26487 = inst_26512;
var inst_26488 = inst_26511;
var inst_26489 = inst_26513;
var inst_26490 = (0);
var state_26606__$1 = (function (){var statearr_26661 = state_26606;
(statearr_26661[(13)] = inst_26487);

(statearr_26661[(14)] = inst_26490);

(statearr_26661[(16)] = inst_26489);

(statearr_26661[(17)] = inst_26488);

return statearr_26661;
})();
var statearr_26662_26729 = state_26606__$1;
(statearr_26662_26729[(2)] = null);

(statearr_26662_26729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (11))){
var inst_26487 = (state_26606[(13)]);
var inst_26507 = (state_26606[(7)]);
var inst_26507__$1 = cljs.core.seq.call(null,inst_26487);
var state_26606__$1 = (function (){var statearr_26663 = state_26606;
(statearr_26663[(7)] = inst_26507__$1);

return statearr_26663;
})();
if(inst_26507__$1){
var statearr_26664_26730 = state_26606__$1;
(statearr_26664_26730[(1)] = (16));

} else {
var statearr_26665_26731 = state_26606__$1;
(statearr_26665_26731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (9))){
var inst_26535 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26666_26732 = state_26606__$1;
(statearr_26666_26732[(2)] = inst_26535);

(statearr_26666_26732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (5))){
var inst_26485 = cljs.core.deref.call(null,cs);
var inst_26486 = cljs.core.seq.call(null,inst_26485);
var inst_26487 = inst_26486;
var inst_26488 = null;
var inst_26489 = (0);
var inst_26490 = (0);
var state_26606__$1 = (function (){var statearr_26667 = state_26606;
(statearr_26667[(13)] = inst_26487);

(statearr_26667[(14)] = inst_26490);

(statearr_26667[(16)] = inst_26489);

(statearr_26667[(17)] = inst_26488);

return statearr_26667;
})();
var statearr_26668_26733 = state_26606__$1;
(statearr_26668_26733[(2)] = null);

(statearr_26668_26733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (14))){
var state_26606__$1 = state_26606;
var statearr_26669_26734 = state_26606__$1;
(statearr_26669_26734[(2)] = null);

(statearr_26669_26734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (45))){
var inst_26596 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26670_26735 = state_26606__$1;
(statearr_26670_26735[(2)] = inst_26596);

(statearr_26670_26735[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (26))){
var inst_26538 = (state_26606[(29)]);
var inst_26592 = (state_26606[(2)]);
var inst_26593 = cljs.core.seq.call(null,inst_26538);
var state_26606__$1 = (function (){var statearr_26671 = state_26606;
(statearr_26671[(31)] = inst_26592);

return statearr_26671;
})();
if(inst_26593){
var statearr_26672_26736 = state_26606__$1;
(statearr_26672_26736[(1)] = (42));

} else {
var statearr_26673_26737 = state_26606__$1;
(statearr_26673_26737[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (16))){
var inst_26507 = (state_26606[(7)]);
var inst_26509 = cljs.core.chunked_seq_QMARK_.call(null,inst_26507);
var state_26606__$1 = state_26606;
if(inst_26509){
var statearr_26674_26738 = state_26606__$1;
(statearr_26674_26738[(1)] = (19));

} else {
var statearr_26675_26739 = state_26606__$1;
(statearr_26675_26739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (38))){
var inst_26585 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26676_26740 = state_26606__$1;
(statearr_26676_26740[(2)] = inst_26585);

(statearr_26676_26740[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (30))){
var state_26606__$1 = state_26606;
var statearr_26677_26741 = state_26606__$1;
(statearr_26677_26741[(2)] = null);

(statearr_26677_26741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (10))){
var inst_26490 = (state_26606[(14)]);
var inst_26488 = (state_26606[(17)]);
var inst_26496 = cljs.core._nth.call(null,inst_26488,inst_26490);
var inst_26497 = cljs.core.nth.call(null,inst_26496,(0),null);
var inst_26498 = cljs.core.nth.call(null,inst_26496,(1),null);
var state_26606__$1 = (function (){var statearr_26678 = state_26606;
(statearr_26678[(26)] = inst_26497);

return statearr_26678;
})();
if(cljs.core.truth_(inst_26498)){
var statearr_26679_26742 = state_26606__$1;
(statearr_26679_26742[(1)] = (13));

} else {
var statearr_26680_26743 = state_26606__$1;
(statearr_26680_26743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (18))){
var inst_26531 = (state_26606[(2)]);
var state_26606__$1 = state_26606;
var statearr_26681_26744 = state_26606__$1;
(statearr_26681_26744[(2)] = inst_26531);

(statearr_26681_26744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (42))){
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26606__$1,(45),dchan);
} else {
if((state_val_26607 === (37))){
var inst_26565 = (state_26606[(25)]);
var inst_26478 = (state_26606[(9)]);
var inst_26574 = (state_26606[(23)]);
var inst_26574__$1 = cljs.core.first.call(null,inst_26565);
var inst_26575 = cljs.core.async.put_BANG_.call(null,inst_26574__$1,inst_26478,done);
var state_26606__$1 = (function (){var statearr_26682 = state_26606;
(statearr_26682[(23)] = inst_26574__$1);

return statearr_26682;
})();
if(cljs.core.truth_(inst_26575)){
var statearr_26683_26745 = state_26606__$1;
(statearr_26683_26745[(1)] = (39));

} else {
var statearr_26684_26746 = state_26606__$1;
(statearr_26684_26746[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26607 === (8))){
var inst_26490 = (state_26606[(14)]);
var inst_26489 = (state_26606[(16)]);
var inst_26492 = (inst_26490 < inst_26489);
var inst_26493 = inst_26492;
var state_26606__$1 = state_26606;
if(cljs.core.truth_(inst_26493)){
var statearr_26685_26747 = state_26606__$1;
(statearr_26685_26747[(1)] = (10));

} else {
var statearr_26686_26748 = state_26606__$1;
(statearr_26686_26748[(1)] = (11));

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
});})(c__19655__auto___26694,cs,m,dchan,dctr,done))
;
return ((function (switch__19590__auto__,c__19655__auto___26694,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19591__auto__ = null;
var cljs$core$async$mult_$_state_machine__19591__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$mult_$_state_machine__19591__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$mult_$_state_machine__19591__auto____1 = (function (state_26606){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_26606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__19594__auto__ = e26691;
var statearr_26692_26749 = state_26606;
(statearr_26692_26749[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26750 = state_26606;
state_26606 = G__26750;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19591__auto__ = function(state_26606){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19591__auto____1.call(this,state_26606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19591__auto____0;
cljs$core$async$mult_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19591__auto____1;
return cljs$core$async$mult_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___26694,cs,m,dchan,dctr,done))
})();
var state__19657__auto__ = (function (){var statearr_26693 = f__19656__auto__.call(null);
(statearr_26693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___26694);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___26694,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args26751 = [];
var len__17511__auto___26754 = arguments.length;
var i__17512__auto___26755 = (0);
while(true){
if((i__17512__auto___26755 < len__17511__auto___26754)){
args26751.push((arguments[i__17512__auto___26755]));

var G__26756 = (i__17512__auto___26755 + (1));
i__17512__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var G__26753 = args26751.length;
switch (G__26753) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26751.length)].join('')));

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

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch);
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
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch);
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
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m);
} else {
var m__17109__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m);
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
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,state_map);
} else {
var m__17109__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,state_map);
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
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,mode);
} else {
var m__17109__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17518__auto__ = [];
var len__17511__auto___26770 = arguments.length;
var i__17512__auto___26771 = (0);
while(true){
if((i__17512__auto___26771 < len__17511__auto___26770)){
args__17518__auto__.push((arguments[i__17512__auto___26771]));

var G__26772 = (i__17512__auto___26771 + (1));
i__17512__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((3) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17519__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26764){
var map__26765 = p__26764;
var map__26765__$1 = ((((!((map__26765 == null)))?((((map__26765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26765):map__26765);
var opts = map__26765__$1;
var statearr_26767_26773 = state;
(statearr_26767_26773[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26765,map__26765__$1,opts){
return (function (val){
var statearr_26768_26774 = state;
(statearr_26768_26774[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26765,map__26765__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26769_26775 = state;
(statearr_26769_26775[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26760){
var G__26761 = cljs.core.first.call(null,seq26760);
var seq26760__$1 = cljs.core.next.call(null,seq26760);
var G__26762 = cljs.core.first.call(null,seq26760__$1);
var seq26760__$2 = cljs.core.next.call(null,seq26760__$1);
var G__26763 = cljs.core.first.call(null,seq26760__$2);
var seq26760__$3 = cljs.core.next.call(null,seq26760__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26761,G__26762,G__26763,seq26760__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t26939 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26939 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26940){
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
this.meta26940 = meta26940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26941,meta26940__$1){
var self__ = this;
var _26941__$1 = this;
return (new cljs.core.async.t26939(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26940__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26941){
var self__ = this;
var _26941__$1 = this;
return self__.meta26940;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26939.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26939.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26940","meta26940",-720819213,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26939.cljs$lang$type = true;

cljs.core.async.t26939.cljs$lang$ctorStr = "cljs.core.async/t26939";

cljs.core.async.t26939.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t26939");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26939 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26939(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26940){
return (new cljs.core.async.t26939(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26940));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26939(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19655__auto___27102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27039){
var state_val_27040 = (state_27039[(1)]);
if((state_val_27040 === (7))){
var inst_26957 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
var statearr_27041_27103 = state_27039__$1;
(statearr_27041_27103[(2)] = inst_26957);

(statearr_27041_27103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (20))){
var inst_26969 = (state_27039[(7)]);
var state_27039__$1 = state_27039;
var statearr_27042_27104 = state_27039__$1;
(statearr_27042_27104[(2)] = inst_26969);

(statearr_27042_27104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (27))){
var state_27039__$1 = state_27039;
var statearr_27043_27105 = state_27039__$1;
(statearr_27043_27105[(2)] = null);

(statearr_27043_27105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (1))){
var inst_26945 = (state_27039[(8)]);
var inst_26945__$1 = calc_state.call(null);
var inst_26947 = (inst_26945__$1 == null);
var inst_26948 = cljs.core.not.call(null,inst_26947);
var state_27039__$1 = (function (){var statearr_27044 = state_27039;
(statearr_27044[(8)] = inst_26945__$1);

return statearr_27044;
})();
if(inst_26948){
var statearr_27045_27106 = state_27039__$1;
(statearr_27045_27106[(1)] = (2));

} else {
var statearr_27046_27107 = state_27039__$1;
(statearr_27046_27107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (24))){
var inst_27013 = (state_27039[(9)]);
var inst_26999 = (state_27039[(10)]);
var inst_26992 = (state_27039[(11)]);
var inst_27013__$1 = inst_26992.call(null,inst_26999);
var state_27039__$1 = (function (){var statearr_27047 = state_27039;
(statearr_27047[(9)] = inst_27013__$1);

return statearr_27047;
})();
if(cljs.core.truth_(inst_27013__$1)){
var statearr_27048_27108 = state_27039__$1;
(statearr_27048_27108[(1)] = (29));

} else {
var statearr_27049_27109 = state_27039__$1;
(statearr_27049_27109[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (4))){
var inst_26960 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_26960)){
var statearr_27050_27110 = state_27039__$1;
(statearr_27050_27110[(1)] = (8));

} else {
var statearr_27051_27111 = state_27039__$1;
(statearr_27051_27111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (15))){
var inst_26986 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_26986)){
var statearr_27052_27112 = state_27039__$1;
(statearr_27052_27112[(1)] = (19));

} else {
var statearr_27053_27113 = state_27039__$1;
(statearr_27053_27113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (21))){
var inst_26991 = (state_27039[(12)]);
var inst_26991__$1 = (state_27039[(2)]);
var inst_26992 = cljs.core.get.call(null,inst_26991__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26993 = cljs.core.get.call(null,inst_26991__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26994 = cljs.core.get.call(null,inst_26991__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27039__$1 = (function (){var statearr_27054 = state_27039;
(statearr_27054[(12)] = inst_26991__$1);

(statearr_27054[(11)] = inst_26992);

(statearr_27054[(13)] = inst_26993);

return statearr_27054;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27039__$1,(22),inst_26994);
} else {
if((state_val_27040 === (31))){
var inst_27021 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_27021)){
var statearr_27055_27114 = state_27039__$1;
(statearr_27055_27114[(1)] = (32));

} else {
var statearr_27056_27115 = state_27039__$1;
(statearr_27056_27115[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (32))){
var inst_26998 = (state_27039[(14)]);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27039__$1,(35),out,inst_26998);
} else {
if((state_val_27040 === (33))){
var inst_26991 = (state_27039[(12)]);
var inst_26969 = inst_26991;
var state_27039__$1 = (function (){var statearr_27057 = state_27039;
(statearr_27057[(7)] = inst_26969);

return statearr_27057;
})();
var statearr_27058_27116 = state_27039__$1;
(statearr_27058_27116[(2)] = null);

(statearr_27058_27116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (13))){
var inst_26969 = (state_27039[(7)]);
var inst_26976 = inst_26969.cljs$lang$protocol_mask$partition0$;
var inst_26977 = (inst_26976 & (64));
var inst_26978 = inst_26969.cljs$core$ISeq$;
var inst_26979 = (inst_26977) || (inst_26978);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_26979)){
var statearr_27059_27117 = state_27039__$1;
(statearr_27059_27117[(1)] = (16));

} else {
var statearr_27060_27118 = state_27039__$1;
(statearr_27060_27118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (22))){
var inst_26998 = (state_27039[(14)]);
var inst_26999 = (state_27039[(10)]);
var inst_26997 = (state_27039[(2)]);
var inst_26998__$1 = cljs.core.nth.call(null,inst_26997,(0),null);
var inst_26999__$1 = cljs.core.nth.call(null,inst_26997,(1),null);
var inst_27000 = (inst_26998__$1 == null);
var inst_27001 = cljs.core._EQ_.call(null,inst_26999__$1,change);
var inst_27002 = (inst_27000) || (inst_27001);
var state_27039__$1 = (function (){var statearr_27061 = state_27039;
(statearr_27061[(14)] = inst_26998__$1);

(statearr_27061[(10)] = inst_26999__$1);

return statearr_27061;
})();
if(cljs.core.truth_(inst_27002)){
var statearr_27062_27119 = state_27039__$1;
(statearr_27062_27119[(1)] = (23));

} else {
var statearr_27063_27120 = state_27039__$1;
(statearr_27063_27120[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (36))){
var inst_26991 = (state_27039[(12)]);
var inst_26969 = inst_26991;
var state_27039__$1 = (function (){var statearr_27064 = state_27039;
(statearr_27064[(7)] = inst_26969);

return statearr_27064;
})();
var statearr_27065_27121 = state_27039__$1;
(statearr_27065_27121[(2)] = null);

(statearr_27065_27121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (29))){
var inst_27013 = (state_27039[(9)]);
var state_27039__$1 = state_27039;
var statearr_27066_27122 = state_27039__$1;
(statearr_27066_27122[(2)] = inst_27013);

(statearr_27066_27122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (6))){
var state_27039__$1 = state_27039;
var statearr_27067_27123 = state_27039__$1;
(statearr_27067_27123[(2)] = false);

(statearr_27067_27123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (28))){
var inst_27009 = (state_27039[(2)]);
var inst_27010 = calc_state.call(null);
var inst_26969 = inst_27010;
var state_27039__$1 = (function (){var statearr_27068 = state_27039;
(statearr_27068[(15)] = inst_27009);

(statearr_27068[(7)] = inst_26969);

return statearr_27068;
})();
var statearr_27069_27124 = state_27039__$1;
(statearr_27069_27124[(2)] = null);

(statearr_27069_27124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (25))){
var inst_27035 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
var statearr_27070_27125 = state_27039__$1;
(statearr_27070_27125[(2)] = inst_27035);

(statearr_27070_27125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (34))){
var inst_27033 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
var statearr_27071_27126 = state_27039__$1;
(statearr_27071_27126[(2)] = inst_27033);

(statearr_27071_27126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (17))){
var state_27039__$1 = state_27039;
var statearr_27072_27127 = state_27039__$1;
(statearr_27072_27127[(2)] = false);

(statearr_27072_27127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (3))){
var state_27039__$1 = state_27039;
var statearr_27073_27128 = state_27039__$1;
(statearr_27073_27128[(2)] = false);

(statearr_27073_27128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (12))){
var inst_27037 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27039__$1,inst_27037);
} else {
if((state_val_27040 === (2))){
var inst_26945 = (state_27039[(8)]);
var inst_26950 = inst_26945.cljs$lang$protocol_mask$partition0$;
var inst_26951 = (inst_26950 & (64));
var inst_26952 = inst_26945.cljs$core$ISeq$;
var inst_26953 = (inst_26951) || (inst_26952);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_26953)){
var statearr_27074_27129 = state_27039__$1;
(statearr_27074_27129[(1)] = (5));

} else {
var statearr_27075_27130 = state_27039__$1;
(statearr_27075_27130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (23))){
var inst_26998 = (state_27039[(14)]);
var inst_27004 = (inst_26998 == null);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_27004)){
var statearr_27076_27131 = state_27039__$1;
(statearr_27076_27131[(1)] = (26));

} else {
var statearr_27077_27132 = state_27039__$1;
(statearr_27077_27132[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (35))){
var inst_27024 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
if(cljs.core.truth_(inst_27024)){
var statearr_27078_27133 = state_27039__$1;
(statearr_27078_27133[(1)] = (36));

} else {
var statearr_27079_27134 = state_27039__$1;
(statearr_27079_27134[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (19))){
var inst_26969 = (state_27039[(7)]);
var inst_26988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26969);
var state_27039__$1 = state_27039;
var statearr_27080_27135 = state_27039__$1;
(statearr_27080_27135[(2)] = inst_26988);

(statearr_27080_27135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (11))){
var inst_26969 = (state_27039[(7)]);
var inst_26973 = (inst_26969 == null);
var inst_26974 = cljs.core.not.call(null,inst_26973);
var state_27039__$1 = state_27039;
if(inst_26974){
var statearr_27081_27136 = state_27039__$1;
(statearr_27081_27136[(1)] = (13));

} else {
var statearr_27082_27137 = state_27039__$1;
(statearr_27082_27137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (9))){
var inst_26945 = (state_27039[(8)]);
var state_27039__$1 = state_27039;
var statearr_27083_27138 = state_27039__$1;
(statearr_27083_27138[(2)] = inst_26945);

(statearr_27083_27138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (5))){
var state_27039__$1 = state_27039;
var statearr_27084_27139 = state_27039__$1;
(statearr_27084_27139[(2)] = true);

(statearr_27084_27139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (14))){
var state_27039__$1 = state_27039;
var statearr_27085_27140 = state_27039__$1;
(statearr_27085_27140[(2)] = false);

(statearr_27085_27140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (26))){
var inst_26999 = (state_27039[(10)]);
var inst_27006 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26999);
var state_27039__$1 = state_27039;
var statearr_27086_27141 = state_27039__$1;
(statearr_27086_27141[(2)] = inst_27006);

(statearr_27086_27141[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (16))){
var state_27039__$1 = state_27039;
var statearr_27087_27142 = state_27039__$1;
(statearr_27087_27142[(2)] = true);

(statearr_27087_27142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (38))){
var inst_27029 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
var statearr_27088_27143 = state_27039__$1;
(statearr_27088_27143[(2)] = inst_27029);

(statearr_27088_27143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (30))){
var inst_26999 = (state_27039[(10)]);
var inst_26992 = (state_27039[(11)]);
var inst_26993 = (state_27039[(13)]);
var inst_27016 = cljs.core.empty_QMARK_.call(null,inst_26992);
var inst_27017 = inst_26993.call(null,inst_26999);
var inst_27018 = cljs.core.not.call(null,inst_27017);
var inst_27019 = (inst_27016) && (inst_27018);
var state_27039__$1 = state_27039;
var statearr_27089_27144 = state_27039__$1;
(statearr_27089_27144[(2)] = inst_27019);

(statearr_27089_27144[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (10))){
var inst_26945 = (state_27039[(8)]);
var inst_26965 = (state_27039[(2)]);
var inst_26966 = cljs.core.get.call(null,inst_26965,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26967 = cljs.core.get.call(null,inst_26965,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26968 = cljs.core.get.call(null,inst_26965,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26969 = inst_26945;
var state_27039__$1 = (function (){var statearr_27090 = state_27039;
(statearr_27090[(16)] = inst_26968);

(statearr_27090[(17)] = inst_26966);

(statearr_27090[(18)] = inst_26967);

(statearr_27090[(7)] = inst_26969);

return statearr_27090;
})();
var statearr_27091_27145 = state_27039__$1;
(statearr_27091_27145[(2)] = null);

(statearr_27091_27145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (18))){
var inst_26983 = (state_27039[(2)]);
var state_27039__$1 = state_27039;
var statearr_27092_27146 = state_27039__$1;
(statearr_27092_27146[(2)] = inst_26983);

(statearr_27092_27146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (37))){
var state_27039__$1 = state_27039;
var statearr_27093_27147 = state_27039__$1;
(statearr_27093_27147[(2)] = null);

(statearr_27093_27147[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27040 === (8))){
var inst_26945 = (state_27039[(8)]);
var inst_26962 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26945);
var state_27039__$1 = state_27039;
var statearr_27094_27148 = state_27039__$1;
(statearr_27094_27148[(2)] = inst_26962);

(statearr_27094_27148[(1)] = (10));


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
});})(c__19655__auto___27102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19590__auto__,c__19655__auto___27102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19591__auto__ = null;
var cljs$core$async$mix_$_state_machine__19591__auto____0 = (function (){
var statearr_27098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27098[(0)] = cljs$core$async$mix_$_state_machine__19591__auto__);

(statearr_27098[(1)] = (1));

return statearr_27098;
});
var cljs$core$async$mix_$_state_machine__19591__auto____1 = (function (state_27039){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27099){if((e27099 instanceof Object)){
var ex__19594__auto__ = e27099;
var statearr_27100_27149 = state_27039;
(statearr_27100_27149[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27150 = state_27039;
state_27039 = G__27150;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19591__auto__ = function(state_27039){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19591__auto____1.call(this,state_27039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19591__auto____0;
cljs$core$async$mix_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19591__auto____1;
return cljs$core$async$mix_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19657__auto__ = (function (){var statearr_27101 = f__19656__auto__.call(null);
(statearr_27101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27102);

return statearr_27101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27102,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17109__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p,v,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args27153 = [];
var len__17511__auto___27156 = arguments.length;
var i__17512__auto___27157 = (0);
while(true){
if((i__17512__auto___27157 < len__17511__auto___27156)){
args27153.push((arguments[i__17512__auto___27157]));

var G__27158 = (i__17512__auto___27157 + (1));
i__17512__auto___27157 = G__27158;
continue;
} else {
}
break;
}

var G__27155 = args27153.length;
switch (G__27155) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27153.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p);
} else {
var m__17109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p);
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
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p,v);
} else {
var m__17109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args27161 = [];
var len__17511__auto___27286 = arguments.length;
var i__17512__auto___27287 = (0);
while(true){
if((i__17512__auto___27287 < len__17511__auto___27286)){
args27161.push((arguments[i__17512__auto___27287]));

var G__27288 = (i__17512__auto___27287 + (1));
i__17512__auto___27287 = G__27288;
continue;
} else {
}
break;
}

var G__27163 = args27161.length;
switch (G__27163) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27161.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16472__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16472__auto__,mults){
return (function (p1__27160_SHARP_){
if(cljs.core.truth_(p1__27160_SHARP_.call(null,topic))){
return p1__27160_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27160_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16472__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27164 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27164 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27165){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27165 = meta27165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27166,meta27165__$1){
var self__ = this;
var _27166__$1 = this;
return (new cljs.core.async.t27164(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27165__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27166){
var self__ = this;
var _27166__$1 = this;
return self__.meta27165;
});})(mults,ensure_mult))
;

cljs.core.async.t27164.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27164.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27164.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27164.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27164.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27164.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27164.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27165","meta27165",-1232718986,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27164.cljs$lang$type = true;

cljs.core.async.t27164.cljs$lang$ctorStr = "cljs.core.async/t27164";

cljs.core.async.t27164.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27164");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27164 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27164(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27165){
return (new cljs.core.async.t27164(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27165));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27164(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19655__auto___27290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27290,mults,ensure_mult,p){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27290,mults,ensure_mult,p){
return (function (state_27238){
var state_val_27239 = (state_27238[(1)]);
if((state_val_27239 === (7))){
var inst_27234 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27240_27291 = state_27238__$1;
(statearr_27240_27291[(2)] = inst_27234);

(statearr_27240_27291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (20))){
var state_27238__$1 = state_27238;
var statearr_27241_27292 = state_27238__$1;
(statearr_27241_27292[(2)] = null);

(statearr_27241_27292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (1))){
var state_27238__$1 = state_27238;
var statearr_27242_27293 = state_27238__$1;
(statearr_27242_27293[(2)] = null);

(statearr_27242_27293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (24))){
var inst_27217 = (state_27238[(7)]);
var inst_27226 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27217);
var state_27238__$1 = state_27238;
var statearr_27243_27294 = state_27238__$1;
(statearr_27243_27294[(2)] = inst_27226);

(statearr_27243_27294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (4))){
var inst_27169 = (state_27238[(8)]);
var inst_27169__$1 = (state_27238[(2)]);
var inst_27170 = (inst_27169__$1 == null);
var state_27238__$1 = (function (){var statearr_27244 = state_27238;
(statearr_27244[(8)] = inst_27169__$1);

return statearr_27244;
})();
if(cljs.core.truth_(inst_27170)){
var statearr_27245_27295 = state_27238__$1;
(statearr_27245_27295[(1)] = (5));

} else {
var statearr_27246_27296 = state_27238__$1;
(statearr_27246_27296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (15))){
var inst_27211 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27247_27297 = state_27238__$1;
(statearr_27247_27297[(2)] = inst_27211);

(statearr_27247_27297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (21))){
var inst_27231 = (state_27238[(2)]);
var state_27238__$1 = (function (){var statearr_27248 = state_27238;
(statearr_27248[(9)] = inst_27231);

return statearr_27248;
})();
var statearr_27249_27298 = state_27238__$1;
(statearr_27249_27298[(2)] = null);

(statearr_27249_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (13))){
var inst_27193 = (state_27238[(10)]);
var inst_27195 = cljs.core.chunked_seq_QMARK_.call(null,inst_27193);
var state_27238__$1 = state_27238;
if(inst_27195){
var statearr_27250_27299 = state_27238__$1;
(statearr_27250_27299[(1)] = (16));

} else {
var statearr_27251_27300 = state_27238__$1;
(statearr_27251_27300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (22))){
var inst_27223 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27223)){
var statearr_27252_27301 = state_27238__$1;
(statearr_27252_27301[(1)] = (23));

} else {
var statearr_27253_27302 = state_27238__$1;
(statearr_27253_27302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (6))){
var inst_27217 = (state_27238[(7)]);
var inst_27169 = (state_27238[(8)]);
var inst_27219 = (state_27238[(11)]);
var inst_27217__$1 = topic_fn.call(null,inst_27169);
var inst_27218 = cljs.core.deref.call(null,mults);
var inst_27219__$1 = cljs.core.get.call(null,inst_27218,inst_27217__$1);
var state_27238__$1 = (function (){var statearr_27254 = state_27238;
(statearr_27254[(7)] = inst_27217__$1);

(statearr_27254[(11)] = inst_27219__$1);

return statearr_27254;
})();
if(cljs.core.truth_(inst_27219__$1)){
var statearr_27255_27303 = state_27238__$1;
(statearr_27255_27303[(1)] = (19));

} else {
var statearr_27256_27304 = state_27238__$1;
(statearr_27256_27304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (25))){
var inst_27228 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27257_27305 = state_27238__$1;
(statearr_27257_27305[(2)] = inst_27228);

(statearr_27257_27305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (17))){
var inst_27193 = (state_27238[(10)]);
var inst_27202 = cljs.core.first.call(null,inst_27193);
var inst_27203 = cljs.core.async.muxch_STAR_.call(null,inst_27202);
var inst_27204 = cljs.core.async.close_BANG_.call(null,inst_27203);
var inst_27205 = cljs.core.next.call(null,inst_27193);
var inst_27179 = inst_27205;
var inst_27180 = null;
var inst_27181 = (0);
var inst_27182 = (0);
var state_27238__$1 = (function (){var statearr_27258 = state_27238;
(statearr_27258[(12)] = inst_27179);

(statearr_27258[(13)] = inst_27182);

(statearr_27258[(14)] = inst_27180);

(statearr_27258[(15)] = inst_27204);

(statearr_27258[(16)] = inst_27181);

return statearr_27258;
})();
var statearr_27259_27306 = state_27238__$1;
(statearr_27259_27306[(2)] = null);

(statearr_27259_27306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (3))){
var inst_27236 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27238__$1,inst_27236);
} else {
if((state_val_27239 === (12))){
var inst_27213 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27260_27307 = state_27238__$1;
(statearr_27260_27307[(2)] = inst_27213);

(statearr_27260_27307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (2))){
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27238__$1,(4),ch);
} else {
if((state_val_27239 === (23))){
var state_27238__$1 = state_27238;
var statearr_27261_27308 = state_27238__$1;
(statearr_27261_27308[(2)] = null);

(statearr_27261_27308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (19))){
var inst_27169 = (state_27238[(8)]);
var inst_27219 = (state_27238[(11)]);
var inst_27221 = cljs.core.async.muxch_STAR_.call(null,inst_27219);
var state_27238__$1 = state_27238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27238__$1,(22),inst_27221,inst_27169);
} else {
if((state_val_27239 === (11))){
var inst_27179 = (state_27238[(12)]);
var inst_27193 = (state_27238[(10)]);
var inst_27193__$1 = cljs.core.seq.call(null,inst_27179);
var state_27238__$1 = (function (){var statearr_27262 = state_27238;
(statearr_27262[(10)] = inst_27193__$1);

return statearr_27262;
})();
if(inst_27193__$1){
var statearr_27263_27309 = state_27238__$1;
(statearr_27263_27309[(1)] = (13));

} else {
var statearr_27264_27310 = state_27238__$1;
(statearr_27264_27310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (9))){
var inst_27215 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27265_27311 = state_27238__$1;
(statearr_27265_27311[(2)] = inst_27215);

(statearr_27265_27311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (5))){
var inst_27176 = cljs.core.deref.call(null,mults);
var inst_27177 = cljs.core.vals.call(null,inst_27176);
var inst_27178 = cljs.core.seq.call(null,inst_27177);
var inst_27179 = inst_27178;
var inst_27180 = null;
var inst_27181 = (0);
var inst_27182 = (0);
var state_27238__$1 = (function (){var statearr_27266 = state_27238;
(statearr_27266[(12)] = inst_27179);

(statearr_27266[(13)] = inst_27182);

(statearr_27266[(14)] = inst_27180);

(statearr_27266[(16)] = inst_27181);

return statearr_27266;
})();
var statearr_27267_27312 = state_27238__$1;
(statearr_27267_27312[(2)] = null);

(statearr_27267_27312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (14))){
var state_27238__$1 = state_27238;
var statearr_27271_27313 = state_27238__$1;
(statearr_27271_27313[(2)] = null);

(statearr_27271_27313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (16))){
var inst_27193 = (state_27238[(10)]);
var inst_27197 = cljs.core.chunk_first.call(null,inst_27193);
var inst_27198 = cljs.core.chunk_rest.call(null,inst_27193);
var inst_27199 = cljs.core.count.call(null,inst_27197);
var inst_27179 = inst_27198;
var inst_27180 = inst_27197;
var inst_27181 = inst_27199;
var inst_27182 = (0);
var state_27238__$1 = (function (){var statearr_27272 = state_27238;
(statearr_27272[(12)] = inst_27179);

(statearr_27272[(13)] = inst_27182);

(statearr_27272[(14)] = inst_27180);

(statearr_27272[(16)] = inst_27181);

return statearr_27272;
})();
var statearr_27273_27314 = state_27238__$1;
(statearr_27273_27314[(2)] = null);

(statearr_27273_27314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (10))){
var inst_27179 = (state_27238[(12)]);
var inst_27182 = (state_27238[(13)]);
var inst_27180 = (state_27238[(14)]);
var inst_27181 = (state_27238[(16)]);
var inst_27187 = cljs.core._nth.call(null,inst_27180,inst_27182);
var inst_27188 = cljs.core.async.muxch_STAR_.call(null,inst_27187);
var inst_27189 = cljs.core.async.close_BANG_.call(null,inst_27188);
var inst_27190 = (inst_27182 + (1));
var tmp27268 = inst_27179;
var tmp27269 = inst_27180;
var tmp27270 = inst_27181;
var inst_27179__$1 = tmp27268;
var inst_27180__$1 = tmp27269;
var inst_27181__$1 = tmp27270;
var inst_27182__$1 = inst_27190;
var state_27238__$1 = (function (){var statearr_27274 = state_27238;
(statearr_27274[(17)] = inst_27189);

(statearr_27274[(12)] = inst_27179__$1);

(statearr_27274[(13)] = inst_27182__$1);

(statearr_27274[(14)] = inst_27180__$1);

(statearr_27274[(16)] = inst_27181__$1);

return statearr_27274;
})();
var statearr_27275_27315 = state_27238__$1;
(statearr_27275_27315[(2)] = null);

(statearr_27275_27315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (18))){
var inst_27208 = (state_27238[(2)]);
var state_27238__$1 = state_27238;
var statearr_27276_27316 = state_27238__$1;
(statearr_27276_27316[(2)] = inst_27208);

(statearr_27276_27316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27239 === (8))){
var inst_27182 = (state_27238[(13)]);
var inst_27181 = (state_27238[(16)]);
var inst_27184 = (inst_27182 < inst_27181);
var inst_27185 = inst_27184;
var state_27238__$1 = state_27238;
if(cljs.core.truth_(inst_27185)){
var statearr_27277_27317 = state_27238__$1;
(statearr_27277_27317[(1)] = (10));

} else {
var statearr_27278_27318 = state_27238__$1;
(statearr_27278_27318[(1)] = (11));

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
});})(c__19655__auto___27290,mults,ensure_mult,p))
;
return ((function (switch__19590__auto__,c__19655__auto___27290,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_27282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27282[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_27282[(1)] = (1));

return statearr_27282;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_27238){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27283){if((e27283 instanceof Object)){
var ex__19594__auto__ = e27283;
var statearr_27284_27319 = state_27238;
(statearr_27284_27319[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27320 = state_27238;
state_27238 = G__27320;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_27238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_27238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27290,mults,ensure_mult,p))
})();
var state__19657__auto__ = (function (){var statearr_27285 = f__19656__auto__.call(null);
(statearr_27285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27290);

return statearr_27285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27290,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args27321 = [];
var len__17511__auto___27324 = arguments.length;
var i__17512__auto___27325 = (0);
while(true){
if((i__17512__auto___27325 < len__17511__auto___27324)){
args27321.push((arguments[i__17512__auto___27325]));

var G__27326 = (i__17512__auto___27325 + (1));
i__17512__auto___27325 = G__27326;
continue;
} else {
}
break;
}

var G__27323 = args27321.length;
switch (G__27323) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27321.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args27328 = [];
var len__17511__auto___27331 = arguments.length;
var i__17512__auto___27332 = (0);
while(true){
if((i__17512__auto___27332 < len__17511__auto___27331)){
args27328.push((arguments[i__17512__auto___27332]));

var G__27333 = (i__17512__auto___27332 + (1));
i__17512__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var G__27330 = args27328.length;
switch (G__27330) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27328.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args27335 = [];
var len__17511__auto___27406 = arguments.length;
var i__17512__auto___27407 = (0);
while(true){
if((i__17512__auto___27407 < len__17511__auto___27406)){
args27335.push((arguments[i__17512__auto___27407]));

var G__27408 = (i__17512__auto___27407 + (1));
i__17512__auto___27407 = G__27408;
continue;
} else {
}
break;
}

var G__27337 = args27335.length;
switch (G__27337) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27335.length)].join('')));

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
var c__19655__auto___27410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27410,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27410,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27376){
var state_val_27377 = (state_27376[(1)]);
if((state_val_27377 === (7))){
var state_27376__$1 = state_27376;
var statearr_27378_27411 = state_27376__$1;
(statearr_27378_27411[(2)] = null);

(statearr_27378_27411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (1))){
var state_27376__$1 = state_27376;
var statearr_27379_27412 = state_27376__$1;
(statearr_27379_27412[(2)] = null);

(statearr_27379_27412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (4))){
var inst_27340 = (state_27376[(7)]);
var inst_27342 = (inst_27340 < cnt);
var state_27376__$1 = state_27376;
if(cljs.core.truth_(inst_27342)){
var statearr_27380_27413 = state_27376__$1;
(statearr_27380_27413[(1)] = (6));

} else {
var statearr_27381_27414 = state_27376__$1;
(statearr_27381_27414[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (15))){
var inst_27372 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27382_27415 = state_27376__$1;
(statearr_27382_27415[(2)] = inst_27372);

(statearr_27382_27415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (13))){
var inst_27365 = cljs.core.async.close_BANG_.call(null,out);
var state_27376__$1 = state_27376;
var statearr_27383_27416 = state_27376__$1;
(statearr_27383_27416[(2)] = inst_27365);

(statearr_27383_27416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (6))){
var state_27376__$1 = state_27376;
var statearr_27384_27417 = state_27376__$1;
(statearr_27384_27417[(2)] = null);

(statearr_27384_27417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (3))){
var inst_27374 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27376__$1,inst_27374);
} else {
if((state_val_27377 === (12))){
var inst_27362 = (state_27376[(8)]);
var inst_27362__$1 = (state_27376[(2)]);
var inst_27363 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27362__$1);
var state_27376__$1 = (function (){var statearr_27385 = state_27376;
(statearr_27385[(8)] = inst_27362__$1);

return statearr_27385;
})();
if(cljs.core.truth_(inst_27363)){
var statearr_27386_27418 = state_27376__$1;
(statearr_27386_27418[(1)] = (13));

} else {
var statearr_27387_27419 = state_27376__$1;
(statearr_27387_27419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (2))){
var inst_27339 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27340 = (0);
var state_27376__$1 = (function (){var statearr_27388 = state_27376;
(statearr_27388[(7)] = inst_27340);

(statearr_27388[(9)] = inst_27339);

return statearr_27388;
})();
var statearr_27389_27420 = state_27376__$1;
(statearr_27389_27420[(2)] = null);

(statearr_27389_27420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (11))){
var inst_27340 = (state_27376[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27376,(10),Object,null,(9));
var inst_27349 = chs__$1.call(null,inst_27340);
var inst_27350 = done.call(null,inst_27340);
var inst_27351 = cljs.core.async.take_BANG_.call(null,inst_27349,inst_27350);
var state_27376__$1 = state_27376;
var statearr_27390_27421 = state_27376__$1;
(statearr_27390_27421[(2)] = inst_27351);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (9))){
var inst_27340 = (state_27376[(7)]);
var inst_27353 = (state_27376[(2)]);
var inst_27354 = (inst_27340 + (1));
var inst_27340__$1 = inst_27354;
var state_27376__$1 = (function (){var statearr_27391 = state_27376;
(statearr_27391[(10)] = inst_27353);

(statearr_27391[(7)] = inst_27340__$1);

return statearr_27391;
})();
var statearr_27392_27422 = state_27376__$1;
(statearr_27392_27422[(2)] = null);

(statearr_27392_27422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (5))){
var inst_27360 = (state_27376[(2)]);
var state_27376__$1 = (function (){var statearr_27393 = state_27376;
(statearr_27393[(11)] = inst_27360);

return statearr_27393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27376__$1,(12),dchan);
} else {
if((state_val_27377 === (14))){
var inst_27362 = (state_27376[(8)]);
var inst_27367 = cljs.core.apply.call(null,f,inst_27362);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27376__$1,(16),out,inst_27367);
} else {
if((state_val_27377 === (16))){
var inst_27369 = (state_27376[(2)]);
var state_27376__$1 = (function (){var statearr_27394 = state_27376;
(statearr_27394[(12)] = inst_27369);

return statearr_27394;
})();
var statearr_27395_27423 = state_27376__$1;
(statearr_27395_27423[(2)] = null);

(statearr_27395_27423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (10))){
var inst_27344 = (state_27376[(2)]);
var inst_27345 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27376__$1 = (function (){var statearr_27396 = state_27376;
(statearr_27396[(13)] = inst_27344);

return statearr_27396;
})();
var statearr_27397_27424 = state_27376__$1;
(statearr_27397_27424[(2)] = inst_27345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27376__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (8))){
var inst_27358 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27398_27425 = state_27376__$1;
(statearr_27398_27425[(2)] = inst_27358);

(statearr_27398_27425[(1)] = (5));


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
});})(c__19655__auto___27410,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19590__auto__,c__19655__auto___27410,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_27402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27402[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_27402[(1)] = (1));

return statearr_27402;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_27376){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27403){if((e27403 instanceof Object)){
var ex__19594__auto__ = e27403;
var statearr_27404_27426 = state_27376;
(statearr_27404_27426[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27427 = state_27376;
state_27376 = G__27427;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_27376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_27376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27410,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19657__auto__ = (function (){var statearr_27405 = f__19656__auto__.call(null);
(statearr_27405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27410);

return statearr_27405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27410,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args27429 = [];
var len__17511__auto___27485 = arguments.length;
var i__17512__auto___27486 = (0);
while(true){
if((i__17512__auto___27486 < len__17511__auto___27485)){
args27429.push((arguments[i__17512__auto___27486]));

var G__27487 = (i__17512__auto___27486 + (1));
i__17512__auto___27486 = G__27487;
continue;
} else {
}
break;
}

var G__27431 = args27429.length;
switch (G__27431) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27429.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19655__auto___27489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27489,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27489,out){
return (function (state_27461){
var state_val_27462 = (state_27461[(1)]);
if((state_val_27462 === (7))){
var inst_27440 = (state_27461[(7)]);
var inst_27441 = (state_27461[(8)]);
var inst_27440__$1 = (state_27461[(2)]);
var inst_27441__$1 = cljs.core.nth.call(null,inst_27440__$1,(0),null);
var inst_27442 = cljs.core.nth.call(null,inst_27440__$1,(1),null);
var inst_27443 = (inst_27441__$1 == null);
var state_27461__$1 = (function (){var statearr_27463 = state_27461;
(statearr_27463[(7)] = inst_27440__$1);

(statearr_27463[(8)] = inst_27441__$1);

(statearr_27463[(9)] = inst_27442);

return statearr_27463;
})();
if(cljs.core.truth_(inst_27443)){
var statearr_27464_27490 = state_27461__$1;
(statearr_27464_27490[(1)] = (8));

} else {
var statearr_27465_27491 = state_27461__$1;
(statearr_27465_27491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (1))){
var inst_27432 = cljs.core.vec.call(null,chs);
var inst_27433 = inst_27432;
var state_27461__$1 = (function (){var statearr_27466 = state_27461;
(statearr_27466[(10)] = inst_27433);

return statearr_27466;
})();
var statearr_27467_27492 = state_27461__$1;
(statearr_27467_27492[(2)] = null);

(statearr_27467_27492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (4))){
var inst_27433 = (state_27461[(10)]);
var state_27461__$1 = state_27461;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27461__$1,(7),inst_27433);
} else {
if((state_val_27462 === (6))){
var inst_27457 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27468_27493 = state_27461__$1;
(statearr_27468_27493[(2)] = inst_27457);

(statearr_27468_27493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (3))){
var inst_27459 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27461__$1,inst_27459);
} else {
if((state_val_27462 === (2))){
var inst_27433 = (state_27461[(10)]);
var inst_27435 = cljs.core.count.call(null,inst_27433);
var inst_27436 = (inst_27435 > (0));
var state_27461__$1 = state_27461;
if(cljs.core.truth_(inst_27436)){
var statearr_27470_27494 = state_27461__$1;
(statearr_27470_27494[(1)] = (4));

} else {
var statearr_27471_27495 = state_27461__$1;
(statearr_27471_27495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (11))){
var inst_27433 = (state_27461[(10)]);
var inst_27450 = (state_27461[(2)]);
var tmp27469 = inst_27433;
var inst_27433__$1 = tmp27469;
var state_27461__$1 = (function (){var statearr_27472 = state_27461;
(statearr_27472[(11)] = inst_27450);

(statearr_27472[(10)] = inst_27433__$1);

return statearr_27472;
})();
var statearr_27473_27496 = state_27461__$1;
(statearr_27473_27496[(2)] = null);

(statearr_27473_27496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (9))){
var inst_27441 = (state_27461[(8)]);
var state_27461__$1 = state_27461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27461__$1,(11),out,inst_27441);
} else {
if((state_val_27462 === (5))){
var inst_27455 = cljs.core.async.close_BANG_.call(null,out);
var state_27461__$1 = state_27461;
var statearr_27474_27497 = state_27461__$1;
(statearr_27474_27497[(2)] = inst_27455);

(statearr_27474_27497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (10))){
var inst_27453 = (state_27461[(2)]);
var state_27461__$1 = state_27461;
var statearr_27475_27498 = state_27461__$1;
(statearr_27475_27498[(2)] = inst_27453);

(statearr_27475_27498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27462 === (8))){
var inst_27440 = (state_27461[(7)]);
var inst_27433 = (state_27461[(10)]);
var inst_27441 = (state_27461[(8)]);
var inst_27442 = (state_27461[(9)]);
var inst_27445 = (function (){var cs = inst_27433;
var vec__27438 = inst_27440;
var v = inst_27441;
var c = inst_27442;
return ((function (cs,vec__27438,v,c,inst_27440,inst_27433,inst_27441,inst_27442,state_val_27462,c__19655__auto___27489,out){
return (function (p1__27428_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27428_SHARP_);
});
;})(cs,vec__27438,v,c,inst_27440,inst_27433,inst_27441,inst_27442,state_val_27462,c__19655__auto___27489,out))
})();
var inst_27446 = cljs.core.filterv.call(null,inst_27445,inst_27433);
var inst_27433__$1 = inst_27446;
var state_27461__$1 = (function (){var statearr_27476 = state_27461;
(statearr_27476[(10)] = inst_27433__$1);

return statearr_27476;
})();
var statearr_27477_27499 = state_27461__$1;
(statearr_27477_27499[(2)] = null);

(statearr_27477_27499[(1)] = (2));


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
});})(c__19655__auto___27489,out))
;
return ((function (switch__19590__auto__,c__19655__auto___27489,out){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27481[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_27461){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__19594__auto__ = e27482;
var statearr_27483_27500 = state_27461;
(statearr_27483_27500[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27501 = state_27461;
state_27461 = G__27501;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_27461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_27461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27489,out))
})();
var state__19657__auto__ = (function (){var statearr_27484 = f__19656__auto__.call(null);
(statearr_27484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27489);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27489,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args27502 = [];
var len__17511__auto___27551 = arguments.length;
var i__17512__auto___27552 = (0);
while(true){
if((i__17512__auto___27552 < len__17511__auto___27551)){
args27502.push((arguments[i__17512__auto___27552]));

var G__27553 = (i__17512__auto___27552 + (1));
i__17512__auto___27552 = G__27553;
continue;
} else {
}
break;
}

var G__27504 = args27502.length;
switch (G__27504) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27502.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19655__auto___27555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27555,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27555,out){
return (function (state_27528){
var state_val_27529 = (state_27528[(1)]);
if((state_val_27529 === (7))){
var inst_27510 = (state_27528[(7)]);
var inst_27510__$1 = (state_27528[(2)]);
var inst_27511 = (inst_27510__$1 == null);
var inst_27512 = cljs.core.not.call(null,inst_27511);
var state_27528__$1 = (function (){var statearr_27530 = state_27528;
(statearr_27530[(7)] = inst_27510__$1);

return statearr_27530;
})();
if(inst_27512){
var statearr_27531_27556 = state_27528__$1;
(statearr_27531_27556[(1)] = (8));

} else {
var statearr_27532_27557 = state_27528__$1;
(statearr_27532_27557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (1))){
var inst_27505 = (0);
var state_27528__$1 = (function (){var statearr_27533 = state_27528;
(statearr_27533[(8)] = inst_27505);

return statearr_27533;
})();
var statearr_27534_27558 = state_27528__$1;
(statearr_27534_27558[(2)] = null);

(statearr_27534_27558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (4))){
var state_27528__$1 = state_27528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27528__$1,(7),ch);
} else {
if((state_val_27529 === (6))){
var inst_27523 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
var statearr_27535_27559 = state_27528__$1;
(statearr_27535_27559[(2)] = inst_27523);

(statearr_27535_27559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (3))){
var inst_27525 = (state_27528[(2)]);
var inst_27526 = cljs.core.async.close_BANG_.call(null,out);
var state_27528__$1 = (function (){var statearr_27536 = state_27528;
(statearr_27536[(9)] = inst_27525);

return statearr_27536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27528__$1,inst_27526);
} else {
if((state_val_27529 === (2))){
var inst_27505 = (state_27528[(8)]);
var inst_27507 = (inst_27505 < n);
var state_27528__$1 = state_27528;
if(cljs.core.truth_(inst_27507)){
var statearr_27537_27560 = state_27528__$1;
(statearr_27537_27560[(1)] = (4));

} else {
var statearr_27538_27561 = state_27528__$1;
(statearr_27538_27561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (11))){
var inst_27505 = (state_27528[(8)]);
var inst_27515 = (state_27528[(2)]);
var inst_27516 = (inst_27505 + (1));
var inst_27505__$1 = inst_27516;
var state_27528__$1 = (function (){var statearr_27539 = state_27528;
(statearr_27539[(10)] = inst_27515);

(statearr_27539[(8)] = inst_27505__$1);

return statearr_27539;
})();
var statearr_27540_27562 = state_27528__$1;
(statearr_27540_27562[(2)] = null);

(statearr_27540_27562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (9))){
var state_27528__$1 = state_27528;
var statearr_27541_27563 = state_27528__$1;
(statearr_27541_27563[(2)] = null);

(statearr_27541_27563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (5))){
var state_27528__$1 = state_27528;
var statearr_27542_27564 = state_27528__$1;
(statearr_27542_27564[(2)] = null);

(statearr_27542_27564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (10))){
var inst_27520 = (state_27528[(2)]);
var state_27528__$1 = state_27528;
var statearr_27543_27565 = state_27528__$1;
(statearr_27543_27565[(2)] = inst_27520);

(statearr_27543_27565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27529 === (8))){
var inst_27510 = (state_27528[(7)]);
var state_27528__$1 = state_27528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27528__$1,(11),out,inst_27510);
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
});})(c__19655__auto___27555,out))
;
return ((function (switch__19590__auto__,c__19655__auto___27555,out){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_27547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27547[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_27547[(1)] = (1));

return statearr_27547;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_27528){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27548){if((e27548 instanceof Object)){
var ex__19594__auto__ = e27548;
var statearr_27549_27566 = state_27528;
(statearr_27549_27566[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27567 = state_27528;
state_27528 = G__27567;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_27528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_27528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27555,out))
})();
var state__19657__auto__ = (function (){var statearr_27550 = f__19656__auto__.call(null);
(statearr_27550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27555);

return statearr_27550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27555,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27575 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27575 = (function (map_LT_,f,ch,meta27576){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27576 = meta27576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27577,meta27576__$1){
var self__ = this;
var _27577__$1 = this;
return (new cljs.core.async.t27575(self__.map_LT_,self__.f,self__.ch,meta27576__$1));
});

cljs.core.async.t27575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27577){
var self__ = this;
var _27577__$1 = this;
return self__.meta27576;
});

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27578 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27578 = (function (map_LT_,f,ch,meta27576,_,fn1,meta27579){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27576 = meta27576;
this._ = _;
this.fn1 = fn1;
this.meta27579 = meta27579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27580,meta27579__$1){
var self__ = this;
var _27580__$1 = this;
return (new cljs.core.async.t27578(self__.map_LT_,self__.f,self__.ch,self__.meta27576,self__._,self__.fn1,meta27579__$1));
});})(___$1))
;

cljs.core.async.t27578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27580){
var self__ = this;
var _27580__$1 = this;
return self__.meta27579;
});})(___$1))
;

cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27568_SHARP_){
return f1.call(null,(((p1__27568_SHARP_ == null))?null:self__.f.call(null,p1__27568_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27578.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27576","meta27576",459876742,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t27575","cljs.core.async/t27575",410033488,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27579","meta27579",66643556,null)], null);
});})(___$1))
;

cljs.core.async.t27578.cljs$lang$type = true;

cljs.core.async.t27578.cljs$lang$ctorStr = "cljs.core.async/t27578";

cljs.core.async.t27578.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27578");
});})(___$1))
;

cljs.core.async.__GT_t27578 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27578(map_LT___$1,f__$1,ch__$1,meta27576__$1,___$2,fn1__$1,meta27579){
return (new cljs.core.async.t27578(map_LT___$1,f__$1,ch__$1,meta27576__$1,___$2,fn1__$1,meta27579));
});})(___$1))
;

}

return (new cljs.core.async.t27578(self__.map_LT_,self__.f,self__.ch,self__.meta27576,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16460__auto__ = ret;
if(cljs.core.truth_(and__16460__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16460__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27576","meta27576",459876742,null)], null);
});

cljs.core.async.t27575.cljs$lang$type = true;

cljs.core.async.t27575.cljs$lang$ctorStr = "cljs.core.async/t27575";

cljs.core.async.t27575.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27575");
});

cljs.core.async.__GT_t27575 = (function cljs$core$async$map_LT__$___GT_t27575(map_LT___$1,f__$1,ch__$1,meta27576){
return (new cljs.core.async.t27575(map_LT___$1,f__$1,ch__$1,meta27576));
});

}

return (new cljs.core.async.t27575(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27584 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27584 = (function (map_GT_,f,ch,meta27585){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27585 = meta27585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27586,meta27585__$1){
var self__ = this;
var _27586__$1 = this;
return (new cljs.core.async.t27584(self__.map_GT_,self__.f,self__.ch,meta27585__$1));
});

cljs.core.async.t27584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27586){
var self__ = this;
var _27586__$1 = this;
return self__.meta27585;
});

cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27585","meta27585",1556218022,null)], null);
});

cljs.core.async.t27584.cljs$lang$type = true;

cljs.core.async.t27584.cljs$lang$ctorStr = "cljs.core.async/t27584";

cljs.core.async.t27584.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27584");
});

cljs.core.async.__GT_t27584 = (function cljs$core$async$map_GT__$___GT_t27584(map_GT___$1,f__$1,ch__$1,meta27585){
return (new cljs.core.async.t27584(map_GT___$1,f__$1,ch__$1,meta27585));
});

}

return (new cljs.core.async.t27584(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27590 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27590 = (function (filter_GT_,p,ch,meta27591){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27591 = meta27591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27592,meta27591__$1){
var self__ = this;
var _27592__$1 = this;
return (new cljs.core.async.t27590(self__.filter_GT_,self__.p,self__.ch,meta27591__$1));
});

cljs.core.async.t27590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27592){
var self__ = this;
var _27592__$1 = this;
return self__.meta27591;
});

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27591","meta27591",-1265543453,null)], null);
});

cljs.core.async.t27590.cljs$lang$type = true;

cljs.core.async.t27590.cljs$lang$ctorStr = "cljs.core.async/t27590";

cljs.core.async.t27590.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27590");
});

cljs.core.async.__GT_t27590 = (function cljs$core$async$filter_GT__$___GT_t27590(filter_GT___$1,p__$1,ch__$1,meta27591){
return (new cljs.core.async.t27590(filter_GT___$1,p__$1,ch__$1,meta27591));
});

}

return (new cljs.core.async.t27590(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args27593 = [];
var len__17511__auto___27637 = arguments.length;
var i__17512__auto___27638 = (0);
while(true){
if((i__17512__auto___27638 < len__17511__auto___27637)){
args27593.push((arguments[i__17512__auto___27638]));

var G__27639 = (i__17512__auto___27638 + (1));
i__17512__auto___27638 = G__27639;
continue;
} else {
}
break;
}

var G__27595 = args27593.length;
switch (G__27595) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27593.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19655__auto___27641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27641,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27641,out){
return (function (state_27616){
var state_val_27617 = (state_27616[(1)]);
if((state_val_27617 === (7))){
var inst_27612 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27618_27642 = state_27616__$1;
(statearr_27618_27642[(2)] = inst_27612);

(statearr_27618_27642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (1))){
var state_27616__$1 = state_27616;
var statearr_27619_27643 = state_27616__$1;
(statearr_27619_27643[(2)] = null);

(statearr_27619_27643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (4))){
var inst_27598 = (state_27616[(7)]);
var inst_27598__$1 = (state_27616[(2)]);
var inst_27599 = (inst_27598__$1 == null);
var state_27616__$1 = (function (){var statearr_27620 = state_27616;
(statearr_27620[(7)] = inst_27598__$1);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27599)){
var statearr_27621_27644 = state_27616__$1;
(statearr_27621_27644[(1)] = (5));

} else {
var statearr_27622_27645 = state_27616__$1;
(statearr_27622_27645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (6))){
var inst_27598 = (state_27616[(7)]);
var inst_27603 = p.call(null,inst_27598);
var state_27616__$1 = state_27616;
if(cljs.core.truth_(inst_27603)){
var statearr_27623_27646 = state_27616__$1;
(statearr_27623_27646[(1)] = (8));

} else {
var statearr_27624_27647 = state_27616__$1;
(statearr_27624_27647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (3))){
var inst_27614 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27616__$1,inst_27614);
} else {
if((state_val_27617 === (2))){
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27616__$1,(4),ch);
} else {
if((state_val_27617 === (11))){
var inst_27606 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27625_27648 = state_27616__$1;
(statearr_27625_27648[(2)] = inst_27606);

(statearr_27625_27648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (9))){
var state_27616__$1 = state_27616;
var statearr_27626_27649 = state_27616__$1;
(statearr_27626_27649[(2)] = null);

(statearr_27626_27649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (5))){
var inst_27601 = cljs.core.async.close_BANG_.call(null,out);
var state_27616__$1 = state_27616;
var statearr_27627_27650 = state_27616__$1;
(statearr_27627_27650[(2)] = inst_27601);

(statearr_27627_27650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (10))){
var inst_27609 = (state_27616[(2)]);
var state_27616__$1 = (function (){var statearr_27628 = state_27616;
(statearr_27628[(8)] = inst_27609);

return statearr_27628;
})();
var statearr_27629_27651 = state_27616__$1;
(statearr_27629_27651[(2)] = null);

(statearr_27629_27651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (8))){
var inst_27598 = (state_27616[(7)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27616__$1,(11),out,inst_27598);
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
});})(c__19655__auto___27641,out))
;
return ((function (switch__19590__auto__,c__19655__auto___27641,out){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_27633 = [null,null,null,null,null,null,null,null,null];
(statearr_27633[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_27633[(1)] = (1));

return statearr_27633;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_27616){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27634){if((e27634 instanceof Object)){
var ex__19594__auto__ = e27634;
var statearr_27635_27652 = state_27616;
(statearr_27635_27652[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27653 = state_27616;
state_27616 = G__27653;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_27616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_27616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27641,out))
})();
var state__19657__auto__ = (function (){var statearr_27636 = f__19656__auto__.call(null);
(statearr_27636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27641);

return statearr_27636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27641,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args27654 = [];
var len__17511__auto___27657 = arguments.length;
var i__17512__auto___27658 = (0);
while(true){
if((i__17512__auto___27658 < len__17511__auto___27657)){
args27654.push((arguments[i__17512__auto___27658]));

var G__27659 = (i__17512__auto___27658 + (1));
i__17512__auto___27658 = G__27659;
continue;
} else {
}
break;
}

var G__27656 = args27654.length;
switch (G__27656) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27654.length)].join('')));

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
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_27826){
var state_val_27827 = (state_27826[(1)]);
if((state_val_27827 === (7))){
var inst_27822 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27828_27869 = state_27826__$1;
(statearr_27828_27869[(2)] = inst_27822);

(statearr_27828_27869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (20))){
var inst_27792 = (state_27826[(7)]);
var inst_27803 = (state_27826[(2)]);
var inst_27804 = cljs.core.next.call(null,inst_27792);
var inst_27778 = inst_27804;
var inst_27779 = null;
var inst_27780 = (0);
var inst_27781 = (0);
var state_27826__$1 = (function (){var statearr_27829 = state_27826;
(statearr_27829[(8)] = inst_27781);

(statearr_27829[(9)] = inst_27778);

(statearr_27829[(10)] = inst_27803);

(statearr_27829[(11)] = inst_27780);

(statearr_27829[(12)] = inst_27779);

return statearr_27829;
})();
var statearr_27830_27870 = state_27826__$1;
(statearr_27830_27870[(2)] = null);

(statearr_27830_27870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (1))){
var state_27826__$1 = state_27826;
var statearr_27831_27871 = state_27826__$1;
(statearr_27831_27871[(2)] = null);

(statearr_27831_27871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (4))){
var inst_27767 = (state_27826[(13)]);
var inst_27767__$1 = (state_27826[(2)]);
var inst_27768 = (inst_27767__$1 == null);
var state_27826__$1 = (function (){var statearr_27832 = state_27826;
(statearr_27832[(13)] = inst_27767__$1);

return statearr_27832;
})();
if(cljs.core.truth_(inst_27768)){
var statearr_27833_27872 = state_27826__$1;
(statearr_27833_27872[(1)] = (5));

} else {
var statearr_27834_27873 = state_27826__$1;
(statearr_27834_27873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (15))){
var state_27826__$1 = state_27826;
var statearr_27838_27874 = state_27826__$1;
(statearr_27838_27874[(2)] = null);

(statearr_27838_27874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (21))){
var state_27826__$1 = state_27826;
var statearr_27839_27875 = state_27826__$1;
(statearr_27839_27875[(2)] = null);

(statearr_27839_27875[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (13))){
var inst_27781 = (state_27826[(8)]);
var inst_27778 = (state_27826[(9)]);
var inst_27780 = (state_27826[(11)]);
var inst_27779 = (state_27826[(12)]);
var inst_27788 = (state_27826[(2)]);
var inst_27789 = (inst_27781 + (1));
var tmp27835 = inst_27778;
var tmp27836 = inst_27780;
var tmp27837 = inst_27779;
var inst_27778__$1 = tmp27835;
var inst_27779__$1 = tmp27837;
var inst_27780__$1 = tmp27836;
var inst_27781__$1 = inst_27789;
var state_27826__$1 = (function (){var statearr_27840 = state_27826;
(statearr_27840[(8)] = inst_27781__$1);

(statearr_27840[(9)] = inst_27778__$1);

(statearr_27840[(14)] = inst_27788);

(statearr_27840[(11)] = inst_27780__$1);

(statearr_27840[(12)] = inst_27779__$1);

return statearr_27840;
})();
var statearr_27841_27876 = state_27826__$1;
(statearr_27841_27876[(2)] = null);

(statearr_27841_27876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (22))){
var state_27826__$1 = state_27826;
var statearr_27842_27877 = state_27826__$1;
(statearr_27842_27877[(2)] = null);

(statearr_27842_27877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (6))){
var inst_27767 = (state_27826[(13)]);
var inst_27776 = f.call(null,inst_27767);
var inst_27777 = cljs.core.seq.call(null,inst_27776);
var inst_27778 = inst_27777;
var inst_27779 = null;
var inst_27780 = (0);
var inst_27781 = (0);
var state_27826__$1 = (function (){var statearr_27843 = state_27826;
(statearr_27843[(8)] = inst_27781);

(statearr_27843[(9)] = inst_27778);

(statearr_27843[(11)] = inst_27780);

(statearr_27843[(12)] = inst_27779);

return statearr_27843;
})();
var statearr_27844_27878 = state_27826__$1;
(statearr_27844_27878[(2)] = null);

(statearr_27844_27878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (17))){
var inst_27792 = (state_27826[(7)]);
var inst_27796 = cljs.core.chunk_first.call(null,inst_27792);
var inst_27797 = cljs.core.chunk_rest.call(null,inst_27792);
var inst_27798 = cljs.core.count.call(null,inst_27796);
var inst_27778 = inst_27797;
var inst_27779 = inst_27796;
var inst_27780 = inst_27798;
var inst_27781 = (0);
var state_27826__$1 = (function (){var statearr_27845 = state_27826;
(statearr_27845[(8)] = inst_27781);

(statearr_27845[(9)] = inst_27778);

(statearr_27845[(11)] = inst_27780);

(statearr_27845[(12)] = inst_27779);

return statearr_27845;
})();
var statearr_27846_27879 = state_27826__$1;
(statearr_27846_27879[(2)] = null);

(statearr_27846_27879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (3))){
var inst_27824 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27826__$1,inst_27824);
} else {
if((state_val_27827 === (12))){
var inst_27812 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27847_27880 = state_27826__$1;
(statearr_27847_27880[(2)] = inst_27812);

(statearr_27847_27880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (2))){
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27826__$1,(4),in$);
} else {
if((state_val_27827 === (23))){
var inst_27820 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27848_27881 = state_27826__$1;
(statearr_27848_27881[(2)] = inst_27820);

(statearr_27848_27881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (19))){
var inst_27807 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27849_27882 = state_27826__$1;
(statearr_27849_27882[(2)] = inst_27807);

(statearr_27849_27882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (11))){
var inst_27778 = (state_27826[(9)]);
var inst_27792 = (state_27826[(7)]);
var inst_27792__$1 = cljs.core.seq.call(null,inst_27778);
var state_27826__$1 = (function (){var statearr_27850 = state_27826;
(statearr_27850[(7)] = inst_27792__$1);

return statearr_27850;
})();
if(inst_27792__$1){
var statearr_27851_27883 = state_27826__$1;
(statearr_27851_27883[(1)] = (14));

} else {
var statearr_27852_27884 = state_27826__$1;
(statearr_27852_27884[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (9))){
var inst_27814 = (state_27826[(2)]);
var inst_27815 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27826__$1 = (function (){var statearr_27853 = state_27826;
(statearr_27853[(15)] = inst_27814);

return statearr_27853;
})();
if(cljs.core.truth_(inst_27815)){
var statearr_27854_27885 = state_27826__$1;
(statearr_27854_27885[(1)] = (21));

} else {
var statearr_27855_27886 = state_27826__$1;
(statearr_27855_27886[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (5))){
var inst_27770 = cljs.core.async.close_BANG_.call(null,out);
var state_27826__$1 = state_27826;
var statearr_27856_27887 = state_27826__$1;
(statearr_27856_27887[(2)] = inst_27770);

(statearr_27856_27887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (14))){
var inst_27792 = (state_27826[(7)]);
var inst_27794 = cljs.core.chunked_seq_QMARK_.call(null,inst_27792);
var state_27826__$1 = state_27826;
if(inst_27794){
var statearr_27857_27888 = state_27826__$1;
(statearr_27857_27888[(1)] = (17));

} else {
var statearr_27858_27889 = state_27826__$1;
(statearr_27858_27889[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (16))){
var inst_27810 = (state_27826[(2)]);
var state_27826__$1 = state_27826;
var statearr_27859_27890 = state_27826__$1;
(statearr_27859_27890[(2)] = inst_27810);

(statearr_27859_27890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27827 === (10))){
var inst_27781 = (state_27826[(8)]);
var inst_27779 = (state_27826[(12)]);
var inst_27786 = cljs.core._nth.call(null,inst_27779,inst_27781);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27826__$1,(13),out,inst_27786);
} else {
if((state_val_27827 === (18))){
var inst_27792 = (state_27826[(7)]);
var inst_27801 = cljs.core.first.call(null,inst_27792);
var state_27826__$1 = state_27826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27826__$1,(20),out,inst_27801);
} else {
if((state_val_27827 === (8))){
var inst_27781 = (state_27826[(8)]);
var inst_27780 = (state_27826[(11)]);
var inst_27783 = (inst_27781 < inst_27780);
var inst_27784 = inst_27783;
var state_27826__$1 = state_27826;
if(cljs.core.truth_(inst_27784)){
var statearr_27860_27891 = state_27826__$1;
(statearr_27860_27891[(1)] = (10));

} else {
var statearr_27861_27892 = state_27826__$1;
(statearr_27861_27892[(1)] = (11));

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
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19591__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19591__auto____0 = (function (){
var statearr_27865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27865[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19591__auto__);

(statearr_27865[(1)] = (1));

return statearr_27865;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19591__auto____1 = (function (state_27826){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27866){if((e27866 instanceof Object)){
var ex__19594__auto__ = e27866;
var statearr_27867_27893 = state_27826;
(statearr_27867_27893[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27894 = state_27826;
state_27826 = G__27894;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19591__auto__ = function(state_27826){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19591__auto____1.call(this,state_27826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19591__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19591__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_27868 = f__19656__auto__.call(null);
(statearr_27868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_27868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args27895 = [];
var len__17511__auto___27898 = arguments.length;
var i__17512__auto___27899 = (0);
while(true){
if((i__17512__auto___27899 < len__17511__auto___27898)){
args27895.push((arguments[i__17512__auto___27899]));

var G__27900 = (i__17512__auto___27899 + (1));
i__17512__auto___27899 = G__27900;
continue;
} else {
}
break;
}

var G__27897 = args27895.length;
switch (G__27897) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27895.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args27902 = [];
var len__17511__auto___27905 = arguments.length;
var i__17512__auto___27906 = (0);
while(true){
if((i__17512__auto___27906 < len__17511__auto___27905)){
args27902.push((arguments[i__17512__auto___27906]));

var G__27907 = (i__17512__auto___27906 + (1));
i__17512__auto___27906 = G__27907;
continue;
} else {
}
break;
}

var G__27904 = args27902.length;
switch (G__27904) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27902.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var args27909 = [];
var len__17511__auto___27960 = arguments.length;
var i__17512__auto___27961 = (0);
while(true){
if((i__17512__auto___27961 < len__17511__auto___27960)){
args27909.push((arguments[i__17512__auto___27961]));

var G__27962 = (i__17512__auto___27961 + (1));
i__17512__auto___27961 = G__27962;
continue;
} else {
}
break;
}

var G__27911 = args27909.length;
switch (G__27911) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27909.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19655__auto___27964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___27964,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___27964,out){
return (function (state_27935){
var state_val_27936 = (state_27935[(1)]);
if((state_val_27936 === (7))){
var inst_27930 = (state_27935[(2)]);
var state_27935__$1 = state_27935;
var statearr_27937_27965 = state_27935__$1;
(statearr_27937_27965[(2)] = inst_27930);

(statearr_27937_27965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (1))){
var inst_27912 = null;
var state_27935__$1 = (function (){var statearr_27938 = state_27935;
(statearr_27938[(7)] = inst_27912);

return statearr_27938;
})();
var statearr_27939_27966 = state_27935__$1;
(statearr_27939_27966[(2)] = null);

(statearr_27939_27966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (4))){
var inst_27915 = (state_27935[(8)]);
var inst_27915__$1 = (state_27935[(2)]);
var inst_27916 = (inst_27915__$1 == null);
var inst_27917 = cljs.core.not.call(null,inst_27916);
var state_27935__$1 = (function (){var statearr_27940 = state_27935;
(statearr_27940[(8)] = inst_27915__$1);

return statearr_27940;
})();
if(inst_27917){
var statearr_27941_27967 = state_27935__$1;
(statearr_27941_27967[(1)] = (5));

} else {
var statearr_27942_27968 = state_27935__$1;
(statearr_27942_27968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (6))){
var state_27935__$1 = state_27935;
var statearr_27943_27969 = state_27935__$1;
(statearr_27943_27969[(2)] = null);

(statearr_27943_27969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (3))){
var inst_27932 = (state_27935[(2)]);
var inst_27933 = cljs.core.async.close_BANG_.call(null,out);
var state_27935__$1 = (function (){var statearr_27944 = state_27935;
(statearr_27944[(9)] = inst_27932);

return statearr_27944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27935__$1,inst_27933);
} else {
if((state_val_27936 === (2))){
var state_27935__$1 = state_27935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27935__$1,(4),ch);
} else {
if((state_val_27936 === (11))){
var inst_27915 = (state_27935[(8)]);
var inst_27924 = (state_27935[(2)]);
var inst_27912 = inst_27915;
var state_27935__$1 = (function (){var statearr_27945 = state_27935;
(statearr_27945[(7)] = inst_27912);

(statearr_27945[(10)] = inst_27924);

return statearr_27945;
})();
var statearr_27946_27970 = state_27935__$1;
(statearr_27946_27970[(2)] = null);

(statearr_27946_27970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (9))){
var inst_27915 = (state_27935[(8)]);
var state_27935__$1 = state_27935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27935__$1,(11),out,inst_27915);
} else {
if((state_val_27936 === (5))){
var inst_27912 = (state_27935[(7)]);
var inst_27915 = (state_27935[(8)]);
var inst_27919 = cljs.core._EQ_.call(null,inst_27915,inst_27912);
var state_27935__$1 = state_27935;
if(inst_27919){
var statearr_27948_27971 = state_27935__$1;
(statearr_27948_27971[(1)] = (8));

} else {
var statearr_27949_27972 = state_27935__$1;
(statearr_27949_27972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (10))){
var inst_27927 = (state_27935[(2)]);
var state_27935__$1 = state_27935;
var statearr_27950_27973 = state_27935__$1;
(statearr_27950_27973[(2)] = inst_27927);

(statearr_27950_27973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27936 === (8))){
var inst_27912 = (state_27935[(7)]);
var tmp27947 = inst_27912;
var inst_27912__$1 = tmp27947;
var state_27935__$1 = (function (){var statearr_27951 = state_27935;
(statearr_27951[(7)] = inst_27912__$1);

return statearr_27951;
})();
var statearr_27952_27974 = state_27935__$1;
(statearr_27952_27974[(2)] = null);

(statearr_27952_27974[(1)] = (2));


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
});})(c__19655__auto___27964,out))
;
return ((function (switch__19590__auto__,c__19655__auto___27964,out){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_27956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27956[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_27956[(1)] = (1));

return statearr_27956;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_27935){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_27935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e27957){if((e27957 instanceof Object)){
var ex__19594__auto__ = e27957;
var statearr_27958_27975 = state_27935;
(statearr_27958_27975[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27976 = state_27935;
state_27935 = G__27976;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_27935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_27935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___27964,out))
})();
var state__19657__auto__ = (function (){var statearr_27959 = f__19656__auto__.call(null);
(statearr_27959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___27964);

return statearr_27959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___27964,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args27977 = [];
var len__17511__auto___28047 = arguments.length;
var i__17512__auto___28048 = (0);
while(true){
if((i__17512__auto___28048 < len__17511__auto___28047)){
args27977.push((arguments[i__17512__auto___28048]));

var G__28049 = (i__17512__auto___28048 + (1));
i__17512__auto___28048 = G__28049;
continue;
} else {
}
break;
}

var G__27979 = args27977.length;
switch (G__27979) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27977.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19655__auto___28051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___28051,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___28051,out){
return (function (state_28017){
var state_val_28018 = (state_28017[(1)]);
if((state_val_28018 === (7))){
var inst_28013 = (state_28017[(2)]);
var state_28017__$1 = state_28017;
var statearr_28019_28052 = state_28017__$1;
(statearr_28019_28052[(2)] = inst_28013);

(statearr_28019_28052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (1))){
var inst_27980 = (new Array(n));
var inst_27981 = inst_27980;
var inst_27982 = (0);
var state_28017__$1 = (function (){var statearr_28020 = state_28017;
(statearr_28020[(7)] = inst_27982);

(statearr_28020[(8)] = inst_27981);

return statearr_28020;
})();
var statearr_28021_28053 = state_28017__$1;
(statearr_28021_28053[(2)] = null);

(statearr_28021_28053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (4))){
var inst_27985 = (state_28017[(9)]);
var inst_27985__$1 = (state_28017[(2)]);
var inst_27986 = (inst_27985__$1 == null);
var inst_27987 = cljs.core.not.call(null,inst_27986);
var state_28017__$1 = (function (){var statearr_28022 = state_28017;
(statearr_28022[(9)] = inst_27985__$1);

return statearr_28022;
})();
if(inst_27987){
var statearr_28023_28054 = state_28017__$1;
(statearr_28023_28054[(1)] = (5));

} else {
var statearr_28024_28055 = state_28017__$1;
(statearr_28024_28055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (15))){
var inst_28007 = (state_28017[(2)]);
var state_28017__$1 = state_28017;
var statearr_28025_28056 = state_28017__$1;
(statearr_28025_28056[(2)] = inst_28007);

(statearr_28025_28056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (13))){
var state_28017__$1 = state_28017;
var statearr_28026_28057 = state_28017__$1;
(statearr_28026_28057[(2)] = null);

(statearr_28026_28057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (6))){
var inst_27982 = (state_28017[(7)]);
var inst_28003 = (inst_27982 > (0));
var state_28017__$1 = state_28017;
if(cljs.core.truth_(inst_28003)){
var statearr_28027_28058 = state_28017__$1;
(statearr_28027_28058[(1)] = (12));

} else {
var statearr_28028_28059 = state_28017__$1;
(statearr_28028_28059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (3))){
var inst_28015 = (state_28017[(2)]);
var state_28017__$1 = state_28017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28017__$1,inst_28015);
} else {
if((state_val_28018 === (12))){
var inst_27981 = (state_28017[(8)]);
var inst_28005 = cljs.core.vec.call(null,inst_27981);
var state_28017__$1 = state_28017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28017__$1,(15),out,inst_28005);
} else {
if((state_val_28018 === (2))){
var state_28017__$1 = state_28017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28017__$1,(4),ch);
} else {
if((state_val_28018 === (11))){
var inst_27997 = (state_28017[(2)]);
var inst_27998 = (new Array(n));
var inst_27981 = inst_27998;
var inst_27982 = (0);
var state_28017__$1 = (function (){var statearr_28029 = state_28017;
(statearr_28029[(7)] = inst_27982);

(statearr_28029[(10)] = inst_27997);

(statearr_28029[(8)] = inst_27981);

return statearr_28029;
})();
var statearr_28030_28060 = state_28017__$1;
(statearr_28030_28060[(2)] = null);

(statearr_28030_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (9))){
var inst_27981 = (state_28017[(8)]);
var inst_27995 = cljs.core.vec.call(null,inst_27981);
var state_28017__$1 = state_28017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28017__$1,(11),out,inst_27995);
} else {
if((state_val_28018 === (5))){
var inst_27982 = (state_28017[(7)]);
var inst_27990 = (state_28017[(11)]);
var inst_27985 = (state_28017[(9)]);
var inst_27981 = (state_28017[(8)]);
var inst_27989 = (inst_27981[inst_27982] = inst_27985);
var inst_27990__$1 = (inst_27982 + (1));
var inst_27991 = (inst_27990__$1 < n);
var state_28017__$1 = (function (){var statearr_28031 = state_28017;
(statearr_28031[(12)] = inst_27989);

(statearr_28031[(11)] = inst_27990__$1);

return statearr_28031;
})();
if(cljs.core.truth_(inst_27991)){
var statearr_28032_28061 = state_28017__$1;
(statearr_28032_28061[(1)] = (8));

} else {
var statearr_28033_28062 = state_28017__$1;
(statearr_28033_28062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (14))){
var inst_28010 = (state_28017[(2)]);
var inst_28011 = cljs.core.async.close_BANG_.call(null,out);
var state_28017__$1 = (function (){var statearr_28035 = state_28017;
(statearr_28035[(13)] = inst_28010);

return statearr_28035;
})();
var statearr_28036_28063 = state_28017__$1;
(statearr_28036_28063[(2)] = inst_28011);

(statearr_28036_28063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (10))){
var inst_28001 = (state_28017[(2)]);
var state_28017__$1 = state_28017;
var statearr_28037_28064 = state_28017__$1;
(statearr_28037_28064[(2)] = inst_28001);

(statearr_28037_28064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28018 === (8))){
var inst_27990 = (state_28017[(11)]);
var inst_27981 = (state_28017[(8)]);
var tmp28034 = inst_27981;
var inst_27981__$1 = tmp28034;
var inst_27982 = inst_27990;
var state_28017__$1 = (function (){var statearr_28038 = state_28017;
(statearr_28038[(7)] = inst_27982);

(statearr_28038[(8)] = inst_27981__$1);

return statearr_28038;
})();
var statearr_28039_28065 = state_28017__$1;
(statearr_28039_28065[(2)] = null);

(statearr_28039_28065[(1)] = (2));


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
});})(c__19655__auto___28051,out))
;
return ((function (switch__19590__auto__,c__19655__auto___28051,out){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_28043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28043[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_28043[(1)] = (1));

return statearr_28043;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_28017){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_28017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e28044){if((e28044 instanceof Object)){
var ex__19594__auto__ = e28044;
var statearr_28045_28066 = state_28017;
(statearr_28045_28066[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28067 = state_28017;
state_28017 = G__28067;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_28017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_28017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___28051,out))
})();
var state__19657__auto__ = (function (){var statearr_28046 = f__19656__auto__.call(null);
(statearr_28046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___28051);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___28051,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args28068 = [];
var len__17511__auto___28142 = arguments.length;
var i__17512__auto___28143 = (0);
while(true){
if((i__17512__auto___28143 < len__17511__auto___28142)){
args28068.push((arguments[i__17512__auto___28143]));

var G__28144 = (i__17512__auto___28143 + (1));
i__17512__auto___28143 = G__28144;
continue;
} else {
}
break;
}

var G__28070 = args28068.length;
switch (G__28070) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28068.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19655__auto___28146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___28146,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___28146,out){
return (function (state_28112){
var state_val_28113 = (state_28112[(1)]);
if((state_val_28113 === (7))){
var inst_28108 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
var statearr_28114_28147 = state_28112__$1;
(statearr_28114_28147[(2)] = inst_28108);

(statearr_28114_28147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (1))){
var inst_28071 = [];
var inst_28072 = inst_28071;
var inst_28073 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28112__$1 = (function (){var statearr_28115 = state_28112;
(statearr_28115[(7)] = inst_28073);

(statearr_28115[(8)] = inst_28072);

return statearr_28115;
})();
var statearr_28116_28148 = state_28112__$1;
(statearr_28116_28148[(2)] = null);

(statearr_28116_28148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (4))){
var inst_28076 = (state_28112[(9)]);
var inst_28076__$1 = (state_28112[(2)]);
var inst_28077 = (inst_28076__$1 == null);
var inst_28078 = cljs.core.not.call(null,inst_28077);
var state_28112__$1 = (function (){var statearr_28117 = state_28112;
(statearr_28117[(9)] = inst_28076__$1);

return statearr_28117;
})();
if(inst_28078){
var statearr_28118_28149 = state_28112__$1;
(statearr_28118_28149[(1)] = (5));

} else {
var statearr_28119_28150 = state_28112__$1;
(statearr_28119_28150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (15))){
var inst_28102 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
var statearr_28120_28151 = state_28112__$1;
(statearr_28120_28151[(2)] = inst_28102);

(statearr_28120_28151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (13))){
var state_28112__$1 = state_28112;
var statearr_28121_28152 = state_28112__$1;
(statearr_28121_28152[(2)] = null);

(statearr_28121_28152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (6))){
var inst_28072 = (state_28112[(8)]);
var inst_28097 = inst_28072.length;
var inst_28098 = (inst_28097 > (0));
var state_28112__$1 = state_28112;
if(cljs.core.truth_(inst_28098)){
var statearr_28122_28153 = state_28112__$1;
(statearr_28122_28153[(1)] = (12));

} else {
var statearr_28123_28154 = state_28112__$1;
(statearr_28123_28154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (3))){
var inst_28110 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28112__$1,inst_28110);
} else {
if((state_val_28113 === (12))){
var inst_28072 = (state_28112[(8)]);
var inst_28100 = cljs.core.vec.call(null,inst_28072);
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28112__$1,(15),out,inst_28100);
} else {
if((state_val_28113 === (2))){
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28112__$1,(4),ch);
} else {
if((state_val_28113 === (11))){
var inst_28080 = (state_28112[(10)]);
var inst_28076 = (state_28112[(9)]);
var inst_28090 = (state_28112[(2)]);
var inst_28091 = [];
var inst_28092 = inst_28091.push(inst_28076);
var inst_28072 = inst_28091;
var inst_28073 = inst_28080;
var state_28112__$1 = (function (){var statearr_28124 = state_28112;
(statearr_28124[(11)] = inst_28090);

(statearr_28124[(7)] = inst_28073);

(statearr_28124[(12)] = inst_28092);

(statearr_28124[(8)] = inst_28072);

return statearr_28124;
})();
var statearr_28125_28155 = state_28112__$1;
(statearr_28125_28155[(2)] = null);

(statearr_28125_28155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (9))){
var inst_28072 = (state_28112[(8)]);
var inst_28088 = cljs.core.vec.call(null,inst_28072);
var state_28112__$1 = state_28112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28112__$1,(11),out,inst_28088);
} else {
if((state_val_28113 === (5))){
var inst_28080 = (state_28112[(10)]);
var inst_28076 = (state_28112[(9)]);
var inst_28073 = (state_28112[(7)]);
var inst_28080__$1 = f.call(null,inst_28076);
var inst_28081 = cljs.core._EQ_.call(null,inst_28080__$1,inst_28073);
var inst_28082 = cljs.core.keyword_identical_QMARK_.call(null,inst_28073,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28083 = (inst_28081) || (inst_28082);
var state_28112__$1 = (function (){var statearr_28126 = state_28112;
(statearr_28126[(10)] = inst_28080__$1);

return statearr_28126;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28127_28156 = state_28112__$1;
(statearr_28127_28156[(1)] = (8));

} else {
var statearr_28128_28157 = state_28112__$1;
(statearr_28128_28157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (14))){
var inst_28105 = (state_28112[(2)]);
var inst_28106 = cljs.core.async.close_BANG_.call(null,out);
var state_28112__$1 = (function (){var statearr_28130 = state_28112;
(statearr_28130[(13)] = inst_28105);

return statearr_28130;
})();
var statearr_28131_28158 = state_28112__$1;
(statearr_28131_28158[(2)] = inst_28106);

(statearr_28131_28158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (10))){
var inst_28095 = (state_28112[(2)]);
var state_28112__$1 = state_28112;
var statearr_28132_28159 = state_28112__$1;
(statearr_28132_28159[(2)] = inst_28095);

(statearr_28132_28159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28113 === (8))){
var inst_28080 = (state_28112[(10)]);
var inst_28076 = (state_28112[(9)]);
var inst_28072 = (state_28112[(8)]);
var inst_28085 = inst_28072.push(inst_28076);
var tmp28129 = inst_28072;
var inst_28072__$1 = tmp28129;
var inst_28073 = inst_28080;
var state_28112__$1 = (function (){var statearr_28133 = state_28112;
(statearr_28133[(7)] = inst_28073);

(statearr_28133[(14)] = inst_28085);

(statearr_28133[(8)] = inst_28072__$1);

return statearr_28133;
})();
var statearr_28134_28160 = state_28112__$1;
(statearr_28134_28160[(2)] = null);

(statearr_28134_28160[(1)] = (2));


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
});})(c__19655__auto___28146,out))
;
return ((function (switch__19590__auto__,c__19655__auto___28146,out){
return (function() {
var cljs$core$async$state_machine__19591__auto__ = null;
var cljs$core$async$state_machine__19591__auto____0 = (function (){
var statearr_28138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28138[(0)] = cljs$core$async$state_machine__19591__auto__);

(statearr_28138[(1)] = (1));

return statearr_28138;
});
var cljs$core$async$state_machine__19591__auto____1 = (function (state_28112){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_28112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e28139){if((e28139 instanceof Object)){
var ex__19594__auto__ = e28139;
var statearr_28140_28161 = state_28112;
(statearr_28140_28161[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28162 = state_28112;
state_28112 = G__28162;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
cljs$core$async$state_machine__19591__auto__ = function(state_28112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19591__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19591__auto____1.call(this,state_28112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19591__auto____0;
cljs$core$async$state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19591__auto____1;
return cljs$core$async$state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___28146,out))
})();
var state__19657__auto__ = (function (){var statearr_28141 = f__19656__auto__.call(null);
(statearr_28141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___28146);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___28146,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map