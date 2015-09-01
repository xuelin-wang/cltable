// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26015 = (function (fn_handler,f,meta26016){
this.fn_handler = fn_handler;
this.f = f;
this.meta26016 = meta26016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26017,meta26016__$1){
var self__ = this;
var _26017__$1 = this;
return (new cljs.core.async.t_cljs$core$async26015(self__.fn_handler,self__.f,meta26016__$1));
});

cljs.core.async.t_cljs$core$async26015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26017){
var self__ = this;
var _26017__$1 = this;
return self__.meta26016;
});

cljs.core.async.t_cljs$core$async26015.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26016","meta26016",-1102721231,null)], null);
});

cljs.core.async.t_cljs$core$async26015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26015";

cljs.core.async.t_cljs$core$async26015.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async26015");
});

cljs.core.async.__GT_t_cljs$core$async26015 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26015(fn_handler__$1,f__$1,meta26016){
return (new cljs.core.async.t_cljs$core$async26015(fn_handler__$1,f__$1,meta26016));
});

}

return (new cljs.core.async.t_cljs$core$async26015(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args26020 = [];
var len__17566__auto___26023 = arguments.length;
var i__17567__auto___26024 = (0);
while(true){
if((i__17567__auto___26024 < len__17566__auto___26023)){
args26020.push((arguments[i__17567__auto___26024]));

var G__26025 = (i__17567__auto___26024 + (1));
i__17567__auto___26024 = G__26025;
continue;
} else {
}
break;
}

var G__26022 = args26020.length;
switch (G__26022) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26020.length)].join('')));

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
var args26027 = [];
var len__17566__auto___26030 = arguments.length;
var i__17567__auto___26031 = (0);
while(true){
if((i__17567__auto___26031 < len__17566__auto___26030)){
args26027.push((arguments[i__17567__auto___26031]));

var G__26032 = (i__17567__auto___26031 + (1));
i__17567__auto___26031 = G__26032;
continue;
} else {
}
break;
}

var G__26029 = args26027.length;
switch (G__26029) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26027.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26034 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26034);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26034,ret){
return (function (){
return fn1.call(null,val_26034);
});})(val_26034,ret))
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
var args26035 = [];
var len__17566__auto___26038 = arguments.length;
var i__17567__auto___26039 = (0);
while(true){
if((i__17567__auto___26039 < len__17566__auto___26038)){
args26035.push((arguments[i__17567__auto___26039]));

var G__26040 = (i__17567__auto___26039 + (1));
i__17567__auto___26039 = G__26040;
continue;
} else {
}
break;
}

var G__26037 = args26035.length;
switch (G__26037) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26035.length)].join('')));

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
var n__17411__auto___26042 = n;
var x_26043 = (0);
while(true){
if((x_26043 < n__17411__auto___26042)){
(a[x_26043] = (0));

var G__26044 = (x_26043 + (1));
x_26043 = G__26044;
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

var G__26045 = (i + (1));
i = G__26045;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26049 = (function (alt_flag,flag,meta26050){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26050 = meta26050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26051,meta26050__$1){
var self__ = this;
var _26051__$1 = this;
return (new cljs.core.async.t_cljs$core$async26049(self__.alt_flag,self__.flag,meta26050__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26051){
var self__ = this;
var _26051__$1 = this;
return self__.meta26050;
});})(flag))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26049.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26050","meta26050",-1813340745,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26049";

cljs.core.async.t_cljs$core$async26049.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async26049");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26049 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26049(alt_flag__$1,flag__$1,meta26050){
return (new cljs.core.async.t_cljs$core$async26049(alt_flag__$1,flag__$1,meta26050));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26049(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26055 = (function (alt_handler,flag,cb,meta26056){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26056 = meta26056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26057,meta26056__$1){
var self__ = this;
var _26057__$1 = this;
return (new cljs.core.async.t_cljs$core$async26055(self__.alt_handler,self__.flag,self__.cb,meta26056__$1));
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26057){
var self__ = this;
var _26057__$1 = this;
return self__.meta26056;
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26056","meta26056",-1423091189,null)], null);
});

cljs.core.async.t_cljs$core$async26055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26055";

cljs.core.async.t_cljs$core$async26055.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async26055");
});

cljs.core.async.__GT_t_cljs$core$async26055 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26055(alt_handler__$1,flag__$1,cb__$1,meta26056){
return (new cljs.core.async.t_cljs$core$async26055(alt_handler__$1,flag__$1,cb__$1,meta26056));
});

}

return (new cljs.core.async.t_cljs$core$async26055(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26058_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26058_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26059_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26059_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16508__auto__ = wport;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26060 = (i + (1));
i = G__26060;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16508__auto__ = ret;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16496__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16496__auto__;
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
var args__17573__auto__ = [];
var len__17566__auto___26066 = arguments.length;
var i__17567__auto___26067 = (0);
while(true){
if((i__17567__auto___26067 < len__17566__auto___26066)){
args__17573__auto__.push((arguments[i__17567__auto___26067]));

var G__26068 = (i__17567__auto___26067 + (1));
i__17567__auto___26067 = G__26068;
continue;
} else {
}
break;
}

var argseq__17574__auto__ = ((((1) < args__17573__auto__.length))?(new cljs.core.IndexedSeq(args__17573__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17574__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26063){
var map__26064 = p__26063;
var map__26064__$1 = ((((!((map__26064 == null)))?((((map__26064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26064):map__26064);
var opts = map__26064__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26061){
var G__26062 = cljs.core.first.call(null,seq26061);
var seq26061__$1 = cljs.core.next.call(null,seq26061);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26062,seq26061__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26069 = [];
var len__17566__auto___26119 = arguments.length;
var i__17567__auto___26120 = (0);
while(true){
if((i__17567__auto___26120 < len__17566__auto___26119)){
args26069.push((arguments[i__17567__auto___26120]));

var G__26121 = (i__17567__auto___26120 + (1));
i__17567__auto___26120 = G__26121;
continue;
} else {
}
break;
}

var G__26071 = args26069.length;
switch (G__26071) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26069.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19588__auto___26123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___26123){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___26123){
return (function (state_26095){
var state_val_26096 = (state_26095[(1)]);
if((state_val_26096 === (7))){
var inst_26091 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26097_26124 = state_26095__$1;
(statearr_26097_26124[(2)] = inst_26091);

(statearr_26097_26124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (1))){
var state_26095__$1 = state_26095;
var statearr_26098_26125 = state_26095__$1;
(statearr_26098_26125[(2)] = null);

(statearr_26098_26125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (4))){
var inst_26074 = (state_26095[(7)]);
var inst_26074__$1 = (state_26095[(2)]);
var inst_26075 = (inst_26074__$1 == null);
var state_26095__$1 = (function (){var statearr_26099 = state_26095;
(statearr_26099[(7)] = inst_26074__$1);

return statearr_26099;
})();
if(cljs.core.truth_(inst_26075)){
var statearr_26100_26126 = state_26095__$1;
(statearr_26100_26126[(1)] = (5));

} else {
var statearr_26101_26127 = state_26095__$1;
(statearr_26101_26127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (13))){
var state_26095__$1 = state_26095;
var statearr_26102_26128 = state_26095__$1;
(statearr_26102_26128[(2)] = null);

(statearr_26102_26128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (6))){
var inst_26074 = (state_26095[(7)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26095__$1,(11),to,inst_26074);
} else {
if((state_val_26096 === (3))){
var inst_26093 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26095__$1,inst_26093);
} else {
if((state_val_26096 === (12))){
var state_26095__$1 = state_26095;
var statearr_26103_26129 = state_26095__$1;
(statearr_26103_26129[(2)] = null);

(statearr_26103_26129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (2))){
var state_26095__$1 = state_26095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26095__$1,(4),from);
} else {
if((state_val_26096 === (11))){
var inst_26084 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
if(cljs.core.truth_(inst_26084)){
var statearr_26104_26130 = state_26095__$1;
(statearr_26104_26130[(1)] = (12));

} else {
var statearr_26105_26131 = state_26095__$1;
(statearr_26105_26131[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (9))){
var state_26095__$1 = state_26095;
var statearr_26106_26132 = state_26095__$1;
(statearr_26106_26132[(2)] = null);

(statearr_26106_26132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (5))){
var state_26095__$1 = state_26095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26107_26133 = state_26095__$1;
(statearr_26107_26133[(1)] = (8));

} else {
var statearr_26108_26134 = state_26095__$1;
(statearr_26108_26134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (14))){
var inst_26089 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26109_26135 = state_26095__$1;
(statearr_26109_26135[(2)] = inst_26089);

(statearr_26109_26135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (10))){
var inst_26081 = (state_26095[(2)]);
var state_26095__$1 = state_26095;
var statearr_26110_26136 = state_26095__$1;
(statearr_26110_26136[(2)] = inst_26081);

(statearr_26110_26136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26096 === (8))){
var inst_26078 = cljs.core.async.close_BANG_.call(null,to);
var state_26095__$1 = state_26095;
var statearr_26111_26137 = state_26095__$1;
(statearr_26111_26137[(2)] = inst_26078);

(statearr_26111_26137[(1)] = (10));


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
});})(c__19588__auto___26123))
;
return ((function (switch__19523__auto__,c__19588__auto___26123){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_26115 = [null,null,null,null,null,null,null,null];
(statearr_26115[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_26115[(1)] = (1));

return statearr_26115;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_26095){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26116){if((e26116 instanceof Object)){
var ex__19527__auto__ = e26116;
var statearr_26117_26138 = state_26095;
(statearr_26117_26138[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26139 = state_26095;
state_26095 = G__26139;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_26095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_26095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___26123))
})();
var state__19590__auto__ = (function (){var statearr_26118 = f__19589__auto__.call(null);
(statearr_26118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___26123);

return statearr_26118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___26123))
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
return (function (p__26323){
var vec__26324 = p__26323;
var v = cljs.core.nth.call(null,vec__26324,(0),null);
var p = cljs.core.nth.call(null,vec__26324,(1),null);
var job = vec__26324;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19588__auto___26506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___26506,res,vec__26324,v,p,job,jobs,results){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___26506,res,vec__26324,v,p,job,jobs,results){
return (function (state_26329){
var state_val_26330 = (state_26329[(1)]);
if((state_val_26330 === (1))){
var state_26329__$1 = state_26329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26329__$1,(2),res,v);
} else {
if((state_val_26330 === (2))){
var inst_26326 = (state_26329[(2)]);
var inst_26327 = cljs.core.async.close_BANG_.call(null,res);
var state_26329__$1 = (function (){var statearr_26331 = state_26329;
(statearr_26331[(7)] = inst_26326);

return statearr_26331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26329__$1,inst_26327);
} else {
return null;
}
}
});})(c__19588__auto___26506,res,vec__26324,v,p,job,jobs,results))
;
return ((function (switch__19523__auto__,c__19588__auto___26506,res,vec__26324,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0 = (function (){
var statearr_26335 = [null,null,null,null,null,null,null,null];
(statearr_26335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__);

(statearr_26335[(1)] = (1));

return statearr_26335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1 = (function (state_26329){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26336){if((e26336 instanceof Object)){
var ex__19527__auto__ = e26336;
var statearr_26337_26507 = state_26329;
(statearr_26337_26507[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26508 = state_26329;
state_26329 = G__26508;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = function(state_26329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1.call(this,state_26329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___26506,res,vec__26324,v,p,job,jobs,results))
})();
var state__19590__auto__ = (function (){var statearr_26338 = f__19589__auto__.call(null);
(statearr_26338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___26506);

return statearr_26338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___26506,res,vec__26324,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26339){
var vec__26340 = p__26339;
var v = cljs.core.nth.call(null,vec__26340,(0),null);
var p = cljs.core.nth.call(null,vec__26340,(1),null);
var job = vec__26340;
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
var n__17411__auto___26509 = n;
var __26510 = (0);
while(true){
if((__26510 < n__17411__auto___26509)){
var G__26341_26511 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26341_26511) {
case "compute":
var c__19588__auto___26513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26510,c__19588__auto___26513,G__26341_26511,n__17411__auto___26509,jobs,results,process,async){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (__26510,c__19588__auto___26513,G__26341_26511,n__17411__auto___26509,jobs,results,process,async){
return (function (state_26354){
var state_val_26355 = (state_26354[(1)]);
if((state_val_26355 === (1))){
var state_26354__$1 = state_26354;
var statearr_26356_26514 = state_26354__$1;
(statearr_26356_26514[(2)] = null);

(statearr_26356_26514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26355 === (2))){
var state_26354__$1 = state_26354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26354__$1,(4),jobs);
} else {
if((state_val_26355 === (3))){
var inst_26352 = (state_26354[(2)]);
var state_26354__$1 = state_26354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26354__$1,inst_26352);
} else {
if((state_val_26355 === (4))){
var inst_26344 = (state_26354[(2)]);
var inst_26345 = process.call(null,inst_26344);
var state_26354__$1 = state_26354;
if(cljs.core.truth_(inst_26345)){
var statearr_26357_26515 = state_26354__$1;
(statearr_26357_26515[(1)] = (5));

} else {
var statearr_26358_26516 = state_26354__$1;
(statearr_26358_26516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26355 === (5))){
var state_26354__$1 = state_26354;
var statearr_26359_26517 = state_26354__$1;
(statearr_26359_26517[(2)] = null);

(statearr_26359_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26355 === (6))){
var state_26354__$1 = state_26354;
var statearr_26360_26518 = state_26354__$1;
(statearr_26360_26518[(2)] = null);

(statearr_26360_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26355 === (7))){
var inst_26350 = (state_26354[(2)]);
var state_26354__$1 = state_26354;
var statearr_26361_26519 = state_26354__$1;
(statearr_26361_26519[(2)] = inst_26350);

(statearr_26361_26519[(1)] = (3));


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
});})(__26510,c__19588__auto___26513,G__26341_26511,n__17411__auto___26509,jobs,results,process,async))
;
return ((function (__26510,switch__19523__auto__,c__19588__auto___26513,G__26341_26511,n__17411__auto___26509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0 = (function (){
var statearr_26365 = [null,null,null,null,null,null,null];
(statearr_26365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__);

(statearr_26365[(1)] = (1));

return statearr_26365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1 = (function (state_26354){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26366){if((e26366 instanceof Object)){
var ex__19527__auto__ = e26366;
var statearr_26367_26520 = state_26354;
(statearr_26367_26520[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26354;
state_26354 = G__26521;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = function(state_26354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1.call(this,state_26354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__;
})()
;})(__26510,switch__19523__auto__,c__19588__auto___26513,G__26341_26511,n__17411__auto___26509,jobs,results,process,async))
})();
var state__19590__auto__ = (function (){var statearr_26368 = f__19589__auto__.call(null);
(statearr_26368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___26513);

return statearr_26368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(__26510,c__19588__auto___26513,G__26341_26511,n__17411__auto___26509,jobs,results,process,async))
);


break;
case "async":
var c__19588__auto___26522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26510,c__19588__auto___26522,G__26341_26511,n__17411__auto___26509,jobs,results,process,async){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (__26510,c__19588__auto___26522,G__26341_26511,n__17411__auto___26509,jobs,results,process,async){
return (function (state_26381){
var state_val_26382 = (state_26381[(1)]);
if((state_val_26382 === (1))){
var state_26381__$1 = state_26381;
var statearr_26383_26523 = state_26381__$1;
(statearr_26383_26523[(2)] = null);

(statearr_26383_26523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (2))){
var state_26381__$1 = state_26381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26381__$1,(4),jobs);
} else {
if((state_val_26382 === (3))){
var inst_26379 = (state_26381[(2)]);
var state_26381__$1 = state_26381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26381__$1,inst_26379);
} else {
if((state_val_26382 === (4))){
var inst_26371 = (state_26381[(2)]);
var inst_26372 = async.call(null,inst_26371);
var state_26381__$1 = state_26381;
if(cljs.core.truth_(inst_26372)){
var statearr_26384_26524 = state_26381__$1;
(statearr_26384_26524[(1)] = (5));

} else {
var statearr_26385_26525 = state_26381__$1;
(statearr_26385_26525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (5))){
var state_26381__$1 = state_26381;
var statearr_26386_26526 = state_26381__$1;
(statearr_26386_26526[(2)] = null);

(statearr_26386_26526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (6))){
var state_26381__$1 = state_26381;
var statearr_26387_26527 = state_26381__$1;
(statearr_26387_26527[(2)] = null);

(statearr_26387_26527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26382 === (7))){
var inst_26377 = (state_26381[(2)]);
var state_26381__$1 = state_26381;
var statearr_26388_26528 = state_26381__$1;
(statearr_26388_26528[(2)] = inst_26377);

(statearr_26388_26528[(1)] = (3));


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
});})(__26510,c__19588__auto___26522,G__26341_26511,n__17411__auto___26509,jobs,results,process,async))
;
return ((function (__26510,switch__19523__auto__,c__19588__auto___26522,G__26341_26511,n__17411__auto___26509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0 = (function (){
var statearr_26392 = [null,null,null,null,null,null,null];
(statearr_26392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__);

(statearr_26392[(1)] = (1));

return statearr_26392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1 = (function (state_26381){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26393){if((e26393 instanceof Object)){
var ex__19527__auto__ = e26393;
var statearr_26394_26529 = state_26381;
(statearr_26394_26529[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26530 = state_26381;
state_26381 = G__26530;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = function(state_26381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1.call(this,state_26381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__;
})()
;})(__26510,switch__19523__auto__,c__19588__auto___26522,G__26341_26511,n__17411__auto___26509,jobs,results,process,async))
})();
var state__19590__auto__ = (function (){var statearr_26395 = f__19589__auto__.call(null);
(statearr_26395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___26522);

return statearr_26395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(__26510,c__19588__auto___26522,G__26341_26511,n__17411__auto___26509,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26531 = (__26510 + (1));
__26510 = G__26531;
continue;
} else {
}
break;
}

var c__19588__auto___26532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___26532,jobs,results,process,async){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___26532,jobs,results,process,async){
return (function (state_26417){
var state_val_26418 = (state_26417[(1)]);
if((state_val_26418 === (1))){
var state_26417__$1 = state_26417;
var statearr_26419_26533 = state_26417__$1;
(statearr_26419_26533[(2)] = null);

(statearr_26419_26533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (2))){
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26417__$1,(4),from);
} else {
if((state_val_26418 === (3))){
var inst_26415 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26417__$1,inst_26415);
} else {
if((state_val_26418 === (4))){
var inst_26398 = (state_26417[(7)]);
var inst_26398__$1 = (state_26417[(2)]);
var inst_26399 = (inst_26398__$1 == null);
var state_26417__$1 = (function (){var statearr_26420 = state_26417;
(statearr_26420[(7)] = inst_26398__$1);

return statearr_26420;
})();
if(cljs.core.truth_(inst_26399)){
var statearr_26421_26534 = state_26417__$1;
(statearr_26421_26534[(1)] = (5));

} else {
var statearr_26422_26535 = state_26417__$1;
(statearr_26422_26535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (5))){
var inst_26401 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26417__$1 = state_26417;
var statearr_26423_26536 = state_26417__$1;
(statearr_26423_26536[(2)] = inst_26401);

(statearr_26423_26536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (6))){
var inst_26398 = (state_26417[(7)]);
var inst_26403 = (state_26417[(8)]);
var inst_26403__$1 = cljs.core.async.chan.call(null,(1));
var inst_26404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26405 = [inst_26398,inst_26403__$1];
var inst_26406 = (new cljs.core.PersistentVector(null,2,(5),inst_26404,inst_26405,null));
var state_26417__$1 = (function (){var statearr_26424 = state_26417;
(statearr_26424[(8)] = inst_26403__$1);

return statearr_26424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26417__$1,(8),jobs,inst_26406);
} else {
if((state_val_26418 === (7))){
var inst_26413 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26425_26537 = state_26417__$1;
(statearr_26425_26537[(2)] = inst_26413);

(statearr_26425_26537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (8))){
var inst_26403 = (state_26417[(8)]);
var inst_26408 = (state_26417[(2)]);
var state_26417__$1 = (function (){var statearr_26426 = state_26417;
(statearr_26426[(9)] = inst_26408);

return statearr_26426;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26417__$1,(9),results,inst_26403);
} else {
if((state_val_26418 === (9))){
var inst_26410 = (state_26417[(2)]);
var state_26417__$1 = (function (){var statearr_26427 = state_26417;
(statearr_26427[(10)] = inst_26410);

return statearr_26427;
})();
var statearr_26428_26538 = state_26417__$1;
(statearr_26428_26538[(2)] = null);

(statearr_26428_26538[(1)] = (2));


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
});})(c__19588__auto___26532,jobs,results,process,async))
;
return ((function (switch__19523__auto__,c__19588__auto___26532,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0 = (function (){
var statearr_26432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__);

(statearr_26432[(1)] = (1));

return statearr_26432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1 = (function (state_26417){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26433){if((e26433 instanceof Object)){
var ex__19527__auto__ = e26433;
var statearr_26434_26539 = state_26417;
(statearr_26434_26539[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26540 = state_26417;
state_26417 = G__26540;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = function(state_26417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1.call(this,state_26417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___26532,jobs,results,process,async))
})();
var state__19590__auto__ = (function (){var statearr_26435 = f__19589__auto__.call(null);
(statearr_26435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___26532);

return statearr_26435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___26532,jobs,results,process,async))
);


var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__,jobs,results,process,async){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__,jobs,results,process,async){
return (function (state_26473){
var state_val_26474 = (state_26473[(1)]);
if((state_val_26474 === (7))){
var inst_26469 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26475_26541 = state_26473__$1;
(statearr_26475_26541[(2)] = inst_26469);

(statearr_26475_26541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (20))){
var state_26473__$1 = state_26473;
var statearr_26476_26542 = state_26473__$1;
(statearr_26476_26542[(2)] = null);

(statearr_26476_26542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (1))){
var state_26473__$1 = state_26473;
var statearr_26477_26543 = state_26473__$1;
(statearr_26477_26543[(2)] = null);

(statearr_26477_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (4))){
var inst_26438 = (state_26473[(7)]);
var inst_26438__$1 = (state_26473[(2)]);
var inst_26439 = (inst_26438__$1 == null);
var state_26473__$1 = (function (){var statearr_26478 = state_26473;
(statearr_26478[(7)] = inst_26438__$1);

return statearr_26478;
})();
if(cljs.core.truth_(inst_26439)){
var statearr_26479_26544 = state_26473__$1;
(statearr_26479_26544[(1)] = (5));

} else {
var statearr_26480_26545 = state_26473__$1;
(statearr_26480_26545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (15))){
var inst_26451 = (state_26473[(8)]);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26473__$1,(18),to,inst_26451);
} else {
if((state_val_26474 === (21))){
var inst_26464 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26481_26546 = state_26473__$1;
(statearr_26481_26546[(2)] = inst_26464);

(statearr_26481_26546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (13))){
var inst_26466 = (state_26473[(2)]);
var state_26473__$1 = (function (){var statearr_26482 = state_26473;
(statearr_26482[(9)] = inst_26466);

return statearr_26482;
})();
var statearr_26483_26547 = state_26473__$1;
(statearr_26483_26547[(2)] = null);

(statearr_26483_26547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (6))){
var inst_26438 = (state_26473[(7)]);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(11),inst_26438);
} else {
if((state_val_26474 === (17))){
var inst_26459 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
if(cljs.core.truth_(inst_26459)){
var statearr_26484_26548 = state_26473__$1;
(statearr_26484_26548[(1)] = (19));

} else {
var statearr_26485_26549 = state_26473__$1;
(statearr_26485_26549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (3))){
var inst_26471 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26473__$1,inst_26471);
} else {
if((state_val_26474 === (12))){
var inst_26448 = (state_26473[(10)]);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(14),inst_26448);
} else {
if((state_val_26474 === (2))){
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(4),results);
} else {
if((state_val_26474 === (19))){
var state_26473__$1 = state_26473;
var statearr_26486_26550 = state_26473__$1;
(statearr_26486_26550[(2)] = null);

(statearr_26486_26550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (11))){
var inst_26448 = (state_26473[(2)]);
var state_26473__$1 = (function (){var statearr_26487 = state_26473;
(statearr_26487[(10)] = inst_26448);

return statearr_26487;
})();
var statearr_26488_26551 = state_26473__$1;
(statearr_26488_26551[(2)] = null);

(statearr_26488_26551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (9))){
var state_26473__$1 = state_26473;
var statearr_26489_26552 = state_26473__$1;
(statearr_26489_26552[(2)] = null);

(statearr_26489_26552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (5))){
var state_26473__$1 = state_26473;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26490_26553 = state_26473__$1;
(statearr_26490_26553[(1)] = (8));

} else {
var statearr_26491_26554 = state_26473__$1;
(statearr_26491_26554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (14))){
var inst_26453 = (state_26473[(11)]);
var inst_26451 = (state_26473[(8)]);
var inst_26451__$1 = (state_26473[(2)]);
var inst_26452 = (inst_26451__$1 == null);
var inst_26453__$1 = cljs.core.not.call(null,inst_26452);
var state_26473__$1 = (function (){var statearr_26492 = state_26473;
(statearr_26492[(11)] = inst_26453__$1);

(statearr_26492[(8)] = inst_26451__$1);

return statearr_26492;
})();
if(inst_26453__$1){
var statearr_26493_26555 = state_26473__$1;
(statearr_26493_26555[(1)] = (15));

} else {
var statearr_26494_26556 = state_26473__$1;
(statearr_26494_26556[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (16))){
var inst_26453 = (state_26473[(11)]);
var state_26473__$1 = state_26473;
var statearr_26495_26557 = state_26473__$1;
(statearr_26495_26557[(2)] = inst_26453);

(statearr_26495_26557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (10))){
var inst_26445 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26496_26558 = state_26473__$1;
(statearr_26496_26558[(2)] = inst_26445);

(statearr_26496_26558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (18))){
var inst_26456 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26497_26559 = state_26473__$1;
(statearr_26497_26559[(2)] = inst_26456);

(statearr_26497_26559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (8))){
var inst_26442 = cljs.core.async.close_BANG_.call(null,to);
var state_26473__$1 = state_26473;
var statearr_26498_26560 = state_26473__$1;
(statearr_26498_26560[(2)] = inst_26442);

(statearr_26498_26560[(1)] = (10));


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
});})(c__19588__auto__,jobs,results,process,async))
;
return ((function (switch__19523__auto__,c__19588__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0 = (function (){
var statearr_26502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__);

(statearr_26502[(1)] = (1));

return statearr_26502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1 = (function (state_26473){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26503){if((e26503 instanceof Object)){
var ex__19527__auto__ = e26503;
var statearr_26504_26561 = state_26473;
(statearr_26504_26561[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26562 = state_26473;
state_26473 = G__26562;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__ = function(state_26473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1.call(this,state_26473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__,jobs,results,process,async))
})();
var state__19590__auto__ = (function (){var statearr_26505 = f__19589__auto__.call(null);
(statearr_26505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_26505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__,jobs,results,process,async))
);

return c__19588__auto__;
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
var args26563 = [];
var len__17566__auto___26566 = arguments.length;
var i__17567__auto___26567 = (0);
while(true){
if((i__17567__auto___26567 < len__17566__auto___26566)){
args26563.push((arguments[i__17567__auto___26567]));

var G__26568 = (i__17567__auto___26567 + (1));
i__17567__auto___26567 = G__26568;
continue;
} else {
}
break;
}

var G__26565 = args26563.length;
switch (G__26565) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26563.length)].join('')));

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
var args26570 = [];
var len__17566__auto___26573 = arguments.length;
var i__17567__auto___26574 = (0);
while(true){
if((i__17567__auto___26574 < len__17566__auto___26573)){
args26570.push((arguments[i__17567__auto___26574]));

var G__26575 = (i__17567__auto___26574 + (1));
i__17567__auto___26574 = G__26575;
continue;
} else {
}
break;
}

var G__26572 = args26570.length;
switch (G__26572) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26570.length)].join('')));

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
var args26577 = [];
var len__17566__auto___26630 = arguments.length;
var i__17567__auto___26631 = (0);
while(true){
if((i__17567__auto___26631 < len__17566__auto___26630)){
args26577.push((arguments[i__17567__auto___26631]));

var G__26632 = (i__17567__auto___26631 + (1));
i__17567__auto___26631 = G__26632;
continue;
} else {
}
break;
}

var G__26579 = args26577.length;
switch (G__26579) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26577.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19588__auto___26634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___26634,tc,fc){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___26634,tc,fc){
return (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (7))){
var inst_26601 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26607_26635 = state_26605__$1;
(statearr_26607_26635[(2)] = inst_26601);

(statearr_26607_26635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (1))){
var state_26605__$1 = state_26605;
var statearr_26608_26636 = state_26605__$1;
(statearr_26608_26636[(2)] = null);

(statearr_26608_26636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (4))){
var inst_26582 = (state_26605[(7)]);
var inst_26582__$1 = (state_26605[(2)]);
var inst_26583 = (inst_26582__$1 == null);
var state_26605__$1 = (function (){var statearr_26609 = state_26605;
(statearr_26609[(7)] = inst_26582__$1);

return statearr_26609;
})();
if(cljs.core.truth_(inst_26583)){
var statearr_26610_26637 = state_26605__$1;
(statearr_26610_26637[(1)] = (5));

} else {
var statearr_26611_26638 = state_26605__$1;
(statearr_26611_26638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (13))){
var state_26605__$1 = state_26605;
var statearr_26612_26639 = state_26605__$1;
(statearr_26612_26639[(2)] = null);

(statearr_26612_26639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (6))){
var inst_26582 = (state_26605[(7)]);
var inst_26588 = p.call(null,inst_26582);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26588)){
var statearr_26613_26640 = state_26605__$1;
(statearr_26613_26640[(1)] = (9));

} else {
var statearr_26614_26641 = state_26605__$1;
(statearr_26614_26641[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (3))){
var inst_26603 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26605__$1,inst_26603);
} else {
if((state_val_26606 === (12))){
var state_26605__$1 = state_26605;
var statearr_26615_26642 = state_26605__$1;
(statearr_26615_26642[(2)] = null);

(statearr_26615_26642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (2))){
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(4),ch);
} else {
if((state_val_26606 === (11))){
var inst_26582 = (state_26605[(7)]);
var inst_26592 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26605__$1,(8),inst_26592,inst_26582);
} else {
if((state_val_26606 === (9))){
var state_26605__$1 = state_26605;
var statearr_26616_26643 = state_26605__$1;
(statearr_26616_26643[(2)] = tc);

(statearr_26616_26643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (5))){
var inst_26585 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26586 = cljs.core.async.close_BANG_.call(null,fc);
var state_26605__$1 = (function (){var statearr_26617 = state_26605;
(statearr_26617[(8)] = inst_26585);

return statearr_26617;
})();
var statearr_26618_26644 = state_26605__$1;
(statearr_26618_26644[(2)] = inst_26586);

(statearr_26618_26644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (14))){
var inst_26599 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26619_26645 = state_26605__$1;
(statearr_26619_26645[(2)] = inst_26599);

(statearr_26619_26645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (10))){
var state_26605__$1 = state_26605;
var statearr_26620_26646 = state_26605__$1;
(statearr_26620_26646[(2)] = fc);

(statearr_26620_26646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (8))){
var inst_26594 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
if(cljs.core.truth_(inst_26594)){
var statearr_26621_26647 = state_26605__$1;
(statearr_26621_26647[(1)] = (12));

} else {
var statearr_26622_26648 = state_26605__$1;
(statearr_26622_26648[(1)] = (13));

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
});})(c__19588__auto___26634,tc,fc))
;
return ((function (switch__19523__auto__,c__19588__auto___26634,tc,fc){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_26626 = [null,null,null,null,null,null,null,null,null];
(statearr_26626[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_26626[(1)] = (1));

return statearr_26626;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_26605){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object)){
var ex__19527__auto__ = e26627;
var statearr_26628_26649 = state_26605;
(statearr_26628_26649[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26650 = state_26605;
state_26605 = G__26650;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___26634,tc,fc))
})();
var state__19590__auto__ = (function (){var statearr_26629 = f__19589__auto__.call(null);
(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___26634);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___26634,tc,fc))
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
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_26697){
var state_val_26698 = (state_26697[(1)]);
if((state_val_26698 === (1))){
var inst_26683 = init;
var state_26697__$1 = (function (){var statearr_26699 = state_26697;
(statearr_26699[(7)] = inst_26683);

return statearr_26699;
})();
var statearr_26700_26715 = state_26697__$1;
(statearr_26700_26715[(2)] = null);

(statearr_26700_26715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (2))){
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26697__$1,(4),ch);
} else {
if((state_val_26698 === (3))){
var inst_26695 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26697__$1,inst_26695);
} else {
if((state_val_26698 === (4))){
var inst_26686 = (state_26697[(8)]);
var inst_26686__$1 = (state_26697[(2)]);
var inst_26687 = (inst_26686__$1 == null);
var state_26697__$1 = (function (){var statearr_26701 = state_26697;
(statearr_26701[(8)] = inst_26686__$1);

return statearr_26701;
})();
if(cljs.core.truth_(inst_26687)){
var statearr_26702_26716 = state_26697__$1;
(statearr_26702_26716[(1)] = (5));

} else {
var statearr_26703_26717 = state_26697__$1;
(statearr_26703_26717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (5))){
var inst_26683 = (state_26697[(7)]);
var state_26697__$1 = state_26697;
var statearr_26704_26718 = state_26697__$1;
(statearr_26704_26718[(2)] = inst_26683);

(statearr_26704_26718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (6))){
var inst_26686 = (state_26697[(8)]);
var inst_26683 = (state_26697[(7)]);
var inst_26690 = f.call(null,inst_26683,inst_26686);
var inst_26683__$1 = inst_26690;
var state_26697__$1 = (function (){var statearr_26705 = state_26697;
(statearr_26705[(7)] = inst_26683__$1);

return statearr_26705;
})();
var statearr_26706_26719 = state_26697__$1;
(statearr_26706_26719[(2)] = null);

(statearr_26706_26719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (7))){
var inst_26693 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26707_26720 = state_26697__$1;
(statearr_26707_26720[(2)] = inst_26693);

(statearr_26707_26720[(1)] = (3));


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
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19524__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19524__auto____0 = (function (){
var statearr_26711 = [null,null,null,null,null,null,null,null,null];
(statearr_26711[(0)] = cljs$core$async$reduce_$_state_machine__19524__auto__);

(statearr_26711[(1)] = (1));

return statearr_26711;
});
var cljs$core$async$reduce_$_state_machine__19524__auto____1 = (function (state_26697){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26712){if((e26712 instanceof Object)){
var ex__19527__auto__ = e26712;
var statearr_26713_26721 = state_26697;
(statearr_26713_26721[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26722 = state_26697;
state_26697 = G__26722;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19524__auto__ = function(state_26697){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19524__auto____1.call(this,state_26697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19524__auto____0;
cljs$core$async$reduce_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19524__auto____1;
return cljs$core$async$reduce_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_26714 = f__19589__auto__.call(null);
(statearr_26714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
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
var args26723 = [];
var len__17566__auto___26775 = arguments.length;
var i__17567__auto___26776 = (0);
while(true){
if((i__17567__auto___26776 < len__17566__auto___26775)){
args26723.push((arguments[i__17567__auto___26776]));

var G__26777 = (i__17567__auto___26776 + (1));
i__17567__auto___26776 = G__26777;
continue;
} else {
}
break;
}

var G__26725 = args26723.length;
switch (G__26725) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26723.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_26750){
var state_val_26751 = (state_26750[(1)]);
if((state_val_26751 === (7))){
var inst_26732 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26752_26779 = state_26750__$1;
(statearr_26752_26779[(2)] = inst_26732);

(statearr_26752_26779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (1))){
var inst_26726 = cljs.core.seq.call(null,coll);
var inst_26727 = inst_26726;
var state_26750__$1 = (function (){var statearr_26753 = state_26750;
(statearr_26753[(7)] = inst_26727);

return statearr_26753;
})();
var statearr_26754_26780 = state_26750__$1;
(statearr_26754_26780[(2)] = null);

(statearr_26754_26780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (4))){
var inst_26727 = (state_26750[(7)]);
var inst_26730 = cljs.core.first.call(null,inst_26727);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26750__$1,(7),ch,inst_26730);
} else {
if((state_val_26751 === (13))){
var inst_26744 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26755_26781 = state_26750__$1;
(statearr_26755_26781[(2)] = inst_26744);

(statearr_26755_26781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (6))){
var inst_26735 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26735)){
var statearr_26756_26782 = state_26750__$1;
(statearr_26756_26782[(1)] = (8));

} else {
var statearr_26757_26783 = state_26750__$1;
(statearr_26757_26783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (3))){
var inst_26748 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26750__$1,inst_26748);
} else {
if((state_val_26751 === (12))){
var state_26750__$1 = state_26750;
var statearr_26758_26784 = state_26750__$1;
(statearr_26758_26784[(2)] = null);

(statearr_26758_26784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (2))){
var inst_26727 = (state_26750[(7)]);
var state_26750__$1 = state_26750;
if(cljs.core.truth_(inst_26727)){
var statearr_26759_26785 = state_26750__$1;
(statearr_26759_26785[(1)] = (4));

} else {
var statearr_26760_26786 = state_26750__$1;
(statearr_26760_26786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (11))){
var inst_26741 = cljs.core.async.close_BANG_.call(null,ch);
var state_26750__$1 = state_26750;
var statearr_26761_26787 = state_26750__$1;
(statearr_26761_26787[(2)] = inst_26741);

(statearr_26761_26787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (9))){
var state_26750__$1 = state_26750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26762_26788 = state_26750__$1;
(statearr_26762_26788[(1)] = (11));

} else {
var statearr_26763_26789 = state_26750__$1;
(statearr_26763_26789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (5))){
var inst_26727 = (state_26750[(7)]);
var state_26750__$1 = state_26750;
var statearr_26764_26790 = state_26750__$1;
(statearr_26764_26790[(2)] = inst_26727);

(statearr_26764_26790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (10))){
var inst_26746 = (state_26750[(2)]);
var state_26750__$1 = state_26750;
var statearr_26765_26791 = state_26750__$1;
(statearr_26765_26791[(2)] = inst_26746);

(statearr_26765_26791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26751 === (8))){
var inst_26727 = (state_26750[(7)]);
var inst_26737 = cljs.core.next.call(null,inst_26727);
var inst_26727__$1 = inst_26737;
var state_26750__$1 = (function (){var statearr_26766 = state_26750;
(statearr_26766[(7)] = inst_26727__$1);

return statearr_26766;
})();
var statearr_26767_26792 = state_26750__$1;
(statearr_26767_26792[(2)] = null);

(statearr_26767_26792[(1)] = (2));


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
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_26771 = [null,null,null,null,null,null,null,null];
(statearr_26771[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_26771[(1)] = (1));

return statearr_26771;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_26750){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_26750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e26772){if((e26772 instanceof Object)){
var ex__19527__auto__ = e26772;
var statearr_26773_26793 = state_26750;
(statearr_26773_26793[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26794 = state_26750;
state_26750 = G__26794;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_26750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_26750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_26774 = f__19589__auto__.call(null);
(statearr_26774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_26774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
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
var x__17163__auto__ = (((_ == null))?null:_);
var m__17164__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,_);
} else {
var m__17164__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,_);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17164__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m);
} else {
var m__17164__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27016 = (function (mult,ch,cs,meta27017){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27017 = meta27017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27018,meta27017__$1){
var self__ = this;
var _27018__$1 = this;
return (new cljs.core.async.t_cljs$core$async27016(self__.mult,self__.ch,self__.cs,meta27017__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27018){
var self__ = this;
var _27018__$1 = this;
return self__.meta27017;
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27017","meta27017",-1769366896,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27016";

cljs.core.async.t_cljs$core$async27016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async27016");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27016 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27016(mult__$1,ch__$1,cs__$1,meta27017){
return (new cljs.core.async.t_cljs$core$async27016(mult__$1,ch__$1,cs__$1,meta27017));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27016(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19588__auto___27237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___27237,cs,m,dchan,dctr,done){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___27237,cs,m,dchan,dctr,done){
return (function (state_27149){
var state_val_27150 = (state_27149[(1)]);
if((state_val_27150 === (7))){
var inst_27145 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27151_27238 = state_27149__$1;
(statearr_27151_27238[(2)] = inst_27145);

(statearr_27151_27238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (20))){
var inst_27050 = (state_27149[(7)]);
var inst_27060 = cljs.core.first.call(null,inst_27050);
var inst_27061 = cljs.core.nth.call(null,inst_27060,(0),null);
var inst_27062 = cljs.core.nth.call(null,inst_27060,(1),null);
var state_27149__$1 = (function (){var statearr_27152 = state_27149;
(statearr_27152[(8)] = inst_27061);

return statearr_27152;
})();
if(cljs.core.truth_(inst_27062)){
var statearr_27153_27239 = state_27149__$1;
(statearr_27153_27239[(1)] = (22));

} else {
var statearr_27154_27240 = state_27149__$1;
(statearr_27154_27240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (27))){
var inst_27092 = (state_27149[(9)]);
var inst_27021 = (state_27149[(10)]);
var inst_27097 = (state_27149[(11)]);
var inst_27090 = (state_27149[(12)]);
var inst_27097__$1 = cljs.core._nth.call(null,inst_27090,inst_27092);
var inst_27098 = cljs.core.async.put_BANG_.call(null,inst_27097__$1,inst_27021,done);
var state_27149__$1 = (function (){var statearr_27155 = state_27149;
(statearr_27155[(11)] = inst_27097__$1);

return statearr_27155;
})();
if(cljs.core.truth_(inst_27098)){
var statearr_27156_27241 = state_27149__$1;
(statearr_27156_27241[(1)] = (30));

} else {
var statearr_27157_27242 = state_27149__$1;
(statearr_27157_27242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (1))){
var state_27149__$1 = state_27149;
var statearr_27158_27243 = state_27149__$1;
(statearr_27158_27243[(2)] = null);

(statearr_27158_27243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (24))){
var inst_27050 = (state_27149[(7)]);
var inst_27067 = (state_27149[(2)]);
var inst_27068 = cljs.core.next.call(null,inst_27050);
var inst_27030 = inst_27068;
var inst_27031 = null;
var inst_27032 = (0);
var inst_27033 = (0);
var state_27149__$1 = (function (){var statearr_27159 = state_27149;
(statearr_27159[(13)] = inst_27032);

(statearr_27159[(14)] = inst_27030);

(statearr_27159[(15)] = inst_27031);

(statearr_27159[(16)] = inst_27067);

(statearr_27159[(17)] = inst_27033);

return statearr_27159;
})();
var statearr_27160_27244 = state_27149__$1;
(statearr_27160_27244[(2)] = null);

(statearr_27160_27244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (39))){
var state_27149__$1 = state_27149;
var statearr_27164_27245 = state_27149__$1;
(statearr_27164_27245[(2)] = null);

(statearr_27164_27245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (4))){
var inst_27021 = (state_27149[(10)]);
var inst_27021__$1 = (state_27149[(2)]);
var inst_27022 = (inst_27021__$1 == null);
var state_27149__$1 = (function (){var statearr_27165 = state_27149;
(statearr_27165[(10)] = inst_27021__$1);

return statearr_27165;
})();
if(cljs.core.truth_(inst_27022)){
var statearr_27166_27246 = state_27149__$1;
(statearr_27166_27246[(1)] = (5));

} else {
var statearr_27167_27247 = state_27149__$1;
(statearr_27167_27247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (15))){
var inst_27032 = (state_27149[(13)]);
var inst_27030 = (state_27149[(14)]);
var inst_27031 = (state_27149[(15)]);
var inst_27033 = (state_27149[(17)]);
var inst_27046 = (state_27149[(2)]);
var inst_27047 = (inst_27033 + (1));
var tmp27161 = inst_27032;
var tmp27162 = inst_27030;
var tmp27163 = inst_27031;
var inst_27030__$1 = tmp27162;
var inst_27031__$1 = tmp27163;
var inst_27032__$1 = tmp27161;
var inst_27033__$1 = inst_27047;
var state_27149__$1 = (function (){var statearr_27168 = state_27149;
(statearr_27168[(13)] = inst_27032__$1);

(statearr_27168[(14)] = inst_27030__$1);

(statearr_27168[(15)] = inst_27031__$1);

(statearr_27168[(18)] = inst_27046);

(statearr_27168[(17)] = inst_27033__$1);

return statearr_27168;
})();
var statearr_27169_27248 = state_27149__$1;
(statearr_27169_27248[(2)] = null);

(statearr_27169_27248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (21))){
var inst_27071 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27173_27249 = state_27149__$1;
(statearr_27173_27249[(2)] = inst_27071);

(statearr_27173_27249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (31))){
var inst_27097 = (state_27149[(11)]);
var inst_27101 = done.call(null,null);
var inst_27102 = cljs.core.async.untap_STAR_.call(null,m,inst_27097);
var state_27149__$1 = (function (){var statearr_27174 = state_27149;
(statearr_27174[(19)] = inst_27101);

return statearr_27174;
})();
var statearr_27175_27250 = state_27149__$1;
(statearr_27175_27250[(2)] = inst_27102);

(statearr_27175_27250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (32))){
var inst_27092 = (state_27149[(9)]);
var inst_27090 = (state_27149[(12)]);
var inst_27089 = (state_27149[(20)]);
var inst_27091 = (state_27149[(21)]);
var inst_27104 = (state_27149[(2)]);
var inst_27105 = (inst_27092 + (1));
var tmp27170 = inst_27090;
var tmp27171 = inst_27089;
var tmp27172 = inst_27091;
var inst_27089__$1 = tmp27171;
var inst_27090__$1 = tmp27170;
var inst_27091__$1 = tmp27172;
var inst_27092__$1 = inst_27105;
var state_27149__$1 = (function (){var statearr_27176 = state_27149;
(statearr_27176[(9)] = inst_27092__$1);

(statearr_27176[(22)] = inst_27104);

(statearr_27176[(12)] = inst_27090__$1);

(statearr_27176[(20)] = inst_27089__$1);

(statearr_27176[(21)] = inst_27091__$1);

return statearr_27176;
})();
var statearr_27177_27251 = state_27149__$1;
(statearr_27177_27251[(2)] = null);

(statearr_27177_27251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (40))){
var inst_27117 = (state_27149[(23)]);
var inst_27121 = done.call(null,null);
var inst_27122 = cljs.core.async.untap_STAR_.call(null,m,inst_27117);
var state_27149__$1 = (function (){var statearr_27178 = state_27149;
(statearr_27178[(24)] = inst_27121);

return statearr_27178;
})();
var statearr_27179_27252 = state_27149__$1;
(statearr_27179_27252[(2)] = inst_27122);

(statearr_27179_27252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (33))){
var inst_27108 = (state_27149[(25)]);
var inst_27110 = cljs.core.chunked_seq_QMARK_.call(null,inst_27108);
var state_27149__$1 = state_27149;
if(inst_27110){
var statearr_27180_27253 = state_27149__$1;
(statearr_27180_27253[(1)] = (36));

} else {
var statearr_27181_27254 = state_27149__$1;
(statearr_27181_27254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (13))){
var inst_27040 = (state_27149[(26)]);
var inst_27043 = cljs.core.async.close_BANG_.call(null,inst_27040);
var state_27149__$1 = state_27149;
var statearr_27182_27255 = state_27149__$1;
(statearr_27182_27255[(2)] = inst_27043);

(statearr_27182_27255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (22))){
var inst_27061 = (state_27149[(8)]);
var inst_27064 = cljs.core.async.close_BANG_.call(null,inst_27061);
var state_27149__$1 = state_27149;
var statearr_27183_27256 = state_27149__$1;
(statearr_27183_27256[(2)] = inst_27064);

(statearr_27183_27256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (36))){
var inst_27108 = (state_27149[(25)]);
var inst_27112 = cljs.core.chunk_first.call(null,inst_27108);
var inst_27113 = cljs.core.chunk_rest.call(null,inst_27108);
var inst_27114 = cljs.core.count.call(null,inst_27112);
var inst_27089 = inst_27113;
var inst_27090 = inst_27112;
var inst_27091 = inst_27114;
var inst_27092 = (0);
var state_27149__$1 = (function (){var statearr_27184 = state_27149;
(statearr_27184[(9)] = inst_27092);

(statearr_27184[(12)] = inst_27090);

(statearr_27184[(20)] = inst_27089);

(statearr_27184[(21)] = inst_27091);

return statearr_27184;
})();
var statearr_27185_27257 = state_27149__$1;
(statearr_27185_27257[(2)] = null);

(statearr_27185_27257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (41))){
var inst_27108 = (state_27149[(25)]);
var inst_27124 = (state_27149[(2)]);
var inst_27125 = cljs.core.next.call(null,inst_27108);
var inst_27089 = inst_27125;
var inst_27090 = null;
var inst_27091 = (0);
var inst_27092 = (0);
var state_27149__$1 = (function (){var statearr_27186 = state_27149;
(statearr_27186[(27)] = inst_27124);

(statearr_27186[(9)] = inst_27092);

(statearr_27186[(12)] = inst_27090);

(statearr_27186[(20)] = inst_27089);

(statearr_27186[(21)] = inst_27091);

return statearr_27186;
})();
var statearr_27187_27258 = state_27149__$1;
(statearr_27187_27258[(2)] = null);

(statearr_27187_27258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (43))){
var state_27149__$1 = state_27149;
var statearr_27188_27259 = state_27149__$1;
(statearr_27188_27259[(2)] = null);

(statearr_27188_27259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (29))){
var inst_27133 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27189_27260 = state_27149__$1;
(statearr_27189_27260[(2)] = inst_27133);

(statearr_27189_27260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (44))){
var inst_27142 = (state_27149[(2)]);
var state_27149__$1 = (function (){var statearr_27190 = state_27149;
(statearr_27190[(28)] = inst_27142);

return statearr_27190;
})();
var statearr_27191_27261 = state_27149__$1;
(statearr_27191_27261[(2)] = null);

(statearr_27191_27261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (6))){
var inst_27081 = (state_27149[(29)]);
var inst_27080 = cljs.core.deref.call(null,cs);
var inst_27081__$1 = cljs.core.keys.call(null,inst_27080);
var inst_27082 = cljs.core.count.call(null,inst_27081__$1);
var inst_27083 = cljs.core.reset_BANG_.call(null,dctr,inst_27082);
var inst_27088 = cljs.core.seq.call(null,inst_27081__$1);
var inst_27089 = inst_27088;
var inst_27090 = null;
var inst_27091 = (0);
var inst_27092 = (0);
var state_27149__$1 = (function (){var statearr_27192 = state_27149;
(statearr_27192[(30)] = inst_27083);

(statearr_27192[(9)] = inst_27092);

(statearr_27192[(29)] = inst_27081__$1);

(statearr_27192[(12)] = inst_27090);

(statearr_27192[(20)] = inst_27089);

(statearr_27192[(21)] = inst_27091);

return statearr_27192;
})();
var statearr_27193_27262 = state_27149__$1;
(statearr_27193_27262[(2)] = null);

(statearr_27193_27262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (28))){
var inst_27108 = (state_27149[(25)]);
var inst_27089 = (state_27149[(20)]);
var inst_27108__$1 = cljs.core.seq.call(null,inst_27089);
var state_27149__$1 = (function (){var statearr_27194 = state_27149;
(statearr_27194[(25)] = inst_27108__$1);

return statearr_27194;
})();
if(inst_27108__$1){
var statearr_27195_27263 = state_27149__$1;
(statearr_27195_27263[(1)] = (33));

} else {
var statearr_27196_27264 = state_27149__$1;
(statearr_27196_27264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (25))){
var inst_27092 = (state_27149[(9)]);
var inst_27091 = (state_27149[(21)]);
var inst_27094 = (inst_27092 < inst_27091);
var inst_27095 = inst_27094;
var state_27149__$1 = state_27149;
if(cljs.core.truth_(inst_27095)){
var statearr_27197_27265 = state_27149__$1;
(statearr_27197_27265[(1)] = (27));

} else {
var statearr_27198_27266 = state_27149__$1;
(statearr_27198_27266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (34))){
var state_27149__$1 = state_27149;
var statearr_27199_27267 = state_27149__$1;
(statearr_27199_27267[(2)] = null);

(statearr_27199_27267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (17))){
var state_27149__$1 = state_27149;
var statearr_27200_27268 = state_27149__$1;
(statearr_27200_27268[(2)] = null);

(statearr_27200_27268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (3))){
var inst_27147 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27149__$1,inst_27147);
} else {
if((state_val_27150 === (12))){
var inst_27076 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27201_27269 = state_27149__$1;
(statearr_27201_27269[(2)] = inst_27076);

(statearr_27201_27269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (2))){
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27149__$1,(4),ch);
} else {
if((state_val_27150 === (23))){
var state_27149__$1 = state_27149;
var statearr_27202_27270 = state_27149__$1;
(statearr_27202_27270[(2)] = null);

(statearr_27202_27270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (35))){
var inst_27131 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27203_27271 = state_27149__$1;
(statearr_27203_27271[(2)] = inst_27131);

(statearr_27203_27271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (19))){
var inst_27050 = (state_27149[(7)]);
var inst_27054 = cljs.core.chunk_first.call(null,inst_27050);
var inst_27055 = cljs.core.chunk_rest.call(null,inst_27050);
var inst_27056 = cljs.core.count.call(null,inst_27054);
var inst_27030 = inst_27055;
var inst_27031 = inst_27054;
var inst_27032 = inst_27056;
var inst_27033 = (0);
var state_27149__$1 = (function (){var statearr_27204 = state_27149;
(statearr_27204[(13)] = inst_27032);

(statearr_27204[(14)] = inst_27030);

(statearr_27204[(15)] = inst_27031);

(statearr_27204[(17)] = inst_27033);

return statearr_27204;
})();
var statearr_27205_27272 = state_27149__$1;
(statearr_27205_27272[(2)] = null);

(statearr_27205_27272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (11))){
var inst_27050 = (state_27149[(7)]);
var inst_27030 = (state_27149[(14)]);
var inst_27050__$1 = cljs.core.seq.call(null,inst_27030);
var state_27149__$1 = (function (){var statearr_27206 = state_27149;
(statearr_27206[(7)] = inst_27050__$1);

return statearr_27206;
})();
if(inst_27050__$1){
var statearr_27207_27273 = state_27149__$1;
(statearr_27207_27273[(1)] = (16));

} else {
var statearr_27208_27274 = state_27149__$1;
(statearr_27208_27274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (9))){
var inst_27078 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27209_27275 = state_27149__$1;
(statearr_27209_27275[(2)] = inst_27078);

(statearr_27209_27275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (5))){
var inst_27028 = cljs.core.deref.call(null,cs);
var inst_27029 = cljs.core.seq.call(null,inst_27028);
var inst_27030 = inst_27029;
var inst_27031 = null;
var inst_27032 = (0);
var inst_27033 = (0);
var state_27149__$1 = (function (){var statearr_27210 = state_27149;
(statearr_27210[(13)] = inst_27032);

(statearr_27210[(14)] = inst_27030);

(statearr_27210[(15)] = inst_27031);

(statearr_27210[(17)] = inst_27033);

return statearr_27210;
})();
var statearr_27211_27276 = state_27149__$1;
(statearr_27211_27276[(2)] = null);

(statearr_27211_27276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (14))){
var state_27149__$1 = state_27149;
var statearr_27212_27277 = state_27149__$1;
(statearr_27212_27277[(2)] = null);

(statearr_27212_27277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (45))){
var inst_27139 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27213_27278 = state_27149__$1;
(statearr_27213_27278[(2)] = inst_27139);

(statearr_27213_27278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (26))){
var inst_27081 = (state_27149[(29)]);
var inst_27135 = (state_27149[(2)]);
var inst_27136 = cljs.core.seq.call(null,inst_27081);
var state_27149__$1 = (function (){var statearr_27214 = state_27149;
(statearr_27214[(31)] = inst_27135);

return statearr_27214;
})();
if(inst_27136){
var statearr_27215_27279 = state_27149__$1;
(statearr_27215_27279[(1)] = (42));

} else {
var statearr_27216_27280 = state_27149__$1;
(statearr_27216_27280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (16))){
var inst_27050 = (state_27149[(7)]);
var inst_27052 = cljs.core.chunked_seq_QMARK_.call(null,inst_27050);
var state_27149__$1 = state_27149;
if(inst_27052){
var statearr_27217_27281 = state_27149__$1;
(statearr_27217_27281[(1)] = (19));

} else {
var statearr_27218_27282 = state_27149__$1;
(statearr_27218_27282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (38))){
var inst_27128 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27219_27283 = state_27149__$1;
(statearr_27219_27283[(2)] = inst_27128);

(statearr_27219_27283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (30))){
var state_27149__$1 = state_27149;
var statearr_27220_27284 = state_27149__$1;
(statearr_27220_27284[(2)] = null);

(statearr_27220_27284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (10))){
var inst_27031 = (state_27149[(15)]);
var inst_27033 = (state_27149[(17)]);
var inst_27039 = cljs.core._nth.call(null,inst_27031,inst_27033);
var inst_27040 = cljs.core.nth.call(null,inst_27039,(0),null);
var inst_27041 = cljs.core.nth.call(null,inst_27039,(1),null);
var state_27149__$1 = (function (){var statearr_27221 = state_27149;
(statearr_27221[(26)] = inst_27040);

return statearr_27221;
})();
if(cljs.core.truth_(inst_27041)){
var statearr_27222_27285 = state_27149__$1;
(statearr_27222_27285[(1)] = (13));

} else {
var statearr_27223_27286 = state_27149__$1;
(statearr_27223_27286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (18))){
var inst_27074 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27224_27287 = state_27149__$1;
(statearr_27224_27287[(2)] = inst_27074);

(statearr_27224_27287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (42))){
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27149__$1,(45),dchan);
} else {
if((state_val_27150 === (37))){
var inst_27108 = (state_27149[(25)]);
var inst_27021 = (state_27149[(10)]);
var inst_27117 = (state_27149[(23)]);
var inst_27117__$1 = cljs.core.first.call(null,inst_27108);
var inst_27118 = cljs.core.async.put_BANG_.call(null,inst_27117__$1,inst_27021,done);
var state_27149__$1 = (function (){var statearr_27225 = state_27149;
(statearr_27225[(23)] = inst_27117__$1);

return statearr_27225;
})();
if(cljs.core.truth_(inst_27118)){
var statearr_27226_27288 = state_27149__$1;
(statearr_27226_27288[(1)] = (39));

} else {
var statearr_27227_27289 = state_27149__$1;
(statearr_27227_27289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27150 === (8))){
var inst_27032 = (state_27149[(13)]);
var inst_27033 = (state_27149[(17)]);
var inst_27035 = (inst_27033 < inst_27032);
var inst_27036 = inst_27035;
var state_27149__$1 = state_27149;
if(cljs.core.truth_(inst_27036)){
var statearr_27228_27290 = state_27149__$1;
(statearr_27228_27290[(1)] = (10));

} else {
var statearr_27229_27291 = state_27149__$1;
(statearr_27229_27291[(1)] = (11));

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
});})(c__19588__auto___27237,cs,m,dchan,dctr,done))
;
return ((function (switch__19523__auto__,c__19588__auto___27237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19524__auto__ = null;
var cljs$core$async$mult_$_state_machine__19524__auto____0 = (function (){
var statearr_27233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27233[(0)] = cljs$core$async$mult_$_state_machine__19524__auto__);

(statearr_27233[(1)] = (1));

return statearr_27233;
});
var cljs$core$async$mult_$_state_machine__19524__auto____1 = (function (state_27149){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_27149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e27234){if((e27234 instanceof Object)){
var ex__19527__auto__ = e27234;
var statearr_27235_27292 = state_27149;
(statearr_27235_27292[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27293 = state_27149;
state_27149 = G__27293;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19524__auto__ = function(state_27149){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19524__auto____1.call(this,state_27149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19524__auto____0;
cljs$core$async$mult_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19524__auto____1;
return cljs$core$async$mult_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___27237,cs,m,dchan,dctr,done))
})();
var state__19590__auto__ = (function (){var statearr_27236 = f__19589__auto__.call(null);
(statearr_27236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___27237);

return statearr_27236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___27237,cs,m,dchan,dctr,done))
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
var args27294 = [];
var len__17566__auto___27297 = arguments.length;
var i__17567__auto___27298 = (0);
while(true){
if((i__17567__auto___27298 < len__17566__auto___27297)){
args27294.push((arguments[i__17567__auto___27298]));

var G__27299 = (i__17567__auto___27298 + (1));
i__17567__auto___27298 = G__27299;
continue;
} else {
}
break;
}

var G__27296 = args27294.length;
switch (G__27296) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27294.length)].join('')));

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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m);
} else {
var m__17164__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,state_map);
} else {
var m__17164__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,state_map);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,mode);
} else {
var m__17164__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17573__auto__ = [];
var len__17566__auto___27311 = arguments.length;
var i__17567__auto___27312 = (0);
while(true){
if((i__17567__auto___27312 < len__17566__auto___27311)){
args__17573__auto__.push((arguments[i__17567__auto___27312]));

var G__27313 = (i__17567__auto___27312 + (1));
i__17567__auto___27312 = G__27313;
continue;
} else {
}
break;
}

var argseq__17574__auto__ = ((((3) < args__17573__auto__.length))?(new cljs.core.IndexedSeq(args__17573__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17574__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27305){
var map__27306 = p__27305;
var map__27306__$1 = ((((!((map__27306 == null)))?((((map__27306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);
var opts = map__27306__$1;
var statearr_27308_27314 = state;
(statearr_27308_27314[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27306,map__27306__$1,opts){
return (function (val){
var statearr_27309_27315 = state;
(statearr_27309_27315[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27306,map__27306__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27310_27316 = state;
(statearr_27310_27316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27301){
var G__27302 = cljs.core.first.call(null,seq27301);
var seq27301__$1 = cljs.core.next.call(null,seq27301);
var G__27303 = cljs.core.first.call(null,seq27301__$1);
var seq27301__$2 = cljs.core.next.call(null,seq27301__$1);
var G__27304 = cljs.core.first.call(null,seq27301__$2);
var seq27301__$3 = cljs.core.next.call(null,seq27301__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27302,G__27303,G__27304,seq27301__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27480 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27481){
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
this.meta27481 = meta27481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27482,meta27481__$1){
var self__ = this;
var _27482__$1 = this;
return (new cljs.core.async.t_cljs$core$async27480(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27481__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27482){
var self__ = this;
var _27482__$1 = this;
return self__.meta27481;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27480.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27481","meta27481",-880582490,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27480";

cljs.core.async.t_cljs$core$async27480.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async27480");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27480 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27481){
return (new cljs.core.async.t_cljs$core$async27480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27481));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27480(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19588__auto___27643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___27643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___27643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27580){
var state_val_27581 = (state_27580[(1)]);
if((state_val_27581 === (7))){
var inst_27498 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27582_27644 = state_27580__$1;
(statearr_27582_27644[(2)] = inst_27498);

(statearr_27582_27644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (20))){
var inst_27510 = (state_27580[(7)]);
var state_27580__$1 = state_27580;
var statearr_27583_27645 = state_27580__$1;
(statearr_27583_27645[(2)] = inst_27510);

(statearr_27583_27645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (27))){
var state_27580__$1 = state_27580;
var statearr_27584_27646 = state_27580__$1;
(statearr_27584_27646[(2)] = null);

(statearr_27584_27646[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (1))){
var inst_27486 = (state_27580[(8)]);
var inst_27486__$1 = calc_state.call(null);
var inst_27488 = (inst_27486__$1 == null);
var inst_27489 = cljs.core.not.call(null,inst_27488);
var state_27580__$1 = (function (){var statearr_27585 = state_27580;
(statearr_27585[(8)] = inst_27486__$1);

return statearr_27585;
})();
if(inst_27489){
var statearr_27586_27647 = state_27580__$1;
(statearr_27586_27647[(1)] = (2));

} else {
var statearr_27587_27648 = state_27580__$1;
(statearr_27587_27648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (24))){
var inst_27540 = (state_27580[(9)]);
var inst_27554 = (state_27580[(10)]);
var inst_27533 = (state_27580[(11)]);
var inst_27554__$1 = inst_27533.call(null,inst_27540);
var state_27580__$1 = (function (){var statearr_27588 = state_27580;
(statearr_27588[(10)] = inst_27554__$1);

return statearr_27588;
})();
if(cljs.core.truth_(inst_27554__$1)){
var statearr_27589_27649 = state_27580__$1;
(statearr_27589_27649[(1)] = (29));

} else {
var statearr_27590_27650 = state_27580__$1;
(statearr_27590_27650[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (4))){
var inst_27501 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27501)){
var statearr_27591_27651 = state_27580__$1;
(statearr_27591_27651[(1)] = (8));

} else {
var statearr_27592_27652 = state_27580__$1;
(statearr_27592_27652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (15))){
var inst_27527 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27527)){
var statearr_27593_27653 = state_27580__$1;
(statearr_27593_27653[(1)] = (19));

} else {
var statearr_27594_27654 = state_27580__$1;
(statearr_27594_27654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (21))){
var inst_27532 = (state_27580[(12)]);
var inst_27532__$1 = (state_27580[(2)]);
var inst_27533 = cljs.core.get.call(null,inst_27532__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27534 = cljs.core.get.call(null,inst_27532__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27535 = cljs.core.get.call(null,inst_27532__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27580__$1 = (function (){var statearr_27595 = state_27580;
(statearr_27595[(13)] = inst_27534);

(statearr_27595[(11)] = inst_27533);

(statearr_27595[(12)] = inst_27532__$1);

return statearr_27595;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27580__$1,(22),inst_27535);
} else {
if((state_val_27581 === (31))){
var inst_27562 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27562)){
var statearr_27596_27655 = state_27580__$1;
(statearr_27596_27655[(1)] = (32));

} else {
var statearr_27597_27656 = state_27580__$1;
(statearr_27597_27656[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (32))){
var inst_27539 = (state_27580[(14)]);
var state_27580__$1 = state_27580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27580__$1,(35),out,inst_27539);
} else {
if((state_val_27581 === (33))){
var inst_27532 = (state_27580[(12)]);
var inst_27510 = inst_27532;
var state_27580__$1 = (function (){var statearr_27598 = state_27580;
(statearr_27598[(7)] = inst_27510);

return statearr_27598;
})();
var statearr_27599_27657 = state_27580__$1;
(statearr_27599_27657[(2)] = null);

(statearr_27599_27657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (13))){
var inst_27510 = (state_27580[(7)]);
var inst_27517 = inst_27510.cljs$lang$protocol_mask$partition0$;
var inst_27518 = (inst_27517 & (64));
var inst_27519 = inst_27510.cljs$core$ISeq$;
var inst_27520 = (inst_27518) || (inst_27519);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27520)){
var statearr_27600_27658 = state_27580__$1;
(statearr_27600_27658[(1)] = (16));

} else {
var statearr_27601_27659 = state_27580__$1;
(statearr_27601_27659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (22))){
var inst_27540 = (state_27580[(9)]);
var inst_27539 = (state_27580[(14)]);
var inst_27538 = (state_27580[(2)]);
var inst_27539__$1 = cljs.core.nth.call(null,inst_27538,(0),null);
var inst_27540__$1 = cljs.core.nth.call(null,inst_27538,(1),null);
var inst_27541 = (inst_27539__$1 == null);
var inst_27542 = cljs.core._EQ_.call(null,inst_27540__$1,change);
var inst_27543 = (inst_27541) || (inst_27542);
var state_27580__$1 = (function (){var statearr_27602 = state_27580;
(statearr_27602[(9)] = inst_27540__$1);

(statearr_27602[(14)] = inst_27539__$1);

return statearr_27602;
})();
if(cljs.core.truth_(inst_27543)){
var statearr_27603_27660 = state_27580__$1;
(statearr_27603_27660[(1)] = (23));

} else {
var statearr_27604_27661 = state_27580__$1;
(statearr_27604_27661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (36))){
var inst_27532 = (state_27580[(12)]);
var inst_27510 = inst_27532;
var state_27580__$1 = (function (){var statearr_27605 = state_27580;
(statearr_27605[(7)] = inst_27510);

return statearr_27605;
})();
var statearr_27606_27662 = state_27580__$1;
(statearr_27606_27662[(2)] = null);

(statearr_27606_27662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (29))){
var inst_27554 = (state_27580[(10)]);
var state_27580__$1 = state_27580;
var statearr_27607_27663 = state_27580__$1;
(statearr_27607_27663[(2)] = inst_27554);

(statearr_27607_27663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (6))){
var state_27580__$1 = state_27580;
var statearr_27608_27664 = state_27580__$1;
(statearr_27608_27664[(2)] = false);

(statearr_27608_27664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (28))){
var inst_27550 = (state_27580[(2)]);
var inst_27551 = calc_state.call(null);
var inst_27510 = inst_27551;
var state_27580__$1 = (function (){var statearr_27609 = state_27580;
(statearr_27609[(7)] = inst_27510);

(statearr_27609[(15)] = inst_27550);

return statearr_27609;
})();
var statearr_27610_27665 = state_27580__$1;
(statearr_27610_27665[(2)] = null);

(statearr_27610_27665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (25))){
var inst_27576 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27611_27666 = state_27580__$1;
(statearr_27611_27666[(2)] = inst_27576);

(statearr_27611_27666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (34))){
var inst_27574 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27612_27667 = state_27580__$1;
(statearr_27612_27667[(2)] = inst_27574);

(statearr_27612_27667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (17))){
var state_27580__$1 = state_27580;
var statearr_27613_27668 = state_27580__$1;
(statearr_27613_27668[(2)] = false);

(statearr_27613_27668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (3))){
var state_27580__$1 = state_27580;
var statearr_27614_27669 = state_27580__$1;
(statearr_27614_27669[(2)] = false);

(statearr_27614_27669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (12))){
var inst_27578 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27580__$1,inst_27578);
} else {
if((state_val_27581 === (2))){
var inst_27486 = (state_27580[(8)]);
var inst_27491 = inst_27486.cljs$lang$protocol_mask$partition0$;
var inst_27492 = (inst_27491 & (64));
var inst_27493 = inst_27486.cljs$core$ISeq$;
var inst_27494 = (inst_27492) || (inst_27493);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27494)){
var statearr_27615_27670 = state_27580__$1;
(statearr_27615_27670[(1)] = (5));

} else {
var statearr_27616_27671 = state_27580__$1;
(statearr_27616_27671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (23))){
var inst_27539 = (state_27580[(14)]);
var inst_27545 = (inst_27539 == null);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27545)){
var statearr_27617_27672 = state_27580__$1;
(statearr_27617_27672[(1)] = (26));

} else {
var statearr_27618_27673 = state_27580__$1;
(statearr_27618_27673[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (35))){
var inst_27565 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
if(cljs.core.truth_(inst_27565)){
var statearr_27619_27674 = state_27580__$1;
(statearr_27619_27674[(1)] = (36));

} else {
var statearr_27620_27675 = state_27580__$1;
(statearr_27620_27675[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (19))){
var inst_27510 = (state_27580[(7)]);
var inst_27529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27510);
var state_27580__$1 = state_27580;
var statearr_27621_27676 = state_27580__$1;
(statearr_27621_27676[(2)] = inst_27529);

(statearr_27621_27676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (11))){
var inst_27510 = (state_27580[(7)]);
var inst_27514 = (inst_27510 == null);
var inst_27515 = cljs.core.not.call(null,inst_27514);
var state_27580__$1 = state_27580;
if(inst_27515){
var statearr_27622_27677 = state_27580__$1;
(statearr_27622_27677[(1)] = (13));

} else {
var statearr_27623_27678 = state_27580__$1;
(statearr_27623_27678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (9))){
var inst_27486 = (state_27580[(8)]);
var state_27580__$1 = state_27580;
var statearr_27624_27679 = state_27580__$1;
(statearr_27624_27679[(2)] = inst_27486);

(statearr_27624_27679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (5))){
var state_27580__$1 = state_27580;
var statearr_27625_27680 = state_27580__$1;
(statearr_27625_27680[(2)] = true);

(statearr_27625_27680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (14))){
var state_27580__$1 = state_27580;
var statearr_27626_27681 = state_27580__$1;
(statearr_27626_27681[(2)] = false);

(statearr_27626_27681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (26))){
var inst_27540 = (state_27580[(9)]);
var inst_27547 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27540);
var state_27580__$1 = state_27580;
var statearr_27627_27682 = state_27580__$1;
(statearr_27627_27682[(2)] = inst_27547);

(statearr_27627_27682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (16))){
var state_27580__$1 = state_27580;
var statearr_27628_27683 = state_27580__$1;
(statearr_27628_27683[(2)] = true);

(statearr_27628_27683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (38))){
var inst_27570 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27629_27684 = state_27580__$1;
(statearr_27629_27684[(2)] = inst_27570);

(statearr_27629_27684[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (30))){
var inst_27540 = (state_27580[(9)]);
var inst_27534 = (state_27580[(13)]);
var inst_27533 = (state_27580[(11)]);
var inst_27557 = cljs.core.empty_QMARK_.call(null,inst_27533);
var inst_27558 = inst_27534.call(null,inst_27540);
var inst_27559 = cljs.core.not.call(null,inst_27558);
var inst_27560 = (inst_27557) && (inst_27559);
var state_27580__$1 = state_27580;
var statearr_27630_27685 = state_27580__$1;
(statearr_27630_27685[(2)] = inst_27560);

(statearr_27630_27685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (10))){
var inst_27486 = (state_27580[(8)]);
var inst_27506 = (state_27580[(2)]);
var inst_27507 = cljs.core.get.call(null,inst_27506,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27508 = cljs.core.get.call(null,inst_27506,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27509 = cljs.core.get.call(null,inst_27506,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27510 = inst_27486;
var state_27580__$1 = (function (){var statearr_27631 = state_27580;
(statearr_27631[(16)] = inst_27508);

(statearr_27631[(7)] = inst_27510);

(statearr_27631[(17)] = inst_27507);

(statearr_27631[(18)] = inst_27509);

return statearr_27631;
})();
var statearr_27632_27686 = state_27580__$1;
(statearr_27632_27686[(2)] = null);

(statearr_27632_27686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (18))){
var inst_27524 = (state_27580[(2)]);
var state_27580__$1 = state_27580;
var statearr_27633_27687 = state_27580__$1;
(statearr_27633_27687[(2)] = inst_27524);

(statearr_27633_27687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (37))){
var state_27580__$1 = state_27580;
var statearr_27634_27688 = state_27580__$1;
(statearr_27634_27688[(2)] = null);

(statearr_27634_27688[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27581 === (8))){
var inst_27486 = (state_27580[(8)]);
var inst_27503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27486);
var state_27580__$1 = state_27580;
var statearr_27635_27689 = state_27580__$1;
(statearr_27635_27689[(2)] = inst_27503);

(statearr_27635_27689[(1)] = (10));


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
});})(c__19588__auto___27643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19523__auto__,c__19588__auto___27643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19524__auto__ = null;
var cljs$core$async$mix_$_state_machine__19524__auto____0 = (function (){
var statearr_27639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27639[(0)] = cljs$core$async$mix_$_state_machine__19524__auto__);

(statearr_27639[(1)] = (1));

return statearr_27639;
});
var cljs$core$async$mix_$_state_machine__19524__auto____1 = (function (state_27580){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_27580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e27640){if((e27640 instanceof Object)){
var ex__19527__auto__ = e27640;
var statearr_27641_27690 = state_27580;
(statearr_27641_27690[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27580;
state_27580 = G__27691;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19524__auto__ = function(state_27580){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19524__auto____1.call(this,state_27580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19524__auto____0;
cljs$core$async$mix_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19524__auto____1;
return cljs$core$async$mix_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___27643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19590__auto__ = (function (){var statearr_27642 = f__19589__auto__.call(null);
(statearr_27642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___27643);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___27643,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17164__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p,v,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27692 = [];
var len__17566__auto___27695 = arguments.length;
var i__17567__auto___27696 = (0);
while(true){
if((i__17567__auto___27696 < len__17566__auto___27695)){
args27692.push((arguments[i__17567__auto___27696]));

var G__27697 = (i__17567__auto___27696 + (1));
i__17567__auto___27696 = G__27697;
continue;
} else {
}
break;
}

var G__27694 = args27692.length;
switch (G__27694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27692.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p);
} else {
var m__17164__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p);
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
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p,v);
} else {
var m__17164__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p,v);
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
var args27700 = [];
var len__17566__auto___27825 = arguments.length;
var i__17567__auto___27826 = (0);
while(true){
if((i__17567__auto___27826 < len__17566__auto___27825)){
args27700.push((arguments[i__17567__auto___27826]));

var G__27827 = (i__17567__auto___27826 + (1));
i__17567__auto___27826 = G__27827;
continue;
} else {
}
break;
}

var G__27702 = args27700.length;
switch (G__27702) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27700.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16508__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16508__auto__,mults){
return (function (p1__27699_SHARP_){
if(cljs.core.truth_(p1__27699_SHARP_.call(null,topic))){
return p1__27699_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27699_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16508__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27704 = meta27704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27705,meta27704__$1){
var self__ = this;
var _27705__$1 = this;
return (new cljs.core.async.t_cljs$core$async27703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27704__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27705){
var self__ = this;
var _27705__$1 = this;
return self__.meta27704;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27704","meta27704",-1595949680,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27703";

cljs.core.async.t_cljs$core$async27703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async27703");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27703 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27704){
return (new cljs.core.async.t_cljs$core$async27703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27704));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19588__auto___27829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___27829,mults,ensure_mult,p){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___27829,mults,ensure_mult,p){
return (function (state_27777){
var state_val_27778 = (state_27777[(1)]);
if((state_val_27778 === (7))){
var inst_27773 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27779_27830 = state_27777__$1;
(statearr_27779_27830[(2)] = inst_27773);

(statearr_27779_27830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (20))){
var state_27777__$1 = state_27777;
var statearr_27780_27831 = state_27777__$1;
(statearr_27780_27831[(2)] = null);

(statearr_27780_27831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (1))){
var state_27777__$1 = state_27777;
var statearr_27781_27832 = state_27777__$1;
(statearr_27781_27832[(2)] = null);

(statearr_27781_27832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (24))){
var inst_27756 = (state_27777[(7)]);
var inst_27765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27756);
var state_27777__$1 = state_27777;
var statearr_27782_27833 = state_27777__$1;
(statearr_27782_27833[(2)] = inst_27765);

(statearr_27782_27833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (4))){
var inst_27708 = (state_27777[(8)]);
var inst_27708__$1 = (state_27777[(2)]);
var inst_27709 = (inst_27708__$1 == null);
var state_27777__$1 = (function (){var statearr_27783 = state_27777;
(statearr_27783[(8)] = inst_27708__$1);

return statearr_27783;
})();
if(cljs.core.truth_(inst_27709)){
var statearr_27784_27834 = state_27777__$1;
(statearr_27784_27834[(1)] = (5));

} else {
var statearr_27785_27835 = state_27777__$1;
(statearr_27785_27835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (15))){
var inst_27750 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27786_27836 = state_27777__$1;
(statearr_27786_27836[(2)] = inst_27750);

(statearr_27786_27836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (21))){
var inst_27770 = (state_27777[(2)]);
var state_27777__$1 = (function (){var statearr_27787 = state_27777;
(statearr_27787[(9)] = inst_27770);

return statearr_27787;
})();
var statearr_27788_27837 = state_27777__$1;
(statearr_27788_27837[(2)] = null);

(statearr_27788_27837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (13))){
var inst_27732 = (state_27777[(10)]);
var inst_27734 = cljs.core.chunked_seq_QMARK_.call(null,inst_27732);
var state_27777__$1 = state_27777;
if(inst_27734){
var statearr_27789_27838 = state_27777__$1;
(statearr_27789_27838[(1)] = (16));

} else {
var statearr_27790_27839 = state_27777__$1;
(statearr_27790_27839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (22))){
var inst_27762 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
if(cljs.core.truth_(inst_27762)){
var statearr_27791_27840 = state_27777__$1;
(statearr_27791_27840[(1)] = (23));

} else {
var statearr_27792_27841 = state_27777__$1;
(statearr_27792_27841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (6))){
var inst_27708 = (state_27777[(8)]);
var inst_27756 = (state_27777[(7)]);
var inst_27758 = (state_27777[(11)]);
var inst_27756__$1 = topic_fn.call(null,inst_27708);
var inst_27757 = cljs.core.deref.call(null,mults);
var inst_27758__$1 = cljs.core.get.call(null,inst_27757,inst_27756__$1);
var state_27777__$1 = (function (){var statearr_27793 = state_27777;
(statearr_27793[(7)] = inst_27756__$1);

(statearr_27793[(11)] = inst_27758__$1);

return statearr_27793;
})();
if(cljs.core.truth_(inst_27758__$1)){
var statearr_27794_27842 = state_27777__$1;
(statearr_27794_27842[(1)] = (19));

} else {
var statearr_27795_27843 = state_27777__$1;
(statearr_27795_27843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (25))){
var inst_27767 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27796_27844 = state_27777__$1;
(statearr_27796_27844[(2)] = inst_27767);

(statearr_27796_27844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (17))){
var inst_27732 = (state_27777[(10)]);
var inst_27741 = cljs.core.first.call(null,inst_27732);
var inst_27742 = cljs.core.async.muxch_STAR_.call(null,inst_27741);
var inst_27743 = cljs.core.async.close_BANG_.call(null,inst_27742);
var inst_27744 = cljs.core.next.call(null,inst_27732);
var inst_27718 = inst_27744;
var inst_27719 = null;
var inst_27720 = (0);
var inst_27721 = (0);
var state_27777__$1 = (function (){var statearr_27797 = state_27777;
(statearr_27797[(12)] = inst_27720);

(statearr_27797[(13)] = inst_27718);

(statearr_27797[(14)] = inst_27719);

(statearr_27797[(15)] = inst_27743);

(statearr_27797[(16)] = inst_27721);

return statearr_27797;
})();
var statearr_27798_27845 = state_27777__$1;
(statearr_27798_27845[(2)] = null);

(statearr_27798_27845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (3))){
var inst_27775 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27777__$1,inst_27775);
} else {
if((state_val_27778 === (12))){
var inst_27752 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27799_27846 = state_27777__$1;
(statearr_27799_27846[(2)] = inst_27752);

(statearr_27799_27846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (2))){
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27777__$1,(4),ch);
} else {
if((state_val_27778 === (23))){
var state_27777__$1 = state_27777;
var statearr_27800_27847 = state_27777__$1;
(statearr_27800_27847[(2)] = null);

(statearr_27800_27847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (19))){
var inst_27708 = (state_27777[(8)]);
var inst_27758 = (state_27777[(11)]);
var inst_27760 = cljs.core.async.muxch_STAR_.call(null,inst_27758);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27777__$1,(22),inst_27760,inst_27708);
} else {
if((state_val_27778 === (11))){
var inst_27718 = (state_27777[(13)]);
var inst_27732 = (state_27777[(10)]);
var inst_27732__$1 = cljs.core.seq.call(null,inst_27718);
var state_27777__$1 = (function (){var statearr_27801 = state_27777;
(statearr_27801[(10)] = inst_27732__$1);

return statearr_27801;
})();
if(inst_27732__$1){
var statearr_27802_27848 = state_27777__$1;
(statearr_27802_27848[(1)] = (13));

} else {
var statearr_27803_27849 = state_27777__$1;
(statearr_27803_27849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (9))){
var inst_27754 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27804_27850 = state_27777__$1;
(statearr_27804_27850[(2)] = inst_27754);

(statearr_27804_27850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (5))){
var inst_27715 = cljs.core.deref.call(null,mults);
var inst_27716 = cljs.core.vals.call(null,inst_27715);
var inst_27717 = cljs.core.seq.call(null,inst_27716);
var inst_27718 = inst_27717;
var inst_27719 = null;
var inst_27720 = (0);
var inst_27721 = (0);
var state_27777__$1 = (function (){var statearr_27805 = state_27777;
(statearr_27805[(12)] = inst_27720);

(statearr_27805[(13)] = inst_27718);

(statearr_27805[(14)] = inst_27719);

(statearr_27805[(16)] = inst_27721);

return statearr_27805;
})();
var statearr_27806_27851 = state_27777__$1;
(statearr_27806_27851[(2)] = null);

(statearr_27806_27851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (14))){
var state_27777__$1 = state_27777;
var statearr_27810_27852 = state_27777__$1;
(statearr_27810_27852[(2)] = null);

(statearr_27810_27852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (16))){
var inst_27732 = (state_27777[(10)]);
var inst_27736 = cljs.core.chunk_first.call(null,inst_27732);
var inst_27737 = cljs.core.chunk_rest.call(null,inst_27732);
var inst_27738 = cljs.core.count.call(null,inst_27736);
var inst_27718 = inst_27737;
var inst_27719 = inst_27736;
var inst_27720 = inst_27738;
var inst_27721 = (0);
var state_27777__$1 = (function (){var statearr_27811 = state_27777;
(statearr_27811[(12)] = inst_27720);

(statearr_27811[(13)] = inst_27718);

(statearr_27811[(14)] = inst_27719);

(statearr_27811[(16)] = inst_27721);

return statearr_27811;
})();
var statearr_27812_27853 = state_27777__$1;
(statearr_27812_27853[(2)] = null);

(statearr_27812_27853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (10))){
var inst_27720 = (state_27777[(12)]);
var inst_27718 = (state_27777[(13)]);
var inst_27719 = (state_27777[(14)]);
var inst_27721 = (state_27777[(16)]);
var inst_27726 = cljs.core._nth.call(null,inst_27719,inst_27721);
var inst_27727 = cljs.core.async.muxch_STAR_.call(null,inst_27726);
var inst_27728 = cljs.core.async.close_BANG_.call(null,inst_27727);
var inst_27729 = (inst_27721 + (1));
var tmp27807 = inst_27720;
var tmp27808 = inst_27718;
var tmp27809 = inst_27719;
var inst_27718__$1 = tmp27808;
var inst_27719__$1 = tmp27809;
var inst_27720__$1 = tmp27807;
var inst_27721__$1 = inst_27729;
var state_27777__$1 = (function (){var statearr_27813 = state_27777;
(statearr_27813[(12)] = inst_27720__$1);

(statearr_27813[(13)] = inst_27718__$1);

(statearr_27813[(14)] = inst_27719__$1);

(statearr_27813[(16)] = inst_27721__$1);

(statearr_27813[(17)] = inst_27728);

return statearr_27813;
})();
var statearr_27814_27854 = state_27777__$1;
(statearr_27814_27854[(2)] = null);

(statearr_27814_27854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (18))){
var inst_27747 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27815_27855 = state_27777__$1;
(statearr_27815_27855[(2)] = inst_27747);

(statearr_27815_27855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (8))){
var inst_27720 = (state_27777[(12)]);
var inst_27721 = (state_27777[(16)]);
var inst_27723 = (inst_27721 < inst_27720);
var inst_27724 = inst_27723;
var state_27777__$1 = state_27777;
if(cljs.core.truth_(inst_27724)){
var statearr_27816_27856 = state_27777__$1;
(statearr_27816_27856[(1)] = (10));

} else {
var statearr_27817_27857 = state_27777__$1;
(statearr_27817_27857[(1)] = (11));

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
});})(c__19588__auto___27829,mults,ensure_mult,p))
;
return ((function (switch__19523__auto__,c__19588__auto___27829,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_27821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27821[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_27821[(1)] = (1));

return statearr_27821;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_27777){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_27777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e27822){if((e27822 instanceof Object)){
var ex__19527__auto__ = e27822;
var statearr_27823_27858 = state_27777;
(statearr_27823_27858[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27859 = state_27777;
state_27777 = G__27859;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_27777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_27777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___27829,mults,ensure_mult,p))
})();
var state__19590__auto__ = (function (){var statearr_27824 = f__19589__auto__.call(null);
(statearr_27824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___27829);

return statearr_27824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___27829,mults,ensure_mult,p))
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
var args27860 = [];
var len__17566__auto___27863 = arguments.length;
var i__17567__auto___27864 = (0);
while(true){
if((i__17567__auto___27864 < len__17566__auto___27863)){
args27860.push((arguments[i__17567__auto___27864]));

var G__27865 = (i__17567__auto___27864 + (1));
i__17567__auto___27864 = G__27865;
continue;
} else {
}
break;
}

var G__27862 = args27860.length;
switch (G__27862) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27860.length)].join('')));

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
var args27867 = [];
var len__17566__auto___27870 = arguments.length;
var i__17567__auto___27871 = (0);
while(true){
if((i__17567__auto___27871 < len__17566__auto___27870)){
args27867.push((arguments[i__17567__auto___27871]));

var G__27872 = (i__17567__auto___27871 + (1));
i__17567__auto___27871 = G__27872;
continue;
} else {
}
break;
}

var G__27869 = args27867.length;
switch (G__27869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27867.length)].join('')));

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
var args27874 = [];
var len__17566__auto___27945 = arguments.length;
var i__17567__auto___27946 = (0);
while(true){
if((i__17567__auto___27946 < len__17566__auto___27945)){
args27874.push((arguments[i__17567__auto___27946]));

var G__27947 = (i__17567__auto___27946 + (1));
i__17567__auto___27946 = G__27947;
continue;
} else {
}
break;
}

var G__27876 = args27874.length;
switch (G__27876) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27874.length)].join('')));

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
var c__19588__auto___27949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___27949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___27949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27915){
var state_val_27916 = (state_27915[(1)]);
if((state_val_27916 === (7))){
var state_27915__$1 = state_27915;
var statearr_27917_27950 = state_27915__$1;
(statearr_27917_27950[(2)] = null);

(statearr_27917_27950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (1))){
var state_27915__$1 = state_27915;
var statearr_27918_27951 = state_27915__$1;
(statearr_27918_27951[(2)] = null);

(statearr_27918_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (4))){
var inst_27879 = (state_27915[(7)]);
var inst_27881 = (inst_27879 < cnt);
var state_27915__$1 = state_27915;
if(cljs.core.truth_(inst_27881)){
var statearr_27919_27952 = state_27915__$1;
(statearr_27919_27952[(1)] = (6));

} else {
var statearr_27920_27953 = state_27915__$1;
(statearr_27920_27953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (15))){
var inst_27911 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27921_27954 = state_27915__$1;
(statearr_27921_27954[(2)] = inst_27911);

(statearr_27921_27954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (13))){
var inst_27904 = cljs.core.async.close_BANG_.call(null,out);
var state_27915__$1 = state_27915;
var statearr_27922_27955 = state_27915__$1;
(statearr_27922_27955[(2)] = inst_27904);

(statearr_27922_27955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (6))){
var state_27915__$1 = state_27915;
var statearr_27923_27956 = state_27915__$1;
(statearr_27923_27956[(2)] = null);

(statearr_27923_27956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (3))){
var inst_27913 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27915__$1,inst_27913);
} else {
if((state_val_27916 === (12))){
var inst_27901 = (state_27915[(8)]);
var inst_27901__$1 = (state_27915[(2)]);
var inst_27902 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27901__$1);
var state_27915__$1 = (function (){var statearr_27924 = state_27915;
(statearr_27924[(8)] = inst_27901__$1);

return statearr_27924;
})();
if(cljs.core.truth_(inst_27902)){
var statearr_27925_27957 = state_27915__$1;
(statearr_27925_27957[(1)] = (13));

} else {
var statearr_27926_27958 = state_27915__$1;
(statearr_27926_27958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (2))){
var inst_27878 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27879 = (0);
var state_27915__$1 = (function (){var statearr_27927 = state_27915;
(statearr_27927[(7)] = inst_27879);

(statearr_27927[(9)] = inst_27878);

return statearr_27927;
})();
var statearr_27928_27959 = state_27915__$1;
(statearr_27928_27959[(2)] = null);

(statearr_27928_27959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (11))){
var inst_27879 = (state_27915[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27915,(10),Object,null,(9));
var inst_27888 = chs__$1.call(null,inst_27879);
var inst_27889 = done.call(null,inst_27879);
var inst_27890 = cljs.core.async.take_BANG_.call(null,inst_27888,inst_27889);
var state_27915__$1 = state_27915;
var statearr_27929_27960 = state_27915__$1;
(statearr_27929_27960[(2)] = inst_27890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (9))){
var inst_27879 = (state_27915[(7)]);
var inst_27892 = (state_27915[(2)]);
var inst_27893 = (inst_27879 + (1));
var inst_27879__$1 = inst_27893;
var state_27915__$1 = (function (){var statearr_27930 = state_27915;
(statearr_27930[(7)] = inst_27879__$1);

(statearr_27930[(10)] = inst_27892);

return statearr_27930;
})();
var statearr_27931_27961 = state_27915__$1;
(statearr_27931_27961[(2)] = null);

(statearr_27931_27961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (5))){
var inst_27899 = (state_27915[(2)]);
var state_27915__$1 = (function (){var statearr_27932 = state_27915;
(statearr_27932[(11)] = inst_27899);

return statearr_27932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27915__$1,(12),dchan);
} else {
if((state_val_27916 === (14))){
var inst_27901 = (state_27915[(8)]);
var inst_27906 = cljs.core.apply.call(null,f,inst_27901);
var state_27915__$1 = state_27915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27915__$1,(16),out,inst_27906);
} else {
if((state_val_27916 === (16))){
var inst_27908 = (state_27915[(2)]);
var state_27915__$1 = (function (){var statearr_27933 = state_27915;
(statearr_27933[(12)] = inst_27908);

return statearr_27933;
})();
var statearr_27934_27962 = state_27915__$1;
(statearr_27934_27962[(2)] = null);

(statearr_27934_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (10))){
var inst_27883 = (state_27915[(2)]);
var inst_27884 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27915__$1 = (function (){var statearr_27935 = state_27915;
(statearr_27935[(13)] = inst_27883);

return statearr_27935;
})();
var statearr_27936_27963 = state_27915__$1;
(statearr_27936_27963[(2)] = inst_27884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27916 === (8))){
var inst_27897 = (state_27915[(2)]);
var state_27915__$1 = state_27915;
var statearr_27937_27964 = state_27915__$1;
(statearr_27937_27964[(2)] = inst_27897);

(statearr_27937_27964[(1)] = (5));


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
});})(c__19588__auto___27949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19523__auto__,c__19588__auto___27949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_27941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27941[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_27941[(1)] = (1));

return statearr_27941;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_27915){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_27915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e27942){if((e27942 instanceof Object)){
var ex__19527__auto__ = e27942;
var statearr_27943_27965 = state_27915;
(statearr_27943_27965[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27966 = state_27915;
state_27915 = G__27966;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_27915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_27915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___27949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19590__auto__ = (function (){var statearr_27944 = f__19589__auto__.call(null);
(statearr_27944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___27949);

return statearr_27944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___27949,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27968 = [];
var len__17566__auto___28024 = arguments.length;
var i__17567__auto___28025 = (0);
while(true){
if((i__17567__auto___28025 < len__17566__auto___28024)){
args27968.push((arguments[i__17567__auto___28025]));

var G__28026 = (i__17567__auto___28025 + (1));
i__17567__auto___28025 = G__28026;
continue;
} else {
}
break;
}

var G__27970 = args27968.length;
switch (G__27970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27968.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19588__auto___28028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___28028,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___28028,out){
return (function (state_28000){
var state_val_28001 = (state_28000[(1)]);
if((state_val_28001 === (7))){
var inst_27979 = (state_28000[(7)]);
var inst_27980 = (state_28000[(8)]);
var inst_27979__$1 = (state_28000[(2)]);
var inst_27980__$1 = cljs.core.nth.call(null,inst_27979__$1,(0),null);
var inst_27981 = cljs.core.nth.call(null,inst_27979__$1,(1),null);
var inst_27982 = (inst_27980__$1 == null);
var state_28000__$1 = (function (){var statearr_28002 = state_28000;
(statearr_28002[(7)] = inst_27979__$1);

(statearr_28002[(8)] = inst_27980__$1);

(statearr_28002[(9)] = inst_27981);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27982)){
var statearr_28003_28029 = state_28000__$1;
(statearr_28003_28029[(1)] = (8));

} else {
var statearr_28004_28030 = state_28000__$1;
(statearr_28004_28030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (1))){
var inst_27971 = cljs.core.vec.call(null,chs);
var inst_27972 = inst_27971;
var state_28000__$1 = (function (){var statearr_28005 = state_28000;
(statearr_28005[(10)] = inst_27972);

return statearr_28005;
})();
var statearr_28006_28031 = state_28000__$1;
(statearr_28006_28031[(2)] = null);

(statearr_28006_28031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (4))){
var inst_27972 = (state_28000[(10)]);
var state_28000__$1 = state_28000;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28000__$1,(7),inst_27972);
} else {
if((state_val_28001 === (6))){
var inst_27996 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28007_28032 = state_28000__$1;
(statearr_28007_28032[(2)] = inst_27996);

(statearr_28007_28032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (3))){
var inst_27998 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28000__$1,inst_27998);
} else {
if((state_val_28001 === (2))){
var inst_27972 = (state_28000[(10)]);
var inst_27974 = cljs.core.count.call(null,inst_27972);
var inst_27975 = (inst_27974 > (0));
var state_28000__$1 = state_28000;
if(cljs.core.truth_(inst_27975)){
var statearr_28009_28033 = state_28000__$1;
(statearr_28009_28033[(1)] = (4));

} else {
var statearr_28010_28034 = state_28000__$1;
(statearr_28010_28034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (11))){
var inst_27972 = (state_28000[(10)]);
var inst_27989 = (state_28000[(2)]);
var tmp28008 = inst_27972;
var inst_27972__$1 = tmp28008;
var state_28000__$1 = (function (){var statearr_28011 = state_28000;
(statearr_28011[(11)] = inst_27989);

(statearr_28011[(10)] = inst_27972__$1);

return statearr_28011;
})();
var statearr_28012_28035 = state_28000__$1;
(statearr_28012_28035[(2)] = null);

(statearr_28012_28035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (9))){
var inst_27980 = (state_28000[(8)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28000__$1,(11),out,inst_27980);
} else {
if((state_val_28001 === (5))){
var inst_27994 = cljs.core.async.close_BANG_.call(null,out);
var state_28000__$1 = state_28000;
var statearr_28013_28036 = state_28000__$1;
(statearr_28013_28036[(2)] = inst_27994);

(statearr_28013_28036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (10))){
var inst_27992 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28014_28037 = state_28000__$1;
(statearr_28014_28037[(2)] = inst_27992);

(statearr_28014_28037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (8))){
var inst_27972 = (state_28000[(10)]);
var inst_27979 = (state_28000[(7)]);
var inst_27980 = (state_28000[(8)]);
var inst_27981 = (state_28000[(9)]);
var inst_27984 = (function (){var cs = inst_27972;
var vec__27977 = inst_27979;
var v = inst_27980;
var c = inst_27981;
return ((function (cs,vec__27977,v,c,inst_27972,inst_27979,inst_27980,inst_27981,state_val_28001,c__19588__auto___28028,out){
return (function (p1__27967_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27967_SHARP_);
});
;})(cs,vec__27977,v,c,inst_27972,inst_27979,inst_27980,inst_27981,state_val_28001,c__19588__auto___28028,out))
})();
var inst_27985 = cljs.core.filterv.call(null,inst_27984,inst_27972);
var inst_27972__$1 = inst_27985;
var state_28000__$1 = (function (){var statearr_28015 = state_28000;
(statearr_28015[(10)] = inst_27972__$1);

return statearr_28015;
})();
var statearr_28016_28038 = state_28000__$1;
(statearr_28016_28038[(2)] = null);

(statearr_28016_28038[(1)] = (2));


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
});})(c__19588__auto___28028,out))
;
return ((function (switch__19523__auto__,c__19588__auto___28028,out){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_28020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28020[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_28020[(1)] = (1));

return statearr_28020;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_28000){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28021){if((e28021 instanceof Object)){
var ex__19527__auto__ = e28021;
var statearr_28022_28039 = state_28000;
(statearr_28022_28039[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_28000;
state_28000 = G__28040;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_28000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_28000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___28028,out))
})();
var state__19590__auto__ = (function (){var statearr_28023 = f__19589__auto__.call(null);
(statearr_28023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___28028);

return statearr_28023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___28028,out))
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
var args28041 = [];
var len__17566__auto___28090 = arguments.length;
var i__17567__auto___28091 = (0);
while(true){
if((i__17567__auto___28091 < len__17566__auto___28090)){
args28041.push((arguments[i__17567__auto___28091]));

var G__28092 = (i__17567__auto___28091 + (1));
i__17567__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var G__28043 = args28041.length;
switch (G__28043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28041.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19588__auto___28094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___28094,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___28094,out){
return (function (state_28067){
var state_val_28068 = (state_28067[(1)]);
if((state_val_28068 === (7))){
var inst_28049 = (state_28067[(7)]);
var inst_28049__$1 = (state_28067[(2)]);
var inst_28050 = (inst_28049__$1 == null);
var inst_28051 = cljs.core.not.call(null,inst_28050);
var state_28067__$1 = (function (){var statearr_28069 = state_28067;
(statearr_28069[(7)] = inst_28049__$1);

return statearr_28069;
})();
if(inst_28051){
var statearr_28070_28095 = state_28067__$1;
(statearr_28070_28095[(1)] = (8));

} else {
var statearr_28071_28096 = state_28067__$1;
(statearr_28071_28096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (1))){
var inst_28044 = (0);
var state_28067__$1 = (function (){var statearr_28072 = state_28067;
(statearr_28072[(8)] = inst_28044);

return statearr_28072;
})();
var statearr_28073_28097 = state_28067__$1;
(statearr_28073_28097[(2)] = null);

(statearr_28073_28097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (4))){
var state_28067__$1 = state_28067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28067__$1,(7),ch);
} else {
if((state_val_28068 === (6))){
var inst_28062 = (state_28067[(2)]);
var state_28067__$1 = state_28067;
var statearr_28074_28098 = state_28067__$1;
(statearr_28074_28098[(2)] = inst_28062);

(statearr_28074_28098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (3))){
var inst_28064 = (state_28067[(2)]);
var inst_28065 = cljs.core.async.close_BANG_.call(null,out);
var state_28067__$1 = (function (){var statearr_28075 = state_28067;
(statearr_28075[(9)] = inst_28064);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28067__$1,inst_28065);
} else {
if((state_val_28068 === (2))){
var inst_28044 = (state_28067[(8)]);
var inst_28046 = (inst_28044 < n);
var state_28067__$1 = state_28067;
if(cljs.core.truth_(inst_28046)){
var statearr_28076_28099 = state_28067__$1;
(statearr_28076_28099[(1)] = (4));

} else {
var statearr_28077_28100 = state_28067__$1;
(statearr_28077_28100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (11))){
var inst_28044 = (state_28067[(8)]);
var inst_28054 = (state_28067[(2)]);
var inst_28055 = (inst_28044 + (1));
var inst_28044__$1 = inst_28055;
var state_28067__$1 = (function (){var statearr_28078 = state_28067;
(statearr_28078[(10)] = inst_28054);

(statearr_28078[(8)] = inst_28044__$1);

return statearr_28078;
})();
var statearr_28079_28101 = state_28067__$1;
(statearr_28079_28101[(2)] = null);

(statearr_28079_28101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (9))){
var state_28067__$1 = state_28067;
var statearr_28080_28102 = state_28067__$1;
(statearr_28080_28102[(2)] = null);

(statearr_28080_28102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (5))){
var state_28067__$1 = state_28067;
var statearr_28081_28103 = state_28067__$1;
(statearr_28081_28103[(2)] = null);

(statearr_28081_28103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (10))){
var inst_28059 = (state_28067[(2)]);
var state_28067__$1 = state_28067;
var statearr_28082_28104 = state_28067__$1;
(statearr_28082_28104[(2)] = inst_28059);

(statearr_28082_28104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28068 === (8))){
var inst_28049 = (state_28067[(7)]);
var state_28067__$1 = state_28067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28067__$1,(11),out,inst_28049);
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
});})(c__19588__auto___28094,out))
;
return ((function (switch__19523__auto__,c__19588__auto___28094,out){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_28086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28086[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_28086[(1)] = (1));

return statearr_28086;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_28067){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28087){if((e28087 instanceof Object)){
var ex__19527__auto__ = e28087;
var statearr_28088_28105 = state_28067;
(statearr_28088_28105[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28106 = state_28067;
state_28067 = G__28106;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_28067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_28067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___28094,out))
})();
var state__19590__auto__ = (function (){var statearr_28089 = f__19589__auto__.call(null);
(statearr_28089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___28094);

return statearr_28089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___28094,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28114 = (function (map_LT_,f,ch,meta28115){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28115 = meta28115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28116,meta28115__$1){
var self__ = this;
var _28116__$1 = this;
return (new cljs.core.async.t_cljs$core$async28114(self__.map_LT_,self__.f,self__.ch,meta28115__$1));
});

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28116){
var self__ = this;
var _28116__$1 = this;
return self__.meta28115;
});

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28117 = (function (map_LT_,f,ch,meta28115,_,fn1,meta28118){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28115 = meta28115;
this._ = _;
this.fn1 = fn1;
this.meta28118 = meta28118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28119,meta28118__$1){
var self__ = this;
var _28119__$1 = this;
return (new cljs.core.async.t_cljs$core$async28117(self__.map_LT_,self__.f,self__.ch,self__.meta28115,self__._,self__.fn1,meta28118__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28119){
var self__ = this;
var _28119__$1 = this;
return self__.meta28118;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28107_SHARP_){
return f1.call(null,(((p1__28107_SHARP_ == null))?null:self__.f.call(null,p1__28107_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28117.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28115","meta28115",-864683230,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28114","cljs.core.async/t_cljs$core$async28114",499367183,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28118","meta28118",-1851772613,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28117";

cljs.core.async.t_cljs$core$async28117.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async28117");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28117 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28117(map_LT___$1,f__$1,ch__$1,meta28115__$1,___$2,fn1__$1,meta28118){
return (new cljs.core.async.t_cljs$core$async28117(map_LT___$1,f__$1,ch__$1,meta28115__$1,___$2,fn1__$1,meta28118));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28117(self__.map_LT_,self__.f,self__.ch,self__.meta28115,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16496__auto__ = ret;
if(cljs.core.truth_(and__16496__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16496__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28115","meta28115",-864683230,null)], null);
});

cljs.core.async.t_cljs$core$async28114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28114";

cljs.core.async.t_cljs$core$async28114.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async28114");
});

cljs.core.async.__GT_t_cljs$core$async28114 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28114(map_LT___$1,f__$1,ch__$1,meta28115){
return (new cljs.core.async.t_cljs$core$async28114(map_LT___$1,f__$1,ch__$1,meta28115));
});

}

return (new cljs.core.async.t_cljs$core$async28114(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28123 = (function (map_GT_,f,ch,meta28124){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28124 = meta28124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28125,meta28124__$1){
var self__ = this;
var _28125__$1 = this;
return (new cljs.core.async.t_cljs$core$async28123(self__.map_GT_,self__.f,self__.ch,meta28124__$1));
});

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28125){
var self__ = this;
var _28125__$1 = this;
return self__.meta28124;
});

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28124","meta28124",-1322384417,null)], null);
});

cljs.core.async.t_cljs$core$async28123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28123";

cljs.core.async.t_cljs$core$async28123.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async28123");
});

cljs.core.async.__GT_t_cljs$core$async28123 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28123(map_GT___$1,f__$1,ch__$1,meta28124){
return (new cljs.core.async.t_cljs$core$async28123(map_GT___$1,f__$1,ch__$1,meta28124));
});

}

return (new cljs.core.async.t_cljs$core$async28123(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28129 = (function (filter_GT_,p,ch,meta28130){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28130 = meta28130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28131,meta28130__$1){
var self__ = this;
var _28131__$1 = this;
return (new cljs.core.async.t_cljs$core$async28129(self__.filter_GT_,self__.p,self__.ch,meta28130__$1));
});

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28131){
var self__ = this;
var _28131__$1 = this;
return self__.meta28130;
});

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28130","meta28130",9753180,null)], null);
});

cljs.core.async.t_cljs$core$async28129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28129";

cljs.core.async.t_cljs$core$async28129.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async28129");
});

cljs.core.async.__GT_t_cljs$core$async28129 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28129(filter_GT___$1,p__$1,ch__$1,meta28130){
return (new cljs.core.async.t_cljs$core$async28129(filter_GT___$1,p__$1,ch__$1,meta28130));
});

}

return (new cljs.core.async.t_cljs$core$async28129(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28132 = [];
var len__17566__auto___28176 = arguments.length;
var i__17567__auto___28177 = (0);
while(true){
if((i__17567__auto___28177 < len__17566__auto___28176)){
args28132.push((arguments[i__17567__auto___28177]));

var G__28178 = (i__17567__auto___28177 + (1));
i__17567__auto___28177 = G__28178;
continue;
} else {
}
break;
}

var G__28134 = args28132.length;
switch (G__28134) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28132.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19588__auto___28180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___28180,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___28180,out){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (7))){
var inst_28151 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28157_28181 = state_28155__$1;
(statearr_28157_28181[(2)] = inst_28151);

(statearr_28157_28181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (1))){
var state_28155__$1 = state_28155;
var statearr_28158_28182 = state_28155__$1;
(statearr_28158_28182[(2)] = null);

(statearr_28158_28182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (4))){
var inst_28137 = (state_28155[(7)]);
var inst_28137__$1 = (state_28155[(2)]);
var inst_28138 = (inst_28137__$1 == null);
var state_28155__$1 = (function (){var statearr_28159 = state_28155;
(statearr_28159[(7)] = inst_28137__$1);

return statearr_28159;
})();
if(cljs.core.truth_(inst_28138)){
var statearr_28160_28183 = state_28155__$1;
(statearr_28160_28183[(1)] = (5));

} else {
var statearr_28161_28184 = state_28155__$1;
(statearr_28161_28184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (6))){
var inst_28137 = (state_28155[(7)]);
var inst_28142 = p.call(null,inst_28137);
var state_28155__$1 = state_28155;
if(cljs.core.truth_(inst_28142)){
var statearr_28162_28185 = state_28155__$1;
(statearr_28162_28185[(1)] = (8));

} else {
var statearr_28163_28186 = state_28155__$1;
(statearr_28163_28186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (3))){
var inst_28153 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28155__$1,inst_28153);
} else {
if((state_val_28156 === (2))){
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28155__$1,(4),ch);
} else {
if((state_val_28156 === (11))){
var inst_28145 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28164_28187 = state_28155__$1;
(statearr_28164_28187[(2)] = inst_28145);

(statearr_28164_28187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (9))){
var state_28155__$1 = state_28155;
var statearr_28165_28188 = state_28155__$1;
(statearr_28165_28188[(2)] = null);

(statearr_28165_28188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (5))){
var inst_28140 = cljs.core.async.close_BANG_.call(null,out);
var state_28155__$1 = state_28155;
var statearr_28166_28189 = state_28155__$1;
(statearr_28166_28189[(2)] = inst_28140);

(statearr_28166_28189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (10))){
var inst_28148 = (state_28155[(2)]);
var state_28155__$1 = (function (){var statearr_28167 = state_28155;
(statearr_28167[(8)] = inst_28148);

return statearr_28167;
})();
var statearr_28168_28190 = state_28155__$1;
(statearr_28168_28190[(2)] = null);

(statearr_28168_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (8))){
var inst_28137 = (state_28155[(7)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28155__$1,(11),out,inst_28137);
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
});})(c__19588__auto___28180,out))
;
return ((function (switch__19523__auto__,c__19588__auto___28180,out){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_28172 = [null,null,null,null,null,null,null,null,null];
(statearr_28172[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_28172[(1)] = (1));

return statearr_28172;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_28155){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28173){if((e28173 instanceof Object)){
var ex__19527__auto__ = e28173;
var statearr_28174_28191 = state_28155;
(statearr_28174_28191[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28192 = state_28155;
state_28155 = G__28192;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___28180,out))
})();
var state__19590__auto__ = (function (){var statearr_28175 = f__19589__auto__.call(null);
(statearr_28175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___28180);

return statearr_28175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___28180,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28193 = [];
var len__17566__auto___28196 = arguments.length;
var i__17567__auto___28197 = (0);
while(true){
if((i__17567__auto___28197 < len__17566__auto___28196)){
args28193.push((arguments[i__17567__auto___28197]));

var G__28198 = (i__17567__auto___28197 + (1));
i__17567__auto___28197 = G__28198;
continue;
} else {
}
break;
}

var G__28195 = args28193.length;
switch (G__28195) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28193.length)].join('')));

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
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_28365){
var state_val_28366 = (state_28365[(1)]);
if((state_val_28366 === (7))){
var inst_28361 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28367_28408 = state_28365__$1;
(statearr_28367_28408[(2)] = inst_28361);

(statearr_28367_28408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (20))){
var inst_28331 = (state_28365[(7)]);
var inst_28342 = (state_28365[(2)]);
var inst_28343 = cljs.core.next.call(null,inst_28331);
var inst_28317 = inst_28343;
var inst_28318 = null;
var inst_28319 = (0);
var inst_28320 = (0);
var state_28365__$1 = (function (){var statearr_28368 = state_28365;
(statearr_28368[(8)] = inst_28317);

(statearr_28368[(9)] = inst_28342);

(statearr_28368[(10)] = inst_28318);

(statearr_28368[(11)] = inst_28320);

(statearr_28368[(12)] = inst_28319);

return statearr_28368;
})();
var statearr_28369_28409 = state_28365__$1;
(statearr_28369_28409[(2)] = null);

(statearr_28369_28409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (1))){
var state_28365__$1 = state_28365;
var statearr_28370_28410 = state_28365__$1;
(statearr_28370_28410[(2)] = null);

(statearr_28370_28410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (4))){
var inst_28306 = (state_28365[(13)]);
var inst_28306__$1 = (state_28365[(2)]);
var inst_28307 = (inst_28306__$1 == null);
var state_28365__$1 = (function (){var statearr_28371 = state_28365;
(statearr_28371[(13)] = inst_28306__$1);

return statearr_28371;
})();
if(cljs.core.truth_(inst_28307)){
var statearr_28372_28411 = state_28365__$1;
(statearr_28372_28411[(1)] = (5));

} else {
var statearr_28373_28412 = state_28365__$1;
(statearr_28373_28412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (15))){
var state_28365__$1 = state_28365;
var statearr_28377_28413 = state_28365__$1;
(statearr_28377_28413[(2)] = null);

(statearr_28377_28413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (21))){
var state_28365__$1 = state_28365;
var statearr_28378_28414 = state_28365__$1;
(statearr_28378_28414[(2)] = null);

(statearr_28378_28414[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (13))){
var inst_28317 = (state_28365[(8)]);
var inst_28318 = (state_28365[(10)]);
var inst_28320 = (state_28365[(11)]);
var inst_28319 = (state_28365[(12)]);
var inst_28327 = (state_28365[(2)]);
var inst_28328 = (inst_28320 + (1));
var tmp28374 = inst_28317;
var tmp28375 = inst_28318;
var tmp28376 = inst_28319;
var inst_28317__$1 = tmp28374;
var inst_28318__$1 = tmp28375;
var inst_28319__$1 = tmp28376;
var inst_28320__$1 = inst_28328;
var state_28365__$1 = (function (){var statearr_28379 = state_28365;
(statearr_28379[(8)] = inst_28317__$1);

(statearr_28379[(14)] = inst_28327);

(statearr_28379[(10)] = inst_28318__$1);

(statearr_28379[(11)] = inst_28320__$1);

(statearr_28379[(12)] = inst_28319__$1);

return statearr_28379;
})();
var statearr_28380_28415 = state_28365__$1;
(statearr_28380_28415[(2)] = null);

(statearr_28380_28415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (22))){
var state_28365__$1 = state_28365;
var statearr_28381_28416 = state_28365__$1;
(statearr_28381_28416[(2)] = null);

(statearr_28381_28416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (6))){
var inst_28306 = (state_28365[(13)]);
var inst_28315 = f.call(null,inst_28306);
var inst_28316 = cljs.core.seq.call(null,inst_28315);
var inst_28317 = inst_28316;
var inst_28318 = null;
var inst_28319 = (0);
var inst_28320 = (0);
var state_28365__$1 = (function (){var statearr_28382 = state_28365;
(statearr_28382[(8)] = inst_28317);

(statearr_28382[(10)] = inst_28318);

(statearr_28382[(11)] = inst_28320);

(statearr_28382[(12)] = inst_28319);

return statearr_28382;
})();
var statearr_28383_28417 = state_28365__$1;
(statearr_28383_28417[(2)] = null);

(statearr_28383_28417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (17))){
var inst_28331 = (state_28365[(7)]);
var inst_28335 = cljs.core.chunk_first.call(null,inst_28331);
var inst_28336 = cljs.core.chunk_rest.call(null,inst_28331);
var inst_28337 = cljs.core.count.call(null,inst_28335);
var inst_28317 = inst_28336;
var inst_28318 = inst_28335;
var inst_28319 = inst_28337;
var inst_28320 = (0);
var state_28365__$1 = (function (){var statearr_28384 = state_28365;
(statearr_28384[(8)] = inst_28317);

(statearr_28384[(10)] = inst_28318);

(statearr_28384[(11)] = inst_28320);

(statearr_28384[(12)] = inst_28319);

return statearr_28384;
})();
var statearr_28385_28418 = state_28365__$1;
(statearr_28385_28418[(2)] = null);

(statearr_28385_28418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (3))){
var inst_28363 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28365__$1,inst_28363);
} else {
if((state_val_28366 === (12))){
var inst_28351 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28386_28419 = state_28365__$1;
(statearr_28386_28419[(2)] = inst_28351);

(statearr_28386_28419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (2))){
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28365__$1,(4),in$);
} else {
if((state_val_28366 === (23))){
var inst_28359 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28387_28420 = state_28365__$1;
(statearr_28387_28420[(2)] = inst_28359);

(statearr_28387_28420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (19))){
var inst_28346 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28388_28421 = state_28365__$1;
(statearr_28388_28421[(2)] = inst_28346);

(statearr_28388_28421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (11))){
var inst_28317 = (state_28365[(8)]);
var inst_28331 = (state_28365[(7)]);
var inst_28331__$1 = cljs.core.seq.call(null,inst_28317);
var state_28365__$1 = (function (){var statearr_28389 = state_28365;
(statearr_28389[(7)] = inst_28331__$1);

return statearr_28389;
})();
if(inst_28331__$1){
var statearr_28390_28422 = state_28365__$1;
(statearr_28390_28422[(1)] = (14));

} else {
var statearr_28391_28423 = state_28365__$1;
(statearr_28391_28423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (9))){
var inst_28353 = (state_28365[(2)]);
var inst_28354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28365__$1 = (function (){var statearr_28392 = state_28365;
(statearr_28392[(15)] = inst_28353);

return statearr_28392;
})();
if(cljs.core.truth_(inst_28354)){
var statearr_28393_28424 = state_28365__$1;
(statearr_28393_28424[(1)] = (21));

} else {
var statearr_28394_28425 = state_28365__$1;
(statearr_28394_28425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (5))){
var inst_28309 = cljs.core.async.close_BANG_.call(null,out);
var state_28365__$1 = state_28365;
var statearr_28395_28426 = state_28365__$1;
(statearr_28395_28426[(2)] = inst_28309);

(statearr_28395_28426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (14))){
var inst_28331 = (state_28365[(7)]);
var inst_28333 = cljs.core.chunked_seq_QMARK_.call(null,inst_28331);
var state_28365__$1 = state_28365;
if(inst_28333){
var statearr_28396_28427 = state_28365__$1;
(statearr_28396_28427[(1)] = (17));

} else {
var statearr_28397_28428 = state_28365__$1;
(statearr_28397_28428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (16))){
var inst_28349 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28398_28429 = state_28365__$1;
(statearr_28398_28429[(2)] = inst_28349);

(statearr_28398_28429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (10))){
var inst_28318 = (state_28365[(10)]);
var inst_28320 = (state_28365[(11)]);
var inst_28325 = cljs.core._nth.call(null,inst_28318,inst_28320);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28365__$1,(13),out,inst_28325);
} else {
if((state_val_28366 === (18))){
var inst_28331 = (state_28365[(7)]);
var inst_28340 = cljs.core.first.call(null,inst_28331);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28365__$1,(20),out,inst_28340);
} else {
if((state_val_28366 === (8))){
var inst_28320 = (state_28365[(11)]);
var inst_28319 = (state_28365[(12)]);
var inst_28322 = (inst_28320 < inst_28319);
var inst_28323 = inst_28322;
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28323)){
var statearr_28399_28430 = state_28365__$1;
(statearr_28399_28430[(1)] = (10));

} else {
var statearr_28400_28431 = state_28365__$1;
(statearr_28400_28431[(1)] = (11));

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
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19524__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19524__auto____0 = (function (){
var statearr_28404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28404[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19524__auto__);

(statearr_28404[(1)] = (1));

return statearr_28404;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19524__auto____1 = (function (state_28365){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28405){if((e28405 instanceof Object)){
var ex__19527__auto__ = e28405;
var statearr_28406_28432 = state_28365;
(statearr_28406_28432[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28433 = state_28365;
state_28365 = G__28433;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19524__auto__ = function(state_28365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19524__auto____1.call(this,state_28365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19524__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19524__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_28407 = f__19589__auto__.call(null);
(statearr_28407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28434 = [];
var len__17566__auto___28437 = arguments.length;
var i__17567__auto___28438 = (0);
while(true){
if((i__17567__auto___28438 < len__17566__auto___28437)){
args28434.push((arguments[i__17567__auto___28438]));

var G__28439 = (i__17567__auto___28438 + (1));
i__17567__auto___28438 = G__28439;
continue;
} else {
}
break;
}

var G__28436 = args28434.length;
switch (G__28436) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28434.length)].join('')));

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
var args28441 = [];
var len__17566__auto___28444 = arguments.length;
var i__17567__auto___28445 = (0);
while(true){
if((i__17567__auto___28445 < len__17566__auto___28444)){
args28441.push((arguments[i__17567__auto___28445]));

var G__28446 = (i__17567__auto___28445 + (1));
i__17567__auto___28445 = G__28446;
continue;
} else {
}
break;
}

var G__28443 = args28441.length;
switch (G__28443) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28441.length)].join('')));

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
var args28448 = [];
var len__17566__auto___28499 = arguments.length;
var i__17567__auto___28500 = (0);
while(true){
if((i__17567__auto___28500 < len__17566__auto___28499)){
args28448.push((arguments[i__17567__auto___28500]));

var G__28501 = (i__17567__auto___28500 + (1));
i__17567__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28450 = args28448.length;
switch (G__28450) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28448.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19588__auto___28503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___28503,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___28503,out){
return (function (state_28474){
var state_val_28475 = (state_28474[(1)]);
if((state_val_28475 === (7))){
var inst_28469 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28476_28504 = state_28474__$1;
(statearr_28476_28504[(2)] = inst_28469);

(statearr_28476_28504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (1))){
var inst_28451 = null;
var state_28474__$1 = (function (){var statearr_28477 = state_28474;
(statearr_28477[(7)] = inst_28451);

return statearr_28477;
})();
var statearr_28478_28505 = state_28474__$1;
(statearr_28478_28505[(2)] = null);

(statearr_28478_28505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (4))){
var inst_28454 = (state_28474[(8)]);
var inst_28454__$1 = (state_28474[(2)]);
var inst_28455 = (inst_28454__$1 == null);
var inst_28456 = cljs.core.not.call(null,inst_28455);
var state_28474__$1 = (function (){var statearr_28479 = state_28474;
(statearr_28479[(8)] = inst_28454__$1);

return statearr_28479;
})();
if(inst_28456){
var statearr_28480_28506 = state_28474__$1;
(statearr_28480_28506[(1)] = (5));

} else {
var statearr_28481_28507 = state_28474__$1;
(statearr_28481_28507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (6))){
var state_28474__$1 = state_28474;
var statearr_28482_28508 = state_28474__$1;
(statearr_28482_28508[(2)] = null);

(statearr_28482_28508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (3))){
var inst_28471 = (state_28474[(2)]);
var inst_28472 = cljs.core.async.close_BANG_.call(null,out);
var state_28474__$1 = (function (){var statearr_28483 = state_28474;
(statearr_28483[(9)] = inst_28471);

return statearr_28483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28474__$1,inst_28472);
} else {
if((state_val_28475 === (2))){
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28474__$1,(4),ch);
} else {
if((state_val_28475 === (11))){
var inst_28454 = (state_28474[(8)]);
var inst_28463 = (state_28474[(2)]);
var inst_28451 = inst_28454;
var state_28474__$1 = (function (){var statearr_28484 = state_28474;
(statearr_28484[(10)] = inst_28463);

(statearr_28484[(7)] = inst_28451);

return statearr_28484;
})();
var statearr_28485_28509 = state_28474__$1;
(statearr_28485_28509[(2)] = null);

(statearr_28485_28509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (9))){
var inst_28454 = (state_28474[(8)]);
var state_28474__$1 = state_28474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28474__$1,(11),out,inst_28454);
} else {
if((state_val_28475 === (5))){
var inst_28451 = (state_28474[(7)]);
var inst_28454 = (state_28474[(8)]);
var inst_28458 = cljs.core._EQ_.call(null,inst_28454,inst_28451);
var state_28474__$1 = state_28474;
if(inst_28458){
var statearr_28487_28510 = state_28474__$1;
(statearr_28487_28510[(1)] = (8));

} else {
var statearr_28488_28511 = state_28474__$1;
(statearr_28488_28511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (10))){
var inst_28466 = (state_28474[(2)]);
var state_28474__$1 = state_28474;
var statearr_28489_28512 = state_28474__$1;
(statearr_28489_28512[(2)] = inst_28466);

(statearr_28489_28512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28475 === (8))){
var inst_28451 = (state_28474[(7)]);
var tmp28486 = inst_28451;
var inst_28451__$1 = tmp28486;
var state_28474__$1 = (function (){var statearr_28490 = state_28474;
(statearr_28490[(7)] = inst_28451__$1);

return statearr_28490;
})();
var statearr_28491_28513 = state_28474__$1;
(statearr_28491_28513[(2)] = null);

(statearr_28491_28513[(1)] = (2));


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
});})(c__19588__auto___28503,out))
;
return ((function (switch__19523__auto__,c__19588__auto___28503,out){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28495[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_28474){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28496){if((e28496 instanceof Object)){
var ex__19527__auto__ = e28496;
var statearr_28497_28514 = state_28474;
(statearr_28497_28514[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28515 = state_28474;
state_28474 = G__28515;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_28474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_28474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___28503,out))
})();
var state__19590__auto__ = (function (){var statearr_28498 = f__19589__auto__.call(null);
(statearr_28498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___28503);

return statearr_28498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___28503,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28516 = [];
var len__17566__auto___28586 = arguments.length;
var i__17567__auto___28587 = (0);
while(true){
if((i__17567__auto___28587 < len__17566__auto___28586)){
args28516.push((arguments[i__17567__auto___28587]));

var G__28588 = (i__17567__auto___28587 + (1));
i__17567__auto___28587 = G__28588;
continue;
} else {
}
break;
}

var G__28518 = args28516.length;
switch (G__28518) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28516.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19588__auto___28590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___28590,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___28590,out){
return (function (state_28556){
var state_val_28557 = (state_28556[(1)]);
if((state_val_28557 === (7))){
var inst_28552 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
var statearr_28558_28591 = state_28556__$1;
(statearr_28558_28591[(2)] = inst_28552);

(statearr_28558_28591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (1))){
var inst_28519 = (new Array(n));
var inst_28520 = inst_28519;
var inst_28521 = (0);
var state_28556__$1 = (function (){var statearr_28559 = state_28556;
(statearr_28559[(7)] = inst_28521);

(statearr_28559[(8)] = inst_28520);

return statearr_28559;
})();
var statearr_28560_28592 = state_28556__$1;
(statearr_28560_28592[(2)] = null);

(statearr_28560_28592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (4))){
var inst_28524 = (state_28556[(9)]);
var inst_28524__$1 = (state_28556[(2)]);
var inst_28525 = (inst_28524__$1 == null);
var inst_28526 = cljs.core.not.call(null,inst_28525);
var state_28556__$1 = (function (){var statearr_28561 = state_28556;
(statearr_28561[(9)] = inst_28524__$1);

return statearr_28561;
})();
if(inst_28526){
var statearr_28562_28593 = state_28556__$1;
(statearr_28562_28593[(1)] = (5));

} else {
var statearr_28563_28594 = state_28556__$1;
(statearr_28563_28594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (15))){
var inst_28546 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
var statearr_28564_28595 = state_28556__$1;
(statearr_28564_28595[(2)] = inst_28546);

(statearr_28564_28595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (13))){
var state_28556__$1 = state_28556;
var statearr_28565_28596 = state_28556__$1;
(statearr_28565_28596[(2)] = null);

(statearr_28565_28596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (6))){
var inst_28521 = (state_28556[(7)]);
var inst_28542 = (inst_28521 > (0));
var state_28556__$1 = state_28556;
if(cljs.core.truth_(inst_28542)){
var statearr_28566_28597 = state_28556__$1;
(statearr_28566_28597[(1)] = (12));

} else {
var statearr_28567_28598 = state_28556__$1;
(statearr_28567_28598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (3))){
var inst_28554 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28556__$1,inst_28554);
} else {
if((state_val_28557 === (12))){
var inst_28520 = (state_28556[(8)]);
var inst_28544 = cljs.core.vec.call(null,inst_28520);
var state_28556__$1 = state_28556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28556__$1,(15),out,inst_28544);
} else {
if((state_val_28557 === (2))){
var state_28556__$1 = state_28556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28556__$1,(4),ch);
} else {
if((state_val_28557 === (11))){
var inst_28536 = (state_28556[(2)]);
var inst_28537 = (new Array(n));
var inst_28520 = inst_28537;
var inst_28521 = (0);
var state_28556__$1 = (function (){var statearr_28568 = state_28556;
(statearr_28568[(7)] = inst_28521);

(statearr_28568[(8)] = inst_28520);

(statearr_28568[(10)] = inst_28536);

return statearr_28568;
})();
var statearr_28569_28599 = state_28556__$1;
(statearr_28569_28599[(2)] = null);

(statearr_28569_28599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (9))){
var inst_28520 = (state_28556[(8)]);
var inst_28534 = cljs.core.vec.call(null,inst_28520);
var state_28556__$1 = state_28556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28556__$1,(11),out,inst_28534);
} else {
if((state_val_28557 === (5))){
var inst_28521 = (state_28556[(7)]);
var inst_28520 = (state_28556[(8)]);
var inst_28529 = (state_28556[(11)]);
var inst_28524 = (state_28556[(9)]);
var inst_28528 = (inst_28520[inst_28521] = inst_28524);
var inst_28529__$1 = (inst_28521 + (1));
var inst_28530 = (inst_28529__$1 < n);
var state_28556__$1 = (function (){var statearr_28570 = state_28556;
(statearr_28570[(11)] = inst_28529__$1);

(statearr_28570[(12)] = inst_28528);

return statearr_28570;
})();
if(cljs.core.truth_(inst_28530)){
var statearr_28571_28600 = state_28556__$1;
(statearr_28571_28600[(1)] = (8));

} else {
var statearr_28572_28601 = state_28556__$1;
(statearr_28572_28601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (14))){
var inst_28549 = (state_28556[(2)]);
var inst_28550 = cljs.core.async.close_BANG_.call(null,out);
var state_28556__$1 = (function (){var statearr_28574 = state_28556;
(statearr_28574[(13)] = inst_28549);

return statearr_28574;
})();
var statearr_28575_28602 = state_28556__$1;
(statearr_28575_28602[(2)] = inst_28550);

(statearr_28575_28602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (10))){
var inst_28540 = (state_28556[(2)]);
var state_28556__$1 = state_28556;
var statearr_28576_28603 = state_28556__$1;
(statearr_28576_28603[(2)] = inst_28540);

(statearr_28576_28603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28557 === (8))){
var inst_28520 = (state_28556[(8)]);
var inst_28529 = (state_28556[(11)]);
var tmp28573 = inst_28520;
var inst_28520__$1 = tmp28573;
var inst_28521 = inst_28529;
var state_28556__$1 = (function (){var statearr_28577 = state_28556;
(statearr_28577[(7)] = inst_28521);

(statearr_28577[(8)] = inst_28520__$1);

return statearr_28577;
})();
var statearr_28578_28604 = state_28556__$1;
(statearr_28578_28604[(2)] = null);

(statearr_28578_28604[(1)] = (2));


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
});})(c__19588__auto___28590,out))
;
return ((function (switch__19523__auto__,c__19588__auto___28590,out){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_28582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28582[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_28582[(1)] = (1));

return statearr_28582;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_28556){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28583){if((e28583 instanceof Object)){
var ex__19527__auto__ = e28583;
var statearr_28584_28605 = state_28556;
(statearr_28584_28605[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28606 = state_28556;
state_28556 = G__28606;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_28556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_28556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___28590,out))
})();
var state__19590__auto__ = (function (){var statearr_28585 = f__19589__auto__.call(null);
(statearr_28585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___28590);

return statearr_28585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___28590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28607 = [];
var len__17566__auto___28681 = arguments.length;
var i__17567__auto___28682 = (0);
while(true){
if((i__17567__auto___28682 < len__17566__auto___28681)){
args28607.push((arguments[i__17567__auto___28682]));

var G__28683 = (i__17567__auto___28682 + (1));
i__17567__auto___28682 = G__28683;
continue;
} else {
}
break;
}

var G__28609 = args28607.length;
switch (G__28609) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28607.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19588__auto___28685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___28685,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___28685,out){
return (function (state_28651){
var state_val_28652 = (state_28651[(1)]);
if((state_val_28652 === (7))){
var inst_28647 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28653_28686 = state_28651__$1;
(statearr_28653_28686[(2)] = inst_28647);

(statearr_28653_28686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (1))){
var inst_28610 = [];
var inst_28611 = inst_28610;
var inst_28612 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28651__$1 = (function (){var statearr_28654 = state_28651;
(statearr_28654[(7)] = inst_28611);

(statearr_28654[(8)] = inst_28612);

return statearr_28654;
})();
var statearr_28655_28687 = state_28651__$1;
(statearr_28655_28687[(2)] = null);

(statearr_28655_28687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (4))){
var inst_28615 = (state_28651[(9)]);
var inst_28615__$1 = (state_28651[(2)]);
var inst_28616 = (inst_28615__$1 == null);
var inst_28617 = cljs.core.not.call(null,inst_28616);
var state_28651__$1 = (function (){var statearr_28656 = state_28651;
(statearr_28656[(9)] = inst_28615__$1);

return statearr_28656;
})();
if(inst_28617){
var statearr_28657_28688 = state_28651__$1;
(statearr_28657_28688[(1)] = (5));

} else {
var statearr_28658_28689 = state_28651__$1;
(statearr_28658_28689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (15))){
var inst_28641 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28659_28690 = state_28651__$1;
(statearr_28659_28690[(2)] = inst_28641);

(statearr_28659_28690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (13))){
var state_28651__$1 = state_28651;
var statearr_28660_28691 = state_28651__$1;
(statearr_28660_28691[(2)] = null);

(statearr_28660_28691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (6))){
var inst_28611 = (state_28651[(7)]);
var inst_28636 = inst_28611.length;
var inst_28637 = (inst_28636 > (0));
var state_28651__$1 = state_28651;
if(cljs.core.truth_(inst_28637)){
var statearr_28661_28692 = state_28651__$1;
(statearr_28661_28692[(1)] = (12));

} else {
var statearr_28662_28693 = state_28651__$1;
(statearr_28662_28693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (3))){
var inst_28649 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28651__$1,inst_28649);
} else {
if((state_val_28652 === (12))){
var inst_28611 = (state_28651[(7)]);
var inst_28639 = cljs.core.vec.call(null,inst_28611);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28651__$1,(15),out,inst_28639);
} else {
if((state_val_28652 === (2))){
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28651__$1,(4),ch);
} else {
if((state_val_28652 === (11))){
var inst_28619 = (state_28651[(10)]);
var inst_28615 = (state_28651[(9)]);
var inst_28629 = (state_28651[(2)]);
var inst_28630 = [];
var inst_28631 = inst_28630.push(inst_28615);
var inst_28611 = inst_28630;
var inst_28612 = inst_28619;
var state_28651__$1 = (function (){var statearr_28663 = state_28651;
(statearr_28663[(11)] = inst_28631);

(statearr_28663[(7)] = inst_28611);

(statearr_28663[(8)] = inst_28612);

(statearr_28663[(12)] = inst_28629);

return statearr_28663;
})();
var statearr_28664_28694 = state_28651__$1;
(statearr_28664_28694[(2)] = null);

(statearr_28664_28694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (9))){
var inst_28611 = (state_28651[(7)]);
var inst_28627 = cljs.core.vec.call(null,inst_28611);
var state_28651__$1 = state_28651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28651__$1,(11),out,inst_28627);
} else {
if((state_val_28652 === (5))){
var inst_28612 = (state_28651[(8)]);
var inst_28619 = (state_28651[(10)]);
var inst_28615 = (state_28651[(9)]);
var inst_28619__$1 = f.call(null,inst_28615);
var inst_28620 = cljs.core._EQ_.call(null,inst_28619__$1,inst_28612);
var inst_28621 = cljs.core.keyword_identical_QMARK_.call(null,inst_28612,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28622 = (inst_28620) || (inst_28621);
var state_28651__$1 = (function (){var statearr_28665 = state_28651;
(statearr_28665[(10)] = inst_28619__$1);

return statearr_28665;
})();
if(cljs.core.truth_(inst_28622)){
var statearr_28666_28695 = state_28651__$1;
(statearr_28666_28695[(1)] = (8));

} else {
var statearr_28667_28696 = state_28651__$1;
(statearr_28667_28696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (14))){
var inst_28644 = (state_28651[(2)]);
var inst_28645 = cljs.core.async.close_BANG_.call(null,out);
var state_28651__$1 = (function (){var statearr_28669 = state_28651;
(statearr_28669[(13)] = inst_28644);

return statearr_28669;
})();
var statearr_28670_28697 = state_28651__$1;
(statearr_28670_28697[(2)] = inst_28645);

(statearr_28670_28697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (10))){
var inst_28634 = (state_28651[(2)]);
var state_28651__$1 = state_28651;
var statearr_28671_28698 = state_28651__$1;
(statearr_28671_28698[(2)] = inst_28634);

(statearr_28671_28698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28652 === (8))){
var inst_28611 = (state_28651[(7)]);
var inst_28619 = (state_28651[(10)]);
var inst_28615 = (state_28651[(9)]);
var inst_28624 = inst_28611.push(inst_28615);
var tmp28668 = inst_28611;
var inst_28611__$1 = tmp28668;
var inst_28612 = inst_28619;
var state_28651__$1 = (function (){var statearr_28672 = state_28651;
(statearr_28672[(7)] = inst_28611__$1);

(statearr_28672[(8)] = inst_28612);

(statearr_28672[(14)] = inst_28624);

return statearr_28672;
})();
var statearr_28673_28699 = state_28651__$1;
(statearr_28673_28699[(2)] = null);

(statearr_28673_28699[(1)] = (2));


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
});})(c__19588__auto___28685,out))
;
return ((function (switch__19523__auto__,c__19588__auto___28685,out){
return (function() {
var cljs$core$async$state_machine__19524__auto__ = null;
var cljs$core$async$state_machine__19524__auto____0 = (function (){
var statearr_28677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28677[(0)] = cljs$core$async$state_machine__19524__auto__);

(statearr_28677[(1)] = (1));

return statearr_28677;
});
var cljs$core$async$state_machine__19524__auto____1 = (function (state_28651){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_28651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e28678){if((e28678 instanceof Object)){
var ex__19527__auto__ = e28678;
var statearr_28679_28700 = state_28651;
(statearr_28679_28700[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28701 = state_28651;
state_28651 = G__28701;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
cljs$core$async$state_machine__19524__auto__ = function(state_28651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19524__auto____1.call(this,state_28651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19524__auto____0;
cljs$core$async$state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19524__auto____1;
return cljs$core$async$state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___28685,out))
})();
var state__19590__auto__ = (function (){var statearr_28680 = f__19589__auto__.call(null);
(statearr_28680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___28685);

return statearr_28680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___28685,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map