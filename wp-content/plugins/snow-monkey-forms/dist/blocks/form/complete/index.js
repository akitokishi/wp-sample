(()=>{"use strict";const e=window.wp.blocks,n=JSON.parse('{"u2":"snow-monkey-forms/form--complete"}'),o=window.wp.element,t=window.wp.blockEditor,s=window.wp.i18n;(0,e.registerBlockType)(n.u2,{icon:{foreground:"#cd162c",src:"editor-ul"},edit:function(){const n=(0,o.useMemo)((()=>(0,e.getBlockTypes)().map((e=>e.name.match(/^snow-monkey-forms\//)||e.parent?null:e.name)).filter((e=>e))),[]),l=(0,t.useBlockProps)({className:["components-panel","snow-monkey-forms-setting-panel"]});return(0,o.createElement)("div",{...l},(0,o.createElement)("div",{className:"components-panel__header edit-post-sidebar-header"},(0,s.__)("Complete","snow-monkey-forms")),(0,o.createElement)("div",{className:"components-panel__body is-opened"},(0,o.createElement)(t.InnerBlocks,{allowedBlocks:n,templateLock:!1})))},save:function(){return(0,o.createElement)(t.InnerBlocks.Content,null)}})})();