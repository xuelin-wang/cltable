// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
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
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24099__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24100__i = 0, G__24100__a = new Array(arguments.length -  0);
while (G__24100__i < G__24100__a.length) {G__24100__a[G__24100__i] = arguments[G__24100__i + 0]; ++G__24100__i;}
  args = new cljs.core.IndexedSeq(G__24100__a,0);
} 
return G__24099__delegate.call(this,args);};
G__24099.cljs$lang$maxFixedArity = 0;
G__24099.cljs$lang$applyTo = (function (arglist__24101){
var args = cljs.core.seq(arglist__24101);
return G__24099__delegate(args);
});
G__24099.cljs$core$IFn$_invoke$arity$variadic = G__24099__delegate;
return G__24099;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24102){
var map__24105 = p__24102;
var map__24105__$1 = ((((!((map__24105 == null)))?((((map__24105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24105):map__24105);
var message = cljs.core.get.call(null,map__24105__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24105__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16508__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16496__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16496__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16496__auto__;
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
var c__19588__auto___24235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___24235,ch){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___24235,ch){
return (function (state_24209){
var state_val_24210 = (state_24209[(1)]);
if((state_val_24210 === (7))){
var inst_24205 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24211_24236 = state_24209__$1;
(statearr_24211_24236[(2)] = inst_24205);

(statearr_24211_24236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (1))){
var state_24209__$1 = state_24209;
var statearr_24212_24237 = state_24209__$1;
(statearr_24212_24237[(2)] = null);

(statearr_24212_24237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (4))){
var inst_24173 = (state_24209[(7)]);
var inst_24173__$1 = (state_24209[(2)]);
var state_24209__$1 = (function (){var statearr_24213 = state_24209;
(statearr_24213[(7)] = inst_24173__$1);

return statearr_24213;
})();
if(cljs.core.truth_(inst_24173__$1)){
var statearr_24214_24238 = state_24209__$1;
(statearr_24214_24238[(1)] = (5));

} else {
var statearr_24215_24239 = state_24209__$1;
(statearr_24215_24239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (13))){
var state_24209__$1 = state_24209;
var statearr_24216_24240 = state_24209__$1;
(statearr_24216_24240[(2)] = null);

(statearr_24216_24240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (6))){
var state_24209__$1 = state_24209;
var statearr_24217_24241 = state_24209__$1;
(statearr_24217_24241[(2)] = null);

(statearr_24217_24241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (3))){
var inst_24207 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24209__$1,inst_24207);
} else {
if((state_val_24210 === (12))){
var inst_24180 = (state_24209[(8)]);
var inst_24193 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24180);
var inst_24194 = cljs.core.first.call(null,inst_24193);
var inst_24195 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24194);
var inst_24196 = console.warn("Figwheel: Not loading code with warnings - ",inst_24195);
var state_24209__$1 = state_24209;
var statearr_24218_24242 = state_24209__$1;
(statearr_24218_24242[(2)] = inst_24196);

(statearr_24218_24242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (2))){
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(4),ch);
} else {
if((state_val_24210 === (11))){
var inst_24189 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24219_24243 = state_24209__$1;
(statearr_24219_24243[(2)] = inst_24189);

(statearr_24219_24243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (9))){
var inst_24179 = (state_24209[(9)]);
var inst_24191 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24179,opts);
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24191)){
var statearr_24220_24244 = state_24209__$1;
(statearr_24220_24244[(1)] = (12));

} else {
var statearr_24221_24245 = state_24209__$1;
(statearr_24221_24245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (5))){
var inst_24173 = (state_24209[(7)]);
var inst_24179 = (state_24209[(9)]);
var inst_24175 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24176 = (new cljs.core.PersistentArrayMap(null,2,inst_24175,null));
var inst_24177 = (new cljs.core.PersistentHashSet(null,inst_24176,null));
var inst_24178 = figwheel.client.focus_msgs.call(null,inst_24177,inst_24173);
var inst_24179__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24178);
var inst_24180 = cljs.core.first.call(null,inst_24178);
var inst_24181 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24179__$1,opts);
var state_24209__$1 = (function (){var statearr_24222 = state_24209;
(statearr_24222[(8)] = inst_24180);

(statearr_24222[(9)] = inst_24179__$1);

return statearr_24222;
})();
if(cljs.core.truth_(inst_24181)){
var statearr_24223_24246 = state_24209__$1;
(statearr_24223_24246[(1)] = (8));

} else {
var statearr_24224_24247 = state_24209__$1;
(statearr_24224_24247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (14))){
var inst_24199 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24225_24248 = state_24209__$1;
(statearr_24225_24248[(2)] = inst_24199);

(statearr_24225_24248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (10))){
var inst_24201 = (state_24209[(2)]);
var state_24209__$1 = (function (){var statearr_24226 = state_24209;
(statearr_24226[(10)] = inst_24201);

return statearr_24226;
})();
var statearr_24227_24249 = state_24209__$1;
(statearr_24227_24249[(2)] = null);

(statearr_24227_24249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (8))){
var inst_24180 = (state_24209[(8)]);
var inst_24183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24184 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24180);
var inst_24185 = cljs.core.async.timeout.call(null,(1000));
var inst_24186 = [inst_24184,inst_24185];
var inst_24187 = (new cljs.core.PersistentVector(null,2,(5),inst_24183,inst_24186,null));
var state_24209__$1 = state_24209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24209__$1,(11),inst_24187);
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
});})(c__19588__auto___24235,ch))
;
return ((function (switch__19523__auto__,c__19588__auto___24235,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19524__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19524__auto____0 = (function (){
var statearr_24231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24231[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19524__auto__);

(statearr_24231[(1)] = (1));

return statearr_24231;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19524__auto____1 = (function (state_24209){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_24209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e24232){if((e24232 instanceof Object)){
var ex__19527__auto__ = e24232;
var statearr_24233_24250 = state_24209;
(statearr_24233_24250[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24251 = state_24209;
state_24209 = G__24251;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19524__auto__ = function(state_24209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19524__auto____1.call(this,state_24209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19524__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19524__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___24235,ch))
})();
var state__19590__auto__ = (function (){var statearr_24234 = f__19589__auto__.call(null);
(statearr_24234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___24235);

return statearr_24234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___24235,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24252_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24252_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24259 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24259){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24258 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24257,_STAR_print_newline_STAR_24258,base_path_24259){
return (function() { 
var G__24260__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24261__i = 0, G__24261__a = new Array(arguments.length -  0);
while (G__24261__i < G__24261__a.length) {G__24261__a[G__24261__i] = arguments[G__24261__i + 0]; ++G__24261__i;}
  args = new cljs.core.IndexedSeq(G__24261__a,0);
} 
return G__24260__delegate.call(this,args);};
G__24260.cljs$lang$maxFixedArity = 0;
G__24260.cljs$lang$applyTo = (function (arglist__24262){
var args = cljs.core.seq(arglist__24262);
return G__24260__delegate(args);
});
G__24260.cljs$core$IFn$_invoke$arity$variadic = G__24260__delegate;
return G__24260;
})()
;})(_STAR_print_fn_STAR_24257,_STAR_print_newline_STAR_24258,base_path_24259))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24258;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24257;
}}catch (e24256){if((e24256 instanceof Error)){
var e = e24256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24259], null));
} else {
var e = e24256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24259))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24263){
var map__24270 = p__24263;
var map__24270__$1 = ((((!((map__24270 == null)))?((((map__24270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24270):map__24270);
var opts = map__24270__$1;
var build_id = cljs.core.get.call(null,map__24270__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24270,map__24270__$1,opts,build_id){
return (function (p__24272){
var vec__24273 = p__24272;
var map__24274 = cljs.core.nth.call(null,vec__24273,(0),null);
var map__24274__$1 = ((((!((map__24274 == null)))?((((map__24274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24274):map__24274);
var msg = map__24274__$1;
var msg_name = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24273,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24273,map__24274,map__24274__$1,msg,msg_name,_,map__24270,map__24270__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24273,map__24274,map__24274__$1,msg,msg_name,_,map__24270,map__24270__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24270,map__24270__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24280){
var vec__24281 = p__24280;
var map__24282 = cljs.core.nth.call(null,vec__24281,(0),null);
var map__24282__$1 = ((((!((map__24282 == null)))?((((map__24282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24282):map__24282);
var msg = map__24282__$1;
var msg_name = cljs.core.get.call(null,map__24282__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24281,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24284){
var map__24294 = p__24284;
var map__24294__$1 = ((((!((map__24294 == null)))?((((map__24294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24294):map__24294);
var on_compile_warning = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24294__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24294,map__24294__$1,on_compile_warning,on_compile_fail){
return (function (p__24296){
var vec__24297 = p__24296;
var map__24298 = cljs.core.nth.call(null,vec__24297,(0),null);
var map__24298__$1 = ((((!((map__24298 == null)))?((((map__24298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24298):map__24298);
var msg = map__24298__$1;
var msg_name = cljs.core.get.call(null,map__24298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24297,(1));
var pred__24300 = cljs.core._EQ_;
var expr__24301 = msg_name;
if(cljs.core.truth_(pred__24300.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24301))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24300.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24301))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24294,map__24294__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__,msg_hist,msg_names,msg){
return (function (state_24502){
var state_val_24503 = (state_24502[(1)]);
if((state_val_24503 === (7))){
var inst_24436 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24504_24545 = state_24502__$1;
(statearr_24504_24545[(2)] = inst_24436);

(statearr_24504_24545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (20))){
var inst_24464 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24464)){
var statearr_24505_24546 = state_24502__$1;
(statearr_24505_24546[(1)] = (22));

} else {
var statearr_24506_24547 = state_24502__$1;
(statearr_24506_24547[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (27))){
var inst_24476 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24477 = figwheel.client.heads_up.display_warning.call(null,inst_24476);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(30),inst_24477);
} else {
if((state_val_24503 === (1))){
var inst_24424 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24424)){
var statearr_24507_24548 = state_24502__$1;
(statearr_24507_24548[(1)] = (2));

} else {
var statearr_24508_24549 = state_24502__$1;
(statearr_24508_24549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (24))){
var inst_24492 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24509_24550 = state_24502__$1;
(statearr_24509_24550[(2)] = inst_24492);

(statearr_24509_24550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (4))){
var inst_24500 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24502__$1,inst_24500);
} else {
if((state_val_24503 === (15))){
var inst_24452 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24453 = figwheel.client.format_messages.call(null,inst_24452);
var inst_24454 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24455 = figwheel.client.heads_up.display_error.call(null,inst_24453,inst_24454);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(18),inst_24455);
} else {
if((state_val_24503 === (21))){
var inst_24494 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24510_24551 = state_24502__$1;
(statearr_24510_24551[(2)] = inst_24494);

(statearr_24510_24551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (31))){
var inst_24483 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(34),inst_24483);
} else {
if((state_val_24503 === (32))){
var state_24502__$1 = state_24502;
var statearr_24511_24552 = state_24502__$1;
(statearr_24511_24552[(2)] = null);

(statearr_24511_24552[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (33))){
var inst_24488 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24512_24553 = state_24502__$1;
(statearr_24512_24553[(2)] = inst_24488);

(statearr_24512_24553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (13))){
var inst_24442 = (state_24502[(2)]);
var inst_24443 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24444 = figwheel.client.format_messages.call(null,inst_24443);
var inst_24445 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24446 = figwheel.client.heads_up.display_error.call(null,inst_24444,inst_24445);
var state_24502__$1 = (function (){var statearr_24513 = state_24502;
(statearr_24513[(7)] = inst_24442);

return statearr_24513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(14),inst_24446);
} else {
if((state_val_24503 === (22))){
var inst_24466 = figwheel.client.heads_up.clear.call(null);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(25),inst_24466);
} else {
if((state_val_24503 === (29))){
var inst_24490 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24514_24554 = state_24502__$1;
(statearr_24514_24554[(2)] = inst_24490);

(statearr_24514_24554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (6))){
var inst_24432 = figwheel.client.heads_up.clear.call(null);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(9),inst_24432);
} else {
if((state_val_24503 === (28))){
var inst_24481 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24481)){
var statearr_24515_24555 = state_24502__$1;
(statearr_24515_24555[(1)] = (31));

} else {
var statearr_24516_24556 = state_24502__$1;
(statearr_24516_24556[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (25))){
var inst_24468 = (state_24502[(2)]);
var inst_24469 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24470 = figwheel.client.heads_up.display_warning.call(null,inst_24469);
var state_24502__$1 = (function (){var statearr_24517 = state_24502;
(statearr_24517[(8)] = inst_24468);

return statearr_24517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(26),inst_24470);
} else {
if((state_val_24503 === (34))){
var inst_24485 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24518_24557 = state_24502__$1;
(statearr_24518_24557[(2)] = inst_24485);

(statearr_24518_24557[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (17))){
var inst_24496 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24519_24558 = state_24502__$1;
(statearr_24519_24558[(2)] = inst_24496);

(statearr_24519_24558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (3))){
var inst_24438 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24438)){
var statearr_24520_24559 = state_24502__$1;
(statearr_24520_24559[(1)] = (10));

} else {
var statearr_24521_24560 = state_24502__$1;
(statearr_24521_24560[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (12))){
var inst_24498 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24522_24561 = state_24502__$1;
(statearr_24522_24561[(2)] = inst_24498);

(statearr_24522_24561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (2))){
var inst_24426 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24426)){
var statearr_24523_24562 = state_24502__$1;
(statearr_24523_24562[(1)] = (5));

} else {
var statearr_24524_24563 = state_24502__$1;
(statearr_24524_24563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (23))){
var inst_24474 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24474)){
var statearr_24525_24564 = state_24502__$1;
(statearr_24525_24564[(1)] = (27));

} else {
var statearr_24526_24565 = state_24502__$1;
(statearr_24526_24565[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (19))){
var inst_24461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24462 = figwheel.client.heads_up.append_message.call(null,inst_24461);
var state_24502__$1 = state_24502;
var statearr_24527_24566 = state_24502__$1;
(statearr_24527_24566[(2)] = inst_24462);

(statearr_24527_24566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (11))){
var inst_24450 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24450)){
var statearr_24528_24567 = state_24502__$1;
(statearr_24528_24567[(1)] = (15));

} else {
var statearr_24529_24568 = state_24502__$1;
(statearr_24529_24568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (9))){
var inst_24434 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24530_24569 = state_24502__$1;
(statearr_24530_24569[(2)] = inst_24434);

(statearr_24530_24569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (5))){
var inst_24428 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(8),inst_24428);
} else {
if((state_val_24503 === (14))){
var inst_24448 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24531_24570 = state_24502__$1;
(statearr_24531_24570[(2)] = inst_24448);

(statearr_24531_24570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (26))){
var inst_24472 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24532_24571 = state_24502__$1;
(statearr_24532_24571[(2)] = inst_24472);

(statearr_24532_24571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (16))){
var inst_24459 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24459)){
var statearr_24533_24572 = state_24502__$1;
(statearr_24533_24572[(1)] = (19));

} else {
var statearr_24534_24573 = state_24502__$1;
(statearr_24534_24573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (30))){
var inst_24479 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24535_24574 = state_24502__$1;
(statearr_24535_24574[(2)] = inst_24479);

(statearr_24535_24574[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (10))){
var inst_24440 = figwheel.client.heads_up.clear.call(null);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(13),inst_24440);
} else {
if((state_val_24503 === (18))){
var inst_24457 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24536_24575 = state_24502__$1;
(statearr_24536_24575[(2)] = inst_24457);

(statearr_24536_24575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (8))){
var inst_24430 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
var statearr_24537_24576 = state_24502__$1;
(statearr_24537_24576[(2)] = inst_24430);

(statearr_24537_24576[(1)] = (7));


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
});})(c__19588__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19523__auto__,c__19588__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto____0 = (function (){
var statearr_24541 = [null,null,null,null,null,null,null,null,null];
(statearr_24541[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto__);

(statearr_24541[(1)] = (1));

return statearr_24541;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto____1 = (function (state_24502){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_24502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e24542){if((e24542 instanceof Object)){
var ex__19527__auto__ = e24542;
var statearr_24543_24577 = state_24502;
(statearr_24543_24577[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24578 = state_24502;
state_24502 = G__24578;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto__ = function(state_24502){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto____1.call(this,state_24502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__,msg_hist,msg_names,msg))
})();
var state__19590__auto__ = (function (){var statearr_24544 = f__19589__auto__.call(null);
(statearr_24544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_24544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__,msg_hist,msg_names,msg))
);

return c__19588__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19588__auto___24641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___24641,ch){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___24641,ch){
return (function (state_24624){
var state_val_24625 = (state_24624[(1)]);
if((state_val_24625 === (1))){
var state_24624__$1 = state_24624;
var statearr_24626_24642 = state_24624__$1;
(statearr_24626_24642[(2)] = null);

(statearr_24626_24642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24625 === (2))){
var state_24624__$1 = state_24624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24624__$1,(4),ch);
} else {
if((state_val_24625 === (3))){
var inst_24622 = (state_24624[(2)]);
var state_24624__$1 = state_24624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24624__$1,inst_24622);
} else {
if((state_val_24625 === (4))){
var inst_24612 = (state_24624[(7)]);
var inst_24612__$1 = (state_24624[(2)]);
var state_24624__$1 = (function (){var statearr_24627 = state_24624;
(statearr_24627[(7)] = inst_24612__$1);

return statearr_24627;
})();
if(cljs.core.truth_(inst_24612__$1)){
var statearr_24628_24643 = state_24624__$1;
(statearr_24628_24643[(1)] = (5));

} else {
var statearr_24629_24644 = state_24624__$1;
(statearr_24629_24644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24625 === (5))){
var inst_24612 = (state_24624[(7)]);
var inst_24614 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24612);
var state_24624__$1 = state_24624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24624__$1,(8),inst_24614);
} else {
if((state_val_24625 === (6))){
var state_24624__$1 = state_24624;
var statearr_24630_24645 = state_24624__$1;
(statearr_24630_24645[(2)] = null);

(statearr_24630_24645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24625 === (7))){
var inst_24620 = (state_24624[(2)]);
var state_24624__$1 = state_24624;
var statearr_24631_24646 = state_24624__$1;
(statearr_24631_24646[(2)] = inst_24620);

(statearr_24631_24646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24625 === (8))){
var inst_24616 = (state_24624[(2)]);
var state_24624__$1 = (function (){var statearr_24632 = state_24624;
(statearr_24632[(8)] = inst_24616);

return statearr_24632;
})();
var statearr_24633_24647 = state_24624__$1;
(statearr_24633_24647[(2)] = null);

(statearr_24633_24647[(1)] = (2));


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
});})(c__19588__auto___24641,ch))
;
return ((function (switch__19523__auto__,c__19588__auto___24641,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19524__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19524__auto____0 = (function (){
var statearr_24637 = [null,null,null,null,null,null,null,null,null];
(statearr_24637[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19524__auto__);

(statearr_24637[(1)] = (1));

return statearr_24637;
});
var figwheel$client$heads_up_plugin_$_state_machine__19524__auto____1 = (function (state_24624){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_24624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e24638){if((e24638 instanceof Object)){
var ex__19527__auto__ = e24638;
var statearr_24639_24648 = state_24624;
(statearr_24639_24648[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24649 = state_24624;
state_24624 = G__24649;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19524__auto__ = function(state_24624){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19524__auto____1.call(this,state_24624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19524__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19524__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___24641,ch))
})();
var state__19590__auto__ = (function (){var statearr_24640 = f__19589__auto__.call(null);
(statearr_24640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___24641);

return statearr_24640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___24641,ch))
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
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_24670){
var state_val_24671 = (state_24670[(1)]);
if((state_val_24671 === (1))){
var inst_24665 = cljs.core.async.timeout.call(null,(3000));
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24670__$1,(2),inst_24665);
} else {
if((state_val_24671 === (2))){
var inst_24667 = (state_24670[(2)]);
var inst_24668 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24670__$1 = (function (){var statearr_24672 = state_24670;
(statearr_24672[(7)] = inst_24667);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24670__$1,inst_24668);
} else {
return null;
}
}
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19524__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19524__auto____0 = (function (){
var statearr_24676 = [null,null,null,null,null,null,null,null];
(statearr_24676[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19524__auto__);

(statearr_24676[(1)] = (1));

return statearr_24676;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19524__auto____1 = (function (state_24670){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_24670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e24677){if((e24677 instanceof Object)){
var ex__19527__auto__ = e24677;
var statearr_24678_24680 = state_24670;
(statearr_24678_24680[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24681 = state_24670;
state_24670 = G__24681;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19524__auto__ = function(state_24670){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19524__auto____1.call(this,state_24670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19524__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19524__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_24679 = f__19589__auto__.call(null);
(statearr_24679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_24679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24682){
var map__24689 = p__24682;
var map__24689__$1 = ((((!((map__24689 == null)))?((((map__24689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24689):map__24689);
var ed = map__24689__$1;
var formatted_exception = cljs.core.get.call(null,map__24689__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24689__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24689__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24691_24695 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24692_24696 = null;
var count__24693_24697 = (0);
var i__24694_24698 = (0);
while(true){
if((i__24694_24698 < count__24693_24697)){
var msg_24699 = cljs.core._nth.call(null,chunk__24692_24696,i__24694_24698);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24699);

var G__24700 = seq__24691_24695;
var G__24701 = chunk__24692_24696;
var G__24702 = count__24693_24697;
var G__24703 = (i__24694_24698 + (1));
seq__24691_24695 = G__24700;
chunk__24692_24696 = G__24701;
count__24693_24697 = G__24702;
i__24694_24698 = G__24703;
continue;
} else {
var temp__4425__auto___24704 = cljs.core.seq.call(null,seq__24691_24695);
if(temp__4425__auto___24704){
var seq__24691_24705__$1 = temp__4425__auto___24704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24691_24705__$1)){
var c__17311__auto___24706 = cljs.core.chunk_first.call(null,seq__24691_24705__$1);
var G__24707 = cljs.core.chunk_rest.call(null,seq__24691_24705__$1);
var G__24708 = c__17311__auto___24706;
var G__24709 = cljs.core.count.call(null,c__17311__auto___24706);
var G__24710 = (0);
seq__24691_24695 = G__24707;
chunk__24692_24696 = G__24708;
count__24693_24697 = G__24709;
i__24694_24698 = G__24710;
continue;
} else {
var msg_24711 = cljs.core.first.call(null,seq__24691_24705__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24711);

var G__24712 = cljs.core.next.call(null,seq__24691_24705__$1);
var G__24713 = null;
var G__24714 = (0);
var G__24715 = (0);
seq__24691_24695 = G__24712;
chunk__24692_24696 = G__24713;
count__24693_24697 = G__24714;
i__24694_24698 = G__24715;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24716){
var map__24719 = p__24716;
var map__24719__$1 = ((((!((map__24719 == null)))?((((map__24719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24719):map__24719);
var w = map__24719__$1;
var message = cljs.core.get.call(null,map__24719__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__16496__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16496__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16496__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24727 = cljs.core.seq.call(null,plugins);
var chunk__24728 = null;
var count__24729 = (0);
var i__24730 = (0);
while(true){
if((i__24730 < count__24729)){
var vec__24731 = cljs.core._nth.call(null,chunk__24728,i__24730);
var k = cljs.core.nth.call(null,vec__24731,(0),null);
var plugin = cljs.core.nth.call(null,vec__24731,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24733 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24727,chunk__24728,count__24729,i__24730,pl_24733,vec__24731,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24733.call(null,msg_hist);
});})(seq__24727,chunk__24728,count__24729,i__24730,pl_24733,vec__24731,k,plugin))
);
} else {
}

var G__24734 = seq__24727;
var G__24735 = chunk__24728;
var G__24736 = count__24729;
var G__24737 = (i__24730 + (1));
seq__24727 = G__24734;
chunk__24728 = G__24735;
count__24729 = G__24736;
i__24730 = G__24737;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24727);
if(temp__4425__auto__){
var seq__24727__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24727__$1)){
var c__17311__auto__ = cljs.core.chunk_first.call(null,seq__24727__$1);
var G__24738 = cljs.core.chunk_rest.call(null,seq__24727__$1);
var G__24739 = c__17311__auto__;
var G__24740 = cljs.core.count.call(null,c__17311__auto__);
var G__24741 = (0);
seq__24727 = G__24738;
chunk__24728 = G__24739;
count__24729 = G__24740;
i__24730 = G__24741;
continue;
} else {
var vec__24732 = cljs.core.first.call(null,seq__24727__$1);
var k = cljs.core.nth.call(null,vec__24732,(0),null);
var plugin = cljs.core.nth.call(null,vec__24732,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24742 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24727,chunk__24728,count__24729,i__24730,pl_24742,vec__24732,k,plugin,seq__24727__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24742.call(null,msg_hist);
});})(seq__24727,chunk__24728,count__24729,i__24730,pl_24742,vec__24732,k,plugin,seq__24727__$1,temp__4425__auto__))
);
} else {
}

var G__24743 = cljs.core.next.call(null,seq__24727__$1);
var G__24744 = null;
var G__24745 = (0);
var G__24746 = (0);
seq__24727 = G__24743;
chunk__24728 = G__24744;
count__24729 = G__24745;
i__24730 = G__24746;
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
var args24747 = [];
var len__17566__auto___24750 = arguments.length;
var i__17567__auto___24751 = (0);
while(true){
if((i__17567__auto___24751 < len__17566__auto___24750)){
args24747.push((arguments[i__17567__auto___24751]));

var G__24752 = (i__17567__auto___24751 + (1));
i__17567__auto___24751 = G__24752;
continue;
} else {
}
break;
}

var G__24749 = args24747.length;
switch (G__24749) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24747.length)].join('')));

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
var args__17573__auto__ = [];
var len__17566__auto___24758 = arguments.length;
var i__17567__auto___24759 = (0);
while(true){
if((i__17567__auto___24759 < len__17566__auto___24758)){
args__17573__auto__.push((arguments[i__17567__auto___24759]));

var G__24760 = (i__17567__auto___24759 + (1));
i__17567__auto___24759 = G__24760;
continue;
} else {
}
break;
}

var argseq__17574__auto__ = ((((0) < args__17573__auto__.length))?(new cljs.core.IndexedSeq(args__17573__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17574__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24755){
var map__24756 = p__24755;
var map__24756__$1 = ((((!((map__24756 == null)))?((((map__24756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24756):map__24756);
var opts = map__24756__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24754){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24754));
});

//# sourceMappingURL=client.js.map