// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17518__auto__ = [];
var len__17511__auto___24351 = arguments.length;
var i__17512__auto___24352 = (0);
while(true){
if((i__17512__auto___24352 < len__17511__auto___24351)){
args__17518__auto__.push((arguments[i__17512__auto___24352]));

var G__24353 = (i__17512__auto___24352 + (1));
i__17512__auto___24352 = G__24353;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((2) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17519__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24343_24354 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24344_24355 = null;
var count__24345_24356 = (0);
var i__24346_24357 = (0);
while(true){
if((i__24346_24357 < count__24345_24356)){
var k_24358 = cljs.core._nth.call(null,chunk__24344_24355,i__24346_24357);
e.setAttribute(cljs.core.name.call(null,k_24358),cljs.core.get.call(null,attrs,k_24358));

var G__24359 = seq__24343_24354;
var G__24360 = chunk__24344_24355;
var G__24361 = count__24345_24356;
var G__24362 = (i__24346_24357 + (1));
seq__24343_24354 = G__24359;
chunk__24344_24355 = G__24360;
count__24345_24356 = G__24361;
i__24346_24357 = G__24362;
continue;
} else {
var temp__4425__auto___24363 = cljs.core.seq.call(null,seq__24343_24354);
if(temp__4425__auto___24363){
var seq__24343_24364__$1 = temp__4425__auto___24363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24343_24364__$1)){
var c__17256__auto___24365 = cljs.core.chunk_first.call(null,seq__24343_24364__$1);
var G__24366 = cljs.core.chunk_rest.call(null,seq__24343_24364__$1);
var G__24367 = c__17256__auto___24365;
var G__24368 = cljs.core.count.call(null,c__17256__auto___24365);
var G__24369 = (0);
seq__24343_24354 = G__24366;
chunk__24344_24355 = G__24367;
count__24345_24356 = G__24368;
i__24346_24357 = G__24369;
continue;
} else {
var k_24370 = cljs.core.first.call(null,seq__24343_24364__$1);
e.setAttribute(cljs.core.name.call(null,k_24370),cljs.core.get.call(null,attrs,k_24370));

var G__24371 = cljs.core.next.call(null,seq__24343_24364__$1);
var G__24372 = null;
var G__24373 = (0);
var G__24374 = (0);
seq__24343_24354 = G__24371;
chunk__24344_24355 = G__24372;
count__24345_24356 = G__24373;
i__24346_24357 = G__24374;
continue;
}
} else {
}
}
break;
}

var seq__24347_24375 = cljs.core.seq.call(null,children);
var chunk__24348_24376 = null;
var count__24349_24377 = (0);
var i__24350_24378 = (0);
while(true){
if((i__24350_24378 < count__24349_24377)){
var ch_24379 = cljs.core._nth.call(null,chunk__24348_24376,i__24350_24378);
e.appendChild(ch_24379);

var G__24380 = seq__24347_24375;
var G__24381 = chunk__24348_24376;
var G__24382 = count__24349_24377;
var G__24383 = (i__24350_24378 + (1));
seq__24347_24375 = G__24380;
chunk__24348_24376 = G__24381;
count__24349_24377 = G__24382;
i__24350_24378 = G__24383;
continue;
} else {
var temp__4425__auto___24384 = cljs.core.seq.call(null,seq__24347_24375);
if(temp__4425__auto___24384){
var seq__24347_24385__$1 = temp__4425__auto___24384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24347_24385__$1)){
var c__17256__auto___24386 = cljs.core.chunk_first.call(null,seq__24347_24385__$1);
var G__24387 = cljs.core.chunk_rest.call(null,seq__24347_24385__$1);
var G__24388 = c__17256__auto___24386;
var G__24389 = cljs.core.count.call(null,c__17256__auto___24386);
var G__24390 = (0);
seq__24347_24375 = G__24387;
chunk__24348_24376 = G__24388;
count__24349_24377 = G__24389;
i__24350_24378 = G__24390;
continue;
} else {
var ch_24391 = cljs.core.first.call(null,seq__24347_24385__$1);
e.appendChild(ch_24391);

var G__24392 = cljs.core.next.call(null,seq__24347_24385__$1);
var G__24393 = null;
var G__24394 = (0);
var G__24395 = (0);
seq__24347_24375 = G__24392;
chunk__24348_24376 = G__24393;
count__24349_24377 = G__24394;
i__24350_24378 = G__24395;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24340){
var G__24341 = cljs.core.first.call(null,seq24340);
var seq24340__$1 = cljs.core.next.call(null,seq24340);
var G__24342 = cljs.core.first.call(null,seq24340__$1);
var seq24340__$2 = cljs.core.next.call(null,seq24340__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24341,G__24342,seq24340__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__,hierarchy__17370__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__,hierarchy__17370__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17370__auto__,method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24396 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24396.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24396.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24396.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24396);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24397,st_map){
var map__24402 = p__24397;
var map__24402__$1 = ((((!((map__24402 == null)))?((((map__24402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24402):map__24402);
var container_el = cljs.core.get.call(null,map__24402__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24402,map__24402__$1,container_el){
return (function (p__24404){
var vec__24405 = p__24404;
var k = cljs.core.nth.call(null,vec__24405,(0),null);
var v = cljs.core.nth.call(null,vec__24405,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24402,map__24402__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24406,dom_str){
var map__24409 = p__24406;
var map__24409__$1 = ((((!((map__24409 == null)))?((((map__24409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24409):map__24409);
var c = map__24409__$1;
var content_area_el = cljs.core.get.call(null,map__24409__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24411){
var map__24414 = p__24411;
var map__24414__$1 = ((((!((map__24414 == null)))?((((map__24414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24414):map__24414);
var content_area_el = cljs.core.get.call(null,map__24414__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_24457){
var state_val_24458 = (state_24457[(1)]);
if((state_val_24458 === (1))){
var inst_24442 = (state_24457[(7)]);
var inst_24442__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24443 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24444 = ["10px","10px","100%","68px","1.0"];
var inst_24445 = cljs.core.PersistentHashMap.fromArrays(inst_24443,inst_24444);
var inst_24446 = cljs.core.merge.call(null,inst_24445,style);
var inst_24447 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24442__$1,inst_24446);
var inst_24448 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24442__$1,msg);
var inst_24449 = cljs.core.async.timeout.call(null,(300));
var state_24457__$1 = (function (){var statearr_24459 = state_24457;
(statearr_24459[(7)] = inst_24442__$1);

(statearr_24459[(8)] = inst_24448);

(statearr_24459[(9)] = inst_24447);

return statearr_24459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24457__$1,(2),inst_24449);
} else {
if((state_val_24458 === (2))){
var inst_24442 = (state_24457[(7)]);
var inst_24451 = (state_24457[(2)]);
var inst_24452 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24453 = ["auto"];
var inst_24454 = cljs.core.PersistentHashMap.fromArrays(inst_24452,inst_24453);
var inst_24455 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24442,inst_24454);
var state_24457__$1 = (function (){var statearr_24460 = state_24457;
(statearr_24460[(10)] = inst_24451);

return statearr_24460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24457__$1,inst_24455);
} else {
return null;
}
}
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto____0 = (function (){
var statearr_24464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24464[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto__);

(statearr_24464[(1)] = (1));

return statearr_24464;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto____1 = (function (state_24457){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_24457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e24465){if((e24465 instanceof Object)){
var ex__19594__auto__ = e24465;
var statearr_24466_24468 = state_24457;
(statearr_24466_24468[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24469 = state_24457;
state_24457 = G__24469;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto__ = function(state_24457){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto____1.call(this,state_24457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_24467 = f__19656__auto__.call(null);
(statearr_24467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_24467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24471 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24471,(0),null);
var ln = cljs.core.nth.call(null,vec__24471,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24474 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24474,(0),null);
var file_line = cljs.core.nth.call(null,vec__24474,(1),null);
var file_column = cljs.core.nth.call(null,vec__24474,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24474,file_name,file_line,file_column){
return (function (p1__24472_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24472_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24474,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16472__auto__ = file_line;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
var and__16460__auto__ = cause;
if(cljs.core.truth_(and__16460__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16460__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24477 = figwheel.client.heads_up.ensure_container.call(null);
var map__24477__$1 = ((((!((map__24477 == null)))?((((map__24477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24477):map__24477);
var content_area_el = cljs.core.get.call(null,map__24477__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_24525){
var state_val_24526 = (state_24525[(1)]);
if((state_val_24526 === (1))){
var inst_24508 = (state_24525[(7)]);
var inst_24508__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24509 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24510 = ["0.0"];
var inst_24511 = cljs.core.PersistentHashMap.fromArrays(inst_24509,inst_24510);
var inst_24512 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24508__$1,inst_24511);
var inst_24513 = cljs.core.async.timeout.call(null,(300));
var state_24525__$1 = (function (){var statearr_24527 = state_24525;
(statearr_24527[(8)] = inst_24512);

(statearr_24527[(7)] = inst_24508__$1);

return statearr_24527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24525__$1,(2),inst_24513);
} else {
if((state_val_24526 === (2))){
var inst_24508 = (state_24525[(7)]);
var inst_24515 = (state_24525[(2)]);
var inst_24516 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24517 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24518 = cljs.core.PersistentHashMap.fromArrays(inst_24516,inst_24517);
var inst_24519 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24508,inst_24518);
var inst_24520 = cljs.core.async.timeout.call(null,(200));
var state_24525__$1 = (function (){var statearr_24528 = state_24525;
(statearr_24528[(9)] = inst_24515);

(statearr_24528[(10)] = inst_24519);

return statearr_24528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24525__$1,(3),inst_24520);
} else {
if((state_val_24526 === (3))){
var inst_24508 = (state_24525[(7)]);
var inst_24522 = (state_24525[(2)]);
var inst_24523 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24508,"");
var state_24525__$1 = (function (){var statearr_24529 = state_24525;
(statearr_24529[(11)] = inst_24522);

return statearr_24529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24525__$1,inst_24523);
} else {
return null;
}
}
}
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19591__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19591__auto____0 = (function (){
var statearr_24533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24533[(0)] = figwheel$client$heads_up$clear_$_state_machine__19591__auto__);

(statearr_24533[(1)] = (1));

return statearr_24533;
});
var figwheel$client$heads_up$clear_$_state_machine__19591__auto____1 = (function (state_24525){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_24525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e24534){if((e24534 instanceof Object)){
var ex__19594__auto__ = e24534;
var statearr_24535_24537 = state_24525;
(statearr_24535_24537[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24538 = state_24525;
state_24525 = G__24538;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19591__auto__ = function(state_24525){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19591__auto____1.call(this,state_24525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19591__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19591__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_24536 = f__19656__auto__.call(null);
(statearr_24536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_24536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__){
return (function (state_24570){
var state_val_24571 = (state_24570[(1)]);
if((state_val_24571 === (1))){
var inst_24560 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24570__$1,(2),inst_24560);
} else {
if((state_val_24571 === (2))){
var inst_24562 = (state_24570[(2)]);
var inst_24563 = cljs.core.async.timeout.call(null,(400));
var state_24570__$1 = (function (){var statearr_24572 = state_24570;
(statearr_24572[(7)] = inst_24562);

return statearr_24572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24570__$1,(3),inst_24563);
} else {
if((state_val_24571 === (3))){
var inst_24565 = (state_24570[(2)]);
var inst_24566 = figwheel.client.heads_up.clear.call(null);
var state_24570__$1 = (function (){var statearr_24573 = state_24570;
(statearr_24573[(8)] = inst_24565);

return statearr_24573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24570__$1,(4),inst_24566);
} else {
if((state_val_24571 === (4))){
var inst_24568 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24570__$1,inst_24568);
} else {
return null;
}
}
}
}
});})(c__19655__auto__))
;
return ((function (switch__19590__auto__,c__19655__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto____0 = (function (){
var statearr_24577 = [null,null,null,null,null,null,null,null,null];
(statearr_24577[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto__);

(statearr_24577[(1)] = (1));

return statearr_24577;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto____1 = (function (state_24570){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_24570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e24578){if((e24578 instanceof Object)){
var ex__19594__auto__ = e24578;
var statearr_24579_24581 = state_24570;
(statearr_24579_24581[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24582 = state_24570;
state_24570 = G__24582;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__))
})();
var state__19657__auto__ = (function (){var statearr_24580 = f__19656__auto__.call(null);
(statearr_24580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_24580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__))
);

return c__19655__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map