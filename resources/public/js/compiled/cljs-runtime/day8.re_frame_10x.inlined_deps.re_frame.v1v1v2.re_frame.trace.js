goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$start_trace(p__35313){
var map__35314 = p__35313;
var map__35314__$1 = cljs.core.__destructure_map(map__35314);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35314__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$tracing_cb_debounced(){
var seq__35315_35342 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs));
var chunk__35316_35343 = null;
var count__35317_35344 = (0);
var i__35318_35345 = (0);
while(true){
if((i__35318_35345 < count__35317_35344)){
var vec__35329_35346 = chunk__35316_35343.cljs$core$IIndexed$_nth$arity$2(null,i__35318_35345);
var k_35347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35329_35346,(0),null);
var cb_35348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35329_35346,(1),null);
try{var G__35333_35349 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_35348.cljs$core$IFn$_invoke$arity$1 ? cb_35348.cljs$core$IFn$_invoke$arity$1(G__35333_35349) : cb_35348.call(null,G__35333_35349));
}catch (e35332){var e_35355 = e35332;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35347,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_35355], 0));
}

var G__35356 = seq__35315_35342;
var G__35357 = chunk__35316_35343;
var G__35358 = count__35317_35344;
var G__35359 = (i__35318_35345 + (1));
seq__35315_35342 = G__35356;
chunk__35316_35343 = G__35357;
count__35317_35344 = G__35358;
i__35318_35345 = G__35359;
continue;
} else {
var temp__5753__auto___35363 = cljs.core.seq(seq__35315_35342);
if(temp__5753__auto___35363){
var seq__35315_35364__$1 = temp__5753__auto___35363;
if(cljs.core.chunked_seq_QMARK_(seq__35315_35364__$1)){
var c__4649__auto___35365 = cljs.core.chunk_first(seq__35315_35364__$1);
var G__35366 = cljs.core.chunk_rest(seq__35315_35364__$1);
var G__35367 = c__4649__auto___35365;
var G__35368 = cljs.core.count(c__4649__auto___35365);
var G__35369 = (0);
seq__35315_35342 = G__35366;
chunk__35316_35343 = G__35367;
count__35317_35344 = G__35368;
i__35318_35345 = G__35369;
continue;
} else {
var vec__35334_35370 = cljs.core.first(seq__35315_35364__$1);
var k_35371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35334_35370,(0),null);
var cb_35372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35334_35370,(1),null);
try{var G__35338_35373 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_35372.cljs$core$IFn$_invoke$arity$1 ? cb_35372.cljs$core$IFn$_invoke$arity$1(G__35338_35373) : cb_35372.call(null,G__35338_35373));
}catch (e35337){var e_35374 = e35337;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35371,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_35374], 0));
}

var G__35380 = cljs.core.next(seq__35315_35364__$1);
var G__35381 = null;
var G__35382 = (0);
var G__35383 = (0);
seq__35315_35342 = G__35380;
chunk__35316_35343 = G__35381;
count__35317_35344 = G__35382;
i__35318_35345 = G__35383;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.js.map
