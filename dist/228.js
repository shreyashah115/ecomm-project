(self.webpackChunkecomm_store_project=self.webpackChunkecomm_store_project||[]).push([[228],{7228:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(7294);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const l=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},o({},e));return a.createElement("section",{className:"Article product"},a.createElement("header",null,a.createElement("a",{href:"../product.html"},a.createElement("div",{className:"image-container"},a.createElement("img",{className:"product",srcSet:"".concat(t.images[0].default," 1920w, ").concat(t.images[0].default," 960w, ").concat(t.images[1].default," 480w"),sizes:"(min-width: 1920px) 500px, (min-width: 800px) 500px, 480px",src:t.images[0].default,alt:t.alt}),a.createElement("img",{className:"product-2",srcSet:"".concat(t.images[3].default," 1920w, ").concat(t.images[3].default," 960w"),sizes:"(min-width: 1920px) 500px, (min-width: 800px) 500px, 480px",src:t.images[3],alt:t.alt}))),a.createElement("h3",null,t.name),a.createElement("p",null,t.description),a.createElement("data",{value:t.amount},a.createElement("strong",null,"$",t.amount,".00")),a.createElement("div",{className:"ratings"},a.createElement("div",{dangerouslySetInnerHTML:{__html:t.starString}}),a.createElement("span",{className:"total-ratings"},"(",t.total_ratings," ratings)"))),a.createElement("footer",{className:"product-footer"},a.createElement("button",{type:"button",className:"main-button add-cart"},a.createElement("span",{className:"material-icons-round"}," add_shopping_cart ")," Add to Cart"),a.createElement("button",{type:"button",className:"main-button add-wishlist"},a.createElement("span",{className:"material-icons-round add-fav"},"favorite_border"),"Add to wishlist")))};var c=r(4277),i=r(9938);r(4545),r(2073);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,s=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(s.push(a.value),!t||s.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const p=function(e){var t=u((0,a.useState)(e.currentPage),2),r=t[0],n=t[1];(0,a.useEffect)((function(){n(e.currentPage)}),[e]);var s,o,m,p,f,d=[];return f='<span class="material-icons-round star-rate"> star </span>',e.filteredProducts.forEach((function(e){var t=0,r=[];if(Number.isInteger(e.ratings))for(;t<e.ratings;)r.push(f),t++;else{for(;t<Math.floor(e.ratings);)r.push(f),t++;r.push('<span class="material-icons-round star-rate"> star_half </span>')}for(var a=r.length;a<5;)r.push('<span class="material-icons-round star-rate"> star_border </span>'),a++;var n=r.join("");e.starString=n})),o=6,s=e.filteredProducts.length,p=(m=(r-1)*o)+o,d=e.filteredProducts.slice(m,p).map((function(e,t){var r=e.name,n=e.description,s=e.amount,o=e.ratings,c=e.type,i=e.color,u=e.total_ratings,m=e.images,p=e.alt,f=e.starString;return a.createElement(l,{key:t,name:r,description:n,amount:s,ratings:o,type:c,color:i,total_ratings:u,images:m,alt:p,starString:f})})),a.createElement(a.Fragment,null,a.createElement("div",{className:"results-container"},a.createElement("h2",{className:"subheading"},"Results")),a.createElement("section",{className:"results",id:"results"},d),a.createElement(c.Z,{style:s<1?{}:{display:"none"}}),a.createElement("nav",{"aria-label":"Pagination",className:"pagination",style:s>0?{}:{display:"none"}},a.createElement("p",null,m+1," to ",p<s?p:s," of"," ",s," ",1===s?"product":"products"," found."),a.createElement(i.Z,{defaultCurrent:r,current:r,total:s,defaultPageSize:o,onChange:function(e){return n(e)}})))}}}]);
//# sourceMappingURL=228.js.map