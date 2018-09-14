webpackJsonp([10],{112:function(e,t,n){function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();n(159);var o=n(0),r=_interopRequireDefault(o),s=n(3),l=n(6),c=n(1),d=n(5),u=n(161),p=_interopRequireDefault(u),f=n(17),m=_interopRequireDefault(f),h=n(15),k=_interopRequireDefault(h),g=function(e){function Seckill(){_classCallCheck(this,Seckill);var e=_possibleConstructorReturn(this,(Seckill.__proto__||Object.getPrototypeOf(Seckill)).apply(this,arguments));return e.clstagPrefix=s.CONSTS.CLSTAGPREFIX,e.poi="core|seckill",e.preloadedData=null,e.sliderOptions={arrows:!0,lazyLoad:!0,indicators:!1,autoPlay:!1,infinite:!0,fade:!1,easeType:"ease-in-out",speed:500,zIndex:1},e.sideSliderOptions={lazyLoad:!1,indicators:!0,indicatorHoverToSlide:!0,autoPlay:!0,infinite:!0,easeType:"ease-in-out",speed:500,zIndex:1},e.state={title:"京东秒杀",link:s.URLS.SECKILL,adwords:"FLASH DEALS",timeRemain:1,list:[],isWide:c.isWide,hide:!1,miaoshaAdvance:100},e.requestData=e.requestData.bind(e),e.onTick=e.onTick.bind(e),e}return _inherits(Seckill,e),a(Seckill,[{key:"componentDidMount",value:function(){function componentDidMount(){var e=this;this.requestData(),_.eventCenter.on("isWideChange",function(t){e.setState({isWide:t.detail.isWide})})}return componentDidMount}()},{key:"dataCheck",value:function(){function dataCheck(e){if(!e||!e.indexMiaoSha||e.indexMiaoSha.length<8||!e.brandImgNew||!e.newBrandImg2||!e.timeRemain)return!1}return dataCheck}()},{key:"processData",value:function(){function processData(e){var t=this;e.indexMiaoSha.forEach(function(e){e.imageurl=t.processGoodImage(e)}),e.chnImg1=this.processChnImage(e.newBrandImg2),e.chnImg2=this.processChnImage(e.brandImgNew)}return processData}()},{key:"requestData",value:function(){function requestData(){var e=this;if(this.preloadedData){var t=this.preloadedData;this.setState({list:t.indexMiaoSha,chnImg1:t.chnImg1,chnImg2:t.chnImg2,timeRemain:t.timeRemain,miaoshaAdvance:t.miaoshaAdvance||100},function(){e.preloadedData=null})}else(0,c.loadAsync)({url:s.APIS.SECKILL,name:"jsonpSeckill",params:{pin:l.USER.pin,uuid:l.USER.uuid,isAdvance:0},backup:[s.APIS.SECKILL_BACKUP,s.APIS.SECKILL_STOBACKUP],dataCheck:this.dataCheck,reportBackupId:24,reportHidedFloor:3}).then(function(t){e.processData(t),e.setState({list:t.indexMiaoSha,chnImg1:t.chnImg1,chnImg2:t.chnImg2,timeRemain:t.timeRemain,miaoshaAdvance:t.miaoshaAdvance||100,loaded:!0},function(){e.loaded=!0})})["catch"](function(){e.setState({hide:!0})})}return requestData}()},{key:"preloadData",value:function(){function preloadData(){var e=this;this.preloading||(this.preloading=!0,(0,c.loadAsync)({url:s.APIS.SECKILL,name:"jsonpSeckillPreload",params:{pin:l.USER.pin,uuid:l.USER.uuid,isAdvance:1},dataCheck:this.dataCheck}).then(function(t){e.processData(t),e.preloadedData=t,e.preloading=!1})["catch"](function(){e.preloading=!1}))}return preloadData}()},{key:"onTick",value:function(){function onTick(e){if(this.loaded){e/1e3<this.state.miaoshaAdvance&&!this.preloadedData&&this.preloadData()}}return onTick}()},{key:"getCountdown",value:function(){function getCountdown(){var e=Date.now(),t=this.state.timeRemain,n=void 0;return t>0&&(n=e+1e3*parseInt(t,10)),r["default"].createElement(p["default"],{className:"sk_cd",endTime:n,showTimeDeco:!1,onTick:this.onTick,onTimesup:this.requestData})}return getCountdown}()},{key:"processGoodImage",value:function(){function processGoodImage(e){return(0,c.processImage)(e.imageurl,{resize:["280x280","140x140"],replacem:e.wareId,webp:!0})}return processGoodImage}()},{key:"processChnImage",value:function(){function processChnImage(e){return(0,c.processImage)(e,{clip:"180x260",resize:["360x520","180x260"]})}return processChnImage}()},{key:"render",value:function(){function render(){if(this.state.hide)return"";try{if(!this.state.loaded)return r["default"].createElement("div",{className:"sk mod_lazyload"});var e=this.clstagPrefix,t=this.poi,n=this.state.list,a=this.state.ext_columns||{},o=this.state.isWide?{slidesToShow:4,slidesToScroll:4}:{slidesToShow:3,slidesToScroll:3},l=i({},this.sliderOptions,o),u=r["default"].createElement("div",{className:"sk_hd"},r["default"].createElement("a",{className:"sk_hd_lk",href:""+s.URLS.SECKILL,target:"_blank",clstag:e+"|"+t+"_a",onClick:function(){function onClick(){(0,d.logClick)(i({poi:t+"_a",url:""+s.URLS.SECKILL},a))}return onClick}()},r["default"].createElement("div",{className:"sk_tit"},this.state.title),r["default"].createElement("div",{className:"sk_subtit"},this.state.adwords),r["default"].createElement("i",{className:"sk_ico"}),r["default"].createElement("div",{className:"sk_desc"},"本场距离结束还剩"),this.getCountdown())),p=n.length?r["default"].createElement(m["default"],i({className:"sk_list_inner"},l,{prevArrowText:r["default"].createElement("i",{className:"iconfont",clstag:e+"|"+t+"_sl",onClick:function(){function onClick(){(0,d.logClick)({poi:t+"_sl",comment:"秒杀"})}return onClick}()},""),nextArrowText:r["default"].createElement("i",{className:"iconfont",clstag:e+"|"+t+"_sr",onClick:function(){function onClick(){(0,d.logClick)({poi:t+"_sr",comment:"秒杀"})}return onClick}()},"")}),n.map(function(n,a){return r["default"].createElement("div",{className:"sk_item sk_item_"+(1+a)},r["default"].createElement("a",{className:"sk_item_lk",href:""+s.URLS.SECKILL_PREFIX+n.wareId,target:"_blank",title:n.wname,clstag:e+"|"+t+"_b"+(0,c.padding)(1+a,2),onClick:function(){function onClick(){(0,d.logClick)(i({poi:t+"_b"+(0,c.padding)(1+a,2),url:""+s.URLS.SECKILL_PREFIX+n.wareId},n.ext_columns))}return onClick}()},n.tagText&&r["default"].createElement("div",{className:"sk_item_tag"},r["default"].createElement("b",{className:"mod_ver"}),r["default"].createElement("span",{className:"sk_item_tag_txt"},n.tagText)),r["default"].createElement(k["default"],{className:"sk_item_img",src:n.imageurl}),r["default"].createElement("p",{className:"sk_item_name"},n.wname),r["default"].createElement("div",{className:"sk_item_price"},r["default"].createElement("span",{className:"mod_price sk_item_price_new"},r["default"].createElement("i",null,"¥"),r["default"].createElement("span",null,n.miaoShaPrice)),n.isNewGoods?r["default"].createElement("span",{className:"mod_price sk_item_price_origin sk_item_price_isnew"},r["default"].createElement("span",null,"新品")):r["default"].createElement("span",{className:"mod_price sk_item_price_origin"},r["default"].createElement("i",null,"¥"),r["default"].createElement("span",null,n.jdPrice)))))})):"",f="";this.state.chnImg1&&this.state.chnImg2&&(f=r["default"].createElement(m["default"],i({className:"sk_chn_inner"},this.sideSliderOptions,{customIndicator:function(){function customIndicator(n){return r["default"].createElement("i",{clstag:e+"|"+t+"_cs"+(0,c.padding)(1+n,2)})}return customIndicator}()}),r["default"].createElement("a",{className:"sk_chn_lk",href:s.URLS.SECKILL_BRAND,target:"_blank",clstag:e+"|"+t+"_c01",onClick:function(){function onClick(){(0,d.logClick)({poi:t+"_c01",url:s.URLS.SECKILL_BRAND,comment:"秒杀"})}return onClick}()},r["default"].createElement(k["default"],{className:"sk_chn_img",src:this.state.chnImg1})),r["default"].createElement("a",{className:"sk_chn_lk",href:s.URLS.SECKILL_TYPE,target:"_blank",clstag:e+"|"+t+"_c02",onClick:function(){function onClick(){(0,d.logClick)({poi:t+"_c02",url:s.URLS.SECKILL_TYPE,comment:"秒杀"})}return onClick}()},r["default"].createElement(k["default"],{className:"sk_chn_img",src:this.state.chnImg2}))));var h=r["default"].createElement("div",{className:"sk_bd"},r["default"].createElement("div",{className:"sk_list"},p),r["default"].createElement("div",{className:"sk_chn"},f));return r["default"].createElement("div",{id:"J_seckill",className:"sk"},r["default"].createElement("div",{className:"grid_c1 sk_inner"},u,h))}catch(_){c.dconsole.log(_)}}return render}()}]),Seckill}(r["default"].Component);t["default"]=g},141:function(e,t,n){e.exports=n.p+"static/images/sprite.seckill.png"},142:function(e,t,n){e.exports=n.p+"static/images/sprite.seckill@2x.png"},159:function(e,t,n){var i=n(160);"string"==typeof i&&(i=[[e.i,i,""]]);var a={};a.transform=void 0;n(8)(i,a);i.locals&&(e.exports=i.locals)},160:function(e,t,n){t=e.exports=n(7)(undefined),t.push([e.i,".sk {\n  height: 275px;\n  margin-bottom: 30px; }\n\n.sk_inner {\n  background: #fff;\n  overflow: hidden; }\n\n.sk_hd {\n  position: relative;\n  float: left;\n  width: 190px;\n  height: 275px;\n  background: #e83632;\n  color: #fff; }\n\n.sk_hd_lk {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: #fff; }\n\n.sk_hd_lk:hover {\n  color: #fff; }\n\n.sk_tit {\n  position: absolute;\n  /* font-family: 'fzzxh'; */\n  left: 0;\n  width: 100%;\n  text-align: center;\n  top: 42px;\n  /* font-size: 36px; */\n  font-size: 34px; }\n\n.sk_subtit {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  top: 90px;\n  /* color: #edac8e; */\n  color: #f19999;\n  color: rgba(255, 255, 255, 0.5);\n  /* font-size: 24px; */\n  font-size: 20px; }\n\n.sk_ico {\n  position: absolute;\n  left: 86px;\n  top: 126px;\n  display: block;\n  width: 20px;\n  height: 33px;\n  background-image: url("+n(141)+");\n  background-position: -35px -25px; }\n\n.sk_desc {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  top: 170px;\n  font-size: 16px; }\n\n.sk_cd {\n  position: absolute;\n  top: 212px;\n  left: 30px;\n  height: 40px; }\n\n.sk .cd_day {\n  display: none; }\n\n.sk .cd_item {\n  position: relative;\n  float: left;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  background-color: #2f3430;\n  margin-right: 5px; }\n\n.sk .cd_item::before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 50%;\n  height: 1px;\n  background: #e83632; }\n\n.sk .cd_item_txt {\n  position: relative;\n  line-height: 40px;\n  font-weight: bold;\n  /* font-size: 16px; */\n  font-size: 20px; }\n\n.sk_list {\n  position: relative;\n  float: left;\n  width: 799px;\n  border-right: solid 1px #f0f0f0;\n  height: 275px;\n  overflow: hidden; }\n\n.sk_list_inner {\n  position: relative;\n  width: 800px;\n  height: 275px; }\n\n.sk_item {\n  position: relative;\n  float: left;\n  width: 200px;\n  height: 275px; }\n\n.sk_item::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 1px;\n  height: 275px;\n  background: #f0f0f0; }\n\n.sk_item_lk {\n  position: relative;\n  display: block;\n  width: 190px;\n  height: 275px;\n  text-align: center;\n  margin: auto; }\n\n/* todo */\n.sk_item_tag {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 40px;\n  background-image: url("+n(141)+");\n  background-position: 0 -25px;\n  text-align: center;\n  z-index: 1; }\n\n.sk_item_tag_txt {\n  font-size: 12px;\n  color: #fff;\n  line-height: 14px;\n  display: inline-block;\n  vertical-align: 2px;\n  padding-top: 2px; }\n\n.sk_operate {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px; }\n\n.sk_operate_item {\n  width: 30px;\n  height: 28px;\n  border-left: solid 1px #f0f0f0;\n  border-bottom: solid 1px #f0f0f0;\n  cursor: pointer; }\n\n.sk_operate_item_ico {\n  width: 12px;\n  height: 12px; }\n\n/* .sk_operate_item_cart .sk_operate_item_ico {\n  display: block;\n  position: relative;\n  left: 9px;\n  top: 9px;\n  background: url(images/sk_item_ico_cart.png?__sprite=sk);\n}\n\n.sk_operate_item_like .sk_operate_item_ico {\n  display: block;\n  position: relative;\n  left: 9px;\n  top: 9px;\n  background: url(images/sk_item_ico_like.png?__sprite=sk);\n}\n\n.sk_operate_item_more .sk_operate_item_ico {\n  display: block;\n  position: relative;\n  left: 9px;\n  top: 9px;\n  background: url(images/sk_item_ico_more.png?__sprite=sk);\n} */\n.sk_item_img {\n  position: absolute;\n  width: 140px;\n  height: 140px;\n  left: 50%;\n  margin-left: -70px;\n  top: 40px;\n  -webkit-transition: opacity ease .2s;\n  -o-transition: opacity ease .2s;\n  -moz-transition: opacity ease .2s;\n  transition: opacity ease .2s; }\n\n.slider_item:hover .sk_item_img {\n  opacity: .8; }\n\n.sk_item_shadow {\n  position: absolute;\n  display: block;\n  top: 160px;\n  left: 15px;\n  width: 170px;\n  height: 20px;\n  background-image: url("+n(141)+");\n  background-position: 0 0; }\n\n.sk_item_name {\n  position: absolute;\n  top: 190px;\n  left: 0;\n  width: 160px;\n  padding: 0 15px;\n  line-height: 30px;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.sk_item_price {\n  position: absolute;\n  left: 15px;\n  top: 230px;\n  width: 160px;\n  height: 20px;\n  padding: 1px;\n  background: #e6382f;\n  line-height: 20px; }\n\n.sk_item_price_new {\n  float: left;\n  width: 80px;\n  height: 20px;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  font-weight: bold; }\n\n.sk_item_price_origin {\n  float: left;\n  width: 80px;\n  height: 20px;\n  background: #fff;\n  text-align: center;\n  color: #b7bcb8;\n  font-size: 12px;\n  text-decoration: line-through; }\n\n.sk_item_price_isnew {\n  text-decoration: none; }\n\n.sk_chn {\n  position: relative;\n  float: left;\n  width: 180px;\n  height: 260px;\n  padding: 8px 10px 7px; }\n\n.sk_chn_inner {\n  width: 100%;\n  height: 100%; }\n\n.sk_chn_lk {\n  display: block;\n  width: 180px; }\n\n.sk_chn_img {\n  width: 180px;\n  height: 260px; }\n\n.sk_chn .slider_indicators {\n  bottom: 16px; }\n\n.sk_chn .slider_indicators_btn {\n  background: #c0c0c0;\n  width: 6px;\n  height: 6px;\n  margin: 4px; }\n\n.sk_chn .slider_indicators_btn::after {\n  content: none; }\n\n.sk_chn .slider_indicators_btn_active {\n  background: #e33333; }\n\n.sk_bd {\n  float: left; }\n\n.o2_mini .sk_list {\n  width: 598px; }\n\n.o2_mini .sk_list_inner {\n  width: 599px; }\n\n.sk .slider_control {\n  top: 110px;\n  /* opacity: 0; */ }\n\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3 / 2), only screen and (min-device-pixel-ratio: 1.5) {\n  .sk_ico {\n    background-image: url("+n(142)+");\n    background-position: -32.5px 0;\n    -moz-background-size: 52.5px 40px;\n         background-size: 52.5px 40px; }\n  .sk_item_tag {\n    background-image: url("+n(142)+");\n    background-position: 0 0;\n    -moz-background-size: 52.5px 40px;\n         background-size: 52.5px 40px; } }\n",""])},161:function(e,t,n){function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function sliceIterator(e,t){var n=[],i=!0,a=!1,o=undefined;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(l){a=!0,o=l}finally{try{!i&&s["return"]&&s["return"]()}finally{if(a)throw o}}return n}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return sliceIterator(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(0),r=function(e){return e&&e.__esModule?e:{"default":e}}(o),s=function(e){function Countdown(){_classCallCheck(this,Countdown);var e=_possibleConstructorReturn(this,(Countdown.__proto__||Object.getPrototypeOf(Countdown)).apply(this,arguments));return e.timer=null,e.state={timeRemain:0},e}return _inherits(Countdown,e),a(Countdown,[{key:"componentWillReceiveProps",value:function(){function componentWillReceiveProps(e){this.init(e)}return componentWillReceiveProps}()},{key:"componentDidMount",value:function(){function componentDidMount(){this.init(this.props)}return componentDidMount}()},{key:"init",value:function(){function init(e){this.lastTick=Date.now(),this.endTime=e.endTime,this.interval=e.interval,this.onTick=e.onTick,this.onTimesup=e.onTimesup,clearTimeout(this.timer),this.tick()}return init}()},{key:"tick",value:function(){function tick(){var e=this,t=Date.now();this.lastTick=this.lastTick+this.interval;var n=this.endTime-t;if(this.setState({timeRemain:n},function(){e.onTick&&e.onTick(e.state.timeRemain)}),n<=0)return this.onTimesup&&this.onTimesup();this.timer=setTimeout(function(){e.tick()},this.lastTick-t)}return tick}()},{key:"zeroPad",value:function(){function zeroPad(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2,n=Math.pow(10,t);return String(Math.round(Math.max(e,0)%n+n)).substr(1)}return zeroPad}()},{key:"getCdStr",value:function(){function getCdStr(e){var t=this,n=[],i=Math.round(e/1e3);return[60,60,24,1].forEach(function(e){n.push(t.zeroPad(i%e)),i=Math.floor(i/e)}),n}return getCdStr}()},{key:"render",value:function(){function render(){var e=this.getCdStr(this.state.timeRemain),t=i(e,4),n=t[0],a=t[1],o=t[2],s=t[3],l=this.props,c=l.className,d=l.showTimeSplit,u=l.showTimeDeco,p=u===undefined||u;return r["default"].createElement("div",{className:c},r["default"].createElement("div",{className:"cd"},r["default"].createElement("div",{className:"cd_item cd_day"},r["default"].createElement("span",{className:"cd_item_txt"},s),p&&r["default"].createElement("span",{"class":"cd_item_deco"},"天")),d&&r["default"].createElement("div",{"class":"cd_split"},":"),r["default"].createElement("div",{className:"cd_item cd_hour"},r["default"].createElement("span",{className:"cd_item_txt"},o),p&&r["default"].createElement("span",{"class":"cd_item_deco"},"时")),d&&r["default"].createElement("div",{"class":"cd_split"},":"),r["default"].createElement("div",{className:"cd_item cd_minute"},r["default"].createElement("span",{className:"cd_item_txt"},a),p&&r["default"].createElement("span",{"class":"cd_item_deco"},"分")),d&&r["default"].createElement("div",{"class":"cd_split"},":"),r["default"].createElement("div",{className:"cd_item cd_second"},r["default"].createElement("span",{className:"cd_item_txt"},n),p&&r["default"].createElement("span",{"class":"cd_item_deco"},"秒"))))}return render}()}]),Countdown}(r["default"].Component);s.defaultProps={interval:1e3,endTime:0,lastTick:0},t["default"]=s}});