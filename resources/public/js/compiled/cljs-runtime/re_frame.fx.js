goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38912 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38913 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38913);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39013 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39013)){
var new_db_39017 = temp__5753__auto___39013;
var fexpr__38919_39018 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38919_39018.cljs$core$IFn$_invoke$arity$1 ? fexpr__38919_39018.cljs$core$IFn$_invoke$arity$1(new_db_39017) : fexpr__38919_39018.call(null,new_db_39017));
} else {
}

var seq__38920 = cljs.core.seq(effects_without_db);
var chunk__38921 = null;
var count__38922 = (0);
var i__38923 = (0);
while(true){
if((i__38923 < count__38922)){
var vec__38933 = chunk__38921.cljs$core$IIndexed$_nth$arity$2(null,i__38923);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38933,(1),null);
var temp__5751__auto___39019 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39019)){
var effect_fn_39020 = temp__5751__auto___39019;
(effect_fn_39020.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39020.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39020.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39021 = seq__38920;
var G__39022 = chunk__38921;
var G__39023 = count__38922;
var G__39024 = (i__38923 + (1));
seq__38920 = G__39021;
chunk__38921 = G__39022;
count__38922 = G__39023;
i__38923 = G__39024;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38920);
if(temp__5753__auto__){
var seq__38920__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38920__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__38920__$1);
var G__39025 = cljs.core.chunk_rest(seq__38920__$1);
var G__39026 = c__4649__auto__;
var G__39027 = cljs.core.count(c__4649__auto__);
var G__39028 = (0);
seq__38920 = G__39025;
chunk__38921 = G__39026;
count__38922 = G__39027;
i__38923 = G__39028;
continue;
} else {
var vec__38938 = cljs.core.first(seq__38920__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38938,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38938,(1),null);
var temp__5751__auto___39029 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39029)){
var effect_fn_39030 = temp__5751__auto___39029;
(effect_fn_39030.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39030.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39030.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39031 = cljs.core.next(seq__38920__$1);
var G__39032 = null;
var G__39033 = (0);
var G__39034 = (0);
seq__38920 = G__39031;
chunk__38921 = G__39032;
count__38922 = G__39033;
i__38923 = G__39034;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38586__auto___39035 = re_frame.interop.now();
var duration__38587__auto___39036 = (end__38586__auto___39035 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38587__auto___39036,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38586__auto___39035);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38912);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39037 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39037)){
var new_db_39038 = temp__5753__auto___39037;
var fexpr__38943_39039 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38943_39039.cljs$core$IFn$_invoke$arity$1 ? fexpr__38943_39039.cljs$core$IFn$_invoke$arity$1(new_db_39038) : fexpr__38943_39039.call(null,new_db_39038));
} else {
}

var seq__38944 = cljs.core.seq(effects_without_db);
var chunk__38945 = null;
var count__38946 = (0);
var i__38947 = (0);
while(true){
if((i__38947 < count__38946)){
var vec__38955 = chunk__38945.cljs$core$IIndexed$_nth$arity$2(null,i__38947);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38955,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38955,(1),null);
var temp__5751__auto___39040 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39040)){
var effect_fn_39041 = temp__5751__auto___39040;
(effect_fn_39041.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39041.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39041.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39042 = seq__38944;
var G__39043 = chunk__38945;
var G__39044 = count__38946;
var G__39045 = (i__38947 + (1));
seq__38944 = G__39042;
chunk__38945 = G__39043;
count__38946 = G__39044;
i__38947 = G__39045;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38944);
if(temp__5753__auto__){
var seq__38944__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38944__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__38944__$1);
var G__39046 = cljs.core.chunk_rest(seq__38944__$1);
var G__39047 = c__4649__auto__;
var G__39048 = cljs.core.count(c__4649__auto__);
var G__39049 = (0);
seq__38944 = G__39046;
chunk__38945 = G__39047;
count__38946 = G__39048;
i__38947 = G__39049;
continue;
} else {
var vec__38958 = cljs.core.first(seq__38944__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38958,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38958,(1),null);
var temp__5751__auto___39050 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39050)){
var effect_fn_39051 = temp__5751__auto___39050;
(effect_fn_39051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39051.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39054 = cljs.core.next(seq__38944__$1);
var G__39055 = null;
var G__39056 = (0);
var G__39057 = (0);
seq__38944 = G__39054;
chunk__38945 = G__39055;
count__38946 = G__39056;
i__38947 = G__39057;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38962){
var map__38963 = p__38962;
var map__38963__$1 = cljs.core.__destructure_map(map__38963);
var effect = map__38963__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38963__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38963__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38966 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38967 = null;
var count__38968 = (0);
var i__38969 = (0);
while(true){
if((i__38969 < count__38968)){
var effect = chunk__38967.cljs$core$IIndexed$_nth$arity$2(null,i__38969);
re_frame.fx.dispatch_later(effect);


var G__39059 = seq__38966;
var G__39060 = chunk__38967;
var G__39061 = count__38968;
var G__39062 = (i__38969 + (1));
seq__38966 = G__39059;
chunk__38967 = G__39060;
count__38968 = G__39061;
i__38969 = G__39062;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38966);
if(temp__5753__auto__){
var seq__38966__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38966__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__38966__$1);
var G__39063 = cljs.core.chunk_rest(seq__38966__$1);
var G__39064 = c__4649__auto__;
var G__39065 = cljs.core.count(c__4649__auto__);
var G__39066 = (0);
seq__38966 = G__39063;
chunk__38967 = G__39064;
count__38968 = G__39065;
i__38969 = G__39066;
continue;
} else {
var effect = cljs.core.first(seq__38966__$1);
re_frame.fx.dispatch_later(effect);


var G__39068 = cljs.core.next(seq__38966__$1);
var G__39069 = null;
var G__39070 = (0);
var G__39071 = (0);
seq__38966 = G__39068;
chunk__38967 = G__39069;
count__38968 = G__39070;
i__38969 = G__39071;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38973 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38974 = null;
var count__38975 = (0);
var i__38976 = (0);
while(true){
if((i__38976 < count__38975)){
var vec__38995 = chunk__38974.cljs$core$IIndexed$_nth$arity$2(null,i__38976);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38995,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39072 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39072)){
var effect_fn_39073 = temp__5751__auto___39072;
(effect_fn_39073.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39073.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39073.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39074 = seq__38973;
var G__39075 = chunk__38974;
var G__39076 = count__38975;
var G__39077 = (i__38976 + (1));
seq__38973 = G__39074;
chunk__38974 = G__39075;
count__38975 = G__39076;
i__38976 = G__39077;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38973);
if(temp__5753__auto__){
var seq__38973__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38973__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__38973__$1);
var G__39078 = cljs.core.chunk_rest(seq__38973__$1);
var G__39079 = c__4649__auto__;
var G__39080 = cljs.core.count(c__4649__auto__);
var G__39081 = (0);
seq__38973 = G__39078;
chunk__38974 = G__39079;
count__38975 = G__39080;
i__38976 = G__39081;
continue;
} else {
var vec__38998 = cljs.core.first(seq__38973__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38998,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39082 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39082)){
var effect_fn_39083 = temp__5751__auto___39082;
(effect_fn_39083.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39083.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39083.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39084 = cljs.core.next(seq__38973__$1);
var G__39085 = null;
var G__39086 = (0);
var G__39087 = (0);
seq__38973 = G__39084;
chunk__38974 = G__39085;
count__38975 = G__39086;
i__38976 = G__39087;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39002 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39003 = null;
var count__39004 = (0);
var i__39005 = (0);
while(true){
if((i__39005 < count__39004)){
var event = chunk__39003.cljs$core$IIndexed$_nth$arity$2(null,i__39005);
re_frame.router.dispatch(event);


var G__39090 = seq__39002;
var G__39091 = chunk__39003;
var G__39092 = count__39004;
var G__39093 = (i__39005 + (1));
seq__39002 = G__39090;
chunk__39003 = G__39091;
count__39004 = G__39092;
i__39005 = G__39093;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39002);
if(temp__5753__auto__){
var seq__39002__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39002__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39002__$1);
var G__39094 = cljs.core.chunk_rest(seq__39002__$1);
var G__39095 = c__4649__auto__;
var G__39096 = cljs.core.count(c__4649__auto__);
var G__39097 = (0);
seq__39002 = G__39094;
chunk__39003 = G__39095;
count__39004 = G__39096;
i__39005 = G__39097;
continue;
} else {
var event = cljs.core.first(seq__39002__$1);
re_frame.router.dispatch(event);


var G__39098 = cljs.core.next(seq__39002__$1);
var G__39099 = null;
var G__39100 = (0);
var G__39101 = (0);
seq__39002 = G__39098;
chunk__39003 = G__39099;
count__39004 = G__39100;
i__39005 = G__39101;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39006 = cljs.core.seq(value);
var chunk__39007 = null;
var count__39008 = (0);
var i__39009 = (0);
while(true){
if((i__39009 < count__39008)){
var event = chunk__39007.cljs$core$IIndexed$_nth$arity$2(null,i__39009);
clear_event(event);


var G__39103 = seq__39006;
var G__39104 = chunk__39007;
var G__39105 = count__39008;
var G__39106 = (i__39009 + (1));
seq__39006 = G__39103;
chunk__39007 = G__39104;
count__39008 = G__39105;
i__39009 = G__39106;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39006);
if(temp__5753__auto__){
var seq__39006__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39006__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39006__$1);
var G__39108 = cljs.core.chunk_rest(seq__39006__$1);
var G__39109 = c__4649__auto__;
var G__39110 = cljs.core.count(c__4649__auto__);
var G__39111 = (0);
seq__39006 = G__39108;
chunk__39007 = G__39109;
count__39008 = G__39110;
i__39009 = G__39111;
continue;
} else {
var event = cljs.core.first(seq__39006__$1);
clear_event(event);


var G__39112 = cljs.core.next(seq__39006__$1);
var G__39113 = null;
var G__39114 = (0);
var G__39115 = (0);
seq__39006 = G__39112;
chunk__39007 = G__39113;
count__39008 = G__39114;
i__39009 = G__39115;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
