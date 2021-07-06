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

var c__32697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32698__auto__ = (function (){var switch__32627__auto__ = (function (state_36551){
var state_val_36552 = (state_36551[(1)]);
if((state_val_36552 === (1))){
var inst_36537 = (1);
var state_36551__$1 = (function (){var statearr_36553 = state_36551;
(statearr_36553[(7)] = inst_36537);

return statearr_36553;
})();
var statearr_36554_36562 = state_36551__$1;
(statearr_36554_36562[(2)] = null);

(statearr_36554_36562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (2))){
var inst_36539 = cljs.core.async.timeout((15000));
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36551__$1,(4),inst_36539);
} else {
if((state_val_36552 === (3))){
var inst_36549 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36551__$1,inst_36549);
} else {
if((state_val_36552 === (4))){
var inst_36537 = (state_36551[(7)]);
var inst_36541 = (state_36551[(2)]);
var inst_36542 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36543 = [new cljs.core.Keyword("cypto.events","fetch","cypto.events/fetch",393865130)];
var inst_36544 = (new cljs.core.PersistentVector(null,1,(5),inst_36542,inst_36543,null));
var inst_36545 = re_frame.core.dispatch(inst_36544);
var inst_36546 = (inst_36537 + (15));
var inst_36537__$1 = inst_36546;
var state_36551__$1 = (function (){var statearr_36555 = state_36551;
(statearr_36555[(7)] = inst_36537__$1);

(statearr_36555[(8)] = inst_36541);

(statearr_36555[(9)] = inst_36545);

return statearr_36555;
})();
var statearr_36556_36563 = state_36551__$1;
(statearr_36556_36563[(2)] = null);

(statearr_36556_36563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var cypto$core$init_$_state_machine__32628__auto__ = null;
var cypto$core$init_$_state_machine__32628__auto____0 = (function (){
var statearr_36557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36557[(0)] = cypto$core$init_$_state_machine__32628__auto__);

(statearr_36557[(1)] = (1));

return statearr_36557;
});
var cypto$core$init_$_state_machine__32628__auto____1 = (function (state_36551){
while(true){
var ret_value__32629__auto__ = (function (){try{while(true){
var result__32630__auto__ = switch__32627__auto__(state_36551);
if(cljs.core.keyword_identical_QMARK_(result__32630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32630__auto__;
}
break;
}
}catch (e36558){var ex__32631__auto__ = e36558;
var statearr_36559_36564 = state_36551;
(statearr_36559_36564[(2)] = ex__32631__auto__);


if(cljs.core.seq((state_36551[(4)]))){
var statearr_36560_36565 = state_36551;
(statearr_36560_36565[(1)] = cljs.core.first((state_36551[(4)])));

} else {
throw ex__32631__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36566 = state_36551;
state_36551 = G__36566;
continue;
} else {
return ret_value__32629__auto__;
}
break;
}
});
cypto$core$init_$_state_machine__32628__auto__ = function(state_36551){
switch(arguments.length){
case 0:
return cypto$core$init_$_state_machine__32628__auto____0.call(this);
case 1:
return cypto$core$init_$_state_machine__32628__auto____1.call(this,state_36551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cypto$core$init_$_state_machine__32628__auto__.cljs$core$IFn$_invoke$arity$0 = cypto$core$init_$_state_machine__32628__auto____0;
cypto$core$init_$_state_machine__32628__auto__.cljs$core$IFn$_invoke$arity$1 = cypto$core$init_$_state_machine__32628__auto____1;
return cypto$core$init_$_state_machine__32628__auto__;
})()
})();
var state__32699__auto__ = (function (){var statearr_36561 = f__32698__auto__();
(statearr_36561[(6)] = c__32697__auto__);

return statearr_36561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32699__auto__);
}));

return c__32697__auto__;
});

//# sourceMappingURL=cypto.core.js.map
