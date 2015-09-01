// Compiled by ClojureScript 1.7.48 {}
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
var G__23550__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23551__i = 0, G__23551__a = new Array(arguments.length -  0);
while (G__23551__i < G__23551__a.length) {G__23551__a[G__23551__i] = arguments[G__23551__i + 0]; ++G__23551__i;}
  args = new cljs.core.IndexedSeq(G__23551__a,0);
} 
return G__23550__delegate.call(this,args);};
G__23550.cljs$lang$maxFixedArity = 0;
G__23550.cljs$lang$applyTo = (function (arglist__23552){
var args = cljs.core.seq(arglist__23552);
return G__23550__delegate(args);
});
G__23550.cljs$core$IFn$_invoke$arity$variadic = G__23550__delegate;
return G__23550;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23553){
var map__23556 = p__23553;
var map__23556__$1 = ((((!((map__23556 == null)))?((((map__23556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23556):map__23556);
var message = cljs.core.get.call(null,map__23556__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23556__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16472__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16460__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16460__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16460__auto__;
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
var c__19655__auto___23686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___23686,ch){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___23686,ch){
return (function (state_23660){
var state_val_23661 = (state_23660[(1)]);
if((state_val_23661 === (7))){
var inst_23656 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23662_23687 = state_23660__$1;
(statearr_23662_23687[(2)] = inst_23656);

(statearr_23662_23687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (1))){
var state_23660__$1 = state_23660;
var statearr_23663_23688 = state_23660__$1;
(statearr_23663_23688[(2)] = null);

(statearr_23663_23688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (4))){
var inst_23624 = (state_23660[(7)]);
var inst_23624__$1 = (state_23660[(2)]);
var state_23660__$1 = (function (){var statearr_23664 = state_23660;
(statearr_23664[(7)] = inst_23624__$1);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23624__$1)){
var statearr_23665_23689 = state_23660__$1;
(statearr_23665_23689[(1)] = (5));

} else {
var statearr_23666_23690 = state_23660__$1;
(statearr_23666_23690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (13))){
var state_23660__$1 = state_23660;
var statearr_23667_23691 = state_23660__$1;
(statearr_23667_23691[(2)] = null);

(statearr_23667_23691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (6))){
var state_23660__$1 = state_23660;
var statearr_23668_23692 = state_23660__$1;
(statearr_23668_23692[(2)] = null);

(statearr_23668_23692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (3))){
var inst_23658 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23660__$1,inst_23658);
} else {
if((state_val_23661 === (12))){
var inst_23631 = (state_23660[(8)]);
var inst_23644 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23631);
var inst_23645 = cljs.core.first.call(null,inst_23644);
var inst_23646 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23645);
var inst_23647 = console.warn("Figwheel: Not loading code with warnings - ",inst_23646);
var state_23660__$1 = state_23660;
var statearr_23669_23693 = state_23660__$1;
(statearr_23669_23693[(2)] = inst_23647);

(statearr_23669_23693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (2))){
var state_23660__$1 = state_23660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23660__$1,(4),ch);
} else {
if((state_val_23661 === (11))){
var inst_23640 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23670_23694 = state_23660__$1;
(statearr_23670_23694[(2)] = inst_23640);

(statearr_23670_23694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (9))){
var inst_23630 = (state_23660[(9)]);
var inst_23642 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23630,opts);
var state_23660__$1 = state_23660;
if(cljs.core.truth_(inst_23642)){
var statearr_23671_23695 = state_23660__$1;
(statearr_23671_23695[(1)] = (12));

} else {
var statearr_23672_23696 = state_23660__$1;
(statearr_23672_23696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (5))){
var inst_23630 = (state_23660[(9)]);
var inst_23624 = (state_23660[(7)]);
var inst_23626 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23627 = (new cljs.core.PersistentArrayMap(null,2,inst_23626,null));
var inst_23628 = (new cljs.core.PersistentHashSet(null,inst_23627,null));
var inst_23629 = figwheel.client.focus_msgs.call(null,inst_23628,inst_23624);
var inst_23630__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23629);
var inst_23631 = cljs.core.first.call(null,inst_23629);
var inst_23632 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23630__$1,opts);
var state_23660__$1 = (function (){var statearr_23673 = state_23660;
(statearr_23673[(9)] = inst_23630__$1);

(statearr_23673[(8)] = inst_23631);

return statearr_23673;
})();
if(cljs.core.truth_(inst_23632)){
var statearr_23674_23697 = state_23660__$1;
(statearr_23674_23697[(1)] = (8));

} else {
var statearr_23675_23698 = state_23660__$1;
(statearr_23675_23698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (14))){
var inst_23650 = (state_23660[(2)]);
var state_23660__$1 = state_23660;
var statearr_23676_23699 = state_23660__$1;
(statearr_23676_23699[(2)] = inst_23650);

(statearr_23676_23699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (10))){
var inst_23652 = (state_23660[(2)]);
var state_23660__$1 = (function (){var statearr_23677 = state_23660;
(statearr_23677[(10)] = inst_23652);

return statearr_23677;
})();
var statearr_23678_23700 = state_23660__$1;
(statearr_23678_23700[(2)] = null);

(statearr_23678_23700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23661 === (8))){
var inst_23631 = (state_23660[(8)]);
var inst_23634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23635 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23631);
var inst_23636 = cljs.core.async.timeout.call(null,(1000));
var inst_23637 = [inst_23635,inst_23636];
var inst_23638 = (new cljs.core.PersistentVector(null,2,(5),inst_23634,inst_23637,null));
var state_23660__$1 = state_23660;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23660__$1,(11),inst_23638);
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
});})(c__19655__auto___23686,ch))
;
return ((function (switch__19590__auto__,c__19655__auto___23686,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19591__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19591__auto____0 = (function (){
var statearr_23682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23682[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19591__auto__);

(statearr_23682[(1)] = (1));

return statearr_23682;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19591__auto____1 = (function (state_23660){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_23660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e23683){if((e23683 instanceof Object)){
var ex__19594__auto__ = e23683;
var statearr_23684_23701 = state_23660;
(statearr_23684_23701[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23702 = state_23660;
state_23660 = G__23702;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19591__auto__ = function(state_23660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19591__auto____1.call(this,state_23660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19591__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19591__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___23686,ch))
})();
var state__19657__auto__ = (function (){var statearr_23685 = f__19656__auto__.call(null);
(statearr_23685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___23686);

return statearr_23685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___23686,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23703_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23703_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_23710 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23710){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23708 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23709 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23708,_STAR_print_newline_STAR_23709,base_path_23710){
return (function() { 
var G__23711__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23712__i = 0, G__23712__a = new Array(arguments.length -  0);
while (G__23712__i < G__23712__a.length) {G__23712__a[G__23712__i] = arguments[G__23712__i + 0]; ++G__23712__i;}
  args = new cljs.core.IndexedSeq(G__23712__a,0);
} 
return G__23711__delegate.call(this,args);};
G__23711.cljs$lang$maxFixedArity = 0;
G__23711.cljs$lang$applyTo = (function (arglist__23713){
var args = cljs.core.seq(arglist__23713);
return G__23711__delegate(args);
});
G__23711.cljs$core$IFn$_invoke$arity$variadic = G__23711__delegate;
return G__23711;
})()
;})(_STAR_print_fn_STAR_23708,_STAR_print_newline_STAR_23709,base_path_23710))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23709;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23708;
}}catch (e23707){if((e23707 instanceof Error)){
var e = e23707;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23710], null));
} else {
var e = e23707;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23710))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23714){
var map__23721 = p__23714;
var map__23721__$1 = ((((!((map__23721 == null)))?((((map__23721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23721):map__23721);
var opts = map__23721__$1;
var build_id = cljs.core.get.call(null,map__23721__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23721,map__23721__$1,opts,build_id){
return (function (p__23723){
var vec__23724 = p__23723;
var map__23725 = cljs.core.nth.call(null,vec__23724,(0),null);
var map__23725__$1 = ((((!((map__23725 == null)))?((((map__23725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23725):map__23725);
var msg = map__23725__$1;
var msg_name = cljs.core.get.call(null,map__23725__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23724,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23724,map__23725,map__23725__$1,msg,msg_name,_,map__23721,map__23721__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23724,map__23725,map__23725__$1,msg,msg_name,_,map__23721,map__23721__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23721,map__23721__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23731){
var vec__23732 = p__23731;
var map__23733 = cljs.core.nth.call(null,vec__23732,(0),null);
var map__23733__$1 = ((((!((map__23733 == null)))?((((map__23733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23733):map__23733);
var msg = map__23733__$1;
var msg_name = cljs.core.get.call(null,map__23733__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23732,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23735){
var map__23745 = p__23735;
var map__23745__$1 = ((((!((map__23745 == null)))?((((map__23745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23745):map__23745);
var on_compile_warning = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23745,map__23745__$1,on_compile_warning,on_compile_fail){
return (function (p__23747){
var vec__23748 = p__23747;
var map__23749 = cljs.core.nth.call(null,vec__23748,(0),null);
var map__23749__$1 = ((((!((map__23749 == null)))?((((map__23749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23749):map__23749);
var msg = map__23749__$1;
var msg_name = cljs.core.get.call(null,map__23749__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23748,(1));
var pred__23751 = cljs.core._EQ_;
var expr__23752 = msg_name;
if(cljs.core.truth_(pred__23751.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23752))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23751.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23752))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23745,map__23745__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__,msg_hist,msg_names,msg){
return (function (state_23953){
var state_val_23954 = (state_23953[(1)]);
if((state_val_23954 === (7))){
var inst_23887 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23955_23996 = state_23953__$1;
(statearr_23955_23996[(2)] = inst_23887);

(statearr_23955_23996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (20))){
var inst_23915 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23915)){
var statearr_23956_23997 = state_23953__$1;
(statearr_23956_23997[(1)] = (22));

} else {
var statearr_23957_23998 = state_23953__$1;
(statearr_23957_23998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (27))){
var inst_23927 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23928 = figwheel.client.heads_up.display_warning.call(null,inst_23927);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(30),inst_23928);
} else {
if((state_val_23954 === (1))){
var inst_23875 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23875)){
var statearr_23958_23999 = state_23953__$1;
(statearr_23958_23999[(1)] = (2));

} else {
var statearr_23959_24000 = state_23953__$1;
(statearr_23959_24000[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (24))){
var inst_23943 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23960_24001 = state_23953__$1;
(statearr_23960_24001[(2)] = inst_23943);

(statearr_23960_24001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (4))){
var inst_23951 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23953__$1,inst_23951);
} else {
if((state_val_23954 === (15))){
var inst_23903 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23904 = figwheel.client.format_messages.call(null,inst_23903);
var inst_23905 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23906 = figwheel.client.heads_up.display_error.call(null,inst_23904,inst_23905);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(18),inst_23906);
} else {
if((state_val_23954 === (21))){
var inst_23945 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23961_24002 = state_23953__$1;
(statearr_23961_24002[(2)] = inst_23945);

(statearr_23961_24002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (31))){
var inst_23934 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(34),inst_23934);
} else {
if((state_val_23954 === (32))){
var state_23953__$1 = state_23953;
var statearr_23962_24003 = state_23953__$1;
(statearr_23962_24003[(2)] = null);

(statearr_23962_24003[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (33))){
var inst_23939 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23963_24004 = state_23953__$1;
(statearr_23963_24004[(2)] = inst_23939);

(statearr_23963_24004[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (13))){
var inst_23893 = (state_23953[(2)]);
var inst_23894 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23895 = figwheel.client.format_messages.call(null,inst_23894);
var inst_23896 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23897 = figwheel.client.heads_up.display_error.call(null,inst_23895,inst_23896);
var state_23953__$1 = (function (){var statearr_23964 = state_23953;
(statearr_23964[(7)] = inst_23893);

return statearr_23964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(14),inst_23897);
} else {
if((state_val_23954 === (22))){
var inst_23917 = figwheel.client.heads_up.clear.call(null);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(25),inst_23917);
} else {
if((state_val_23954 === (29))){
var inst_23941 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23965_24005 = state_23953__$1;
(statearr_23965_24005[(2)] = inst_23941);

(statearr_23965_24005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (6))){
var inst_23883 = figwheel.client.heads_up.clear.call(null);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(9),inst_23883);
} else {
if((state_val_23954 === (28))){
var inst_23932 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23932)){
var statearr_23966_24006 = state_23953__$1;
(statearr_23966_24006[(1)] = (31));

} else {
var statearr_23967_24007 = state_23953__$1;
(statearr_23967_24007[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (25))){
var inst_23919 = (state_23953[(2)]);
var inst_23920 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23921 = figwheel.client.heads_up.display_warning.call(null,inst_23920);
var state_23953__$1 = (function (){var statearr_23968 = state_23953;
(statearr_23968[(8)] = inst_23919);

return statearr_23968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(26),inst_23921);
} else {
if((state_val_23954 === (34))){
var inst_23936 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23969_24008 = state_23953__$1;
(statearr_23969_24008[(2)] = inst_23936);

(statearr_23969_24008[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (17))){
var inst_23947 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23970_24009 = state_23953__$1;
(statearr_23970_24009[(2)] = inst_23947);

(statearr_23970_24009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (3))){
var inst_23889 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23889)){
var statearr_23971_24010 = state_23953__$1;
(statearr_23971_24010[(1)] = (10));

} else {
var statearr_23972_24011 = state_23953__$1;
(statearr_23972_24011[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (12))){
var inst_23949 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23973_24012 = state_23953__$1;
(statearr_23973_24012[(2)] = inst_23949);

(statearr_23973_24012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (2))){
var inst_23877 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23877)){
var statearr_23974_24013 = state_23953__$1;
(statearr_23974_24013[(1)] = (5));

} else {
var statearr_23975_24014 = state_23953__$1;
(statearr_23975_24014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (23))){
var inst_23925 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23925)){
var statearr_23976_24015 = state_23953__$1;
(statearr_23976_24015[(1)] = (27));

} else {
var statearr_23977_24016 = state_23953__$1;
(statearr_23977_24016[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (19))){
var inst_23912 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23913 = figwheel.client.heads_up.append_message.call(null,inst_23912);
var state_23953__$1 = state_23953;
var statearr_23978_24017 = state_23953__$1;
(statearr_23978_24017[(2)] = inst_23913);

(statearr_23978_24017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (11))){
var inst_23901 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23901)){
var statearr_23979_24018 = state_23953__$1;
(statearr_23979_24018[(1)] = (15));

} else {
var statearr_23980_24019 = state_23953__$1;
(statearr_23980_24019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (9))){
var inst_23885 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23981_24020 = state_23953__$1;
(statearr_23981_24020[(2)] = inst_23885);

(statearr_23981_24020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (5))){
var inst_23879 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(8),inst_23879);
} else {
if((state_val_23954 === (14))){
var inst_23899 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23982_24021 = state_23953__$1;
(statearr_23982_24021[(2)] = inst_23899);

(statearr_23982_24021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (26))){
var inst_23923 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23983_24022 = state_23953__$1;
(statearr_23983_24022[(2)] = inst_23923);

(statearr_23983_24022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (16))){
var inst_23910 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23953__$1 = state_23953;
if(cljs.core.truth_(inst_23910)){
var statearr_23984_24023 = state_23953__$1;
(statearr_23984_24023[(1)] = (19));

} else {
var statearr_23985_24024 = state_23953__$1;
(statearr_23985_24024[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (30))){
var inst_23930 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23986_24025 = state_23953__$1;
(statearr_23986_24025[(2)] = inst_23930);

(statearr_23986_24025[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (10))){
var inst_23891 = figwheel.client.heads_up.clear.call(null);
var state_23953__$1 = state_23953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23953__$1,(13),inst_23891);
} else {
if((state_val_23954 === (18))){
var inst_23908 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23987_24026 = state_23953__$1;
(statearr_23987_24026[(2)] = inst_23908);

(statearr_23987_24026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23954 === (8))){
var inst_23881 = (state_23953[(2)]);
var state_23953__$1 = state_23953;
var statearr_23988_24027 = state_23953__$1;
(statearr_23988_24027[(2)] = inst_23881);

(statearr_23988_24027[(1)] = (7));


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
});})(c__19655__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19590__auto__,c__19655__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto____0 = (function (){
var statearr_23992 = [null,null,null,null,null,null,null,null,null];
(statearr_23992[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto__);

(statearr_23992[(1)] = (1));

return statearr_23992;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto____1 = (function (state_23953){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_23953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e23993){if((e23993 instanceof Object)){
var ex__19594__auto__ = e23993;
var statearr_23994_24028 = state_23953;
(statearr_23994_24028[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24029 = state_23953;
state_23953 = G__24029;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto__ = function(state_23953){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto____1.call(this,state_23953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__,msg_hist,msg_names,msg))
})();
var state__19657__auto__ = (function (){var statearr_23995 = f__19656__auto__.call(null);
(statearr_23995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_23995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__,msg_hist,msg_names,msg))
);

return c__19655__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19655__auto___24092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___24092,ch){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___24092,ch){
return (function (state_24075){
var state_val_24076 = (state_24075[(1)]);
if((state_val_24076 === (1))){
var state_24075__$1 = state_24075;
var statearr_24077_24093 = state_24075__$1;
(statearr_24077_24093[(2)] = null);

(statearr_24077_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (2))){
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(4),ch);
} else {
if((state_val_24076 === (3))){
var inst_24073 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24075__$1,inst_24073);
} else {
if((state_val_24076 === (4))){
var inst_24063 = (state_24075[(7)]);
var inst_24063__$1 = (state_24075[(2)]);
var state_24075__$1 = (function (){var statearr_24078 = state_24075;
(statearr_24078[(7)] = inst_24063__$1);

return statearr_24078;
})();
if(cljs.core.truth_(inst_24063__$1)){
var statearr_24079_24094 = state_24075__$1;
(statearr_24079_24094[(1)] = (5));

} else {
var statearr_24080_24095 = state_24075__$1;
(statearr_24080_24095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (5))){
var inst_24063 = (state_24075[(7)]);
var inst_24065 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24063);
var state_24075__$1 = state_24075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24075__$1,(8),inst_24065);
} else {
if((state_val_24076 === (6))){
var state_24075__$1 = state_24075;
var statearr_24081_24096 = state_24075__$1;
(statearr_24081_24096[(2)] = null);

(statearr_24081_24096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (7))){
var inst_24071 = (state_24075[(2)]);
var state_24075__$1 = state_24075;
var statearr_24082_24097 = state_24075__$1;
(statearr_24082_24097[(2)] = inst_24071);

(statearr_24082_24097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24076 === (8))){
var inst_24067 = (state_24075[(2)]);
var state_24075__$1 = (function (){var statearr_24083 = state_24075;
(statearr_24083[(8)] = inst_24067);

return statearr_24083;
})();
var statearr_24084_24098 = state_24075__$1;
(statearr_24084_24098[(2)] = null);

(statearr_24084_24098[(1)] = (2));


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
});})(c__19655__auto___24092,ch))
;
return ((function (switch__19590__auto__,c__19655__auto___24092,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19591__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19591__auto____0 = (function (){
var statearr_24088 = [null,null,null,null,null,null,null,null,null];
(statearr_24088[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19591__auto__);

(statearr_24088[(1)] = (1));

return statearr_24088;
});
var figwheel$client$heads_up_plugin_$_state_machine__19591__auto____1 = (function (state_24075){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_24075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e24089){if((e24089 instanceof Object)){
var ex__19594__auto__ = e24089;
var statearr_24090_24099 = state_24075;
(statearr_24090_24099[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24100 = state_24075;
state_24075 = G__24100;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19591__auto__ = function(state_24075){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19591__auto____1.call(this,state_24075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19591__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19591__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___24092,ch))
})();
var state__19657__auto__ = (function (){var statearr_24091 = f__19656__auto__.call(null);
(statearr_24091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___24092);

return statearr_24091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___24092,ch))
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
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_24121){
var state_val_24122 = (state_24121[(1)]);
if((state_val_24122 === (1))){
var inst_24116 = cljs.core.async.timeout.call(null,(3000));
var state_24121__$1 = state_24121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24121__$1,(2),inst_24116);
} else {
if((state_val_24122 === (2))){
var inst_24118 = (state_24121[(2)]);
var inst_24119 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24121__$1 = (function (){var statearr_24123 = state_24121;
(statearr_24123[(7)] = inst_24118);

return statearr_24123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24121__$1,inst_24119);
} else {
return null;
}
}
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19591__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19591__auto____0 = (function (){
var statearr_24127 = [null,null,null,null,null,null,null,null];
(statearr_24127[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19591__auto__);

(statearr_24127[(1)] = (1));

return statearr_24127;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19591__auto____1 = (function (state_24121){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_24121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e24128){if((e24128 instanceof Object)){
var ex__19594__auto__ = e24128;
var statearr_24129_24131 = state_24121;
(statearr_24129_24131[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24132 = state_24121;
state_24121 = G__24132;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19591__auto__ = function(state_24121){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19591__auto____1.call(this,state_24121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19591__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19591__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_24130 = f__19656__auto__.call(null);
(statearr_24130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_24130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24133){
var map__24140 = p__24133;
var map__24140__$1 = ((((!((map__24140 == null)))?((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var ed = map__24140__$1;
var formatted_exception = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24142_24146 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24143_24147 = null;
var count__24144_24148 = (0);
var i__24145_24149 = (0);
while(true){
if((i__24145_24149 < count__24144_24148)){
var msg_24150 = cljs.core._nth.call(null,chunk__24143_24147,i__24145_24149);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24150);

var G__24151 = seq__24142_24146;
var G__24152 = chunk__24143_24147;
var G__24153 = count__24144_24148;
var G__24154 = (i__24145_24149 + (1));
seq__24142_24146 = G__24151;
chunk__24143_24147 = G__24152;
count__24144_24148 = G__24153;
i__24145_24149 = G__24154;
continue;
} else {
var temp__4425__auto___24155 = cljs.core.seq.call(null,seq__24142_24146);
if(temp__4425__auto___24155){
var seq__24142_24156__$1 = temp__4425__auto___24155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24142_24156__$1)){
var c__17256__auto___24157 = cljs.core.chunk_first.call(null,seq__24142_24156__$1);
var G__24158 = cljs.core.chunk_rest.call(null,seq__24142_24156__$1);
var G__24159 = c__17256__auto___24157;
var G__24160 = cljs.core.count.call(null,c__17256__auto___24157);
var G__24161 = (0);
seq__24142_24146 = G__24158;
chunk__24143_24147 = G__24159;
count__24144_24148 = G__24160;
i__24145_24149 = G__24161;
continue;
} else {
var msg_24162 = cljs.core.first.call(null,seq__24142_24156__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24162);

var G__24163 = cljs.core.next.call(null,seq__24142_24156__$1);
var G__24164 = null;
var G__24165 = (0);
var G__24166 = (0);
seq__24142_24146 = G__24163;
chunk__24143_24147 = G__24164;
count__24144_24148 = G__24165;
i__24145_24149 = G__24166;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24167){
var map__24170 = p__24167;
var map__24170__$1 = ((((!((map__24170 == null)))?((((map__24170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24170):map__24170);
var w = map__24170__$1;
var message = cljs.core.get.call(null,map__24170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16460__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16460__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16460__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24178 = cljs.core.seq.call(null,plugins);
var chunk__24179 = null;
var count__24180 = (0);
var i__24181 = (0);
while(true){
if((i__24181 < count__24180)){
var vec__24182 = cljs.core._nth.call(null,chunk__24179,i__24181);
var k = cljs.core.nth.call(null,vec__24182,(0),null);
var plugin = cljs.core.nth.call(null,vec__24182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24184 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24178,chunk__24179,count__24180,i__24181,pl_24184,vec__24182,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24184.call(null,msg_hist);
});})(seq__24178,chunk__24179,count__24180,i__24181,pl_24184,vec__24182,k,plugin))
);
} else {
}

var G__24185 = seq__24178;
var G__24186 = chunk__24179;
var G__24187 = count__24180;
var G__24188 = (i__24181 + (1));
seq__24178 = G__24185;
chunk__24179 = G__24186;
count__24180 = G__24187;
i__24181 = G__24188;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24178);
if(temp__4425__auto__){
var seq__24178__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24178__$1)){
var c__17256__auto__ = cljs.core.chunk_first.call(null,seq__24178__$1);
var G__24189 = cljs.core.chunk_rest.call(null,seq__24178__$1);
var G__24190 = c__17256__auto__;
var G__24191 = cljs.core.count.call(null,c__17256__auto__);
var G__24192 = (0);
seq__24178 = G__24189;
chunk__24179 = G__24190;
count__24180 = G__24191;
i__24181 = G__24192;
continue;
} else {
var vec__24183 = cljs.core.first.call(null,seq__24178__$1);
var k = cljs.core.nth.call(null,vec__24183,(0),null);
var plugin = cljs.core.nth.call(null,vec__24183,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24193 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24178,chunk__24179,count__24180,i__24181,pl_24193,vec__24183,k,plugin,seq__24178__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24193.call(null,msg_hist);
});})(seq__24178,chunk__24179,count__24180,i__24181,pl_24193,vec__24183,k,plugin,seq__24178__$1,temp__4425__auto__))
);
} else {
}

var G__24194 = cljs.core.next.call(null,seq__24178__$1);
var G__24195 = null;
var G__24196 = (0);
var G__24197 = (0);
seq__24178 = G__24194;
chunk__24179 = G__24195;
count__24180 = G__24196;
i__24181 = G__24197;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args24198 = [];
var len__17511__auto___24201 = arguments.length;
var i__17512__auto___24202 = (0);
while(true){
if((i__17512__auto___24202 < len__17511__auto___24201)){
args24198.push((arguments[i__17512__auto___24202]));

var G__24203 = (i__17512__auto___24202 + (1));
i__17512__auto___24202 = G__24203;
continue;
} else {
}
break;
}

var G__24200 = args24198.length;
switch (G__24200) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24198.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17518__auto__ = [];
var len__17511__auto___24209 = arguments.length;
var i__17512__auto___24210 = (0);
while(true){
if((i__17512__auto___24210 < len__17511__auto___24209)){
args__17518__auto__.push((arguments[i__17512__auto___24210]));

var G__24211 = (i__17512__auto___24210 + (1));
i__17512__auto___24210 = G__24211;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24206){
var map__24207 = p__24206;
var map__24207__$1 = ((((!((map__24207 == null)))?((((map__24207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24207):map__24207);
var opts = map__24207__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24205){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24205));
});

//# sourceMappingURL=client.js.map