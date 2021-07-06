goog.provide('cypto.core');
cypto.core.dev_setup = (function cypto$core$dev_setup(){
if(cypto.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
cypto.core.mount_root = (function cypto$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cypto.views.main_panel], null),root_el);
});
cypto.core.init = (function cypto$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cypto.events","initialize-db","cypto.events/initialize-db",633473482)], null));

cypto.core.dev_setup();

cypto.core.mount_root();

var c__32714__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32715__auto__ = (function (){var switch__32644__auto__ = (function (state_36961){
var state_val_36962 = (state_36961[(1)]);
if((state_val_36962 === (1))){
var inst_36947 = (1);
var state_36961__$1 = (function (){var statearr_36963 = state_36961;
(statearr_36963[(7)] = inst_36947);

return statearr_36963;
})();
var statearr_36964_36972 = state_36961__$1;
(statearr_36964_36972[(2)] = null);

(statearr_36964_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (2))){
var inst_36949 = cljs.core.async.timeout((15000));
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36961__$1,(4),inst_36949);
} else {
if((state_val_36962 === (3))){
var inst_36959 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36961__$1,inst_36959);
} else {
if((state_val_36962 === (4))){
var inst_36947 = (state_36961[(7)]);
var inst_36951 = (state_36961[(2)]);
var inst_36952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36953 = [new cljs.core.Keyword("cypto.events","fetch","cypto.events/fetch",393865130)];
var inst_36954 = (new cljs.core.PersistentVector(null,1,(5),inst_36952,inst_36953,null));
var inst_36955 = re_frame.core.dispatch(inst_36954);
var inst_36956 = (inst_36947 + (15));
var inst_36947__$1 = inst_36956;
var state_36961__$1 = (function (){var statearr_36965 = state_36961;
(statearr_36965[(8)] = inst_36951);

(statearr_36965[(7)] = inst_36947__$1);

(statearr_36965[(9)] = inst_36955);

return statearr_36965;
})();
var statearr_36966_36973 = state_36961__$1;
(statearr_36966_36973[(2)] = null);

(statearr_36966_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var cypto$core$init_$_state_machine__32645__auto__ = null;
var cypto$core$init_$_state_machine__32645__auto____0 = (function (){
var statearr_36967 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36967[(0)] = cypto$core$init_$_state_machine__32645__auto__);

(statearr_36967[(1)] = (1));

return statearr_36967;
});
var cypto$core$init_$_state_machine__32645__auto____1 = (function (state_36961){
while(true){
var ret_value__32646__auto__ = (function (){try{while(true){
var result__32647__auto__ = switch__32644__auto__(state_36961);
if(cljs.core.keyword_identical_QMARK_(result__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32647__auto__;
}
break;
}
}catch (e36968){var ex__32648__auto__ = e36968;
var statearr_36969_36974 = state_36961;
(statearr_36969_36974[(2)] = ex__32648__auto__);


if(cljs.core.seq((state_36961[(4)]))){
var statearr_36970_36975 = state_36961;
(statearr_36970_36975[(1)] = cljs.core.first((state_36961[(4)])));

} else {
throw ex__32648__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36976 = state_36961;
state_36961 = G__36976;
continue;
} else {
return ret_value__32646__auto__;
}
break;
}
});
cypto$core$init_$_state_machine__32645__auto__ = function(state_36961){
switch(arguments.length){
case 0:
return cypto$core$init_$_state_machine__32645__auto____0.call(this);
case 1:
return cypto$core$init_$_state_machine__32645__auto____1.call(this,state_36961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cypto$core$init_$_state_machine__32645__auto__.cljs$core$IFn$_invoke$arity$0 = cypto$core$init_$_state_machine__32645__auto____0;
cypto$core$init_$_state_machine__32645__auto__.cljs$core$IFn$_invoke$arity$1 = cypto$core$init_$_state_machine__32645__auto____1;
return cypto$core$init_$_state_machine__32645__auto__;
})()
})();
var state__32716__auto__ = (function (){var statearr_36971 = f__32715__auto__();
(statearr_36971[(6)] = c__32714__auto__);

return statearr_36971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32716__auto__);
}));

return c__32714__auto__;
});

//# sourceMappingURL=cypto.core.js.map
