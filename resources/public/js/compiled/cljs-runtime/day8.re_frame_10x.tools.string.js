goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4835__auto__ = [];
var len__4829__auto___44111 = arguments.length;
var i__4830__auto___44112 = (0);
while(true){
if((i__4830__auto___44112 < len__4829__auto___44111)){
args__4835__auto__.push((arguments[i__4830__auto___44112]));

var G__44113 = (i__4830__auto___44112 + (1));
i__4830__auto___44112 = G__44113;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__44095){
var vec__44096 = p__44095;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44096,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq44092){
var G__44093 = cljs.core.first(seq44092);
var seq44092__$1 = cljs.core.next(seq44092);
var G__44094 = cljs.core.first(seq44092__$1);
var seq44092__$2 = cljs.core.next(seq44092__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44093,G__44094,seq44092__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___44114 = arguments.length;
var i__4830__auto___44115 = (0);
while(true){
if((i__4830__auto___44115 < len__4829__auto___44114)){
args__4835__auto__.push((arguments[i__4830__auto___44115]));

var G__44116 = (i__4830__auto___44115 + (1));
i__4830__auto___44115 = G__44116;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__44107){
var vec__44108 = p__44107;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44108,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq44104){
var G__44105 = cljs.core.first(seq44104);
var seq44104__$1 = cljs.core.next(seq44104);
var G__44106 = cljs.core.first(seq44104__$1);
var seq44104__$2 = cljs.core.next(seq44104__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44105,G__44106,seq44104__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
