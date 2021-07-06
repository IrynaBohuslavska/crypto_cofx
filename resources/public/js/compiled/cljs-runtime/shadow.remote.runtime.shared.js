goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47108,res){
var map__47111 = p__47108;
var map__47111__$1 = cljs.core.__destructure_map(map__47111);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47111__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47111__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47112 = res;
var G__47112__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47112,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47112);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47112__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47112__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47117 = arguments.length;
switch (G__47117) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47120,msg,handlers,timeout_after_ms){
var map__47122 = p__47120;
var map__47122__$1 = cljs.core.__destructure_map(map__47122);
var runtime = map__47122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47329 = arguments.length;
var i__4830__auto___47331 = (0);
while(true){
if((i__4830__auto___47331 < len__4829__auto___47329)){
args__4835__auto__.push((arguments[i__4830__auto___47331]));

var G__47333 = (i__4830__auto___47331 + (1));
i__4830__auto___47331 = G__47333;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47135,ev,args){
var map__47136 = p__47135;
var map__47136__$1 = cljs.core.__destructure_map(map__47136);
var runtime = map__47136__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47136__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47137 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47140 = null;
var count__47141 = (0);
var i__47142 = (0);
while(true){
if((i__47142 < count__47141)){
var ext = chunk__47140.cljs$core$IIndexed$_nth$arity$2(null,i__47142);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47342 = seq__47137;
var G__47343 = chunk__47140;
var G__47344 = count__47141;
var G__47345 = (i__47142 + (1));
seq__47137 = G__47342;
chunk__47140 = G__47343;
count__47141 = G__47344;
i__47142 = G__47345;
continue;
} else {
var G__47347 = seq__47137;
var G__47348 = chunk__47140;
var G__47349 = count__47141;
var G__47350 = (i__47142 + (1));
seq__47137 = G__47347;
chunk__47140 = G__47348;
count__47141 = G__47349;
i__47142 = G__47350;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47137);
if(temp__5753__auto__){
var seq__47137__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47137__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47137__$1);
var G__47352 = cljs.core.chunk_rest(seq__47137__$1);
var G__47353 = c__4649__auto__;
var G__47354 = cljs.core.count(c__4649__auto__);
var G__47355 = (0);
seq__47137 = G__47352;
chunk__47140 = G__47353;
count__47141 = G__47354;
i__47142 = G__47355;
continue;
} else {
var ext = cljs.core.first(seq__47137__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47360 = cljs.core.next(seq__47137__$1);
var G__47361 = null;
var G__47362 = (0);
var G__47363 = (0);
seq__47137 = G__47360;
chunk__47140 = G__47361;
count__47141 = G__47362;
i__47142 = G__47363;
continue;
} else {
var G__47367 = cljs.core.next(seq__47137__$1);
var G__47368 = null;
var G__47369 = (0);
var G__47370 = (0);
seq__47137 = G__47367;
chunk__47140 = G__47368;
count__47141 = G__47369;
i__47142 = G__47370;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47125){
var G__47126 = cljs.core.first(seq47125);
var seq47125__$1 = cljs.core.next(seq47125);
var G__47127 = cljs.core.first(seq47125__$1);
var seq47125__$2 = cljs.core.next(seq47125__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47126,G__47127,seq47125__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47168,p__47169){
var map__47170 = p__47168;
var map__47170__$1 = cljs.core.__destructure_map(map__47170);
var runtime = map__47170__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47171 = p__47169;
var map__47171__$1 = cljs.core.__destructure_map(map__47171);
var msg = map__47171__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47172 = cljs.core.deref(state_ref);
var map__47172__$1 = cljs.core.__destructure_map(map__47172);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47172__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47181){
var map__47182 = p__47181;
var map__47182__$1 = cljs.core.__destructure_map(map__47182);
var runtime = map__47182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47183,msg){
var map__47184 = p__47183;
var map__47184__$1 = cljs.core.__destructure_map(map__47184);
var runtime = map__47184__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47184__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47193,key,p__47194){
var map__47195 = p__47193;
var map__47195__$1 = cljs.core.__destructure_map(map__47195);
var state = map__47195__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47196 = p__47194;
var map__47196__$1 = cljs.core.__destructure_map(map__47196);
var spec = map__47196__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47196__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47197,key,spec){
var map__47198 = p__47197;
var map__47198__$1 = cljs.core.__destructure_map(map__47198);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47198__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47199_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47199_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47200_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47200_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47201_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47201_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47202_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47202_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47203_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47203_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47204,key){
var map__47205 = p__47204;
var map__47205__$1 = cljs.core.__destructure_map(map__47205);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47209,msg){
var map__47210 = p__47209;
var map__47210__$1 = cljs.core.__destructure_map(map__47210);
var runtime = map__47210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47211,p__47212){
var map__47213 = p__47211;
var map__47213__$1 = cljs.core.__destructure_map(map__47213);
var runtime = map__47213__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47213__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47214 = p__47212;
var map__47214__$1 = cljs.core.__destructure_map(map__47214);
var msg = map__47214__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47219 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47222 = null;
var count__47223 = (0);
var i__47224 = (0);
while(true){
if((i__47224 < count__47223)){
var map__47232 = chunk__47222.cljs$core$IIndexed$_nth$arity$2(null,i__47224);
var map__47232__$1 = cljs.core.__destructure_map(map__47232);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47232__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47448 = seq__47219;
var G__47449 = chunk__47222;
var G__47450 = count__47223;
var G__47451 = (i__47224 + (1));
seq__47219 = G__47448;
chunk__47222 = G__47449;
count__47223 = G__47450;
i__47224 = G__47451;
continue;
} else {
var G__47452 = seq__47219;
var G__47453 = chunk__47222;
var G__47454 = count__47223;
var G__47455 = (i__47224 + (1));
seq__47219 = G__47452;
chunk__47222 = G__47453;
count__47223 = G__47454;
i__47224 = G__47455;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47219);
if(temp__5753__auto__){
var seq__47219__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47219__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47219__$1);
var G__47456 = cljs.core.chunk_rest(seq__47219__$1);
var G__47457 = c__4649__auto__;
var G__47458 = cljs.core.count(c__4649__auto__);
var G__47459 = (0);
seq__47219 = G__47456;
chunk__47222 = G__47457;
count__47223 = G__47458;
i__47224 = G__47459;
continue;
} else {
var map__47252 = cljs.core.first(seq__47219__$1);
var map__47252__$1 = cljs.core.__destructure_map(map__47252);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47252__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47460 = cljs.core.next(seq__47219__$1);
var G__47461 = null;
var G__47462 = (0);
var G__47463 = (0);
seq__47219 = G__47460;
chunk__47222 = G__47461;
count__47223 = G__47462;
i__47224 = G__47463;
continue;
} else {
var G__47465 = cljs.core.next(seq__47219__$1);
var G__47466 = null;
var G__47467 = (0);
var G__47468 = (0);
seq__47219 = G__47465;
chunk__47222 = G__47466;
count__47223 = G__47467;
i__47224 = G__47468;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
