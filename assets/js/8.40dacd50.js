(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(t,a,e){},328:function(t,a,e){},330:function(t,a,e){},332:function(t,a,e){"use strict";e(110),e(12),e(48),e(29),e(73),e(38),e(342);var n=e(81),i={name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,a){var i=this;Promise.all([Promise.all([e.e(0),e.e(5)]).then(e.t.bind(null,444,7)),Promise.all([e.e(0),e.e(5)]).then(e.t.bind(null,445,7))]).then((function(e){var o=Object(n.a)(e,1)[0];o=o.default;var s=t.algoliaOptions,l=void 0===s?{}:s;o(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(a)].concat(l.facetFilters||[])},l),handleSelected:function(t,a,e){var n=new URL(e.url),o=n.pathname,s=n.hash,l=o.replace(i.$site.base,"/");i.$router.push("".concat(l).concat(s))}}))}))},update:function(t,a){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,a)}}},o=(e(333),e(21)),s=Object(o.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[a("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);a.a=s.exports},333:function(t,a,e){"use strict";var n=e(327);e.n(n).a},334:function(t,a,e){"use strict";var n=e(328);e.n(n).a},336:function(t,a,e){"use strict";e(341);var n=e(332),i=e(366),o=e(367),s=e(335);function l(t,a){return t.ownerDocument.defaultView.getComputedStyle(t,null)[a]}var r={name:"Navbar",components:{SidebarButton:o.a,NavLinks:s.a,SearchBox:i.a,AlgoliaSearchBox:n.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,a=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-a-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(e(334),e(21)),d=Object(c.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(a){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.$page.frontmatter.hideSearch?e("div"):t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);a.a=d.exports},340:function(t,a,e){"use strict";var n=e(330);e.n(n).a},382:function(t,a,e){"use strict";e(183),e(180),e(111),e(181),e(74);var n=e(30),i=e(337),o=e(331),s=e.n(o),l="https://api.github.com/repos/inorichi/tachiyomi/releases/latest",r={components:{NavLink:i.a},data:function(){return{tagName:"",browserDownloadUrl:""}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var e,n,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.get(l);case 2:e=a.sent,n=e.data,i=n.assets.find((function(t){return t.name.includes(".apk")})),t.$data.tagName=n.tag_name,t.$data.browserDownloadUrl=i.browser_download_url;case 7:case"end":return a.stop()}}),a)})))()},methods:{showDownloads:function(){var t=this;this.$swal({title:"Download",text:"Select which version to use",confirmButtonText:"Stable",confirmButtonAriaLabel:"Stable",cancelButtonText:"Preview",cancelButtonAriaLabel:"Preview",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,customClass:{actions:"download-actions",cancelButton:"download-preview-button",closeButton:"download-close-button",confirmButton:"download-stable-button",container:"download-container",content:"download-content",header:"download-header",icon:"download-icon",popup:"download-popup",title:"download-title"},showClass:{popup:"animated zoomIn fastest"},hideClass:{popup:"animated zoomOut faster"}}).then((function(a){a.value?(t.$swal({title:"Downloading",text:"Stable version is being downloaded.",icon:"success",focusConfirm:!1,focusCancel:!1,timer:5e3,timerProgressBar:!0,customClass:{confirmButton:"download-confirm-button",container:"download-container"},showClass:{popup:"animated pulse faster"},hideClass:{popup:"animated zoomOut faster"}}),window.location.assign(t.$data.browserDownloadUrl||l),window.ga("send","event","Action","Download","Tachiyomi")):"cancel"===a.dismiss&&(t.$swal({title:"Downloading",text:"Preview version is being downloaded.",icon:"success",focusConfirm:!1,focusCancel:!1,timer:5e3,timerProgressBar:!0,customClass:{confirmButton:"download-confirm-button",container:"download-container"},showClass:{popup:"animated pulse faster"},hideClass:{popup:"animated zoomOut faster"}}),window.location.assign("https://tachiyomi.kanade.eu/latest"),window.ga("send","event","Action","Download","Tachiyomi Preview"))}))}}},c=(e(340),e(21)),d=Object(c.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n\t\t\t"+t._s(t.data.heroText||t.$title||"Tachiyomi")+"\n\t\t")]):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.data.tagline||t.$description||"Free and open source manga reader for Android.")+"\n\t\t")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("a",{staticClass:"action-button download",on:{click:t.showDownloads}},[t._v("\n\t\t\t\tDownload ↓\n\t\t\t")]),t._v(" "),e("NavLink",{staticClass:"action-button secondary",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))]),t._v(" "),a.image?e("img",{attrs:{src:t.$withBase(a.image)}}):t._e()])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("footer",{staticClass:"footer"},[t._v("\n\t\t"+t._s(t.data.footer)+"\n\t")]):t._e()],1)}),[],!1,null,null,null);a.a=d.exports}}]);