goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35558 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35559 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35559);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35651 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35651)){
var new_db_35652 = temp__5753__auto___35651;
var fexpr__35562_35653 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35562_35653.cljs$core$IFn$_invoke$arity$1 ? fexpr__35562_35653.cljs$core$IFn$_invoke$arity$1(new_db_35652) : fexpr__35562_35653.call(null,new_db_35652));
} else {
}

var seq__35563 = cljs.core.seq(effects_without_db);
var chunk__35564 = null;
var count__35565 = (0);
var i__35566 = (0);
while(true){
if((i__35566 < count__35565)){
var vec__35576 = chunk__35564.cljs$core$IIndexed$_nth$arity$2(null,i__35566);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35576,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35576,(1),null);
var temp__5751__auto___35654 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35654)){
var effect_fn_35655 = temp__5751__auto___35654;
(effect_fn_35655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35655.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35656 = seq__35563;
var G__35657 = chunk__35564;
var G__35658 = count__35565;
var G__35659 = (i__35566 + (1));
seq__35563 = G__35656;
chunk__35564 = G__35657;
count__35565 = G__35658;
i__35566 = G__35659;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35563);
if(temp__5753__auto__){
var seq__35563__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35563__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35563__$1);
var G__35660 = cljs.core.chunk_rest(seq__35563__$1);
var G__35661 = c__4649__auto__;
var G__35662 = cljs.core.count(c__4649__auto__);
var G__35663 = (0);
seq__35563 = G__35660;
chunk__35564 = G__35661;
count__35565 = G__35662;
i__35566 = G__35663;
continue;
} else {
var vec__35581 = cljs.core.first(seq__35563__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35581,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35581,(1),null);
var temp__5751__auto___35664 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35664)){
var effect_fn_35665 = temp__5751__auto___35664;
(effect_fn_35665.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35665.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35665.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35666 = cljs.core.next(seq__35563__$1);
var G__35667 = null;
var G__35668 = (0);
var G__35669 = (0);
seq__35563 = G__35666;
chunk__35564 = G__35667;
count__35565 = G__35668;
i__35566 = G__35669;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__35293__auto___35670 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__35294__auto___35671 = (end__35293__auto___35670 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35294__auto___35671,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__35293__auto___35670);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35558);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35672 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35672)){
var new_db_35673 = temp__5753__auto___35672;
var fexpr__35586_35674 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35586_35674.cljs$core$IFn$_invoke$arity$1 ? fexpr__35586_35674.cljs$core$IFn$_invoke$arity$1(new_db_35673) : fexpr__35586_35674.call(null,new_db_35673));
} else {
}

var seq__35588 = cljs.core.seq(effects_without_db);
var chunk__35589 = null;
var count__35590 = (0);
var i__35591 = (0);
while(true){
if((i__35591 < count__35590)){
var vec__35599 = chunk__35589.cljs$core$IIndexed$_nth$arity$2(null,i__35591);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(1),null);
var temp__5751__auto___35675 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35675)){
var effect_fn_35676 = temp__5751__auto___35675;
(effect_fn_35676.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35676.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35676.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35677 = seq__35588;
var G__35678 = chunk__35589;
var G__35679 = count__35590;
var G__35680 = (i__35591 + (1));
seq__35588 = G__35677;
chunk__35589 = G__35678;
count__35590 = G__35679;
i__35591 = G__35680;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35588);
if(temp__5753__auto__){
var seq__35588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35588__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35588__$1);
var G__35681 = cljs.core.chunk_rest(seq__35588__$1);
var G__35682 = c__4649__auto__;
var G__35683 = cljs.core.count(c__4649__auto__);
var G__35684 = (0);
seq__35588 = G__35681;
chunk__35589 = G__35682;
count__35590 = G__35683;
i__35591 = G__35684;
continue;
} else {
var vec__35602 = cljs.core.first(seq__35588__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(1),null);
var temp__5751__auto___35685 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35685)){
var effect_fn_35686 = temp__5751__auto___35685;
(effect_fn_35686.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35686.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35686.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35687 = cljs.core.next(seq__35588__$1);
var G__35688 = null;
var G__35689 = (0);
var G__35690 = (0);
seq__35588 = G__35687;
chunk__35589 = G__35688;
count__35590 = G__35689;
i__35591 = G__35690;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__35608){
var map__35609 = p__35608;
var map__35609__$1 = cljs.core.__destructure_map(map__35609);
var effect = map__35609__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__35610 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35611 = null;
var count__35612 = (0);
var i__35613 = (0);
while(true){
if((i__35613 < count__35612)){
var effect = chunk__35611.cljs$core$IIndexed$_nth$arity$2(null,i__35613);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35691 = seq__35610;
var G__35692 = chunk__35611;
var G__35693 = count__35612;
var G__35694 = (i__35613 + (1));
seq__35610 = G__35691;
chunk__35611 = G__35692;
count__35612 = G__35693;
i__35613 = G__35694;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35610);
if(temp__5753__auto__){
var seq__35610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35610__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35610__$1);
var G__35695 = cljs.core.chunk_rest(seq__35610__$1);
var G__35696 = c__4649__auto__;
var G__35697 = cljs.core.count(c__4649__auto__);
var G__35698 = (0);
seq__35610 = G__35695;
chunk__35611 = G__35696;
count__35612 = G__35697;
i__35613 = G__35698;
continue;
} else {
var effect = cljs.core.first(seq__35610__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35699 = cljs.core.next(seq__35610__$1);
var G__35700 = null;
var G__35701 = (0);
var G__35702 = (0);
seq__35610 = G__35699;
chunk__35611 = G__35700;
count__35612 = G__35701;
i__35613 = G__35702;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35627 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35628 = null;
var count__35629 = (0);
var i__35630 = (0);
while(true){
if((i__35630 < count__35629)){
var vec__35637 = chunk__35628.cljs$core$IIndexed$_nth$arity$2(null,i__35630);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35703 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35703)){
var effect_fn_35704 = temp__5751__auto___35703;
(effect_fn_35704.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35704.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35704.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35705 = seq__35627;
var G__35706 = chunk__35628;
var G__35707 = count__35629;
var G__35708 = (i__35630 + (1));
seq__35627 = G__35705;
chunk__35628 = G__35706;
count__35629 = G__35707;
i__35630 = G__35708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35627);
if(temp__5753__auto__){
var seq__35627__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35627__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35627__$1);
var G__35709 = cljs.core.chunk_rest(seq__35627__$1);
var G__35710 = c__4649__auto__;
var G__35711 = cljs.core.count(c__4649__auto__);
var G__35712 = (0);
seq__35627 = G__35709;
chunk__35628 = G__35710;
count__35629 = G__35711;
i__35630 = G__35712;
continue;
} else {
var vec__35640 = cljs.core.first(seq__35627__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35713 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35713)){
var effect_fn_35714 = temp__5751__auto___35713;
(effect_fn_35714.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35714.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35714.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35715 = cljs.core.next(seq__35627__$1);
var G__35716 = null;
var G__35717 = (0);
var G__35718 = (0);
seq__35627 = G__35715;
chunk__35628 = G__35716;
count__35629 = G__35717;
i__35630 = G__35718;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35643 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35644 = null;
var count__35645 = (0);
var i__35646 = (0);
while(true){
if((i__35646 < count__35645)){
var event = chunk__35644.cljs$core$IIndexed$_nth$arity$2(null,i__35646);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35719 = seq__35643;
var G__35720 = chunk__35644;
var G__35721 = count__35645;
var G__35722 = (i__35646 + (1));
seq__35643 = G__35719;
chunk__35644 = G__35720;
count__35645 = G__35721;
i__35646 = G__35722;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35643);
if(temp__5753__auto__){
var seq__35643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35643__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35643__$1);
var G__35723 = cljs.core.chunk_rest(seq__35643__$1);
var G__35724 = c__4649__auto__;
var G__35725 = cljs.core.count(c__4649__auto__);
var G__35726 = (0);
seq__35643 = G__35723;
chunk__35644 = G__35724;
count__35645 = G__35725;
i__35646 = G__35726;
continue;
} else {
var event = cljs.core.first(seq__35643__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35727 = cljs.core.next(seq__35643__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35643 = G__35727;
chunk__35644 = G__35728;
count__35645 = G__35729;
i__35646 = G__35730;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35647 = cljs.core.seq(value);
var chunk__35648 = null;
var count__35649 = (0);
var i__35650 = (0);
while(true){
if((i__35650 < count__35649)){
var event = chunk__35648.cljs$core$IIndexed$_nth$arity$2(null,i__35650);
clear_event(event);


var G__35731 = seq__35647;
var G__35732 = chunk__35648;
var G__35733 = count__35649;
var G__35734 = (i__35650 + (1));
seq__35647 = G__35731;
chunk__35648 = G__35732;
count__35649 = G__35733;
i__35650 = G__35734;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35647);
if(temp__5753__auto__){
var seq__35647__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35647__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35647__$1);
var G__35735 = cljs.core.chunk_rest(seq__35647__$1);
var G__35736 = c__4649__auto__;
var G__35737 = cljs.core.count(c__4649__auto__);
var G__35738 = (0);
seq__35647 = G__35735;
chunk__35648 = G__35736;
count__35649 = G__35737;
i__35650 = G__35738;
continue;
} else {
var event = cljs.core.first(seq__35647__$1);
clear_event(event);


var G__35739 = cljs.core.next(seq__35647__$1);
var G__35740 = null;
var G__35741 = (0);
var G__35742 = (0);
seq__35647 = G__35739;
chunk__35648 = G__35740;
count__35649 = G__35741;
i__35650 = G__35742;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
