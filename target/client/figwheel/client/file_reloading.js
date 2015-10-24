// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16305__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16305__auto__){
return or__16305__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16305__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26091_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26091_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26096 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26097 = null;
var count__26098 = (0);
var i__26099 = (0);
while(true){
if((i__26099 < count__26098)){
var n = cljs.core._nth.call(null,chunk__26097,i__26099);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26100 = seq__26096;
var G__26101 = chunk__26097;
var G__26102 = count__26098;
var G__26103 = (i__26099 + (1));
seq__26096 = G__26100;
chunk__26097 = G__26101;
count__26098 = G__26102;
i__26099 = G__26103;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26096);
if(temp__4425__auto__){
var seq__26096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26096__$1)){
var c__17108__auto__ = cljs.core.chunk_first.call(null,seq__26096__$1);
var G__26104 = cljs.core.chunk_rest.call(null,seq__26096__$1);
var G__26105 = c__17108__auto__;
var G__26106 = cljs.core.count.call(null,c__17108__auto__);
var G__26107 = (0);
seq__26096 = G__26104;
chunk__26097 = G__26105;
count__26098 = G__26106;
i__26099 = G__26107;
continue;
} else {
var n = cljs.core.first.call(null,seq__26096__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26108 = cljs.core.next.call(null,seq__26096__$1);
var G__26109 = null;
var G__26110 = (0);
var G__26111 = (0);
seq__26096 = G__26108;
chunk__26097 = G__26109;
count__26098 = G__26110;
i__26099 = G__26111;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26150_26157 = cljs.core.seq.call(null,deps);
var chunk__26151_26158 = null;
var count__26152_26159 = (0);
var i__26153_26160 = (0);
while(true){
if((i__26153_26160 < count__26152_26159)){
var dep_26161 = cljs.core._nth.call(null,chunk__26151_26158,i__26153_26160);
topo_sort_helper_STAR_.call(null,dep_26161,(depth + (1)),state);

var G__26162 = seq__26150_26157;
var G__26163 = chunk__26151_26158;
var G__26164 = count__26152_26159;
var G__26165 = (i__26153_26160 + (1));
seq__26150_26157 = G__26162;
chunk__26151_26158 = G__26163;
count__26152_26159 = G__26164;
i__26153_26160 = G__26165;
continue;
} else {
var temp__4425__auto___26166 = cljs.core.seq.call(null,seq__26150_26157);
if(temp__4425__auto___26166){
var seq__26150_26167__$1 = temp__4425__auto___26166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26150_26167__$1)){
var c__17108__auto___26168 = cljs.core.chunk_first.call(null,seq__26150_26167__$1);
var G__26169 = cljs.core.chunk_rest.call(null,seq__26150_26167__$1);
var G__26170 = c__17108__auto___26168;
var G__26171 = cljs.core.count.call(null,c__17108__auto___26168);
var G__26172 = (0);
seq__26150_26157 = G__26169;
chunk__26151_26158 = G__26170;
count__26152_26159 = G__26171;
i__26153_26160 = G__26172;
continue;
} else {
var dep_26173 = cljs.core.first.call(null,seq__26150_26167__$1);
topo_sort_helper_STAR_.call(null,dep_26173,(depth + (1)),state);

var G__26174 = cljs.core.next.call(null,seq__26150_26167__$1);
var G__26175 = null;
var G__26176 = (0);
var G__26177 = (0);
seq__26150_26157 = G__26174;
chunk__26151_26158 = G__26175;
count__26152_26159 = G__26176;
i__26153_26160 = G__26177;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26154){
var vec__26156 = p__26154;
var x = cljs.core.nth.call(null,vec__26156,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26156,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26156,x,xs,get_deps__$1){
return (function (p1__26112_SHARP_){
return clojure.set.difference.call(null,p1__26112_SHARP_,x);
});})(vec__26156,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26190 = cljs.core.seq.call(null,provides);
var chunk__26191 = null;
var count__26192 = (0);
var i__26193 = (0);
while(true){
if((i__26193 < count__26192)){
var prov = cljs.core._nth.call(null,chunk__26191,i__26193);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26194_26202 = cljs.core.seq.call(null,requires);
var chunk__26195_26203 = null;
var count__26196_26204 = (0);
var i__26197_26205 = (0);
while(true){
if((i__26197_26205 < count__26196_26204)){
var req_26206 = cljs.core._nth.call(null,chunk__26195_26203,i__26197_26205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26206,prov);

var G__26207 = seq__26194_26202;
var G__26208 = chunk__26195_26203;
var G__26209 = count__26196_26204;
var G__26210 = (i__26197_26205 + (1));
seq__26194_26202 = G__26207;
chunk__26195_26203 = G__26208;
count__26196_26204 = G__26209;
i__26197_26205 = G__26210;
continue;
} else {
var temp__4425__auto___26211 = cljs.core.seq.call(null,seq__26194_26202);
if(temp__4425__auto___26211){
var seq__26194_26212__$1 = temp__4425__auto___26211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26194_26212__$1)){
var c__17108__auto___26213 = cljs.core.chunk_first.call(null,seq__26194_26212__$1);
var G__26214 = cljs.core.chunk_rest.call(null,seq__26194_26212__$1);
var G__26215 = c__17108__auto___26213;
var G__26216 = cljs.core.count.call(null,c__17108__auto___26213);
var G__26217 = (0);
seq__26194_26202 = G__26214;
chunk__26195_26203 = G__26215;
count__26196_26204 = G__26216;
i__26197_26205 = G__26217;
continue;
} else {
var req_26218 = cljs.core.first.call(null,seq__26194_26212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26218,prov);

var G__26219 = cljs.core.next.call(null,seq__26194_26212__$1);
var G__26220 = null;
var G__26221 = (0);
var G__26222 = (0);
seq__26194_26202 = G__26219;
chunk__26195_26203 = G__26220;
count__26196_26204 = G__26221;
i__26197_26205 = G__26222;
continue;
}
} else {
}
}
break;
}

var G__26223 = seq__26190;
var G__26224 = chunk__26191;
var G__26225 = count__26192;
var G__26226 = (i__26193 + (1));
seq__26190 = G__26223;
chunk__26191 = G__26224;
count__26192 = G__26225;
i__26193 = G__26226;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26190);
if(temp__4425__auto__){
var seq__26190__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26190__$1)){
var c__17108__auto__ = cljs.core.chunk_first.call(null,seq__26190__$1);
var G__26227 = cljs.core.chunk_rest.call(null,seq__26190__$1);
var G__26228 = c__17108__auto__;
var G__26229 = cljs.core.count.call(null,c__17108__auto__);
var G__26230 = (0);
seq__26190 = G__26227;
chunk__26191 = G__26228;
count__26192 = G__26229;
i__26193 = G__26230;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26190__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26198_26231 = cljs.core.seq.call(null,requires);
var chunk__26199_26232 = null;
var count__26200_26233 = (0);
var i__26201_26234 = (0);
while(true){
if((i__26201_26234 < count__26200_26233)){
var req_26235 = cljs.core._nth.call(null,chunk__26199_26232,i__26201_26234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26235,prov);

var G__26236 = seq__26198_26231;
var G__26237 = chunk__26199_26232;
var G__26238 = count__26200_26233;
var G__26239 = (i__26201_26234 + (1));
seq__26198_26231 = G__26236;
chunk__26199_26232 = G__26237;
count__26200_26233 = G__26238;
i__26201_26234 = G__26239;
continue;
} else {
var temp__4425__auto___26240__$1 = cljs.core.seq.call(null,seq__26198_26231);
if(temp__4425__auto___26240__$1){
var seq__26198_26241__$1 = temp__4425__auto___26240__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26198_26241__$1)){
var c__17108__auto___26242 = cljs.core.chunk_first.call(null,seq__26198_26241__$1);
var G__26243 = cljs.core.chunk_rest.call(null,seq__26198_26241__$1);
var G__26244 = c__17108__auto___26242;
var G__26245 = cljs.core.count.call(null,c__17108__auto___26242);
var G__26246 = (0);
seq__26198_26231 = G__26243;
chunk__26199_26232 = G__26244;
count__26200_26233 = G__26245;
i__26201_26234 = G__26246;
continue;
} else {
var req_26247 = cljs.core.first.call(null,seq__26198_26241__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26247,prov);

var G__26248 = cljs.core.next.call(null,seq__26198_26241__$1);
var G__26249 = null;
var G__26250 = (0);
var G__26251 = (0);
seq__26198_26231 = G__26248;
chunk__26199_26232 = G__26249;
count__26200_26233 = G__26250;
i__26201_26234 = G__26251;
continue;
}
} else {
}
}
break;
}

var G__26252 = cljs.core.next.call(null,seq__26190__$1);
var G__26253 = null;
var G__26254 = (0);
var G__26255 = (0);
seq__26190 = G__26252;
chunk__26191 = G__26253;
count__26192 = G__26254;
i__26193 = G__26255;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26260_26264 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26261_26265 = null;
var count__26262_26266 = (0);
var i__26263_26267 = (0);
while(true){
if((i__26263_26267 < count__26262_26266)){
var ns_26268 = cljs.core._nth.call(null,chunk__26261_26265,i__26263_26267);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26268);

var G__26269 = seq__26260_26264;
var G__26270 = chunk__26261_26265;
var G__26271 = count__26262_26266;
var G__26272 = (i__26263_26267 + (1));
seq__26260_26264 = G__26269;
chunk__26261_26265 = G__26270;
count__26262_26266 = G__26271;
i__26263_26267 = G__26272;
continue;
} else {
var temp__4425__auto___26273 = cljs.core.seq.call(null,seq__26260_26264);
if(temp__4425__auto___26273){
var seq__26260_26274__$1 = temp__4425__auto___26273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26260_26274__$1)){
var c__17108__auto___26275 = cljs.core.chunk_first.call(null,seq__26260_26274__$1);
var G__26276 = cljs.core.chunk_rest.call(null,seq__26260_26274__$1);
var G__26277 = c__17108__auto___26275;
var G__26278 = cljs.core.count.call(null,c__17108__auto___26275);
var G__26279 = (0);
seq__26260_26264 = G__26276;
chunk__26261_26265 = G__26277;
count__26262_26266 = G__26278;
i__26263_26267 = G__26279;
continue;
} else {
var ns_26280 = cljs.core.first.call(null,seq__26260_26274__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26280);

var G__26281 = cljs.core.next.call(null,seq__26260_26274__$1);
var G__26282 = null;
var G__26283 = (0);
var G__26284 = (0);
seq__26260_26264 = G__26281;
chunk__26261_26265 = G__26282;
count__26262_26266 = G__26283;
i__26263_26267 = G__26284;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16305__auto__ = goog.require__;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26285__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26286__i = 0, G__26286__a = new Array(arguments.length -  0);
while (G__26286__i < G__26286__a.length) {G__26286__a[G__26286__i] = arguments[G__26286__i + 0]; ++G__26286__i;}
  args = new cljs.core.IndexedSeq(G__26286__a,0);
} 
return G__26285__delegate.call(this,args);};
G__26285.cljs$lang$maxFixedArity = 0;
G__26285.cljs$lang$applyTo = (function (arglist__26287){
var args = cljs.core.seq(arglist__26287);
return G__26285__delegate(args);
});
G__26285.cljs$core$IFn$_invoke$arity$variadic = G__26285__delegate;
return G__26285;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26289 = cljs.core._EQ_;
var expr__26290 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26289.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26290))){
var path_parts = ((function (pred__26289,expr__26290){
return (function (p1__26288_SHARP_){
return clojure.string.split.call(null,p1__26288_SHARP_,/[\/\\]/);
});})(pred__26289,expr__26290))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26289,expr__26290){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e26292){if((e26292 instanceof Error)){
var e = e26292;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26292;

}
}})());
});
;})(path_parts,sep,root,pred__26289,expr__26290))
} else {
if(cljs.core.truth_(pred__26289.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26290))){
return ((function (pred__26289,expr__26290){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26289,expr__26290){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26289,expr__26290))
);

return deferred.addErrback(((function (deferred,pred__26289,expr__26290){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26289,expr__26290))
);
});
;})(pred__26289,expr__26290))
} else {
return ((function (pred__26289,expr__26290){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26289,expr__26290))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26293,callback){
var map__26296 = p__26293;
var map__26296__$1 = ((((!((map__26296 == null)))?((((map__26296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26296):map__26296);
var file_msg = map__26296__$1;
var request_url = cljs.core.get.call(null,map__26296__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26296,map__26296__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26296,map__26296__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__){
return (function (state_26320){
var state_val_26321 = (state_26320[(1)]);
if((state_val_26321 === (7))){
var inst_26316 = (state_26320[(2)]);
var state_26320__$1 = state_26320;
var statearr_26322_26342 = state_26320__$1;
(statearr_26322_26342[(2)] = inst_26316);

(statearr_26322_26342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (1))){
var state_26320__$1 = state_26320;
var statearr_26323_26343 = state_26320__$1;
(statearr_26323_26343[(2)] = null);

(statearr_26323_26343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (4))){
var inst_26300 = (state_26320[(7)]);
var inst_26300__$1 = (state_26320[(2)]);
var state_26320__$1 = (function (){var statearr_26324 = state_26320;
(statearr_26324[(7)] = inst_26300__$1);

return statearr_26324;
})();
if(cljs.core.truth_(inst_26300__$1)){
var statearr_26325_26344 = state_26320__$1;
(statearr_26325_26344[(1)] = (5));

} else {
var statearr_26326_26345 = state_26320__$1;
(statearr_26326_26345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (6))){
var state_26320__$1 = state_26320;
var statearr_26327_26346 = state_26320__$1;
(statearr_26327_26346[(2)] = null);

(statearr_26327_26346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (3))){
var inst_26318 = (state_26320[(2)]);
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26320__$1,inst_26318);
} else {
if((state_val_26321 === (2))){
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26320__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26321 === (11))){
var inst_26312 = (state_26320[(2)]);
var state_26320__$1 = (function (){var statearr_26328 = state_26320;
(statearr_26328[(8)] = inst_26312);

return statearr_26328;
})();
var statearr_26329_26347 = state_26320__$1;
(statearr_26329_26347[(2)] = null);

(statearr_26329_26347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (9))){
var inst_26306 = (state_26320[(9)]);
var inst_26304 = (state_26320[(10)]);
var inst_26308 = inst_26306.call(null,inst_26304);
var state_26320__$1 = state_26320;
var statearr_26330_26348 = state_26320__$1;
(statearr_26330_26348[(2)] = inst_26308);

(statearr_26330_26348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (5))){
var inst_26300 = (state_26320[(7)]);
var inst_26302 = figwheel.client.file_reloading.blocking_load.call(null,inst_26300);
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26320__$1,(8),inst_26302);
} else {
if((state_val_26321 === (10))){
var inst_26304 = (state_26320[(10)]);
var inst_26310 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26304);
var state_26320__$1 = state_26320;
var statearr_26331_26349 = state_26320__$1;
(statearr_26331_26349[(2)] = inst_26310);

(statearr_26331_26349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26321 === (8))){
var inst_26306 = (state_26320[(9)]);
var inst_26300 = (state_26320[(7)]);
var inst_26304 = (state_26320[(2)]);
var inst_26305 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26306__$1 = cljs.core.get.call(null,inst_26305,inst_26300);
var state_26320__$1 = (function (){var statearr_26332 = state_26320;
(statearr_26332[(9)] = inst_26306__$1);

(statearr_26332[(10)] = inst_26304);

return statearr_26332;
})();
if(cljs.core.truth_(inst_26306__$1)){
var statearr_26333_26350 = state_26320__$1;
(statearr_26333_26350[(1)] = (9));

} else {
var statearr_26334_26351 = state_26320__$1;
(statearr_26334_26351[(1)] = (10));

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
});})(c__20225__auto__))
;
return ((function (switch__20160__auto__,c__20225__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20161__auto__ = null;
var figwheel$client$file_reloading$state_machine__20161__auto____0 = (function (){
var statearr_26338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26338[(0)] = figwheel$client$file_reloading$state_machine__20161__auto__);

(statearr_26338[(1)] = (1));

return statearr_26338;
});
var figwheel$client$file_reloading$state_machine__20161__auto____1 = (function (state_26320){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_26320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e26339){if((e26339 instanceof Object)){
var ex__20164__auto__ = e26339;
var statearr_26340_26352 = state_26320;
(statearr_26340_26352[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26353 = state_26320;
state_26320 = G__26353;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20161__auto__ = function(state_26320){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20161__auto____1.call(this,state_26320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20161__auto____0;
figwheel$client$file_reloading$state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20161__auto____1;
return figwheel$client$file_reloading$state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__))
})();
var state__20227__auto__ = (function (){var statearr_26341 = f__20226__auto__.call(null);
(statearr_26341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_26341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__))
);

return c__20225__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26354,callback){
var map__26357 = p__26354;
var map__26357__$1 = ((((!((map__26357 == null)))?((((map__26357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26357):map__26357);
var file_msg = map__26357__$1;
var namespace = cljs.core.get.call(null,map__26357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26357,map__26357__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26357,map__26357__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26359){
var map__26362 = p__26359;
var map__26362__$1 = ((((!((map__26362 == null)))?((((map__26362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26362):map__26362);
var file_msg = map__26362__$1;
var namespace = cljs.core.get.call(null,map__26362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16293__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16293__auto__){
var or__16305__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
var or__16305__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16305__auto____$1)){
return or__16305__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16293__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26364,callback){
var map__26367 = p__26364;
var map__26367__$1 = ((((!((map__26367 == null)))?((((map__26367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26367):map__26367);
var file_msg = map__26367__$1;
var request_url = cljs.core.get.call(null,map__26367__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26367__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20225__auto___26455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto___26455,out){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto___26455,out){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (1))){
var inst_26415 = cljs.core.nth.call(null,files,(0),null);
var inst_26416 = cljs.core.nthnext.call(null,files,(1));
var inst_26417 = files;
var state_26437__$1 = (function (){var statearr_26439 = state_26437;
(statearr_26439[(7)] = inst_26416);

(statearr_26439[(8)] = inst_26415);

(statearr_26439[(9)] = inst_26417);

return statearr_26439;
})();
var statearr_26440_26456 = state_26437__$1;
(statearr_26440_26456[(2)] = null);

(statearr_26440_26456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (2))){
var inst_26420 = (state_26437[(10)]);
var inst_26417 = (state_26437[(9)]);
var inst_26420__$1 = cljs.core.nth.call(null,inst_26417,(0),null);
var inst_26421 = cljs.core.nthnext.call(null,inst_26417,(1));
var inst_26422 = (inst_26420__$1 == null);
var inst_26423 = cljs.core.not.call(null,inst_26422);
var state_26437__$1 = (function (){var statearr_26441 = state_26437;
(statearr_26441[(10)] = inst_26420__$1);

(statearr_26441[(11)] = inst_26421);

return statearr_26441;
})();
if(inst_26423){
var statearr_26442_26457 = state_26437__$1;
(statearr_26442_26457[(1)] = (4));

} else {
var statearr_26443_26458 = state_26437__$1;
(statearr_26443_26458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (3))){
var inst_26435 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
if((state_val_26438 === (4))){
var inst_26420 = (state_26437[(10)]);
var inst_26425 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26420);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26437__$1,(7),inst_26425);
} else {
if((state_val_26438 === (5))){
var inst_26431 = cljs.core.async.close_BANG_.call(null,out);
var state_26437__$1 = state_26437;
var statearr_26444_26459 = state_26437__$1;
(statearr_26444_26459[(2)] = inst_26431);

(statearr_26444_26459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (6))){
var inst_26433 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26445_26460 = state_26437__$1;
(statearr_26445_26460[(2)] = inst_26433);

(statearr_26445_26460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (7))){
var inst_26421 = (state_26437[(11)]);
var inst_26427 = (state_26437[(2)]);
var inst_26428 = cljs.core.async.put_BANG_.call(null,out,inst_26427);
var inst_26417 = inst_26421;
var state_26437__$1 = (function (){var statearr_26446 = state_26437;
(statearr_26446[(12)] = inst_26428);

(statearr_26446[(9)] = inst_26417);

return statearr_26446;
})();
var statearr_26447_26461 = state_26437__$1;
(statearr_26447_26461[(2)] = null);

(statearr_26447_26461[(1)] = (2));


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
});})(c__20225__auto___26455,out))
;
return ((function (switch__20160__auto__,c__20225__auto___26455,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto____0 = (function (){
var statearr_26451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26451[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto__);

(statearr_26451[(1)] = (1));

return statearr_26451;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto____1 = (function (state_26437){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e26452){if((e26452 instanceof Object)){
var ex__20164__auto__ = e26452;
var statearr_26453_26462 = state_26437;
(statearr_26453_26462[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26463 = state_26437;
state_26437 = G__26463;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto___26455,out))
})();
var state__20227__auto__ = (function (){var statearr_26454 = f__20226__auto__.call(null);
(statearr_26454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto___26455);

return statearr_26454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto___26455,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26464,opts){
var map__26468 = p__26464;
var map__26468__$1 = ((((!((map__26468 == null)))?((((map__26468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26468):map__26468);
var eval_body__$1 = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16293__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16293__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16293__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26470){var e = e26470;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26471_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26471_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26476){
var vec__26477 = p__26476;
var k = cljs.core.nth.call(null,vec__26477,(0),null);
var v = cljs.core.nth.call(null,vec__26477,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26478){
var vec__26479 = p__26478;
var k = cljs.core.nth.call(null,vec__26479,(0),null);
var v = cljs.core.nth.call(null,vec__26479,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26483,p__26484){
var map__26731 = p__26483;
var map__26731__$1 = ((((!((map__26731 == null)))?((((map__26731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26731):map__26731);
var opts = map__26731__$1;
var before_jsload = cljs.core.get.call(null,map__26731__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26731__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26731__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26732 = p__26484;
var map__26732__$1 = ((((!((map__26732 == null)))?((((map__26732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26732):map__26732);
var msg = map__26732__$1;
var files = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20225__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20226__auto__ = (function (){var switch__20160__auto__ = ((function (c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26885){
var state_val_26886 = (state_26885[(1)]);
if((state_val_26886 === (7))){
var inst_26748 = (state_26885[(7)]);
var inst_26747 = (state_26885[(8)]);
var inst_26749 = (state_26885[(9)]);
var inst_26746 = (state_26885[(10)]);
var inst_26754 = cljs.core._nth.call(null,inst_26747,inst_26749);
var inst_26755 = figwheel.client.file_reloading.eval_body.call(null,inst_26754,opts);
var inst_26756 = (inst_26749 + (1));
var tmp26887 = inst_26748;
var tmp26888 = inst_26747;
var tmp26889 = inst_26746;
var inst_26746__$1 = tmp26889;
var inst_26747__$1 = tmp26888;
var inst_26748__$1 = tmp26887;
var inst_26749__$1 = inst_26756;
var state_26885__$1 = (function (){var statearr_26890 = state_26885;
(statearr_26890[(11)] = inst_26755);

(statearr_26890[(7)] = inst_26748__$1);

(statearr_26890[(8)] = inst_26747__$1);

(statearr_26890[(9)] = inst_26749__$1);

(statearr_26890[(10)] = inst_26746__$1);

return statearr_26890;
})();
var statearr_26891_26977 = state_26885__$1;
(statearr_26891_26977[(2)] = null);

(statearr_26891_26977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (20))){
var inst_26789 = (state_26885[(12)]);
var inst_26797 = figwheel.client.file_reloading.sort_files.call(null,inst_26789);
var state_26885__$1 = state_26885;
var statearr_26892_26978 = state_26885__$1;
(statearr_26892_26978[(2)] = inst_26797);

(statearr_26892_26978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (27))){
var state_26885__$1 = state_26885;
var statearr_26893_26979 = state_26885__$1;
(statearr_26893_26979[(2)] = null);

(statearr_26893_26979[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (1))){
var inst_26738 = (state_26885[(13)]);
var inst_26735 = before_jsload.call(null,files);
var inst_26736 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26737 = (function (){return ((function (inst_26738,inst_26735,inst_26736,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26480_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26480_SHARP_);
});
;})(inst_26738,inst_26735,inst_26736,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26738__$1 = cljs.core.filter.call(null,inst_26737,files);
var inst_26739 = cljs.core.not_empty.call(null,inst_26738__$1);
var state_26885__$1 = (function (){var statearr_26894 = state_26885;
(statearr_26894[(13)] = inst_26738__$1);

(statearr_26894[(14)] = inst_26735);

(statearr_26894[(15)] = inst_26736);

return statearr_26894;
})();
if(cljs.core.truth_(inst_26739)){
var statearr_26895_26980 = state_26885__$1;
(statearr_26895_26980[(1)] = (2));

} else {
var statearr_26896_26981 = state_26885__$1;
(statearr_26896_26981[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (24))){
var state_26885__$1 = state_26885;
var statearr_26897_26982 = state_26885__$1;
(statearr_26897_26982[(2)] = null);

(statearr_26897_26982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (39))){
var inst_26839 = (state_26885[(16)]);
var state_26885__$1 = state_26885;
var statearr_26898_26983 = state_26885__$1;
(statearr_26898_26983[(2)] = inst_26839);

(statearr_26898_26983[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (46))){
var inst_26880 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26899_26984 = state_26885__$1;
(statearr_26899_26984[(2)] = inst_26880);

(statearr_26899_26984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (4))){
var inst_26783 = (state_26885[(2)]);
var inst_26784 = cljs.core.List.EMPTY;
var inst_26785 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26784);
var inst_26786 = (function (){return ((function (inst_26783,inst_26784,inst_26785,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26481_SHARP_){
var and__16293__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26481_SHARP_);
if(cljs.core.truth_(and__16293__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26481_SHARP_));
} else {
return and__16293__auto__;
}
});
;})(inst_26783,inst_26784,inst_26785,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26787 = cljs.core.filter.call(null,inst_26786,files);
var inst_26788 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26789 = cljs.core.concat.call(null,inst_26787,inst_26788);
var state_26885__$1 = (function (){var statearr_26900 = state_26885;
(statearr_26900[(12)] = inst_26789);

(statearr_26900[(17)] = inst_26783);

(statearr_26900[(18)] = inst_26785);

return statearr_26900;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26901_26985 = state_26885__$1;
(statearr_26901_26985[(1)] = (16));

} else {
var statearr_26902_26986 = state_26885__$1;
(statearr_26902_26986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (15))){
var inst_26773 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26903_26987 = state_26885__$1;
(statearr_26903_26987[(2)] = inst_26773);

(statearr_26903_26987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (21))){
var inst_26799 = (state_26885[(19)]);
var inst_26799__$1 = (state_26885[(2)]);
var inst_26800 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26799__$1);
var state_26885__$1 = (function (){var statearr_26904 = state_26885;
(statearr_26904[(19)] = inst_26799__$1);

return statearr_26904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26885__$1,(22),inst_26800);
} else {
if((state_val_26886 === (31))){
var inst_26883 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26885__$1,inst_26883);
} else {
if((state_val_26886 === (32))){
var inst_26839 = (state_26885[(16)]);
var inst_26844 = inst_26839.cljs$lang$protocol_mask$partition0$;
var inst_26845 = (inst_26844 & (64));
var inst_26846 = inst_26839.cljs$core$ISeq$;
var inst_26847 = (inst_26845) || (inst_26846);
var state_26885__$1 = state_26885;
if(cljs.core.truth_(inst_26847)){
var statearr_26905_26988 = state_26885__$1;
(statearr_26905_26988[(1)] = (35));

} else {
var statearr_26906_26989 = state_26885__$1;
(statearr_26906_26989[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (40))){
var inst_26860 = (state_26885[(20)]);
var inst_26859 = (state_26885[(2)]);
var inst_26860__$1 = cljs.core.get.call(null,inst_26859,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26861 = cljs.core.get.call(null,inst_26859,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26862 = cljs.core.not_empty.call(null,inst_26860__$1);
var state_26885__$1 = (function (){var statearr_26907 = state_26885;
(statearr_26907[(21)] = inst_26861);

(statearr_26907[(20)] = inst_26860__$1);

return statearr_26907;
})();
if(cljs.core.truth_(inst_26862)){
var statearr_26908_26990 = state_26885__$1;
(statearr_26908_26990[(1)] = (41));

} else {
var statearr_26909_26991 = state_26885__$1;
(statearr_26909_26991[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (33))){
var state_26885__$1 = state_26885;
var statearr_26910_26992 = state_26885__$1;
(statearr_26910_26992[(2)] = false);

(statearr_26910_26992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (13))){
var inst_26759 = (state_26885[(22)]);
var inst_26763 = cljs.core.chunk_first.call(null,inst_26759);
var inst_26764 = cljs.core.chunk_rest.call(null,inst_26759);
var inst_26765 = cljs.core.count.call(null,inst_26763);
var inst_26746 = inst_26764;
var inst_26747 = inst_26763;
var inst_26748 = inst_26765;
var inst_26749 = (0);
var state_26885__$1 = (function (){var statearr_26911 = state_26885;
(statearr_26911[(7)] = inst_26748);

(statearr_26911[(8)] = inst_26747);

(statearr_26911[(9)] = inst_26749);

(statearr_26911[(10)] = inst_26746);

return statearr_26911;
})();
var statearr_26912_26993 = state_26885__$1;
(statearr_26912_26993[(2)] = null);

(statearr_26912_26993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (22))){
var inst_26807 = (state_26885[(23)]);
var inst_26799 = (state_26885[(19)]);
var inst_26802 = (state_26885[(24)]);
var inst_26803 = (state_26885[(25)]);
var inst_26802__$1 = (state_26885[(2)]);
var inst_26803__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26802__$1);
var inst_26804 = (function (){var all_files = inst_26799;
var res_SINGLEQUOTE_ = inst_26802__$1;
var res = inst_26803__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26807,inst_26799,inst_26802,inst_26803,inst_26802__$1,inst_26803__$1,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26482_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26807,inst_26799,inst_26802,inst_26803,inst_26802__$1,inst_26803__$1,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26805 = cljs.core.filter.call(null,inst_26804,inst_26802__$1);
var inst_26806 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26806);
var inst_26808 = cljs.core.not_empty.call(null,inst_26807__$1);
var state_26885__$1 = (function (){var statearr_26913 = state_26885;
(statearr_26913[(23)] = inst_26807__$1);

(statearr_26913[(24)] = inst_26802__$1);

(statearr_26913[(26)] = inst_26805);

(statearr_26913[(25)] = inst_26803__$1);

return statearr_26913;
})();
if(cljs.core.truth_(inst_26808)){
var statearr_26914_26994 = state_26885__$1;
(statearr_26914_26994[(1)] = (23));

} else {
var statearr_26915_26995 = state_26885__$1;
(statearr_26915_26995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (36))){
var state_26885__$1 = state_26885;
var statearr_26916_26996 = state_26885__$1;
(statearr_26916_26996[(2)] = false);

(statearr_26916_26996[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (41))){
var inst_26860 = (state_26885[(20)]);
var inst_26864 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26865 = cljs.core.map.call(null,inst_26864,inst_26860);
var inst_26866 = cljs.core.pr_str.call(null,inst_26865);
var inst_26867 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26866)].join('');
var inst_26868 = figwheel.client.utils.log.call(null,inst_26867);
var state_26885__$1 = state_26885;
var statearr_26917_26997 = state_26885__$1;
(statearr_26917_26997[(2)] = inst_26868);

(statearr_26917_26997[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (43))){
var inst_26861 = (state_26885[(21)]);
var inst_26871 = (state_26885[(2)]);
var inst_26872 = cljs.core.not_empty.call(null,inst_26861);
var state_26885__$1 = (function (){var statearr_26918 = state_26885;
(statearr_26918[(27)] = inst_26871);

return statearr_26918;
})();
if(cljs.core.truth_(inst_26872)){
var statearr_26919_26998 = state_26885__$1;
(statearr_26919_26998[(1)] = (44));

} else {
var statearr_26920_26999 = state_26885__$1;
(statearr_26920_26999[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (29))){
var inst_26807 = (state_26885[(23)]);
var inst_26799 = (state_26885[(19)]);
var inst_26802 = (state_26885[(24)]);
var inst_26805 = (state_26885[(26)]);
var inst_26839 = (state_26885[(16)]);
var inst_26803 = (state_26885[(25)]);
var inst_26835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26838 = (function (){var all_files = inst_26799;
var res_SINGLEQUOTE_ = inst_26802;
var res = inst_26803;
var files_not_loaded = inst_26805;
var dependencies_that_loaded = inst_26807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26839,inst_26803,inst_26835,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26837){
var map__26921 = p__26837;
var map__26921__$1 = ((((!((map__26921 == null)))?((((map__26921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26921):map__26921);
var namespace = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26839,inst_26803,inst_26835,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26839__$1 = cljs.core.group_by.call(null,inst_26838,inst_26805);
var inst_26841 = (inst_26839__$1 == null);
var inst_26842 = cljs.core.not.call(null,inst_26841);
var state_26885__$1 = (function (){var statearr_26923 = state_26885;
(statearr_26923[(28)] = inst_26835);

(statearr_26923[(16)] = inst_26839__$1);

return statearr_26923;
})();
if(inst_26842){
var statearr_26924_27000 = state_26885__$1;
(statearr_26924_27000[(1)] = (32));

} else {
var statearr_26925_27001 = state_26885__$1;
(statearr_26925_27001[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (44))){
var inst_26861 = (state_26885[(21)]);
var inst_26874 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26861);
var inst_26875 = cljs.core.pr_str.call(null,inst_26874);
var inst_26876 = [cljs.core.str("not required: "),cljs.core.str(inst_26875)].join('');
var inst_26877 = figwheel.client.utils.log.call(null,inst_26876);
var state_26885__$1 = state_26885;
var statearr_26926_27002 = state_26885__$1;
(statearr_26926_27002[(2)] = inst_26877);

(statearr_26926_27002[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (6))){
var inst_26780 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26927_27003 = state_26885__$1;
(statearr_26927_27003[(2)] = inst_26780);

(statearr_26927_27003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (28))){
var inst_26805 = (state_26885[(26)]);
var inst_26832 = (state_26885[(2)]);
var inst_26833 = cljs.core.not_empty.call(null,inst_26805);
var state_26885__$1 = (function (){var statearr_26928 = state_26885;
(statearr_26928[(29)] = inst_26832);

return statearr_26928;
})();
if(cljs.core.truth_(inst_26833)){
var statearr_26929_27004 = state_26885__$1;
(statearr_26929_27004[(1)] = (29));

} else {
var statearr_26930_27005 = state_26885__$1;
(statearr_26930_27005[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (25))){
var inst_26803 = (state_26885[(25)]);
var inst_26819 = (state_26885[(2)]);
var inst_26820 = cljs.core.not_empty.call(null,inst_26803);
var state_26885__$1 = (function (){var statearr_26931 = state_26885;
(statearr_26931[(30)] = inst_26819);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26820)){
var statearr_26932_27006 = state_26885__$1;
(statearr_26932_27006[(1)] = (26));

} else {
var statearr_26933_27007 = state_26885__$1;
(statearr_26933_27007[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (34))){
var inst_26854 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
if(cljs.core.truth_(inst_26854)){
var statearr_26934_27008 = state_26885__$1;
(statearr_26934_27008[(1)] = (38));

} else {
var statearr_26935_27009 = state_26885__$1;
(statearr_26935_27009[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (17))){
var state_26885__$1 = state_26885;
var statearr_26936_27010 = state_26885__$1;
(statearr_26936_27010[(2)] = recompile_dependents);

(statearr_26936_27010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (3))){
var state_26885__$1 = state_26885;
var statearr_26937_27011 = state_26885__$1;
(statearr_26937_27011[(2)] = null);

(statearr_26937_27011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (12))){
var inst_26776 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26938_27012 = state_26885__$1;
(statearr_26938_27012[(2)] = inst_26776);

(statearr_26938_27012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (2))){
var inst_26738 = (state_26885[(13)]);
var inst_26745 = cljs.core.seq.call(null,inst_26738);
var inst_26746 = inst_26745;
var inst_26747 = null;
var inst_26748 = (0);
var inst_26749 = (0);
var state_26885__$1 = (function (){var statearr_26939 = state_26885;
(statearr_26939[(7)] = inst_26748);

(statearr_26939[(8)] = inst_26747);

(statearr_26939[(9)] = inst_26749);

(statearr_26939[(10)] = inst_26746);

return statearr_26939;
})();
var statearr_26940_27013 = state_26885__$1;
(statearr_26940_27013[(2)] = null);

(statearr_26940_27013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (23))){
var inst_26807 = (state_26885[(23)]);
var inst_26799 = (state_26885[(19)]);
var inst_26802 = (state_26885[(24)]);
var inst_26805 = (state_26885[(26)]);
var inst_26803 = (state_26885[(25)]);
var inst_26810 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26812 = (function (){var all_files = inst_26799;
var res_SINGLEQUOTE_ = inst_26802;
var res = inst_26803;
var files_not_loaded = inst_26805;
var dependencies_that_loaded = inst_26807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26803,inst_26810,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26811){
var map__26941 = p__26811;
var map__26941__$1 = ((((!((map__26941 == null)))?((((map__26941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26941):map__26941);
var request_url = cljs.core.get.call(null,map__26941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26803,inst_26810,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26813 = cljs.core.reverse.call(null,inst_26807);
var inst_26814 = cljs.core.map.call(null,inst_26812,inst_26813);
var inst_26815 = cljs.core.pr_str.call(null,inst_26814);
var inst_26816 = figwheel.client.utils.log.call(null,inst_26815);
var state_26885__$1 = (function (){var statearr_26943 = state_26885;
(statearr_26943[(31)] = inst_26810);

return statearr_26943;
})();
var statearr_26944_27014 = state_26885__$1;
(statearr_26944_27014[(2)] = inst_26816);

(statearr_26944_27014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (35))){
var state_26885__$1 = state_26885;
var statearr_26945_27015 = state_26885__$1;
(statearr_26945_27015[(2)] = true);

(statearr_26945_27015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (19))){
var inst_26789 = (state_26885[(12)]);
var inst_26795 = figwheel.client.file_reloading.expand_files.call(null,inst_26789);
var state_26885__$1 = state_26885;
var statearr_26946_27016 = state_26885__$1;
(statearr_26946_27016[(2)] = inst_26795);

(statearr_26946_27016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (11))){
var state_26885__$1 = state_26885;
var statearr_26947_27017 = state_26885__$1;
(statearr_26947_27017[(2)] = null);

(statearr_26947_27017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (9))){
var inst_26778 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26948_27018 = state_26885__$1;
(statearr_26948_27018[(2)] = inst_26778);

(statearr_26948_27018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (5))){
var inst_26748 = (state_26885[(7)]);
var inst_26749 = (state_26885[(9)]);
var inst_26751 = (inst_26749 < inst_26748);
var inst_26752 = inst_26751;
var state_26885__$1 = state_26885;
if(cljs.core.truth_(inst_26752)){
var statearr_26949_27019 = state_26885__$1;
(statearr_26949_27019[(1)] = (7));

} else {
var statearr_26950_27020 = state_26885__$1;
(statearr_26950_27020[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (14))){
var inst_26759 = (state_26885[(22)]);
var inst_26768 = cljs.core.first.call(null,inst_26759);
var inst_26769 = figwheel.client.file_reloading.eval_body.call(null,inst_26768,opts);
var inst_26770 = cljs.core.next.call(null,inst_26759);
var inst_26746 = inst_26770;
var inst_26747 = null;
var inst_26748 = (0);
var inst_26749 = (0);
var state_26885__$1 = (function (){var statearr_26951 = state_26885;
(statearr_26951[(32)] = inst_26769);

(statearr_26951[(7)] = inst_26748);

(statearr_26951[(8)] = inst_26747);

(statearr_26951[(9)] = inst_26749);

(statearr_26951[(10)] = inst_26746);

return statearr_26951;
})();
var statearr_26952_27021 = state_26885__$1;
(statearr_26952_27021[(2)] = null);

(statearr_26952_27021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (45))){
var state_26885__$1 = state_26885;
var statearr_26953_27022 = state_26885__$1;
(statearr_26953_27022[(2)] = null);

(statearr_26953_27022[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (26))){
var inst_26807 = (state_26885[(23)]);
var inst_26799 = (state_26885[(19)]);
var inst_26802 = (state_26885[(24)]);
var inst_26805 = (state_26885[(26)]);
var inst_26803 = (state_26885[(25)]);
var inst_26822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26824 = (function (){var all_files = inst_26799;
var res_SINGLEQUOTE_ = inst_26802;
var res = inst_26803;
var files_not_loaded = inst_26805;
var dependencies_that_loaded = inst_26807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26803,inst_26822,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26823){
var map__26954 = p__26823;
var map__26954__$1 = ((((!((map__26954 == null)))?((((map__26954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26954):map__26954);
var namespace = cljs.core.get.call(null,map__26954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26803,inst_26822,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26825 = cljs.core.map.call(null,inst_26824,inst_26803);
var inst_26826 = cljs.core.pr_str.call(null,inst_26825);
var inst_26827 = figwheel.client.utils.log.call(null,inst_26826);
var inst_26828 = (function (){var all_files = inst_26799;
var res_SINGLEQUOTE_ = inst_26802;
var res = inst_26803;
var files_not_loaded = inst_26805;
var dependencies_that_loaded = inst_26807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26803,inst_26822,inst_26824,inst_26825,inst_26826,inst_26827,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26807,inst_26799,inst_26802,inst_26805,inst_26803,inst_26822,inst_26824,inst_26825,inst_26826,inst_26827,state_val_26886,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26829 = setTimeout(inst_26828,(10));
var state_26885__$1 = (function (){var statearr_26956 = state_26885;
(statearr_26956[(33)] = inst_26827);

(statearr_26956[(34)] = inst_26822);

return statearr_26956;
})();
var statearr_26957_27023 = state_26885__$1;
(statearr_26957_27023[(2)] = inst_26829);

(statearr_26957_27023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (16))){
var state_26885__$1 = state_26885;
var statearr_26958_27024 = state_26885__$1;
(statearr_26958_27024[(2)] = reload_dependents);

(statearr_26958_27024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (38))){
var inst_26839 = (state_26885[(16)]);
var inst_26856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26839);
var state_26885__$1 = state_26885;
var statearr_26959_27025 = state_26885__$1;
(statearr_26959_27025[(2)] = inst_26856);

(statearr_26959_27025[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (30))){
var state_26885__$1 = state_26885;
var statearr_26960_27026 = state_26885__$1;
(statearr_26960_27026[(2)] = null);

(statearr_26960_27026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (10))){
var inst_26759 = (state_26885[(22)]);
var inst_26761 = cljs.core.chunked_seq_QMARK_.call(null,inst_26759);
var state_26885__$1 = state_26885;
if(inst_26761){
var statearr_26961_27027 = state_26885__$1;
(statearr_26961_27027[(1)] = (13));

} else {
var statearr_26962_27028 = state_26885__$1;
(statearr_26962_27028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (18))){
var inst_26793 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
if(cljs.core.truth_(inst_26793)){
var statearr_26963_27029 = state_26885__$1;
(statearr_26963_27029[(1)] = (19));

} else {
var statearr_26964_27030 = state_26885__$1;
(statearr_26964_27030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (42))){
var state_26885__$1 = state_26885;
var statearr_26965_27031 = state_26885__$1;
(statearr_26965_27031[(2)] = null);

(statearr_26965_27031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (37))){
var inst_26851 = (state_26885[(2)]);
var state_26885__$1 = state_26885;
var statearr_26966_27032 = state_26885__$1;
(statearr_26966_27032[(2)] = inst_26851);

(statearr_26966_27032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26886 === (8))){
var inst_26759 = (state_26885[(22)]);
var inst_26746 = (state_26885[(10)]);
var inst_26759__$1 = cljs.core.seq.call(null,inst_26746);
var state_26885__$1 = (function (){var statearr_26967 = state_26885;
(statearr_26967[(22)] = inst_26759__$1);

return statearr_26967;
})();
if(inst_26759__$1){
var statearr_26968_27033 = state_26885__$1;
(statearr_26968_27033[(1)] = (10));

} else {
var statearr_26969_27034 = state_26885__$1;
(statearr_26969_27034[(1)] = (11));

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
}
}
}
});})(c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20160__auto__,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto____0 = (function (){
var statearr_26973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26973[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto__);

(statearr_26973[(1)] = (1));

return statearr_26973;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto____1 = (function (state_26885){
while(true){
var ret_value__20162__auto__ = (function (){try{while(true){
var result__20163__auto__ = switch__20160__auto__.call(null,state_26885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20163__auto__;
}
break;
}
}catch (e26974){if((e26974 instanceof Object)){
var ex__20164__auto__ = e26974;
var statearr_26975_27035 = state_26885;
(statearr_26975_27035[(5)] = ex__20164__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27036 = state_26885;
state_26885 = G__27036;
continue;
} else {
return ret_value__20162__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto__ = function(state_26885){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto____1.call(this,state_26885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20161__auto__;
})()
;})(switch__20160__auto__,c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20227__auto__ = (function (){var statearr_26976 = f__20226__auto__.call(null);
(statearr_26976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20225__auto__);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20227__auto__);
});})(c__20225__auto__,map__26731,map__26731__$1,opts,before_jsload,on_jsload,reload_dependents,map__26732,map__26732__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20225__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27039,link){
var map__27042 = p__27039;
var map__27042__$1 = ((((!((map__27042 == null)))?((((map__27042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27042):map__27042);
var file = cljs.core.get.call(null,map__27042__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27042,map__27042__$1,file){
return (function (p1__27037_SHARP_,p2__27038_SHARP_){
if(cljs.core._EQ_.call(null,p1__27037_SHARP_,p2__27038_SHARP_)){
return p1__27037_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27042,map__27042__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27048){
var map__27049 = p__27048;
var map__27049__$1 = ((((!((map__27049 == null)))?((((map__27049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27049):map__27049);
var match_length = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27044_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27044_SHARP_);
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
var args27051 = [];
var len__17363__auto___27054 = arguments.length;
var i__17364__auto___27055 = (0);
while(true){
if((i__17364__auto___27055 < len__17363__auto___27054)){
args27051.push((arguments[i__17364__auto___27055]));

var G__27056 = (i__17364__auto___27055 + (1));
i__17364__auto___27055 = G__27056;
continue;
} else {
}
break;
}

var G__27053 = args27051.length;
switch (G__27053) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27051.length)].join('')));

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
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27058_SHARP_,p2__27059_SHARP_){
return cljs.core.assoc.call(null,p1__27058_SHARP_,cljs.core.get.call(null,p2__27059_SHARP_,key),p2__27059_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27060){
var map__27063 = p__27060;
var map__27063__$1 = ((((!((map__27063 == null)))?((((map__27063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27063):map__27063);
var f_data = map__27063__$1;
var file = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27065,files_msg){
var map__27072 = p__27065;
var map__27072__$1 = ((((!((map__27072 == null)))?((((map__27072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27072):map__27072);
var opts = map__27072__$1;
var on_cssload = cljs.core.get.call(null,map__27072__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27074_27078 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27075_27079 = null;
var count__27076_27080 = (0);
var i__27077_27081 = (0);
while(true){
if((i__27077_27081 < count__27076_27080)){
var f_27082 = cljs.core._nth.call(null,chunk__27075_27079,i__27077_27081);
figwheel.client.file_reloading.reload_css_file.call(null,f_27082);

var G__27083 = seq__27074_27078;
var G__27084 = chunk__27075_27079;
var G__27085 = count__27076_27080;
var G__27086 = (i__27077_27081 + (1));
seq__27074_27078 = G__27083;
chunk__27075_27079 = G__27084;
count__27076_27080 = G__27085;
i__27077_27081 = G__27086;
continue;
} else {
var temp__4425__auto___27087 = cljs.core.seq.call(null,seq__27074_27078);
if(temp__4425__auto___27087){
var seq__27074_27088__$1 = temp__4425__auto___27087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27074_27088__$1)){
var c__17108__auto___27089 = cljs.core.chunk_first.call(null,seq__27074_27088__$1);
var G__27090 = cljs.core.chunk_rest.call(null,seq__27074_27088__$1);
var G__27091 = c__17108__auto___27089;
var G__27092 = cljs.core.count.call(null,c__17108__auto___27089);
var G__27093 = (0);
seq__27074_27078 = G__27090;
chunk__27075_27079 = G__27091;
count__27076_27080 = G__27092;
i__27077_27081 = G__27093;
continue;
} else {
var f_27094 = cljs.core.first.call(null,seq__27074_27088__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27094);

var G__27095 = cljs.core.next.call(null,seq__27074_27088__$1);
var G__27096 = null;
var G__27097 = (0);
var G__27098 = (0);
seq__27074_27078 = G__27095;
chunk__27075_27079 = G__27096;
count__27076_27080 = G__27097;
i__27077_27081 = G__27098;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27072,map__27072__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27072,map__27072__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map