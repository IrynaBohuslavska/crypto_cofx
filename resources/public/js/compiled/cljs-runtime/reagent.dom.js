goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__40498 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40499 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40499);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__40500 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40501 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40501);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40500);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40498);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__40503 = arguments.length;
switch (G__40503) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__40504 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40504,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__40507_40524 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__40508_40525 = null;
var count__40509_40526 = (0);
var i__40510_40527 = (0);
while(true){
if((i__40510_40527 < count__40509_40526)){
var vec__40517_40528 = chunk__40508_40525.cljs$core$IIndexed$_nth$arity$2(null,i__40510_40527);
var container_40529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40517_40528,(0),null);
var comp_40530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40517_40528,(1),null);
reagent.dom.re_render_component(comp_40530,container_40529);


var G__40531 = seq__40507_40524;
var G__40532 = chunk__40508_40525;
var G__40533 = count__40509_40526;
var G__40534 = (i__40510_40527 + (1));
seq__40507_40524 = G__40531;
chunk__40508_40525 = G__40532;
count__40509_40526 = G__40533;
i__40510_40527 = G__40534;
continue;
} else {
var temp__5753__auto___40535 = cljs.core.seq(seq__40507_40524);
if(temp__5753__auto___40535){
var seq__40507_40536__$1 = temp__5753__auto___40535;
if(cljs.core.chunked_seq_QMARK_(seq__40507_40536__$1)){
var c__4649__auto___40537 = cljs.core.chunk_first(seq__40507_40536__$1);
var G__40538 = cljs.core.chunk_rest(seq__40507_40536__$1);
var G__40539 = c__4649__auto___40537;
var G__40540 = cljs.core.count(c__4649__auto___40537);
var G__40541 = (0);
seq__40507_40524 = G__40538;
chunk__40508_40525 = G__40539;
count__40509_40526 = G__40540;
i__40510_40527 = G__40541;
continue;
} else {
var vec__40520_40542 = cljs.core.first(seq__40507_40536__$1);
var container_40543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40520_40542,(0),null);
var comp_40544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40520_40542,(1),null);
reagent.dom.re_render_component(comp_40544,container_40543);


var G__40545 = cljs.core.next(seq__40507_40536__$1);
var G__40546 = null;
var G__40547 = (0);
var G__40548 = (0);
seq__40507_40524 = G__40545;
chunk__40508_40525 = G__40546;
count__40509_40526 = G__40547;
i__40510_40527 = G__40548;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
