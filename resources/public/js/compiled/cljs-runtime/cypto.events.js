goog.provide('cypto.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cypto.events","initialize-db","cypto.events/initialize-db",633473482),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__33251__auto__ = cypto.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__33251__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__33251__auto__;
}catch (e36522){var e = e36522;
throw e;
}}):(function (_,___$1){
return cypto.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cypto.events","update-name","cypto.events/update-name",-969732818),(function (db,p__36523){
var vec__36524 = p__36523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36524,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36524,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"name","name",1843675177),value);
}));
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"now","now",-1650525531),(function (cofx,_data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"now","now",-1650525531),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date())),(15),(24)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cypto.events","fetch","cypto.events/fetch",393865130),(function (p__36527,_){
var map__36528 = p__36527;
var map__36528__$1 = cljs.core.__destructure_map(map__36528);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36528__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://api.binance.com/api/v3/ticker/price",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cypto.events","fetch-success","cypto.events/fetch-success",1419705789)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-http-result","bad-http-result",770783148)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("cypto.events","fetch-success","cypto.events/fetch-success",1419705789),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"now","now",-1650525531))], null),(function (p__36529,p__36530){
var map__36531 = p__36529;
var map__36531__$1 = cljs.core.__destructure_map(map__36531);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36531__$1,new cljs.core.Keyword(null,"db","db",993250759));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36531__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var vec__36532 = p__36530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"data","data",-232669377),response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882),now], 0))], null);
}));

//# sourceMappingURL=cypto.events.js.map
