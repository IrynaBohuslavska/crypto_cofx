goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38004__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38005__i = 0, G__38005__a = new Array(arguments.length -  0);
while (G__38005__i < G__38005__a.length) {G__38005__a[G__38005__i] = arguments[G__38005__i + 0]; ++G__38005__i;}
  args = new cljs.core.IndexedSeq(G__38005__a,0,null);
} 
return G__38004__delegate.call(this,args);};
G__38004.cljs$lang$maxFixedArity = 0;
G__38004.cljs$lang$applyTo = (function (arglist__38006){
var args = cljs.core.seq(arglist__38006);
return G__38004__delegate(args);
});
G__38004.cljs$core$IFn$_invoke$arity$variadic = G__38004__delegate;
return G__38004;
})()
);

(o.error = (function() { 
var G__38007__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38008__i = 0, G__38008__a = new Array(arguments.length -  0);
while (G__38008__i < G__38008__a.length) {G__38008__a[G__38008__i] = arguments[G__38008__i + 0]; ++G__38008__i;}
  args = new cljs.core.IndexedSeq(G__38008__a,0,null);
} 
return G__38007__delegate.call(this,args);};
G__38007.cljs$lang$maxFixedArity = 0;
G__38007.cljs$lang$applyTo = (function (arglist__38009){
var args = cljs.core.seq(arglist__38009);
return G__38007__delegate(args);
});
G__38007.cljs$core$IFn$_invoke$arity$variadic = G__38007__delegate;
return G__38007;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
