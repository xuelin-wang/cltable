// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17573__auto__ = [];
var len__17566__auto___24898 = arguments.length;
var i__17567__auto___24899 = (0);
while(true){
if((i__17567__auto___24899 < len__17566__auto___24898)){
args__17573__auto__.push((arguments[i__17567__auto___24899]));

var G__24900 = (i__17567__auto___24899 + (1));
i__17567__auto___24899 = G__24900;
continue;
} else {
}
break;
}

var argseq__17574__auto__ = ((((2) < args__17573__auto__.length))?(new cljs.core.IndexedSeq(args__17573__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17574__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24890_24901 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24891_24902 = null;
var count__24892_24903 = (0);
var i__24893_24904 = (0);
while(true){
if((i__24893_24904 < count__24892_24903)){
var k_24905 = cljs.core._nth.call(null,chunk__24891_24902,i__24893_24904);
e.setAttribute(cljs.core.name.call(null,k_24905),cljs.core.get.call(null,attrs,k_24905));

var G__24906 = seq__24890_24901;
var G__24907 = chunk__24891_24902;
var G__24908 = count__24892_24903;
var G__24909 = (i__24893_24904 + (1));
seq__24890_24901 = G__24906;
chunk__24891_24902 = G__24907;
count__24892_24903 = G__24908;
i__24893_24904 = G__24909;
continue;
} else {
var temp__4425__auto___24910 = cljs.core.seq.call(null,seq__24890_24901);
if(temp__4425__auto___24910){
var seq__24890_24911__$1 = temp__4425__auto___24910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24890_24911__$1)){
var c__17311__auto___24912 = cljs.core.chunk_first.call(null,seq__24890_24911__$1);
var G__24913 = cljs.core.chunk_rest.call(null,seq__24890_24911__$1);
var G__24914 = c__17311__auto___24912;
var G__24915 = cljs.core.count.call(null,c__17311__auto___24912);
var G__24916 = (0);
seq__24890_24901 = G__24913;
chunk__24891_24902 = G__24914;
count__24892_24903 = G__24915;
i__24893_24904 = G__24916;
continue;
} else {
var k_24917 = cljs.core.first.call(null,seq__24890_24911__$1);
e.setAttribute(cljs.core.name.call(null,k_24917),cljs.core.get.call(null,attrs,k_24917));

var G__24918 = cljs.core.next.call(null,seq__24890_24911__$1);
var G__24919 = null;
var G__24920 = (0);
var G__24921 = (0);
seq__24890_24901 = G__24918;
chunk__24891_24902 = G__24919;
count__24892_24903 = G__24920;
i__24893_24904 = G__24921;
continue;
}
} else {
}
}
break;
}

var seq__24894_24922 = cljs.core.seq.call(null,children);
var chunk__24895_24923 = null;
var count__24896_24924 = (0);
var i__24897_24925 = (0);
while(true){
if((i__24897_24925 < count__24896_24924)){
var ch_24926 = cljs.core._nth.call(null,chunk__24895_24923,i__24897_24925);
e.appendChild(ch_24926);

var G__24927 = seq__24894_24922;
var G__24928 = chunk__24895_24923;
var G__24929 = count__24896_24924;
var G__24930 = (i__24897_24925 + (1));
seq__24894_24922 = G__24927;
chunk__24895_24923 = G__24928;
count__24896_24924 = G__24929;
i__24897_24925 = G__24930;
continue;
} else {
var temp__4425__auto___24931 = cljs.core.seq.call(null,seq__24894_24922);
if(temp__4425__auto___24931){
var seq__24894_24932__$1 = temp__4425__auto___24931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24894_24932__$1)){
var c__17311__auto___24933 = cljs.core.chunk_first.call(null,seq__24894_24932__$1);
var G__24934 = cljs.core.chunk_rest.call(null,seq__24894_24932__$1);
var G__24935 = c__17311__auto___24933;
var G__24936 = cljs.core.count.call(null,c__17311__auto___24933);
var G__24937 = (0);
seq__24894_24922 = G__24934;
chunk__24895_24923 = G__24935;
count__24896_24924 = G__24936;
i__24897_24925 = G__24937;
continue;
} else {
var ch_24938 = cljs.core.first.call(null,seq__24894_24932__$1);
e.appendChild(ch_24938);

var G__24939 = cljs.core.next.call(null,seq__24894_24932__$1);
var G__24940 = null;
var G__24941 = (0);
var G__24942 = (0);
seq__24894_24922 = G__24939;
chunk__24895_24923 = G__24940;
count__24896_24924 = G__24941;
i__24897_24925 = G__24942;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24887){
var G__24888 = cljs.core.first.call(null,seq24887);
var seq24887__$1 = cljs.core.next.call(null,seq24887);
var G__24889 = cljs.core.first.call(null,seq24887__$1);
var seq24887__$2 = cljs.core.next.call(null,seq24887__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24888,G__24889,seq24887__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17425__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17425__auto__,method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__));
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
var el_24943 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24943.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24943.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24943.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24943);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24944,st_map){
var map__24949 = p__24944;
var map__24949__$1 = ((((!((map__24949 == null)))?((((map__24949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24949):map__24949);
var container_el = cljs.core.get.call(null,map__24949__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24949,map__24949__$1,container_el){
return (function (p__24951){
var vec__24952 = p__24951;
var k = cljs.core.nth.call(null,vec__24952,(0),null);
var v = cljs.core.nth.call(null,vec__24952,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24949,map__24949__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24953,dom_str){
var map__24956 = p__24953;
var map__24956__$1 = ((((!((map__24956 == null)))?((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24956):map__24956);
var c = map__24956__$1;
var content_area_el = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24958){
var map__24961 = p__24958;
var map__24961__$1 = ((((!((map__24961 == null)))?((((map__24961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24961):map__24961);
var content_area_el = cljs.core.get.call(null,map__24961__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_25004){
var state_val_25005 = (state_25004[(1)]);
if((state_val_25005 === (1))){
var inst_24989 = (state_25004[(7)]);
var inst_24989__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24990 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24991 = ["10px","10px","100%","68px","1.0"];
var inst_24992 = cljs.core.PersistentHashMap.fromArrays(inst_24990,inst_24991);
var inst_24993 = cljs.core.merge.call(null,inst_24992,style);
var inst_24994 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24989__$1,inst_24993);
var inst_24995 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24989__$1,msg);
var inst_24996 = cljs.core.async.timeout.call(null,(300));
var state_25004__$1 = (function (){var statearr_25006 = state_25004;
(statearr_25006[(8)] = inst_24995);

(statearr_25006[(9)] = inst_24994);

(statearr_25006[(7)] = inst_24989__$1);

return statearr_25006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25004__$1,(2),inst_24996);
} else {
if((state_val_25005 === (2))){
var inst_24989 = (state_25004[(7)]);
var inst_24998 = (state_25004[(2)]);
var inst_24999 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25000 = ["auto"];
var inst_25001 = cljs.core.PersistentHashMap.fromArrays(inst_24999,inst_25000);
var inst_25002 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24989,inst_25001);
var state_25004__$1 = (function (){var statearr_25007 = state_25004;
(statearr_25007[(10)] = inst_24998);

return statearr_25007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25004__$1,inst_25002);
} else {
return null;
}
}
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto____0 = (function (){
var statearr_25011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25011[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto__);

(statearr_25011[(1)] = (1));

return statearr_25011;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto____1 = (function (state_25004){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_25004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e25012){if((e25012 instanceof Object)){
var ex__19527__auto__ = e25012;
var statearr_25013_25015 = state_25004;
(statearr_25013_25015[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25016 = state_25004;
state_25004 = G__25016;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto__ = function(state_25004){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto____1.call(this,state_25004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_25014 = f__19589__auto__.call(null);
(statearr_25014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_25014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
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
var vec__25018 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25018,(0),null);
var ln = cljs.core.nth.call(null,vec__25018,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25021 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25021,(0),null);
var file_line = cljs.core.nth.call(null,vec__25021,(1),null);
var file_column = cljs.core.nth.call(null,vec__25021,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25021,file_name,file_line,file_column){
return (function (p1__25019_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25019_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25021,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16508__auto__ = file_line;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
var and__16496__auto__ = cause;
if(cljs.core.truth_(and__16496__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16496__auto__;
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
var map__25024 = figwheel.client.heads_up.ensure_container.call(null);
var map__25024__$1 = ((((!((map__25024 == null)))?((((map__25024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25024):map__25024);
var content_area_el = cljs.core.get.call(null,map__25024__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (1))){
var inst_25055 = (state_25072[(7)]);
var inst_25055__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25056 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25057 = ["0.0"];
var inst_25058 = cljs.core.PersistentHashMap.fromArrays(inst_25056,inst_25057);
var inst_25059 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25055__$1,inst_25058);
var inst_25060 = cljs.core.async.timeout.call(null,(300));
var state_25072__$1 = (function (){var statearr_25074 = state_25072;
(statearr_25074[(8)] = inst_25059);

(statearr_25074[(7)] = inst_25055__$1);

return statearr_25074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(2),inst_25060);
} else {
if((state_val_25073 === (2))){
var inst_25055 = (state_25072[(7)]);
var inst_25062 = (state_25072[(2)]);
var inst_25063 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25064 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25065 = cljs.core.PersistentHashMap.fromArrays(inst_25063,inst_25064);
var inst_25066 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25055,inst_25065);
var inst_25067 = cljs.core.async.timeout.call(null,(200));
var state_25072__$1 = (function (){var statearr_25075 = state_25072;
(statearr_25075[(9)] = inst_25066);

(statearr_25075[(10)] = inst_25062);

return statearr_25075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(3),inst_25067);
} else {
if((state_val_25073 === (3))){
var inst_25055 = (state_25072[(7)]);
var inst_25069 = (state_25072[(2)]);
var inst_25070 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25055,"");
var state_25072__$1 = (function (){var statearr_25076 = state_25072;
(statearr_25076[(11)] = inst_25069);

return statearr_25076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
return null;
}
}
}
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19524__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19524__auto____0 = (function (){
var statearr_25080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25080[(0)] = figwheel$client$heads_up$clear_$_state_machine__19524__auto__);

(statearr_25080[(1)] = (1));

return statearr_25080;
});
var figwheel$client$heads_up$clear_$_state_machine__19524__auto____1 = (function (state_25072){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e25081){if((e25081 instanceof Object)){
var ex__19527__auto__ = e25081;
var statearr_25082_25084 = state_25072;
(statearr_25082_25084[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25085 = state_25072;
state_25072 = G__25085;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19524__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19524__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19524__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19524__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_25083 = f__19589__auto__.call(null);
(statearr_25083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_25083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__){
return (function (state_25117){
var state_val_25118 = (state_25117[(1)]);
if((state_val_25118 === (1))){
var inst_25107 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25117__$1,(2),inst_25107);
} else {
if((state_val_25118 === (2))){
var inst_25109 = (state_25117[(2)]);
var inst_25110 = cljs.core.async.timeout.call(null,(400));
var state_25117__$1 = (function (){var statearr_25119 = state_25117;
(statearr_25119[(7)] = inst_25109);

return statearr_25119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25117__$1,(3),inst_25110);
} else {
if((state_val_25118 === (3))){
var inst_25112 = (state_25117[(2)]);
var inst_25113 = figwheel.client.heads_up.clear.call(null);
var state_25117__$1 = (function (){var statearr_25120 = state_25117;
(statearr_25120[(8)] = inst_25112);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25117__$1,(4),inst_25113);
} else {
if((state_val_25118 === (4))){
var inst_25115 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25117__$1,inst_25115);
} else {
return null;
}
}
}
}
});})(c__19588__auto__))
;
return ((function (switch__19523__auto__,c__19588__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null,null,null];
(statearr_25124[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto____1 = (function (state_25117){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_25117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__19527__auto__ = e25125;
var statearr_25126_25128 = state_25117;
(statearr_25126_25128[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25129 = state_25117;
state_25117 = G__25129;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto__ = function(state_25117){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto____1.call(this,state_25117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__))
})();
var state__19590__auto__ = (function (){var statearr_25127 = f__19589__auto__.call(null);
(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__))
);

return c__19588__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map