goog.provide('day8.re_frame_10x.components.buttons');
day8.re_frame_10x.components.buttons.icon_style_factory$ = (function day8$re_frame_10x$components$buttons$icon_style_factory$(style_name40102,params40103,ambiance,disabled_QMARK_){
var base_style40107 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,"default","default",-1987822328):new cljs.core.Keyword(null,"pointer","pointer",85071187)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(disabled_QMARK_)?day8.re_frame_10x.styles.nord2:day8.re_frame_10x.styles.nord5),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),(cljs.core.truth_(disabled_QMARK_)?day8.re_frame_10x.styles.nord1:day8.re_frame_10x.styles.nord4)], null)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.styles.gs_2s,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord0], null)], null),(cljs.core.truth_(disabled_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord1], null)], null)], null))], null);
var key__39518__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style40107)));
var name40106 = (function (){var fexpr__40119 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",23,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__40119.cljs$core$IFn$_invoke$arity$3 ? fexpr__40119.cljs$core$IFn$_invoke$arity$3(style_name40102,key__39518__auto__,params40103) : fexpr__40119.call(null,style_name40102,key__39518__auto__,params40103));
})();
var style40105 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name40106)].join('')], null),base_style40107);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style40105),new cljs.core.Keyword(null,"name","name",1843675177),name40106], null);
});

var factory_name40104_40138 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.components.buttons.icon_style_factory$);
day8.re_frame_10x.components.buttons.icon_style = (function day8$re_frame_10x$components$buttons$icon_style(ambiance,disabled_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name40104_40138,day8.re_frame_10x.components.buttons.icon_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,disabled_QMARK_], null));
});
day8.re_frame_10x.components.buttons.icon = (function day8$re_frame_10x$components$buttons$icon(p__40124){
var map__40125 = p__40124;
var map__40125__$1 = cljs.core.__destructure_map(map__40125);
var args = map__40125__$1;
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40125__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40125__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40125__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40125__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40125__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40125__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var disabled_QMARK___$1 = day8.re_frame_10x.components.re_com.deref_or_value(disabled_QMARK_);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.buttons.icon_style(ambiance,disabled_QMARK___$1))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon,(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null),label], null):null)], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
}
})], null);
});
day8.re_frame_10x.components.buttons.expansion_style_factory$ = (function day8$re_frame_10x$components$buttons$expansion_style_factory$(style_name40126,params40127,ambiance){
var base_style40131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord1], null)], null)], null)], null);
var key__39518__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style40131)));
var name40130 = (function (){var fexpr__40132 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",23,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__40132.cljs$core$IFn$_invoke$arity$3 ? fexpr__40132.cljs$core$IFn$_invoke$arity$3(style_name40126,key__39518__auto__,params40127) : fexpr__40132.call(null,style_name40126,key__39518__auto__,params40127));
})();
var style40129 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name40130)].join('')], null),base_style40131);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style40129),new cljs.core.Keyword(null,"name","name",1843675177),name40130], null);
});

var factory_name40128_40143 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.components.buttons.expansion_style_factory$);
day8.re_frame_10x.components.buttons.expansion_style = (function day8$re_frame_10x$components$buttons$expansion_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name40128_40143,day8.re_frame_10x.components.buttons.expansion_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.buttons.expansion = (function day8$re_frame_10x$components$buttons$expansion(p__40136){
var map__40137 = p__40136;
var map__40137__$1 = cljs.core.__destructure_map(map__40137);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40137__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40137__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.buttons.expansion_style(ambiance),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null))], null);
});

//# sourceMappingURL=day8.re_frame_10x.components.buttons.js.map