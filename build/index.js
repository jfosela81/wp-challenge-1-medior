(()=>{"use strict";var o,e={250:()=>{const o=window.wp.blocks,e=window.React,r=window.wp.i18n,t=window.wp.blockEditor,s=JSON.parse('{"u2":"create-block/my-posts-block"}');(0,o.registerBlockType)(s.u2,{edit:function(){return(0,e.createElement)("p",{...(0,t.useBlockProps)()},(0,r.__)("My Posts Block – hello from the editor!","my-posts-block"))},save:function(){return(0,e.createElement)("p",{...t.useBlockProps.save()},"My Posts Block – hello from the saved content!")}})}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.m=e,o=[],t.O=(e,r,s,n)=>{if(!r){var l=1/0;for(p=0;p<o.length;p++){for(var[r,s,n]=o[p],c=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(t.O).every((o=>t.O[o](r[i])))?r.splice(i--,1):(c=!1,n<l&&(l=n));if(c){o.splice(p--,1);var a=s();void 0!==a&&(e=a)}}return e}n=n||0;for(var p=o.length;p>0&&o[p-1][2]>n;p--)o[p]=o[p-1];o[p]=[r,s,n]},t.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={826:0,431:0};t.O.j=e=>0===o[e];var e=(e,r)=>{var s,n,[l,c,i]=r,a=0;if(l.some((e=>0!==o[e]))){for(s in c)t.o(c,s)&&(t.m[s]=c[s]);if(i)var p=i(t)}for(e&&e(r);a<l.length;a++)n=l[a],t.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return t.O(p)},r=globalThis.webpackChunkmy_posts_block=globalThis.webpackChunkmy_posts_block||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var s=t.O(void 0,[431],(()=>t(250)));s=t.O(s)})();