// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25196_SHARP_,p2__25197_SHARP_){
var and__16496__auto__ = p1__25196_SHARP_;
if(cljs.core.truth_(and__16496__auto__)){
return p2__25197_SHARP_;
} else {
return and__16496__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16508__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16508__auto__){
return or__16508__auto__;
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
if(cljs.core.truth_((function (){var or__16508__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16508__auto__){
return or__16508__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16508__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17425__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17425__auto__,method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25198){
var map__25199 = p__25198;
var map__25199__$1 = ((((!((map__25199 == null)))?((((map__25199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);
var file = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25201){
var map__25202 = p__25201;
var map__25202__$1 = ((((!((map__25202 == null)))?((((map__25202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25202):map__25202);
var namespace = cljs.core.get.call(null,map__25202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17425__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17425__auto__,method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25204){if((e25204 instanceof Error)){
var e = e25204;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25204;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args25205 = [];
var len__17566__auto___25208 = arguments.length;
var i__17567__auto___25209 = (0);
while(true){
if((i__17567__auto___25209 < len__17566__auto___25208)){
args25205.push((arguments[i__17567__auto___25209]));

var G__25210 = (i__17567__auto___25209 + (1));
i__17567__auto___25209 = G__25210;
continue;
} else {
}
break;
}

var G__25207 = args25205.length;
switch (G__25207) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25205.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25212,callback){
var map__25215 = p__25212;
var map__25215__$1 = ((((!((map__25215 == null)))?((((map__25215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25215):map__25215);
var file_msg = map__25215__$1;
var request_url = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25215,map__25215__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25215,map__25215__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25217){
var map__25220 = p__25217;
var map__25220__$1 = ((((!((map__25220 == null)))?((((map__25220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25220):map__25220);
var file_msg = map__25220__$1;
var namespace = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16508__auto__ = meta_data;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16496__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16496__auto__){
var or__16508__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
var or__16508__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16508__auto____$1)){
return or__16508__auto____$1;
} else {
var and__16496__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16496__auto____$1){
var or__16508__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16508__auto____$2){
return or__16508__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16496__auto____$1;
}
}
}
} else {
return and__16496__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25222,callback){
var map__25225 = p__25222;
var map__25225__$1 = ((((!((map__25225 == null)))?((((map__25225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25225):map__25225);
var file_msg = map__25225__$1;
var request_url = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19588__auto___25313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto___25313,out){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto___25313,out){
return (function (state_25295){
var state_val_25296 = (state_25295[(1)]);
if((state_val_25296 === (1))){
var inst_25273 = cljs.core.nth.call(null,files,(0),null);
var inst_25274 = cljs.core.nthnext.call(null,files,(1));
var inst_25275 = files;
var state_25295__$1 = (function (){var statearr_25297 = state_25295;
(statearr_25297[(7)] = inst_25273);

(statearr_25297[(8)] = inst_25274);

(statearr_25297[(9)] = inst_25275);

return statearr_25297;
})();
var statearr_25298_25314 = state_25295__$1;
(statearr_25298_25314[(2)] = null);

(statearr_25298_25314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (2))){
var inst_25278 = (state_25295[(10)]);
var inst_25275 = (state_25295[(9)]);
var inst_25278__$1 = cljs.core.nth.call(null,inst_25275,(0),null);
var inst_25279 = cljs.core.nthnext.call(null,inst_25275,(1));
var inst_25280 = (inst_25278__$1 == null);
var inst_25281 = cljs.core.not.call(null,inst_25280);
var state_25295__$1 = (function (){var statearr_25299 = state_25295;
(statearr_25299[(11)] = inst_25279);

(statearr_25299[(10)] = inst_25278__$1);

return statearr_25299;
})();
if(inst_25281){
var statearr_25300_25315 = state_25295__$1;
(statearr_25300_25315[(1)] = (4));

} else {
var statearr_25301_25316 = state_25295__$1;
(statearr_25301_25316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (3))){
var inst_25293 = (state_25295[(2)]);
var state_25295__$1 = state_25295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25295__$1,inst_25293);
} else {
if((state_val_25296 === (4))){
var inst_25278 = (state_25295[(10)]);
var inst_25283 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25278);
var state_25295__$1 = state_25295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25295__$1,(7),inst_25283);
} else {
if((state_val_25296 === (5))){
var inst_25289 = cljs.core.async.close_BANG_.call(null,out);
var state_25295__$1 = state_25295;
var statearr_25302_25317 = state_25295__$1;
(statearr_25302_25317[(2)] = inst_25289);

(statearr_25302_25317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (6))){
var inst_25291 = (state_25295[(2)]);
var state_25295__$1 = state_25295;
var statearr_25303_25318 = state_25295__$1;
(statearr_25303_25318[(2)] = inst_25291);

(statearr_25303_25318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25296 === (7))){
var inst_25279 = (state_25295[(11)]);
var inst_25285 = (state_25295[(2)]);
var inst_25286 = cljs.core.async.put_BANG_.call(null,out,inst_25285);
var inst_25275 = inst_25279;
var state_25295__$1 = (function (){var statearr_25304 = state_25295;
(statearr_25304[(12)] = inst_25286);

(statearr_25304[(9)] = inst_25275);

return statearr_25304;
})();
var statearr_25305_25319 = state_25295__$1;
(statearr_25305_25319[(2)] = null);

(statearr_25305_25319[(1)] = (2));


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
});})(c__19588__auto___25313,out))
;
return ((function (switch__19523__auto__,c__19588__auto___25313,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto____0 = (function (){
var statearr_25309 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25309[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto__);

(statearr_25309[(1)] = (1));

return statearr_25309;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto____1 = (function (state_25295){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_25295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e25310){if((e25310 instanceof Object)){
var ex__19527__auto__ = e25310;
var statearr_25311_25320 = state_25295;
(statearr_25311_25320[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25321 = state_25295;
state_25295 = G__25321;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto__ = function(state_25295){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto____1.call(this,state_25295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto___25313,out))
})();
var state__19590__auto__ = (function (){var statearr_25312 = f__19589__auto__.call(null);
(statearr_25312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto___25313);

return statearr_25312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto___25313,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25322,p__25323){
var map__25328 = p__25322;
var map__25328__$1 = ((((!((map__25328 == null)))?((((map__25328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25328):map__25328);
var opts = map__25328__$1;
var url_rewriter = cljs.core.get.call(null,map__25328__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25329 = p__25323;
var map__25329__$1 = ((((!((map__25329 == null)))?((((map__25329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25329):map__25329);
var file_msg = map__25329__$1;
var file = cljs.core.get.call(null,map__25329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25332,opts){
var map__25336 = p__25332;
var map__25336__$1 = ((((!((map__25336 == null)))?((((map__25336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25336):map__25336);
var eval_body__$1 = cljs.core.get.call(null,map__25336__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16496__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16496__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16496__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25338){var e = e25338;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25343,p__25344){
var map__25572 = p__25343;
var map__25572__$1 = ((((!((map__25572 == null)))?((((map__25572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25572):map__25572);
var opts = map__25572__$1;
var before_jsload = cljs.core.get.call(null,map__25572__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25572__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__25572__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__25573 = p__25344;
var map__25573__$1 = ((((!((map__25573 == null)))?((((map__25573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var msg = map__25573__$1;
var files = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (state_25714){
var state_val_25715 = (state_25714[(1)]);
if((state_val_25715 === (7))){
var inst_25587 = (state_25714[(7)]);
var inst_25590 = (state_25714[(8)]);
var inst_25588 = (state_25714[(9)]);
var inst_25589 = (state_25714[(10)]);
var inst_25595 = cljs.core._nth.call(null,inst_25588,inst_25590);
var inst_25596 = figwheel.client.file_reloading.eval_body.call(null,inst_25595,opts);
var inst_25597 = (inst_25590 + (1));
var tmp25716 = inst_25587;
var tmp25717 = inst_25588;
var tmp25718 = inst_25589;
var inst_25587__$1 = tmp25716;
var inst_25588__$1 = tmp25717;
var inst_25589__$1 = tmp25718;
var inst_25590__$1 = inst_25597;
var state_25714__$1 = (function (){var statearr_25719 = state_25714;
(statearr_25719[(7)] = inst_25587__$1);

(statearr_25719[(8)] = inst_25590__$1);

(statearr_25719[(9)] = inst_25588__$1);

(statearr_25719[(10)] = inst_25589__$1);

(statearr_25719[(11)] = inst_25596);

return statearr_25719;
})();
var statearr_25720_25799 = state_25714__$1;
(statearr_25720_25799[(2)] = null);

(statearr_25720_25799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (20))){
var inst_25639 = (state_25714[(12)]);
var inst_25637 = (state_25714[(13)]);
var inst_25633 = (state_25714[(14)]);
var inst_25632 = (state_25714[(15)]);
var inst_25636 = (state_25714[(16)]);
var inst_25642 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25644 = (function (){var all_files = inst_25632;
var files_SINGLEQUOTE_ = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25639,inst_25637,inst_25633,inst_25632,inst_25636,inst_25642,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (p__25643){
var map__25721 = p__25643;
var map__25721__$1 = ((((!((map__25721 == null)))?((((map__25721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25721):map__25721);
var namespace = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25639,inst_25637,inst_25633,inst_25632,inst_25636,inst_25642,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25645 = cljs.core.map.call(null,inst_25644,inst_25637);
var inst_25646 = cljs.core.pr_str.call(null,inst_25645);
var inst_25647 = figwheel.client.utils.log.call(null,inst_25646);
var inst_25648 = (function (){var all_files = inst_25632;
var files_SINGLEQUOTE_ = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25639,inst_25637,inst_25633,inst_25632,inst_25636,inst_25642,inst_25644,inst_25645,inst_25646,inst_25647,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25639,inst_25637,inst_25633,inst_25632,inst_25636,inst_25642,inst_25644,inst_25645,inst_25646,inst_25647,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25649 = setTimeout(inst_25648,(10));
var state_25714__$1 = (function (){var statearr_25723 = state_25714;
(statearr_25723[(17)] = inst_25647);

(statearr_25723[(18)] = inst_25642);

return statearr_25723;
})();
var statearr_25724_25800 = state_25714__$1;
(statearr_25724_25800[(2)] = inst_25649);

(statearr_25724_25800[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (27))){
var state_25714__$1 = state_25714;
var statearr_25725_25801 = state_25714__$1;
(statearr_25725_25801[(2)] = false);

(statearr_25725_25801[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (1))){
var inst_25579 = (state_25714[(19)]);
var inst_25576 = before_jsload.call(null,files);
var inst_25577 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25578 = (function (){return ((function (inst_25579,inst_25576,inst_25577,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (p1__25339_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25339_SHARP_);
});
;})(inst_25579,inst_25576,inst_25577,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25579__$1 = cljs.core.filter.call(null,inst_25578,files);
var inst_25580 = cljs.core.not_empty.call(null,inst_25579__$1);
var state_25714__$1 = (function (){var statearr_25726 = state_25714;
(statearr_25726[(20)] = inst_25577);

(statearr_25726[(19)] = inst_25579__$1);

(statearr_25726[(21)] = inst_25576);

return statearr_25726;
})();
if(cljs.core.truth_(inst_25580)){
var statearr_25727_25802 = state_25714__$1;
(statearr_25727_25802[(1)] = (2));

} else {
var statearr_25728_25803 = state_25714__$1;
(statearr_25728_25803[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (24))){
var state_25714__$1 = state_25714;
var statearr_25729_25804 = state_25714__$1;
(statearr_25729_25804[(2)] = null);

(statearr_25729_25804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (39))){
var state_25714__$1 = state_25714;
var statearr_25730_25805 = state_25714__$1;
(statearr_25730_25805[(2)] = null);

(statearr_25730_25805[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (4))){
var inst_25624 = (state_25714[(2)]);
var inst_25625 = (function (){return ((function (inst_25624,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (p1__25340_SHARP_){
var and__16496__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25340_SHARP_);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25340_SHARP_));
} else {
return and__16496__auto__;
}
});
;})(inst_25624,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25626 = cljs.core.filter.call(null,inst_25625,files);
var state_25714__$1 = (function (){var statearr_25731 = state_25714;
(statearr_25731[(22)] = inst_25624);

(statearr_25731[(23)] = inst_25626);

return statearr_25731;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25732_25806 = state_25714__$1;
(statearr_25732_25806[(1)] = (16));

} else {
var statearr_25733_25807 = state_25714__$1;
(statearr_25733_25807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (15))){
var inst_25614 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25734_25808 = state_25714__$1;
(statearr_25734_25808[(2)] = inst_25614);

(statearr_25734_25808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (21))){
var state_25714__$1 = state_25714;
var statearr_25735_25809 = state_25714__$1;
(statearr_25735_25809[(2)] = null);

(statearr_25735_25809[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (31))){
var inst_25671 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25736_25810 = state_25714__$1;
(statearr_25736_25810[(2)] = inst_25671);

(statearr_25736_25810[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (32))){
var inst_25659 = (state_25714[(24)]);
var inst_25676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25659);
var state_25714__$1 = state_25714;
var statearr_25737_25811 = state_25714__$1;
(statearr_25737_25811[(2)] = inst_25676);

(statearr_25737_25811[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (40))){
var inst_25682 = (state_25714[(25)]);
var inst_25700 = (state_25714[(2)]);
var inst_25701 = cljs.core.not_empty.call(null,inst_25682);
var state_25714__$1 = (function (){var statearr_25738 = state_25714;
(statearr_25738[(26)] = inst_25700);

return statearr_25738;
})();
if(cljs.core.truth_(inst_25701)){
var statearr_25739_25812 = state_25714__$1;
(statearr_25739_25812[(1)] = (41));

} else {
var statearr_25740_25813 = state_25714__$1;
(statearr_25740_25813[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (33))){
var inst_25659 = (state_25714[(24)]);
var state_25714__$1 = state_25714;
var statearr_25741_25814 = state_25714__$1;
(statearr_25741_25814[(2)] = inst_25659);

(statearr_25741_25814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (13))){
var inst_25600 = (state_25714[(27)]);
var inst_25604 = cljs.core.chunk_first.call(null,inst_25600);
var inst_25605 = cljs.core.chunk_rest.call(null,inst_25600);
var inst_25606 = cljs.core.count.call(null,inst_25604);
var inst_25587 = inst_25605;
var inst_25588 = inst_25604;
var inst_25589 = inst_25606;
var inst_25590 = (0);
var state_25714__$1 = (function (){var statearr_25742 = state_25714;
(statearr_25742[(7)] = inst_25587);

(statearr_25742[(8)] = inst_25590);

(statearr_25742[(9)] = inst_25588);

(statearr_25742[(10)] = inst_25589);

return statearr_25742;
})();
var statearr_25743_25815 = state_25714__$1;
(statearr_25743_25815[(2)] = null);

(statearr_25743_25815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (22))){
var inst_25639 = (state_25714[(12)]);
var inst_25652 = (state_25714[(2)]);
var inst_25653 = cljs.core.not_empty.call(null,inst_25639);
var state_25714__$1 = (function (){var statearr_25744 = state_25714;
(statearr_25744[(28)] = inst_25652);

return statearr_25744;
})();
if(cljs.core.truth_(inst_25653)){
var statearr_25745_25816 = state_25714__$1;
(statearr_25745_25816[(1)] = (23));

} else {
var statearr_25746_25817 = state_25714__$1;
(statearr_25746_25817[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (36))){
var state_25714__$1 = state_25714;
var statearr_25747_25818 = state_25714__$1;
(statearr_25747_25818[(2)] = null);

(statearr_25747_25818[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (41))){
var inst_25682 = (state_25714[(25)]);
var inst_25703 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25682);
var inst_25704 = cljs.core.pr_str.call(null,inst_25703);
var inst_25705 = [cljs.core.str("not required: "),cljs.core.str(inst_25704)].join('');
var inst_25706 = figwheel.client.utils.log.call(null,inst_25705);
var state_25714__$1 = state_25714;
var statearr_25748_25819 = state_25714__$1;
(statearr_25748_25819[(2)] = inst_25706);

(statearr_25748_25819[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (43))){
var inst_25709 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25749_25820 = state_25714__$1;
(statearr_25749_25820[(2)] = inst_25709);

(statearr_25749_25820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (29))){
var state_25714__$1 = state_25714;
var statearr_25750_25821 = state_25714__$1;
(statearr_25750_25821[(2)] = true);

(statearr_25750_25821[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (6))){
var inst_25621 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25751_25822 = state_25714__$1;
(statearr_25751_25822[(2)] = inst_25621);

(statearr_25751_25822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (28))){
var inst_25674 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25674)){
var statearr_25752_25823 = state_25714__$1;
(statearr_25752_25823[(1)] = (32));

} else {
var statearr_25753_25824 = state_25714__$1;
(statearr_25753_25824[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (25))){
var inst_25712 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25714__$1,inst_25712);
} else {
if((state_val_25715 === (34))){
var inst_25680 = (state_25714[(29)]);
var inst_25679 = (state_25714[(2)]);
var inst_25680__$1 = cljs.core.get.call(null,inst_25679,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25681 = cljs.core.get.call(null,inst_25679,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_25682 = cljs.core.get.call(null,inst_25679,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25683 = cljs.core.not_empty.call(null,inst_25680__$1);
var state_25714__$1 = (function (){var statearr_25754 = state_25714;
(statearr_25754[(29)] = inst_25680__$1);

(statearr_25754[(25)] = inst_25682);

(statearr_25754[(30)] = inst_25681);

return statearr_25754;
})();
if(cljs.core.truth_(inst_25683)){
var statearr_25755_25825 = state_25714__$1;
(statearr_25755_25825[(1)] = (35));

} else {
var statearr_25756_25826 = state_25714__$1;
(statearr_25756_25826[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (17))){
var inst_25626 = (state_25714[(23)]);
var state_25714__$1 = state_25714;
var statearr_25757_25827 = state_25714__$1;
(statearr_25757_25827[(2)] = inst_25626);

(statearr_25757_25827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (3))){
var state_25714__$1 = state_25714;
var statearr_25758_25828 = state_25714__$1;
(statearr_25758_25828[(2)] = null);

(statearr_25758_25828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (12))){
var inst_25617 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25759_25829 = state_25714__$1;
(statearr_25759_25829[(2)] = inst_25617);

(statearr_25759_25829[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (2))){
var inst_25579 = (state_25714[(19)]);
var inst_25586 = cljs.core.seq.call(null,inst_25579);
var inst_25587 = inst_25586;
var inst_25588 = null;
var inst_25589 = (0);
var inst_25590 = (0);
var state_25714__$1 = (function (){var statearr_25760 = state_25714;
(statearr_25760[(7)] = inst_25587);

(statearr_25760[(8)] = inst_25590);

(statearr_25760[(9)] = inst_25588);

(statearr_25760[(10)] = inst_25589);

return statearr_25760;
})();
var statearr_25761_25830 = state_25714__$1;
(statearr_25761_25830[(2)] = null);

(statearr_25761_25830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (23))){
var inst_25639 = (state_25714[(12)]);
var inst_25637 = (state_25714[(13)]);
var inst_25633 = (state_25714[(14)]);
var inst_25632 = (state_25714[(15)]);
var inst_25659 = (state_25714[(24)]);
var inst_25636 = (state_25714[(16)]);
var inst_25655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25658 = (function (){var all_files = inst_25632;
var files_SINGLEQUOTE_ = inst_25633;
var res_SINGLEQUOTE_ = inst_25636;
var res = inst_25637;
var files_not_loaded = inst_25639;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25639,inst_25637,inst_25633,inst_25632,inst_25659,inst_25636,inst_25655,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (p__25657){
var map__25762 = p__25657;
var map__25762__$1 = ((((!((map__25762 == null)))?((((map__25762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25762):map__25762);
var meta_data = cljs.core.get.call(null,map__25762__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_25639,inst_25637,inst_25633,inst_25632,inst_25659,inst_25636,inst_25655,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25659__$1 = cljs.core.group_by.call(null,inst_25658,inst_25639);
var inst_25661 = (inst_25659__$1 == null);
var inst_25662 = cljs.core.not.call(null,inst_25661);
var state_25714__$1 = (function (){var statearr_25764 = state_25714;
(statearr_25764[(31)] = inst_25655);

(statearr_25764[(24)] = inst_25659__$1);

return statearr_25764;
})();
if(inst_25662){
var statearr_25765_25831 = state_25714__$1;
(statearr_25765_25831[(1)] = (26));

} else {
var statearr_25766_25832 = state_25714__$1;
(statearr_25766_25832[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (35))){
var inst_25680 = (state_25714[(29)]);
var inst_25685 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25680);
var inst_25686 = cljs.core.pr_str.call(null,inst_25685);
var inst_25687 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25686)].join('');
var inst_25688 = figwheel.client.utils.log.call(null,inst_25687);
var state_25714__$1 = state_25714;
var statearr_25767_25833 = state_25714__$1;
(statearr_25767_25833[(2)] = inst_25688);

(statearr_25767_25833[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (19))){
var inst_25637 = (state_25714[(13)]);
var inst_25633 = (state_25714[(14)]);
var inst_25632 = (state_25714[(15)]);
var inst_25636 = (state_25714[(16)]);
var inst_25636__$1 = (state_25714[(2)]);
var inst_25637__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25636__$1);
var inst_25638 = (function (){var all_files = inst_25632;
var files_SINGLEQUOTE_ = inst_25633;
var res_SINGLEQUOTE_ = inst_25636__$1;
var res = inst_25637__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25637,inst_25633,inst_25632,inst_25636,inst_25636__$1,inst_25637__$1,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (p1__25342_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25342_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_25637,inst_25633,inst_25632,inst_25636,inst_25636__$1,inst_25637__$1,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25639 = cljs.core.filter.call(null,inst_25638,inst_25636__$1);
var inst_25640 = cljs.core.not_empty.call(null,inst_25637__$1);
var state_25714__$1 = (function (){var statearr_25768 = state_25714;
(statearr_25768[(12)] = inst_25639);

(statearr_25768[(13)] = inst_25637__$1);

(statearr_25768[(16)] = inst_25636__$1);

return statearr_25768;
})();
if(cljs.core.truth_(inst_25640)){
var statearr_25769_25834 = state_25714__$1;
(statearr_25769_25834[(1)] = (20));

} else {
var statearr_25770_25835 = state_25714__$1;
(statearr_25770_25835[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (11))){
var state_25714__$1 = state_25714;
var statearr_25771_25836 = state_25714__$1;
(statearr_25771_25836[(2)] = null);

(statearr_25771_25836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (9))){
var inst_25619 = (state_25714[(2)]);
var state_25714__$1 = state_25714;
var statearr_25772_25837 = state_25714__$1;
(statearr_25772_25837[(2)] = inst_25619);

(statearr_25772_25837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (5))){
var inst_25590 = (state_25714[(8)]);
var inst_25589 = (state_25714[(10)]);
var inst_25592 = (inst_25590 < inst_25589);
var inst_25593 = inst_25592;
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25593)){
var statearr_25773_25838 = state_25714__$1;
(statearr_25773_25838[(1)] = (7));

} else {
var statearr_25774_25839 = state_25714__$1;
(statearr_25774_25839[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (14))){
var inst_25600 = (state_25714[(27)]);
var inst_25609 = cljs.core.first.call(null,inst_25600);
var inst_25610 = figwheel.client.file_reloading.eval_body.call(null,inst_25609,opts);
var inst_25611 = cljs.core.next.call(null,inst_25600);
var inst_25587 = inst_25611;
var inst_25588 = null;
var inst_25589 = (0);
var inst_25590 = (0);
var state_25714__$1 = (function (){var statearr_25775 = state_25714;
(statearr_25775[(7)] = inst_25587);

(statearr_25775[(8)] = inst_25590);

(statearr_25775[(32)] = inst_25610);

(statearr_25775[(9)] = inst_25588);

(statearr_25775[(10)] = inst_25589);

return statearr_25775;
})();
var statearr_25776_25840 = state_25714__$1;
(statearr_25776_25840[(2)] = null);

(statearr_25776_25840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (26))){
var inst_25659 = (state_25714[(24)]);
var inst_25664 = inst_25659.cljs$lang$protocol_mask$partition0$;
var inst_25665 = (inst_25664 & (64));
var inst_25666 = inst_25659.cljs$core$ISeq$;
var inst_25667 = (inst_25665) || (inst_25666);
var state_25714__$1 = state_25714;
if(cljs.core.truth_(inst_25667)){
var statearr_25777_25841 = state_25714__$1;
(statearr_25777_25841[(1)] = (29));

} else {
var statearr_25778_25842 = state_25714__$1;
(statearr_25778_25842[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (16))){
var inst_25626 = (state_25714[(23)]);
var inst_25628 = (function (){var all_files = inst_25626;
return ((function (all_files,inst_25626,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function (p1__25341_SHARP_){
return cljs.core.update_in.call(null,p1__25341_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_25626,state_val_25715,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var inst_25629 = cljs.core.map.call(null,inst_25628,inst_25626);
var state_25714__$1 = state_25714;
var statearr_25779_25843 = state_25714__$1;
(statearr_25779_25843[(2)] = inst_25629);

(statearr_25779_25843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (38))){
var inst_25681 = (state_25714[(30)]);
var inst_25694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25681);
var inst_25695 = cljs.core.pr_str.call(null,inst_25694);
var inst_25696 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25695)].join('');
var inst_25697 = figwheel.client.utils.log.call(null,inst_25696);
var state_25714__$1 = state_25714;
var statearr_25780_25844 = state_25714__$1;
(statearr_25780_25844[(2)] = inst_25697);

(statearr_25780_25844[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (30))){
var state_25714__$1 = state_25714;
var statearr_25781_25845 = state_25714__$1;
(statearr_25781_25845[(2)] = false);

(statearr_25781_25845[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (10))){
var inst_25600 = (state_25714[(27)]);
var inst_25602 = cljs.core.chunked_seq_QMARK_.call(null,inst_25600);
var state_25714__$1 = state_25714;
if(inst_25602){
var statearr_25782_25846 = state_25714__$1;
(statearr_25782_25846[(1)] = (13));

} else {
var statearr_25783_25847 = state_25714__$1;
(statearr_25783_25847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (18))){
var inst_25633 = (state_25714[(14)]);
var inst_25632 = (state_25714[(15)]);
var inst_25632__$1 = (state_25714[(2)]);
var inst_25633__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_25632__$1);
var inst_25634 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25633__$1);
var state_25714__$1 = (function (){var statearr_25784 = state_25714;
(statearr_25784[(14)] = inst_25633__$1);

(statearr_25784[(15)] = inst_25632__$1);

return statearr_25784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25714__$1,(19),inst_25634);
} else {
if((state_val_25715 === (42))){
var state_25714__$1 = state_25714;
var statearr_25785_25848 = state_25714__$1;
(statearr_25785_25848[(2)] = null);

(statearr_25785_25848[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (37))){
var inst_25681 = (state_25714[(30)]);
var inst_25691 = (state_25714[(2)]);
var inst_25692 = cljs.core.not_empty.call(null,inst_25681);
var state_25714__$1 = (function (){var statearr_25786 = state_25714;
(statearr_25786[(33)] = inst_25691);

return statearr_25786;
})();
if(cljs.core.truth_(inst_25692)){
var statearr_25787_25849 = state_25714__$1;
(statearr_25787_25849[(1)] = (38));

} else {
var statearr_25788_25850 = state_25714__$1;
(statearr_25788_25850[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25715 === (8))){
var inst_25600 = (state_25714[(27)]);
var inst_25587 = (state_25714[(7)]);
var inst_25600__$1 = cljs.core.seq.call(null,inst_25587);
var state_25714__$1 = (function (){var statearr_25789 = state_25714;
(statearr_25789[(27)] = inst_25600__$1);

return statearr_25789;
})();
if(inst_25600__$1){
var statearr_25790_25851 = state_25714__$1;
(statearr_25790_25851[(1)] = (10));

} else {
var statearr_25791_25852 = state_25714__$1;
(statearr_25791_25852[(1)] = (11));

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
});})(c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
;
return ((function (switch__19523__auto__,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto____0 = (function (){
var statearr_25795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25795[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto__);

(statearr_25795[(1)] = (1));

return statearr_25795;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto____1 = (function (state_25714){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_25714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e25796){if((e25796 instanceof Object)){
var ex__19527__auto__ = e25796;
var statearr_25797_25853 = state_25714;
(statearr_25797_25853[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25854 = state_25714;
state_25714 = G__25854;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto__ = function(state_25714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto____1.call(this,state_25714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
})();
var state__19590__auto__ = (function (){var statearr_25798 = f__19589__auto__.call(null);
(statearr_25798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_25798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__,map__25572,map__25572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__25573,map__25573__$1,msg,files))
);

return c__19588__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25857,link){
var map__25860 = p__25857;
var map__25860__$1 = ((((!((map__25860 == null)))?((((map__25860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25860):map__25860);
var file = cljs.core.get.call(null,map__25860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25860,map__25860__$1,file){
return (function (p1__25855_SHARP_,p2__25856_SHARP_){
if(cljs.core._EQ_.call(null,p1__25855_SHARP_,p2__25856_SHARP_)){
return p1__25855_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25860,map__25860__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25866){
var map__25867 = p__25866;
var map__25867__$1 = ((((!((map__25867 == null)))?((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25867):map__25867);
var match_length = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25867__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25862_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25862_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25869 = [];
var len__17566__auto___25872 = arguments.length;
var i__17567__auto___25873 = (0);
while(true){
if((i__17567__auto___25873 < len__17566__auto___25872)){
args25869.push((arguments[i__17567__auto___25873]));

var G__25874 = (i__17567__auto___25873 + (1));
i__17567__auto___25873 = G__25874;
continue;
} else {
}
break;
}

var G__25871 = args25869.length;
switch (G__25871) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25869.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25876){
var map__25879 = p__25876;
var map__25879__$1 = ((((!((map__25879 == null)))?((((map__25879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25879):map__25879);
var f_data = map__25879__$1;
var file = cljs.core.get.call(null,map__25879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__25879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16508__auto__ = request_url;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25881,files_msg){
var map__25904 = p__25881;
var map__25904__$1 = ((((!((map__25904 == null)))?((((map__25904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25904):map__25904);
var opts = map__25904__$1;
var on_cssload = cljs.core.get.call(null,map__25904__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25906_25926 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25907_25927 = null;
var count__25908_25928 = (0);
var i__25909_25929 = (0);
while(true){
if((i__25909_25929 < count__25908_25928)){
var f_25930 = cljs.core._nth.call(null,chunk__25907_25927,i__25909_25929);
figwheel.client.file_reloading.reload_css_file.call(null,f_25930);

var G__25931 = seq__25906_25926;
var G__25932 = chunk__25907_25927;
var G__25933 = count__25908_25928;
var G__25934 = (i__25909_25929 + (1));
seq__25906_25926 = G__25931;
chunk__25907_25927 = G__25932;
count__25908_25928 = G__25933;
i__25909_25929 = G__25934;
continue;
} else {
var temp__4425__auto___25935 = cljs.core.seq.call(null,seq__25906_25926);
if(temp__4425__auto___25935){
var seq__25906_25936__$1 = temp__4425__auto___25935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25906_25936__$1)){
var c__17311__auto___25937 = cljs.core.chunk_first.call(null,seq__25906_25936__$1);
var G__25938 = cljs.core.chunk_rest.call(null,seq__25906_25936__$1);
var G__25939 = c__17311__auto___25937;
var G__25940 = cljs.core.count.call(null,c__17311__auto___25937);
var G__25941 = (0);
seq__25906_25926 = G__25938;
chunk__25907_25927 = G__25939;
count__25908_25928 = G__25940;
i__25909_25929 = G__25941;
continue;
} else {
var f_25942 = cljs.core.first.call(null,seq__25906_25936__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25942);

var G__25943 = cljs.core.next.call(null,seq__25906_25936__$1);
var G__25944 = null;
var G__25945 = (0);
var G__25946 = (0);
seq__25906_25926 = G__25943;
chunk__25907_25927 = G__25944;
count__25908_25928 = G__25945;
i__25909_25929 = G__25946;
continue;
}
} else {
}
}
break;
}

var c__19588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19588__auto__,map__25904,map__25904__$1,opts,on_cssload){
return (function (){
var f__19589__auto__ = (function (){var switch__19523__auto__ = ((function (c__19588__auto__,map__25904,map__25904__$1,opts,on_cssload){
return (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (1))){
var inst_25910 = cljs.core.async.timeout.call(null,(100));
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(2),inst_25910);
} else {
if((state_val_25917 === (2))){
var inst_25912 = (state_25916[(2)]);
var inst_25913 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25914 = on_cssload.call(null,inst_25913);
var state_25916__$1 = (function (){var statearr_25918 = state_25916;
(statearr_25918[(7)] = inst_25912);

return statearr_25918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
return null;
}
}
});})(c__19588__auto__,map__25904,map__25904__$1,opts,on_cssload))
;
return ((function (switch__19523__auto__,c__19588__auto__,map__25904,map__25904__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto____0 = (function (){
var statearr_25922 = [null,null,null,null,null,null,null,null];
(statearr_25922[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto__);

(statearr_25922[(1)] = (1));

return statearr_25922;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto____1 = (function (state_25916){
while(true){
var ret_value__19525__auto__ = (function (){try{while(true){
var result__19526__auto__ = switch__19523__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19526__auto__;
}
break;
}
}catch (e25923){if((e25923 instanceof Object)){
var ex__19527__auto__ = e25923;
var statearr_25924_25947 = state_25916;
(statearr_25924_25947[(5)] = ex__19527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25948 = state_25916;
state_25916 = G__25948;
continue;
} else {
return ret_value__19525__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19524__auto__;
})()
;})(switch__19523__auto__,c__19588__auto__,map__25904,map__25904__$1,opts,on_cssload))
})();
var state__19590__auto__ = (function (){var statearr_25925 = f__19589__auto__.call(null);
(statearr_25925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19588__auto__);

return statearr_25925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19590__auto__);
});})(c__19588__auto__,map__25904,map__25904__$1,opts,on_cssload))
);

return c__19588__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map