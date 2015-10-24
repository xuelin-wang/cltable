// Compiled by ClojureScript 1.7.145 {}
goog.provide('cltable.cltableapp');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('cltable.util');
goog.require('rum.core');
goog.require('datascript.core');
goog.require('clojure.string');
cltable.cltableapp.reset_overlay = (function cltable$cltableapp$reset_overlay(){
return null;
});
cltable.cltableapp.is_filter_changed = (function cltable$cltableapp$is_filter_changed(){
return null;
});
cltable.cltableapp.on_mouse_up = (function cltable$cltableapp$on_mouse_up(){
return null;
});
cltable.cltableapp.show_hide_columns = (function cltable$cltableapp$show_hide_columns(from_col_index,to_col_index,show_or_hide){
return null;
});
cltable.cltableapp.show_header_menu = (function cltable$cltableapp$show_header_menu(x,y,index){
return null;
});
cltable.cltableapp.table_overlay = (function cltable$cltableapp$table_overlay(p__23778){
var map__23781 = p__23778;
var map__23781__$1 = ((((!((map__23781 == null)))?((((map__23781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23781):map__23781);
var data = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return null;
});
cltable.cltableapp.conn = datascript.core.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);
cltable.cltableapp.table_state = cljs.core.atom.call(null,null);
cltable.cltableapp.set_cell_val_BANG_ = (function cltable$cltableapp$set_cell_val_BANG_(column,row_index,val){
return cljs.core.swap_BANG_.call(null,cltable.cltableapp.table_state,(function (old){
var old_rows_data = new cljs.core.Keyword(null,"visible-rows-data","visible-rows-data",-980854461).cljs$core$IFn$_invoke$arity$1(old);
var old_row_data = cljs.core.nth.call(null,old_rows_data,row_index);
var new_row_data = cljs.core.assoc.call(null,old_row_data,new cljs.core.Keyword(null,"data-key","data-key",1775480631).cljs$core$IFn$_invoke$arity$1(column),val);
var new_rows_data = cljs.core.assoc.call(null,old_rows_data,row_index,new_row_data);
return cljs.core.assoc.call(null,old,new cljs.core.Keyword(null,"visible-rows-data","visible-rows-data",-980854461),new_rows_data);
}));
});
cltable.cltableapp.default_cell_renderer = (function cltable$cltableapp$default_cell_renderer(row_data,row_index,cell_data_key,cell_data,column,width,on_save,on_stop){
if((cell_data == null)){
return "";
} else {
return [cljs.core.str(cell_data)].join('');
}
});
if(typeof cltable.cltableapp.cell_renderer_factory !== 'undefined'){
} else {
cltable.cltableapp.cell_renderer_factory = (function (){var method_table__17218__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17219__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17222__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cltable.cltableapp","cell-renderer-factory"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17222__auto__,method_table__17218__auto__,prefer_table__17219__auto__,method_cache__17220__auto__,cached_hierarchy__17221__auto__));
})();
}
cltable.cltableapp.cell_list = (function cltable$cltableapp$cell_list(value_labels){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"options","options",99638489),value_labels], null);
});
cltable.cltableapp.cell_text = (function cltable$cltableapp$cell_text(placeholder,on_save,on_stop){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-save","on-save",1618176266),on_save,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),on_stop], null);
});
cltable.cltableapp.cell_label = (function cltable$cltableapp$cell_label(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"label","label",1718410804)], null);
});
cltable.cltableapp.input = (function cltable$cltableapp$input(p__23785){
var map__23789 = p__23785;
var map__23789__$1 = ((((!((map__23789 == null)))?((((map__23789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23789):map__23789);
var placeholder = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var value = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_save = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__23789__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = cljs.core.atom.call(null,value);
var stop = ((function (val,map__23789,map__23789__$1,placeholder,value,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,value);

if(cljs.core.truth_(on_stop)){
return on_stop.call(null);
} else {
return null;
}
});})(val,map__23789,map__23789__$1,placeholder,value,on_save,on_stop))
;
var save = ((function (val,stop,map__23789,map__23789__$1,placeholder,value,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,[cljs.core.str(cljs.core.deref.call(null,val))].join(''));
return on_save.call(null,v);
});})(val,stop,map__23789,map__23789__$1,placeholder,value,on_save,on_stop))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__23789,map__23789__$1,placeholder,value,on_save,on_stop){
return (function (p1__23783_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__23783_SHARP_.target.value);
});})(val,stop,save,map__23789,map__23789__$1,placeholder,value,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,stop,save,map__23789,map__23789__$1,placeholder,value,on_save,on_stop){
return (function (p1__23784_SHARP_){
var G__23791 = p1__23784_SHARP_.which;
switch (G__23791) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__23789,map__23789__$1,placeholder,value,on_save,on_stop))
], null)], null);
});
cljs.core._add_method.call(null,cltable.cltableapp.cell_renderer_factory,new cljs.core.Keyword(null,"list","list",765357683),(function (cell){
return (function (row_data,row_index,cell_data_key,cell_data,column,width,on_save,on_stop){
return cljs.core.reduce_kv.call(null,(function (result,k,v){
return cljs.core.into.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),((cljs.core._EQ_.call(null,cell_data,k))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"selected","selected",574897764),""], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null)),v], null)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cell_data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_save], null)], null),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cell));
});
}));
cljs.core._add_method.call(null,cltable.cltableapp.cell_renderer_factory,new cljs.core.Keyword(null,"text","text",-1790561697),(function (cell){
return (function (row_data,row_index,cell_data_key,cell_data,column,width,on_save,on_stop){
return cltable.cltableapp.input.call(null,cljs.core.merge.call(null,cell,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cell_data,new cljs.core.Keyword(null,"on-save","on-save",1618176266),on_save,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),on_stop], null)));
});
}));
cljs.core._add_method.call(null,cltable.cltableapp.cell_renderer_factory,new cljs.core.Keyword(null,"label","label",1718410804),(function (cell){
return (function (row_data,row_index,cell_data_key,cell_data,column,width,on_save,on_stop){
var label = cell_data;
if((label == null)){
return "";
} else {
return [cljs.core.str(label)].join('');
}
});
}));
cltable.cltableapp.table_cell = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (p__23793){
var map__23794 = p__23793;
var map__23794__$1 = ((((!((map__23794 == null)))?((((map__23794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23794):map__23794);
var height = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_renderer = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"cell-renderer","cell-renderer",-1561361410));
var left = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var min_width = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var cell_data = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"cell-data","cell-data",-141183646));
var cell_data_key = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"cell-data-key","cell-data-key",-1348698429));
var is_footer = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"is-footer","is-footer",986800227));
var row_data = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"row-data","row-data",797816293));
var row_index = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var width = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var highlighted = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var column = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var class$ = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var is_header = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"is-header","is-header",1409344983));
var on_column_resize = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"on-column-resize","on-column-resize",567542392));
return sablono.interpreter.interpret.call(null,(function (){var cell_renderer__$1 = (function (){var or__16305__auto__ = cell_renderer;
if(cljs.core.truth_(or__16305__auto__)){
return or__16305__auto__;
} else {
return cltable.cltableapp.default_cell_renderer;
}
})();
var style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
var on_save = ((function (cell_renderer__$1,style,map__23794,map__23794__$1,height,cell_renderer,left,min_width,align,cell_data,cell_data_key,is_footer,row_data,row_index,width,max_width,highlighted,column,class$,is_header,on_column_resize){
return (function (val){
return cltable.cltableapp.set_cell_val_BANG_.call(null,column,row_index,val);
});})(cell_renderer__$1,style,map__23794,map__23794__$1,height,cell_renderer,left,min_width,align,cell_data,cell_data_key,is_footer,row_data,row_index,width,max_width,highlighted,column,class$,is_header,on_column_resize))
;
var on_stop = ((function (cell_renderer__$1,style,on_save,map__23794,map__23794__$1,height,cell_renderer,left,min_width,align,cell_data,cell_data_key,is_footer,row_data,row_index,width,max_width,highlighted,column,class$,is_header,on_column_resize){
return (function (){
return null;
});})(cell_renderer__$1,style,on_save,map__23794,map__23794__$1,height,cell_renderer,left,min_width,align,cell_data,cell_data_key,is_footer,row_data,row_index,width,max_width,highlighted,column,class$,is_header,on_column_resize))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),cell_renderer__$1.call(null,row_data,row_index,cell_data_key,cell_data,column,width,on_save,on_stop)], null);
})());
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"table-cell");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23796__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23796 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23797__i = 0, G__23797__a = new Array(arguments.length -  0);
while (G__23797__i < G__23797__a.length) {G__23797__a[G__23797__i] = arguments[G__23797__i + 0]; ++G__23797__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23797__a,0);
} 
return G__23796__delegate.call(this,args__19101__auto__);};
G__23796.cljs$lang$maxFixedArity = 0;
G__23796.cljs$lang$applyTo = (function (arglist__23798){
var args__19101__auto__ = cljs.core.seq(arglist__23798);
return G__23796__delegate(args__19101__auto__);
});
G__23796.cljs$core$IFn$_invoke$arity$variadic = G__23796__delegate;
return G__23796;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.table_cell_group = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (p__23799){
var map__23800 = p__23799;
var map__23800__$1 = ((((!((map__23800 == null)))?((((map__23800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23800):map__23800);
var left = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var row_data = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"row-data","row-data",797816293));
var top = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var row_index = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var columns = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var isHeader = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"isHeader","isHeader",538044266));
var width = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var row_height = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var isTop = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"isTop","isTop",-2114269714));
var cell_class = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"cell-class","cell-class",2111105391));
var z_index = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var class$ = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return sablono.interpreter.interpret.call(null,(function (){var style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),z_index,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top], null);
var cell_left = (0);
var column_index = (0);
var cells = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
while(true){
if(cljs.core._EQ_.call(null,column_index,cljs.core.count.call(null,columns))){
return cells;
} else {
var column = cljs.core.nth.call(null,columns,column_index);
var classes1 = (cljs.core.truth_(isTop)?"cellLayout cellLayout_top":"cellLayout");
var isRightCell = cljs.core._EQ_.call(null,column_index,(cljs.core.count.call(null,columns) - (1)));
var classes = [cljs.core.str("cellLayout"),cljs.core.str(" "),cljs.core.str(cell_class),cljs.core.str((cljs.core.truth_(isTop)?" cellLayout_top":"")),cljs.core.str(((isRightCell)?" cellLayout_right":""))].join('');
var cell = cltable.cltableapp.table_cell.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"cell-data","cell-data",-141183646),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"is-footer","is-footer",986800227),new cljs.core.Keyword(null,"cell-data-key","cell-data-key",-1348698429),new cljs.core.Keyword(null,"row-data","row-data",797816293),new cljs.core.Keyword(null,"row-index","row-index",-828710296),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"is-header","is-header",1409344983),new cljs.core.Keyword(null,"on-column-resize","on-column-resize",567542392),new cljs.core.Keyword(null,"cell-renderer","cell-renderer",-1561361410),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.Keyword(null,"min-width","min-width",1926193728).cljs$core$IFn$_invoke$arity$1(column),row_data.call(null,new cljs.core.Keyword(null,"data-key","data-key",1775480631).cljs$core$IFn$_invoke$arity$1(column)),"center",false,new cljs.core.Keyword(null,"data-key","data-key",1775480631).cljs$core$IFn$_invoke$arity$1(column),row_data,row_index,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column),false,new cljs.core.Keyword(null,"max-width","max-width",-1939924051).cljs$core$IFn$_invoke$arity$1(column),column,classes,false,null,(cljs.core.truth_(isHeader)?new cljs.core.Keyword(null,"header-cell-renderer","header-cell-renderer",-1111235556).cljs$core$IFn$_invoke$arity$1(column):new cljs.core.Keyword(null,"cell-renderer","cell-renderer",-1561361410).cljs$core$IFn$_invoke$arity$1(column)),row_height,cell_left]));
var new_left = (cell_left + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(column));
var G__23802 = new_left;
var G__23803 = (column_index + (1));
var G__23804 = cljs.core.into.call(null,cells,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell], null));
cell_left = G__23802;
column_index = G__23803;
cells = G__23804;
continue;
}
break;
}
})());
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"table-cell-group");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23805__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23805 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23806__i = 0, G__23806__a = new Array(arguments.length -  0);
while (G__23806__i < G__23806__a.length) {G__23806__a[G__23806__i] = arguments[G__23806__i + 0]; ++G__23806__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23806__a,0);
} 
return G__23805__delegate.call(this,args__19101__auto__);};
G__23805.cljs$lang$maxFixedArity = 0;
G__23805.cljs$lang$applyTo = (function (arglist__23807){
var args__19101__auto__ = cljs.core.seq(arglist__23807);
return G__23805__delegate(args__19101__auto__);
});
G__23805.cljs$core$IFn$_invoke$arity$variadic = G__23805__delegate;
return G__23805;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.table_row = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (p__23810){
var map__23811 = p__23810;
var map__23811__$1 = ((((!((map__23811 == null)))?((((map__23811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23811):map__23811);
var row_data = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"row-data","row-data",797816293));
var top = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var row_index = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var isHeader = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"isHeader","isHeader",538044266));
var width = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var row_height = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var isTop = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"isTop","isTop",-2114269714));
var cell_class = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"cell-class","cell-class",2111105391));
var class$ = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var fixed_columns = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"fixed-columns","fixed-columns",-1793374858));
var scrollable_columns = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"scrollable-columns","scrollable-columns",-1788967785));
return sablono.interpreter.interpret.call(null,(function (){var fixed_columns_width = cljs.core.reduce.call(null,((function (map__23811,map__23811__$1,row_data,top,row_index,isHeader,width,row_height,isTop,cell_class,class$,fixed_columns,scrollable_columns){
return (function (p1__23808_SHARP_,p2__23809_SHARP_){
return (p1__23808_SHARP_ + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p2__23809_SHARP_));
});})(map__23811,map__23811__$1,row_data,top,row_index,isHeader,width,row_height,isTop,cell_class,class$,fixed_columns,scrollable_columns))
,(0),fixed_columns);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(isHeader)?[cljs.core.str("row_header "),cljs.core.str(class$)].join(''):class$)], null),cltable.cltableapp.table_cell_group.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-data","row-data",797816293),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"row-index","row-index",-828710296),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"isHeader","isHeader",538044266),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"isTop","isTop",-2114269714),new cljs.core.Keyword(null,"cell-class","cell-class",2111105391),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"left","left",-399115937)],[row_data,top,row_index,fixed_columns,isHeader,fixed_columns_width,row_height,isTop,cell_class,(2),"cellgroup_fixed",(0)]))], null);
})());
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"table-row");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23813__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23813 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23814__i = 0, G__23814__a = new Array(arguments.length -  0);
while (G__23814__i < G__23814__a.length) {G__23814__a[G__23814__i] = arguments[G__23814__i + 0]; ++G__23814__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23814__a,0);
} 
return G__23813__delegate.call(this,args__19101__auto__);};
G__23813.cljs$lang$maxFixedArity = 0;
G__23813.cljs$lang$applyTo = (function (arglist__23815){
var args__19101__auto__ = cljs.core.seq(arglist__23815);
return G__23813__delegate(args__19101__auto__);
});
G__23813.cljs$core$IFn$_invoke$arity$variadic = G__23813__delegate;
return G__23813;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.table_rows = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (p__23816){
var map__23817 = p__23816;
var map__23817__$1 = ((((!((map__23817 == null)))?((((map__23817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23817):map__23817);
var fixed_columns = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"fixed-columns","fixed-columns",-1793374858));
var width = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scrollable_columns = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"scrollable-columns","scrollable-columns",-1788967785));
var row_datas = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"row-datas","row-datas",2057700692));
var row_indices = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"row-indices","row-indices",1417326295));
var row_count = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var row_height = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var top = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var isTop = cljs.core.get.call(null,map__23817__$1,new cljs.core.Keyword(null,"isTop","isTop",-2114269714));
return sablono.interpreter.interpret.call(null,(function (){var result = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY], null);
var indices = row_indices;
var display_index = (0);
var curr_top = top;
var curr_isTop = isTop;
while(true){
var row_index = cljs.core.first.call(null,indices);
if((row_index == null)){
return result;
} else {
var row_data = cljs.core.nth.call(null,row_datas,display_index);
var new_row = cltable.cltableapp.table_row.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-data","row-data",797816293),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"row-index","row-index",-828710296),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"isTop","isTop",-2114269714),new cljs.core.Keyword(null,"cell-class","cell-class",2111105391),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"fixed-columns","fixed-columns",-1793374858),new cljs.core.Keyword(null,"scrollable-columns","scrollable-columns",-1788967785)],[row_data,curr_top,row_index,width,row_height,curr_isTop,((cljs.core.even_QMARK_.call(null,row_index))?"row_light":"row_dark"),"rowLayout",fixed_columns,scrollable_columns]));
var new_result = cljs.core.conj.call(null,result,new_row);
var G__23819 = new_result;
var G__23820 = cljs.core.rest.call(null,indices);
var G__23821 = (display_index + (1));
var G__23822 = (curr_top + row_height);
var G__23823 = false;
result = G__23819;
indices = G__23820;
display_index = G__23821;
curr_top = G__23822;
curr_isTop = G__23823;
continue;
}
break;
}
})());
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"table-rows");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23824__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23824 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23825__i = 0, G__23825__a = new Array(arguments.length -  0);
while (G__23825__i < G__23825__a.length) {G__23825__a[G__23825__i] = arguments[G__23825__i + 0]; ++G__23825__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23825__a,0);
} 
return G__23824__delegate.call(this,args__19101__auto__);};
G__23824.cljs$lang$maxFixedArity = 0;
G__23824.cljs$lang$applyTo = (function (arglist__23826){
var args__19101__auto__ = cljs.core.seq(arglist__23826);
return G__23824__delegate(args__19101__auto__);
});
G__23824.cljs$core$IFn$_invoke$arity$variadic = G__23824__delegate;
return G__23824;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.table = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (p__23837){
var map__23838 = p__23837;
var map__23838__$1 = ((((!((map__23838 == null)))?((((map__23838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23838):map__23838);
var filter_criteria = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"filter-criteria","filter-criteria",-760144229));
var header_cell_renderer = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"header-cell-renderer","header-cell-renderer",-1111235556));
var show_hide_columns = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"show-hide-columns","show-hide-columns",-1776164417));
var header_menu_col_index = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"header-menu-col-index","header-menu-col-index",-1443331841));
var hidden_columns = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800));
var data_cell_renderer = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"data-cell-renderer","data-cell-renderer",-1258535162));
var preheaders = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"preheaders","preheaders",-394352793));
var select_cells = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"select-cells","select-cells",1011215176));
var columns = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var show_filter_list = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"show-filter-list","show-filter-list",1923358954));
var selected_indices = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"selected-indices","selected-indices",314999500));
var row_height = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var row_getter = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"row-getter","row-getter",-987833708));
var class$ = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var row_count = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var is_filter = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"is-filter","is-filter",-311084778));
var on_mouse_up = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));
return sablono.interpreter.interpret.call(null,(function (){var fixed_columns = cljs.core.filter.call(null,((function (map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (p1__23827_SHARP_){
return new cljs.core.Keyword(null,"fixed","fixed",-562004358).cljs$core$IFn$_invoke$arity$1(p1__23827_SHARP_);
});})(map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
,columns);
var fixed_width = cljs.core.reduce.call(null,((function (fixed_columns,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (p1__23828_SHARP_,p2__23829_SHARP_){
return (p1__23828_SHARP_ + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p2__23829_SHARP_));
});})(fixed_columns,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
,(0),fixed_columns);
var scrollable_columns = cljs.core.filter.call(null,((function (fixed_columns,fixed_width,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (p1__23830_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"fixed","fixed",-562004358).cljs$core$IFn$_invoke$arity$1(p1__23830_SHARP_));
});})(fixed_columns,fixed_width,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
,columns);
var scrollable_width = cljs.core.reduce.call(null,((function (fixed_columns,fixed_width,scrollable_columns,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (p1__23831_SHARP_,p2__23832_SHARP_){
return (p1__23831_SHARP_ + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p2__23832_SHARP_));
});})(fixed_columns,fixed_width,scrollable_columns,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
,(0),scrollable_columns);
var width = cljs.core.reduce.call(null,((function (fixed_columns,fixed_width,scrollable_columns,scrollable_width,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (p1__23833_SHARP_,p2__23834_SHARP_){
return (p1__23833_SHARP_ + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p2__23834_SHARP_));
});})(fixed_columns,fixed_width,scrollable_columns,scrollable_width,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
,(0),columns);
var header = cljs.core.reduce.call(null,((function (fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (p1__23835_SHARP_,p2__23836_SHARP_){
return cljs.core.assoc.call(null,p1__23835_SHARP_,new cljs.core.Keyword(null,"data-key","data-key",1775480631).cljs$core$IFn$_invoke$arity$1(p2__23836_SHARP_),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p2__23836_SHARP_));
});})(fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
,cljs.core.PersistentArrayMap.EMPTY,columns);
var new_state = cljs.core.swap_BANG_.call(null,cltable.cltableapp.table_state,((function (fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,header,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"visible-rows-data","visible-rows-data",-980854461),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,row_getter,cljs.core.range.call(null,row_count))),new cljs.core.Keyword(null,"visible-rows-indices","visible-rows-indices",-1138171601),cljs.core.range.call(null,row_count),new cljs.core.Keyword(null,"update-range","update-range",-1297356432),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2),(-2),(-2)], null)], null);
});})(fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,header,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
);
var header_row = cltable.cltableapp.table_row.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-data","row-data",797816293),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"row-index","row-index",-828710296),new cljs.core.Keyword(null,"isHeader","isHeader",538044266),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"isTop","isTop",-2114269714),new cljs.core.Keyword(null,"cell-class","cell-class",2111105391),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"fixed-columns","fixed-columns",-1793374858),new cljs.core.Keyword(null,"scrollable-columns","scrollable-columns",-1788967785)],[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cltable.cltableapp.table_state)),(0),(-1),true,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cltable.cltableapp.table_state)),row_height,true,"row_header","rowLayout",fixed_columns,scrollable_columns]));
var data_rows = cltable.cltableapp.table_rows.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"isTop","isTop",-2114269714),new cljs.core.Keyword(null,"row-count","row-count",1060167988),new cljs.core.Keyword(null,"row-datas","row-datas",2057700692),new cljs.core.Keyword(null,"fixed-columns","fixed-columns",-1793374858),new cljs.core.Keyword(null,"scrollable-columns","scrollable-columns",-1788967785),new cljs.core.Keyword(null,"row-indices","row-indices",1417326295)],[row_height,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cltable.cltableapp.table_state)),row_height,false,row_count,new cljs.core.Keyword(null,"visible-rows-data","visible-rows-data",-980854461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cltable.cltableapp.table_state)),fixed_columns,scrollable_columns,new cljs.core.Keyword(null,"visible-rows-indices","visible-rows-indices",-1138171601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cltable.cltableapp.table_state))]));
console.log([cljs.core.str("fixed-columns:"),cljs.core.str(fixed_columns)].join(''));

cljs.core.add_watch.call(null,cltable.cltableapp.table_state,new cljs.core.Keyword(null,"header","header",119441134),((function (fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,header,new_state,header_row,data_rows,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,header_row);
});})(fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,header,new_state,header_row,data_rows,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
);

cljs.core.add_watch.call(null,cltable.cltableapp.table_state,new cljs.core.Keyword(null,"body","body",-2049205669),((function (fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,header,new_state,header_row,data_rows,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,data_rows);
});})(fixed_columns,fixed_width,scrollable_columns,scrollable_width,width,header,new_state,header_row,data_rows,map__23838,map__23838__$1,filter_criteria,header_cell_renderer,show_hide_columns,header_menu_col_index,hidden_columns,data_cell_renderer,preheaders,select_cells,columns,show_filter_list,selected_indices,row_height,row_getter,class$,row_count,is_filter,on_mouse_up))
);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("tableLayout "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),on_mouse_up,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cltable.cltableapp.table_state))], null)], null),header_row,data_rows], null);
})());
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"table");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23840__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23840 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23841__i = 0, G__23841__a = new Array(arguments.length -  0);
while (G__23841__i < G__23841__a.length) {G__23841__a[G__23841__i] = arguments[G__23841__i + 0]; ++G__23841__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23841__a,0);
} 
return G__23840__delegate.call(this,args__19101__auto__);};
G__23840.cljs$lang$maxFixedArity = 0;
G__23840.cljs$lang$applyTo = (function (arglist__23842){
var args__19101__auto__ = cljs.core.seq(arglist__23842);
return G__23840__delegate(args__19101__auto__);
});
G__23840.cljs$core$IFn$_invoke$arity$variadic = G__23840__delegate;
return G__23840;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.exampleTable = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (){
return sablono.interpreter.interpret.call(null,(function (){return cltable.cltableapp.table.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"exampleTable",new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),"col0",new cljs.core.Keyword(null,"fixed","fixed",-562004358),true,new cljs.core.Keyword(null,"label","label",1718410804),"col 0",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),false,new cljs.core.Keyword(null,"cell-renderer","cell-renderer",-1561361410),cltable.cltableapp.cell_renderer_factory.call(null,cltable.cltableapp.cell_list.call(null,cltable.util.key_mirror.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["val0a","val0b"], null))))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),"col1",new cljs.core.Keyword(null,"fixed","fixed",-562004358),true,new cljs.core.Keyword(null,"label","label",1718410804),"col 1",new cljs.core.Keyword(null,"width","width",-384071477),(75),new cljs.core.Keyword(null,"cell-renderer","cell-renderer",-1561361410),cltable.cltableapp.cell_renderer_factory.call(null,cltable.cltableapp.cell_text.call(null,"Enter col 1",(function (){
return null;
}),(function (){
return null;
}))),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),"col2",new cljs.core.Keyword(null,"fixed","fixed",-562004358),true,new cljs.core.Keyword(null,"label","label",1718410804),"col 2",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),"col3",new cljs.core.Keyword(null,"fixed","fixed",-562004358),true,new cljs.core.Keyword(null,"label","label",1718410804),"col 3",new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-key","data-key",1775480631),"col4",new cljs.core.Keyword(null,"fixed","fixed",-562004358),true,new cljs.core.Keyword(null,"label","label",1718410804),"col 4",new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),false], null)], null),new cljs.core.Keyword(null,"hidden-columns","hidden-columns",-1045524800),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"row-count","row-count",1060167988),(3),new cljs.core.Keyword(null,"row-height","row-height",527360749),(50),new cljs.core.Keyword(null,"row-getter","row-getter",-987833708),(function (index){
return new cljs.core.PersistentArrayMap(null, 5, ["col0",((cljs.core.even_QMARK_.call(null,index))?"val0a":"val0b"),"col1",[cljs.core.str("val "),cljs.core.str(cljs.core.repeat.call(null,index,[cljs.core.str(index)].join(''))),cljs.core.str(" "),cljs.core.str((1))].join(''),"col2",[cljs.core.str("val "),cljs.core.str(cljs.core.repeat.call(null,index,[cljs.core.str(index)].join(''))),cljs.core.str(" "),cljs.core.str((2))].join(''),"col3",[cljs.core.str("val "),cljs.core.str(cljs.core.repeat.call(null,index,[cljs.core.str(index)].join(''))),cljs.core.str(" "),cljs.core.str((3))].join(''),"col4",[cljs.core.str("val "),cljs.core.str(cljs.core.repeat.call(null,index,[cljs.core.str(index)].join(''))),cljs.core.str(" "),cljs.core.str((4))].join('')], null);
})], null));
})());
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"exampleTable");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23843__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23843 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23844__i = 0, G__23844__a = new Array(arguments.length -  0);
while (G__23844__i < G__23844__a.length) {G__23844__a[G__23844__i] = arguments[G__23844__i + 0]; ++G__23844__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23844__a,0);
} 
return G__23843__delegate.call(this,args__19101__auto__);};
G__23843.cljs$lang$maxFixedArity = 0;
G__23843.cljs$lang$applyTo = (function (arglist__23845){
var args__19101__auto__ = cljs.core.seq(arglist__23845);
return G__23843__delegate(args__19101__auto__);
});
G__23843.cljs$core$IFn$_invoke$arity$variadic = G__23843__delegate;
return G__23843;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.tabledemo = (function (){var render_mixin__19098__auto__ = rum.core.render__GT_mixin.call(null,(function (props){
return React.createElement("div",{"style": {"position": "relative"}},React.createElement("h1",null,"react table demo"),React.createElement("p",null,"This is it."),sablono.interpreter.interpret.call(null,cltable.cltableapp.exampleTable.call(null)));
}));
var class__19099__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19098__auto__], null),null),"tabledemo");
var ctor__19100__auto__ = ((function (render_mixin__19098__auto__,class__19099__auto__){
return (function() { 
var G__23850__delegate = function (args__19101__auto__){
var state__19102__auto__ = rum.core.args__GT_state.call(null,args__19101__auto__);
return rum.core.element.call(null,class__19099__auto__,state__19102__auto__,null);
};
var G__23850 = function (var_args){
var args__19101__auto__ = null;
if (arguments.length > 0) {
var G__23851__i = 0, G__23851__a = new Array(arguments.length -  0);
while (G__23851__i < G__23851__a.length) {G__23851__a[G__23851__i] = arguments[G__23851__i + 0]; ++G__23851__i;}
  args__19101__auto__ = new cljs.core.IndexedSeq(G__23851__a,0);
} 
return G__23850__delegate.call(this,args__19101__auto__);};
G__23850.cljs$lang$maxFixedArity = 0;
G__23850.cljs$lang$applyTo = (function (arglist__23852){
var args__19101__auto__ = cljs.core.seq(arglist__23852);
return G__23850__delegate(args__19101__auto__);
});
G__23850.cljs$core$IFn$_invoke$arity$variadic = G__23850__delegate;
return G__23850;
})()
;})(render_mixin__19098__auto__,class__19099__auto__))
;
return cljs.core.with_meta.call(null,ctor__19100__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19099__auto__], null));
})();
cltable.cltableapp.run = (function cltable$cltableapp$run(){
return rum.core.mount.call(null,cltable.cltableapp.tabledemo.call(null,cljs.core.PersistentArrayMap.EMPTY),cltable.util.elem.call(null,"tableDemoSection"));
});
goog.exportSymbol('cltable.cltableapp.run', cltable.cltableapp.run);

//# sourceMappingURL=cltableapp.js.map