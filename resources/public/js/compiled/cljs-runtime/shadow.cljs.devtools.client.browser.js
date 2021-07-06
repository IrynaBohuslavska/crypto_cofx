goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50726 = arguments.length;
var i__4830__auto___50727 = (0);
while(true){
if((i__4830__auto___50727 < len__4829__auto___50726)){
args__4835__auto__.push((arguments[i__4830__auto___50727]));

var G__50728 = (i__4830__auto___50727 + (1));
i__4830__auto___50727 = G__50728;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50579){
var G__50580 = cljs.core.first(seq50579);
var seq50579__$1 = cljs.core.next(seq50579);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50580,seq50579__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50586 = cljs.core.seq(sources);
var chunk__50587 = null;
var count__50588 = (0);
var i__50589 = (0);
while(true){
if((i__50589 < count__50588)){
var map__50599 = chunk__50587.cljs$core$IIndexed$_nth$arity$2(null,i__50589);
var map__50599__$1 = cljs.core.__destructure_map(map__50599);
var src = map__50599__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50599__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50600){var e_50729 = e50600;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50729);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50729.message)].join('')));
}

var G__50730 = seq__50586;
var G__50731 = chunk__50587;
var G__50732 = count__50588;
var G__50733 = (i__50589 + (1));
seq__50586 = G__50730;
chunk__50587 = G__50731;
count__50588 = G__50732;
i__50589 = G__50733;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50586);
if(temp__5753__auto__){
var seq__50586__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50586__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50586__$1);
var G__50734 = cljs.core.chunk_rest(seq__50586__$1);
var G__50735 = c__4649__auto__;
var G__50736 = cljs.core.count(c__4649__auto__);
var G__50737 = (0);
seq__50586 = G__50734;
chunk__50587 = G__50735;
count__50588 = G__50736;
i__50589 = G__50737;
continue;
} else {
var map__50603 = cljs.core.first(seq__50586__$1);
var map__50603__$1 = cljs.core.__destructure_map(map__50603);
var src = map__50603__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50603__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50603__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50603__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50603__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50604){var e_50738 = e50604;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50738);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50738.message)].join('')));
}

var G__50739 = cljs.core.next(seq__50586__$1);
var G__50740 = null;
var G__50741 = (0);
var G__50742 = (0);
seq__50586 = G__50739;
chunk__50587 = G__50740;
count__50588 = G__50741;
i__50589 = G__50742;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50611 = cljs.core.seq(js_requires);
var chunk__50612 = null;
var count__50613 = (0);
var i__50614 = (0);
while(true){
if((i__50614 < count__50613)){
var js_ns = chunk__50612.cljs$core$IIndexed$_nth$arity$2(null,i__50614);
var require_str_50743 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50743);


var G__50744 = seq__50611;
var G__50745 = chunk__50612;
var G__50746 = count__50613;
var G__50747 = (i__50614 + (1));
seq__50611 = G__50744;
chunk__50612 = G__50745;
count__50613 = G__50746;
i__50614 = G__50747;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50611);
if(temp__5753__auto__){
var seq__50611__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50611__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50611__$1);
var G__50748 = cljs.core.chunk_rest(seq__50611__$1);
var G__50749 = c__4649__auto__;
var G__50750 = cljs.core.count(c__4649__auto__);
var G__50751 = (0);
seq__50611 = G__50748;
chunk__50612 = G__50749;
count__50613 = G__50750;
i__50614 = G__50751;
continue;
} else {
var js_ns = cljs.core.first(seq__50611__$1);
var require_str_50752 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50752);


var G__50753 = cljs.core.next(seq__50611__$1);
var G__50754 = null;
var G__50755 = (0);
var G__50756 = (0);
seq__50611 = G__50753;
chunk__50612 = G__50754;
count__50613 = G__50755;
i__50614 = G__50756;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50617){
var map__50618 = p__50617;
var map__50618__$1 = cljs.core.__destructure_map(map__50618);
var msg = map__50618__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50618__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50619(s__50620){
return (new cljs.core.LazySeq(null,(function (){
var s__50620__$1 = s__50620;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50620__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50626 = cljs.core.first(xs__6308__auto__);
var map__50626__$1 = cljs.core.__destructure_map(map__50626);
var src = map__50626__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50626__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50626__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__50620__$1,map__50626,map__50626__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50618,map__50618__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50619_$_iter__50621(s__50622){
return (new cljs.core.LazySeq(null,((function (s__50620__$1,map__50626,map__50626__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50618,map__50618__$1,msg,info,reload_info){
return (function (){
var s__50622__$1 = s__50622;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50622__$1);
if(temp__5753__auto____$1){
var s__50622__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50622__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50622__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50624 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50623 = (0);
while(true){
if((i__50623 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__50623);
cljs.core.chunk_append(b__50624,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50757 = (i__50623 + (1));
i__50623 = G__50757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50624),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50619_$_iter__50621(cljs.core.chunk_rest(s__50622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50624),null);
}
} else {
var warning = cljs.core.first(s__50622__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50619_$_iter__50621(cljs.core.rest(s__50622__$2)));
}
} else {
return null;
}
break;
}
});})(s__50620__$1,map__50626,map__50626__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50618,map__50618__$1,msg,info,reload_info))
,null,null));
});})(s__50620__$1,map__50626,map__50626__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50618,map__50618__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50619(cljs.core.rest(s__50620__$1)));
} else {
var G__50758 = cljs.core.rest(s__50620__$1);
s__50620__$1 = G__50758;
continue;
}
} else {
var G__50759 = cljs.core.rest(s__50620__$1);
s__50620__$1 = G__50759;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50632_50760 = cljs.core.seq(warnings);
var chunk__50633_50761 = null;
var count__50634_50762 = (0);
var i__50635_50763 = (0);
while(true){
if((i__50635_50763 < count__50634_50762)){
var map__50638_50764 = chunk__50633_50761.cljs$core$IIndexed$_nth$arity$2(null,i__50635_50763);
var map__50638_50765__$1 = cljs.core.__destructure_map(map__50638_50764);
var w_50766 = map__50638_50765__$1;
var msg_50767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638_50765__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638_50765__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638_50765__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50638_50765__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50770)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50768),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50769),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50767__$1)].join(''));


var G__50771 = seq__50632_50760;
var G__50772 = chunk__50633_50761;
var G__50773 = count__50634_50762;
var G__50774 = (i__50635_50763 + (1));
seq__50632_50760 = G__50771;
chunk__50633_50761 = G__50772;
count__50634_50762 = G__50773;
i__50635_50763 = G__50774;
continue;
} else {
var temp__5753__auto___50775 = cljs.core.seq(seq__50632_50760);
if(temp__5753__auto___50775){
var seq__50632_50776__$1 = temp__5753__auto___50775;
if(cljs.core.chunked_seq_QMARK_(seq__50632_50776__$1)){
var c__4649__auto___50777 = cljs.core.chunk_first(seq__50632_50776__$1);
var G__50778 = cljs.core.chunk_rest(seq__50632_50776__$1);
var G__50779 = c__4649__auto___50777;
var G__50780 = cljs.core.count(c__4649__auto___50777);
var G__50781 = (0);
seq__50632_50760 = G__50778;
chunk__50633_50761 = G__50779;
count__50634_50762 = G__50780;
i__50635_50763 = G__50781;
continue;
} else {
var map__50639_50782 = cljs.core.first(seq__50632_50776__$1);
var map__50639_50783__$1 = cljs.core.__destructure_map(map__50639_50782);
var w_50784 = map__50639_50783__$1;
var msg_50785__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50639_50783__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50639_50783__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50639_50783__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50639_50783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50788)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50786),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50787),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50785__$1)].join(''));


var G__50789 = cljs.core.next(seq__50632_50776__$1);
var G__50790 = null;
var G__50791 = (0);
var G__50792 = (0);
seq__50632_50760 = G__50789;
chunk__50633_50761 = G__50790;
count__50634_50762 = G__50791;
i__50635_50763 = G__50792;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50616_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50616_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50640){
var map__50641 = p__50640;
var map__50641__$1 = cljs.core.__destructure_map(map__50641);
var msg = map__50641__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50642 = cljs.core.seq(updates);
var chunk__50644 = null;
var count__50645 = (0);
var i__50646 = (0);
while(true){
if((i__50646 < count__50645)){
var path = chunk__50644.cljs$core$IIndexed$_nth$arity$2(null,i__50646);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50676_50793 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50680_50794 = null;
var count__50681_50795 = (0);
var i__50682_50796 = (0);
while(true){
if((i__50682_50796 < count__50681_50795)){
var node_50797 = chunk__50680_50794.cljs$core$IIndexed$_nth$arity$2(null,i__50682_50796);
if(cljs.core.not(node_50797.shadow$old)){
var path_match_50798 = shadow.cljs.devtools.client.browser.match_paths(node_50797.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50798)){
var new_link_50799 = (function (){var G__50688 = node_50797.cloneNode(true);
G__50688.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50798),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50688;
})();
(node_50797.shadow$old = true);

(new_link_50799.onload = ((function (seq__50676_50793,chunk__50680_50794,count__50681_50795,i__50682_50796,seq__50642,chunk__50644,count__50645,i__50646,new_link_50799,path_match_50798,node_50797,path,map__50641,map__50641__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50797);
});})(seq__50676_50793,chunk__50680_50794,count__50681_50795,i__50682_50796,seq__50642,chunk__50644,count__50645,i__50646,new_link_50799,path_match_50798,node_50797,path,map__50641,map__50641__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50798], 0));

goog.dom.insertSiblingAfter(new_link_50799,node_50797);


var G__50800 = seq__50676_50793;
var G__50801 = chunk__50680_50794;
var G__50802 = count__50681_50795;
var G__50803 = (i__50682_50796 + (1));
seq__50676_50793 = G__50800;
chunk__50680_50794 = G__50801;
count__50681_50795 = G__50802;
i__50682_50796 = G__50803;
continue;
} else {
var G__50804 = seq__50676_50793;
var G__50805 = chunk__50680_50794;
var G__50806 = count__50681_50795;
var G__50807 = (i__50682_50796 + (1));
seq__50676_50793 = G__50804;
chunk__50680_50794 = G__50805;
count__50681_50795 = G__50806;
i__50682_50796 = G__50807;
continue;
}
} else {
var G__50808 = seq__50676_50793;
var G__50809 = chunk__50680_50794;
var G__50810 = count__50681_50795;
var G__50811 = (i__50682_50796 + (1));
seq__50676_50793 = G__50808;
chunk__50680_50794 = G__50809;
count__50681_50795 = G__50810;
i__50682_50796 = G__50811;
continue;
}
} else {
var temp__5753__auto___50812 = cljs.core.seq(seq__50676_50793);
if(temp__5753__auto___50812){
var seq__50676_50813__$1 = temp__5753__auto___50812;
if(cljs.core.chunked_seq_QMARK_(seq__50676_50813__$1)){
var c__4649__auto___50814 = cljs.core.chunk_first(seq__50676_50813__$1);
var G__50815 = cljs.core.chunk_rest(seq__50676_50813__$1);
var G__50816 = c__4649__auto___50814;
var G__50817 = cljs.core.count(c__4649__auto___50814);
var G__50818 = (0);
seq__50676_50793 = G__50815;
chunk__50680_50794 = G__50816;
count__50681_50795 = G__50817;
i__50682_50796 = G__50818;
continue;
} else {
var node_50819 = cljs.core.first(seq__50676_50813__$1);
if(cljs.core.not(node_50819.shadow$old)){
var path_match_50820 = shadow.cljs.devtools.client.browser.match_paths(node_50819.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50820)){
var new_link_50821 = (function (){var G__50689 = node_50819.cloneNode(true);
G__50689.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50820),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50689;
})();
(node_50819.shadow$old = true);

(new_link_50821.onload = ((function (seq__50676_50793,chunk__50680_50794,count__50681_50795,i__50682_50796,seq__50642,chunk__50644,count__50645,i__50646,new_link_50821,path_match_50820,node_50819,seq__50676_50813__$1,temp__5753__auto___50812,path,map__50641,map__50641__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50819);
});})(seq__50676_50793,chunk__50680_50794,count__50681_50795,i__50682_50796,seq__50642,chunk__50644,count__50645,i__50646,new_link_50821,path_match_50820,node_50819,seq__50676_50813__$1,temp__5753__auto___50812,path,map__50641,map__50641__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50820], 0));

goog.dom.insertSiblingAfter(new_link_50821,node_50819);


var G__50822 = cljs.core.next(seq__50676_50813__$1);
var G__50823 = null;
var G__50824 = (0);
var G__50825 = (0);
seq__50676_50793 = G__50822;
chunk__50680_50794 = G__50823;
count__50681_50795 = G__50824;
i__50682_50796 = G__50825;
continue;
} else {
var G__50826 = cljs.core.next(seq__50676_50813__$1);
var G__50827 = null;
var G__50828 = (0);
var G__50829 = (0);
seq__50676_50793 = G__50826;
chunk__50680_50794 = G__50827;
count__50681_50795 = G__50828;
i__50682_50796 = G__50829;
continue;
}
} else {
var G__50830 = cljs.core.next(seq__50676_50813__$1);
var G__50831 = null;
var G__50832 = (0);
var G__50833 = (0);
seq__50676_50793 = G__50830;
chunk__50680_50794 = G__50831;
count__50681_50795 = G__50832;
i__50682_50796 = G__50833;
continue;
}
}
} else {
}
}
break;
}


var G__50834 = seq__50642;
var G__50835 = chunk__50644;
var G__50836 = count__50645;
var G__50837 = (i__50646 + (1));
seq__50642 = G__50834;
chunk__50644 = G__50835;
count__50645 = G__50836;
i__50646 = G__50837;
continue;
} else {
var G__50838 = seq__50642;
var G__50839 = chunk__50644;
var G__50840 = count__50645;
var G__50841 = (i__50646 + (1));
seq__50642 = G__50838;
chunk__50644 = G__50839;
count__50645 = G__50840;
i__50646 = G__50841;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50642);
if(temp__5753__auto__){
var seq__50642__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50642__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50642__$1);
var G__50842 = cljs.core.chunk_rest(seq__50642__$1);
var G__50843 = c__4649__auto__;
var G__50844 = cljs.core.count(c__4649__auto__);
var G__50845 = (0);
seq__50642 = G__50842;
chunk__50644 = G__50843;
count__50645 = G__50844;
i__50646 = G__50845;
continue;
} else {
var path = cljs.core.first(seq__50642__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50690_50846 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50694_50847 = null;
var count__50695_50848 = (0);
var i__50696_50849 = (0);
while(true){
if((i__50696_50849 < count__50695_50848)){
var node_50850 = chunk__50694_50847.cljs$core$IIndexed$_nth$arity$2(null,i__50696_50849);
if(cljs.core.not(node_50850.shadow$old)){
var path_match_50851 = shadow.cljs.devtools.client.browser.match_paths(node_50850.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50851)){
var new_link_50852 = (function (){var G__50702 = node_50850.cloneNode(true);
G__50702.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50851),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50702;
})();
(node_50850.shadow$old = true);

(new_link_50852.onload = ((function (seq__50690_50846,chunk__50694_50847,count__50695_50848,i__50696_50849,seq__50642,chunk__50644,count__50645,i__50646,new_link_50852,path_match_50851,node_50850,path,seq__50642__$1,temp__5753__auto__,map__50641,map__50641__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50850);
});})(seq__50690_50846,chunk__50694_50847,count__50695_50848,i__50696_50849,seq__50642,chunk__50644,count__50645,i__50646,new_link_50852,path_match_50851,node_50850,path,seq__50642__$1,temp__5753__auto__,map__50641,map__50641__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50851], 0));

goog.dom.insertSiblingAfter(new_link_50852,node_50850);


var G__50853 = seq__50690_50846;
var G__50854 = chunk__50694_50847;
var G__50855 = count__50695_50848;
var G__50856 = (i__50696_50849 + (1));
seq__50690_50846 = G__50853;
chunk__50694_50847 = G__50854;
count__50695_50848 = G__50855;
i__50696_50849 = G__50856;
continue;
} else {
var G__50857 = seq__50690_50846;
var G__50858 = chunk__50694_50847;
var G__50859 = count__50695_50848;
var G__50860 = (i__50696_50849 + (1));
seq__50690_50846 = G__50857;
chunk__50694_50847 = G__50858;
count__50695_50848 = G__50859;
i__50696_50849 = G__50860;
continue;
}
} else {
var G__50861 = seq__50690_50846;
var G__50862 = chunk__50694_50847;
var G__50863 = count__50695_50848;
var G__50864 = (i__50696_50849 + (1));
seq__50690_50846 = G__50861;
chunk__50694_50847 = G__50862;
count__50695_50848 = G__50863;
i__50696_50849 = G__50864;
continue;
}
} else {
var temp__5753__auto___50865__$1 = cljs.core.seq(seq__50690_50846);
if(temp__5753__auto___50865__$1){
var seq__50690_50866__$1 = temp__5753__auto___50865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50690_50866__$1)){
var c__4649__auto___50867 = cljs.core.chunk_first(seq__50690_50866__$1);
var G__50868 = cljs.core.chunk_rest(seq__50690_50866__$1);
var G__50869 = c__4649__auto___50867;
var G__50870 = cljs.core.count(c__4649__auto___50867);
var G__50871 = (0);
seq__50690_50846 = G__50868;
chunk__50694_50847 = G__50869;
count__50695_50848 = G__50870;
i__50696_50849 = G__50871;
continue;
} else {
var node_50872 = cljs.core.first(seq__50690_50866__$1);
if(cljs.core.not(node_50872.shadow$old)){
var path_match_50873 = shadow.cljs.devtools.client.browser.match_paths(node_50872.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50873)){
var new_link_50874 = (function (){var G__50703 = node_50872.cloneNode(true);
G__50703.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50873),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50703;
})();
(node_50872.shadow$old = true);

(new_link_50874.onload = ((function (seq__50690_50846,chunk__50694_50847,count__50695_50848,i__50696_50849,seq__50642,chunk__50644,count__50645,i__50646,new_link_50874,path_match_50873,node_50872,seq__50690_50866__$1,temp__5753__auto___50865__$1,path,seq__50642__$1,temp__5753__auto__,map__50641,map__50641__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50872);
});})(seq__50690_50846,chunk__50694_50847,count__50695_50848,i__50696_50849,seq__50642,chunk__50644,count__50645,i__50646,new_link_50874,path_match_50873,node_50872,seq__50690_50866__$1,temp__5753__auto___50865__$1,path,seq__50642__$1,temp__5753__auto__,map__50641,map__50641__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50873], 0));

goog.dom.insertSiblingAfter(new_link_50874,node_50872);


var G__50875 = cljs.core.next(seq__50690_50866__$1);
var G__50876 = null;
var G__50877 = (0);
var G__50878 = (0);
seq__50690_50846 = G__50875;
chunk__50694_50847 = G__50876;
count__50695_50848 = G__50877;
i__50696_50849 = G__50878;
continue;
} else {
var G__50879 = cljs.core.next(seq__50690_50866__$1);
var G__50880 = null;
var G__50881 = (0);
var G__50882 = (0);
seq__50690_50846 = G__50879;
chunk__50694_50847 = G__50880;
count__50695_50848 = G__50881;
i__50696_50849 = G__50882;
continue;
}
} else {
var G__50883 = cljs.core.next(seq__50690_50866__$1);
var G__50884 = null;
var G__50885 = (0);
var G__50886 = (0);
seq__50690_50846 = G__50883;
chunk__50694_50847 = G__50884;
count__50695_50848 = G__50885;
i__50696_50849 = G__50886;
continue;
}
}
} else {
}
}
break;
}


var G__50887 = cljs.core.next(seq__50642__$1);
var G__50888 = null;
var G__50889 = (0);
var G__50890 = (0);
seq__50642 = G__50887;
chunk__50644 = G__50888;
count__50645 = G__50889;
i__50646 = G__50890;
continue;
} else {
var G__50891 = cljs.core.next(seq__50642__$1);
var G__50892 = null;
var G__50893 = (0);
var G__50894 = (0);
seq__50642 = G__50891;
chunk__50644 = G__50892;
count__50645 = G__50893;
i__50646 = G__50894;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50704){
var map__50705 = p__50704;
var map__50705__$1 = cljs.core.__destructure_map(map__50705);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50705__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50706){
var map__50707 = p__50706;
var map__50707__$1 = cljs.core.__destructure_map(map__50707);
var _ = map__50707__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50707__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50708,done,error){
var map__50709 = p__50708;
var map__50709__$1 = cljs.core.__destructure_map(map__50709);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50709__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50710,done,error){
var map__50711 = p__50710;
var map__50711__$1 = cljs.core.__destructure_map(map__50711);
var msg = map__50711__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50712){
var map__50713 = p__50712;
var map__50713__$1 = cljs.core.__destructure_map(map__50713);
var src = map__50713__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50713__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50714 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50714) : done.call(null,G__50714));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50715){
var map__50716 = p__50715;
var map__50716__$1 = cljs.core.__destructure_map(map__50716);
var msg__$1 = map__50716__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50716__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50717){var ex = e50717;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50718){
var map__50719 = p__50718;
var map__50719__$1 = cljs.core.__destructure_map(map__50719);
var env = map__50719__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50719__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50720){
var map__50721 = p__50720;
var map__50721__$1 = cljs.core.__destructure_map(map__50721);
var msg = map__50721__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50721__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50722){
var map__50723 = p__50722;
var map__50723__$1 = cljs.core.__destructure_map(map__50723);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50724){
var map__50725 = p__50724;
var map__50725__$1 = cljs.core.__destructure_map(map__50725);
var svc = map__50725__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50725__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
