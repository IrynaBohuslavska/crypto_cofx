goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46574 = arguments.length;
switch (G__46574) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46575 = (function (f,blockable,meta46576){
this.f = f;
this.blockable = blockable;
this.meta46576 = meta46576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46577,meta46576__$1){
var self__ = this;
var _46577__$1 = this;
return (new cljs.core.async.t_cljs$core$async46575(self__.f,self__.blockable,meta46576__$1));
}));

(cljs.core.async.t_cljs$core$async46575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46577){
var self__ = this;
var _46577__$1 = this;
return self__.meta46576;
}));

(cljs.core.async.t_cljs$core$async46575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46576","meta46576",-668146545,null)], null);
}));

(cljs.core.async.t_cljs$core$async46575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46575");

(cljs.core.async.t_cljs$core$async46575.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46575.
 */
cljs.core.async.__GT_t_cljs$core$async46575 = (function cljs$core$async$__GT_t_cljs$core$async46575(f__$1,blockable__$1,meta46576){
return (new cljs.core.async.t_cljs$core$async46575(f__$1,blockable__$1,meta46576));
});

}

return (new cljs.core.async.t_cljs$core$async46575(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__46588 = arguments.length;
switch (G__46588) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46590 = arguments.length;
switch (G__46590) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__46596 = arguments.length;
switch (G__46596) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48719 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48719) : fn1.call(null,val_48719));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48719) : fn1.call(null,val_48719));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46602 = arguments.length;
switch (G__46602) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___48721 = n;
var x_48722 = (0);
while(true){
if((x_48722 < n__4706__auto___48721)){
(a[x_48722] = x_48722);

var G__48723 = (x_48722 + (1));
x_48722 = G__48723;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46603 = (function (flag,meta46604){
this.flag = flag;
this.meta46604 = meta46604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46605,meta46604__$1){
var self__ = this;
var _46605__$1 = this;
return (new cljs.core.async.t_cljs$core$async46603(self__.flag,meta46604__$1));
}));

(cljs.core.async.t_cljs$core$async46603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46605){
var self__ = this;
var _46605__$1 = this;
return self__.meta46604;
}));

(cljs.core.async.t_cljs$core$async46603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46604","meta46604",2099782040,null)], null);
}));

(cljs.core.async.t_cljs$core$async46603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46603");

(cljs.core.async.t_cljs$core$async46603.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46603.
 */
cljs.core.async.__GT_t_cljs$core$async46603 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46603(flag__$1,meta46604){
return (new cljs.core.async.t_cljs$core$async46603(flag__$1,meta46604));
});

}

return (new cljs.core.async.t_cljs$core$async46603(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46608 = (function (flag,cb,meta46609){
this.flag = flag;
this.cb = cb;
this.meta46609 = meta46609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46610,meta46609__$1){
var self__ = this;
var _46610__$1 = this;
return (new cljs.core.async.t_cljs$core$async46608(self__.flag,self__.cb,meta46609__$1));
}));

(cljs.core.async.t_cljs$core$async46608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46610){
var self__ = this;
var _46610__$1 = this;
return self__.meta46609;
}));

(cljs.core.async.t_cljs$core$async46608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46609","meta46609",174273147,null)], null);
}));

(cljs.core.async.t_cljs$core$async46608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46608");

(cljs.core.async.t_cljs$core$async46608.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46608.
 */
cljs.core.async.__GT_t_cljs$core$async46608 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46608(flag__$1,cb__$1,meta46609){
return (new cljs.core.async.t_cljs$core$async46608(flag__$1,cb__$1,meta46609));
});

}

return (new cljs.core.async.t_cljs$core$async46608(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46620_SHARP_){
var G__46628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46620_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46628) : fret.call(null,G__46628));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46621_SHARP_){
var G__46629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46621_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46629) : fret.call(null,G__46629));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48727 = (i + (1));
i = G__48727;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4835__auto__ = [];
var len__4829__auto___48728 = arguments.length;
var i__4830__auto___48729 = (0);
while(true){
if((i__4830__auto___48729 < len__4829__auto___48728)){
args__4835__auto__.push((arguments[i__4830__auto___48729]));

var G__48730 = (i__4830__auto___48729 + (1));
i__4830__auto___48729 = G__48730;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46637){
var map__46638 = p__46637;
var map__46638__$1 = cljs.core.__destructure_map(map__46638);
var opts = map__46638__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46633){
var G__46634 = cljs.core.first(seq46633);
var seq46633__$1 = cljs.core.next(seq46633);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46634,seq46633__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46643 = arguments.length;
switch (G__46643) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46492__auto___48736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_46667){
var state_val_46668 = (state_46667[(1)]);
if((state_val_46668 === (7))){
var inst_46663 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46669_48737 = state_46667__$1;
(statearr_46669_48737[(2)] = inst_46663);

(statearr_46669_48737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (1))){
var state_46667__$1 = state_46667;
var statearr_46670_48738 = state_46667__$1;
(statearr_46670_48738[(2)] = null);

(statearr_46670_48738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (4))){
var inst_46646 = (state_46667[(7)]);
var inst_46646__$1 = (state_46667[(2)]);
var inst_46647 = (inst_46646__$1 == null);
var state_46667__$1 = (function (){var statearr_46672 = state_46667;
(statearr_46672[(7)] = inst_46646__$1);

return statearr_46672;
})();
if(cljs.core.truth_(inst_46647)){
var statearr_46673_48739 = state_46667__$1;
(statearr_46673_48739[(1)] = (5));

} else {
var statearr_46674_48740 = state_46667__$1;
(statearr_46674_48740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (13))){
var state_46667__$1 = state_46667;
var statearr_46675_48741 = state_46667__$1;
(statearr_46675_48741[(2)] = null);

(statearr_46675_48741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (6))){
var inst_46646 = (state_46667[(7)]);
var state_46667__$1 = state_46667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46667__$1,(11),to,inst_46646);
} else {
if((state_val_46668 === (3))){
var inst_46665 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46667__$1,inst_46665);
} else {
if((state_val_46668 === (12))){
var state_46667__$1 = state_46667;
var statearr_46676_48744 = state_46667__$1;
(statearr_46676_48744[(2)] = null);

(statearr_46676_48744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (2))){
var state_46667__$1 = state_46667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46667__$1,(4),from);
} else {
if((state_val_46668 === (11))){
var inst_46656 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
if(cljs.core.truth_(inst_46656)){
var statearr_46677_48745 = state_46667__$1;
(statearr_46677_48745[(1)] = (12));

} else {
var statearr_46678_48746 = state_46667__$1;
(statearr_46678_48746[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (9))){
var state_46667__$1 = state_46667;
var statearr_46679_48747 = state_46667__$1;
(statearr_46679_48747[(2)] = null);

(statearr_46679_48747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (5))){
var state_46667__$1 = state_46667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46680_48748 = state_46667__$1;
(statearr_46680_48748[(1)] = (8));

} else {
var statearr_46681_48749 = state_46667__$1;
(statearr_46681_48749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (14))){
var inst_46661 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46686_48750 = state_46667__$1;
(statearr_46686_48750[(2)] = inst_46661);

(statearr_46686_48750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (10))){
var inst_46653 = (state_46667[(2)]);
var state_46667__$1 = state_46667;
var statearr_46695_48751 = state_46667__$1;
(statearr_46695_48751[(2)] = inst_46653);

(statearr_46695_48751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46668 === (8))){
var inst_46650 = cljs.core.async.close_BANG_(to);
var state_46667__$1 = state_46667;
var statearr_46707_48752 = state_46667__$1;
(statearr_46707_48752[(2)] = inst_46650);

(statearr_46707_48752[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_46708 = [null,null,null,null,null,null,null,null];
(statearr_46708[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_46708[(1)] = (1));

return statearr_46708;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_46667){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_46667);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e46709){var ex__46406__auto__ = e46709;
var statearr_46710_48754 = state_46667;
(statearr_46710_48754[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_46667[(4)]))){
var statearr_46711_48755 = state_46667;
(statearr_46711_48755[(1)] = cljs.core.first((state_46667[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48757 = state_46667;
state_46667 = G__48757;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_46667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_46667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_46713 = f__46493__auto__();
(statearr_46713[(6)] = c__46492__auto___48736);

return statearr_46713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46716){
var vec__46721 = p__46716;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46721,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46721,(1),null);
var job = vec__46721;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46492__auto___48758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_46745){
var state_val_46746 = (state_46745[(1)]);
if((state_val_46746 === (1))){
var state_46745__$1 = state_46745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46745__$1,(2),res,v);
} else {
if((state_val_46746 === (2))){
var inst_46738 = (state_46745[(2)]);
var inst_46743 = cljs.core.async.close_BANG_(res);
var state_46745__$1 = (function (){var statearr_46751 = state_46745;
(statearr_46751[(7)] = inst_46738);

return statearr_46751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46745__$1,inst_46743);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0 = (function (){
var statearr_46764 = [null,null,null,null,null,null,null,null];
(statearr_46764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__);

(statearr_46764[(1)] = (1));

return statearr_46764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1 = (function (state_46745){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_46745);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e46770){var ex__46406__auto__ = e46770;
var statearr_46771_48761 = state_46745;
(statearr_46771_48761[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_46745[(4)]))){
var statearr_46772_48762 = state_46745;
(statearr_46772_48762[(1)] = cljs.core.first((state_46745[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48763 = state_46745;
state_46745 = G__48763;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = function(state_46745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1.call(this,state_46745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_46785 = f__46493__auto__();
(statearr_46785[(6)] = c__46492__auto___48758);

return statearr_46785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46795){
var vec__46796 = p__46795;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46796,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46796,(1),null);
var job = vec__46796;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___48764 = n;
var __48765 = (0);
while(true){
if((__48765 < n__4706__auto___48764)){
var G__46799_48766 = type;
var G__46799_48767__$1 = (((G__46799_48766 instanceof cljs.core.Keyword))?G__46799_48766.fqn:null);
switch (G__46799_48767__$1) {
case "compute":
var c__46492__auto___48769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48765,c__46492__auto___48769,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async){
return (function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = ((function (__48765,c__46492__auto___48769,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async){
return (function (state_46813){
var state_val_46814 = (state_46813[(1)]);
if((state_val_46814 === (1))){
var state_46813__$1 = state_46813;
var statearr_46815_48770 = state_46813__$1;
(statearr_46815_48770[(2)] = null);

(statearr_46815_48770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46814 === (2))){
var state_46813__$1 = state_46813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46813__$1,(4),jobs);
} else {
if((state_val_46814 === (3))){
var inst_46811 = (state_46813[(2)]);
var state_46813__$1 = state_46813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46813__$1,inst_46811);
} else {
if((state_val_46814 === (4))){
var inst_46802 = (state_46813[(2)]);
var inst_46803 = process(inst_46802);
var state_46813__$1 = state_46813;
if(cljs.core.truth_(inst_46803)){
var statearr_46817_48772 = state_46813__$1;
(statearr_46817_48772[(1)] = (5));

} else {
var statearr_46818_48773 = state_46813__$1;
(statearr_46818_48773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46814 === (5))){
var state_46813__$1 = state_46813;
var statearr_46823_48774 = state_46813__$1;
(statearr_46823_48774[(2)] = null);

(statearr_46823_48774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46814 === (6))){
var state_46813__$1 = state_46813;
var statearr_46829_48775 = state_46813__$1;
(statearr_46829_48775[(2)] = null);

(statearr_46829_48775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46814 === (7))){
var inst_46809 = (state_46813[(2)]);
var state_46813__$1 = state_46813;
var statearr_46834_48776 = state_46813__$1;
(statearr_46834_48776[(2)] = inst_46809);

(statearr_46834_48776[(1)] = (3));


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
});})(__48765,c__46492__auto___48769,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async))
;
return ((function (__48765,switch__46402__auto__,c__46492__auto___48769,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0 = (function (){
var statearr_46836 = [null,null,null,null,null,null,null];
(statearr_46836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__);

(statearr_46836[(1)] = (1));

return statearr_46836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1 = (function (state_46813){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_46813);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e46837){var ex__46406__auto__ = e46837;
var statearr_46838_48777 = state_46813;
(statearr_46838_48777[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_46813[(4)]))){
var statearr_46839_48778 = state_46813;
(statearr_46839_48778[(1)] = cljs.core.first((state_46813[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48783 = state_46813;
state_46813 = G__48783;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = function(state_46813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1.call(this,state_46813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__;
})()
;})(__48765,switch__46402__auto__,c__46492__auto___48769,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async))
})();
var state__46494__auto__ = (function (){var statearr_46840 = f__46493__auto__();
(statearr_46840[(6)] = c__46492__auto___48769);

return statearr_46840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
});})(__48765,c__46492__auto___48769,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async))
);


break;
case "async":
var c__46492__auto___48784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48765,c__46492__auto___48784,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async){
return (function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = ((function (__48765,c__46492__auto___48784,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async){
return (function (state_46854){
var state_val_46855 = (state_46854[(1)]);
if((state_val_46855 === (1))){
var state_46854__$1 = state_46854;
var statearr_46856_48785 = state_46854__$1;
(statearr_46856_48785[(2)] = null);

(statearr_46856_48785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (2))){
var state_46854__$1 = state_46854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46854__$1,(4),jobs);
} else {
if((state_val_46855 === (3))){
var inst_46852 = (state_46854[(2)]);
var state_46854__$1 = state_46854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46854__$1,inst_46852);
} else {
if((state_val_46855 === (4))){
var inst_46844 = (state_46854[(2)]);
var inst_46845 = async(inst_46844);
var state_46854__$1 = state_46854;
if(cljs.core.truth_(inst_46845)){
var statearr_46858_48786 = state_46854__$1;
(statearr_46858_48786[(1)] = (5));

} else {
var statearr_46859_48787 = state_46854__$1;
(statearr_46859_48787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (5))){
var state_46854__$1 = state_46854;
var statearr_46860_48788 = state_46854__$1;
(statearr_46860_48788[(2)] = null);

(statearr_46860_48788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (6))){
var state_46854__$1 = state_46854;
var statearr_46861_48789 = state_46854__$1;
(statearr_46861_48789[(2)] = null);

(statearr_46861_48789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46855 === (7))){
var inst_46850 = (state_46854[(2)]);
var state_46854__$1 = state_46854;
var statearr_46862_48790 = state_46854__$1;
(statearr_46862_48790[(2)] = inst_46850);

(statearr_46862_48790[(1)] = (3));


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
});})(__48765,c__46492__auto___48784,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async))
;
return ((function (__48765,switch__46402__auto__,c__46492__auto___48784,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0 = (function (){
var statearr_46863 = [null,null,null,null,null,null,null];
(statearr_46863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__);

(statearr_46863[(1)] = (1));

return statearr_46863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1 = (function (state_46854){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_46854);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e46864){var ex__46406__auto__ = e46864;
var statearr_46865_48791 = state_46854;
(statearr_46865_48791[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_46854[(4)]))){
var statearr_46866_48792 = state_46854;
(statearr_46866_48792[(1)] = cljs.core.first((state_46854[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48793 = state_46854;
state_46854 = G__48793;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = function(state_46854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1.call(this,state_46854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__;
})()
;})(__48765,switch__46402__auto__,c__46492__auto___48784,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async))
})();
var state__46494__auto__ = (function (){var statearr_46867 = f__46493__auto__();
(statearr_46867[(6)] = c__46492__auto___48784);

return statearr_46867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
});})(__48765,c__46492__auto___48784,G__46799_48766,G__46799_48767__$1,n__4706__auto___48764,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46799_48767__$1)].join('')));

}

var G__48794 = (__48765 + (1));
__48765 = G__48794;
continue;
} else {
}
break;
}

var c__46492__auto___48795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_46889){
var state_val_46890 = (state_46889[(1)]);
if((state_val_46890 === (7))){
var inst_46885 = (state_46889[(2)]);
var state_46889__$1 = state_46889;
var statearr_46891_48797 = state_46889__$1;
(statearr_46891_48797[(2)] = inst_46885);

(statearr_46891_48797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46890 === (1))){
var state_46889__$1 = state_46889;
var statearr_46892_48799 = state_46889__$1;
(statearr_46892_48799[(2)] = null);

(statearr_46892_48799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46890 === (4))){
var inst_46870 = (state_46889[(7)]);
var inst_46870__$1 = (state_46889[(2)]);
var inst_46871 = (inst_46870__$1 == null);
var state_46889__$1 = (function (){var statearr_46893 = state_46889;
(statearr_46893[(7)] = inst_46870__$1);

return statearr_46893;
})();
if(cljs.core.truth_(inst_46871)){
var statearr_46894_48800 = state_46889__$1;
(statearr_46894_48800[(1)] = (5));

} else {
var statearr_46895_48801 = state_46889__$1;
(statearr_46895_48801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46890 === (6))){
var inst_46875 = (state_46889[(8)]);
var inst_46870 = (state_46889[(7)]);
var inst_46875__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46877 = [inst_46870,inst_46875__$1];
var inst_46878 = (new cljs.core.PersistentVector(null,2,(5),inst_46876,inst_46877,null));
var state_46889__$1 = (function (){var statearr_46896 = state_46889;
(statearr_46896[(8)] = inst_46875__$1);

return statearr_46896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46889__$1,(8),jobs,inst_46878);
} else {
if((state_val_46890 === (3))){
var inst_46887 = (state_46889[(2)]);
var state_46889__$1 = state_46889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46889__$1,inst_46887);
} else {
if((state_val_46890 === (2))){
var state_46889__$1 = state_46889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46889__$1,(4),from);
} else {
if((state_val_46890 === (9))){
var inst_46882 = (state_46889[(2)]);
var state_46889__$1 = (function (){var statearr_46897 = state_46889;
(statearr_46897[(9)] = inst_46882);

return statearr_46897;
})();
var statearr_46898_48802 = state_46889__$1;
(statearr_46898_48802[(2)] = null);

(statearr_46898_48802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46890 === (5))){
var inst_46873 = cljs.core.async.close_BANG_(jobs);
var state_46889__$1 = state_46889;
var statearr_46899_48803 = state_46889__$1;
(statearr_46899_48803[(2)] = inst_46873);

(statearr_46899_48803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46890 === (8))){
var inst_46875 = (state_46889[(8)]);
var inst_46880 = (state_46889[(2)]);
var state_46889__$1 = (function (){var statearr_46900 = state_46889;
(statearr_46900[(10)] = inst_46880);

return statearr_46900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46889__$1,(9),results,inst_46875);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0 = (function (){
var statearr_46901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__);

(statearr_46901[(1)] = (1));

return statearr_46901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1 = (function (state_46889){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_46889);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e46902){var ex__46406__auto__ = e46902;
var statearr_46903_48804 = state_46889;
(statearr_46903_48804[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_46889[(4)]))){
var statearr_46904_48809 = state_46889;
(statearr_46904_48809[(1)] = cljs.core.first((state_46889[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48810 = state_46889;
state_46889 = G__48810;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = function(state_46889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1.call(this,state_46889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_46905 = f__46493__auto__();
(statearr_46905[(6)] = c__46492__auto___48795);

return statearr_46905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


var c__46492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_46943){
var state_val_46944 = (state_46943[(1)]);
if((state_val_46944 === (7))){
var inst_46939 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46945_48814 = state_46943__$1;
(statearr_46945_48814[(2)] = inst_46939);

(statearr_46945_48814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (20))){
var state_46943__$1 = state_46943;
var statearr_46946_48815 = state_46943__$1;
(statearr_46946_48815[(2)] = null);

(statearr_46946_48815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (1))){
var state_46943__$1 = state_46943;
var statearr_46947_48819 = state_46943__$1;
(statearr_46947_48819[(2)] = null);

(statearr_46947_48819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (4))){
var inst_46908 = (state_46943[(7)]);
var inst_46908__$1 = (state_46943[(2)]);
var inst_46909 = (inst_46908__$1 == null);
var state_46943__$1 = (function (){var statearr_46948 = state_46943;
(statearr_46948[(7)] = inst_46908__$1);

return statearr_46948;
})();
if(cljs.core.truth_(inst_46909)){
var statearr_46949_48820 = state_46943__$1;
(statearr_46949_48820[(1)] = (5));

} else {
var statearr_46950_48821 = state_46943__$1;
(statearr_46950_48821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (15))){
var inst_46921 = (state_46943[(8)]);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46943__$1,(18),to,inst_46921);
} else {
if((state_val_46944 === (21))){
var inst_46934 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46951_48825 = state_46943__$1;
(statearr_46951_48825[(2)] = inst_46934);

(statearr_46951_48825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (13))){
var inst_46936 = (state_46943[(2)]);
var state_46943__$1 = (function (){var statearr_46952 = state_46943;
(statearr_46952[(9)] = inst_46936);

return statearr_46952;
})();
var statearr_46953_48826 = state_46943__$1;
(statearr_46953_48826[(2)] = null);

(statearr_46953_48826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (6))){
var inst_46908 = (state_46943[(7)]);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46943__$1,(11),inst_46908);
} else {
if((state_val_46944 === (17))){
var inst_46929 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
if(cljs.core.truth_(inst_46929)){
var statearr_46954_48830 = state_46943__$1;
(statearr_46954_48830[(1)] = (19));

} else {
var statearr_46955_48831 = state_46943__$1;
(statearr_46955_48831[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (3))){
var inst_46941 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46943__$1,inst_46941);
} else {
if((state_val_46944 === (12))){
var inst_46918 = (state_46943[(10)]);
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46943__$1,(14),inst_46918);
} else {
if((state_val_46944 === (2))){
var state_46943__$1 = state_46943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46943__$1,(4),results);
} else {
if((state_val_46944 === (19))){
var state_46943__$1 = state_46943;
var statearr_46956_48832 = state_46943__$1;
(statearr_46956_48832[(2)] = null);

(statearr_46956_48832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (11))){
var inst_46918 = (state_46943[(2)]);
var state_46943__$1 = (function (){var statearr_46957 = state_46943;
(statearr_46957[(10)] = inst_46918);

return statearr_46957;
})();
var statearr_46958_48837 = state_46943__$1;
(statearr_46958_48837[(2)] = null);

(statearr_46958_48837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (9))){
var state_46943__$1 = state_46943;
var statearr_46959_48841 = state_46943__$1;
(statearr_46959_48841[(2)] = null);

(statearr_46959_48841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (5))){
var state_46943__$1 = state_46943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46960_48842 = state_46943__$1;
(statearr_46960_48842[(1)] = (8));

} else {
var statearr_46961_48843 = state_46943__$1;
(statearr_46961_48843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (14))){
var inst_46923 = (state_46943[(11)]);
var inst_46921 = (state_46943[(8)]);
var inst_46921__$1 = (state_46943[(2)]);
var inst_46922 = (inst_46921__$1 == null);
var inst_46923__$1 = cljs.core.not(inst_46922);
var state_46943__$1 = (function (){var statearr_46962 = state_46943;
(statearr_46962[(11)] = inst_46923__$1);

(statearr_46962[(8)] = inst_46921__$1);

return statearr_46962;
})();
if(inst_46923__$1){
var statearr_46963_48844 = state_46943__$1;
(statearr_46963_48844[(1)] = (15));

} else {
var statearr_46964_48845 = state_46943__$1;
(statearr_46964_48845[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (16))){
var inst_46923 = (state_46943[(11)]);
var state_46943__$1 = state_46943;
var statearr_46965_48849 = state_46943__$1;
(statearr_46965_48849[(2)] = inst_46923);

(statearr_46965_48849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (10))){
var inst_46915 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46966_48850 = state_46943__$1;
(statearr_46966_48850[(2)] = inst_46915);

(statearr_46966_48850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (18))){
var inst_46926 = (state_46943[(2)]);
var state_46943__$1 = state_46943;
var statearr_46967_48851 = state_46943__$1;
(statearr_46967_48851[(2)] = inst_46926);

(statearr_46967_48851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46944 === (8))){
var inst_46912 = cljs.core.async.close_BANG_(to);
var state_46943__$1 = state_46943;
var statearr_46968_48855 = state_46943__$1;
(statearr_46968_48855[(2)] = inst_46912);

(statearr_46968_48855[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0 = (function (){
var statearr_46969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__);

(statearr_46969[(1)] = (1));

return statearr_46969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1 = (function (state_46943){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_46943);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e46970){var ex__46406__auto__ = e46970;
var statearr_46971_48856 = state_46943;
(statearr_46971_48856[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_46943[(4)]))){
var statearr_46972_48857 = state_46943;
(statearr_46972_48857[(1)] = cljs.core.first((state_46943[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48858 = state_46943;
state_46943 = G__48858;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__ = function(state_46943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1.call(this,state_46943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46403__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_46973 = f__46493__auto__();
(statearr_46973[(6)] = c__46492__auto__);

return statearr_46973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));

return c__46492__auto__;
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
var G__46975 = arguments.length;
switch (G__46975) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__46977 = arguments.length;
switch (G__46977) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__46979 = arguments.length;
switch (G__46979) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46492__auto___48866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_47005){
var state_val_47006 = (state_47005[(1)]);
if((state_val_47006 === (7))){
var inst_47001 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47007_48867 = state_47005__$1;
(statearr_47007_48867[(2)] = inst_47001);

(statearr_47007_48867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (1))){
var state_47005__$1 = state_47005;
var statearr_47008_48868 = state_47005__$1;
(statearr_47008_48868[(2)] = null);

(statearr_47008_48868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (4))){
var inst_46982 = (state_47005[(7)]);
var inst_46982__$1 = (state_47005[(2)]);
var inst_46983 = (inst_46982__$1 == null);
var state_47005__$1 = (function (){var statearr_47009 = state_47005;
(statearr_47009[(7)] = inst_46982__$1);

return statearr_47009;
})();
if(cljs.core.truth_(inst_46983)){
var statearr_47010_48869 = state_47005__$1;
(statearr_47010_48869[(1)] = (5));

} else {
var statearr_47011_48870 = state_47005__$1;
(statearr_47011_48870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (13))){
var state_47005__$1 = state_47005;
var statearr_47012_48871 = state_47005__$1;
(statearr_47012_48871[(2)] = null);

(statearr_47012_48871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (6))){
var inst_46982 = (state_47005[(7)]);
var inst_46988 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46982) : p.call(null,inst_46982));
var state_47005__$1 = state_47005;
if(cljs.core.truth_(inst_46988)){
var statearr_47013_48872 = state_47005__$1;
(statearr_47013_48872[(1)] = (9));

} else {
var statearr_47014_48873 = state_47005__$1;
(statearr_47014_48873[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (3))){
var inst_47003 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47005__$1,inst_47003);
} else {
if((state_val_47006 === (12))){
var state_47005__$1 = state_47005;
var statearr_47015_48874 = state_47005__$1;
(statearr_47015_48874[(2)] = null);

(statearr_47015_48874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (2))){
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47005__$1,(4),ch);
} else {
if((state_val_47006 === (11))){
var inst_46982 = (state_47005[(7)]);
var inst_46992 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47005__$1,(8),inst_46992,inst_46982);
} else {
if((state_val_47006 === (9))){
var state_47005__$1 = state_47005;
var statearr_47016_48875 = state_47005__$1;
(statearr_47016_48875[(2)] = tc);

(statearr_47016_48875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (5))){
var inst_46985 = cljs.core.async.close_BANG_(tc);
var inst_46986 = cljs.core.async.close_BANG_(fc);
var state_47005__$1 = (function (){var statearr_47017 = state_47005;
(statearr_47017[(8)] = inst_46985);

return statearr_47017;
})();
var statearr_47018_48876 = state_47005__$1;
(statearr_47018_48876[(2)] = inst_46986);

(statearr_47018_48876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (14))){
var inst_46999 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47019_48877 = state_47005__$1;
(statearr_47019_48877[(2)] = inst_46999);

(statearr_47019_48877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (10))){
var state_47005__$1 = state_47005;
var statearr_47020_48878 = state_47005__$1;
(statearr_47020_48878[(2)] = fc);

(statearr_47020_48878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (8))){
var inst_46994 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
if(cljs.core.truth_(inst_46994)){
var statearr_47021_48879 = state_47005__$1;
(statearr_47021_48879[(1)] = (12));

} else {
var statearr_47022_48880 = state_47005__$1;
(statearr_47022_48880[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_47023 = [null,null,null,null,null,null,null,null,null];
(statearr_47023[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_47023[(1)] = (1));

return statearr_47023;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_47005){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_47005);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e47024){var ex__46406__auto__ = e47024;
var statearr_47025_48881 = state_47005;
(statearr_47025_48881[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_47005[(4)]))){
var statearr_47026_48882 = state_47005;
(statearr_47026_48882[(1)] = cljs.core.first((state_47005[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48883 = state_47005;
state_47005 = G__48883;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_47005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_47005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_47027 = f__46493__auto__();
(statearr_47027[(6)] = c__46492__auto___48866);

return statearr_47027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_47049){
var state_val_47050 = (state_47049[(1)]);
if((state_val_47050 === (7))){
var inst_47045 = (state_47049[(2)]);
var state_47049__$1 = state_47049;
var statearr_47051_48884 = state_47049__$1;
(statearr_47051_48884[(2)] = inst_47045);

(statearr_47051_48884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (1))){
var inst_47028 = init;
var inst_47029 = inst_47028;
var state_47049__$1 = (function (){var statearr_47052 = state_47049;
(statearr_47052[(7)] = inst_47029);

return statearr_47052;
})();
var statearr_47053_48885 = state_47049__$1;
(statearr_47053_48885[(2)] = null);

(statearr_47053_48885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (4))){
var inst_47032 = (state_47049[(8)]);
var inst_47032__$1 = (state_47049[(2)]);
var inst_47033 = (inst_47032__$1 == null);
var state_47049__$1 = (function (){var statearr_47054 = state_47049;
(statearr_47054[(8)] = inst_47032__$1);

return statearr_47054;
})();
if(cljs.core.truth_(inst_47033)){
var statearr_47055_48886 = state_47049__$1;
(statearr_47055_48886[(1)] = (5));

} else {
var statearr_47056_48887 = state_47049__$1;
(statearr_47056_48887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (6))){
var inst_47032 = (state_47049[(8)]);
var inst_47029 = (state_47049[(7)]);
var inst_47036 = (state_47049[(9)]);
var inst_47036__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47029,inst_47032) : f.call(null,inst_47029,inst_47032));
var inst_47037 = cljs.core.reduced_QMARK_(inst_47036__$1);
var state_47049__$1 = (function (){var statearr_47057 = state_47049;
(statearr_47057[(9)] = inst_47036__$1);

return statearr_47057;
})();
if(inst_47037){
var statearr_47058_48888 = state_47049__$1;
(statearr_47058_48888[(1)] = (8));

} else {
var statearr_47059_48889 = state_47049__$1;
(statearr_47059_48889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (3))){
var inst_47047 = (state_47049[(2)]);
var state_47049__$1 = state_47049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47049__$1,inst_47047);
} else {
if((state_val_47050 === (2))){
var state_47049__$1 = state_47049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47049__$1,(4),ch);
} else {
if((state_val_47050 === (9))){
var inst_47036 = (state_47049[(9)]);
var inst_47029 = inst_47036;
var state_47049__$1 = (function (){var statearr_47060 = state_47049;
(statearr_47060[(7)] = inst_47029);

return statearr_47060;
})();
var statearr_47061_48890 = state_47049__$1;
(statearr_47061_48890[(2)] = null);

(statearr_47061_48890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (5))){
var inst_47029 = (state_47049[(7)]);
var state_47049__$1 = state_47049;
var statearr_47062_48891 = state_47049__$1;
(statearr_47062_48891[(2)] = inst_47029);

(statearr_47062_48891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (10))){
var inst_47043 = (state_47049[(2)]);
var state_47049__$1 = state_47049;
var statearr_47063_48892 = state_47049__$1;
(statearr_47063_48892[(2)] = inst_47043);

(statearr_47063_48892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47050 === (8))){
var inst_47036 = (state_47049[(9)]);
var inst_47039 = cljs.core.deref(inst_47036);
var state_47049__$1 = state_47049;
var statearr_47064_48893 = state_47049__$1;
(statearr_47064_48893[(2)] = inst_47039);

(statearr_47064_48893[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46403__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46403__auto____0 = (function (){
var statearr_47065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47065[(0)] = cljs$core$async$reduce_$_state_machine__46403__auto__);

(statearr_47065[(1)] = (1));

return statearr_47065;
});
var cljs$core$async$reduce_$_state_machine__46403__auto____1 = (function (state_47049){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_47049);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e47066){var ex__46406__auto__ = e47066;
var statearr_47067_48894 = state_47049;
(statearr_47067_48894[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_47049[(4)]))){
var statearr_47068_48895 = state_47049;
(statearr_47068_48895[(1)] = cljs.core.first((state_47049[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48896 = state_47049;
state_47049 = G__48896;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46403__auto__ = function(state_47049){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46403__auto____1.call(this,state_47049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46403__auto____0;
cljs$core$async$reduce_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46403__auto____1;
return cljs$core$async$reduce_$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_47069 = f__46493__auto__();
(statearr_47069[(6)] = c__46492__auto__);

return statearr_47069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));

return c__46492__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_47075){
var state_val_47076 = (state_47075[(1)]);
if((state_val_47076 === (1))){
var inst_47070 = cljs.core.async.reduce(f__$1,init,ch);
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47075__$1,(2),inst_47070);
} else {
if((state_val_47076 === (2))){
var inst_47072 = (state_47075[(2)]);
var inst_47073 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47072) : f__$1.call(null,inst_47072));
var state_47075__$1 = state_47075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47075__$1,inst_47073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46403__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46403__auto____0 = (function (){
var statearr_47077 = [null,null,null,null,null,null,null];
(statearr_47077[(0)] = cljs$core$async$transduce_$_state_machine__46403__auto__);

(statearr_47077[(1)] = (1));

return statearr_47077;
});
var cljs$core$async$transduce_$_state_machine__46403__auto____1 = (function (state_47075){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_47075);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e47078){var ex__46406__auto__ = e47078;
var statearr_47079_48899 = state_47075;
(statearr_47079_48899[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_47075[(4)]))){
var statearr_47080_48900 = state_47075;
(statearr_47080_48900[(1)] = cljs.core.first((state_47075[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48901 = state_47075;
state_47075 = G__48901;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46403__auto__ = function(state_47075){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46403__auto____1.call(this,state_47075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46403__auto____0;
cljs$core$async$transduce_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46403__auto____1;
return cljs$core$async$transduce_$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_47081 = f__46493__auto__();
(statearr_47081[(6)] = c__46492__auto__);

return statearr_47081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));

return c__46492__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47083 = arguments.length;
switch (G__47083) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_47109){
var state_val_47110 = (state_47109[(1)]);
if((state_val_47110 === (7))){
var inst_47090 = (state_47109[(2)]);
var state_47109__$1 = state_47109;
var statearr_47113_48907 = state_47109__$1;
(statearr_47113_48907[(2)] = inst_47090);

(statearr_47113_48907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (1))){
var inst_47084 = cljs.core.seq(coll);
var inst_47085 = inst_47084;
var state_47109__$1 = (function (){var statearr_47115 = state_47109;
(statearr_47115[(7)] = inst_47085);

return statearr_47115;
})();
var statearr_47116_48908 = state_47109__$1;
(statearr_47116_48908[(2)] = null);

(statearr_47116_48908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (4))){
var inst_47085 = (state_47109[(7)]);
var inst_47088 = cljs.core.first(inst_47085);
var state_47109__$1 = state_47109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47109__$1,(7),ch,inst_47088);
} else {
if((state_val_47110 === (13))){
var inst_47102 = (state_47109[(2)]);
var state_47109__$1 = state_47109;
var statearr_47118_48911 = state_47109__$1;
(statearr_47118_48911[(2)] = inst_47102);

(statearr_47118_48911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (6))){
var inst_47093 = (state_47109[(2)]);
var state_47109__$1 = state_47109;
if(cljs.core.truth_(inst_47093)){
var statearr_47119_48912 = state_47109__$1;
(statearr_47119_48912[(1)] = (8));

} else {
var statearr_47121_48913 = state_47109__$1;
(statearr_47121_48913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (3))){
var inst_47106 = (state_47109[(2)]);
var state_47109__$1 = state_47109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47109__$1,inst_47106);
} else {
if((state_val_47110 === (12))){
var state_47109__$1 = state_47109;
var statearr_47123_48914 = state_47109__$1;
(statearr_47123_48914[(2)] = null);

(statearr_47123_48914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (2))){
var inst_47085 = (state_47109[(7)]);
var state_47109__$1 = state_47109;
if(cljs.core.truth_(inst_47085)){
var statearr_47128_48915 = state_47109__$1;
(statearr_47128_48915[(1)] = (4));

} else {
var statearr_47129_48916 = state_47109__$1;
(statearr_47129_48916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (11))){
var inst_47099 = cljs.core.async.close_BANG_(ch);
var state_47109__$1 = state_47109;
var statearr_47132_48917 = state_47109__$1;
(statearr_47132_48917[(2)] = inst_47099);

(statearr_47132_48917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (9))){
var state_47109__$1 = state_47109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47133_48918 = state_47109__$1;
(statearr_47133_48918[(1)] = (11));

} else {
var statearr_47134_48919 = state_47109__$1;
(statearr_47134_48919[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (5))){
var inst_47085 = (state_47109[(7)]);
var state_47109__$1 = state_47109;
var statearr_47145_48920 = state_47109__$1;
(statearr_47145_48920[(2)] = inst_47085);

(statearr_47145_48920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (10))){
var inst_47104 = (state_47109[(2)]);
var state_47109__$1 = state_47109;
var statearr_47150_48921 = state_47109__$1;
(statearr_47150_48921[(2)] = inst_47104);

(statearr_47150_48921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47110 === (8))){
var inst_47085 = (state_47109[(7)]);
var inst_47095 = cljs.core.next(inst_47085);
var inst_47085__$1 = inst_47095;
var state_47109__$1 = (function (){var statearr_47151 = state_47109;
(statearr_47151[(7)] = inst_47085__$1);

return statearr_47151;
})();
var statearr_47152_48922 = state_47109__$1;
(statearr_47152_48922[(2)] = null);

(statearr_47152_48922[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_47153 = [null,null,null,null,null,null,null,null];
(statearr_47153[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_47153[(1)] = (1));

return statearr_47153;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_47109){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_47109);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e47154){var ex__46406__auto__ = e47154;
var statearr_47155_48923 = state_47109;
(statearr_47155_48923[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_47109[(4)]))){
var statearr_47156_48924 = state_47109;
(statearr_47156_48924[(1)] = cljs.core.first((state_47109[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48926 = state_47109;
state_47109 = G__48926;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_47109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_47109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_47157 = f__46493__auto__();
(statearr_47157[(6)] = c__46492__auto__);

return statearr_47157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));

return c__46492__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47167 = arguments.length;
switch (G__47167) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48933 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48933(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48936 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48936(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48941 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48941(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48945 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48945(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47206 = (function (ch,cs,meta47207){
this.ch = ch;
this.cs = cs;
this.meta47207 = meta47207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47208,meta47207__$1){
var self__ = this;
var _47208__$1 = this;
return (new cljs.core.async.t_cljs$core$async47206(self__.ch,self__.cs,meta47207__$1));
}));

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47208){
var self__ = this;
var _47208__$1 = this;
return self__.meta47207;
}));

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47207","meta47207",1492500365,null)], null);
}));

(cljs.core.async.t_cljs$core$async47206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47206");

(cljs.core.async.t_cljs$core$async47206.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47206.
 */
cljs.core.async.__GT_t_cljs$core$async47206 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47206(ch__$1,cs__$1,meta47207){
return (new cljs.core.async.t_cljs$core$async47206(ch__$1,cs__$1,meta47207));
});

}

return (new cljs.core.async.t_cljs$core$async47206(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46492__auto___48952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_47406){
var state_val_47407 = (state_47406[(1)]);
if((state_val_47407 === (7))){
var inst_47401 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47413_48953 = state_47406__$1;
(statearr_47413_48953[(2)] = inst_47401);

(statearr_47413_48953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (20))){
var inst_47274 = (state_47406[(7)]);
var inst_47286 = cljs.core.first(inst_47274);
var inst_47287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47286,(0),null);
var inst_47288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47286,(1),null);
var state_47406__$1 = (function (){var statearr_47418 = state_47406;
(statearr_47418[(8)] = inst_47287);

return statearr_47418;
})();
if(cljs.core.truth_(inst_47288)){
var statearr_47419_48954 = state_47406__$1;
(statearr_47419_48954[(1)] = (22));

} else {
var statearr_47420_48955 = state_47406__$1;
(statearr_47420_48955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (27))){
var inst_47330 = (state_47406[(9)]);
var inst_47236 = (state_47406[(10)]);
var inst_47321 = (state_47406[(11)]);
var inst_47323 = (state_47406[(12)]);
var inst_47330__$1 = cljs.core._nth(inst_47321,inst_47323);
var inst_47332 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47330__$1,inst_47236,done);
var state_47406__$1 = (function (){var statearr_47426 = state_47406;
(statearr_47426[(9)] = inst_47330__$1);

return statearr_47426;
})();
if(cljs.core.truth_(inst_47332)){
var statearr_47432_48956 = state_47406__$1;
(statearr_47432_48956[(1)] = (30));

} else {
var statearr_47433_48957 = state_47406__$1;
(statearr_47433_48957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (1))){
var state_47406__$1 = state_47406;
var statearr_47443_48958 = state_47406__$1;
(statearr_47443_48958[(2)] = null);

(statearr_47443_48958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (24))){
var inst_47274 = (state_47406[(7)]);
var inst_47297 = (state_47406[(2)]);
var inst_47298 = cljs.core.next(inst_47274);
var inst_47247 = inst_47298;
var inst_47248 = null;
var inst_47249 = (0);
var inst_47250 = (0);
var state_47406__$1 = (function (){var statearr_47464 = state_47406;
(statearr_47464[(13)] = inst_47248);

(statearr_47464[(14)] = inst_47297);

(statearr_47464[(15)] = inst_47247);

(statearr_47464[(16)] = inst_47250);

(statearr_47464[(17)] = inst_47249);

return statearr_47464;
})();
var statearr_47474_48959 = state_47406__$1;
(statearr_47474_48959[(2)] = null);

(statearr_47474_48959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (39))){
var state_47406__$1 = state_47406;
var statearr_47478_48960 = state_47406__$1;
(statearr_47478_48960[(2)] = null);

(statearr_47478_48960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (4))){
var inst_47236 = (state_47406[(10)]);
var inst_47236__$1 = (state_47406[(2)]);
var inst_47238 = (inst_47236__$1 == null);
var state_47406__$1 = (function (){var statearr_47479 = state_47406;
(statearr_47479[(10)] = inst_47236__$1);

return statearr_47479;
})();
if(cljs.core.truth_(inst_47238)){
var statearr_47480_48961 = state_47406__$1;
(statearr_47480_48961[(1)] = (5));

} else {
var statearr_47481_48962 = state_47406__$1;
(statearr_47481_48962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (15))){
var inst_47248 = (state_47406[(13)]);
var inst_47247 = (state_47406[(15)]);
var inst_47250 = (state_47406[(16)]);
var inst_47249 = (state_47406[(17)]);
var inst_47269 = (state_47406[(2)]);
var inst_47270 = (inst_47250 + (1));
var tmp47475 = inst_47248;
var tmp47476 = inst_47247;
var tmp47477 = inst_47249;
var inst_47247__$1 = tmp47476;
var inst_47248__$1 = tmp47475;
var inst_47249__$1 = tmp47477;
var inst_47250__$1 = inst_47270;
var state_47406__$1 = (function (){var statearr_47492 = state_47406;
(statearr_47492[(13)] = inst_47248__$1);

(statearr_47492[(15)] = inst_47247__$1);

(statearr_47492[(16)] = inst_47250__$1);

(statearr_47492[(17)] = inst_47249__$1);

(statearr_47492[(18)] = inst_47269);

return statearr_47492;
})();
var statearr_47504_48963 = state_47406__$1;
(statearr_47504_48963[(2)] = null);

(statearr_47504_48963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (21))){
var inst_47301 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47509_48970 = state_47406__$1;
(statearr_47509_48970[(2)] = inst_47301);

(statearr_47509_48970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (31))){
var inst_47330 = (state_47406[(9)]);
var inst_47336 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47330);
var state_47406__$1 = state_47406;
var statearr_47518_48971 = state_47406__$1;
(statearr_47518_48971[(2)] = inst_47336);

(statearr_47518_48971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (32))){
var inst_47320 = (state_47406[(19)]);
var inst_47321 = (state_47406[(11)]);
var inst_47323 = (state_47406[(12)]);
var inst_47322 = (state_47406[(20)]);
var inst_47338 = (state_47406[(2)]);
var inst_47339 = (inst_47323 + (1));
var tmp47506 = inst_47320;
var tmp47507 = inst_47321;
var tmp47508 = inst_47322;
var inst_47320__$1 = tmp47506;
var inst_47321__$1 = tmp47507;
var inst_47322__$1 = tmp47508;
var inst_47323__$1 = inst_47339;
var state_47406__$1 = (function (){var statearr_47531 = state_47406;
(statearr_47531[(19)] = inst_47320__$1);

(statearr_47531[(21)] = inst_47338);

(statearr_47531[(11)] = inst_47321__$1);

(statearr_47531[(12)] = inst_47323__$1);

(statearr_47531[(20)] = inst_47322__$1);

return statearr_47531;
})();
var statearr_47544_48972 = state_47406__$1;
(statearr_47544_48972[(2)] = null);

(statearr_47544_48972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (40))){
var inst_47372 = (state_47406[(22)]);
var inst_47377 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47372);
var state_47406__$1 = state_47406;
var statearr_47549_48977 = state_47406__$1;
(statearr_47549_48977[(2)] = inst_47377);

(statearr_47549_48977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (33))){
var inst_47346 = (state_47406[(23)]);
var inst_47356 = cljs.core.chunked_seq_QMARK_(inst_47346);
var state_47406__$1 = state_47406;
if(inst_47356){
var statearr_47551_48978 = state_47406__$1;
(statearr_47551_48978[(1)] = (36));

} else {
var statearr_47553_48979 = state_47406__$1;
(statearr_47553_48979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (13))){
var inst_47260 = (state_47406[(24)]);
var inst_47266 = cljs.core.async.close_BANG_(inst_47260);
var state_47406__$1 = state_47406;
var statearr_47564_48981 = state_47406__$1;
(statearr_47564_48981[(2)] = inst_47266);

(statearr_47564_48981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (22))){
var inst_47287 = (state_47406[(8)]);
var inst_47294 = cljs.core.async.close_BANG_(inst_47287);
var state_47406__$1 = state_47406;
var statearr_47574_48982 = state_47406__$1;
(statearr_47574_48982[(2)] = inst_47294);

(statearr_47574_48982[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (36))){
var inst_47346 = (state_47406[(23)]);
var inst_47358 = cljs.core.chunk_first(inst_47346);
var inst_47359 = cljs.core.chunk_rest(inst_47346);
var inst_47364 = cljs.core.count(inst_47358);
var inst_47320 = inst_47359;
var inst_47321 = inst_47358;
var inst_47322 = inst_47364;
var inst_47323 = (0);
var state_47406__$1 = (function (){var statearr_47577 = state_47406;
(statearr_47577[(19)] = inst_47320);

(statearr_47577[(11)] = inst_47321);

(statearr_47577[(12)] = inst_47323);

(statearr_47577[(20)] = inst_47322);

return statearr_47577;
})();
var statearr_47578_48983 = state_47406__$1;
(statearr_47578_48983[(2)] = null);

(statearr_47578_48983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (41))){
var inst_47346 = (state_47406[(23)]);
var inst_47379 = (state_47406[(2)]);
var inst_47380 = cljs.core.next(inst_47346);
var inst_47320 = inst_47380;
var inst_47321 = null;
var inst_47322 = (0);
var inst_47323 = (0);
var state_47406__$1 = (function (){var statearr_47579 = state_47406;
(statearr_47579[(19)] = inst_47320);

(statearr_47579[(25)] = inst_47379);

(statearr_47579[(11)] = inst_47321);

(statearr_47579[(12)] = inst_47323);

(statearr_47579[(20)] = inst_47322);

return statearr_47579;
})();
var statearr_47580_48984 = state_47406__$1;
(statearr_47580_48984[(2)] = null);

(statearr_47580_48984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (43))){
var state_47406__$1 = state_47406;
var statearr_47581_48985 = state_47406__$1;
(statearr_47581_48985[(2)] = null);

(statearr_47581_48985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (29))){
var inst_47388 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47583_48986 = state_47406__$1;
(statearr_47583_48986[(2)] = inst_47388);

(statearr_47583_48986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (44))){
var inst_47397 = (state_47406[(2)]);
var state_47406__$1 = (function (){var statearr_47584 = state_47406;
(statearr_47584[(26)] = inst_47397);

return statearr_47584;
})();
var statearr_47585_48988 = state_47406__$1;
(statearr_47585_48988[(2)] = null);

(statearr_47585_48988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (6))){
var inst_47311 = (state_47406[(27)]);
var inst_47310 = cljs.core.deref(cs);
var inst_47311__$1 = cljs.core.keys(inst_47310);
var inst_47313 = cljs.core.count(inst_47311__$1);
var inst_47314 = cljs.core.reset_BANG_(dctr,inst_47313);
var inst_47319 = cljs.core.seq(inst_47311__$1);
var inst_47320 = inst_47319;
var inst_47321 = null;
var inst_47322 = (0);
var inst_47323 = (0);
var state_47406__$1 = (function (){var statearr_47586 = state_47406;
(statearr_47586[(19)] = inst_47320);

(statearr_47586[(27)] = inst_47311__$1);

(statearr_47586[(11)] = inst_47321);

(statearr_47586[(28)] = inst_47314);

(statearr_47586[(12)] = inst_47323);

(statearr_47586[(20)] = inst_47322);

return statearr_47586;
})();
var statearr_47587_48995 = state_47406__$1;
(statearr_47587_48995[(2)] = null);

(statearr_47587_48995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (28))){
var inst_47320 = (state_47406[(19)]);
var inst_47346 = (state_47406[(23)]);
var inst_47346__$1 = cljs.core.seq(inst_47320);
var state_47406__$1 = (function (){var statearr_47589 = state_47406;
(statearr_47589[(23)] = inst_47346__$1);

return statearr_47589;
})();
if(inst_47346__$1){
var statearr_47590_48996 = state_47406__$1;
(statearr_47590_48996[(1)] = (33));

} else {
var statearr_47594_48997 = state_47406__$1;
(statearr_47594_48997[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (25))){
var inst_47323 = (state_47406[(12)]);
var inst_47322 = (state_47406[(20)]);
var inst_47326 = (inst_47323 < inst_47322);
var inst_47327 = inst_47326;
var state_47406__$1 = state_47406;
if(cljs.core.truth_(inst_47327)){
var statearr_47595_49002 = state_47406__$1;
(statearr_47595_49002[(1)] = (27));

} else {
var statearr_47596_49003 = state_47406__$1;
(statearr_47596_49003[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (34))){
var state_47406__$1 = state_47406;
var statearr_47597_49004 = state_47406__$1;
(statearr_47597_49004[(2)] = null);

(statearr_47597_49004[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (17))){
var state_47406__$1 = state_47406;
var statearr_47598_49005 = state_47406__$1;
(statearr_47598_49005[(2)] = null);

(statearr_47598_49005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (3))){
var inst_47403 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47406__$1,inst_47403);
} else {
if((state_val_47407 === (12))){
var inst_47306 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47599_49006 = state_47406__$1;
(statearr_47599_49006[(2)] = inst_47306);

(statearr_47599_49006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (2))){
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47406__$1,(4),ch);
} else {
if((state_val_47407 === (23))){
var state_47406__$1 = state_47406;
var statearr_47600_49007 = state_47406__$1;
(statearr_47600_49007[(2)] = null);

(statearr_47600_49007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (35))){
var inst_47386 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47601_49008 = state_47406__$1;
(statearr_47601_49008[(2)] = inst_47386);

(statearr_47601_49008[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (19))){
var inst_47274 = (state_47406[(7)]);
var inst_47278 = cljs.core.chunk_first(inst_47274);
var inst_47279 = cljs.core.chunk_rest(inst_47274);
var inst_47280 = cljs.core.count(inst_47278);
var inst_47247 = inst_47279;
var inst_47248 = inst_47278;
var inst_47249 = inst_47280;
var inst_47250 = (0);
var state_47406__$1 = (function (){var statearr_47603 = state_47406;
(statearr_47603[(13)] = inst_47248);

(statearr_47603[(15)] = inst_47247);

(statearr_47603[(16)] = inst_47250);

(statearr_47603[(17)] = inst_47249);

return statearr_47603;
})();
var statearr_47609_49009 = state_47406__$1;
(statearr_47609_49009[(2)] = null);

(statearr_47609_49009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (11))){
var inst_47274 = (state_47406[(7)]);
var inst_47247 = (state_47406[(15)]);
var inst_47274__$1 = cljs.core.seq(inst_47247);
var state_47406__$1 = (function (){var statearr_47610 = state_47406;
(statearr_47610[(7)] = inst_47274__$1);

return statearr_47610;
})();
if(inst_47274__$1){
var statearr_47611_49010 = state_47406__$1;
(statearr_47611_49010[(1)] = (16));

} else {
var statearr_47612_49011 = state_47406__$1;
(statearr_47612_49011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (9))){
var inst_47308 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47613_49012 = state_47406__$1;
(statearr_47613_49012[(2)] = inst_47308);

(statearr_47613_49012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (5))){
var inst_47244 = cljs.core.deref(cs);
var inst_47245 = cljs.core.seq(inst_47244);
var inst_47247 = inst_47245;
var inst_47248 = null;
var inst_47249 = (0);
var inst_47250 = (0);
var state_47406__$1 = (function (){var statearr_47618 = state_47406;
(statearr_47618[(13)] = inst_47248);

(statearr_47618[(15)] = inst_47247);

(statearr_47618[(16)] = inst_47250);

(statearr_47618[(17)] = inst_47249);

return statearr_47618;
})();
var statearr_47619_49013 = state_47406__$1;
(statearr_47619_49013[(2)] = null);

(statearr_47619_49013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (14))){
var state_47406__$1 = state_47406;
var statearr_47620_49020 = state_47406__$1;
(statearr_47620_49020[(2)] = null);

(statearr_47620_49020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (45))){
var inst_47394 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47621_49021 = state_47406__$1;
(statearr_47621_49021[(2)] = inst_47394);

(statearr_47621_49021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (26))){
var inst_47311 = (state_47406[(27)]);
var inst_47390 = (state_47406[(2)]);
var inst_47391 = cljs.core.seq(inst_47311);
var state_47406__$1 = (function (){var statearr_47622 = state_47406;
(statearr_47622[(29)] = inst_47390);

return statearr_47622;
})();
if(inst_47391){
var statearr_47623_49022 = state_47406__$1;
(statearr_47623_49022[(1)] = (42));

} else {
var statearr_47624_49023 = state_47406__$1;
(statearr_47624_49023[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (16))){
var inst_47274 = (state_47406[(7)]);
var inst_47276 = cljs.core.chunked_seq_QMARK_(inst_47274);
var state_47406__$1 = state_47406;
if(inst_47276){
var statearr_47625_49024 = state_47406__$1;
(statearr_47625_49024[(1)] = (19));

} else {
var statearr_47626_49025 = state_47406__$1;
(statearr_47626_49025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (38))){
var inst_47383 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47627_49026 = state_47406__$1;
(statearr_47627_49026[(2)] = inst_47383);

(statearr_47627_49026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (30))){
var state_47406__$1 = state_47406;
var statearr_47628_49027 = state_47406__$1;
(statearr_47628_49027[(2)] = null);

(statearr_47628_49027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (10))){
var inst_47248 = (state_47406[(13)]);
var inst_47250 = (state_47406[(16)]);
var inst_47259 = cljs.core._nth(inst_47248,inst_47250);
var inst_47260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47259,(0),null);
var inst_47261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47259,(1),null);
var state_47406__$1 = (function (){var statearr_47631 = state_47406;
(statearr_47631[(24)] = inst_47260);

return statearr_47631;
})();
if(cljs.core.truth_(inst_47261)){
var statearr_47633_49028 = state_47406__$1;
(statearr_47633_49028[(1)] = (13));

} else {
var statearr_47634_49029 = state_47406__$1;
(statearr_47634_49029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (18))){
var inst_47304 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47635_49030 = state_47406__$1;
(statearr_47635_49030[(2)] = inst_47304);

(statearr_47635_49030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (42))){
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47406__$1,(45),dchan);
} else {
if((state_val_47407 === (37))){
var inst_47372 = (state_47406[(22)]);
var inst_47346 = (state_47406[(23)]);
var inst_47236 = (state_47406[(10)]);
var inst_47372__$1 = cljs.core.first(inst_47346);
var inst_47373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47372__$1,inst_47236,done);
var state_47406__$1 = (function (){var statearr_47638 = state_47406;
(statearr_47638[(22)] = inst_47372__$1);

return statearr_47638;
})();
if(cljs.core.truth_(inst_47373)){
var statearr_47639_49031 = state_47406__$1;
(statearr_47639_49031[(1)] = (39));

} else {
var statearr_47640_49032 = state_47406__$1;
(statearr_47640_49032[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (8))){
var inst_47250 = (state_47406[(16)]);
var inst_47249 = (state_47406[(17)]);
var inst_47253 = (inst_47250 < inst_47249);
var inst_47254 = inst_47253;
var state_47406__$1 = state_47406;
if(cljs.core.truth_(inst_47254)){
var statearr_47641_49033 = state_47406__$1;
(statearr_47641_49033[(1)] = (10));

} else {
var statearr_47643_49034 = state_47406__$1;
(statearr_47643_49034[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__46403__auto__ = null;
var cljs$core$async$mult_$_state_machine__46403__auto____0 = (function (){
var statearr_47646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47646[(0)] = cljs$core$async$mult_$_state_machine__46403__auto__);

(statearr_47646[(1)] = (1));

return statearr_47646;
});
var cljs$core$async$mult_$_state_machine__46403__auto____1 = (function (state_47406){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_47406);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e47648){var ex__46406__auto__ = e47648;
var statearr_47649_49035 = state_47406;
(statearr_47649_49035[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_47406[(4)]))){
var statearr_47650_49036 = state_47406;
(statearr_47650_49036[(1)] = cljs.core.first((state_47406[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49037 = state_47406;
state_47406 = G__49037;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46403__auto__ = function(state_47406){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46403__auto____1.call(this,state_47406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46403__auto____0;
cljs$core$async$mult_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46403__auto____1;
return cljs$core$async$mult_$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_47651 = f__46493__auto__();
(statearr_47651[(6)] = c__46492__auto___48952);

return statearr_47651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47653 = arguments.length;
switch (G__47653) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49039 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49039(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49040 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49040(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49041 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49041(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49042 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49042(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49043 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49043(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49044 = arguments.length;
var i__4830__auto___49045 = (0);
while(true){
if((i__4830__auto___49045 < len__4829__auto___49044)){
args__4835__auto__.push((arguments[i__4830__auto___49045]));

var G__49046 = (i__4830__auto___49045 + (1));
i__4830__auto___49045 = G__49046;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47685){
var map__47686 = p__47685;
var map__47686__$1 = cljs.core.__destructure_map(map__47686);
var opts = map__47686__$1;
var statearr_47687_49047 = state;
(statearr_47687_49047[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47692_49049 = state;
(statearr_47692_49049[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_47693_49050 = state;
(statearr_47693_49050[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47677){
var G__47678 = cljs.core.first(seq47677);
var seq47677__$1 = cljs.core.next(seq47677);
var G__47679 = cljs.core.first(seq47677__$1);
var seq47677__$2 = cljs.core.next(seq47677__$1);
var G__47680 = cljs.core.first(seq47677__$2);
var seq47677__$3 = cljs.core.next(seq47677__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47678,G__47679,G__47680,seq47677__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47697 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47698){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47698 = meta47698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47699,meta47698__$1){
var self__ = this;
var _47699__$1 = this;
return (new cljs.core.async.t_cljs$core$async47697(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47698__$1));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47699){
var self__ = this;
var _47699__$1 = this;
return self__.meta47698;
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47698","meta47698",456131440,null)], null);
}));

(cljs.core.async.t_cljs$core$async47697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47697");

(cljs.core.async.t_cljs$core$async47697.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47697.
 */
cljs.core.async.__GT_t_cljs$core$async47697 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47698){
return (new cljs.core.async.t_cljs$core$async47697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47698));
});

}

return (new cljs.core.async.t_cljs$core$async47697(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46492__auto___49061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_47776){
var state_val_47777 = (state_47776[(1)]);
if((state_val_47777 === (7))){
var inst_47735 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
if(cljs.core.truth_(inst_47735)){
var statearr_47781_49062 = state_47776__$1;
(statearr_47781_49062[(1)] = (8));

} else {
var statearr_47782_49063 = state_47776__$1;
(statearr_47782_49063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (20))){
var inst_47728 = (state_47776[(7)]);
var state_47776__$1 = state_47776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47776__$1,(23),out,inst_47728);
} else {
if((state_val_47777 === (1))){
var inst_47710 = calc_state();
var inst_47711 = cljs.core.__destructure_map(inst_47710);
var inst_47713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47716 = inst_47710;
var state_47776__$1 = (function (){var statearr_47786 = state_47776;
(statearr_47786[(8)] = inst_47715);

(statearr_47786[(9)] = inst_47714);

(statearr_47786[(10)] = inst_47713);

(statearr_47786[(11)] = inst_47716);

return statearr_47786;
})();
var statearr_47788_49064 = state_47776__$1;
(statearr_47788_49064[(2)] = null);

(statearr_47788_49064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (24))){
var inst_47719 = (state_47776[(12)]);
var inst_47716 = inst_47719;
var state_47776__$1 = (function (){var statearr_47789 = state_47776;
(statearr_47789[(11)] = inst_47716);

return statearr_47789;
})();
var statearr_47790_49065 = state_47776__$1;
(statearr_47790_49065[(2)] = null);

(statearr_47790_49065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (4))){
var inst_47728 = (state_47776[(7)]);
var inst_47730 = (state_47776[(13)]);
var inst_47727 = (state_47776[(2)]);
var inst_47728__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47727,(0),null);
var inst_47729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47727,(1),null);
var inst_47730__$1 = (inst_47728__$1 == null);
var state_47776__$1 = (function (){var statearr_47792 = state_47776;
(statearr_47792[(7)] = inst_47728__$1);

(statearr_47792[(13)] = inst_47730__$1);

(statearr_47792[(14)] = inst_47729);

return statearr_47792;
})();
if(cljs.core.truth_(inst_47730__$1)){
var statearr_47794_49066 = state_47776__$1;
(statearr_47794_49066[(1)] = (5));

} else {
var statearr_47795_49067 = state_47776__$1;
(statearr_47795_49067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (15))){
var inst_47749 = (state_47776[(15)]);
var inst_47720 = (state_47776[(16)]);
var inst_47749__$1 = cljs.core.empty_QMARK_(inst_47720);
var state_47776__$1 = (function (){var statearr_47796 = state_47776;
(statearr_47796[(15)] = inst_47749__$1);

return statearr_47796;
})();
if(inst_47749__$1){
var statearr_47797_49069 = state_47776__$1;
(statearr_47797_49069[(1)] = (17));

} else {
var statearr_47798_49070 = state_47776__$1;
(statearr_47798_49070[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (21))){
var inst_47719 = (state_47776[(12)]);
var inst_47716 = inst_47719;
var state_47776__$1 = (function (){var statearr_47803 = state_47776;
(statearr_47803[(11)] = inst_47716);

return statearr_47803;
})();
var statearr_47804_49072 = state_47776__$1;
(statearr_47804_49072[(2)] = null);

(statearr_47804_49072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (13))){
var inst_47742 = (state_47776[(2)]);
var inst_47743 = calc_state();
var inst_47716 = inst_47743;
var state_47776__$1 = (function (){var statearr_47805 = state_47776;
(statearr_47805[(17)] = inst_47742);

(statearr_47805[(11)] = inst_47716);

return statearr_47805;
})();
var statearr_47806_49073 = state_47776__$1;
(statearr_47806_49073[(2)] = null);

(statearr_47806_49073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (22))){
var inst_47769 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
var statearr_47807_49075 = state_47776__$1;
(statearr_47807_49075[(2)] = inst_47769);

(statearr_47807_49075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (6))){
var inst_47729 = (state_47776[(14)]);
var inst_47733 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47729,change);
var state_47776__$1 = state_47776;
var statearr_47808_49076 = state_47776__$1;
(statearr_47808_49076[(2)] = inst_47733);

(statearr_47808_49076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (25))){
var state_47776__$1 = state_47776;
var statearr_47813_49077 = state_47776__$1;
(statearr_47813_49077[(2)] = null);

(statearr_47813_49077[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (17))){
var inst_47721 = (state_47776[(18)]);
var inst_47729 = (state_47776[(14)]);
var inst_47751 = (inst_47721.cljs$core$IFn$_invoke$arity$1 ? inst_47721.cljs$core$IFn$_invoke$arity$1(inst_47729) : inst_47721.call(null,inst_47729));
var inst_47752 = cljs.core.not(inst_47751);
var state_47776__$1 = state_47776;
var statearr_47814_49078 = state_47776__$1;
(statearr_47814_49078[(2)] = inst_47752);

(statearr_47814_49078[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (3))){
var inst_47773 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47776__$1,inst_47773);
} else {
if((state_val_47777 === (12))){
var state_47776__$1 = state_47776;
var statearr_47816_49079 = state_47776__$1;
(statearr_47816_49079[(2)] = null);

(statearr_47816_49079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (2))){
var inst_47719 = (state_47776[(12)]);
var inst_47716 = (state_47776[(11)]);
var inst_47719__$1 = cljs.core.__destructure_map(inst_47716);
var inst_47720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47719__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47719__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47719__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47776__$1 = (function (){var statearr_47820 = state_47776;
(statearr_47820[(16)] = inst_47720);

(statearr_47820[(18)] = inst_47721);

(statearr_47820[(12)] = inst_47719__$1);

return statearr_47820;
})();
return cljs.core.async.ioc_alts_BANG_(state_47776__$1,(4),inst_47722);
} else {
if((state_val_47777 === (23))){
var inst_47760 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
if(cljs.core.truth_(inst_47760)){
var statearr_47822_49080 = state_47776__$1;
(statearr_47822_49080[(1)] = (24));

} else {
var statearr_47823_49081 = state_47776__$1;
(statearr_47823_49081[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (19))){
var inst_47755 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
var statearr_47824_49082 = state_47776__$1;
(statearr_47824_49082[(2)] = inst_47755);

(statearr_47824_49082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (11))){
var inst_47729 = (state_47776[(14)]);
var inst_47739 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47729);
var state_47776__$1 = state_47776;
var statearr_47829_49083 = state_47776__$1;
(statearr_47829_49083[(2)] = inst_47739);

(statearr_47829_49083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (9))){
var inst_47720 = (state_47776[(16)]);
var inst_47746 = (state_47776[(19)]);
var inst_47729 = (state_47776[(14)]);
var inst_47746__$1 = (inst_47720.cljs$core$IFn$_invoke$arity$1 ? inst_47720.cljs$core$IFn$_invoke$arity$1(inst_47729) : inst_47720.call(null,inst_47729));
var state_47776__$1 = (function (){var statearr_47830 = state_47776;
(statearr_47830[(19)] = inst_47746__$1);

return statearr_47830;
})();
if(cljs.core.truth_(inst_47746__$1)){
var statearr_47831_49085 = state_47776__$1;
(statearr_47831_49085[(1)] = (14));

} else {
var statearr_47833_49086 = state_47776__$1;
(statearr_47833_49086[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (5))){
var inst_47730 = (state_47776[(13)]);
var state_47776__$1 = state_47776;
var statearr_47835_49087 = state_47776__$1;
(statearr_47835_49087[(2)] = inst_47730);

(statearr_47835_49087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (14))){
var inst_47746 = (state_47776[(19)]);
var state_47776__$1 = state_47776;
var statearr_47836_49088 = state_47776__$1;
(statearr_47836_49088[(2)] = inst_47746);

(statearr_47836_49088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (26))){
var inst_47765 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
var statearr_47837_49089 = state_47776__$1;
(statearr_47837_49089[(2)] = inst_47765);

(statearr_47837_49089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (16))){
var inst_47757 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
if(cljs.core.truth_(inst_47757)){
var statearr_47838_49091 = state_47776__$1;
(statearr_47838_49091[(1)] = (20));

} else {
var statearr_47842_49092 = state_47776__$1;
(statearr_47842_49092[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (10))){
var inst_47771 = (state_47776[(2)]);
var state_47776__$1 = state_47776;
var statearr_47844_49093 = state_47776__$1;
(statearr_47844_49093[(2)] = inst_47771);

(statearr_47844_49093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (18))){
var inst_47749 = (state_47776[(15)]);
var state_47776__$1 = state_47776;
var statearr_47845_49094 = state_47776__$1;
(statearr_47845_49094[(2)] = inst_47749);

(statearr_47845_49094[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47777 === (8))){
var inst_47728 = (state_47776[(7)]);
var inst_47737 = (inst_47728 == null);
var state_47776__$1 = state_47776;
if(cljs.core.truth_(inst_47737)){
var statearr_47846_49095 = state_47776__$1;
(statearr_47846_49095[(1)] = (11));

} else {
var statearr_47847_49096 = state_47776__$1;
(statearr_47847_49096[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__46403__auto__ = null;
var cljs$core$async$mix_$_state_machine__46403__auto____0 = (function (){
var statearr_47850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47850[(0)] = cljs$core$async$mix_$_state_machine__46403__auto__);

(statearr_47850[(1)] = (1));

return statearr_47850;
});
var cljs$core$async$mix_$_state_machine__46403__auto____1 = (function (state_47776){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_47776);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e47851){var ex__46406__auto__ = e47851;
var statearr_47852_49098 = state_47776;
(statearr_47852_49098[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_47776[(4)]))){
var statearr_47853_49099 = state_47776;
(statearr_47853_49099[(1)] = cljs.core.first((state_47776[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49102 = state_47776;
state_47776 = G__49102;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46403__auto__ = function(state_47776){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46403__auto____1.call(this,state_47776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46403__auto____0;
cljs$core$async$mix_$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46403__auto____1;
return cljs$core$async$mix_$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_47854 = f__46493__auto__();
(statearr_47854[(6)] = c__46492__auto___49061);

return statearr_47854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49105 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49105(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49107 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49107(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49109 = (function() {
var G__49110 = null;
var G__49110__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49110__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49110 = function(p,v){
switch(arguments.length){
case 1:
return G__49110__1.call(this,p);
case 2:
return G__49110__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49110.cljs$core$IFn$_invoke$arity$1 = G__49110__1;
G__49110.cljs$core$IFn$_invoke$arity$2 = G__49110__2;
return G__49110;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47874 = arguments.length;
switch (G__47874) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49109(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49109(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__47890 = arguments.length;
switch (G__47890) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47881_SHARP_){
if(cljs.core.truth_((p1__47881_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47881_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47881_SHARP_.call(null,topic)))){
return p1__47881_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47881_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47897 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47898){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47898 = meta47898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47899,meta47898__$1){
var self__ = this;
var _47899__$1 = this;
return (new cljs.core.async.t_cljs$core$async47897(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47898__$1));
}));

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47899){
var self__ = this;
var _47899__$1 = this;
return self__.meta47898;
}));

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47898","meta47898",-1102717074,null)], null);
}));

(cljs.core.async.t_cljs$core$async47897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47897");

(cljs.core.async.t_cljs$core$async47897.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47897.
 */
cljs.core.async.__GT_t_cljs$core$async47897 = (function cljs$core$async$__GT_t_cljs$core$async47897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47898){
return (new cljs.core.async.t_cljs$core$async47897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47898));
});

}

return (new cljs.core.async.t_cljs$core$async47897(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46492__auto___49122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48000){
var state_val_48001 = (state_48000[(1)]);
if((state_val_48001 === (7))){
var inst_47995 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48004_49123 = state_48000__$1;
(statearr_48004_49123[(2)] = inst_47995);

(statearr_48004_49123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (20))){
var state_48000__$1 = state_48000;
var statearr_48005_49124 = state_48000__$1;
(statearr_48005_49124[(2)] = null);

(statearr_48005_49124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (1))){
var state_48000__$1 = state_48000;
var statearr_48006_49125 = state_48000__$1;
(statearr_48006_49125[(2)] = null);

(statearr_48006_49125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (24))){
var inst_47976 = (state_48000[(7)]);
var inst_47986 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47976);
var state_48000__$1 = state_48000;
var statearr_48011_49126 = state_48000__$1;
(statearr_48011_49126[(2)] = inst_47986);

(statearr_48011_49126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (4))){
var inst_47910 = (state_48000[(8)]);
var inst_47910__$1 = (state_48000[(2)]);
var inst_47911 = (inst_47910__$1 == null);
var state_48000__$1 = (function (){var statearr_48013 = state_48000;
(statearr_48013[(8)] = inst_47910__$1);

return statearr_48013;
})();
if(cljs.core.truth_(inst_47911)){
var statearr_48014_49127 = state_48000__$1;
(statearr_48014_49127[(1)] = (5));

} else {
var statearr_48015_49128 = state_48000__$1;
(statearr_48015_49128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (15))){
var inst_47969 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48018_49129 = state_48000__$1;
(statearr_48018_49129[(2)] = inst_47969);

(statearr_48018_49129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (21))){
var inst_47991 = (state_48000[(2)]);
var state_48000__$1 = (function (){var statearr_48019 = state_48000;
(statearr_48019[(9)] = inst_47991);

return statearr_48019;
})();
var statearr_48020_49130 = state_48000__$1;
(statearr_48020_49130[(2)] = null);

(statearr_48020_49130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (13))){
var inst_47946 = (state_48000[(10)]);
var inst_47950 = cljs.core.chunked_seq_QMARK_(inst_47946);
var state_48000__$1 = state_48000;
if(inst_47950){
var statearr_48021_49131 = state_48000__$1;
(statearr_48021_49131[(1)] = (16));

} else {
var statearr_48023_49132 = state_48000__$1;
(statearr_48023_49132[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (22))){
var inst_47983 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
if(cljs.core.truth_(inst_47983)){
var statearr_48025_49133 = state_48000__$1;
(statearr_48025_49133[(1)] = (23));

} else {
var statearr_48026_49134 = state_48000__$1;
(statearr_48026_49134[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (6))){
var inst_47976 = (state_48000[(7)]);
var inst_47910 = (state_48000[(8)]);
var inst_47978 = (state_48000[(11)]);
var inst_47976__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47910) : topic_fn.call(null,inst_47910));
var inst_47977 = cljs.core.deref(mults);
var inst_47978__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47977,inst_47976__$1);
var state_48000__$1 = (function (){var statearr_48027 = state_48000;
(statearr_48027[(7)] = inst_47976__$1);

(statearr_48027[(11)] = inst_47978__$1);

return statearr_48027;
})();
if(cljs.core.truth_(inst_47978__$1)){
var statearr_48028_49135 = state_48000__$1;
(statearr_48028_49135[(1)] = (19));

} else {
var statearr_48029_49136 = state_48000__$1;
(statearr_48029_49136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (25))){
var inst_47988 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48031_49137 = state_48000__$1;
(statearr_48031_49137[(2)] = inst_47988);

(statearr_48031_49137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (17))){
var inst_47946 = (state_48000[(10)]);
var inst_47959 = cljs.core.first(inst_47946);
var inst_47960 = cljs.core.async.muxch_STAR_(inst_47959);
var inst_47961 = cljs.core.async.close_BANG_(inst_47960);
var inst_47962 = cljs.core.next(inst_47946);
var inst_47924 = inst_47962;
var inst_47925 = null;
var inst_47926 = (0);
var inst_47927 = (0);
var state_48000__$1 = (function (){var statearr_48032 = state_48000;
(statearr_48032[(12)] = inst_47924);

(statearr_48032[(13)] = inst_47925);

(statearr_48032[(14)] = inst_47926);

(statearr_48032[(15)] = inst_47961);

(statearr_48032[(16)] = inst_47927);

return statearr_48032;
})();
var statearr_48033_49139 = state_48000__$1;
(statearr_48033_49139[(2)] = null);

(statearr_48033_49139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (3))){
var inst_47997 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48000__$1,inst_47997);
} else {
if((state_val_48001 === (12))){
var inst_47971 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48034_49140 = state_48000__$1;
(statearr_48034_49140[(2)] = inst_47971);

(statearr_48034_49140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (2))){
var state_48000__$1 = state_48000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48000__$1,(4),ch);
} else {
if((state_val_48001 === (23))){
var state_48000__$1 = state_48000;
var statearr_48035_49141 = state_48000__$1;
(statearr_48035_49141[(2)] = null);

(statearr_48035_49141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (19))){
var inst_47910 = (state_48000[(8)]);
var inst_47978 = (state_48000[(11)]);
var inst_47981 = cljs.core.async.muxch_STAR_(inst_47978);
var state_48000__$1 = state_48000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48000__$1,(22),inst_47981,inst_47910);
} else {
if((state_val_48001 === (11))){
var inst_47924 = (state_48000[(12)]);
var inst_47946 = (state_48000[(10)]);
var inst_47946__$1 = cljs.core.seq(inst_47924);
var state_48000__$1 = (function (){var statearr_48036 = state_48000;
(statearr_48036[(10)] = inst_47946__$1);

return statearr_48036;
})();
if(inst_47946__$1){
var statearr_48037_49146 = state_48000__$1;
(statearr_48037_49146[(1)] = (13));

} else {
var statearr_48038_49147 = state_48000__$1;
(statearr_48038_49147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (9))){
var inst_47973 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48039_49151 = state_48000__$1;
(statearr_48039_49151[(2)] = inst_47973);

(statearr_48039_49151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (5))){
var inst_47921 = cljs.core.deref(mults);
var inst_47922 = cljs.core.vals(inst_47921);
var inst_47923 = cljs.core.seq(inst_47922);
var inst_47924 = inst_47923;
var inst_47925 = null;
var inst_47926 = (0);
var inst_47927 = (0);
var state_48000__$1 = (function (){var statearr_48040 = state_48000;
(statearr_48040[(12)] = inst_47924);

(statearr_48040[(13)] = inst_47925);

(statearr_48040[(14)] = inst_47926);

(statearr_48040[(16)] = inst_47927);

return statearr_48040;
})();
var statearr_48041_49152 = state_48000__$1;
(statearr_48041_49152[(2)] = null);

(statearr_48041_49152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (14))){
var state_48000__$1 = state_48000;
var statearr_48045_49153 = state_48000__$1;
(statearr_48045_49153[(2)] = null);

(statearr_48045_49153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (16))){
var inst_47946 = (state_48000[(10)]);
var inst_47954 = cljs.core.chunk_first(inst_47946);
var inst_47955 = cljs.core.chunk_rest(inst_47946);
var inst_47956 = cljs.core.count(inst_47954);
var inst_47924 = inst_47955;
var inst_47925 = inst_47954;
var inst_47926 = inst_47956;
var inst_47927 = (0);
var state_48000__$1 = (function (){var statearr_48046 = state_48000;
(statearr_48046[(12)] = inst_47924);

(statearr_48046[(13)] = inst_47925);

(statearr_48046[(14)] = inst_47926);

(statearr_48046[(16)] = inst_47927);

return statearr_48046;
})();
var statearr_48047_49154 = state_48000__$1;
(statearr_48047_49154[(2)] = null);

(statearr_48047_49154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (10))){
var inst_47924 = (state_48000[(12)]);
var inst_47925 = (state_48000[(13)]);
var inst_47926 = (state_48000[(14)]);
var inst_47927 = (state_48000[(16)]);
var inst_47936 = cljs.core._nth(inst_47925,inst_47927);
var inst_47937 = cljs.core.async.muxch_STAR_(inst_47936);
var inst_47938 = cljs.core.async.close_BANG_(inst_47937);
var inst_47943 = (inst_47927 + (1));
var tmp48042 = inst_47924;
var tmp48043 = inst_47925;
var tmp48044 = inst_47926;
var inst_47924__$1 = tmp48042;
var inst_47925__$1 = tmp48043;
var inst_47926__$1 = tmp48044;
var inst_47927__$1 = inst_47943;
var state_48000__$1 = (function (){var statearr_48048 = state_48000;
(statearr_48048[(12)] = inst_47924__$1);

(statearr_48048[(13)] = inst_47925__$1);

(statearr_48048[(14)] = inst_47926__$1);

(statearr_48048[(16)] = inst_47927__$1);

(statearr_48048[(17)] = inst_47938);

return statearr_48048;
})();
var statearr_48049_49158 = state_48000__$1;
(statearr_48049_49158[(2)] = null);

(statearr_48049_49158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (18))){
var inst_47965 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48050_49159 = state_48000__$1;
(statearr_48050_49159[(2)] = inst_47965);

(statearr_48050_49159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (8))){
var inst_47926 = (state_48000[(14)]);
var inst_47927 = (state_48000[(16)]);
var inst_47933 = (inst_47927 < inst_47926);
var inst_47934 = inst_47933;
var state_48000__$1 = state_48000;
if(cljs.core.truth_(inst_47934)){
var statearr_48051_49163 = state_48000__$1;
(statearr_48051_49163[(1)] = (10));

} else {
var statearr_48052_49164 = state_48000__$1;
(statearr_48052_49164[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48053[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48053[(1)] = (1));

return statearr_48053;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48000){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48000);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48054){var ex__46406__auto__ = e48054;
var statearr_48055_49165 = state_48000;
(statearr_48055_49165[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48000[(4)]))){
var statearr_48056_49166 = state_48000;
(statearr_48056_49166[(1)] = cljs.core.first((state_48000[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49167 = state_48000;
state_48000 = G__49167;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48057 = f__46493__auto__();
(statearr_48057[(6)] = c__46492__auto___49122);

return statearr_48057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48059 = arguments.length;
switch (G__48059) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48061 = arguments.length;
switch (G__48061) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__48065 = arguments.length;
switch (G__48065) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46492__auto___49178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48112){
var state_val_48113 = (state_48112[(1)]);
if((state_val_48113 === (7))){
var state_48112__$1 = state_48112;
var statearr_48115_49179 = state_48112__$1;
(statearr_48115_49179[(2)] = null);

(statearr_48115_49179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (1))){
var state_48112__$1 = state_48112;
var statearr_48116_49180 = state_48112__$1;
(statearr_48116_49180[(2)] = null);

(statearr_48116_49180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (4))){
var inst_48071 = (state_48112[(7)]);
var inst_48072 = (state_48112[(8)]);
var inst_48074 = (inst_48072 < inst_48071);
var state_48112__$1 = state_48112;
if(cljs.core.truth_(inst_48074)){
var statearr_48117_49181 = state_48112__$1;
(statearr_48117_49181[(1)] = (6));

} else {
var statearr_48118_49182 = state_48112__$1;
(statearr_48118_49182[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (15))){
var inst_48098 = (state_48112[(9)]);
var inst_48103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48098);
var state_48112__$1 = state_48112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48112__$1,(17),out,inst_48103);
} else {
if((state_val_48113 === (13))){
var inst_48098 = (state_48112[(9)]);
var inst_48098__$1 = (state_48112[(2)]);
var inst_48099 = cljs.core.some(cljs.core.nil_QMARK_,inst_48098__$1);
var state_48112__$1 = (function (){var statearr_48119 = state_48112;
(statearr_48119[(9)] = inst_48098__$1);

return statearr_48119;
})();
if(cljs.core.truth_(inst_48099)){
var statearr_48120_49183 = state_48112__$1;
(statearr_48120_49183[(1)] = (14));

} else {
var statearr_48121_49184 = state_48112__$1;
(statearr_48121_49184[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (6))){
var state_48112__$1 = state_48112;
var statearr_48122_49185 = state_48112__$1;
(statearr_48122_49185[(2)] = null);

(statearr_48122_49185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (17))){
var inst_48105 = (state_48112[(2)]);
var state_48112__$1 = (function (){var statearr_48127 = state_48112;
(statearr_48127[(10)] = inst_48105);

return statearr_48127;
})();
var statearr_48128_49186 = state_48112__$1;
(statearr_48128_49186[(2)] = null);

(statearr_48128_49186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (3))){
var inst_48110 = (state_48112[(2)]);
var state_48112__$1 = state_48112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48112__$1,inst_48110);
} else {
if((state_val_48113 === (12))){
var _ = (function (){var statearr_48129 = state_48112;
(statearr_48129[(4)] = cljs.core.rest((state_48112[(4)])));

return statearr_48129;
})();
var state_48112__$1 = state_48112;
var ex48126 = (state_48112__$1[(2)]);
var statearr_48130_49187 = state_48112__$1;
(statearr_48130_49187[(5)] = ex48126);


if((ex48126 instanceof Object)){
var statearr_48132_49188 = state_48112__$1;
(statearr_48132_49188[(1)] = (11));

(statearr_48132_49188[(5)] = null);

} else {
throw ex48126;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (2))){
var inst_48070 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48071 = cnt;
var inst_48072 = (0);
var state_48112__$1 = (function (){var statearr_48135 = state_48112;
(statearr_48135[(7)] = inst_48071);

(statearr_48135[(11)] = inst_48070);

(statearr_48135[(8)] = inst_48072);

return statearr_48135;
})();
var statearr_48138_49189 = state_48112__$1;
(statearr_48138_49189[(2)] = null);

(statearr_48138_49189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (11))){
var inst_48077 = (state_48112[(2)]);
var inst_48078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48112__$1 = (function (){var statearr_48140 = state_48112;
(statearr_48140[(12)] = inst_48077);

return statearr_48140;
})();
var statearr_48141_49191 = state_48112__$1;
(statearr_48141_49191[(2)] = inst_48078);

(statearr_48141_49191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (9))){
var inst_48072 = (state_48112[(8)]);
var _ = (function (){var statearr_48142 = state_48112;
(statearr_48142[(4)] = cljs.core.cons((12),(state_48112[(4)])));

return statearr_48142;
})();
var inst_48084 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48072) : chs__$1.call(null,inst_48072));
var inst_48085 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48072) : done.call(null,inst_48072));
var inst_48086 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48084,inst_48085);
var ___$1 = (function (){var statearr_48145 = state_48112;
(statearr_48145[(4)] = cljs.core.rest((state_48112[(4)])));

return statearr_48145;
})();
var state_48112__$1 = state_48112;
var statearr_48146_49193 = state_48112__$1;
(statearr_48146_49193[(2)] = inst_48086);

(statearr_48146_49193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (5))){
var inst_48096 = (state_48112[(2)]);
var state_48112__$1 = (function (){var statearr_48148 = state_48112;
(statearr_48148[(13)] = inst_48096);

return statearr_48148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48112__$1,(13),dchan);
} else {
if((state_val_48113 === (14))){
var inst_48101 = cljs.core.async.close_BANG_(out);
var state_48112__$1 = state_48112;
var statearr_48150_49194 = state_48112__$1;
(statearr_48150_49194[(2)] = inst_48101);

(statearr_48150_49194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (16))){
var inst_48108 = (state_48112[(2)]);
var state_48112__$1 = state_48112;
var statearr_48152_49195 = state_48112__$1;
(statearr_48152_49195[(2)] = inst_48108);

(statearr_48152_49195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (10))){
var inst_48072 = (state_48112[(8)]);
var inst_48089 = (state_48112[(2)]);
var inst_48090 = (inst_48072 + (1));
var inst_48072__$1 = inst_48090;
var state_48112__$1 = (function (){var statearr_48153 = state_48112;
(statearr_48153[(8)] = inst_48072__$1);

(statearr_48153[(14)] = inst_48089);

return statearr_48153;
})();
var statearr_48154_49196 = state_48112__$1;
(statearr_48154_49196[(2)] = null);

(statearr_48154_49196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48113 === (8))){
var inst_48094 = (state_48112[(2)]);
var state_48112__$1 = state_48112;
var statearr_48155_49197 = state_48112__$1;
(statearr_48155_49197[(2)] = inst_48094);

(statearr_48155_49197[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48158[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48158[(1)] = (1));

return statearr_48158;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48112){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48112);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48161){var ex__46406__auto__ = e48161;
var statearr_48162_49198 = state_48112;
(statearr_48162_49198[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48112[(4)]))){
var statearr_48163_49199 = state_48112;
(statearr_48163_49199[(1)] = cljs.core.first((state_48112[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49200 = state_48112;
state_48112 = G__49200;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48166 = f__46493__auto__();
(statearr_48166[(6)] = c__46492__auto___49178);

return statearr_48166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48170 = arguments.length;
switch (G__48170) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46492__auto___49202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48208){
var state_val_48209 = (state_48208[(1)]);
if((state_val_48209 === (7))){
var inst_48186 = (state_48208[(7)]);
var inst_48187 = (state_48208[(8)]);
var inst_48186__$1 = (state_48208[(2)]);
var inst_48187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48186__$1,(0),null);
var inst_48188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48186__$1,(1),null);
var inst_48189 = (inst_48187__$1 == null);
var state_48208__$1 = (function (){var statearr_48211 = state_48208;
(statearr_48211[(7)] = inst_48186__$1);

(statearr_48211[(9)] = inst_48188);

(statearr_48211[(8)] = inst_48187__$1);

return statearr_48211;
})();
if(cljs.core.truth_(inst_48189)){
var statearr_48212_49203 = state_48208__$1;
(statearr_48212_49203[(1)] = (8));

} else {
var statearr_48213_49204 = state_48208__$1;
(statearr_48213_49204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (1))){
var inst_48172 = cljs.core.vec(chs);
var inst_48173 = inst_48172;
var state_48208__$1 = (function (){var statearr_48214 = state_48208;
(statearr_48214[(10)] = inst_48173);

return statearr_48214;
})();
var statearr_48215_49205 = state_48208__$1;
(statearr_48215_49205[(2)] = null);

(statearr_48215_49205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (4))){
var inst_48173 = (state_48208[(10)]);
var state_48208__$1 = state_48208;
return cljs.core.async.ioc_alts_BANG_(state_48208__$1,(7),inst_48173);
} else {
if((state_val_48209 === (6))){
var inst_48204 = (state_48208[(2)]);
var state_48208__$1 = state_48208;
var statearr_48217_49206 = state_48208__$1;
(statearr_48217_49206[(2)] = inst_48204);

(statearr_48217_49206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (3))){
var inst_48206 = (state_48208[(2)]);
var state_48208__$1 = state_48208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48208__$1,inst_48206);
} else {
if((state_val_48209 === (2))){
var inst_48173 = (state_48208[(10)]);
var inst_48175 = cljs.core.count(inst_48173);
var inst_48176 = (inst_48175 > (0));
var state_48208__$1 = state_48208;
if(cljs.core.truth_(inst_48176)){
var statearr_48219_49207 = state_48208__$1;
(statearr_48219_49207[(1)] = (4));

} else {
var statearr_48220_49208 = state_48208__$1;
(statearr_48220_49208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (11))){
var inst_48173 = (state_48208[(10)]);
var inst_48197 = (state_48208[(2)]);
var tmp48218 = inst_48173;
var inst_48173__$1 = tmp48218;
var state_48208__$1 = (function (){var statearr_48221 = state_48208;
(statearr_48221[(10)] = inst_48173__$1);

(statearr_48221[(11)] = inst_48197);

return statearr_48221;
})();
var statearr_48223_49209 = state_48208__$1;
(statearr_48223_49209[(2)] = null);

(statearr_48223_49209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (9))){
var inst_48187 = (state_48208[(8)]);
var state_48208__$1 = state_48208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48208__$1,(11),out,inst_48187);
} else {
if((state_val_48209 === (5))){
var inst_48202 = cljs.core.async.close_BANG_(out);
var state_48208__$1 = state_48208;
var statearr_48228_49210 = state_48208__$1;
(statearr_48228_49210[(2)] = inst_48202);

(statearr_48228_49210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (10))){
var inst_48200 = (state_48208[(2)]);
var state_48208__$1 = state_48208;
var statearr_48229_49211 = state_48208__$1;
(statearr_48229_49211[(2)] = inst_48200);

(statearr_48229_49211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48209 === (8))){
var inst_48186 = (state_48208[(7)]);
var inst_48173 = (state_48208[(10)]);
var inst_48188 = (state_48208[(9)]);
var inst_48187 = (state_48208[(8)]);
var inst_48192 = (function (){var cs = inst_48173;
var vec__48182 = inst_48186;
var v = inst_48187;
var c = inst_48188;
return (function (p1__48167_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48167_SHARP_);
});
})();
var inst_48193 = cljs.core.filterv(inst_48192,inst_48173);
var inst_48173__$1 = inst_48193;
var state_48208__$1 = (function (){var statearr_48230 = state_48208;
(statearr_48230[(10)] = inst_48173__$1);

return statearr_48230;
})();
var statearr_48231_49216 = state_48208__$1;
(statearr_48231_49216[(2)] = null);

(statearr_48231_49216[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48232[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48232[(1)] = (1));

return statearr_48232;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48208){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48208);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48233){var ex__46406__auto__ = e48233;
var statearr_48234_49217 = state_48208;
(statearr_48234_49217[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48208[(4)]))){
var statearr_48235_49218 = state_48208;
(statearr_48235_49218[(1)] = cljs.core.first((state_48208[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49219 = state_48208;
state_48208 = G__49219;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48236 = f__46493__auto__();
(statearr_48236[(6)] = c__46492__auto___49202);

return statearr_48236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48238 = arguments.length;
switch (G__48238) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46492__auto___49221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48266){
var state_val_48267 = (state_48266[(1)]);
if((state_val_48267 === (7))){
var inst_48248 = (state_48266[(7)]);
var inst_48248__$1 = (state_48266[(2)]);
var inst_48249 = (inst_48248__$1 == null);
var inst_48250 = cljs.core.not(inst_48249);
var state_48266__$1 = (function (){var statearr_48268 = state_48266;
(statearr_48268[(7)] = inst_48248__$1);

return statearr_48268;
})();
if(inst_48250){
var statearr_48269_49226 = state_48266__$1;
(statearr_48269_49226[(1)] = (8));

} else {
var statearr_48270_49227 = state_48266__$1;
(statearr_48270_49227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (1))){
var inst_48243 = (0);
var state_48266__$1 = (function (){var statearr_48271 = state_48266;
(statearr_48271[(8)] = inst_48243);

return statearr_48271;
})();
var statearr_48272_49228 = state_48266__$1;
(statearr_48272_49228[(2)] = null);

(statearr_48272_49228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (4))){
var state_48266__$1 = state_48266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48266__$1,(7),ch);
} else {
if((state_val_48267 === (6))){
var inst_48261 = (state_48266[(2)]);
var state_48266__$1 = state_48266;
var statearr_48274_49230 = state_48266__$1;
(statearr_48274_49230[(2)] = inst_48261);

(statearr_48274_49230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (3))){
var inst_48263 = (state_48266[(2)]);
var inst_48264 = cljs.core.async.close_BANG_(out);
var state_48266__$1 = (function (){var statearr_48276 = state_48266;
(statearr_48276[(9)] = inst_48263);

return statearr_48276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48266__$1,inst_48264);
} else {
if((state_val_48267 === (2))){
var inst_48243 = (state_48266[(8)]);
var inst_48245 = (inst_48243 < n);
var state_48266__$1 = state_48266;
if(cljs.core.truth_(inst_48245)){
var statearr_48277_49231 = state_48266__$1;
(statearr_48277_49231[(1)] = (4));

} else {
var statearr_48278_49232 = state_48266__$1;
(statearr_48278_49232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (11))){
var inst_48243 = (state_48266[(8)]);
var inst_48253 = (state_48266[(2)]);
var inst_48254 = (inst_48243 + (1));
var inst_48243__$1 = inst_48254;
var state_48266__$1 = (function (){var statearr_48279 = state_48266;
(statearr_48279[(8)] = inst_48243__$1);

(statearr_48279[(10)] = inst_48253);

return statearr_48279;
})();
var statearr_48280_49233 = state_48266__$1;
(statearr_48280_49233[(2)] = null);

(statearr_48280_49233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (9))){
var state_48266__$1 = state_48266;
var statearr_48281_49235 = state_48266__$1;
(statearr_48281_49235[(2)] = null);

(statearr_48281_49235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (5))){
var state_48266__$1 = state_48266;
var statearr_48282_49236 = state_48266__$1;
(statearr_48282_49236[(2)] = null);

(statearr_48282_49236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (10))){
var inst_48258 = (state_48266[(2)]);
var state_48266__$1 = state_48266;
var statearr_48284_49237 = state_48266__$1;
(statearr_48284_49237[(2)] = inst_48258);

(statearr_48284_49237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (8))){
var inst_48248 = (state_48266[(7)]);
var state_48266__$1 = state_48266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48266__$1,(11),out,inst_48248);
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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48288[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48288[(1)] = (1));

return statearr_48288;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48266){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48266);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48289){var ex__46406__auto__ = e48289;
var statearr_48290_49242 = state_48266;
(statearr_48290_49242[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48266[(4)]))){
var statearr_48291_49243 = state_48266;
(statearr_48291_49243[(1)] = cljs.core.first((state_48266[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49244 = state_48266;
state_48266 = G__49244;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48292 = f__46493__auto__();
(statearr_48292[(6)] = c__46492__auto___49221);

return statearr_48292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48294 = (function (f,ch,meta48295){
this.f = f;
this.ch = ch;
this.meta48295 = meta48295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48296,meta48295__$1){
var self__ = this;
var _48296__$1 = this;
return (new cljs.core.async.t_cljs$core$async48294(self__.f,self__.ch,meta48295__$1));
}));

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48296){
var self__ = this;
var _48296__$1 = this;
return self__.meta48295;
}));

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48300 = (function (f,ch,meta48295,_,fn1,meta48301){
this.f = f;
this.ch = ch;
this.meta48295 = meta48295;
this._ = _;
this.fn1 = fn1;
this.meta48301 = meta48301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48302,meta48301__$1){
var self__ = this;
var _48302__$1 = this;
return (new cljs.core.async.t_cljs$core$async48300(self__.f,self__.ch,self__.meta48295,self__._,self__.fn1,meta48301__$1));
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48302){
var self__ = this;
var _48302__$1 = this;
return self__.meta48301;
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48293_SHARP_){
var G__48306 = (((p1__48293_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48293_SHARP_) : self__.f.call(null,p1__48293_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48306) : f1.call(null,G__48306));
});
}));

(cljs.core.async.t_cljs$core$async48300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48295","meta48295",227142194,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48294","cljs.core.async/t_cljs$core$async48294",-1364384706,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48301","meta48301",1588216227,null)], null);
}));

(cljs.core.async.t_cljs$core$async48300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48300");

(cljs.core.async.t_cljs$core$async48300.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48300.
 */
cljs.core.async.__GT_t_cljs$core$async48300 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48300(f__$1,ch__$1,meta48295__$1,___$2,fn1__$1,meta48301){
return (new cljs.core.async.t_cljs$core$async48300(f__$1,ch__$1,meta48295__$1,___$2,fn1__$1,meta48301));
});

}

return (new cljs.core.async.t_cljs$core$async48300(self__.f,self__.ch,self__.meta48295,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48311 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48311) : self__.f.call(null,G__48311));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48295","meta48295",227142194,null)], null);
}));

(cljs.core.async.t_cljs$core$async48294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48294");

(cljs.core.async.t_cljs$core$async48294.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48294.
 */
cljs.core.async.__GT_t_cljs$core$async48294 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48294(f__$1,ch__$1,meta48295){
return (new cljs.core.async.t_cljs$core$async48294(f__$1,ch__$1,meta48295));
});

}

return (new cljs.core.async.t_cljs$core$async48294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48314 = (function (f,ch,meta48315){
this.f = f;
this.ch = ch;
this.meta48315 = meta48315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48316,meta48315__$1){
var self__ = this;
var _48316__$1 = this;
return (new cljs.core.async.t_cljs$core$async48314(self__.f,self__.ch,meta48315__$1));
}));

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48316){
var self__ = this;
var _48316__$1 = this;
return self__.meta48315;
}));

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48315","meta48315",2023358544,null)], null);
}));

(cljs.core.async.t_cljs$core$async48314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48314");

(cljs.core.async.t_cljs$core$async48314.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48314.
 */
cljs.core.async.__GT_t_cljs$core$async48314 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48314(f__$1,ch__$1,meta48315){
return (new cljs.core.async.t_cljs$core$async48314(f__$1,ch__$1,meta48315));
});

}

return (new cljs.core.async.t_cljs$core$async48314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48328 = (function (p,ch,meta48329){
this.p = p;
this.ch = ch;
this.meta48329 = meta48329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48330,meta48329__$1){
var self__ = this;
var _48330__$1 = this;
return (new cljs.core.async.t_cljs$core$async48328(self__.p,self__.ch,meta48329__$1));
}));

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48330){
var self__ = this;
var _48330__$1 = this;
return self__.meta48329;
}));

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48329","meta48329",1387453926,null)], null);
}));

(cljs.core.async.t_cljs$core$async48328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48328");

(cljs.core.async.t_cljs$core$async48328.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48328.
 */
cljs.core.async.__GT_t_cljs$core$async48328 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48328(p__$1,ch__$1,meta48329){
return (new cljs.core.async.t_cljs$core$async48328(p__$1,ch__$1,meta48329));
});

}

return (new cljs.core.async.t_cljs$core$async48328(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48336 = arguments.length;
switch (G__48336) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46492__auto___49250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48360){
var state_val_48361 = (state_48360[(1)]);
if((state_val_48361 === (7))){
var inst_48356 = (state_48360[(2)]);
var state_48360__$1 = state_48360;
var statearr_48362_49251 = state_48360__$1;
(statearr_48362_49251[(2)] = inst_48356);

(statearr_48362_49251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (1))){
var state_48360__$1 = state_48360;
var statearr_48363_49252 = state_48360__$1;
(statearr_48363_49252[(2)] = null);

(statearr_48363_49252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (4))){
var inst_48341 = (state_48360[(7)]);
var inst_48341__$1 = (state_48360[(2)]);
var inst_48342 = (inst_48341__$1 == null);
var state_48360__$1 = (function (){var statearr_48364 = state_48360;
(statearr_48364[(7)] = inst_48341__$1);

return statearr_48364;
})();
if(cljs.core.truth_(inst_48342)){
var statearr_48365_49253 = state_48360__$1;
(statearr_48365_49253[(1)] = (5));

} else {
var statearr_48367_49254 = state_48360__$1;
(statearr_48367_49254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (6))){
var inst_48341 = (state_48360[(7)]);
var inst_48346 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48341) : p.call(null,inst_48341));
var state_48360__$1 = state_48360;
if(cljs.core.truth_(inst_48346)){
var statearr_48368_49255 = state_48360__$1;
(statearr_48368_49255[(1)] = (8));

} else {
var statearr_48369_49256 = state_48360__$1;
(statearr_48369_49256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (3))){
var inst_48358 = (state_48360[(2)]);
var state_48360__$1 = state_48360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48360__$1,inst_48358);
} else {
if((state_val_48361 === (2))){
var state_48360__$1 = state_48360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48360__$1,(4),ch);
} else {
if((state_val_48361 === (11))){
var inst_48350 = (state_48360[(2)]);
var state_48360__$1 = state_48360;
var statearr_48374_49257 = state_48360__$1;
(statearr_48374_49257[(2)] = inst_48350);

(statearr_48374_49257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (9))){
var state_48360__$1 = state_48360;
var statearr_48379_49258 = state_48360__$1;
(statearr_48379_49258[(2)] = null);

(statearr_48379_49258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (5))){
var inst_48344 = cljs.core.async.close_BANG_(out);
var state_48360__$1 = state_48360;
var statearr_48380_49259 = state_48360__$1;
(statearr_48380_49259[(2)] = inst_48344);

(statearr_48380_49259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (10))){
var inst_48353 = (state_48360[(2)]);
var state_48360__$1 = (function (){var statearr_48381 = state_48360;
(statearr_48381[(8)] = inst_48353);

return statearr_48381;
})();
var statearr_48382_49260 = state_48360__$1;
(statearr_48382_49260[(2)] = null);

(statearr_48382_49260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48361 === (8))){
var inst_48341 = (state_48360[(7)]);
var state_48360__$1 = state_48360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48360__$1,(11),out,inst_48341);
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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48383 = [null,null,null,null,null,null,null,null,null];
(statearr_48383[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48383[(1)] = (1));

return statearr_48383;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48360){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48360);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48384){var ex__46406__auto__ = e48384;
var statearr_48385_49262 = state_48360;
(statearr_48385_49262[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48360[(4)]))){
var statearr_48387_49263 = state_48360;
(statearr_48387_49263[(1)] = cljs.core.first((state_48360[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49264 = state_48360;
state_48360 = G__49264;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48388 = f__46493__auto__();
(statearr_48388[(6)] = c__46492__auto___49250);

return statearr_48388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48390 = arguments.length;
switch (G__48390) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48453){
var state_val_48454 = (state_48453[(1)]);
if((state_val_48454 === (7))){
var inst_48449 = (state_48453[(2)]);
var state_48453__$1 = state_48453;
var statearr_48455_49266 = state_48453__$1;
(statearr_48455_49266[(2)] = inst_48449);

(statearr_48455_49266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (20))){
var inst_48418 = (state_48453[(7)]);
var inst_48429 = (state_48453[(2)]);
var inst_48431 = cljs.core.next(inst_48418);
var inst_48404 = inst_48431;
var inst_48405 = null;
var inst_48406 = (0);
var inst_48407 = (0);
var state_48453__$1 = (function (){var statearr_48456 = state_48453;
(statearr_48456[(8)] = inst_48407);

(statearr_48456[(9)] = inst_48404);

(statearr_48456[(10)] = inst_48429);

(statearr_48456[(11)] = inst_48405);

(statearr_48456[(12)] = inst_48406);

return statearr_48456;
})();
var statearr_48457_49267 = state_48453__$1;
(statearr_48457_49267[(2)] = null);

(statearr_48457_49267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (1))){
var state_48453__$1 = state_48453;
var statearr_48458_49268 = state_48453__$1;
(statearr_48458_49268[(2)] = null);

(statearr_48458_49268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (4))){
var inst_48393 = (state_48453[(13)]);
var inst_48393__$1 = (state_48453[(2)]);
var inst_48394 = (inst_48393__$1 == null);
var state_48453__$1 = (function (){var statearr_48459 = state_48453;
(statearr_48459[(13)] = inst_48393__$1);

return statearr_48459;
})();
if(cljs.core.truth_(inst_48394)){
var statearr_48460_49273 = state_48453__$1;
(statearr_48460_49273[(1)] = (5));

} else {
var statearr_48461_49274 = state_48453__$1;
(statearr_48461_49274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (15))){
var state_48453__$1 = state_48453;
var statearr_48465_49276 = state_48453__$1;
(statearr_48465_49276[(2)] = null);

(statearr_48465_49276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (21))){
var state_48453__$1 = state_48453;
var statearr_48466_49277 = state_48453__$1;
(statearr_48466_49277[(2)] = null);

(statearr_48466_49277[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (13))){
var inst_48407 = (state_48453[(8)]);
var inst_48404 = (state_48453[(9)]);
var inst_48405 = (state_48453[(11)]);
var inst_48406 = (state_48453[(12)]);
var inst_48414 = (state_48453[(2)]);
var inst_48415 = (inst_48407 + (1));
var tmp48462 = inst_48404;
var tmp48463 = inst_48405;
var tmp48464 = inst_48406;
var inst_48404__$1 = tmp48462;
var inst_48405__$1 = tmp48463;
var inst_48406__$1 = tmp48464;
var inst_48407__$1 = inst_48415;
var state_48453__$1 = (function (){var statearr_48467 = state_48453;
(statearr_48467[(8)] = inst_48407__$1);

(statearr_48467[(9)] = inst_48404__$1);

(statearr_48467[(11)] = inst_48405__$1);

(statearr_48467[(14)] = inst_48414);

(statearr_48467[(12)] = inst_48406__$1);

return statearr_48467;
})();
var statearr_48468_49278 = state_48453__$1;
(statearr_48468_49278[(2)] = null);

(statearr_48468_49278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (22))){
var state_48453__$1 = state_48453;
var statearr_48469_49279 = state_48453__$1;
(statearr_48469_49279[(2)] = null);

(statearr_48469_49279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (6))){
var inst_48393 = (state_48453[(13)]);
var inst_48402 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48393) : f.call(null,inst_48393));
var inst_48403 = cljs.core.seq(inst_48402);
var inst_48404 = inst_48403;
var inst_48405 = null;
var inst_48406 = (0);
var inst_48407 = (0);
var state_48453__$1 = (function (){var statearr_48470 = state_48453;
(statearr_48470[(8)] = inst_48407);

(statearr_48470[(9)] = inst_48404);

(statearr_48470[(11)] = inst_48405);

(statearr_48470[(12)] = inst_48406);

return statearr_48470;
})();
var statearr_48472_49280 = state_48453__$1;
(statearr_48472_49280[(2)] = null);

(statearr_48472_49280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (17))){
var inst_48418 = (state_48453[(7)]);
var inst_48422 = cljs.core.chunk_first(inst_48418);
var inst_48423 = cljs.core.chunk_rest(inst_48418);
var inst_48424 = cljs.core.count(inst_48422);
var inst_48404 = inst_48423;
var inst_48405 = inst_48422;
var inst_48406 = inst_48424;
var inst_48407 = (0);
var state_48453__$1 = (function (){var statearr_48473 = state_48453;
(statearr_48473[(8)] = inst_48407);

(statearr_48473[(9)] = inst_48404);

(statearr_48473[(11)] = inst_48405);

(statearr_48473[(12)] = inst_48406);

return statearr_48473;
})();
var statearr_48474_49282 = state_48453__$1;
(statearr_48474_49282[(2)] = null);

(statearr_48474_49282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (3))){
var inst_48451 = (state_48453[(2)]);
var state_48453__$1 = state_48453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48453__$1,inst_48451);
} else {
if((state_val_48454 === (12))){
var inst_48439 = (state_48453[(2)]);
var state_48453__$1 = state_48453;
var statearr_48475_49283 = state_48453__$1;
(statearr_48475_49283[(2)] = inst_48439);

(statearr_48475_49283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (2))){
var state_48453__$1 = state_48453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48453__$1,(4),in$);
} else {
if((state_val_48454 === (23))){
var inst_48447 = (state_48453[(2)]);
var state_48453__$1 = state_48453;
var statearr_48476_49285 = state_48453__$1;
(statearr_48476_49285[(2)] = inst_48447);

(statearr_48476_49285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (19))){
var inst_48434 = (state_48453[(2)]);
var state_48453__$1 = state_48453;
var statearr_48477_49289 = state_48453__$1;
(statearr_48477_49289[(2)] = inst_48434);

(statearr_48477_49289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (11))){
var inst_48404 = (state_48453[(9)]);
var inst_48418 = (state_48453[(7)]);
var inst_48418__$1 = cljs.core.seq(inst_48404);
var state_48453__$1 = (function (){var statearr_48480 = state_48453;
(statearr_48480[(7)] = inst_48418__$1);

return statearr_48480;
})();
if(inst_48418__$1){
var statearr_48481_49290 = state_48453__$1;
(statearr_48481_49290[(1)] = (14));

} else {
var statearr_48482_49291 = state_48453__$1;
(statearr_48482_49291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (9))){
var inst_48441 = (state_48453[(2)]);
var inst_48442 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48453__$1 = (function (){var statearr_48483 = state_48453;
(statearr_48483[(15)] = inst_48441);

return statearr_48483;
})();
if(cljs.core.truth_(inst_48442)){
var statearr_48484_49292 = state_48453__$1;
(statearr_48484_49292[(1)] = (21));

} else {
var statearr_48485_49293 = state_48453__$1;
(statearr_48485_49293[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (5))){
var inst_48396 = cljs.core.async.close_BANG_(out);
var state_48453__$1 = state_48453;
var statearr_48486_49294 = state_48453__$1;
(statearr_48486_49294[(2)] = inst_48396);

(statearr_48486_49294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (14))){
var inst_48418 = (state_48453[(7)]);
var inst_48420 = cljs.core.chunked_seq_QMARK_(inst_48418);
var state_48453__$1 = state_48453;
if(inst_48420){
var statearr_48487_49295 = state_48453__$1;
(statearr_48487_49295[(1)] = (17));

} else {
var statearr_48488_49296 = state_48453__$1;
(statearr_48488_49296[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (16))){
var inst_48437 = (state_48453[(2)]);
var state_48453__$1 = state_48453;
var statearr_48489_49297 = state_48453__$1;
(statearr_48489_49297[(2)] = inst_48437);

(statearr_48489_49297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48454 === (10))){
var inst_48407 = (state_48453[(8)]);
var inst_48405 = (state_48453[(11)]);
var inst_48412 = cljs.core._nth(inst_48405,inst_48407);
var state_48453__$1 = state_48453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48453__$1,(13),out,inst_48412);
} else {
if((state_val_48454 === (18))){
var inst_48418 = (state_48453[(7)]);
var inst_48427 = cljs.core.first(inst_48418);
var state_48453__$1 = state_48453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48453__$1,(20),out,inst_48427);
} else {
if((state_val_48454 === (8))){
var inst_48407 = (state_48453[(8)]);
var inst_48406 = (state_48453[(12)]);
var inst_48409 = (inst_48407 < inst_48406);
var inst_48410 = inst_48409;
var state_48453__$1 = state_48453;
if(cljs.core.truth_(inst_48410)){
var statearr_48490_49298 = state_48453__$1;
(statearr_48490_49298[(1)] = (10));

} else {
var statearr_48491_49299 = state_48453__$1;
(statearr_48491_49299[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46403__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46403__auto____0 = (function (){
var statearr_48492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48492[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46403__auto__);

(statearr_48492[(1)] = (1));

return statearr_48492;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46403__auto____1 = (function (state_48453){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48453);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48493){var ex__46406__auto__ = e48493;
var statearr_48494_49300 = state_48453;
(statearr_48494_49300[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48453[(4)]))){
var statearr_48495_49301 = state_48453;
(statearr_48495_49301[(1)] = cljs.core.first((state_48453[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49302 = state_48453;
state_48453 = G__49302;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46403__auto__ = function(state_48453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46403__auto____1.call(this,state_48453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46403__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46403__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48496 = f__46493__auto__();
(statearr_48496[(6)] = c__46492__auto__);

return statearr_48496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));

return c__46492__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48498 = arguments.length;
switch (G__48498) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48500 = arguments.length;
switch (G__48500) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48502 = arguments.length;
switch (G__48502) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46492__auto___49306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48526){
var state_val_48527 = (state_48526[(1)]);
if((state_val_48527 === (7))){
var inst_48521 = (state_48526[(2)]);
var state_48526__$1 = state_48526;
var statearr_48528_49307 = state_48526__$1;
(statearr_48528_49307[(2)] = inst_48521);

(statearr_48528_49307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (1))){
var inst_48503 = null;
var state_48526__$1 = (function (){var statearr_48529 = state_48526;
(statearr_48529[(7)] = inst_48503);

return statearr_48529;
})();
var statearr_48530_49308 = state_48526__$1;
(statearr_48530_49308[(2)] = null);

(statearr_48530_49308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (4))){
var inst_48506 = (state_48526[(8)]);
var inst_48506__$1 = (state_48526[(2)]);
var inst_48507 = (inst_48506__$1 == null);
var inst_48508 = cljs.core.not(inst_48507);
var state_48526__$1 = (function (){var statearr_48531 = state_48526;
(statearr_48531[(8)] = inst_48506__$1);

return statearr_48531;
})();
if(inst_48508){
var statearr_48532_49309 = state_48526__$1;
(statearr_48532_49309[(1)] = (5));

} else {
var statearr_48533_49310 = state_48526__$1;
(statearr_48533_49310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (6))){
var state_48526__$1 = state_48526;
var statearr_48534_49311 = state_48526__$1;
(statearr_48534_49311[(2)] = null);

(statearr_48534_49311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (3))){
var inst_48523 = (state_48526[(2)]);
var inst_48524 = cljs.core.async.close_BANG_(out);
var state_48526__$1 = (function (){var statearr_48535 = state_48526;
(statearr_48535[(9)] = inst_48523);

return statearr_48535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48526__$1,inst_48524);
} else {
if((state_val_48527 === (2))){
var state_48526__$1 = state_48526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48526__$1,(4),ch);
} else {
if((state_val_48527 === (11))){
var inst_48506 = (state_48526[(8)]);
var inst_48515 = (state_48526[(2)]);
var inst_48503 = inst_48506;
var state_48526__$1 = (function (){var statearr_48536 = state_48526;
(statearr_48536[(10)] = inst_48515);

(statearr_48536[(7)] = inst_48503);

return statearr_48536;
})();
var statearr_48537_49313 = state_48526__$1;
(statearr_48537_49313[(2)] = null);

(statearr_48537_49313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (9))){
var inst_48506 = (state_48526[(8)]);
var state_48526__$1 = state_48526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48526__$1,(11),out,inst_48506);
} else {
if((state_val_48527 === (5))){
var inst_48506 = (state_48526[(8)]);
var inst_48503 = (state_48526[(7)]);
var inst_48510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48506,inst_48503);
var state_48526__$1 = state_48526;
if(inst_48510){
var statearr_48539_49317 = state_48526__$1;
(statearr_48539_49317[(1)] = (8));

} else {
var statearr_48540_49318 = state_48526__$1;
(statearr_48540_49318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (10))){
var inst_48518 = (state_48526[(2)]);
var state_48526__$1 = state_48526;
var statearr_48541_49319 = state_48526__$1;
(statearr_48541_49319[(2)] = inst_48518);

(statearr_48541_49319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (8))){
var inst_48503 = (state_48526[(7)]);
var tmp48538 = inst_48503;
var inst_48503__$1 = tmp48538;
var state_48526__$1 = (function (){var statearr_48542 = state_48526;
(statearr_48542[(7)] = inst_48503__$1);

return statearr_48542;
})();
var statearr_48543_49320 = state_48526__$1;
(statearr_48543_49320[(2)] = null);

(statearr_48543_49320[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48544[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48544[(1)] = (1));

return statearr_48544;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48526){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48526);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48545){var ex__46406__auto__ = e48545;
var statearr_48546_49321 = state_48526;
(statearr_48546_49321[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48526[(4)]))){
var statearr_48547_49322 = state_48526;
(statearr_48547_49322[(1)] = cljs.core.first((state_48526[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49323 = state_48526;
state_48526 = G__49323;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48548 = f__46493__auto__();
(statearr_48548[(6)] = c__46492__auto___49306);

return statearr_48548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48550 = arguments.length;
switch (G__48550) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46492__auto___49325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48588){
var state_val_48589 = (state_48588[(1)]);
if((state_val_48589 === (7))){
var inst_48584 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48590_49326 = state_48588__$1;
(statearr_48590_49326[(2)] = inst_48584);

(statearr_48590_49326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (1))){
var inst_48551 = (new Array(n));
var inst_48552 = inst_48551;
var inst_48553 = (0);
var state_48588__$1 = (function (){var statearr_48591 = state_48588;
(statearr_48591[(7)] = inst_48552);

(statearr_48591[(8)] = inst_48553);

return statearr_48591;
})();
var statearr_48592_49327 = state_48588__$1;
(statearr_48592_49327[(2)] = null);

(statearr_48592_49327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (4))){
var inst_48556 = (state_48588[(9)]);
var inst_48556__$1 = (state_48588[(2)]);
var inst_48557 = (inst_48556__$1 == null);
var inst_48558 = cljs.core.not(inst_48557);
var state_48588__$1 = (function (){var statearr_48593 = state_48588;
(statearr_48593[(9)] = inst_48556__$1);

return statearr_48593;
})();
if(inst_48558){
var statearr_48594_49328 = state_48588__$1;
(statearr_48594_49328[(1)] = (5));

} else {
var statearr_48595_49329 = state_48588__$1;
(statearr_48595_49329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (15))){
var inst_48578 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48596_49331 = state_48588__$1;
(statearr_48596_49331[(2)] = inst_48578);

(statearr_48596_49331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (13))){
var state_48588__$1 = state_48588;
var statearr_48597_49332 = state_48588__$1;
(statearr_48597_49332[(2)] = null);

(statearr_48597_49332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (6))){
var inst_48553 = (state_48588[(8)]);
var inst_48574 = (inst_48553 > (0));
var state_48588__$1 = state_48588;
if(cljs.core.truth_(inst_48574)){
var statearr_48598_49333 = state_48588__$1;
(statearr_48598_49333[(1)] = (12));

} else {
var statearr_48599_49334 = state_48588__$1;
(statearr_48599_49334[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (3))){
var inst_48586 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48588__$1,inst_48586);
} else {
if((state_val_48589 === (12))){
var inst_48552 = (state_48588[(7)]);
var inst_48576 = cljs.core.vec(inst_48552);
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48588__$1,(15),out,inst_48576);
} else {
if((state_val_48589 === (2))){
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48588__$1,(4),ch);
} else {
if((state_val_48589 === (11))){
var inst_48568 = (state_48588[(2)]);
var inst_48569 = (new Array(n));
var inst_48552 = inst_48569;
var inst_48553 = (0);
var state_48588__$1 = (function (){var statearr_48600 = state_48588;
(statearr_48600[(10)] = inst_48568);

(statearr_48600[(7)] = inst_48552);

(statearr_48600[(8)] = inst_48553);

return statearr_48600;
})();
var statearr_48601_49335 = state_48588__$1;
(statearr_48601_49335[(2)] = null);

(statearr_48601_49335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (9))){
var inst_48552 = (state_48588[(7)]);
var inst_48566 = cljs.core.vec(inst_48552);
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48588__$1,(11),out,inst_48566);
} else {
if((state_val_48589 === (5))){
var inst_48556 = (state_48588[(9)]);
var inst_48552 = (state_48588[(7)]);
var inst_48553 = (state_48588[(8)]);
var inst_48561 = (state_48588[(11)]);
var inst_48560 = (inst_48552[inst_48553] = inst_48556);
var inst_48561__$1 = (inst_48553 + (1));
var inst_48562 = (inst_48561__$1 < n);
var state_48588__$1 = (function (){var statearr_48602 = state_48588;
(statearr_48602[(12)] = inst_48560);

(statearr_48602[(11)] = inst_48561__$1);

return statearr_48602;
})();
if(cljs.core.truth_(inst_48562)){
var statearr_48603_49337 = state_48588__$1;
(statearr_48603_49337[(1)] = (8));

} else {
var statearr_48604_49338 = state_48588__$1;
(statearr_48604_49338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (14))){
var inst_48581 = (state_48588[(2)]);
var inst_48582 = cljs.core.async.close_BANG_(out);
var state_48588__$1 = (function (){var statearr_48606 = state_48588;
(statearr_48606[(13)] = inst_48581);

return statearr_48606;
})();
var statearr_48607_49342 = state_48588__$1;
(statearr_48607_49342[(2)] = inst_48582);

(statearr_48607_49342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (10))){
var inst_48572 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48608_49343 = state_48588__$1;
(statearr_48608_49343[(2)] = inst_48572);

(statearr_48608_49343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (8))){
var inst_48552 = (state_48588[(7)]);
var inst_48561 = (state_48588[(11)]);
var tmp48605 = inst_48552;
var inst_48552__$1 = tmp48605;
var inst_48553 = inst_48561;
var state_48588__$1 = (function (){var statearr_48609 = state_48588;
(statearr_48609[(7)] = inst_48552__$1);

(statearr_48609[(8)] = inst_48553);

return statearr_48609;
})();
var statearr_48610_49344 = state_48588__$1;
(statearr_48610_49344[(2)] = null);

(statearr_48610_49344[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48611[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48611[(1)] = (1));

return statearr_48611;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48588){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48588);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48612){var ex__46406__auto__ = e48612;
var statearr_48613_49345 = state_48588;
(statearr_48613_49345[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48588[(4)]))){
var statearr_48614_49346 = state_48588;
(statearr_48614_49346[(1)] = cljs.core.first((state_48588[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49347 = state_48588;
state_48588 = G__49347;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48615 = f__46493__auto__();
(statearr_48615[(6)] = c__46492__auto___49325);

return statearr_48615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48617 = arguments.length;
switch (G__48617) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46492__auto___49350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_48662){
var state_val_48663 = (state_48662[(1)]);
if((state_val_48663 === (7))){
var inst_48658 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
var statearr_48664_49351 = state_48662__$1;
(statearr_48664_49351[(2)] = inst_48658);

(statearr_48664_49351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (1))){
var inst_48618 = [];
var inst_48619 = inst_48618;
var inst_48620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48662__$1 = (function (){var statearr_48665 = state_48662;
(statearr_48665[(7)] = inst_48620);

(statearr_48665[(8)] = inst_48619);

return statearr_48665;
})();
var statearr_48666_49352 = state_48662__$1;
(statearr_48666_49352[(2)] = null);

(statearr_48666_49352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (4))){
var inst_48623 = (state_48662[(9)]);
var inst_48623__$1 = (state_48662[(2)]);
var inst_48624 = (inst_48623__$1 == null);
var inst_48625 = cljs.core.not(inst_48624);
var state_48662__$1 = (function (){var statearr_48667 = state_48662;
(statearr_48667[(9)] = inst_48623__$1);

return statearr_48667;
})();
if(inst_48625){
var statearr_48668_49354 = state_48662__$1;
(statearr_48668_49354[(1)] = (5));

} else {
var statearr_48669_49355 = state_48662__$1;
(statearr_48669_49355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (15))){
var inst_48619 = (state_48662[(8)]);
var inst_48650 = cljs.core.vec(inst_48619);
var state_48662__$1 = state_48662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48662__$1,(18),out,inst_48650);
} else {
if((state_val_48663 === (13))){
var inst_48645 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
var statearr_48670_49359 = state_48662__$1;
(statearr_48670_49359[(2)] = inst_48645);

(statearr_48670_49359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (6))){
var inst_48619 = (state_48662[(8)]);
var inst_48647 = inst_48619.length;
var inst_48648 = (inst_48647 > (0));
var state_48662__$1 = state_48662;
if(cljs.core.truth_(inst_48648)){
var statearr_48671_49364 = state_48662__$1;
(statearr_48671_49364[(1)] = (15));

} else {
var statearr_48672_49365 = state_48662__$1;
(statearr_48672_49365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (17))){
var inst_48655 = (state_48662[(2)]);
var inst_48656 = cljs.core.async.close_BANG_(out);
var state_48662__$1 = (function (){var statearr_48673 = state_48662;
(statearr_48673[(10)] = inst_48655);

return statearr_48673;
})();
var statearr_48674_49367 = state_48662__$1;
(statearr_48674_49367[(2)] = inst_48656);

(statearr_48674_49367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (3))){
var inst_48660 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48662__$1,inst_48660);
} else {
if((state_val_48663 === (12))){
var inst_48619 = (state_48662[(8)]);
var inst_48638 = cljs.core.vec(inst_48619);
var state_48662__$1 = state_48662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48662__$1,(14),out,inst_48638);
} else {
if((state_val_48663 === (2))){
var state_48662__$1 = state_48662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48662__$1,(4),ch);
} else {
if((state_val_48663 === (11))){
var inst_48623 = (state_48662[(9)]);
var inst_48619 = (state_48662[(8)]);
var inst_48627 = (state_48662[(11)]);
var inst_48635 = inst_48619.push(inst_48623);
var tmp48675 = inst_48619;
var inst_48619__$1 = tmp48675;
var inst_48620 = inst_48627;
var state_48662__$1 = (function (){var statearr_48676 = state_48662;
(statearr_48676[(7)] = inst_48620);

(statearr_48676[(8)] = inst_48619__$1);

(statearr_48676[(12)] = inst_48635);

return statearr_48676;
})();
var statearr_48677_49372 = state_48662__$1;
(statearr_48677_49372[(2)] = null);

(statearr_48677_49372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (9))){
var inst_48620 = (state_48662[(7)]);
var inst_48631 = cljs.core.keyword_identical_QMARK_(inst_48620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48662__$1 = state_48662;
var statearr_48678_49374 = state_48662__$1;
(statearr_48678_49374[(2)] = inst_48631);

(statearr_48678_49374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (5))){
var inst_48620 = (state_48662[(7)]);
var inst_48623 = (state_48662[(9)]);
var inst_48628 = (state_48662[(13)]);
var inst_48627 = (state_48662[(11)]);
var inst_48627__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48623) : f.call(null,inst_48623));
var inst_48628__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48627__$1,inst_48620);
var state_48662__$1 = (function (){var statearr_48679 = state_48662;
(statearr_48679[(13)] = inst_48628__$1);

(statearr_48679[(11)] = inst_48627__$1);

return statearr_48679;
})();
if(inst_48628__$1){
var statearr_48680_49375 = state_48662__$1;
(statearr_48680_49375[(1)] = (8));

} else {
var statearr_48681_49376 = state_48662__$1;
(statearr_48681_49376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (14))){
var inst_48623 = (state_48662[(9)]);
var inst_48627 = (state_48662[(11)]);
var inst_48640 = (state_48662[(2)]);
var inst_48641 = [];
var inst_48642 = inst_48641.push(inst_48623);
var inst_48619 = inst_48641;
var inst_48620 = inst_48627;
var state_48662__$1 = (function (){var statearr_48682 = state_48662;
(statearr_48682[(7)] = inst_48620);

(statearr_48682[(8)] = inst_48619);

(statearr_48682[(14)] = inst_48640);

(statearr_48682[(15)] = inst_48642);

return statearr_48682;
})();
var statearr_48683_49377 = state_48662__$1;
(statearr_48683_49377[(2)] = null);

(statearr_48683_49377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (16))){
var state_48662__$1 = state_48662;
var statearr_48684_49379 = state_48662__$1;
(statearr_48684_49379[(2)] = null);

(statearr_48684_49379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (10))){
var inst_48633 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
if(cljs.core.truth_(inst_48633)){
var statearr_48685_49380 = state_48662__$1;
(statearr_48685_49380[(1)] = (11));

} else {
var statearr_48686_49382 = state_48662__$1;
(statearr_48686_49382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (18))){
var inst_48652 = (state_48662[(2)]);
var state_48662__$1 = state_48662;
var statearr_48687_49383 = state_48662__$1;
(statearr_48687_49383[(2)] = inst_48652);

(statearr_48687_49383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48663 === (8))){
var inst_48628 = (state_48662[(13)]);
var state_48662__$1 = state_48662;
var statearr_48688_49384 = state_48662__$1;
(statearr_48688_49384[(2)] = inst_48628);

(statearr_48688_49384[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__46403__auto__ = null;
var cljs$core$async$state_machine__46403__auto____0 = (function (){
var statearr_48689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48689[(0)] = cljs$core$async$state_machine__46403__auto__);

(statearr_48689[(1)] = (1));

return statearr_48689;
});
var cljs$core$async$state_machine__46403__auto____1 = (function (state_48662){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_48662);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e48690){var ex__46406__auto__ = e48690;
var statearr_48691_49387 = state_48662;
(statearr_48691_49387[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_48662[(4)]))){
var statearr_48692_49388 = state_48662;
(statearr_48692_49388[(1)] = cljs.core.first((state_48662[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49389 = state_48662;
state_48662 = G__49389;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
cljs$core$async$state_machine__46403__auto__ = function(state_48662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46403__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46403__auto____1.call(this,state_48662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46403__auto____0;
cljs$core$async$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46403__auto____1;
return cljs$core$async$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_48693 = f__46493__auto__();
(statearr_48693[(6)] = c__46492__auto___49350);

return statearr_48693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
