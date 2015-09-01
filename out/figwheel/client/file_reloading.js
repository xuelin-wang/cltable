// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__24649_SHARP_,p2__24650_SHARP_){
var and__16460__auto__ = p1__24649_SHARP_;
if(cljs.core.truth_(and__16460__auto__)){
return p2__24650_SHARP_;
} else {
return and__16460__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16472__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16472__auto__){
return or__16472__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16472__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16472__auto__){
return or__16472__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16472__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17370__auto__,method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__24651){
var map__24652 = p__24651;
var map__24652__$1 = ((((!((map__24652 == null)))?((((map__24652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24652):map__24652);
var file = cljs.core.get.call(null,map__24652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__24654){
var map__24655 = p__24654;
var map__24655__$1 = ((((!((map__24655 == null)))?((((map__24655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24655):map__24655);
var namespace = cljs.core.get.call(null,map__24655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17370__auto__,method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e24657){if((e24657 instanceof Error)){
var e = e24657;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24657;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args24658 = [];
var len__17511__auto___24661 = arguments.length;
var i__17512__auto___24662 = (0);
while(true){
if((i__17512__auto___24662 < len__17511__auto___24661)){
args24658.push((arguments[i__17512__auto___24662]));

var G__24663 = (i__17512__auto___24662 + (1));
i__17512__auto___24662 = G__24663;
continue;
} else {
}
break;
}

var G__24660 = args24658.length;
switch (G__24660) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24658.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24665,callback){
var map__24668 = p__24665;
var map__24668__$1 = ((((!((map__24668 == null)))?((((map__24668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24668):map__24668);
var file_msg = map__24668__$1;
var request_url = cljs.core.get.call(null,map__24668__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24668,map__24668__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24668,map__24668__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24670){
var map__24673 = p__24670;
var map__24673__$1 = ((((!((map__24673 == null)))?((((map__24673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24673):map__24673);
var file_msg = map__24673__$1;
var namespace = cljs.core.get.call(null,map__24673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__24673__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16472__auto__ = meta_data;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16460__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16460__auto__){
var or__16472__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
var or__16472__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16472__auto____$1)){
return or__16472__auto____$1;
} else {
var and__16460__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16460__auto____$1){
var or__16472__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16472__auto____$2){
return or__16472__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16460__auto____$1;
}
}
}
} else {
return and__16460__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24675,callback){
var map__24678 = p__24675;
var map__24678__$1 = ((((!((map__24678 == null)))?((((map__24678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24678):map__24678);
var file_msg = map__24678__$1;
var request_url = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19655__auto___24766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto___24766,out){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto___24766,out){
return (function (state_24748){
var state_val_24749 = (state_24748[(1)]);
if((state_val_24749 === (1))){
var inst_24726 = cljs.core.nth.call(null,files,(0),null);
var inst_24727 = cljs.core.nthnext.call(null,files,(1));
var inst_24728 = files;
var state_24748__$1 = (function (){var statearr_24750 = state_24748;
(statearr_24750[(7)] = inst_24726);

(statearr_24750[(8)] = inst_24728);

(statearr_24750[(9)] = inst_24727);

return statearr_24750;
})();
var statearr_24751_24767 = state_24748__$1;
(statearr_24751_24767[(2)] = null);

(statearr_24751_24767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (2))){
var inst_24731 = (state_24748[(10)]);
var inst_24728 = (state_24748[(8)]);
var inst_24731__$1 = cljs.core.nth.call(null,inst_24728,(0),null);
var inst_24732 = cljs.core.nthnext.call(null,inst_24728,(1));
var inst_24733 = (inst_24731__$1 == null);
var inst_24734 = cljs.core.not.call(null,inst_24733);
var state_24748__$1 = (function (){var statearr_24752 = state_24748;
(statearr_24752[(10)] = inst_24731__$1);

(statearr_24752[(11)] = inst_24732);

return statearr_24752;
})();
if(inst_24734){
var statearr_24753_24768 = state_24748__$1;
(statearr_24753_24768[(1)] = (4));

} else {
var statearr_24754_24769 = state_24748__$1;
(statearr_24754_24769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (3))){
var inst_24746 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24748__$1,inst_24746);
} else {
if((state_val_24749 === (4))){
var inst_24731 = (state_24748[(10)]);
var inst_24736 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24731);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24748__$1,(7),inst_24736);
} else {
if((state_val_24749 === (5))){
var inst_24742 = cljs.core.async.close_BANG_.call(null,out);
var state_24748__$1 = state_24748;
var statearr_24755_24770 = state_24748__$1;
(statearr_24755_24770[(2)] = inst_24742);

(statearr_24755_24770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (6))){
var inst_24744 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24756_24771 = state_24748__$1;
(statearr_24756_24771[(2)] = inst_24744);

(statearr_24756_24771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (7))){
var inst_24732 = (state_24748[(11)]);
var inst_24738 = (state_24748[(2)]);
var inst_24739 = cljs.core.async.put_BANG_.call(null,out,inst_24738);
var inst_24728 = inst_24732;
var state_24748__$1 = (function (){var statearr_24757 = state_24748;
(statearr_24757[(12)] = inst_24739);

(statearr_24757[(8)] = inst_24728);

return statearr_24757;
})();
var statearr_24758_24772 = state_24748__$1;
(statearr_24758_24772[(2)] = null);

(statearr_24758_24772[(1)] = (2));


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
});})(c__19655__auto___24766,out))
;
return ((function (switch__19590__auto__,c__19655__auto___24766,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto____0 = (function (){
var statearr_24762 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24762[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto__);

(statearr_24762[(1)] = (1));

return statearr_24762;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto____1 = (function (state_24748){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_24748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e24763){if((e24763 instanceof Object)){
var ex__19594__auto__ = e24763;
var statearr_24764_24773 = state_24748;
(statearr_24764_24773[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24774 = state_24748;
state_24748 = G__24774;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto__ = function(state_24748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto____1.call(this,state_24748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto___24766,out))
})();
var state__19657__auto__ = (function (){var statearr_24765 = f__19656__auto__.call(null);
(statearr_24765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto___24766);

return statearr_24765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto___24766,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__24775,p__24776){
var map__24781 = p__24775;
var map__24781__$1 = ((((!((map__24781 == null)))?((((map__24781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24781):map__24781);
var opts = map__24781__$1;
var url_rewriter = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__24782 = p__24776;
var map__24782__$1 = ((((!((map__24782 == null)))?((((map__24782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24782):map__24782);
var file_msg = map__24782__$1;
var file = cljs.core.get.call(null,map__24782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24785,opts){
var map__24789 = p__24785;
var map__24789__$1 = ((((!((map__24789 == null)))?((((map__24789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24789):map__24789);
var eval_body__$1 = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24789__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16460__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16460__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16460__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24791){var e = e24791;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24796,p__24797){
var map__25025 = p__24796;
var map__25025__$1 = ((((!((map__25025 == null)))?((((map__25025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25025):map__25025);
var opts = map__25025__$1;
var before_jsload = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__25026 = p__24797;
var map__25026__$1 = ((((!((map__25026 == null)))?((((map__25026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25026):map__25026);
var msg = map__25026__$1;
var files = cljs.core.get.call(null,map__25026__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (state_25167){
var state_val_25168 = (state_25167[(1)]);
if((state_val_25168 === (7))){
var inst_25040 = (state_25167[(7)]);
var inst_25042 = (state_25167[(8)]);
var inst_25041 = (state_25167[(9)]);
var inst_25043 = (state_25167[(10)]);
var inst_25048 = cljs.core._nth.call(null,inst_25041,inst_25043);
var inst_25049 = figwheel.client.file_reloading.eval_body.call(null,inst_25048,opts);
var inst_25050 = (inst_25043 + (1));
var tmp25169 = inst_25040;
var tmp25170 = inst_25042;
var tmp25171 = inst_25041;
var inst_25040__$1 = tmp25169;
var inst_25041__$1 = tmp25171;
var inst_25042__$1 = tmp25170;
var inst_25043__$1 = inst_25050;
var state_25167__$1 = (function (){var statearr_25172 = state_25167;
(statearr_25172[(11)] = inst_25049);

(statearr_25172[(7)] = inst_25040__$1);

(statearr_25172[(8)] = inst_25042__$1);

(statearr_25172[(9)] = inst_25041__$1);

(statearr_25172[(10)] = inst_25043__$1);

return statearr_25172;
})();
var statearr_25173_25252 = state_25167__$1;
(statearr_25173_25252[(2)] = null);

(statearr_25173_25252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (20))){
var inst_25092 = (state_25167[(12)]);
var inst_25090 = (state_25167[(13)]);
var inst_25085 = (state_25167[(14)]);
var inst_25086 = (state_25167[(15)]);
var inst_25089 = (state_25167[(16)]);
var inst_25095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25097 = (function (){var all_files = inst_25085;
var files_SINGLEQUOTE_ = inst_25086;
var res_SINGLEQUOTE_ = inst_25089;
var res = inst_25090;
var files_not_loaded = inst_25092;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25092,inst_25090,inst_25085,inst_25086,inst_25089,inst_25095,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (p__25096){
var map__25174 = p__25096;
var map__25174__$1 = ((((!((map__25174 == null)))?((((map__25174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25174):map__25174);
var namespace = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25092,inst_25090,inst_25085,inst_25086,inst_25089,inst_25095,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25098 = cljs.core.map.call(null,inst_25097,inst_25090);
var inst_25099 = cljs.core.pr_str.call(null,inst_25098);
var inst_25100 = figwheel.client.utils.log.call(null,inst_25099);
var inst_25101 = (function (){var all_files = inst_25085;
var files_SINGLEQUOTE_ = inst_25086;
var res_SINGLEQUOTE_ = inst_25089;
var res = inst_25090;
var files_not_loaded = inst_25092;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25092,inst_25090,inst_25085,inst_25086,inst_25089,inst_25095,inst_25097,inst_25098,inst_25099,inst_25100,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25092,inst_25090,inst_25085,inst_25086,inst_25089,inst_25095,inst_25097,inst_25098,inst_25099,inst_25100,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25102 = setTimeout(inst_25101,(10));
var state_25167__$1 = (function (){var statearr_25176 = state_25167;
(statearr_25176[(17)] = inst_25100);

(statearr_25176[(18)] = inst_25095);

return statearr_25176;
})();
var statearr_25177_25253 = state_25167__$1;
(statearr_25177_25253[(2)] = inst_25102);

(statearr_25177_25253[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (27))){
var state_25167__$1 = state_25167;
var statearr_25178_25254 = state_25167__$1;
(statearr_25178_25254[(2)] = false);

(statearr_25178_25254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (1))){
var inst_25032 = (state_25167[(19)]);
var inst_25029 = before_jsload.call(null,files);
var inst_25030 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25031 = (function (){return ((function (inst_25032,inst_25029,inst_25030,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (p1__24792_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24792_SHARP_);
});
;})(inst_25032,inst_25029,inst_25030,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25032__$1 = cljs.core.filter.call(null,inst_25031,files);
var inst_25033 = cljs.core.not_empty.call(null,inst_25032__$1);
var state_25167__$1 = (function (){var statearr_25179 = state_25167;
(statearr_25179[(20)] = inst_25030);

(statearr_25179[(21)] = inst_25029);

(statearr_25179[(19)] = inst_25032__$1);

return statearr_25179;
})();
if(cljs.core.truth_(inst_25033)){
var statearr_25180_25255 = state_25167__$1;
(statearr_25180_25255[(1)] = (2));

} else {
var statearr_25181_25256 = state_25167__$1;
(statearr_25181_25256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (24))){
var state_25167__$1 = state_25167;
var statearr_25182_25257 = state_25167__$1;
(statearr_25182_25257[(2)] = null);

(statearr_25182_25257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (39))){
var state_25167__$1 = state_25167;
var statearr_25183_25258 = state_25167__$1;
(statearr_25183_25258[(2)] = null);

(statearr_25183_25258[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (4))){
var inst_25077 = (state_25167[(2)]);
var inst_25078 = (function (){return ((function (inst_25077,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (p1__24793_SHARP_){
var and__16460__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24793_SHARP_);
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24793_SHARP_));
} else {
return and__16460__auto__;
}
});
;})(inst_25077,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25079 = cljs.core.filter.call(null,inst_25078,files);
var state_25167__$1 = (function (){var statearr_25184 = state_25167;
(statearr_25184[(22)] = inst_25079);

(statearr_25184[(23)] = inst_25077);

return statearr_25184;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25185_25259 = state_25167__$1;
(statearr_25185_25259[(1)] = (16));

} else {
var statearr_25186_25260 = state_25167__$1;
(statearr_25186_25260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (15))){
var inst_25067 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25187_25261 = state_25167__$1;
(statearr_25187_25261[(2)] = inst_25067);

(statearr_25187_25261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (21))){
var state_25167__$1 = state_25167;
var statearr_25188_25262 = state_25167__$1;
(statearr_25188_25262[(2)] = null);

(statearr_25188_25262[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (31))){
var inst_25124 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25189_25263 = state_25167__$1;
(statearr_25189_25263[(2)] = inst_25124);

(statearr_25189_25263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (32))){
var inst_25112 = (state_25167[(24)]);
var inst_25129 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25112);
var state_25167__$1 = state_25167;
var statearr_25190_25264 = state_25167__$1;
(statearr_25190_25264[(2)] = inst_25129);

(statearr_25190_25264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (40))){
var inst_25135 = (state_25167[(25)]);
var inst_25153 = (state_25167[(2)]);
var inst_25154 = cljs.core.not_empty.call(null,inst_25135);
var state_25167__$1 = (function (){var statearr_25191 = state_25167;
(statearr_25191[(26)] = inst_25153);

return statearr_25191;
})();
if(cljs.core.truth_(inst_25154)){
var statearr_25192_25265 = state_25167__$1;
(statearr_25192_25265[(1)] = (41));

} else {
var statearr_25193_25266 = state_25167__$1;
(statearr_25193_25266[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (33))){
var inst_25112 = (state_25167[(24)]);
var state_25167__$1 = state_25167;
var statearr_25194_25267 = state_25167__$1;
(statearr_25194_25267[(2)] = inst_25112);

(statearr_25194_25267[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (13))){
var inst_25053 = (state_25167[(27)]);
var inst_25057 = cljs.core.chunk_first.call(null,inst_25053);
var inst_25058 = cljs.core.chunk_rest.call(null,inst_25053);
var inst_25059 = cljs.core.count.call(null,inst_25057);
var inst_25040 = inst_25058;
var inst_25041 = inst_25057;
var inst_25042 = inst_25059;
var inst_25043 = (0);
var state_25167__$1 = (function (){var statearr_25195 = state_25167;
(statearr_25195[(7)] = inst_25040);

(statearr_25195[(8)] = inst_25042);

(statearr_25195[(9)] = inst_25041);

(statearr_25195[(10)] = inst_25043);

return statearr_25195;
})();
var statearr_25196_25268 = state_25167__$1;
(statearr_25196_25268[(2)] = null);

(statearr_25196_25268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (22))){
var inst_25092 = (state_25167[(12)]);
var inst_25105 = (state_25167[(2)]);
var inst_25106 = cljs.core.not_empty.call(null,inst_25092);
var state_25167__$1 = (function (){var statearr_25197 = state_25167;
(statearr_25197[(28)] = inst_25105);

return statearr_25197;
})();
if(cljs.core.truth_(inst_25106)){
var statearr_25198_25269 = state_25167__$1;
(statearr_25198_25269[(1)] = (23));

} else {
var statearr_25199_25270 = state_25167__$1;
(statearr_25199_25270[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (36))){
var state_25167__$1 = state_25167;
var statearr_25200_25271 = state_25167__$1;
(statearr_25200_25271[(2)] = null);

(statearr_25200_25271[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (41))){
var inst_25135 = (state_25167[(25)]);
var inst_25156 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25135);
var inst_25157 = cljs.core.pr_str.call(null,inst_25156);
var inst_25158 = [cljs.core.str("not required: "),cljs.core.str(inst_25157)].join('');
var inst_25159 = figwheel.client.utils.log.call(null,inst_25158);
var state_25167__$1 = state_25167;
var statearr_25201_25272 = state_25167__$1;
(statearr_25201_25272[(2)] = inst_25159);

(statearr_25201_25272[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (43))){
var inst_25162 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25202_25273 = state_25167__$1;
(statearr_25202_25273[(2)] = inst_25162);

(statearr_25202_25273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (29))){
var state_25167__$1 = state_25167;
var statearr_25203_25274 = state_25167__$1;
(statearr_25203_25274[(2)] = true);

(statearr_25203_25274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (6))){
var inst_25074 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25204_25275 = state_25167__$1;
(statearr_25204_25275[(2)] = inst_25074);

(statearr_25204_25275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (28))){
var inst_25127 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
if(cljs.core.truth_(inst_25127)){
var statearr_25205_25276 = state_25167__$1;
(statearr_25205_25276[(1)] = (32));

} else {
var statearr_25206_25277 = state_25167__$1;
(statearr_25206_25277[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (25))){
var inst_25165 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25167__$1,inst_25165);
} else {
if((state_val_25168 === (34))){
var inst_25133 = (state_25167[(29)]);
var inst_25132 = (state_25167[(2)]);
var inst_25133__$1 = cljs.core.get.call(null,inst_25132,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25134 = cljs.core.get.call(null,inst_25132,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_25135 = cljs.core.get.call(null,inst_25132,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25136 = cljs.core.not_empty.call(null,inst_25133__$1);
var state_25167__$1 = (function (){var statearr_25207 = state_25167;
(statearr_25207[(25)] = inst_25135);

(statearr_25207[(29)] = inst_25133__$1);

(statearr_25207[(30)] = inst_25134);

return statearr_25207;
})();
if(cljs.core.truth_(inst_25136)){
var statearr_25208_25278 = state_25167__$1;
(statearr_25208_25278[(1)] = (35));

} else {
var statearr_25209_25279 = state_25167__$1;
(statearr_25209_25279[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (17))){
var inst_25079 = (state_25167[(22)]);
var state_25167__$1 = state_25167;
var statearr_25210_25280 = state_25167__$1;
(statearr_25210_25280[(2)] = inst_25079);

(statearr_25210_25280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (3))){
var state_25167__$1 = state_25167;
var statearr_25211_25281 = state_25167__$1;
(statearr_25211_25281[(2)] = null);

(statearr_25211_25281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (12))){
var inst_25070 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25212_25282 = state_25167__$1;
(statearr_25212_25282[(2)] = inst_25070);

(statearr_25212_25282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (2))){
var inst_25032 = (state_25167[(19)]);
var inst_25039 = cljs.core.seq.call(null,inst_25032);
var inst_25040 = inst_25039;
var inst_25041 = null;
var inst_25042 = (0);
var inst_25043 = (0);
var state_25167__$1 = (function (){var statearr_25213 = state_25167;
(statearr_25213[(7)] = inst_25040);

(statearr_25213[(8)] = inst_25042);

(statearr_25213[(9)] = inst_25041);

(statearr_25213[(10)] = inst_25043);

return statearr_25213;
})();
var statearr_25214_25283 = state_25167__$1;
(statearr_25214_25283[(2)] = null);

(statearr_25214_25283[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (23))){
var inst_25092 = (state_25167[(12)]);
var inst_25090 = (state_25167[(13)]);
var inst_25112 = (state_25167[(24)]);
var inst_25085 = (state_25167[(14)]);
var inst_25086 = (state_25167[(15)]);
var inst_25089 = (state_25167[(16)]);
var inst_25108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25111 = (function (){var all_files = inst_25085;
var files_SINGLEQUOTE_ = inst_25086;
var res_SINGLEQUOTE_ = inst_25089;
var res = inst_25090;
var files_not_loaded = inst_25092;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25092,inst_25090,inst_25112,inst_25085,inst_25086,inst_25089,inst_25108,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (p__25110){
var map__25215 = p__25110;
var map__25215__$1 = ((((!((map__25215 == null)))?((((map__25215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25215):map__25215);
var meta_data = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25092,inst_25090,inst_25112,inst_25085,inst_25086,inst_25089,inst_25108,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25112__$1 = cljs.core.group_by.call(null,inst_25111,inst_25092);
var inst_25114 = (inst_25112__$1 == null);
var inst_25115 = cljs.core.not.call(null,inst_25114);
var state_25167__$1 = (function (){var statearr_25217 = state_25167;
(statearr_25217[(24)] = inst_25112__$1);

(statearr_25217[(31)] = inst_25108);

return statearr_25217;
})();
if(inst_25115){
var statearr_25218_25284 = state_25167__$1;
(statearr_25218_25284[(1)] = (26));

} else {
var statearr_25219_25285 = state_25167__$1;
(statearr_25219_25285[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (35))){
var inst_25133 = (state_25167[(29)]);
var inst_25138 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25133);
var inst_25139 = cljs.core.pr_str.call(null,inst_25138);
var inst_25140 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25139)].join('');
var inst_25141 = figwheel.client.utils.log.call(null,inst_25140);
var state_25167__$1 = state_25167;
var statearr_25220_25286 = state_25167__$1;
(statearr_25220_25286[(2)] = inst_25141);

(statearr_25220_25286[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (19))){
var inst_25090 = (state_25167[(13)]);
var inst_25085 = (state_25167[(14)]);
var inst_25086 = (state_25167[(15)]);
var inst_25089 = (state_25167[(16)]);
var inst_25089__$1 = (state_25167[(2)]);
var inst_25090__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25089__$1);
var inst_25091 = (function (){var all_files = inst_25085;
var files_SINGLEQUOTE_ = inst_25086;
var res_SINGLEQUOTE_ = inst_25089__$1;
var res = inst_25090__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25090,inst_25085,inst_25086,inst_25089,inst_25089__$1,inst_25090__$1,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (p1__24795_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24795_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25090,inst_25085,inst_25086,inst_25089,inst_25089__$1,inst_25090__$1,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25092 = cljs.core.filter.call(null,inst_25091,inst_25089__$1);
var inst_25093 = cljs.core.not_empty.call(null,inst_25090__$1);
var state_25167__$1 = (function (){var statearr_25221 = state_25167;
(statearr_25221[(12)] = inst_25092);

(statearr_25221[(13)] = inst_25090__$1);

(statearr_25221[(16)] = inst_25089__$1);

return statearr_25221;
})();
if(cljs.core.truth_(inst_25093)){
var statearr_25222_25287 = state_25167__$1;
(statearr_25222_25287[(1)] = (20));

} else {
var statearr_25223_25288 = state_25167__$1;
(statearr_25223_25288[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (11))){
var state_25167__$1 = state_25167;
var statearr_25224_25289 = state_25167__$1;
(statearr_25224_25289[(2)] = null);

(statearr_25224_25289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (9))){
var inst_25072 = (state_25167[(2)]);
var state_25167__$1 = state_25167;
var statearr_25225_25290 = state_25167__$1;
(statearr_25225_25290[(2)] = inst_25072);

(statearr_25225_25290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (5))){
var inst_25042 = (state_25167[(8)]);
var inst_25043 = (state_25167[(10)]);
var inst_25045 = (inst_25043 < inst_25042);
var inst_25046 = inst_25045;
var state_25167__$1 = state_25167;
if(cljs.core.truth_(inst_25046)){
var statearr_25226_25291 = state_25167__$1;
(statearr_25226_25291[(1)] = (7));

} else {
var statearr_25227_25292 = state_25167__$1;
(statearr_25227_25292[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (14))){
var inst_25053 = (state_25167[(27)]);
var inst_25062 = cljs.core.first.call(null,inst_25053);
var inst_25063 = figwheel.client.file_reloading.eval_body.call(null,inst_25062,opts);
var inst_25064 = cljs.core.next.call(null,inst_25053);
var inst_25040 = inst_25064;
var inst_25041 = null;
var inst_25042 = (0);
var inst_25043 = (0);
var state_25167__$1 = (function (){var statearr_25228 = state_25167;
(statearr_25228[(7)] = inst_25040);

(statearr_25228[(32)] = inst_25063);

(statearr_25228[(8)] = inst_25042);

(statearr_25228[(9)] = inst_25041);

(statearr_25228[(10)] = inst_25043);

return statearr_25228;
})();
var statearr_25229_25293 = state_25167__$1;
(statearr_25229_25293[(2)] = null);

(statearr_25229_25293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (26))){
var inst_25112 = (state_25167[(24)]);
var inst_25117 = inst_25112.cljs$lang$protocol_mask$partition0$;
var inst_25118 = (inst_25117 & (64));
var inst_25119 = inst_25112.cljs$core$ISeq$;
var inst_25120 = (inst_25118) || (inst_25119);
var state_25167__$1 = state_25167;
if(cljs.core.truth_(inst_25120)){
var statearr_25230_25294 = state_25167__$1;
(statearr_25230_25294[(1)] = (29));

} else {
var statearr_25231_25295 = state_25167__$1;
(statearr_25231_25295[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (16))){
var inst_25079 = (state_25167[(22)]);
var inst_25081 = (function (){var all_files = inst_25079;
return ((function (all_files,inst_25079,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function (p1__24794_SHARP_){
return cljs.core.update_in.call(null,p1__24794_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_25079,state_val_25168,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var inst_25082 = cljs.core.map.call(null,inst_25081,inst_25079);
var state_25167__$1 = state_25167;
var statearr_25232_25296 = state_25167__$1;
(statearr_25232_25296[(2)] = inst_25082);

(statearr_25232_25296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (38))){
var inst_25134 = (state_25167[(30)]);
var inst_25147 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25134);
var inst_25148 = cljs.core.pr_str.call(null,inst_25147);
var inst_25149 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25148)].join('');
var inst_25150 = figwheel.client.utils.log.call(null,inst_25149);
var state_25167__$1 = state_25167;
var statearr_25233_25297 = state_25167__$1;
(statearr_25233_25297[(2)] = inst_25150);

(statearr_25233_25297[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (30))){
var state_25167__$1 = state_25167;
var statearr_25234_25298 = state_25167__$1;
(statearr_25234_25298[(2)] = false);

(statearr_25234_25298[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (10))){
var inst_25053 = (state_25167[(27)]);
var inst_25055 = cljs.core.chunked_seq_QMARK_.call(null,inst_25053);
var state_25167__$1 = state_25167;
if(inst_25055){
var statearr_25235_25299 = state_25167__$1;
(statearr_25235_25299[(1)] = (13));

} else {
var statearr_25236_25300 = state_25167__$1;
(statearr_25236_25300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (18))){
var inst_25085 = (state_25167[(14)]);
var inst_25086 = (state_25167[(15)]);
var inst_25085__$1 = (state_25167[(2)]);
var inst_25086__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_25085__$1);
var inst_25087 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25086__$1);
var state_25167__$1 = (function (){var statearr_25237 = state_25167;
(statearr_25237[(14)] = inst_25085__$1);

(statearr_25237[(15)] = inst_25086__$1);

return statearr_25237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25167__$1,(19),inst_25087);
} else {
if((state_val_25168 === (42))){
var state_25167__$1 = state_25167;
var statearr_25238_25301 = state_25167__$1;
(statearr_25238_25301[(2)] = null);

(statearr_25238_25301[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (37))){
var inst_25134 = (state_25167[(30)]);
var inst_25144 = (state_25167[(2)]);
var inst_25145 = cljs.core.not_empty.call(null,inst_25134);
var state_25167__$1 = (function (){var statearr_25239 = state_25167;
(statearr_25239[(33)] = inst_25144);

return statearr_25239;
})();
if(cljs.core.truth_(inst_25145)){
var statearr_25240_25302 = state_25167__$1;
(statearr_25240_25302[(1)] = (38));

} else {
var statearr_25241_25303 = state_25167__$1;
(statearr_25241_25303[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25168 === (8))){
var inst_25053 = (state_25167[(27)]);
var inst_25040 = (state_25167[(7)]);
var inst_25053__$1 = cljs.core.seq.call(null,inst_25040);
var state_25167__$1 = (function (){var statearr_25242 = state_25167;
(statearr_25242[(27)] = inst_25053__$1);

return statearr_25242;
})();
if(inst_25053__$1){
var statearr_25243_25304 = state_25167__$1;
(statearr_25243_25304[(1)] = (10));

} else {
var statearr_25244_25305 = state_25167__$1;
(statearr_25244_25305[(1)] = (11));

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
});})(c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
;
return ((function (switch__19590__auto__,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto____0 = (function (){
var statearr_25248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25248[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto__);

(statearr_25248[(1)] = (1));

return statearr_25248;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto____1 = (function (state_25167){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25249){if((e25249 instanceof Object)){
var ex__19594__auto__ = e25249;
var statearr_25250_25306 = state_25167;
(statearr_25250_25306[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25167;
state_25167 = G__25307;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto__ = function(state_25167){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto____1.call(this,state_25167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
})();
var state__19657__auto__ = (function (){var statearr_25251 = f__19656__auto__.call(null);
(statearr_25251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_25251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__,map__25025,map__25025__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25026,map__25026__$1,msg,files))
);

return c__19655__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25310,link){
var map__25313 = p__25310;
var map__25313__$1 = ((((!((map__25313 == null)))?((((map__25313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25313):map__25313);
var file = cljs.core.get.call(null,map__25313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25313,map__25313__$1,file){
return (function (p1__25308_SHARP_,p2__25309_SHARP_){
if(cljs.core._EQ_.call(null,p1__25308_SHARP_,p2__25309_SHARP_)){
return p1__25308_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25313,map__25313__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25319){
var map__25320 = p__25319;
var map__25320__$1 = ((((!((map__25320 == null)))?((((map__25320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25320):map__25320);
var match_length = cljs.core.get.call(null,map__25320__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25320__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25315_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25315_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args25322 = [];
var len__17511__auto___25325 = arguments.length;
var i__17512__auto___25326 = (0);
while(true){
if((i__17512__auto___25326 < len__17511__auto___25325)){
args25322.push((arguments[i__17512__auto___25326]));

var G__25327 = (i__17512__auto___25326 + (1));
i__17512__auto___25326 = G__25327;
continue;
} else {
}
break;
}

var G__25324 = args25322.length;
switch (G__25324) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25322.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25329){
var map__25332 = p__25329;
var map__25332__$1 = ((((!((map__25332 == null)))?((((map__25332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25332):map__25332);
var f_data = map__25332__$1;
var file = cljs.core.get.call(null,map__25332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__25332__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16472__auto__ = request_url;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25334,files_msg){
var map__25357 = p__25334;
var map__25357__$1 = ((((!((map__25357 == null)))?((((map__25357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25357):map__25357);
var opts = map__25357__$1;
var on_cssload = cljs.core.get.call(null,map__25357__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25359_25379 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25360_25380 = null;
var count__25361_25381 = (0);
var i__25362_25382 = (0);
while(true){
if((i__25362_25382 < count__25361_25381)){
var f_25383 = cljs.core._nth.call(null,chunk__25360_25380,i__25362_25382);
figwheel.client.file_reloading.reload_css_file.call(null,f_25383);

var G__25384 = seq__25359_25379;
var G__25385 = chunk__25360_25380;
var G__25386 = count__25361_25381;
var G__25387 = (i__25362_25382 + (1));
seq__25359_25379 = G__25384;
chunk__25360_25380 = G__25385;
count__25361_25381 = G__25386;
i__25362_25382 = G__25387;
continue;
} else {
var temp__4425__auto___25388 = cljs.core.seq.call(null,seq__25359_25379);
if(temp__4425__auto___25388){
var seq__25359_25389__$1 = temp__4425__auto___25388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25359_25389__$1)){
var c__17256__auto___25390 = cljs.core.chunk_first.call(null,seq__25359_25389__$1);
var G__25391 = cljs.core.chunk_rest.call(null,seq__25359_25389__$1);
var G__25392 = c__17256__auto___25390;
var G__25393 = cljs.core.count.call(null,c__17256__auto___25390);
var G__25394 = (0);
seq__25359_25379 = G__25391;
chunk__25360_25380 = G__25392;
count__25361_25381 = G__25393;
i__25362_25382 = G__25394;
continue;
} else {
var f_25395 = cljs.core.first.call(null,seq__25359_25389__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25395);

var G__25396 = cljs.core.next.call(null,seq__25359_25389__$1);
var G__25397 = null;
var G__25398 = (0);
var G__25399 = (0);
seq__25359_25379 = G__25396;
chunk__25360_25380 = G__25397;
count__25361_25381 = G__25398;
i__25362_25382 = G__25399;
continue;
}
} else {
}
}
break;
}

var c__19655__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19655__auto__,map__25357,map__25357__$1,opts,on_cssload){
return (function (){
var f__19656__auto__ = (function (){var switch__19590__auto__ = ((function (c__19655__auto__,map__25357,map__25357__$1,opts,on_cssload){
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (1))){
var inst_25363 = cljs.core.async.timeout.call(null,(100));
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25369__$1,(2),inst_25363);
} else {
if((state_val_25370 === (2))){
var inst_25365 = (state_25369[(2)]);
var inst_25366 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25367 = on_cssload.call(null,inst_25366);
var state_25369__$1 = (function (){var statearr_25371 = state_25369;
(statearr_25371[(7)] = inst_25365);

return statearr_25371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
return null;
}
}
});})(c__19655__auto__,map__25357,map__25357__$1,opts,on_cssload))
;
return ((function (switch__19590__auto__,c__19655__auto__,map__25357,map__25357__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto____0 = (function (){
var statearr_25375 = [null,null,null,null,null,null,null,null];
(statearr_25375[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto__);

(statearr_25375[(1)] = (1));

return statearr_25375;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto____1 = (function (state_25369){
while(true){
var ret_value__19592__auto__ = (function (){try{while(true){
var result__19593__auto__ = switch__19590__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19593__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object)){
var ex__19594__auto__ = e25376;
var statearr_25377_25400 = state_25369;
(statearr_25377_25400[(5)] = ex__19594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25401 = state_25369;
state_25369 = G__25401;
continue;
} else {
return ret_value__19592__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19591__auto__;
})()
;})(switch__19590__auto__,c__19655__auto__,map__25357,map__25357__$1,opts,on_cssload))
})();
var state__19657__auto__ = (function (){var statearr_25378 = f__19656__auto__.call(null);
(statearr_25378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19655__auto__);

return statearr_25378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19657__auto__);
});})(c__19655__auto__,map__25357,map__25357__$1,opts,on_cssload))
);

return c__19655__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map