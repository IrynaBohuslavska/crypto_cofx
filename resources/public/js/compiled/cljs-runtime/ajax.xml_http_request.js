goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__50927 = e.target.readyState;
var fexpr__50926 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__50926.cljs$core$IFn$_invoke$arity$1 ? fexpr__50926.cljs$core$IFn$_invoke$arity$1(G__50927) : fexpr__50926.call(null,G__50927));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__50932,handler){
var map__50933 = p__50932;
var map__50933__$1 = cljs.core.__destructure_map(map__50933);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50933__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50933__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__50929_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__50929_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___50953 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___50953)){
var response_type_50954 = temp__5753__auto___50953;
(this$__$1.responseType = cljs.core.name(response_type_50954));
} else {
}

var seq__50935_50955 = cljs.core.seq(headers);
var chunk__50936_50956 = null;
var count__50937_50957 = (0);
var i__50938_50958 = (0);
while(true){
if((i__50938_50958 < count__50937_50957)){
var vec__50947_50959 = chunk__50936_50956.cljs$core$IIndexed$_nth$arity$2(null,i__50938_50958);
var k_50960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50947_50959,(0),null);
var v_50961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50947_50959,(1),null);
this$__$1.setRequestHeader(k_50960,v_50961);


var G__50962 = seq__50935_50955;
var G__50963 = chunk__50936_50956;
var G__50964 = count__50937_50957;
var G__50965 = (i__50938_50958 + (1));
seq__50935_50955 = G__50962;
chunk__50936_50956 = G__50963;
count__50937_50957 = G__50964;
i__50938_50958 = G__50965;
continue;
} else {
var temp__5753__auto___50966 = cljs.core.seq(seq__50935_50955);
if(temp__5753__auto___50966){
var seq__50935_50967__$1 = temp__5753__auto___50966;
if(cljs.core.chunked_seq_QMARK_(seq__50935_50967__$1)){
var c__4649__auto___50968 = cljs.core.chunk_first(seq__50935_50967__$1);
var G__50969 = cljs.core.chunk_rest(seq__50935_50967__$1);
var G__50970 = c__4649__auto___50968;
var G__50971 = cljs.core.count(c__4649__auto___50968);
var G__50972 = (0);
seq__50935_50955 = G__50969;
chunk__50936_50956 = G__50970;
count__50937_50957 = G__50971;
i__50938_50958 = G__50972;
continue;
} else {
var vec__50950_50973 = cljs.core.first(seq__50935_50967__$1);
var k_50974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50950_50973,(0),null);
var v_50975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50950_50973,(1),null);
this$__$1.setRequestHeader(k_50974,v_50975);


var G__50976 = cljs.core.next(seq__50935_50967__$1);
var G__50977 = null;
var G__50978 = (0);
var G__50979 = (0);
seq__50935_50955 = G__50976;
chunk__50936_50956 = G__50977;
count__50937_50957 = G__50978;
i__50938_50958 = G__50979;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4223__auto__ = body;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
