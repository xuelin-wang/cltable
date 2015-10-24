// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24929 = cljs.core._EQ_;
var expr__24930 = (function (){var or__16305__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24929.call(null,"true",expr__24930))){
return true;
} else {
if(cljs.core.truth_(pred__24929.call(null,"false",expr__24930))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24930)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24932__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24933__i = 0, G__24933__a = new Array(arguments.length -  0);
while (G__24933__i < G__24933__a.length) {G__24933__a[G__24933__i] = arguments[G__24933__i + 0]; ++G__24933__i;}
  args = new cljs.core.IndexedSeq(G__24933__a,0);
} 
return G__24932__delegate.call(this,args);};
G__24932.cljs$lang$maxFixedArity = 0;
G__24932.cljs$lang$applyTo = (function (arglist__24934){
var args = cljs.core.seq(arglist__24934);
return G__24932__delegate(args);
});
G__24932.cljs$core$IFn$_invoke$arity$variadic = G__24932__delegate;
return G__24932;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24935){
var map__24938 = p__24935;
var map__24938__$1 = ((((!((map__24938 == null)))?((((map__24938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24938):map__24938);
var message = cljs.core.get.call(null,map__24938__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16305__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16293__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16293__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16293__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20225__auto___25100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___25100,ch){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___25100,ch){
return (function (state_25069){
var state_val_25070 = (state_25069[(1)]);
if((state_val_25070 === (7))){
var inst_25065 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25071_25101 = state_25069__$1;
(statearr_25071_25101[(2)] = inst_25065);

(statearr_25071_25101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (1))){
var state_25069__$1 = state_25069;
var statearr_25072_25102 = state_25069__$1;
(statearr_25072_25102[(2)] = null);

(statearr_25072_25102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (4))){
var inst_25022 = (state_25069[(7)]);
var inst_25022__$1 = (state_25069[(2)]);
var state_25069__$1 = (function (){var statearr_25073 = state_25069;
(statearr_25073[(7)] = inst_25022__$1);

return statearr_25073;
})();
if(cljs.core.truth_(inst_25022__$1)){
var statearr_25074_25103 = state_25069__$1;
(statearr_25074_25103[(1)] = (5));

} else {
var statearr_25075_25104 = state_25069__$1;
(statearr_25075_25104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (15))){
var inst_25029 = (state_25069[(8)]);
var inst_25044 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25029);
var inst_25045 = cljs.core.first.call(null,inst_25044);
var inst_25046 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25045);
var inst_25047 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25046)].join('');
var inst_25048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25047);
var state_25069__$1 = state_25069;
var statearr_25076_25105 = state_25069__$1;
(statearr_25076_25105[(2)] = inst_25048);

(statearr_25076_25105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (13))){
var inst_25053 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25077_25106 = state_25069__$1;
(statearr_25077_25106[(2)] = inst_25053);

(statearr_25077_25106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (6))){
var state_25069__$1 = state_25069;
var statearr_25078_25107 = state_25069__$1;
(statearr_25078_25107[(2)] = null);

(statearr_25078_25107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (17))){
var inst_25051 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25079_25108 = state_25069__$1;
(statearr_25079_25108[(2)] = inst_25051);

(statearr_25079_25108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (3))){
var inst_25067 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25069__$1,inst_25067);
} else {
if((state_val_25070 === (12))){
var inst_25028 = (state_25069[(9)]);
var inst_25042 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25028,opts);
var state_25069__$1 = state_25069;
if(cljs.core.truth_(inst_25042)){
var statearr_25080_25109 = state_25069__$1;
(statearr_25080_25109[(1)] = (15));

} else {
var statearr_25081_25110 = state_25069__$1;
(statearr_25081_25110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (2))){
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25069__$1,(4),ch);
} else {
if((state_val_25070 === (11))){
var inst_25029 = (state_25069[(8)]);
var inst_25034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25035 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25029);
var inst_25036 = cljs.core.async.timeout.call(null,(1000));
var inst_25037 = [inst_25035,inst_25036];
var inst_25038 = (new cljs.core.PersistentVector(null,2,(5),inst_25034,inst_25037,null));
var state_25069__$1 = state_25069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25069__$1,(14),inst_25038);
} else {
if((state_val_25070 === (9))){
var inst_25029 = (state_25069[(8)]);
var inst_25055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25029);
var inst_25057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25056);
var inst_25058 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25057)].join('');
var inst_25059 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25058);
var state_25069__$1 = (function (){var statearr_25082 = state_25069;
(statearr_25082[(10)] = inst_25055);

return statearr_25082;
})();
var statearr_25083_25111 = state_25069__$1;
(statearr_25083_25111[(2)] = inst_25059);

(statearr_25083_25111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (5))){
var inst_25022 = (state_25069[(7)]);
var inst_25024 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25025 = (new cljs.core.PersistentArrayMap(null,2,inst_25024,null));
var inst_25026 = (new cljs.core.PersistentHashSet(null,inst_25025,null));
var inst_25027 = figwheel.client.focus_msgs.call(null,inst_25026,inst_25022);
var inst_25028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25027);
var inst_25029 = cljs.core.first.call(null,inst_25027);
var inst_25030 = figwheel.client.autoload_QMARK_.call(null);
var state_25069__$1 = (function (){var statearr_25084 = state_25069;
(statearr_25084[(9)] = inst_25028);

(statearr_25084[(8)] = inst_25029);

return statearr_25084;
})();
if(cljs.core.truth_(inst_25030)){
var statearr_25085_25112 = state_25069__$1;
(statearr_25085_25112[(1)] = (8));

} else {
var statearr_25086_25113 = state_25069__$1;
(statearr_25086_25113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (14))){
var inst_25040 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25087_25114 = state_25069__$1;
(statearr_25087_25114[(2)] = inst_25040);

(statearr_25087_25114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (16))){
var state_25069__$1 = state_25069;
var statearr_25088_25115 = state_25069__$1;
(statearr_25088_25115[(2)] = null);

(statearr_25088_25115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (10))){
var inst_25061 = (state_25069[(2)]);
var state_25069__$1 = (function (){var statearr_25089 = state_25069;
(statearr_25089[(11)] = inst_25061);

return statearr_25089;
})();
var statearr_25090_25116 = state_25069__$1;
(statearr_25090_25116[(2)] = null);

(statearr_25090_25116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (8))){
var inst_25028 = (state_25069[(9)]);
var inst_25032 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25028,opts);
var state_25069__$1 = state_25069;
if(cljs.core.truth_(inst_25032)){
var statearr_25091_25117 = state_25069__$1;
(statearr_25091_25117[(1)] = (11));

} else {
var statearr_25092_25118 = state_25069__$1;
(statearr_25092_25118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto___25100,ch))
;
return ((function (switch__20160__auto__,c__20225__auto___25100,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20161__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20161__auto____0 = (function (){
var statearr_25096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25096[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20161__auto__);

(statearr_25096[(1)] = (1));

return statearr_25096;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20161__auto____1 = (function (state_25069){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_25069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e25097){if((e25097 instanceof Object)){
var ex__20164__auto__ = e25097;
var statearr_25098_25119 = state_25069;
(statearr_25098_25119[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25120 = state_25069;
state_25069 = G__25120;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20161__auto__ = function(state_25069){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20161__auto____1.call(this,state_25069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20161__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20161__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___25100,ch))
})();
var state__20227__auto__ = (function (){var statearr_25099 = f__20226__auto__.call(null);
(statearr_25099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___25100);

return statearr_25099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___25100,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25121_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25121_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25128 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25128){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25126 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25127 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25126,_STAR_print_newline_STAR_25127,base_path_25128){
return (function() { 
var G__25129__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25130__i = 0, G__25130__a = new Array(arguments.length -  0);
while (G__25130__i < G__25130__a.length) {G__25130__a[G__25130__i] = arguments[G__25130__i + 0]; ++G__25130__i;}
  args = new cljs.core.IndexedSeq(G__25130__a,0);
} 
return G__25129__delegate.call(this,args);};
G__25129.cljs$lang$maxFixedArity = 0;
G__25129.cljs$lang$applyTo = (function (arglist__25131){
var args = cljs.core.seq(arglist__25131);
return G__25129__delegate(args);
});
G__25129.cljs$core$IFn$_invoke$arity$variadic = G__25129__delegate;
return G__25129;
})()
;})(_STAR_print_fn_STAR_25126,_STAR_print_newline_STAR_25127,base_path_25128))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25127;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25126;
}}catch (e25125){if((e25125 instanceof Error)){
var e = e25125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25128], null));
} else {
var e = e25125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25128))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25132){
var map__25139 = p__25132;
var map__25139__$1 = ((((!((map__25139 == null)))?((((map__25139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25139):map__25139);
var opts = map__25139__$1;
var build_id = cljs.core.get.call(null,map__25139__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25139,map__25139__$1,opts,build_id){
return (function (p__25141){
var vec__25142 = p__25141;
var map__25143 = cljs.core.nth.call(null,vec__25142,(0),null);
var map__25143__$1 = ((((!((map__25143 == null)))?((((map__25143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25143):map__25143);
var msg = map__25143__$1;
var msg_name = cljs.core.get.call(null,map__25143__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25142,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25142,map__25143,map__25143__$1,msg,msg_name,_,map__25139,map__25139__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25142,map__25143,map__25143__$1,msg,msg_name,_,map__25139,map__25139__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25139,map__25139__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25149){
var vec__25150 = p__25149;
var map__25151 = cljs.core.nth.call(null,vec__25150,(0),null);
var map__25151__$1 = ((((!((map__25151 == null)))?((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);
var msg = map__25151__$1;
var msg_name = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25150,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25153){
var map__25163 = p__25153;
var map__25163__$1 = ((((!((map__25163 == null)))?((((map__25163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25163):map__25163);
var on_compile_warning = cljs.core.get.call(null,map__25163__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25163__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25163,map__25163__$1,on_compile_warning,on_compile_fail){
return (function (p__25165){
var vec__25166 = p__25165;
var map__25167 = cljs.core.nth.call(null,vec__25166,(0),null);
var map__25167__$1 = ((((!((map__25167 == null)))?((((map__25167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25167):map__25167);
var msg = map__25167__$1;
var msg_name = cljs.core.get.call(null,map__25167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25166,(1));
var pred__25169 = cljs.core._EQ_;
var expr__25170 = msg_name;
if(cljs.core.truth_(pred__25169.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25170))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25169.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25170))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25163,map__25163__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__,msg_hist,msg_names,msg){
return (function (state_25386){
var state_val_25387 = (state_25386[(1)]);
if((state_val_25387 === (7))){
var inst_25310 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25310)){
var statearr_25388_25434 = state_25386__$1;
(statearr_25388_25434[(1)] = (8));

} else {
var statearr_25389_25435 = state_25386__$1;
(statearr_25389_25435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (20))){
var inst_25380 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25390_25436 = state_25386__$1;
(statearr_25390_25436[(2)] = inst_25380);

(statearr_25390_25436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (27))){
var inst_25376 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25391_25437 = state_25386__$1;
(statearr_25391_25437[(2)] = inst_25376);

(statearr_25391_25437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (1))){
var inst_25303 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25303)){
var statearr_25392_25438 = state_25386__$1;
(statearr_25392_25438[(1)] = (2));

} else {
var statearr_25393_25439 = state_25386__$1;
(statearr_25393_25439[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (24))){
var inst_25378 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25394_25440 = state_25386__$1;
(statearr_25394_25440[(2)] = inst_25378);

(statearr_25394_25440[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (4))){
var inst_25384 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25386__$1,inst_25384);
} else {
if((state_val_25387 === (15))){
var inst_25382 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25395_25441 = state_25386__$1;
(statearr_25395_25441[(2)] = inst_25382);

(statearr_25395_25441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (21))){
var inst_25341 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25396_25442 = state_25386__$1;
(statearr_25396_25442[(2)] = inst_25341);

(statearr_25396_25442[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (31))){
var inst_25365 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25365)){
var statearr_25397_25443 = state_25386__$1;
(statearr_25397_25443[(1)] = (34));

} else {
var statearr_25398_25444 = state_25386__$1;
(statearr_25398_25444[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (32))){
var inst_25374 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25399_25445 = state_25386__$1;
(statearr_25399_25445[(2)] = inst_25374);

(statearr_25399_25445[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (33))){
var inst_25363 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25400_25446 = state_25386__$1;
(statearr_25400_25446[(2)] = inst_25363);

(statearr_25400_25446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (13))){
var inst_25324 = figwheel.client.heads_up.clear.call(null);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(16),inst_25324);
} else {
if((state_val_25387 === (22))){
var inst_25345 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25346 = figwheel.client.heads_up.append_message.call(null,inst_25345);
var state_25386__$1 = state_25386;
var statearr_25401_25447 = state_25386__$1;
(statearr_25401_25447[(2)] = inst_25346);

(statearr_25401_25447[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (36))){
var inst_25372 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25402_25448 = state_25386__$1;
(statearr_25402_25448[(2)] = inst_25372);

(statearr_25402_25448[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (29))){
var inst_25356 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25403_25449 = state_25386__$1;
(statearr_25403_25449[(2)] = inst_25356);

(statearr_25403_25449[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (6))){
var inst_25305 = (state_25386[(7)]);
var state_25386__$1 = state_25386;
var statearr_25404_25450 = state_25386__$1;
(statearr_25404_25450[(2)] = inst_25305);

(statearr_25404_25450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (28))){
var inst_25352 = (state_25386[(2)]);
var inst_25353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25354 = figwheel.client.heads_up.display_warning.call(null,inst_25353);
var state_25386__$1 = (function (){var statearr_25405 = state_25386;
(statearr_25405[(8)] = inst_25352);

return statearr_25405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(29),inst_25354);
} else {
if((state_val_25387 === (25))){
var inst_25350 = figwheel.client.heads_up.clear.call(null);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(28),inst_25350);
} else {
if((state_val_25387 === (34))){
var inst_25367 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(37),inst_25367);
} else {
if((state_val_25387 === (17))){
var inst_25332 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25406_25451 = state_25386__$1;
(statearr_25406_25451[(2)] = inst_25332);

(statearr_25406_25451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (3))){
var inst_25322 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25322)){
var statearr_25407_25452 = state_25386__$1;
(statearr_25407_25452[(1)] = (13));

} else {
var statearr_25408_25453 = state_25386__$1;
(statearr_25408_25453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (12))){
var inst_25318 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25409_25454 = state_25386__$1;
(statearr_25409_25454[(2)] = inst_25318);

(statearr_25409_25454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (2))){
var inst_25305 = (state_25386[(7)]);
var inst_25305__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25386__$1 = (function (){var statearr_25410 = state_25386;
(statearr_25410[(7)] = inst_25305__$1);

return statearr_25410;
})();
if(cljs.core.truth_(inst_25305__$1)){
var statearr_25411_25455 = state_25386__$1;
(statearr_25411_25455[(1)] = (5));

} else {
var statearr_25412_25456 = state_25386__$1;
(statearr_25412_25456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (23))){
var inst_25348 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25348)){
var statearr_25413_25457 = state_25386__$1;
(statearr_25413_25457[(1)] = (25));

} else {
var statearr_25414_25458 = state_25386__$1;
(statearr_25414_25458[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (35))){
var state_25386__$1 = state_25386;
var statearr_25415_25459 = state_25386__$1;
(statearr_25415_25459[(2)] = null);

(statearr_25415_25459[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (19))){
var inst_25343 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25343)){
var statearr_25416_25460 = state_25386__$1;
(statearr_25416_25460[(1)] = (22));

} else {
var statearr_25417_25461 = state_25386__$1;
(statearr_25417_25461[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (11))){
var inst_25314 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25418_25462 = state_25386__$1;
(statearr_25418_25462[(2)] = inst_25314);

(statearr_25418_25462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (9))){
var inst_25316 = figwheel.client.heads_up.clear.call(null);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(12),inst_25316);
} else {
if((state_val_25387 === (5))){
var inst_25307 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25386__$1 = state_25386;
var statearr_25419_25463 = state_25386__$1;
(statearr_25419_25463[(2)] = inst_25307);

(statearr_25419_25463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (14))){
var inst_25334 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25334)){
var statearr_25420_25464 = state_25386__$1;
(statearr_25420_25464[(1)] = (18));

} else {
var statearr_25421_25465 = state_25386__$1;
(statearr_25421_25465[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (26))){
var inst_25358 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25358)){
var statearr_25422_25466 = state_25386__$1;
(statearr_25422_25466[(1)] = (30));

} else {
var statearr_25423_25467 = state_25386__$1;
(statearr_25423_25467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (16))){
var inst_25326 = (state_25386[(2)]);
var inst_25327 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25328 = figwheel.client.format_messages.call(null,inst_25327);
var inst_25329 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25330 = figwheel.client.heads_up.display_error.call(null,inst_25328,inst_25329);
var state_25386__$1 = (function (){var statearr_25424 = state_25386;
(statearr_25424[(9)] = inst_25326);

return statearr_25424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(17),inst_25330);
} else {
if((state_val_25387 === (30))){
var inst_25360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25361 = figwheel.client.heads_up.display_warning.call(null,inst_25360);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(33),inst_25361);
} else {
if((state_val_25387 === (10))){
var inst_25320 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25425_25468 = state_25386__$1;
(statearr_25425_25468[(2)] = inst_25320);

(statearr_25425_25468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (18))){
var inst_25336 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25337 = figwheel.client.format_messages.call(null,inst_25336);
var inst_25338 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25339 = figwheel.client.heads_up.display_error.call(null,inst_25337,inst_25338);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(21),inst_25339);
} else {
if((state_val_25387 === (37))){
var inst_25369 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25426_25469 = state_25386__$1;
(statearr_25426_25469[(2)] = inst_25369);

(statearr_25426_25469[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (8))){
var inst_25312 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(11),inst_25312);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20225__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20160__auto__,c__20225__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto____0 = (function (){
var statearr_25430 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25430[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto__);

(statearr_25430[(1)] = (1));

return statearr_25430;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto____1 = (function (state_25386){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_25386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e25431){if((e25431 instanceof Object)){
var ex__20164__auto__ = e25431;
var statearr_25432_25470 = state_25386;
(statearr_25432_25470[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25471 = state_25386;
state_25386 = G__25471;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto__ = function(state_25386){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto____1.call(this,state_25386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__,msg_hist,msg_names,msg))
})();
var state__20227__auto__ = (function (){var statearr_25433 = f__20226__auto__.call(null);
(statearr_25433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_25433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__,msg_hist,msg_names,msg))
);

return c__20225__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20225__auto___25534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___25534,ch){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___25534,ch){
return (function (state_25517){
var state_val_25518 = (state_25517[(1)]);
if((state_val_25518 === (1))){
var state_25517__$1 = state_25517;
var statearr_25519_25535 = state_25517__$1;
(statearr_25519_25535[(2)] = null);

(statearr_25519_25535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (2))){
var state_25517__$1 = state_25517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25517__$1,(4),ch);
} else {
if((state_val_25518 === (3))){
var inst_25515 = (state_25517[(2)]);
var state_25517__$1 = state_25517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25517__$1,inst_25515);
} else {
if((state_val_25518 === (4))){
var inst_25505 = (state_25517[(7)]);
var inst_25505__$1 = (state_25517[(2)]);
var state_25517__$1 = (function (){var statearr_25520 = state_25517;
(statearr_25520[(7)] = inst_25505__$1);

return statearr_25520;
})();
if(cljs.core.truth_(inst_25505__$1)){
var statearr_25521_25536 = state_25517__$1;
(statearr_25521_25536[(1)] = (5));

} else {
var statearr_25522_25537 = state_25517__$1;
(statearr_25522_25537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (5))){
var inst_25505 = (state_25517[(7)]);
var inst_25507 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25505);
var state_25517__$1 = state_25517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25517__$1,(8),inst_25507);
} else {
if((state_val_25518 === (6))){
var state_25517__$1 = state_25517;
var statearr_25523_25538 = state_25517__$1;
(statearr_25523_25538[(2)] = null);

(statearr_25523_25538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (7))){
var inst_25513 = (state_25517[(2)]);
var state_25517__$1 = state_25517;
var statearr_25524_25539 = state_25517__$1;
(statearr_25524_25539[(2)] = inst_25513);

(statearr_25524_25539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25518 === (8))){
var inst_25509 = (state_25517[(2)]);
var state_25517__$1 = (function (){var statearr_25525 = state_25517;
(statearr_25525[(8)] = inst_25509);

return statearr_25525;
})();
var statearr_25526_25540 = state_25517__$1;
(statearr_25526_25540[(2)] = null);

(statearr_25526_25540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20225__auto___25534,ch))
;
return ((function (switch__20160__auto__,c__20225__auto___25534,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20161__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20161__auto____0 = (function (){
var statearr_25530 = [null,null,null,null,null,null,null,null,null];
(statearr_25530[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20161__auto__);

(statearr_25530[(1)] = (1));

return statearr_25530;
});
var figwheel$client$heads_up_plugin_$_state_machine__20161__auto____1 = (function (state_25517){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_25517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e25531){if((e25531 instanceof Object)){
var ex__20164__auto__ = e25531;
var statearr_25532_25541 = state_25517;
(statearr_25532_25541[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25542 = state_25517;
state_25517 = G__25542;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20161__auto__ = function(state_25517){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20161__auto____1.call(this,state_25517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20161__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20161__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___25534,ch))
})();
var state__20227__auto__ = (function (){var statearr_25533 = f__20226__auto__.call(null);
(statearr_25533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___25534);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___25534,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__){
return (function (state_25563){
var state_val_25564 = (state_25563[(1)]);
if((state_val_25564 === (1))){
var inst_25558 = cljs.core.async.timeout.call(null,(3000));
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25563__$1,(2),inst_25558);
} else {
if((state_val_25564 === (2))){
var inst_25560 = (state_25563[(2)]);
var inst_25561 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25563__$1 = (function (){var statearr_25565 = state_25563;
(statearr_25565[(7)] = inst_25560);

return statearr_25565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25563__$1,inst_25561);
} else {
return null;
}
}
});})(c__20225__auto__))
;
return ((function (switch__20160__auto__,c__20225__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20161__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20161__auto____0 = (function (){
var statearr_25569 = [null,null,null,null,null,null,null,null];
(statearr_25569[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20161__auto__);

(statearr_25569[(1)] = (1));

return statearr_25569;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20161__auto____1 = (function (state_25563){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_25563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e25570){if((e25570 instanceof Object)){
var ex__20164__auto__ = e25570;
var statearr_25571_25573 = state_25563;
(statearr_25571_25573[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25574 = state_25563;
state_25563 = G__25574;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20161__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20161__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20161__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20161__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__))
})();
var state__20227__auto__ = (function (){var statearr_25572 = f__20226__auto__.call(null);
(statearr_25572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_25572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__))
);

return c__20225__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25575){
var map__25582 = p__25575;
var map__25582__$1 = ((((!((map__25582 == null)))?((((map__25582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25582):map__25582);
var ed = map__25582__$1;
var formatted_exception = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25584_25588 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25585_25589 = null;
var count__25586_25590 = (0);
var i__25587_25591 = (0);
while(true){
if((i__25587_25591 < count__25586_25590)){
var msg_25592 = cljs.core._nth.call(null,chunk__25585_25589,i__25587_25591);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25592);

var G__25593 = seq__25584_25588;
var G__25594 = chunk__25585_25589;
var G__25595 = count__25586_25590;
var G__25596 = (i__25587_25591 + (1));
seq__25584_25588 = G__25593;
chunk__25585_25589 = G__25594;
count__25586_25590 = G__25595;
i__25587_25591 = G__25596;
continue;
} else {
var temp__4425__auto___25597 = cljs.core.seq.call(null,seq__25584_25588);
if(temp__4425__auto___25597){
var seq__25584_25598__$1 = temp__4425__auto___25597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25584_25598__$1)){
var c__17108__auto___25599 = cljs.core.chunk_first.call(null,seq__25584_25598__$1);
var G__25600 = cljs.core.chunk_rest.call(null,seq__25584_25598__$1);
var G__25601 = c__17108__auto___25599;
var G__25602 = cljs.core.count.call(null,c__17108__auto___25599);
var G__25603 = (0);
seq__25584_25588 = G__25600;
chunk__25585_25589 = G__25601;
count__25586_25590 = G__25602;
i__25587_25591 = G__25603;
continue;
} else {
var msg_25604 = cljs.core.first.call(null,seq__25584_25598__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25604);

var G__25605 = cljs.core.next.call(null,seq__25584_25598__$1);
var G__25606 = null;
var G__25607 = (0);
var G__25608 = (0);
seq__25584_25588 = G__25605;
chunk__25585_25589 = G__25606;
count__25586_25590 = G__25607;
i__25587_25591 = G__25608;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25609){
var map__25612 = p__25609;
var map__25612__$1 = ((((!((map__25612 == null)))?((((map__25612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25612):map__25612);
var w = map__25612__$1;
var message = cljs.core.get.call(null,map__25612__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16293__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16293__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16293__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25620 = cljs.core.seq.call(null,plugins);
var chunk__25621 = null;
var count__25622 = (0);
var i__25623 = (0);
while(true){
if((i__25623 < count__25622)){
var vec__25624 = cljs.core._nth.call(null,chunk__25621,i__25623);
var k = cljs.core.nth.call(null,vec__25624,(0),null);
var plugin = cljs.core.nth.call(null,vec__25624,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25626 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25620,chunk__25621,count__25622,i__25623,pl_25626,vec__25624,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25626.call(null,msg_hist);
});})(seq__25620,chunk__25621,count__25622,i__25623,pl_25626,vec__25624,k,plugin))
);
} else {
}

var G__25627 = seq__25620;
var G__25628 = chunk__25621;
var G__25629 = count__25622;
var G__25630 = (i__25623 + (1));
seq__25620 = G__25627;
chunk__25621 = G__25628;
count__25622 = G__25629;
i__25623 = G__25630;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25620);
if(temp__4425__auto__){
var seq__25620__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25620__$1)){
var c__17108__auto__ = cljs.core.chunk_first.call(null,seq__25620__$1);
var G__25631 = cljs.core.chunk_rest.call(null,seq__25620__$1);
var G__25632 = c__17108__auto__;
var G__25633 = cljs.core.count.call(null,c__17108__auto__);
var G__25634 = (0);
seq__25620 = G__25631;
chunk__25621 = G__25632;
count__25622 = G__25633;
i__25623 = G__25634;
continue;
} else {
var vec__25625 = cljs.core.first.call(null,seq__25620__$1);
var k = cljs.core.nth.call(null,vec__25625,(0),null);
var plugin = cljs.core.nth.call(null,vec__25625,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25635 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25620,chunk__25621,count__25622,i__25623,pl_25635,vec__25625,k,plugin,seq__25620__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25635.call(null,msg_hist);
});})(seq__25620,chunk__25621,count__25622,i__25623,pl_25635,vec__25625,k,plugin,seq__25620__$1,temp__4425__auto__))
);
} else {
}

var G__25636 = cljs.core.next.call(null,seq__25620__$1);
var G__25637 = null;
var G__25638 = (0);
var G__25639 = (0);
seq__25620 = G__25636;
chunk__25621 = G__25637;
count__25622 = G__25638;
i__25623 = G__25639;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25640 = [];
var len__17363__auto___25643 = arguments.length;
var i__17364__auto___25644 = (0);
while(true){
if((i__17364__auto___25644 < len__17363__auto___25643)){
args25640.push((arguments[i__17364__auto___25644]));

var G__25645 = (i__17364__auto___25644 + (1));
i__17364__auto___25644 = G__25645;
continue;
} else {
}
break;
}

var G__25642 = args25640.length;
switch (G__25642) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25640.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17370__auto__ = [];
var len__17363__auto___25651 = arguments.length;
var i__17364__auto___25652 = (0);
while(true){
if((i__17364__auto___25652 < len__17363__auto___25651)){
args__17370__auto__.push((arguments[i__17364__auto___25652]));

var G__25653 = (i__17364__auto___25652 + (1));
i__17364__auto___25652 = G__25653;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((0) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17371__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25648){
var map__25649 = p__25648;
var map__25649__$1 = ((((!((map__25649 == null)))?((((map__25649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25649):map__25649);
var opts = map__25649__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25647){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25647));
});

//# sourceMappingURL=client.js.map