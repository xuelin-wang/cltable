// Compiled by ClojureScript 1.7.145 {}
goog.provide('cltable.util');
goog.require('cljs.core');
cltable.util.int_range = (function cltable$util$int_range(i,pred){
if(cljs.core.not.call(null,pred.call(null,i))){
return null;
} else {
var from_1 = cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p1__24188_SHARP_){
return pred.call(null,p1__24188_SHARP_);
}),cljs.core.range.call(null,i,(-1),(-1))));
var to_PLUS_1 = cljs.core.first.call(null,cljs.core.drop_while.call(null,((function (from_1){
return (function (p1__24189_SHARP_){
return pred.call(null,p1__24189_SHARP_);
});})(from_1))
,cljs.core.range.call(null,i,(10000),(1))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.range,(from_1 + (1)),to_PLUS_1], null);
}
});
cltable.util.key_mirror = (function cltable$util$key_mirror(keys){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,keys,keys));
});
cltable.util.elem = (function cltable$util$elem(id){
return document.getElementById(id);
});

//# sourceMappingURL=util.js.map