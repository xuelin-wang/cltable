// Compiled by ClojureScript 1.7.145 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_24268 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_24268){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_24268,(cljs.core._deref.call(null,last_id_24268) + (1)));
});})(last_id_24268))
;
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.collect = (function rum$core$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.core.call_all = (function rum$core$call_all(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24272 = arguments.length;
var i__17364__auto___24273 = (0);
while(true){
if((i__17364__auto___24273 < len__17363__auto___24272)){
args__17370__auto__.push((arguments[i__17364__auto___24273]));

var G__24274 = (i__17364__auto___24273 + (1));
i__17364__auto___24273 = G__24274;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((2) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((2)),(0))):null);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17371__auto__);
});

rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.core.call_all.cljs$lang$maxFixedArity = (2);

rum.core.call_all.cljs$lang$applyTo = (function (seq24269){
var G__24270 = cljs.core.first.call(null,seq24269);
var seq24269__$1 = cljs.core.next.call(null,seq24269);
var G__24271 = cljs.core.first.call(null,seq24269__$1);
var seq24269__$2 = cljs.core.next.call(null,seq24269__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__24270,G__24271,seq24269__$2);
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"classes","classes",-616631259,null))))].join('')));
}

var init = rum.core.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.core.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.core.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__24276_SHARP_,p2__24275_SHARP_){
return p2__24275_SHARP_.call(null,p1__24276_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.core.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.core.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.core.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__24278_SHARP_,p2__24277_SHARP_){
return p2__24277_SHARP_.call(null,old_state,p1__24278_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__16305__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__24279_SHARP_){
return p1__24279_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24282 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24282,(0),null);
var next_state = cljs.core.nth.call(null,vec__24282,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__24280_SHARP_){
return p1__24280_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.core.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.core.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
});
rum.core.schedule = (function (){var or__16305__auto__ = (function (){var and__16293__auto__ = typeof window !== 'undefined';
if(and__16293__auto__){
var or__16305__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
var or__16305__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__16305__auto____$2)){
return or__16305__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__16293__auto__;
}
})();
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return ((function (or__16305__auto__){
return (function (p1__24283_SHARP_){
return setTimeout(p1__24283_SHARP_,(16));
});
;})(or__16305__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__24290 = cljs.core.seq.call(null,queue);
var chunk__24292 = null;
var count__24293 = (0);
var i__24294 = (0);
while(true){
if((i__24294 < count__24293)){
var comp = cljs.core._nth.call(null,chunk__24292,i__24294);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24296 = seq__24290;
var G__24297 = chunk__24292;
var G__24298 = count__24293;
var G__24299 = (i__24294 + (1));
seq__24290 = G__24296;
chunk__24292 = G__24297;
count__24293 = G__24298;
i__24294 = G__24299;
continue;
} else {
var G__24300 = seq__24290;
var G__24301 = chunk__24292;
var G__24302 = count__24293;
var G__24303 = (i__24294 + (1));
seq__24290 = G__24300;
chunk__24292 = G__24301;
count__24293 = G__24302;
i__24294 = G__24303;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24290);
if(temp__4425__auto__){
var seq__24290__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24290__$1)){
var c__17108__auto__ = cljs.core.chunk_first.call(null,seq__24290__$1);
var G__24304 = cljs.core.chunk_rest.call(null,seq__24290__$1);
var G__24305 = c__17108__auto__;
var G__24306 = cljs.core.count.call(null,c__17108__auto__);
var G__24307 = (0);
seq__24290 = G__24304;
chunk__24292 = G__24305;
count__24293 = G__24306;
i__24294 = G__24307;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24290__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24308 = cljs.core.next.call(null,seq__24290__$1);
var G__24309 = null;
var G__24310 = (0);
var G__24311 = (0);
seq__24290 = G__24308;
chunk__24292 = G__24309;
count__24293 = G__24310;
i__24294 = G__24311;
continue;
} else {
var G__24312 = cljs.core.next.call(null,seq__24290__$1);
var G__24313 = null;
var G__24314 = (0);
var G__24315 = (0);
seq__24290 = G__24312;
chunk__24292 = G__24313;
count__24293 = G__24314;
i__24294 = G__24315;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return React.render(component,node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24321 = arguments.length;
var i__17364__auto___24322 = (0);
while(true){
if((i__17364__auto___24322 < len__17363__auto___24321)){
args__17370__auto__.push((arguments[i__17364__auto___24322]));

var G__24323 = (i__17364__auto___24322 + (1));
i__17364__auto___24322 = G__24323;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((2) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17371__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__24319){
var vec__24320 = p__24319;
var props = cljs.core.nth.call(null,vec__24320,(0),null);
var props__$1 = (function (){var or__16305__auto__ = props;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq24316){
var G__24317 = cljs.core.first.call(null,seq24316);
var seq24316__$1 = cljs.core.next.call(null,seq24316);
var G__24318 = cljs.core.first.call(null,seq24316__$1);
var seq24316__$2 = cljs.core.next.call(null,seq24316__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__24317,G__24318,seq24316__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24328 = arguments.length;
var i__17364__auto___24329 = (0);
while(true){
if((i__17364__auto___24329 < len__17363__auto___24328)){
args__17370__auto__.push((arguments[i__17364__auto___24329]));

var G__24330 = (i__17364__auto___24329 + (1));
i__17364__auto___24329 = G__24330;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((1) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17371__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__24326){
var vec__24327 = p__24326;
var key = cljs.core.nth.call(null,vec__24327,(0),null);
var key__$1 = (function (){var or__16305__auto__ = key;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__24327,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__24327,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__24327,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__24327,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__24327,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__24327,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq24324){
var G__24325 = cljs.core.first.call(null,seq24324);
var seq24324__$1 = cljs.core.next.call(null,seq24324);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__24325,seq24324__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24331 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24332 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24332,(0),null);
var next_state = cljs.core.nth.call(null,vec__24332,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__24333_24345 = cljs.core.seq.call(null,old_reactions);
var chunk__24334_24346 = null;
var count__24335_24347 = (0);
var i__24336_24348 = (0);
while(true){
if((i__24336_24348 < count__24335_24347)){
var ref_24349 = cljs.core._nth.call(null,chunk__24334_24346,i__24336_24348);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24349)){
} else {
cljs.core.remove_watch.call(null,ref_24349,key);
}

var G__24350 = seq__24333_24345;
var G__24351 = chunk__24334_24346;
var G__24352 = count__24335_24347;
var G__24353 = (i__24336_24348 + (1));
seq__24333_24345 = G__24350;
chunk__24334_24346 = G__24351;
count__24335_24347 = G__24352;
i__24336_24348 = G__24353;
continue;
} else {
var temp__4425__auto___24354 = cljs.core.seq.call(null,seq__24333_24345);
if(temp__4425__auto___24354){
var seq__24333_24355__$1 = temp__4425__auto___24354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24333_24355__$1)){
var c__17108__auto___24356 = cljs.core.chunk_first.call(null,seq__24333_24355__$1);
var G__24357 = cljs.core.chunk_rest.call(null,seq__24333_24355__$1);
var G__24358 = c__17108__auto___24356;
var G__24359 = cljs.core.count.call(null,c__17108__auto___24356);
var G__24360 = (0);
seq__24333_24345 = G__24357;
chunk__24334_24346 = G__24358;
count__24335_24347 = G__24359;
i__24336_24348 = G__24360;
continue;
} else {
var ref_24361 = cljs.core.first.call(null,seq__24333_24355__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24361)){
} else {
cljs.core.remove_watch.call(null,ref_24361,key);
}

var G__24362 = cljs.core.next.call(null,seq__24333_24355__$1);
var G__24363 = null;
var G__24364 = (0);
var G__24365 = (0);
seq__24333_24345 = G__24362;
chunk__24334_24346 = G__24363;
count__24335_24347 = G__24364;
i__24336_24348 = G__24365;
continue;
}
} else {
}
}
break;
}

var seq__24337_24366 = cljs.core.seq.call(null,new_reactions);
var chunk__24338_24367 = null;
var count__24339_24368 = (0);
var i__24340_24369 = (0);
while(true){
if((i__24340_24369 < count__24339_24368)){
var ref_24370 = cljs.core._nth.call(null,chunk__24338_24367,i__24340_24369);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24370)){
} else {
cljs.core.add_watch.call(null,ref_24370,key,((function (seq__24337_24366,chunk__24338_24367,count__24339_24368,i__24340_24369,ref_24370,comp,old_reactions,vec__24332,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24331){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24337_24366,chunk__24338_24367,count__24339_24368,i__24340_24369,ref_24370,comp,old_reactions,vec__24332,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24331))
);
}

var G__24371 = seq__24337_24366;
var G__24372 = chunk__24338_24367;
var G__24373 = count__24339_24368;
var G__24374 = (i__24340_24369 + (1));
seq__24337_24366 = G__24371;
chunk__24338_24367 = G__24372;
count__24339_24368 = G__24373;
i__24340_24369 = G__24374;
continue;
} else {
var temp__4425__auto___24375 = cljs.core.seq.call(null,seq__24337_24366);
if(temp__4425__auto___24375){
var seq__24337_24376__$1 = temp__4425__auto___24375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24337_24376__$1)){
var c__17108__auto___24377 = cljs.core.chunk_first.call(null,seq__24337_24376__$1);
var G__24378 = cljs.core.chunk_rest.call(null,seq__24337_24376__$1);
var G__24379 = c__17108__auto___24377;
var G__24380 = cljs.core.count.call(null,c__17108__auto___24377);
var G__24381 = (0);
seq__24337_24366 = G__24378;
chunk__24338_24367 = G__24379;
count__24339_24368 = G__24380;
i__24340_24369 = G__24381;
continue;
} else {
var ref_24382 = cljs.core.first.call(null,seq__24337_24376__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24382)){
} else {
cljs.core.add_watch.call(null,ref_24382,key,((function (seq__24337_24366,chunk__24338_24367,count__24339_24368,i__24340_24369,ref_24382,seq__24337_24376__$1,temp__4425__auto___24375,comp,old_reactions,vec__24332,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24331){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24337_24366,chunk__24338_24367,count__24339_24368,i__24340_24369,ref_24382,seq__24337_24376__$1,temp__4425__auto___24375,comp,old_reactions,vec__24332,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24331))
);
}

var G__24383 = cljs.core.next.call(null,seq__24337_24376__$1);
var G__24384 = null;
var G__24385 = (0);
var G__24386 = (0);
seq__24337_24366 = G__24383;
chunk__24338_24367 = G__24384;
count__24339_24368 = G__24385;
i__24340_24369 = G__24386;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24331;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24387 = rum.core.reactive_key.call(null,state);
var seq__24341_24388 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24342_24389 = null;
var count__24343_24390 = (0);
var i__24344_24391 = (0);
while(true){
if((i__24344_24391 < count__24343_24390)){
var ref_24392 = cljs.core._nth.call(null,chunk__24342_24389,i__24344_24391);
cljs.core.remove_watch.call(null,ref_24392,key_24387);

var G__24393 = seq__24341_24388;
var G__24394 = chunk__24342_24389;
var G__24395 = count__24343_24390;
var G__24396 = (i__24344_24391 + (1));
seq__24341_24388 = G__24393;
chunk__24342_24389 = G__24394;
count__24343_24390 = G__24395;
i__24344_24391 = G__24396;
continue;
} else {
var temp__4425__auto___24397 = cljs.core.seq.call(null,seq__24341_24388);
if(temp__4425__auto___24397){
var seq__24341_24398__$1 = temp__4425__auto___24397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24341_24398__$1)){
var c__17108__auto___24399 = cljs.core.chunk_first.call(null,seq__24341_24398__$1);
var G__24400 = cljs.core.chunk_rest.call(null,seq__24341_24398__$1);
var G__24401 = c__17108__auto___24399;
var G__24402 = cljs.core.count.call(null,c__17108__auto___24399);
var G__24403 = (0);
seq__24341_24388 = G__24400;
chunk__24342_24389 = G__24401;
count__24343_24390 = G__24402;
i__24344_24391 = G__24403;
continue;
} else {
var ref_24404 = cljs.core.first.call(null,seq__24341_24398__$1);
cljs.core.remove_watch.call(null,ref_24404,key_24387);

var G__24405 = cljs.core.next.call(null,seq__24341_24398__$1);
var G__24406 = null;
var G__24407 = (0);
var G__24408 = (0);
seq__24341_24388 = G__24405;
chunk__24342_24389 = G__24406;
count__24343_24390 = G__24407;
i__24344_24391 = G__24408;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__16903__auto__,writer__16904__auto__,opt__16905__auto__){
return cljs.core._write.call(null,writer__16904__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__24409_SHARP_){
return cljs.core.get_in.call(null,p1__24409_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__24410_SHARP_,p2__24411_SHARP_){
return cljs.core.assoc_in.call(null,p1__24410_SHARP_,path,p2__24411_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__24412_SHARP_){
if(((!((p1__24412_SHARP_ == null)))?((((p1__24412_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__24412_SHARP_.cljs$core$IDeref$))?true:(((!p1__24412_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__24412_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__24412_SHARP_))){
return cljs.core.deref.call(null,p1__24412_SHARP_);
} else {
return p1__24412_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__24415 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24415,(0),null);
var next_state = cljs.core.nth.call(null,vec__24415,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__24416_24432 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24418_24433 = null;
var count__24419_24434 = (0);
var i__24420_24435 = (0);
while(true){
if((i__24420_24435 < count__24419_24434)){
var arg_24436 = cljs.core._nth.call(null,chunk__24418_24433,i__24420_24435);
if(((!((arg_24436 == null)))?((((arg_24436.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24436.cljs$core$IWatchable$))?true:(((!arg_24436.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24436):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24436))){
cljs.core.add_watch.call(null,arg_24436,rum.core.cursored_key.call(null,state),((function (seq__24416_24432,chunk__24418_24433,count__24419_24434,i__24420_24435,arg_24436){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__24416_24432,chunk__24418_24433,count__24419_24434,i__24420_24435,arg_24436))
);

var G__24437 = seq__24416_24432;
var G__24438 = chunk__24418_24433;
var G__24439 = count__24419_24434;
var G__24440 = (i__24420_24435 + (1));
seq__24416_24432 = G__24437;
chunk__24418_24433 = G__24438;
count__24419_24434 = G__24439;
i__24420_24435 = G__24440;
continue;
} else {
var G__24441 = seq__24416_24432;
var G__24442 = chunk__24418_24433;
var G__24443 = count__24419_24434;
var G__24444 = (i__24420_24435 + (1));
seq__24416_24432 = G__24441;
chunk__24418_24433 = G__24442;
count__24419_24434 = G__24443;
i__24420_24435 = G__24444;
continue;
}
} else {
var temp__4425__auto___24445 = cljs.core.seq.call(null,seq__24416_24432);
if(temp__4425__auto___24445){
var seq__24416_24446__$1 = temp__4425__auto___24445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24416_24446__$1)){
var c__17108__auto___24447 = cljs.core.chunk_first.call(null,seq__24416_24446__$1);
var G__24448 = cljs.core.chunk_rest.call(null,seq__24416_24446__$1);
var G__24449 = c__17108__auto___24447;
var G__24450 = cljs.core.count.call(null,c__17108__auto___24447);
var G__24451 = (0);
seq__24416_24432 = G__24448;
chunk__24418_24433 = G__24449;
count__24419_24434 = G__24450;
i__24420_24435 = G__24451;
continue;
} else {
var arg_24452 = cljs.core.first.call(null,seq__24416_24446__$1);
if(((!((arg_24452 == null)))?((((arg_24452.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24452.cljs$core$IWatchable$))?true:(((!arg_24452.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24452):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24452))){
cljs.core.add_watch.call(null,arg_24452,rum.core.cursored_key.call(null,state),((function (seq__24416_24432,chunk__24418_24433,count__24419_24434,i__24420_24435,arg_24452,seq__24416_24446__$1,temp__4425__auto___24445){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__24416_24432,chunk__24418_24433,count__24419_24434,i__24420_24435,arg_24452,seq__24416_24446__$1,temp__4425__auto___24445))
);

var G__24453 = cljs.core.next.call(null,seq__24416_24446__$1);
var G__24454 = null;
var G__24455 = (0);
var G__24456 = (0);
seq__24416_24432 = G__24453;
chunk__24418_24433 = G__24454;
count__24419_24434 = G__24455;
i__24420_24435 = G__24456;
continue;
} else {
var G__24457 = cljs.core.next.call(null,seq__24416_24446__$1);
var G__24458 = null;
var G__24459 = (0);
var G__24460 = (0);
seq__24416_24432 = G__24457;
chunk__24418_24433 = G__24458;
count__24419_24434 = G__24459;
i__24420_24435 = G__24460;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__24424_24461 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24426_24462 = null;
var count__24427_24463 = (0);
var i__24428_24464 = (0);
while(true){
if((i__24428_24464 < count__24427_24463)){
var arg_24465 = cljs.core._nth.call(null,chunk__24426_24462,i__24428_24464);
if(((!((arg_24465 == null)))?((((arg_24465.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24465.cljs$core$IWatchable$))?true:(((!arg_24465.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24465):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24465))){
cljs.core.remove_watch.call(null,arg_24465,rum.core.cursored_key.call(null,state));

var G__24466 = seq__24424_24461;
var G__24467 = chunk__24426_24462;
var G__24468 = count__24427_24463;
var G__24469 = (i__24428_24464 + (1));
seq__24424_24461 = G__24466;
chunk__24426_24462 = G__24467;
count__24427_24463 = G__24468;
i__24428_24464 = G__24469;
continue;
} else {
var G__24470 = seq__24424_24461;
var G__24471 = chunk__24426_24462;
var G__24472 = count__24427_24463;
var G__24473 = (i__24428_24464 + (1));
seq__24424_24461 = G__24470;
chunk__24426_24462 = G__24471;
count__24427_24463 = G__24472;
i__24428_24464 = G__24473;
continue;
}
} else {
var temp__4425__auto___24474 = cljs.core.seq.call(null,seq__24424_24461);
if(temp__4425__auto___24474){
var seq__24424_24475__$1 = temp__4425__auto___24474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24424_24475__$1)){
var c__17108__auto___24476 = cljs.core.chunk_first.call(null,seq__24424_24475__$1);
var G__24477 = cljs.core.chunk_rest.call(null,seq__24424_24475__$1);
var G__24478 = c__17108__auto___24476;
var G__24479 = cljs.core.count.call(null,c__17108__auto___24476);
var G__24480 = (0);
seq__24424_24461 = G__24477;
chunk__24426_24462 = G__24478;
count__24427_24463 = G__24479;
i__24428_24464 = G__24480;
continue;
} else {
var arg_24481 = cljs.core.first.call(null,seq__24424_24475__$1);
if(((!((arg_24481 == null)))?((((arg_24481.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24481.cljs$core$IWatchable$))?true:(((!arg_24481.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24481):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24481))){
cljs.core.remove_watch.call(null,arg_24481,rum.core.cursored_key.call(null,state));

var G__24482 = cljs.core.next.call(null,seq__24424_24475__$1);
var G__24483 = null;
var G__24484 = (0);
var G__24485 = (0);
seq__24424_24461 = G__24482;
chunk__24426_24462 = G__24483;
count__24427_24463 = G__24484;
i__24428_24464 = G__24485;
continue;
} else {
var G__24486 = cljs.core.next.call(null,seq__24424_24475__$1);
var G__24487 = null;
var G__24488 = (0);
var G__24489 = (0);
seq__24424_24461 = G__24486;
chunk__24426_24462 = G__24487;
count__24427_24463 = G__24488;
i__24428_24464 = G__24489;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map