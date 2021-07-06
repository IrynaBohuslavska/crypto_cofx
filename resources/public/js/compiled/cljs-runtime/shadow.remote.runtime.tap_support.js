goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47861,p__47862){
var map__47863 = p__47861;
var map__47863__$1 = cljs.core.__destructure_map(map__47863);
var svc = map__47863__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47863__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47863__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47863__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47864 = p__47862;
var map__47864__$1 = cljs.core.__destructure_map(map__47864);
var msg = map__47864__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47864__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47864__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47864__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47864__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47865,p__47866){
var map__47867 = p__47865;
var map__47867__$1 = cljs.core.__destructure_map(map__47867);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47867__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47868 = p__47866;
var map__47868__$1 = cljs.core.__destructure_map(map__47868);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47868__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47870,p__47871){
var map__47872 = p__47870;
var map__47872__$1 = cljs.core.__destructure_map(map__47872);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47872__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47872__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47873 = p__47871;
var map__47873__$1 = cljs.core.__destructure_map(map__47873);
var msg = map__47873__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47873__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47875,tid){
var map__47876 = p__47875;
var map__47876__$1 = cljs.core.__destructure_map(map__47876);
var svc = map__47876__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47876__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47882 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47883 = null;
var count__47884 = (0);
var i__47885 = (0);
while(true){
if((i__47885 < count__47884)){
var vec__47894 = chunk__47883.cljs$core$IIndexed$_nth$arity$2(null,i__47885);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47894,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47894,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47917 = seq__47882;
var G__47918 = chunk__47883;
var G__47919 = count__47884;
var G__47920 = (i__47885 + (1));
seq__47882 = G__47917;
chunk__47883 = G__47918;
count__47884 = G__47919;
i__47885 = G__47920;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47882);
if(temp__5753__auto__){
var seq__47882__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47882__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47882__$1);
var G__47929 = cljs.core.chunk_rest(seq__47882__$1);
var G__47930 = c__4649__auto__;
var G__47931 = cljs.core.count(c__4649__auto__);
var G__47932 = (0);
seq__47882 = G__47929;
chunk__47883 = G__47930;
count__47884 = G__47931;
i__47885 = G__47932;
continue;
} else {
var vec__47900 = cljs.core.first(seq__47882__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47900,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47939 = cljs.core.next(seq__47882__$1);
var G__47940 = null;
var G__47941 = (0);
var G__47942 = (0);
seq__47882 = G__47939;
chunk__47883 = G__47940;
count__47884 = G__47941;
i__47885 = G__47942;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47877_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47877_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47878_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47878_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47879_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47879_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47880_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47880_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47903){
var map__47904 = p__47903;
var map__47904__$1 = cljs.core.__destructure_map(map__47904);
var svc = map__47904__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
