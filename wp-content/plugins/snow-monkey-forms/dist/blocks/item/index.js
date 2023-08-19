(()=>{var e={184:(e,t)=>{var l;!function(){"use strict";var s={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l)){if(l.length){var m=a.apply(null,l);m&&e.push(m)}}else if("object"===n){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var o in l)s.call(l,o)&&l[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},t={};function l(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,l),n.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-forms/item"}'),s=window.wp.element;var a=l(184),n=l.n(a);const m=window.lodash,o=window.wp.components,r=window.wp.blockEditor,i=window.wp.i18n,c=[{attributes:{label:{type:"string",source:"html",selector:".smf-item__label",default:""},description:{type:"string",source:"html",selector:".smf-item__description",default:""},labelFor:{type:"string",source:"attribute",selector:".smf-label",attribute:"for",default:""},isDisplayLabelColumn:{type:"boolean",default:!0}},save({attributes:e,className:t}){const{label:l,description:a,isDisplayLabelColumn:m}=e,o=n()("smf-item",t,{"smf-item--divider":!m});return(0,s.createElement)("div",{...r.useBlockProps.save({className:o})},m&&(0,s.createElement)("div",{className:"smf-item__col smf-item__col--label"},(0,s.createElement)("div",{className:"smf-item__label"},(0,s.createElement)(r.RichText.Content,{value:l})),!r.RichText.isEmpty(a)&&(0,s.createElement)("div",{className:"smf-item__description"},(0,s.createElement)(r.RichText.Content,{value:a}))),(0,s.createElement)("div",{className:"smf-item__col smf-item__col--controls"},(0,s.createElement)("div",{className:"smf-item__controls"},(0,s.createElement)(r.InnerBlocks.Content,null))))}},{attributes:{label:{type:"string",source:"html",selector:".smf-item__label",default:""},description:{type:"string",source:"html",selector:".smf-item__description",default:""},isDisplayLabelColumn:{type:"boolean",default:!0}},save({attributes:e,className:t}){const{label:l,description:a,isDisplayLabelColumn:m}=e,o=n()("smf-item",t,{"smf-item--divider":!m});return(0,s.createElement)("div",{...r.useBlockProps.save({className:o}),tabIndex:"-1"},m&&(0,s.createElement)("div",{className:"smf-item__col smf-item__col--label"},(0,s.createElement)("div",{className:"smf-item__label"},(0,s.createElement)(r.RichText.Content,{value:l})),!r.RichText.isEmpty(a)&&(0,s.createElement)("div",{className:"smf-item__description"},(0,s.createElement)(r.RichText.Content,{value:a}))),(0,s.createElement)("div",{className:"smf-item__col smf-item__col--controls"},(0,s.createElement)("div",{className:"smf-item__controls"},(0,s.createElement)(r.InnerBlocks.Content,null))))}},{attributes:{label:{type:"string",default:""}},save({attributes:e}){const{label:t}=e;return(0,s.createElement)("div",{className:"smf-item"},(0,s.createElement)("div",{className:"smf-item__col smf-item__col--label"},(0,s.createElement)("span",{className:"smf-item__label"},(0,s.createElement)(r.RichText.Content,{value:t}))),(0,s.createElement)("div",{className:"smf-item__col smf-item__col--controls"},(0,s.createElement)("div",{className:"smf-item__controls"},(0,s.createElement)(r.InnerBlocks.Content,null))))}}];(0,e.registerBlockType)(t.u2,{icon:{foreground:"#cd162c",src:"text"},edit:function({attributes:t,setAttributes:l,isSelected:a,className:c}){const{label:_,description:f,labelFor:d,isDisplayLabelColumn:u}=t,p=["snow-monkey-forms/snow-monkey-form","snow-monkey-forms/item"],b=(0,s.useMemo)((()=>{const t=(0,e.getBlockTypes)();return(0,m.compact)(t.map((e=>p.includes(e.name)?null:e.name)))}),[]),v=(0,s.useMemo)((()=>{const t=(0,e.getBlockTypes)();return(0,m.compact)(t.map((e=>p.includes(e.name)||0!==e.name.indexOf("snow-monkey-forms/")?null:e.name)))}),[]),E=n()("smf-item",c,{"smf-item--divider":!u}),y=(0,r.useBlockProps)({className:E}),h=(0,r.useInnerBlocksProps)({className:"smf-item__controls"},{allowedBlocks:b,prioritizedInserterBlocks:v,templateLock:!1});return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(r.InspectorControls,null,(0,s.createElement)(o.PanelBody,{title:(0,i.__)("Block settings","snow-monkey-forms")},(0,s.createElement)(o.ToggleControl,{label:(0,i.__)("Display label column","snow-monkey-forms"),checked:u,onChange:e=>l({isDisplayLabelColumn:e})}),!!u&&(0,s.createElement)(o.TextControl,{label:(0,i.__)("label for","snow-monkey-forms"),help:(0,i.__)("Add a label element and link it with a form field of your choice. Enter the id of the form field you want to link to.","snow-monkey-forms"),value:d,onChange:e=>l({labelFor:e})}))),(0,s.createElement)("div",{...y},u&&(0,s.createElement)("div",{className:"smf-item__col smf-item__col--label"},(0,s.createElement)("div",{className:"smf-item__label"},d?(0,s.createElement)("label",{htmlFor:d},(0,s.createElement)(r.RichText,{tagName:"span",className:"smf-item__label__text",value:_,onChange:e=>l({label:e}),placeholder:(0,i.__)("Label","snow-monkey-forms")})):(0,s.createElement)(r.RichText,{tagName:"span",className:"smf-item__label__text",value:_,onChange:e=>l({label:e}),placeholder:(0,i.__)("Label","snow-monkey-forms")})),(!r.RichText.isEmpty(f)||a)&&(0,s.createElement)("div",{className:"smf-item__description"},(0,s.createElement)(r.RichText,{value:f,onChange:e=>l({description:e}),placeholder:(0,i.__)("Description","snow-monkey-forms")}))),(0,s.createElement)("div",{className:"smf-item__col smf-item__col--controls"},(0,s.createElement)("div",{...h}))))},save:function({attributes:e,className:t}){const{label:l,description:a,labelFor:m,isDisplayLabelColumn:o}=e,i=n()("smf-item",t,{"smf-item--divider":!o});return(0,s.createElement)("div",{...r.useBlockProps.save({className:i})},o&&(0,s.createElement)("div",{className:"smf-item__col smf-item__col--label"},(0,s.createElement)("div",{className:"smf-item__label"},m?(0,s.createElement)("label",{htmlFor:m},(0,s.createElement)(r.RichText.Content,{tagName:"span",className:"smf-item__label__text",value:l})):(0,s.createElement)(r.RichText.Content,{tagName:"span",className:"smf-item__label__text",value:l})),!r.RichText.isEmpty(a)&&(0,s.createElement)("div",{className:"smf-item__description"},(0,s.createElement)(r.RichText.Content,{value:a}))),(0,s.createElement)("div",{className:"smf-item__col smf-item__col--controls"},(0,s.createElement)("div",{...r.useInnerBlocksProps.save({className:"smf-item__controls"})})))},deprecated:c})})()})();