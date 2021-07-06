goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49497 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49497(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49498 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49498(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48717 = coll;
var G__48718 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48717,G__48718) : shadow.dom.lazy_native_coll_seq.call(null,G__48717,G__48718));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48726 = arguments.length;
switch (G__48726) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48732 = arguments.length;
switch (G__48732) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48735 = arguments.length;
switch (G__48735) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48743 = arguments.length;
switch (G__48743) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48756 = arguments.length;
switch (G__48756) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48760 = arguments.length;
switch (G__48760) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48771){if((e48771 instanceof Object)){
var e = e48771;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48771;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48779 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48780 = null;
var count__48781 = (0);
var i__48782 = (0);
while(true){
if((i__48782 < count__48781)){
var el = chunk__48780.cljs$core$IIndexed$_nth$arity$2(null,i__48782);
var handler_49512__$1 = ((function (seq__48779,chunk__48780,count__48781,i__48782,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48779,chunk__48780,count__48781,i__48782,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49512__$1);


var G__49513 = seq__48779;
var G__49514 = chunk__48780;
var G__49515 = count__48781;
var G__49516 = (i__48782 + (1));
seq__48779 = G__49513;
chunk__48780 = G__49514;
count__48781 = G__49515;
i__48782 = G__49516;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48779);
if(temp__5753__auto__){
var seq__48779__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48779__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48779__$1);
var G__49517 = cljs.core.chunk_rest(seq__48779__$1);
var G__49518 = c__4649__auto__;
var G__49519 = cljs.core.count(c__4649__auto__);
var G__49520 = (0);
seq__48779 = G__49517;
chunk__48780 = G__49518;
count__48781 = G__49519;
i__48782 = G__49520;
continue;
} else {
var el = cljs.core.first(seq__48779__$1);
var handler_49521__$1 = ((function (seq__48779,chunk__48780,count__48781,i__48782,el,seq__48779__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48779,chunk__48780,count__48781,i__48782,el,seq__48779__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49521__$1);


var G__49522 = cljs.core.next(seq__48779__$1);
var G__49523 = null;
var G__49524 = (0);
var G__49525 = (0);
seq__48779 = G__49522;
chunk__48780 = G__49523;
count__48781 = G__49524;
i__48782 = G__49525;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48798 = arguments.length;
switch (G__48798) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48805 = cljs.core.seq(events);
var chunk__48806 = null;
var count__48807 = (0);
var i__48808 = (0);
while(true){
if((i__48808 < count__48807)){
var vec__48822 = chunk__48806.cljs$core$IIndexed$_nth$arity$2(null,i__48808);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48822,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49532 = seq__48805;
var G__49533 = chunk__48806;
var G__49534 = count__48807;
var G__49535 = (i__48808 + (1));
seq__48805 = G__49532;
chunk__48806 = G__49533;
count__48807 = G__49534;
i__48808 = G__49535;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48805);
if(temp__5753__auto__){
var seq__48805__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48805__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48805__$1);
var G__49537 = cljs.core.chunk_rest(seq__48805__$1);
var G__49538 = c__4649__auto__;
var G__49539 = cljs.core.count(c__4649__auto__);
var G__49540 = (0);
seq__48805 = G__49537;
chunk__48806 = G__49538;
count__48807 = G__49539;
i__48808 = G__49540;
continue;
} else {
var vec__48827 = cljs.core.first(seq__48805__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48827,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49542 = cljs.core.next(seq__48805__$1);
var G__49543 = null;
var G__49544 = (0);
var G__49545 = (0);
seq__48805 = G__49542;
chunk__48806 = G__49543;
count__48807 = G__49544;
i__48808 = G__49545;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48833 = cljs.core.seq(styles);
var chunk__48834 = null;
var count__48835 = (0);
var i__48836 = (0);
while(true){
if((i__48836 < count__48835)){
var vec__48852 = chunk__48834.cljs$core$IIndexed$_nth$arity$2(null,i__48836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48852,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49547 = seq__48833;
var G__49548 = chunk__48834;
var G__49549 = count__48835;
var G__49550 = (i__48836 + (1));
seq__48833 = G__49547;
chunk__48834 = G__49548;
count__48835 = G__49549;
i__48836 = G__49550;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48833);
if(temp__5753__auto__){
var seq__48833__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48833__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48833__$1);
var G__49551 = cljs.core.chunk_rest(seq__48833__$1);
var G__49552 = c__4649__auto__;
var G__49553 = cljs.core.count(c__4649__auto__);
var G__49554 = (0);
seq__48833 = G__49551;
chunk__48834 = G__49552;
count__48835 = G__49553;
i__48836 = G__49554;
continue;
} else {
var vec__48859 = cljs.core.first(seq__48833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49555 = cljs.core.next(seq__48833__$1);
var G__49556 = null;
var G__49557 = (0);
var G__49558 = (0);
seq__48833 = G__49555;
chunk__48834 = G__49556;
count__48835 = G__49557;
i__48836 = G__49558;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48865_49560 = key;
var G__48865_49561__$1 = (((G__48865_49560 instanceof cljs.core.Keyword))?G__48865_49560.fqn:null);
switch (G__48865_49561__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49564 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_49564,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_49564,"aria-");
}
})())){
el.setAttribute(ks_49564,value);
} else {
(el[ks_49564] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48897){
var map__48898 = p__48897;
var map__48898__$1 = cljs.core.__destructure_map(map__48898);
var props = map__48898__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48898__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48902 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48902,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48902,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48902,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48906 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48906,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48906;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48910 = arguments.length;
switch (G__48910) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48925){
var vec__48927 = p__48925;
var seq__48928 = cljs.core.seq(vec__48927);
var first__48929 = cljs.core.first(seq__48928);
var seq__48928__$1 = cljs.core.next(seq__48928);
var nn = first__48929;
var first__48929__$1 = cljs.core.first(seq__48928__$1);
var seq__48928__$2 = cljs.core.next(seq__48928__$1);
var np = first__48929__$1;
var nc = seq__48928__$2;
var node = vec__48927;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48931 = nn;
var G__48932 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48931,G__48932) : create_fn.call(null,G__48931,G__48932));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48934 = nn;
var G__48935 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48934,G__48935) : create_fn.call(null,G__48934,G__48935));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48937 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48937,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48937,(1),null);
var seq__48940_49581 = cljs.core.seq(node_children);
var chunk__48942_49582 = null;
var count__48943_49583 = (0);
var i__48944_49584 = (0);
while(true){
if((i__48944_49584 < count__48943_49583)){
var child_struct_49586 = chunk__48942_49582.cljs$core$IIndexed$_nth$arity$2(null,i__48944_49584);
var children_49587 = shadow.dom.dom_node(child_struct_49586);
if(cljs.core.seq_QMARK_(children_49587)){
var seq__48989_49588 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49587));
var chunk__48991_49589 = null;
var count__48992_49590 = (0);
var i__48993_49591 = (0);
while(true){
if((i__48993_49591 < count__48992_49590)){
var child_49592 = chunk__48991_49589.cljs$core$IIndexed$_nth$arity$2(null,i__48993_49591);
if(cljs.core.truth_(child_49592)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49592);


var G__49593 = seq__48989_49588;
var G__49594 = chunk__48991_49589;
var G__49595 = count__48992_49590;
var G__49596 = (i__48993_49591 + (1));
seq__48989_49588 = G__49593;
chunk__48991_49589 = G__49594;
count__48992_49590 = G__49595;
i__48993_49591 = G__49596;
continue;
} else {
var G__49597 = seq__48989_49588;
var G__49598 = chunk__48991_49589;
var G__49599 = count__48992_49590;
var G__49600 = (i__48993_49591 + (1));
seq__48989_49588 = G__49597;
chunk__48991_49589 = G__49598;
count__48992_49590 = G__49599;
i__48993_49591 = G__49600;
continue;
}
} else {
var temp__5753__auto___49601 = cljs.core.seq(seq__48989_49588);
if(temp__5753__auto___49601){
var seq__48989_49602__$1 = temp__5753__auto___49601;
if(cljs.core.chunked_seq_QMARK_(seq__48989_49602__$1)){
var c__4649__auto___49603 = cljs.core.chunk_first(seq__48989_49602__$1);
var G__49604 = cljs.core.chunk_rest(seq__48989_49602__$1);
var G__49605 = c__4649__auto___49603;
var G__49606 = cljs.core.count(c__4649__auto___49603);
var G__49607 = (0);
seq__48989_49588 = G__49604;
chunk__48991_49589 = G__49605;
count__48992_49590 = G__49606;
i__48993_49591 = G__49607;
continue;
} else {
var child_49609 = cljs.core.first(seq__48989_49602__$1);
if(cljs.core.truth_(child_49609)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49609);


var G__49610 = cljs.core.next(seq__48989_49602__$1);
var G__49611 = null;
var G__49612 = (0);
var G__49613 = (0);
seq__48989_49588 = G__49610;
chunk__48991_49589 = G__49611;
count__48992_49590 = G__49612;
i__48993_49591 = G__49613;
continue;
} else {
var G__49615 = cljs.core.next(seq__48989_49602__$1);
var G__49616 = null;
var G__49617 = (0);
var G__49618 = (0);
seq__48989_49588 = G__49615;
chunk__48991_49589 = G__49616;
count__48992_49590 = G__49617;
i__48993_49591 = G__49618;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49587);
}


var G__49619 = seq__48940_49581;
var G__49620 = chunk__48942_49582;
var G__49621 = count__48943_49583;
var G__49622 = (i__48944_49584 + (1));
seq__48940_49581 = G__49619;
chunk__48942_49582 = G__49620;
count__48943_49583 = G__49621;
i__48944_49584 = G__49622;
continue;
} else {
var temp__5753__auto___49623 = cljs.core.seq(seq__48940_49581);
if(temp__5753__auto___49623){
var seq__48940_49624__$1 = temp__5753__auto___49623;
if(cljs.core.chunked_seq_QMARK_(seq__48940_49624__$1)){
var c__4649__auto___49625 = cljs.core.chunk_first(seq__48940_49624__$1);
var G__49626 = cljs.core.chunk_rest(seq__48940_49624__$1);
var G__49627 = c__4649__auto___49625;
var G__49628 = cljs.core.count(c__4649__auto___49625);
var G__49629 = (0);
seq__48940_49581 = G__49626;
chunk__48942_49582 = G__49627;
count__48943_49583 = G__49628;
i__48944_49584 = G__49629;
continue;
} else {
var child_struct_49630 = cljs.core.first(seq__48940_49624__$1);
var children_49631 = shadow.dom.dom_node(child_struct_49630);
if(cljs.core.seq_QMARK_(children_49631)){
var seq__49014_49632 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49631));
var chunk__49016_49633 = null;
var count__49017_49634 = (0);
var i__49018_49635 = (0);
while(true){
if((i__49018_49635 < count__49017_49634)){
var child_49636 = chunk__49016_49633.cljs$core$IIndexed$_nth$arity$2(null,i__49018_49635);
if(cljs.core.truth_(child_49636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49636);


var G__49637 = seq__49014_49632;
var G__49638 = chunk__49016_49633;
var G__49639 = count__49017_49634;
var G__49640 = (i__49018_49635 + (1));
seq__49014_49632 = G__49637;
chunk__49016_49633 = G__49638;
count__49017_49634 = G__49639;
i__49018_49635 = G__49640;
continue;
} else {
var G__49642 = seq__49014_49632;
var G__49643 = chunk__49016_49633;
var G__49644 = count__49017_49634;
var G__49645 = (i__49018_49635 + (1));
seq__49014_49632 = G__49642;
chunk__49016_49633 = G__49643;
count__49017_49634 = G__49644;
i__49018_49635 = G__49645;
continue;
}
} else {
var temp__5753__auto___49646__$1 = cljs.core.seq(seq__49014_49632);
if(temp__5753__auto___49646__$1){
var seq__49014_49647__$1 = temp__5753__auto___49646__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49014_49647__$1)){
var c__4649__auto___49648 = cljs.core.chunk_first(seq__49014_49647__$1);
var G__49649 = cljs.core.chunk_rest(seq__49014_49647__$1);
var G__49650 = c__4649__auto___49648;
var G__49651 = cljs.core.count(c__4649__auto___49648);
var G__49652 = (0);
seq__49014_49632 = G__49649;
chunk__49016_49633 = G__49650;
count__49017_49634 = G__49651;
i__49018_49635 = G__49652;
continue;
} else {
var child_49653 = cljs.core.first(seq__49014_49647__$1);
if(cljs.core.truth_(child_49653)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49653);


var G__49654 = cljs.core.next(seq__49014_49647__$1);
var G__49655 = null;
var G__49656 = (0);
var G__49657 = (0);
seq__49014_49632 = G__49654;
chunk__49016_49633 = G__49655;
count__49017_49634 = G__49656;
i__49018_49635 = G__49657;
continue;
} else {
var G__49658 = cljs.core.next(seq__49014_49647__$1);
var G__49659 = null;
var G__49660 = (0);
var G__49661 = (0);
seq__49014_49632 = G__49658;
chunk__49016_49633 = G__49659;
count__49017_49634 = G__49660;
i__49018_49635 = G__49661;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49631);
}


var G__49662 = cljs.core.next(seq__48940_49624__$1);
var G__49663 = null;
var G__49664 = (0);
var G__49665 = (0);
seq__48940_49581 = G__49662;
chunk__48942_49582 = G__49663;
count__48943_49583 = G__49664;
i__48944_49584 = G__49665;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49051 = cljs.core.seq(node);
var chunk__49052 = null;
var count__49053 = (0);
var i__49054 = (0);
while(true){
if((i__49054 < count__49053)){
var n = chunk__49052.cljs$core$IIndexed$_nth$arity$2(null,i__49054);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49671 = seq__49051;
var G__49672 = chunk__49052;
var G__49673 = count__49053;
var G__49674 = (i__49054 + (1));
seq__49051 = G__49671;
chunk__49052 = G__49672;
count__49053 = G__49673;
i__49054 = G__49674;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49051);
if(temp__5753__auto__){
var seq__49051__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49051__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49051__$1);
var G__49675 = cljs.core.chunk_rest(seq__49051__$1);
var G__49676 = c__4649__auto__;
var G__49677 = cljs.core.count(c__4649__auto__);
var G__49678 = (0);
seq__49051 = G__49675;
chunk__49052 = G__49676;
count__49053 = G__49677;
i__49054 = G__49678;
continue;
} else {
var n = cljs.core.first(seq__49051__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49679 = cljs.core.next(seq__49051__$1);
var G__49680 = null;
var G__49681 = (0);
var G__49682 = (0);
seq__49051 = G__49679;
chunk__49052 = G__49680;
count__49053 = G__49681;
i__49054 = G__49682;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49060 = arguments.length;
switch (G__49060) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49071 = arguments.length;
switch (G__49071) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49103 = arguments.length;
switch (G__49103) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49697 = arguments.length;
var i__4830__auto___49698 = (0);
while(true){
if((i__4830__auto___49698 < len__4829__auto___49697)){
args__4835__auto__.push((arguments[i__4830__auto___49698]));

var G__49699 = (i__4830__auto___49698 + (1));
i__4830__auto___49698 = G__49699;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49118_49700 = cljs.core.seq(nodes);
var chunk__49119_49701 = null;
var count__49120_49702 = (0);
var i__49121_49703 = (0);
while(true){
if((i__49121_49703 < count__49120_49702)){
var node_49704 = chunk__49119_49701.cljs$core$IIndexed$_nth$arity$2(null,i__49121_49703);
fragment.appendChild(shadow.dom._to_dom(node_49704));


var G__49705 = seq__49118_49700;
var G__49706 = chunk__49119_49701;
var G__49707 = count__49120_49702;
var G__49708 = (i__49121_49703 + (1));
seq__49118_49700 = G__49705;
chunk__49119_49701 = G__49706;
count__49120_49702 = G__49707;
i__49121_49703 = G__49708;
continue;
} else {
var temp__5753__auto___49709 = cljs.core.seq(seq__49118_49700);
if(temp__5753__auto___49709){
var seq__49118_49710__$1 = temp__5753__auto___49709;
if(cljs.core.chunked_seq_QMARK_(seq__49118_49710__$1)){
var c__4649__auto___49711 = cljs.core.chunk_first(seq__49118_49710__$1);
var G__49712 = cljs.core.chunk_rest(seq__49118_49710__$1);
var G__49713 = c__4649__auto___49711;
var G__49714 = cljs.core.count(c__4649__auto___49711);
var G__49715 = (0);
seq__49118_49700 = G__49712;
chunk__49119_49701 = G__49713;
count__49120_49702 = G__49714;
i__49121_49703 = G__49715;
continue;
} else {
var node_49716 = cljs.core.first(seq__49118_49710__$1);
fragment.appendChild(shadow.dom._to_dom(node_49716));


var G__49717 = cljs.core.next(seq__49118_49710__$1);
var G__49718 = null;
var G__49719 = (0);
var G__49720 = (0);
seq__49118_49700 = G__49717;
chunk__49119_49701 = G__49718;
count__49120_49702 = G__49719;
i__49121_49703 = G__49720;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49116){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49116));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49142_49721 = cljs.core.seq(scripts);
var chunk__49143_49722 = null;
var count__49144_49723 = (0);
var i__49145_49724 = (0);
while(true){
if((i__49145_49724 < count__49144_49723)){
var vec__49160_49725 = chunk__49143_49722.cljs$core$IIndexed$_nth$arity$2(null,i__49145_49724);
var script_tag_49726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49160_49725,(0),null);
var script_body_49727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49160_49725,(1),null);
eval(script_body_49727);


var G__49728 = seq__49142_49721;
var G__49729 = chunk__49143_49722;
var G__49730 = count__49144_49723;
var G__49731 = (i__49145_49724 + (1));
seq__49142_49721 = G__49728;
chunk__49143_49722 = G__49729;
count__49144_49723 = G__49730;
i__49145_49724 = G__49731;
continue;
} else {
var temp__5753__auto___49733 = cljs.core.seq(seq__49142_49721);
if(temp__5753__auto___49733){
var seq__49142_49734__$1 = temp__5753__auto___49733;
if(cljs.core.chunked_seq_QMARK_(seq__49142_49734__$1)){
var c__4649__auto___49735 = cljs.core.chunk_first(seq__49142_49734__$1);
var G__49736 = cljs.core.chunk_rest(seq__49142_49734__$1);
var G__49737 = c__4649__auto___49735;
var G__49738 = cljs.core.count(c__4649__auto___49735);
var G__49739 = (0);
seq__49142_49721 = G__49736;
chunk__49143_49722 = G__49737;
count__49144_49723 = G__49738;
i__49145_49724 = G__49739;
continue;
} else {
var vec__49168_49740 = cljs.core.first(seq__49142_49734__$1);
var script_tag_49741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49168_49740,(0),null);
var script_body_49742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49168_49740,(1),null);
eval(script_body_49742);


var G__49743 = cljs.core.next(seq__49142_49734__$1);
var G__49744 = null;
var G__49745 = (0);
var G__49746 = (0);
seq__49142_49721 = G__49743;
chunk__49143_49722 = G__49744;
count__49144_49723 = G__49745;
i__49145_49724 = G__49746;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49172){
var vec__49174 = p__49172;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49174,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49174,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49192 = arguments.length;
switch (G__49192) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49212 = cljs.core.seq(style_keys);
var chunk__49213 = null;
var count__49214 = (0);
var i__49215 = (0);
while(true){
if((i__49215 < count__49214)){
var it = chunk__49213.cljs$core$IIndexed$_nth$arity$2(null,i__49215);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49759 = seq__49212;
var G__49760 = chunk__49213;
var G__49761 = count__49214;
var G__49762 = (i__49215 + (1));
seq__49212 = G__49759;
chunk__49213 = G__49760;
count__49214 = G__49761;
i__49215 = G__49762;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49212);
if(temp__5753__auto__){
var seq__49212__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49212__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49212__$1);
var G__49764 = cljs.core.chunk_rest(seq__49212__$1);
var G__49765 = c__4649__auto__;
var G__49766 = cljs.core.count(c__4649__auto__);
var G__49767 = (0);
seq__49212 = G__49764;
chunk__49213 = G__49765;
count__49214 = G__49766;
i__49215 = G__49767;
continue;
} else {
var it = cljs.core.first(seq__49212__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49768 = cljs.core.next(seq__49212__$1);
var G__49769 = null;
var G__49770 = (0);
var G__49771 = (0);
seq__49212 = G__49768;
chunk__49213 = G__49769;
count__49214 = G__49770;
i__49215 = G__49771;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49223,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49234 = k49223;
var G__49234__$1 = (((G__49234 instanceof cljs.core.Keyword))?G__49234.fqn:null);
switch (G__49234__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49223,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49238){
var vec__49239 = p__49238;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49239,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49239,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49222){
var self__ = this;
var G__49222__$1 = this;
return (new cljs.core.RecordIter((0),G__49222__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49224,other49225){
var self__ = this;
var this49224__$1 = this;
return (((!((other49225 == null)))) && ((((this49224__$1.constructor === other49225.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49224__$1.x,other49225.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49224__$1.y,other49225.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49224__$1.__extmap,other49225.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49223){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49245 = k49223;
var G__49245__$1 = (((G__49245 instanceof cljs.core.Keyword))?G__49245.fqn:null);
switch (G__49245__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49223);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49222){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49246 = cljs.core.keyword_identical_QMARK_;
var expr__49247 = k__4481__auto__;
if(cljs.core.truth_((pred__49246.cljs$core$IFn$_invoke$arity$2 ? pred__49246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49247) : pred__49246.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49247)))){
return (new shadow.dom.Coordinate(G__49222,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49246.cljs$core$IFn$_invoke$arity$2 ? pred__49246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49247) : pred__49246.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49247)))){
return (new shadow.dom.Coordinate(self__.x,G__49222,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49222),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49222){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49222,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49229){
var extmap__4512__auto__ = (function (){var G__49261 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49229,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49261);
} else {
return G__49261;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49229),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49229),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49270,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49281 = k49270;
var G__49281__$1 = (((G__49281 instanceof cljs.core.Keyword))?G__49281.fqn:null);
switch (G__49281__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49270,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49284){
var vec__49286 = p__49284;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49286,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49286,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49269){
var self__ = this;
var G__49269__$1 = this;
return (new cljs.core.RecordIter((0),G__49269__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49271,other49272){
var self__ = this;
var this49271__$1 = this;
return (((!((other49272 == null)))) && ((((this49271__$1.constructor === other49272.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49271__$1.w,other49272.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49271__$1.h,other49272.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49271__$1.__extmap,other49272.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49270){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49312 = k49270;
var G__49312__$1 = (((G__49312 instanceof cljs.core.Keyword))?G__49312.fqn:null);
switch (G__49312__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49270);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49269){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49314 = cljs.core.keyword_identical_QMARK_;
var expr__49315 = k__4481__auto__;
if(cljs.core.truth_((pred__49314.cljs$core$IFn$_invoke$arity$2 ? pred__49314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49315) : pred__49314.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49315)))){
return (new shadow.dom.Size(G__49269,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49314.cljs$core$IFn$_invoke$arity$2 ? pred__49314.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49315) : pred__49314.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49315)))){
return (new shadow.dom.Size(self__.w,G__49269,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49269),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49269){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49269,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49275){
var extmap__4512__auto__ = (function (){var G__49330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49275,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49275)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49330);
} else {
return G__49330;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49275),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49275),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__49804 = (i + (1));
var G__49805 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49804;
ret = G__49805;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49366){
var vec__49368 = p__49366;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49368,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49368,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49373 = arguments.length;
switch (G__49373) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49816 = ps;
var G__49817 = (i + (1));
el__$1 = G__49816;
i = G__49817;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49392 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49392,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49392,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49392,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49395_49823 = cljs.core.seq(props);
var chunk__49396_49824 = null;
var count__49397_49825 = (0);
var i__49398_49826 = (0);
while(true){
if((i__49398_49826 < count__49397_49825)){
var vec__49405_49830 = chunk__49396_49824.cljs$core$IIndexed$_nth$arity$2(null,i__49398_49826);
var k_49831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49405_49830,(0),null);
var v_49832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49405_49830,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_49831);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49831),v_49832);


var G__49833 = seq__49395_49823;
var G__49834 = chunk__49396_49824;
var G__49835 = count__49397_49825;
var G__49836 = (i__49398_49826 + (1));
seq__49395_49823 = G__49833;
chunk__49396_49824 = G__49834;
count__49397_49825 = G__49835;
i__49398_49826 = G__49836;
continue;
} else {
var temp__5753__auto___49837 = cljs.core.seq(seq__49395_49823);
if(temp__5753__auto___49837){
var seq__49395_49838__$1 = temp__5753__auto___49837;
if(cljs.core.chunked_seq_QMARK_(seq__49395_49838__$1)){
var c__4649__auto___49839 = cljs.core.chunk_first(seq__49395_49838__$1);
var G__49840 = cljs.core.chunk_rest(seq__49395_49838__$1);
var G__49841 = c__4649__auto___49839;
var G__49842 = cljs.core.count(c__4649__auto___49839);
var G__49843 = (0);
seq__49395_49823 = G__49840;
chunk__49396_49824 = G__49841;
count__49397_49825 = G__49842;
i__49398_49826 = G__49843;
continue;
} else {
var vec__49408_49844 = cljs.core.first(seq__49395_49838__$1);
var k_49845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49408_49844,(0),null);
var v_49846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49408_49844,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_49845);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49845),v_49846);


var G__49848 = cljs.core.next(seq__49395_49838__$1);
var G__49849 = null;
var G__49850 = (0);
var G__49851 = (0);
seq__49395_49823 = G__49848;
chunk__49396_49824 = G__49849;
count__49397_49825 = G__49850;
i__49398_49826 = G__49851;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49412 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49412,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49412,(1),null);
var seq__49415_49852 = cljs.core.seq(node_children);
var chunk__49417_49853 = null;
var count__49418_49854 = (0);
var i__49419_49855 = (0);
while(true){
if((i__49419_49855 < count__49418_49854)){
var child_struct_49857 = chunk__49417_49853.cljs$core$IIndexed$_nth$arity$2(null,i__49419_49855);
if((!((child_struct_49857 == null)))){
if(typeof child_struct_49857 === 'string'){
var text_49859 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49859),child_struct_49857].join(''));
} else {
var children_49866 = shadow.dom.svg_node(child_struct_49857);
if(cljs.core.seq_QMARK_(children_49866)){
var seq__49433_49867 = cljs.core.seq(children_49866);
var chunk__49435_49868 = null;
var count__49436_49869 = (0);
var i__49437_49870 = (0);
while(true){
if((i__49437_49870 < count__49436_49869)){
var child_49872 = chunk__49435_49868.cljs$core$IIndexed$_nth$arity$2(null,i__49437_49870);
if(cljs.core.truth_(child_49872)){
node.appendChild(child_49872);


var G__49874 = seq__49433_49867;
var G__49875 = chunk__49435_49868;
var G__49876 = count__49436_49869;
var G__49877 = (i__49437_49870 + (1));
seq__49433_49867 = G__49874;
chunk__49435_49868 = G__49875;
count__49436_49869 = G__49876;
i__49437_49870 = G__49877;
continue;
} else {
var G__49878 = seq__49433_49867;
var G__49879 = chunk__49435_49868;
var G__49880 = count__49436_49869;
var G__49881 = (i__49437_49870 + (1));
seq__49433_49867 = G__49878;
chunk__49435_49868 = G__49879;
count__49436_49869 = G__49880;
i__49437_49870 = G__49881;
continue;
}
} else {
var temp__5753__auto___49882 = cljs.core.seq(seq__49433_49867);
if(temp__5753__auto___49882){
var seq__49433_49884__$1 = temp__5753__auto___49882;
if(cljs.core.chunked_seq_QMARK_(seq__49433_49884__$1)){
var c__4649__auto___49885 = cljs.core.chunk_first(seq__49433_49884__$1);
var G__49886 = cljs.core.chunk_rest(seq__49433_49884__$1);
var G__49887 = c__4649__auto___49885;
var G__49888 = cljs.core.count(c__4649__auto___49885);
var G__49889 = (0);
seq__49433_49867 = G__49886;
chunk__49435_49868 = G__49887;
count__49436_49869 = G__49888;
i__49437_49870 = G__49889;
continue;
} else {
var child_49890 = cljs.core.first(seq__49433_49884__$1);
if(cljs.core.truth_(child_49890)){
node.appendChild(child_49890);


var G__49891 = cljs.core.next(seq__49433_49884__$1);
var G__49892 = null;
var G__49893 = (0);
var G__49894 = (0);
seq__49433_49867 = G__49891;
chunk__49435_49868 = G__49892;
count__49436_49869 = G__49893;
i__49437_49870 = G__49894;
continue;
} else {
var G__49895 = cljs.core.next(seq__49433_49884__$1);
var G__49896 = null;
var G__49897 = (0);
var G__49898 = (0);
seq__49433_49867 = G__49895;
chunk__49435_49868 = G__49896;
count__49436_49869 = G__49897;
i__49437_49870 = G__49898;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49866);
}
}


var G__49899 = seq__49415_49852;
var G__49900 = chunk__49417_49853;
var G__49901 = count__49418_49854;
var G__49902 = (i__49419_49855 + (1));
seq__49415_49852 = G__49899;
chunk__49417_49853 = G__49900;
count__49418_49854 = G__49901;
i__49419_49855 = G__49902;
continue;
} else {
var G__49903 = seq__49415_49852;
var G__49904 = chunk__49417_49853;
var G__49905 = count__49418_49854;
var G__49906 = (i__49419_49855 + (1));
seq__49415_49852 = G__49903;
chunk__49417_49853 = G__49904;
count__49418_49854 = G__49905;
i__49419_49855 = G__49906;
continue;
}
} else {
var temp__5753__auto___49907 = cljs.core.seq(seq__49415_49852);
if(temp__5753__auto___49907){
var seq__49415_49908__$1 = temp__5753__auto___49907;
if(cljs.core.chunked_seq_QMARK_(seq__49415_49908__$1)){
var c__4649__auto___49909 = cljs.core.chunk_first(seq__49415_49908__$1);
var G__49910 = cljs.core.chunk_rest(seq__49415_49908__$1);
var G__49911 = c__4649__auto___49909;
var G__49912 = cljs.core.count(c__4649__auto___49909);
var G__49913 = (0);
seq__49415_49852 = G__49910;
chunk__49417_49853 = G__49911;
count__49418_49854 = G__49912;
i__49419_49855 = G__49913;
continue;
} else {
var child_struct_49914 = cljs.core.first(seq__49415_49908__$1);
if((!((child_struct_49914 == null)))){
if(typeof child_struct_49914 === 'string'){
var text_49915 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49915),child_struct_49914].join(''));
} else {
var children_49916 = shadow.dom.svg_node(child_struct_49914);
if(cljs.core.seq_QMARK_(children_49916)){
var seq__49439_49917 = cljs.core.seq(children_49916);
var chunk__49441_49918 = null;
var count__49442_49919 = (0);
var i__49443_49920 = (0);
while(true){
if((i__49443_49920 < count__49442_49919)){
var child_49921 = chunk__49441_49918.cljs$core$IIndexed$_nth$arity$2(null,i__49443_49920);
if(cljs.core.truth_(child_49921)){
node.appendChild(child_49921);


var G__49922 = seq__49439_49917;
var G__49923 = chunk__49441_49918;
var G__49924 = count__49442_49919;
var G__49925 = (i__49443_49920 + (1));
seq__49439_49917 = G__49922;
chunk__49441_49918 = G__49923;
count__49442_49919 = G__49924;
i__49443_49920 = G__49925;
continue;
} else {
var G__49926 = seq__49439_49917;
var G__49927 = chunk__49441_49918;
var G__49928 = count__49442_49919;
var G__49929 = (i__49443_49920 + (1));
seq__49439_49917 = G__49926;
chunk__49441_49918 = G__49927;
count__49442_49919 = G__49928;
i__49443_49920 = G__49929;
continue;
}
} else {
var temp__5753__auto___49930__$1 = cljs.core.seq(seq__49439_49917);
if(temp__5753__auto___49930__$1){
var seq__49439_49931__$1 = temp__5753__auto___49930__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49439_49931__$1)){
var c__4649__auto___49932 = cljs.core.chunk_first(seq__49439_49931__$1);
var G__49933 = cljs.core.chunk_rest(seq__49439_49931__$1);
var G__49934 = c__4649__auto___49932;
var G__49935 = cljs.core.count(c__4649__auto___49932);
var G__49936 = (0);
seq__49439_49917 = G__49933;
chunk__49441_49918 = G__49934;
count__49442_49919 = G__49935;
i__49443_49920 = G__49936;
continue;
} else {
var child_49937 = cljs.core.first(seq__49439_49931__$1);
if(cljs.core.truth_(child_49937)){
node.appendChild(child_49937);


var G__49938 = cljs.core.next(seq__49439_49931__$1);
var G__49939 = null;
var G__49940 = (0);
var G__49941 = (0);
seq__49439_49917 = G__49938;
chunk__49441_49918 = G__49939;
count__49442_49919 = G__49940;
i__49443_49920 = G__49941;
continue;
} else {
var G__49942 = cljs.core.next(seq__49439_49931__$1);
var G__49943 = null;
var G__49944 = (0);
var G__49945 = (0);
seq__49439_49917 = G__49942;
chunk__49441_49918 = G__49943;
count__49442_49919 = G__49944;
i__49443_49920 = G__49945;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49916);
}
}


var G__49946 = cljs.core.next(seq__49415_49908__$1);
var G__49947 = null;
var G__49948 = (0);
var G__49949 = (0);
seq__49415_49852 = G__49946;
chunk__49417_49853 = G__49947;
count__49418_49854 = G__49948;
i__49419_49855 = G__49949;
continue;
} else {
var G__49950 = cljs.core.next(seq__49415_49908__$1);
var G__49951 = null;
var G__49952 = (0);
var G__49953 = (0);
seq__49415_49852 = G__49950;
chunk__49417_49853 = G__49951;
count__49418_49854 = G__49952;
i__49419_49855 = G__49953;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49954 = arguments.length;
var i__4830__auto___49955 = (0);
while(true){
if((i__4830__auto___49955 < len__4829__auto___49954)){
args__4835__auto__.push((arguments[i__4830__auto___49955]));

var G__49958 = (i__4830__auto___49955 + (1));
i__4830__auto___49955 = G__49958;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49461){
var G__49462 = cljs.core.first(seq49461);
var seq49461__$1 = cljs.core.next(seq49461);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49462,seq49461__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49470 = arguments.length;
switch (G__49470) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__46492__auto___49960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46493__auto__ = (function (){var switch__46402__auto__ = (function (state_49485){
var state_val_49486 = (state_49485[(1)]);
if((state_val_49486 === (1))){
var state_49485__$1 = state_49485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49485__$1,(2),once_or_cleanup);
} else {
if((state_val_49486 === (2))){
var inst_49482 = (state_49485[(2)]);
var inst_49483 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49485__$1 = (function (){var statearr_49487 = state_49485;
(statearr_49487[(7)] = inst_49482);

return statearr_49487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49485__$1,inst_49483);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46403__auto__ = null;
var shadow$dom$state_machine__46403__auto____0 = (function (){
var statearr_49488 = [null,null,null,null,null,null,null,null];
(statearr_49488[(0)] = shadow$dom$state_machine__46403__auto__);

(statearr_49488[(1)] = (1));

return statearr_49488;
});
var shadow$dom$state_machine__46403__auto____1 = (function (state_49485){
while(true){
var ret_value__46404__auto__ = (function (){try{while(true){
var result__46405__auto__ = switch__46402__auto__(state_49485);
if(cljs.core.keyword_identical_QMARK_(result__46405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46405__auto__;
}
break;
}
}catch (e49489){var ex__46406__auto__ = e49489;
var statearr_49490_49964 = state_49485;
(statearr_49490_49964[(2)] = ex__46406__auto__);


if(cljs.core.seq((state_49485[(4)]))){
var statearr_49491_49966 = state_49485;
(statearr_49491_49966[(1)] = cljs.core.first((state_49485[(4)])));

} else {
throw ex__46406__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49967 = state_49485;
state_49485 = G__49967;
continue;
} else {
return ret_value__46404__auto__;
}
break;
}
});
shadow$dom$state_machine__46403__auto__ = function(state_49485){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46403__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46403__auto____1.call(this,state_49485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46403__auto____0;
shadow$dom$state_machine__46403__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46403__auto____1;
return shadow$dom$state_machine__46403__auto__;
})()
})();
var state__46494__auto__ = (function (){var statearr_49492 = f__46493__auto__();
(statearr_49492[(6)] = c__46492__auto___49960);

return statearr_49492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46494__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
