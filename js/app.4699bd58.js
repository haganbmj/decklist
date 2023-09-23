(function(e){function t(t){for(var n,c,i=t[0],s=t[1],r=t[2],d=0,u=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(t);while(u.length)u.shift()();return l.push.apply(l,r||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==a[s]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},l=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d216214":"dda534f6","chunk-2d216257":"69e90091","chunk-7298eda6":"6c6e86ac"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=n);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var r=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+l+")",r.name="ChunkLoadError",r.type=n,r.request=l,o[1](r)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=r;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a=Object(n["e"])('<header class="navbar bg-gray"><section class="navbar-section"><a href="https://griselbrand.com" class="navbar-brand text-bold mr-2">GRISELBRAND.COM</a><a href="https://proxy.griselbrand.com" class="btn btn-link">Proxy</a><a href="https://decklist.griselbrand.com" class="btn btn-link">Decklist</a></section><section class="navbar-section hide-sm"><a href="https://twitter.com/haganbmj" target="_blank" class="btn ml-1">Twitter</a><a href="https://github.com/haganbmj/decklist" target="_blank" class="btn btn-primary ml-1">GitHub</a></section></header>',1),l={id:"content",class:"container"};function c(e,t,o,c,i,s){const r=Object(n["i"])("MainPage");return Object(n["h"])(),Object(n["c"])(n["a"],null,[a,Object(n["d"])("div",l,[Object(n["g"])(r)])],64)}const i={class:"section"},s={class:"columns"},r={class:"column col-6 col-sm-12"},d={class:"form-group form-horizontal"},m=Object(n["d"])("h4",null,"Personal Information",-1),u={class:"form-group"},b=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"first-name"},"First Name",-1),p={class:"form-group"},f=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"last-name"},"Last Name",-1),h={class:"form-group form-horizontal"},g=Object(n["d"])("h4",null,"Event Information",-1),v={class:"form-group"},O=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"event-name"},"Event Name",-1),j={class:"form-group"},S=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"event-location"},"Event Location",-1),F={class:"form-group"},x=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"event-date"},"Event Date",-1),k={class:"form-group form-horizontal"},y=Object(n["d"])("h4",null,"Deck Information",-1),N={class:"form-group"},D=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"deck-name"},"Deck Name",-1),z={class:"form-group"},w=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"deck-designer"},"Deck Designer",-1),C={class:"form-group form-horizontal"},L=Object(n["d"])("h4",null,[Object(n["f"])("Main Deck "),Object(n["d"])("span",{class:"icon-info tooltip","data-tooltip":"Use 0 for an empty quantity."})],-1),E={class:"form-group"},U=Object(n["d"])("h4",null,"Sideboard",-1),T={class:"form-group"},M={class:"column col-6 col-sm-12"},P={class:"form-group form-horizontal"},q=Object(n["d"])("h4",null,"Configuration",-1),B={class:"form-group"},R=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"game-select"},"Game",-1),V={class:"col-9 col-sm-12"},I=Object(n["d"])("option",{value:"magic"},"Magic: The Gathering",-1),A=Object(n["d"])("option",{value:"lorcana"},"Lorcana",-1),G=[I,A],_={class:"form-group"},W=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"style-select"},"Style",-1),J={class:"col-9 col-sm-12"},H=Object(n["d"])("option",{value:"wotc"},"Wizards of the Coast",-1),Y=[H],K={class:"form-group"},Q=Object(n["d"])("label",{class:"form-label col-3 col-sm-12",for:"style-select"},"Sorting",-1),$={class:"col-9 col-sm-12"},X=Object(n["d"])("option",{value:"unsorted"},"Unsorted",-1),Z=Object(n["d"])("option",{value:"alphabetical"},"Alphabetical",-1),ee=[X,Z],te={class:"form-group btn-group btn-group-block"},oe=Object(n["d"])("span",{class:"icon-floppy-disk"},null,-1),ne=["src"],ae=Object(n["d"])("div",{class:"column col-12 pt-2 pb-2"},[Object(n["d"])("div",{class:"divider"})],-1),le={class:"column col-12"},ce={class:"text-muted text-small text-center"},ie=["href"];function se(e,t,o,a,l,c){return Object(n["h"])(),Object(n["c"])("div",i,[Object(n["d"])("div",s,[Object(n["d"])("div",r,[Object(n["d"])("form",d,[m,Object(n["d"])("div",u,[b,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"first-name",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.input.firstName=e),placeholder:"First Name",autofocus:""},null,512),[[n["l"],l.input.firstName]])]),Object(n["d"])("div",p,[f,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"last-name",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.input.lastName=e),placeholder:"Last Name"},null,512),[[n["l"],l.input.lastName]])])]),Object(n["d"])("form",h,[g,Object(n["d"])("div",v,[O,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"event-name",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.input.eventName=e),placeholder:"Event Name"},null,512),[[n["l"],l.input.eventName]])]),Object(n["d"])("div",j,[S,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"event-location",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>l.input.eventLocation=e),placeholder:"Event Location"},null,512),[[n["l"],l.input.eventLocation]])]),Object(n["d"])("div",F,[x,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"event-date",type:"date","onUpdate:modelValue":t[4]||(t[4]=e=>l.input.eventDate=e),placeholder:"Event Date"},null,512),[[n["l"],l.input.eventDate]])])]),Object(n["d"])("form",k,[y,Object(n["d"])("div",N,[D,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"deck-name",type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>l.input.deckName=e),placeholder:"Deck Name"},null,512),[[n["l"],l.input.deckName]])]),Object(n["d"])("div",z,[w,Object(n["m"])(Object(n["d"])("input",{class:"form-input col-9 col-sm-12",id:"deck-designer",type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>l.input.deckDesigner=e),placeholder:"Deck Designer"},null,512),[[n["l"],l.input.deckDesigner]])])]),Object(n["d"])("form",C,[L,Object(n["d"])("div",E,[Object(n["m"])(Object(n["d"])("textarea",{class:"form-input",id:"deck-input",rows:"7","onUpdate:modelValue":t[7]||(t[7]=e=>l.input.decklist=e),placeholder:"4 Wild Nacatl\n0x Griselbrand\n3x Price of Progress\n4 Strip Mine (ATQ) 82d\n2 Tinker Bell - Giant Fairy\n4 Rafiki - Mysterious Sage"},null,512),[[n["l"],l.input.decklist]])]),U,Object(n["d"])("div",T,[Object(n["m"])(Object(n["d"])("textarea",{class:"form-input",id:"deck-input",rows:"7","onUpdate:modelValue":t[8]||(t[8]=e=>l.input.sideboard=e),placeholder:"// Sideboard\nOrim's Chant\n3x Rough // Tumble\nSB: dead/gone"},null,512),[[n["l"],l.input.sideboard]])])])]),Object(n["d"])("div",M,[Object(n["d"])("form",P,[q,Object(n["d"])("div",B,[R,Object(n["d"])("div",V,[Object(n["m"])(Object(n["d"])("select",{class:"form-select select",id:"game-select","onUpdate:modelValue":t[9]||(t[9]=e=>l.config.game=e),style:{width:"100%"}},G,512),[[n["k"],l.config.game]])])]),Object(n["d"])("div",_,[W,Object(n["d"])("div",J,[Object(n["m"])(Object(n["d"])("select",{class:"form-select select",id:"style-select","onUpdate:modelValue":t[10]||(t[10]=e=>l.config.style=e),style:{width:"100%"}},Y,512),[[n["k"],l.config.style]])])]),Object(n["d"])("div",K,[Q,Object(n["d"])("div",$,[Object(n["m"])(Object(n["d"])("select",{class:"form-select select",id:"sorting-select","onUpdate:modelValue":t[11]||(t[11]=e=>l.config.sorting=e),style:{width:"100%"}},ee,512),[[n["k"],l.config.sorting]])])])]),Object(n["d"])("form",te,[Object(n["d"])("button",{id:"save",class:"btn btn-block btn-primary",type:"button",onClick:t[12]||(t[12]=e=>c.save())},[oe,Object(n["f"])(" Save")])]),Object(n["d"])("iframe",{id:"decklist-preview",src:c.preview,style:{width:"100%",height:"580px"}},null,8,ne)]),ae,Object(n["d"])("div",le,[Object(n["d"])("div",ce,[Object(n["d"])("p",null,[Object(n["f"])("Built at "+Object(n["j"])(c.getBuildTimestamp())+" from ",1),Object(n["d"])("a",{href:"https://github.com/haganbmj/decklist/commit/"+c.getBuildSha(),target:"_blank"},Object(n["j"])(c.getBuildSha()),9,ie),Object(n["f"])(".")])])])])])}var re=o("f7fe"),de=o.n(re),me=(o("13d5"),o("8baf"));o("14d9");function ue(e,t="mainboard"){let o={mainboard:[],sideboard:[],errors:[]},n=o.mainboard;"sideboard"===t&&(n=o.sideboard);for(let a of e.split("\n")){if(a=a.trim(),(/Sideboard/i.test(a)||/^SB:/i.test(a))&&(n=o.sideboard),/Sideboard/i.test(a)||/^\/\//.test(a))continue;if(""===a){n.push({quantity:0,name:""});continue}let e=/^(?:SB:\s)?(?:(\d+)?x?\s)?([^(]+)(?:\s\(.+\) .+)?$/i.exec(a);if(null===e){o.errors.push(a),console.warn("Failed to parse line: "+a);continue}let[,t,l]=e;void 0===t&&(t=1),n.push({quantity:parseInt(t),name:l.trim()})}return o}function be(e,t){const o=new me["a"]({orientation:"portrait",unit:"pt",format:"letter"});let{mainboard:n,sideboard:a}=ue(e.decklist,"mainboard"),{sideboard:l}=ue(e.sideboard,"sideboard");return a=a.concat(l),"alphabetical"===t.sorting&&(n=n.sort((e,t)=>e.name.localeCompare(t.name)).filter(e=>""!==e.name),a=a.sort((e,t)=>e.name.localeCompare(t.name)).filter(e=>""!==e.name)),pe(o),fe(o,n,a),he(o,e.firstName,e.lastName,e.eventName,e.eventLocation,e.eventDate,e.deckName,e.deckDesigner),o}function pe(e){e.setLineWidth(1),e.setFillColor(230,230,232),e.rect(135,54,441,24),e.rect(135,78,441,24),e.rect(355,54,221,72),e.rect(552,30,24,24,"FD"),e.rect(445,30,55,24),e.rect(27,140,24,628,"FD"),e.rect(27,140,24,349,"FD"),e.rect(250,748,56,22),e.rect(524,694,56,22),e.rect(320,722,260,48),e.setLineWidth(.5),e.rect(135,54,54,48),e.rect(355,54,54,72),e.rect(320,722,130,48),e.rect(320,722,260,12),e.rect(320,734,260,12),e.rect(320,746,260,12)}function fe(e,t,o){e.setLineWidth(.5);for(let n=186;n<750;n+=18)e.line(62,n,106,n),e.line(116,n,306,n);for(let n=186;n<386;n+=18)e.line(336,n,380,n),e.line(390,n,580,n);for(let n=438;n<696;n+=18)e.line(336,n,380,n),e.line(390,n,580,n);e.setFont("times","bold"),e.setFontSize(13),e.text("Main Deck:",62,149),e.setFontSize(11),e.text("# in deck:",62,166),e.text("Card Name:",122,166),e.setFont("times","bold"),e.setFontSize(13),e.text("Main Deck Continued:",336,149),e.setFontSize(11),e.text("# in deck:",336,166),e.text("Card Name:",396,166),e.setFont("times","bold"),e.setFontSize(13),e.text("Sideboard:",336,404),e.setFontSize(11),e.text("# in deck:",336,420),e.text("Card Name:",396,420);for(let n=0,a=84,l=182;n<2;n++){e.setFont("helvetica","normal"),e.setFontSize(12);for(let o=0,c=o+32*n;o<32&&c<44&&c<t.length;o++,c++,l+=18){let o=t[c];0!==o["quantity"]&&e.text(o["quantity"].toString(),a,l,"center"),e.text(o["name"],a+38,l)}a=358,l=182}e.setFont("helvetica","normal"),e.setFontSize(12);for(let n=0,a=356,l=434;n<15&&n<o.length;n++,l+=18){let t=o[n];0!==t["quantity"]&&e.text(t["quantity"].toString(),a,l,"center"),e.text(t["name"],a+38,l)}if(e.setFont("times","bold"),e.setFontSize(11),e.text("Total Number of Cards in Main Deck:",62,768),e.setFont("helvetica","normal"),e.setFontSize(20),!t.some(e=>0===e.quantity&&""!==e.name)){let o=t.reduce((e,t)=>e+t["quantity"],0);0!==o&&e.text(String(o),278,766,null,null,"center")}if(e.setFont("times","bold"),e.setFontSize(11),e.text("Total Number of Cards in Sideboard:",336,714),e.setFont("helvetica","normal"),e.setFontSize(20),!o.some(e=>0===e.quantity&&""!==e.name)){let t=o.reduce((e,t)=>e+t["quantity"],0);0!==t&&e.text(String(t),552,712,null,null,"center")}}function he(e,t,o,n,a,l,c,i){if(e.setFontSize(15),e.setFont("times","bold"),e.text("DECK REGISTRATION SHEET",135,45),e.setFont("times","normal"),e.setFontSize(7),e.text("Table",421,40),e.text("Number",417,48),e.text("First Letter of",508,40),e.text("Last Name",516,48),o.length>0){const t=(""+o[0]).toUpperCase();e.setFont("helvetica","bold"),e.setFontSize(20),e.text(t,564,49,null,null,"center")}e.setFont("times","normal"),e.setFontSize(7),e.text("Date:",169,68),e.setFont("helvetica","normal"),e.setFontSize(11),e.text(l,192,69.5),e.setFont("times","normal"),e.setFontSize(7),e.text("Event:",387,68),e.setFont("helvetica","normal"),e.setFontSize(11),e.text(n,412,69.5),e.setFont("times","normal"),e.setFontSize(7),e.text("Location:",158,92),e.setFont("helvetica","normal"),e.setFontSize(11),e.text(a,192,93.5),e.setFont("times","normal"),e.setFontSize(7),e.text("Deck Name:",370,92),e.setFont("helvetica","normal"),e.setFontSize(11),e.text(c,412,93.5),e.setFont("times","normal"),e.setFontSize(7),e.text("Deck Designer:",362,116),e.setFont("helvetica","normal"),e.setFontSize(11),e.text(i,412,117.5),e.setFont("times","bold"),e.setFontSize(13),e.text("PRINT CLEARLY USING ENGLISH CARD NAMES",36,121),e.setFont("times","normal"),e.setFontSize(7),e.text("Last Name:",41,760,90),e.setFont("helvetica","bold"),e.setFontSize(11),e.text(o,43,724,90),e.setFont("times","normal"),e.setFontSize(7),e.text("First Name:",41,481,90),e.setFont("helvetica","bold"),e.setFontSize(11),e.text(t,43,444,90),e.setFont("times","bold"),e.setFontSize(5),e.text("FOR OFFICAL USE ONLY",324,730),e.setFont("times","normal"),e.setFontSize(6),e.text("Deck Check Rd #:",324,742),e.text("Status:",324,754),e.text("Judge:",324,766),e.text("Main/SB:",454,730),e.text("/",520,730),e.text("Deck Check Rd #:",454,742),e.text("Status:",454,754),e.text("Judge:",454,766)}var ge={name:"MainPage",components:{},data(){return{config:{game:"",style:"",sorting:""},input:{firstName:"",lastName:"",eventName:"",eventLocation:"",eventDate:"",deckName:"",deckDesigner:"",decklist:"",sideboard:""},cards:[],errors:[],doc:void 0}},computed:{preview:function(){var e;return null===(e=this.doc)||void 0===e?void 0:e.output("dataurlstring")}},mounted(){this.loadConfig(),this.debouncedUpdateDoc=de()(this.updateDoc,500),this.debouncedUpdateDoc()},watch:{input:{handler(){this.debouncedUpdateDoc()},deep:!0},config:{handler(){this.debouncedUpdateDoc()},deep:!0}},methods:{storeConfig(){localStorage.game=this.config.game,localStorage.style=this.config.style,localStorage.sorting=this.config.sorting,localStorage.firstName=this.input.firstName,localStorage.lastName=this.input.lastName},loadConfig(){var e,t,o,n,a;this.config.game=null!==(e=localStorage.game)&&void 0!==e?e:"magic",this.config.style=null!==(t=localStorage.style)&&void 0!==t?t:"wotc",this.config.sorting=null!==(o=localStorage.sorting)&&void 0!==o?o:"unsorted",this.input.firstName=null!==(n=localStorage.firstName)&&void 0!==n?n:"",this.input.lastName=null!==(a=localStorage.lastName)&&void 0!==a?a:""},updateDoc(){this.storeConfig(),this.doc=be(this.input,this.config)},save(){this.doc.save("decklist.pdf")},print(){},getBuildTimestamp(){return document.documentElement.dataset.buildTimestamp},getBuildSha(){return document.documentElement.dataset.buildSha||"local"}}},ve=(o("a7b0"),o("6b0d")),Oe=o.n(ve);const je=Oe()(ge,[["render",se]]);var Se=je,Fe={name:"App",components:{MainPage:Se}};o("a140");const xe=Oe()(Fe,[["render",c]]);var ke=xe;o("bc12"),o("8966");Object(n["b"])(ke).mount("#app")},"7e38":function(e,t,o){},a140:function(e,t,o){"use strict";o("c8b8")},a7b0:function(e,t,o){"use strict";o("7e38")},c8b8:function(e,t,o){}});
//# sourceMappingURL=app.4699bd58.js.map