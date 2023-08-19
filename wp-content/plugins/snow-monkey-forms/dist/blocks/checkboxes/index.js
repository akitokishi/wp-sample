(()=>{var e={184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"u2":"snow-monkey-forms/control-checkboxes"}'),o=window.wp.element;var r=n(184),l=n.n(r);const a=window.wp.blockEditor,s=window.wp.compose,c=window.wp.i18n,i=window.wp.components,m=({value:e,onChange:t})=>{const n={};return""===e&&(n.borderColor="#d94f4f"),(0,o.createElement)(i.TextControl,{label:(0,c.__)("name","snow-monkey-forms"),help:(0,c.__)("Required. Input a unique machine-readable name.","snow-monkey-forms"),value:e,onChange:t,required:!0,style:n})},u=({value:e,onChange:t})=>(0,o.createElement)(i.TextareaControl,{label:(0,c.__)("value","snow-monkey-forms"),help:(0,c.sprintf)(
// translators: %1$s: line-break-char
(0,c.__)("Optional. Initial value. Enter in the following format: value%1$s","snow-monkey-forms"),"↵"),value:e,onChange:t}),p=({value:e,onChange:t})=>{const n={};return""===e&&(n.borderColor="#d94f4f"),(0,o.createElement)(i.TextareaControl,{label:(0,c.__)("options","snow-monkey-forms"),value:e,help:(0,c.sprintf)(
// translators: %1$s: line-break-char
(0,c.__)('Required. Enter in the following format: "value" : "label"%1$s or value%1$s',"snow-monkey-forms"),"↵"),onChange:t,required:!0,style:n})},d=window.lodash;function f(e){const t=e.replace(/\r?\n/g,"\n").split("\n");return(0,d.uniqBy)(t.map((e=>{const t=(()=>{try{return JSON.parse(`{ ${e} }`)}catch(t){return{[e]:e}}})();return{value:Object.keys(t)[0],label:Object.values(t)[0]}})),"value").map((e=>{const t={};return t[e.value]=e.label,t}))}const h=(0,s.createHigherOrderComponent)((e=>t=>{const{attributes:n,setAttributes:r}=t,{validations:l}=n;if(void 0===l)return(0,o.createElement)(e,{...t});const s=JSON.parse(l);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,c.__)("Validation","snow-monkey-forms")},(0,o.createElement)(i.ToggleControl,{label:(0,c.__)("Required","snow-monkey-forms"),checked:!!s.required,onChange:e=>{r({validations:JSON.stringify((0,d.merge)(s,{required:e}))})}}))),(0,o.createElement)(e,{...t}))}),"withValidations"),v=(0,s.compose)(h)((({attributes:e,setAttributes:t})=>{const{name:n,options:r,values:s,delimiter:d,direction:h,description:v,isDisplayDescriptionConfirm:b}=e;(0,o.useEffect)((()=>{""===n&&t({name:`checkboxes-${((new Date).getTime()+Math.floor(8999*Math.random()+1e3)).toString(32)}`}),""===r&&t({options:'value1\n"value2" : "label2"\n"value3" : "label3"'})}));const w=f(r),y=f(s).map((e=>Object.keys(e)[0])),k=l()("smf-checkboxes-control",{[`smf-checkboxes-control--${h}`]:!!h}),_=(0,a.useBlockProps)({className:"smf-placeholder"});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,c.__)("Attributes","snow-monkey-forms")},(0,o.createElement)(m,{value:n,onChange:e=>t({name:e})}),(0,o.createElement)(p,{value:r,onChange:e=>t({options:e})}),(0,o.createElement)(u,{value:s,onChange:e=>t({values:e})}),(0,o.createElement)(i.TextControl,{label:(0,c.__)("Delimiter","snow-monkey-forms"),help:(0,c.__)("Optional. Character that separates each item.","snow-monkey-forms"),value:d,onChange:e=>t({delimiter:e})})),(0,o.createElement)(i.PanelBody,{title:(0,c.__)("Block settings","snow-monkey-forms")},(0,o.createElement)(i.SelectControl,{label:(0,c.__)("Direction","snow-monkey-forms"),value:h,options:[{value:"",label:(0,c.__)("Default","snow-monkey-forms")},{value:"horizontal",label:(0,c.__)("Horizontal","snow-monkey-forms")},{value:"vertical",label:(0,c.__)("Vertical","snow-monkey-forms")}],onChange:e=>t({direction:e})}),(0,o.createElement)(i.TextControl,{label:(0,c.__)("Description","snow-monkey-forms"),value:v,onChange:e=>t({description:e})}),(0,o.createElement)(i.ToggleControl,{label:(0,c.__)("Description is also displayed on the confirmation screen","snow-monkey-forms"),checked:b,onChange:e=>{t({isDisplayDescriptionConfirm:e})}}))),(0,o.createElement)("div",{..._,"data-name":n},(0,o.createElement)("div",{className:k},(0,o.createElement)("div",{className:"smf-checkboxes-control__control"},w.map((e=>{const t=Object.keys(e)[0],r=Object.values(e)[0];return(0,o.createElement)("div",{className:"smf-label",key:t},(0,o.createElement)("label",{htmlFor:`${n}-${t}`},(0,o.createElement)("span",{className:"smf-checkbox-control"},(0,o.createElement)("input",{type:"checkbox",name:`${n}[]`,value:t,checked:y.includes(t),disabled:"disabled",className:"smf-checkbox-control__control",id:`${n}-${t}`}),(0,o.createElement)("span",{className:"smf-checkbox-control__label"},r))))})))),v&&(0,o.createElement)("div",{className:"smf-control-description"},v)))}));(0,e.registerBlockType)(t.u2,{icon:{src:function(){return(0,o.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{color:"#cd162c"}},(0,o.createElement)("rect",{fill:"none",x:"3.75",y:"3.75",width:"16.5",height:"16.5",rx:"1.53571",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.createElement)("path",{fill:"none",d:"M16.6232 7.99994L10.6895 15.9801L7.24875 13.4218",stroke:"currentColor",strokeWidth:"1.5"}))}},edit:v,save:()=>null})})()})();