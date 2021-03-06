// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__24494__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24493 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24493,(0),null);
var body = cljs.core.nthnext.call(null,vec__24493,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24495__i = 0, G__24495__a = new Array(arguments.length -  0);
while (G__24495__i < G__24495__a.length) {G__24495__a[G__24495__i] = arguments[G__24495__i + 0]; ++G__24495__i;}
  args = new cljs.core.IndexedSeq(G__24495__a,0);
} 
return G__24494__delegate.call(this,args);};
G__24494.cljs$lang$maxFixedArity = 0;
G__24494.cljs$lang$applyTo = (function (arglist__24496){
var args = cljs.core.seq(arglist__24496);
return G__24494__delegate(args);
});
G__24494.cljs$core$IFn$_invoke$arity$variadic = G__24494__delegate;
return G__24494;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17077__auto__ = (function sablono$core$update_arglists_$_iter__24501(s__24502){
return (new cljs.core.LazySeq(null,(function (){
var s__24502__$1 = s__24502;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24502__$1);
if(temp__4425__auto__){
var s__24502__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24502__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__24502__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__24504 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__24503 = (0);
while(true){
if((i__24503 < size__17076__auto__)){
var args = cljs.core._nth.call(null,c__17075__auto__,i__24503);
cljs.core.chunk_append.call(null,b__24504,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24505 = (i__24503 + (1));
i__24503 = G__24505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24504),sablono$core$update_arglists_$_iter__24501.call(null,cljs.core.chunk_rest.call(null,s__24502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24504),null);
}
} else {
var args = cljs.core.first.call(null,s__24502__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24501.call(null,cljs.core.rest.call(null,s__24502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24511 = arguments.length;
var i__17364__auto___24512 = (0);
while(true){
if((i__17364__auto___24512 < len__17363__auto___24511)){
args__17370__auto__.push((arguments[i__17364__auto___24512]));

var G__24513 = (i__17364__auto___24512 + (1));
i__17364__auto___24512 = G__24513;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((0) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17371__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17077__auto__ = (function sablono$core$iter__24507(s__24508){
return (new cljs.core.LazySeq(null,(function (){
var s__24508__$1 = s__24508;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24508__$1);
if(temp__4425__auto__){
var s__24508__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24508__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__24508__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__24510 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__24509 = (0);
while(true){
if((i__24509 < size__17076__auto__)){
var style = cljs.core._nth.call(null,c__17075__auto__,i__24509);
cljs.core.chunk_append.call(null,b__24510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24514 = (i__24509 + (1));
i__24509 = G__24514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24510),sablono$core$iter__24507.call(null,cljs.core.chunk_rest.call(null,s__24508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24510),null);
}
} else {
var style = cljs.core.first.call(null,s__24508__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24507.call(null,cljs.core.rest.call(null,s__24508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq24506){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24506));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to24515 = (function sablono$core$link_to24515(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24518 = arguments.length;
var i__17364__auto___24519 = (0);
while(true){
if((i__17364__auto___24519 < len__17363__auto___24518)){
args__17370__auto__.push((arguments[i__17364__auto___24519]));

var G__24520 = (i__17364__auto___24519 + (1));
i__17364__auto___24519 = G__24520;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((1) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((1)),(0))):null);
return sablono.core.link_to24515.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17371__auto__);
});

sablono.core.link_to24515.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24515.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24515.cljs$lang$applyTo = (function (seq24516){
var G__24517 = cljs.core.first.call(null,seq24516);
var seq24516__$1 = cljs.core.next.call(null,seq24516);
return sablono.core.link_to24515.cljs$core$IFn$_invoke$arity$variadic(G__24517,seq24516__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24515);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24521 = (function sablono$core$mail_to24521(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24526 = arguments.length;
var i__17364__auto___24527 = (0);
while(true){
if((i__17364__auto___24527 < len__17363__auto___24526)){
args__17370__auto__.push((arguments[i__17364__auto___24527]));

var G__24528 = (i__17364__auto___24527 + (1));
i__17364__auto___24527 = G__24528;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((1) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24521.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17371__auto__);
});

sablono.core.mail_to24521.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24524){
var vec__24525 = p__24524;
var content = cljs.core.nth.call(null,vec__24525,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16305__auto__ = content;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24521.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24521.cljs$lang$applyTo = (function (seq24522){
var G__24523 = cljs.core.first.call(null,seq24522);
var seq24522__$1 = cljs.core.next.call(null,seq24522);
return sablono.core.mail_to24521.cljs$core$IFn$_invoke$arity$variadic(G__24523,seq24522__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24521);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24529 = (function sablono$core$unordered_list24529(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17077__auto__ = (function sablono$core$unordered_list24529_$_iter__24534(s__24535){
return (new cljs.core.LazySeq(null,(function (){
var s__24535__$1 = s__24535;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24535__$1);
if(temp__4425__auto__){
var s__24535__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24535__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__24535__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__24537 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__24536 = (0);
while(true){
if((i__24536 < size__17076__auto__)){
var x = cljs.core._nth.call(null,c__17075__auto__,i__24536);
cljs.core.chunk_append.call(null,b__24537,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24538 = (i__24536 + (1));
i__24536 = G__24538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24537),sablono$core$unordered_list24529_$_iter__24534.call(null,cljs.core.chunk_rest.call(null,s__24535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24537),null);
}
} else {
var x = cljs.core.first.call(null,s__24535__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24529_$_iter__24534.call(null,cljs.core.rest.call(null,s__24535__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24529);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24539 = (function sablono$core$ordered_list24539(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17077__auto__ = (function sablono$core$ordered_list24539_$_iter__24544(s__24545){
return (new cljs.core.LazySeq(null,(function (){
var s__24545__$1 = s__24545;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24545__$1);
if(temp__4425__auto__){
var s__24545__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24545__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__24545__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__24547 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__24546 = (0);
while(true){
if((i__24546 < size__17076__auto__)){
var x = cljs.core._nth.call(null,c__17075__auto__,i__24546);
cljs.core.chunk_append.call(null,b__24547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24548 = (i__24546 + (1));
i__24546 = G__24548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24547),sablono$core$ordered_list24539_$_iter__24544.call(null,cljs.core.chunk_rest.call(null,s__24545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24547),null);
}
} else {
var x = cljs.core.first.call(null,s__24545__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24539_$_iter__24544.call(null,cljs.core.rest.call(null,s__24545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24539);
/**
 * Create an image element.
 */
sablono.core.image24549 = (function sablono$core$image24549(var_args){
var args24550 = [];
var len__17363__auto___24553 = arguments.length;
var i__17364__auto___24554 = (0);
while(true){
if((i__17364__auto___24554 < len__17363__auto___24553)){
args24550.push((arguments[i__17364__auto___24554]));

var G__24555 = (i__17364__auto___24554 + (1));
i__17364__auto___24554 = G__24555;
continue;
} else {
}
break;
}

var G__24552 = args24550.length;
switch (G__24552) {
case 1:
return sablono.core.image24549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24550.length)].join('')));

}
});

sablono.core.image24549.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24549.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24549.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24549);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24557_SHARP_,p2__24558_SHARP_){
return [cljs.core.str(p1__24557_SHARP_),cljs.core.str("["),cljs.core.str(p2__24558_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24559_SHARP_,p2__24560_SHARP_){
return [cljs.core.str(p1__24559_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24560_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field24561 = (function sablono$core$color_field24561(var_args){
var args24562 = [];
var len__17363__auto___24629 = arguments.length;
var i__17364__auto___24630 = (0);
while(true){
if((i__17364__auto___24630 < len__17363__auto___24629)){
args24562.push((arguments[i__17364__auto___24630]));

var G__24631 = (i__17364__auto___24630 + (1));
i__17364__auto___24630 = G__24631;
continue;
} else {
}
break;
}

var G__24564 = args24562.length;
switch (G__24564) {
case 1:
return sablono.core.color_field24561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24562.length)].join('')));

}
});

sablono.core.color_field24561.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.color_field24561.call(null,name__18915__auto__,null);
});

sablono.core.color_field24561.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.color_field24561.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24561);

/**
 * Creates a date input field.
 */
sablono.core.date_field24565 = (function sablono$core$date_field24565(var_args){
var args24566 = [];
var len__17363__auto___24633 = arguments.length;
var i__17364__auto___24634 = (0);
while(true){
if((i__17364__auto___24634 < len__17363__auto___24633)){
args24566.push((arguments[i__17364__auto___24634]));

var G__24635 = (i__17364__auto___24634 + (1));
i__17364__auto___24634 = G__24635;
continue;
} else {
}
break;
}

var G__24568 = args24566.length;
switch (G__24568) {
case 1:
return sablono.core.date_field24565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24566.length)].join('')));

}
});

sablono.core.date_field24565.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.date_field24565.call(null,name__18915__auto__,null);
});

sablono.core.date_field24565.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.date_field24565.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24565);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24569 = (function sablono$core$datetime_field24569(var_args){
var args24570 = [];
var len__17363__auto___24637 = arguments.length;
var i__17364__auto___24638 = (0);
while(true){
if((i__17364__auto___24638 < len__17363__auto___24637)){
args24570.push((arguments[i__17364__auto___24638]));

var G__24639 = (i__17364__auto___24638 + (1));
i__17364__auto___24638 = G__24639;
continue;
} else {
}
break;
}

var G__24572 = args24570.length;
switch (G__24572) {
case 1:
return sablono.core.datetime_field24569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24570.length)].join('')));

}
});

sablono.core.datetime_field24569.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.datetime_field24569.call(null,name__18915__auto__,null);
});

sablono.core.datetime_field24569.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.datetime_field24569.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24569);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24573 = (function sablono$core$datetime_local_field24573(var_args){
var args24574 = [];
var len__17363__auto___24641 = arguments.length;
var i__17364__auto___24642 = (0);
while(true){
if((i__17364__auto___24642 < len__17363__auto___24641)){
args24574.push((arguments[i__17364__auto___24642]));

var G__24643 = (i__17364__auto___24642 + (1));
i__17364__auto___24642 = G__24643;
continue;
} else {
}
break;
}

var G__24576 = args24574.length;
switch (G__24576) {
case 1:
return sablono.core.datetime_local_field24573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24574.length)].join('')));

}
});

sablono.core.datetime_local_field24573.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.datetime_local_field24573.call(null,name__18915__auto__,null);
});

sablono.core.datetime_local_field24573.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.datetime_local_field24573.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24573);

/**
 * Creates a email input field.
 */
sablono.core.email_field24577 = (function sablono$core$email_field24577(var_args){
var args24578 = [];
var len__17363__auto___24645 = arguments.length;
var i__17364__auto___24646 = (0);
while(true){
if((i__17364__auto___24646 < len__17363__auto___24645)){
args24578.push((arguments[i__17364__auto___24646]));

var G__24647 = (i__17364__auto___24646 + (1));
i__17364__auto___24646 = G__24647;
continue;
} else {
}
break;
}

var G__24580 = args24578.length;
switch (G__24580) {
case 1:
return sablono.core.email_field24577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24578.length)].join('')));

}
});

sablono.core.email_field24577.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.email_field24577.call(null,name__18915__auto__,null);
});

sablono.core.email_field24577.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.email_field24577.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24577);

/**
 * Creates a file input field.
 */
sablono.core.file_field24581 = (function sablono$core$file_field24581(var_args){
var args24582 = [];
var len__17363__auto___24649 = arguments.length;
var i__17364__auto___24650 = (0);
while(true){
if((i__17364__auto___24650 < len__17363__auto___24649)){
args24582.push((arguments[i__17364__auto___24650]));

var G__24651 = (i__17364__auto___24650 + (1));
i__17364__auto___24650 = G__24651;
continue;
} else {
}
break;
}

var G__24584 = args24582.length;
switch (G__24584) {
case 1:
return sablono.core.file_field24581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24582.length)].join('')));

}
});

sablono.core.file_field24581.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.file_field24581.call(null,name__18915__auto__,null);
});

sablono.core.file_field24581.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.file_field24581.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24581);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24585 = (function sablono$core$hidden_field24585(var_args){
var args24586 = [];
var len__17363__auto___24653 = arguments.length;
var i__17364__auto___24654 = (0);
while(true){
if((i__17364__auto___24654 < len__17363__auto___24653)){
args24586.push((arguments[i__17364__auto___24654]));

var G__24655 = (i__17364__auto___24654 + (1));
i__17364__auto___24654 = G__24655;
continue;
} else {
}
break;
}

var G__24588 = args24586.length;
switch (G__24588) {
case 1:
return sablono.core.hidden_field24585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24586.length)].join('')));

}
});

sablono.core.hidden_field24585.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.hidden_field24585.call(null,name__18915__auto__,null);
});

sablono.core.hidden_field24585.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.hidden_field24585.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24585);

/**
 * Creates a month input field.
 */
sablono.core.month_field24589 = (function sablono$core$month_field24589(var_args){
var args24590 = [];
var len__17363__auto___24657 = arguments.length;
var i__17364__auto___24658 = (0);
while(true){
if((i__17364__auto___24658 < len__17363__auto___24657)){
args24590.push((arguments[i__17364__auto___24658]));

var G__24659 = (i__17364__auto___24658 + (1));
i__17364__auto___24658 = G__24659;
continue;
} else {
}
break;
}

var G__24592 = args24590.length;
switch (G__24592) {
case 1:
return sablono.core.month_field24589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24590.length)].join('')));

}
});

sablono.core.month_field24589.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.month_field24589.call(null,name__18915__auto__,null);
});

sablono.core.month_field24589.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.month_field24589.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24589);

/**
 * Creates a number input field.
 */
sablono.core.number_field24593 = (function sablono$core$number_field24593(var_args){
var args24594 = [];
var len__17363__auto___24661 = arguments.length;
var i__17364__auto___24662 = (0);
while(true){
if((i__17364__auto___24662 < len__17363__auto___24661)){
args24594.push((arguments[i__17364__auto___24662]));

var G__24663 = (i__17364__auto___24662 + (1));
i__17364__auto___24662 = G__24663;
continue;
} else {
}
break;
}

var G__24596 = args24594.length;
switch (G__24596) {
case 1:
return sablono.core.number_field24593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24594.length)].join('')));

}
});

sablono.core.number_field24593.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.number_field24593.call(null,name__18915__auto__,null);
});

sablono.core.number_field24593.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.number_field24593.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24593);

/**
 * Creates a password input field.
 */
sablono.core.password_field24597 = (function sablono$core$password_field24597(var_args){
var args24598 = [];
var len__17363__auto___24665 = arguments.length;
var i__17364__auto___24666 = (0);
while(true){
if((i__17364__auto___24666 < len__17363__auto___24665)){
args24598.push((arguments[i__17364__auto___24666]));

var G__24667 = (i__17364__auto___24666 + (1));
i__17364__auto___24666 = G__24667;
continue;
} else {
}
break;
}

var G__24600 = args24598.length;
switch (G__24600) {
case 1:
return sablono.core.password_field24597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24598.length)].join('')));

}
});

sablono.core.password_field24597.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.password_field24597.call(null,name__18915__auto__,null);
});

sablono.core.password_field24597.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.password_field24597.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24597);

/**
 * Creates a range input field.
 */
sablono.core.range_field24601 = (function sablono$core$range_field24601(var_args){
var args24602 = [];
var len__17363__auto___24669 = arguments.length;
var i__17364__auto___24670 = (0);
while(true){
if((i__17364__auto___24670 < len__17363__auto___24669)){
args24602.push((arguments[i__17364__auto___24670]));

var G__24671 = (i__17364__auto___24670 + (1));
i__17364__auto___24670 = G__24671;
continue;
} else {
}
break;
}

var G__24604 = args24602.length;
switch (G__24604) {
case 1:
return sablono.core.range_field24601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24602.length)].join('')));

}
});

sablono.core.range_field24601.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.range_field24601.call(null,name__18915__auto__,null);
});

sablono.core.range_field24601.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.range_field24601.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24601);

/**
 * Creates a search input field.
 */
sablono.core.search_field24605 = (function sablono$core$search_field24605(var_args){
var args24606 = [];
var len__17363__auto___24673 = arguments.length;
var i__17364__auto___24674 = (0);
while(true){
if((i__17364__auto___24674 < len__17363__auto___24673)){
args24606.push((arguments[i__17364__auto___24674]));

var G__24675 = (i__17364__auto___24674 + (1));
i__17364__auto___24674 = G__24675;
continue;
} else {
}
break;
}

var G__24608 = args24606.length;
switch (G__24608) {
case 1:
return sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24606.length)].join('')));

}
});

sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.search_field24605.call(null,name__18915__auto__,null);
});

sablono.core.search_field24605.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.search_field24605.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24605);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24609 = (function sablono$core$tel_field24609(var_args){
var args24610 = [];
var len__17363__auto___24677 = arguments.length;
var i__17364__auto___24678 = (0);
while(true){
if((i__17364__auto___24678 < len__17363__auto___24677)){
args24610.push((arguments[i__17364__auto___24678]));

var G__24679 = (i__17364__auto___24678 + (1));
i__17364__auto___24678 = G__24679;
continue;
} else {
}
break;
}

var G__24612 = args24610.length;
switch (G__24612) {
case 1:
return sablono.core.tel_field24609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24610.length)].join('')));

}
});

sablono.core.tel_field24609.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.tel_field24609.call(null,name__18915__auto__,null);
});

sablono.core.tel_field24609.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.tel_field24609.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24609);

/**
 * Creates a text input field.
 */
sablono.core.text_field24613 = (function sablono$core$text_field24613(var_args){
var args24614 = [];
var len__17363__auto___24681 = arguments.length;
var i__17364__auto___24682 = (0);
while(true){
if((i__17364__auto___24682 < len__17363__auto___24681)){
args24614.push((arguments[i__17364__auto___24682]));

var G__24683 = (i__17364__auto___24682 + (1));
i__17364__auto___24682 = G__24683;
continue;
} else {
}
break;
}

var G__24616 = args24614.length;
switch (G__24616) {
case 1:
return sablono.core.text_field24613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24614.length)].join('')));

}
});

sablono.core.text_field24613.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.text_field24613.call(null,name__18915__auto__,null);
});

sablono.core.text_field24613.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.text_field24613.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24613);

/**
 * Creates a time input field.
 */
sablono.core.time_field24617 = (function sablono$core$time_field24617(var_args){
var args24618 = [];
var len__17363__auto___24685 = arguments.length;
var i__17364__auto___24686 = (0);
while(true){
if((i__17364__auto___24686 < len__17363__auto___24685)){
args24618.push((arguments[i__17364__auto___24686]));

var G__24687 = (i__17364__auto___24686 + (1));
i__17364__auto___24686 = G__24687;
continue;
} else {
}
break;
}

var G__24620 = args24618.length;
switch (G__24620) {
case 1:
return sablono.core.time_field24617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24618.length)].join('')));

}
});

sablono.core.time_field24617.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.time_field24617.call(null,name__18915__auto__,null);
});

sablono.core.time_field24617.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.time_field24617.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24617);

/**
 * Creates a url input field.
 */
sablono.core.url_field24621 = (function sablono$core$url_field24621(var_args){
var args24622 = [];
var len__17363__auto___24689 = arguments.length;
var i__17364__auto___24690 = (0);
while(true){
if((i__17364__auto___24690 < len__17363__auto___24689)){
args24622.push((arguments[i__17364__auto___24690]));

var G__24691 = (i__17364__auto___24690 + (1));
i__17364__auto___24690 = G__24691;
continue;
} else {
}
break;
}

var G__24624 = args24622.length;
switch (G__24624) {
case 1:
return sablono.core.url_field24621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24622.length)].join('')));

}
});

sablono.core.url_field24621.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.url_field24621.call(null,name__18915__auto__,null);
});

sablono.core.url_field24621.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.url_field24621.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24621);

/**
 * Creates a week input field.
 */
sablono.core.week_field24625 = (function sablono$core$week_field24625(var_args){
var args24626 = [];
var len__17363__auto___24693 = arguments.length;
var i__17364__auto___24694 = (0);
while(true){
if((i__17364__auto___24694 < len__17363__auto___24693)){
args24626.push((arguments[i__17364__auto___24694]));

var G__24695 = (i__17364__auto___24694 + (1));
i__17364__auto___24694 = G__24695;
continue;
} else {
}
break;
}

var G__24628 = args24626.length;
switch (G__24628) {
case 1:
return sablono.core.week_field24625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24626.length)].join('')));

}
});

sablono.core.week_field24625.cljs$core$IFn$_invoke$arity$1 = (function (name__18915__auto__){
return sablono.core.week_field24625.call(null,name__18915__auto__,null);
});

sablono.core.week_field24625.cljs$core$IFn$_invoke$arity$2 = (function (name__18915__auto__,value__18916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__18915__auto__,value__18916__auto__);
});

sablono.core.week_field24625.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24625);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24697 = (function sablono$core$check_box24697(var_args){
var args24698 = [];
var len__17363__auto___24701 = arguments.length;
var i__17364__auto___24702 = (0);
while(true){
if((i__17364__auto___24702 < len__17363__auto___24701)){
args24698.push((arguments[i__17364__auto___24702]));

var G__24703 = (i__17364__auto___24702 + (1));
i__17364__auto___24702 = G__24703;
continue;
} else {
}
break;
}

var G__24700 = args24698.length;
switch (G__24700) {
case 1:
return sablono.core.check_box24697.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24697.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24697.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24698.length)].join('')));

}
});

sablono.core.check_box24697.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24697.call(null,name,null);
});

sablono.core.check_box24697.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24697.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24697.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24697.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24697);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24705 = (function sablono$core$radio_button24705(var_args){
var args24706 = [];
var len__17363__auto___24709 = arguments.length;
var i__17364__auto___24710 = (0);
while(true){
if((i__17364__auto___24710 < len__17363__auto___24709)){
args24706.push((arguments[i__17364__auto___24710]));

var G__24711 = (i__17364__auto___24710 + (1));
i__17364__auto___24710 = G__24711;
continue;
} else {
}
break;
}

var G__24708 = args24706.length;
switch (G__24708) {
case 1:
return sablono.core.radio_button24705.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24705.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24706.length)].join('')));

}
});

sablono.core.radio_button24705.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24705.call(null,group,null);
});

sablono.core.radio_button24705.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24705.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24705.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24705.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24705);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24713 = (function sablono$core$select_options24713(coll){
var iter__17077__auto__ = (function sablono$core$select_options24713_$_iter__24722(s__24723){
return (new cljs.core.LazySeq(null,(function (){
var s__24723__$1 = s__24723;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24723__$1);
if(temp__4425__auto__){
var s__24723__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24723__$2)){
var c__17075__auto__ = cljs.core.chunk_first.call(null,s__24723__$2);
var size__17076__auto__ = cljs.core.count.call(null,c__17075__auto__);
var b__24725 = cljs.core.chunk_buffer.call(null,size__17076__auto__);
if((function (){var i__24724 = (0);
while(true){
if((i__24724 < size__17076__auto__)){
var x = cljs.core._nth.call(null,c__17075__auto__,i__24724);
cljs.core.chunk_append.call(null,b__24725,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24728 = x;
var text = cljs.core.nth.call(null,vec__24728,(0),null);
var val = cljs.core.nth.call(null,vec__24728,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24728,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24713.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24730 = (i__24724 + (1));
i__24724 = G__24730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24725),sablono$core$select_options24713_$_iter__24722.call(null,cljs.core.chunk_rest.call(null,s__24723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24725),null);
}
} else {
var x = cljs.core.first.call(null,s__24723__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24729 = x;
var text = cljs.core.nth.call(null,vec__24729,(0),null);
var val = cljs.core.nth.call(null,vec__24729,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24729,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24713.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24713_$_iter__24722.call(null,cljs.core.rest.call(null,s__24723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17077__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24713);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24731 = (function sablono$core$drop_down24731(var_args){
var args24732 = [];
var len__17363__auto___24735 = arguments.length;
var i__17364__auto___24736 = (0);
while(true){
if((i__17364__auto___24736 < len__17363__auto___24735)){
args24732.push((arguments[i__17364__auto___24736]));

var G__24737 = (i__17364__auto___24736 + (1));
i__17364__auto___24736 = G__24737;
continue;
} else {
}
break;
}

var G__24734 = args24732.length;
switch (G__24734) {
case 2:
return sablono.core.drop_down24731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24731.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24732.length)].join('')));

}
});

sablono.core.drop_down24731.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24731.call(null,name,options,null);
});

sablono.core.drop_down24731.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24731.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24731);
/**
 * Creates a text area element.
 */
sablono.core.text_area24739 = (function sablono$core$text_area24739(var_args){
var args24740 = [];
var len__17363__auto___24743 = arguments.length;
var i__17364__auto___24744 = (0);
while(true){
if((i__17364__auto___24744 < len__17363__auto___24743)){
args24740.push((arguments[i__17364__auto___24744]));

var G__24745 = (i__17364__auto___24744 + (1));
i__17364__auto___24744 = G__24745;
continue;
} else {
}
break;
}

var G__24742 = args24740.length;
switch (G__24742) {
case 1:
return sablono.core.text_area24739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24740.length)].join('')));

}
});

sablono.core.text_area24739.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24739.call(null,name,null);
});

sablono.core.text_area24739.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24739.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24739);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24747 = (function sablono$core$label24747(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24747);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24748 = (function sablono$core$submit_button24748(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24748);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24749 = (function sablono$core$reset_button24749(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24749);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24750 = (function sablono$core$form_to24750(var_args){
var args__17370__auto__ = [];
var len__17363__auto___24755 = arguments.length;
var i__17364__auto___24756 = (0);
while(true){
if((i__17364__auto___24756 < len__17363__auto___24755)){
args__17370__auto__.push((arguments[i__17364__auto___24756]));

var G__24757 = (i__17364__auto___24756 + (1));
i__17364__auto___24756 = G__24757;
continue;
} else {
}
break;
}

var argseq__17371__auto__ = ((((1) < args__17370__auto__.length))?(new cljs.core.IndexedSeq(args__17370__auto__.slice((1)),(0))):null);
return sablono.core.form_to24750.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17371__auto__);
});

sablono.core.form_to24750.cljs$core$IFn$_invoke$arity$variadic = (function (p__24753,body){
var vec__24754 = p__24753;
var method = cljs.core.nth.call(null,vec__24754,(0),null);
var action = cljs.core.nth.call(null,vec__24754,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24750.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24750.cljs$lang$applyTo = (function (seq24751){
var G__24752 = cljs.core.first.call(null,seq24751);
var seq24751__$1 = cljs.core.next.call(null,seq24751);
return sablono.core.form_to24750.cljs$core$IFn$_invoke$arity$variadic(G__24752,seq24751__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24750);

//# sourceMappingURL=core.js.map