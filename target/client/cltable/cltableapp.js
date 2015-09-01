// Compiled by ClojureScript 1.7.107 {}
goog.provide('cltable.cltableapp');
goog.require('cljs.core');
goog.require('reagent.core');
cltable.cltableapp.reset_overlay = (function cltable$cltableapp$reset_overlay(){
return null;
});
cltable.cltableapp.is_filter_changed = (function cltable$cltableapp$is_filter_changed(){
return null;
});
cltable.cltableapp.on_mouse_up = (function cltable$cltableapp$on_mouse_up(){
return null;
});
cltable.cltableapp.table_header = (function cltable$cltableapp$table_header(p__19935){
var map__19938 = p__19935;
var map__19938__$1 = ((((!((map__19938 == null)))?((((map__19938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19938):map__19938);
var action = cljs.core.get.call(null,map__19938__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return null;
});
cltable.cltableapp.show_hide_columns = (function cltable$cltableapp$show_hide_columns(from_col_index,to_col_index,show_or_hide){
return null;
});
cltable.cltableapp.show_header_menu = (function cltable$cltableapp$show_header_menu(x,y,index){
return null;
});
cltable.cltableapp.table_data_body = (function cltable$cltableapp$table_data_body(p__19940){
var map__19943 = p__19940;
var map__19943__$1 = ((((!((map__19943 == null)))?((((map__19943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19943):map__19943);
var data = cljs.core.get.call(null,map__19943__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return null;
});
cltable.cltableapp.table_overlay = (function cltable$cltableapp$table_overlay(p__19945){
var map__19948 = p__19945;
var map__19948__$1 = ((((!((map__19948 == null)))?((((map__19948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19948):map__19948);
var data = cljs.core.get.call(null,map__19948__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return null;
});
cltable.cltableapp.cltable = (function cltable$cltableapp$cltable(p__19950){
var map__19953 = p__19950;
var map__19953__$1 = ((((!((map__19953 == null)))?((((map__19953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19953):map__19953);
var preheaders = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"preheaders","preheaders",-394352793));
var header = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"header","header",119441134));
var header_cell_renderer = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"header-cell-renderer","header-cell-renderer",-1111235556));
var get_data_cell_renderer = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"get-data-cell-renderer","get-data-cell-renderer",1140304999));
var get_cell_spec = cljs.core.get.call(null,map__19953__$1,new cljs.core.Keyword(null,"get-cell-spec","get-cell-spec",-1510551370));
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"is-filter","is-filter",-311084778),false,new cljs.core.Keyword(null,"selected-indices","selected-indices",314999500),null,new cljs.core.Keyword(null,"overlay-x","overlay-x",-1735070550),(-1),new cljs.core.Keyword(null,"overlay-y","overlay-y",799950675),(-1)], null));
var table_class_name = null;
var filter_criteria = null;
var select_cells = ((function (state,table_class_name,filter_criteria,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (cells){
return null;
});})(state,table_class_name,filter_criteria,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
;
var header_menu_col_index = null;
var show_filter_list = ((function (state,table_class_name,filter_criteria,select_cells,header_menu_col_index,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (x,y,col_index){
return null;
});})(state,table_class_name,filter_criteria,select_cells,header_menu_col_index,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
;
var columns_visibility = null;
var check_criteria = ((function (state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (rowData){
return null;
});})(state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
;
var set_cell_data = ((function (state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (row_index,col_index,val){
return null;
});})(state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
;
var table_data = null;
var tbodyClassName = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,set_cell_data,table_data,tbodyClassName,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (){
return cltable.cltableapp.reset_overlay.call(null);
});})(state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,set_cell_data,table_data,tbodyClassName,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
,new cljs.core.Keyword(null,"class","class",-2030961996),"table-outside-container"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-div-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"checkbox"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,set_cell_data,table_data,tbodyClassName,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (){
return cltable.cltableapp.is_filter_changed.call(null);
});})(state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,set_cell_data,table_data,tbodyClassName,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"is-filter","is-filter",-311084778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,set_cell_data,table_data,tbodyClassName,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec){
return (function (){
return cltable.cltableapp.on_mouse_up.call(null);
});})(state,table_class_name,filter_criteria,select_cells,header_menu_col_index,show_filter_list,columns_visibility,check_criteria,set_cell_data,table_data,tbodyClassName,map__19953,map__19953__$1,preheaders,header,header_cell_renderer,get_data_cell_renderer,get_cell_spec))
,new cljs.core.Keyword(null,"class","class",-2030961996),table_class_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cltable.cltableapp.table_header,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"preheaders","preheaders",-394352793),new cljs.core.Keyword(null,"show-header-menu","show-header-menu",-2039167960),new cljs.core.Keyword(null,"select-cells","select-cells",1011215176),new cljs.core.Keyword(null,"show-filter-list","show-filter-list",1923358954),new cljs.core.Keyword(null,"selected-indices","selected-indices",314999500),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"columns-visibility","columns-visibility",1942278325),new cljs.core.Keyword(null,"is-filter","is-filter",-311084778),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"filter-criteria","filter-criteria",-760144229),new cljs.core.Keyword(null,"header-cell-renderer","header-cell-renderer",-1111235556),new cljs.core.Keyword(null,"header-menu-col-index","header-menu-col-index",-1443331841),new cljs.core.Keyword(null,"show-hide-columns","show-hide-columns",-1776164417)],[(0),"header",preheaders,cltable.cltableapp.show_header_menu,select_cells,show_filter_list,new cljs.core.Keyword(null,"selected-indices","selected-indices",314999500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),header,columns_visibility,new cljs.core.Keyword(null,"is-filter","is-filter",-311084778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),filter_criteria,header_cell_renderer,header_menu_col_index,cltable.cltableapp.show_hide_columns])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cltable.cltableapp.table_data_body,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"set-cell-data-change","set-cell-data-change",1592898403),new cljs.core.Keyword(null,"sort-direction","sort-direction",-1635889628),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"get-data-cell-renderer","get-data-cell-renderer",1140304999),new cljs.core.Keyword(null,"select-cells","select-cells",1011215176),new cljs.core.Keyword(null,"selected-indices","selected-indices",314999500),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columns-visibility","columns-visibility",1942278325),new cljs.core.Keyword(null,"get-cell-spec","get-cell-spec",-1510551370),new cljs.core.Keyword(null,"is-filter","is-filter",-311084778),new cljs.core.Keyword(null,"check-criteria","check-criteria",1471166487),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"sort-col-index","sort-col-index",1440792889),new cljs.core.Keyword(null,"filter-criteria","filter-criteria",-760144229),new cljs.core.Keyword(null,"data","data",-232669377)],[set_cell_data,new cljs.core.Keyword(null,"sort-direction","sort-direction",-1635889628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),(1),"body",get_data_cell_renderer,select_cells,new cljs.core.Keyword(null,"selected-indices","selected-indices",314999500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),tbodyClassName,columns_visibility,get_cell_spec,new cljs.core.Keyword(null,"is-filter","is-filter",-311084778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),check_criteria,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"sort-col-index","sort-col-index",1440792889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),filter_criteria,table_data])], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cltable.cltableapp.table_overlay,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"ref","ref",1289896967),"overlay",new cljs.core.Keyword(null,"overlay-x","overlay-x",-1735070550),new cljs.core.Keyword(null,"overlay-x","overlay-x",-1735070550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"overlay-y","overlay-y",799950675),new cljs.core.Keyword(null,"overlay-y","overlay-y",799950675).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null)], null);
});
cltable.cltableapp.exampleTable = (function cltable$cltableapp$exampleTable(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cltable.cltableapp.cltable,cljs.core.PersistentArrayMap.EMPTY], null);
});
cltable.cltableapp.tabledemo = (function cltable$cltableapp$tabledemo(props){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"react table demo"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cltable.cltableapp.exampleTable], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is it."], null)], null);
});
});
cltable.cltableapp.run = (function cltable$cltableapp$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cltable.cltableapp.tabledemo], null),document.getElementById("tableDemoSection"));
});
goog.exportSymbol('cltable.cltableapp.run', cltable.cltableapp.run);

//# sourceMappingURL=cltableapp.js.map