(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7+i4":function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),r=i("G3kJ"),o=i("VsC4");t.a=function(e){return n.a.createElement(o.e,{animate:{y:0,opacity:1},initial:{y:72,opacity:0},transition:{duration:1,ease:[.6,.05,-.01,.9]}},n.a.createElement(r.a,null,n.a.createElement(o.a,null,e.copy),n.a.createElement(o.b,{animate:{width:"0",left:"100%"},initial:{width:"100%",left:"0"},transition:{delay:.5,duration:.8,ease:[.6,.05,-.01,.9]}})))}},"9eSz":function(e,t,i){"use strict";var a=i("5NKs");t.__esModule=!0,t.default=void 0;var n,r=a(i("v06X")),o=a(i("XEEL")),d=a(i("uDP2")),l=a(i("j8BX")),s=a(i("q1tI")),c=a(i("17x9")),f=function(e){var t=(0,l.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed,a=m(t||i||[]);return a&&a.src},m=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},h=Object.create({}),g=function(e){var t=f(e),i=p(t);return h[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,y=w&&window.IntersectionObserver,x=new WeakMap;function v(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:r}),s.default.createElement("source",{media:n,srcSet:i,sizes:r}))}))}function S(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function j(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function C(e,t){var i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var E=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return i&&(i.observe(e),x.set(e,t)),function(){i.unobserve(e),x.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+s+o+d+i+a+t+r+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=s.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,o=e.ariaHidden,d=s.default.createElement(_,(0,l.default)({ref:t,src:i},r,{ariaHidden:o}));return a.length>1?s.default.createElement("picture",null,n(a),d):d})),_=s.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,r=e.style,o=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,p=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:i,srcSet:a,src:n},m,{onLoad:o,onError:c,ref:t,loading:f,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));_.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=w&&g(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&y&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||w&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=s.default.createRef(),i.placeholderRef=t.placeholderRef||s.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=f(e),(i=p(t))&&(h[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=f(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,d=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,w=e.durationFadeIn,y=e.Tag,x=e.itemProp,S=e.loading,C=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:E?1:0,transition:z?"opacity "+w+"ms":"none"},d),L="boolean"==typeof b?"lightgray":b,R={transitionDelay:w+"ms"},q=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&R,d,u),P={title:t,alt:this.state.isVisible?"":i,style:q,className:p,itemProp:x};if(h){var V=h,H=m(h);return s.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},s.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),L&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&R)}),H.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:V,generateSources:I}),H.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:V,generateSources:j}),this.state.isVisible&&s.default.createElement("picture",null,v(V),s.default.createElement(_,{alt:i,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:C})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:i,title:t,loading:S},H,{imageVariants:V}))}}))}if(g){var T=g,X=m(g),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:X.width,height:X.height},r);return"inherit"===r.display&&delete M.display,s.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(X.srcSet)},L&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:L,width:X.width,opacity:this.state.imgLoaded?0:1,height:X.height},z&&R)}),X.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:X.base64,spreadProps:P,imageVariants:T,generateSources:I}),X.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:X.tracedSVG,spreadProps:P,imageVariants:T,generateSources:j}),this.state.isVisible&&s.default.createElement("picture",null,v(T),s.default.createElement(_,{alt:i,title:t,width:X.width,height:X.height,sizes:X.sizes,src:X.src,crossOrigin:this.props.crossOrigin,srcSet:X.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:C})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:i,title:t,loading:S},X,{imageVariants:T}))}}))}return null},t}(s.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function R(e){return function(t,i,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[i]=e,n),t,"prop",a)}}z.propTypes={resolutions:N,sizes:L,fixed:R(c.default.oneOfType([N,c.default.arrayOf(N)])),fluid:R(c.default.oneOfType([L,c.default.arrayOf(L)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var q=z;t.default=q},FSkn:function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),r=i("Wbzz"),o=i("9eSz"),d=i.n(o);t.a=function(e){return n.a.createElement(r.StaticQuery,{query:"1022643890",render:function(t){var i=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return i?n.a.createElement(d.a,{alt:e.alt,fluid:i.node.childImageSharp.fluid}):null}})}},QKjG:function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),r=i("hiXJ"),o=i("ZMKu"),d=i("ob4f");t.a=function(e){var t=Object(o.c)(),i=Object(d.a)({triggerOnce:!0,rootMargin:"-100px"}),l=i[0],s=i[1];return Object(a.useEffect)((function(){s&&t.start("visible")}),[t,s]),n.a.createElement(r.f,{ref:l,animate:t,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:200}}},n.a.createElement(r.a,null,e.content))}},VsC4:function(e,t,i){"use strict";i.d(t,"e",(function(){return d})),i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return s})),i.d(t,"f",(function(){return c})),i.d(t,"c",(function(){return f})),i.d(t,"d",(function(){return u}));var a=i("vOnD"),n=i("ZMKu"),r=Object(a.keyframes)(["0%{transform:rotate(0deg);}25%{transform:rotate(10deg);}50%{transform:rotate(-10deg);}100%{transform:rotate(0deg);}"]),o=Object(a.keyframes)(["from{transform:translateX(0);}to{transform:translateX(-50%);}"]),d=Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__HomeContentSection",componentId:"hqtwjy-0"})(["margin:200px 0;"]),l=Object(a.default)(n.b.h2).withConfig({displayName:"homeStyles__Content",componentId:"hqtwjy-1"})(["width:100%;max-width:850px;margin:auto;font-size:1.8rem;font-weight:450;color:",";a{color:",";text-decoration:underline;}@media (max-width:768px){font-size:1.3rem;}span{display:inline-block;animation:"," 1.5s ease infinite;}"],(function(e){return e.theme.text}),(function(e){return e.theme.text}),r),s=Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__ContentCover",componentId:"hqtwjy-2"})(["position:absolute;top:-30px;left:0;width:100%;height:100%;padding:30px 0;background:",";"],(function(e){return e.theme.text})),c=Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__HomeFeaturedSection",componentId:"hqtwjy-3"})(["position:relative;a{margin-bottom:200px;position:relative;display:block;}"]),f=Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__FeaturedContent",componentId:"hqtwjy-4"})(["position:relative;width:100%;max-width:900px;margin:auto;box-sizing:border-box;color:",";video{box-sizing:border-box;border:"," solid 1px;}h2{font-size:1.4rem;}.meta{display:flex;h3{font-size:1rem;margin-left:1rem;font-weight:450;}}"],(function(e){return e.theme.text}),(function(e){return e.theme.pink})),u=a.default.div.withConfig({displayName:"homeStyles__FeaturedVideo",componentId:"hqtwjy-5"})(["z-index:-1;display:block;overflow:hidden;position:relative;object-fit:cover;.gatsby-image-wrapper{height:100%;object-fit:cover;border:"," 2px solid;}.marquee{position:absolute;bottom:0;left:-20%;width:300%;overflow:hidden;transform-origin:left center;transform:rotate(-45deg);background:",";box-shadow:3px 3px 4px #17223b;p{white-space:nowrap;color:",";animation:"," 25s linear infinite;}}"],(function(e){return e.theme.pink}),(function(e){return e.theme.pink}),(function(e){return e.theme.background}),o);a.default.div.withConfig({displayName:"homeStyles__FeaturedProjects",componentId:"hqtwjy-6"})(['margin-top:200px;button{background:#ea281e;color:#fff;position:relative;padding:20px;display:block;text-align:left;font-size:1.4rem;line-height:1;font-weight:600;border:none;span{margin-right:108px;display:block;}&:before,&:after{content:"";position:absolute;top:50%;right:20px;width:35px;height:7px;display:block;background:#fff;transform:translateY(-50%);}&:before{margin-top:-8px;}&:after{margin-top:8px;}}']),Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__HomeAboutSection",componentId:"hqtwjy-7"})([""]),a.default.div.withConfig({displayName:"homeStyles__About",componentId:"hqtwjy-8"})(["width:100%;h2{width:60%;font-size:2.3rem;font-weight:400;margin-left:124px;color:",";}p{max-width:440px;font-size:1rem;line-height:1.6rem;margin-left:124px;color:",";}"],(function(e){return e.theme.text}),(function(e){return e.theme.text})),a.default.div.withConfig({displayName:"homeStyles__Services",componentId:"hqtwjy-9"})([""]),Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__AccordionHeader",componentId:"hqtwjy-10"})(["width:100%;color:#ea281e;height:32px;display:flex;align-items:center;font-weight:600;font-size:1.15rem;margin:8px 0;"]),a.default.div.withConfig({displayName:"homeStyles__AccordionIcon",componentId:"hqtwjy-11"})(["display:flex;align-items:center;height:100%;margin-right:8px;span{width:16px;height:4px;background:#ea281e;transition:all 0.1s ease-in-out;}"]),Object(a.default)(n.b.div).withConfig({displayName:"homeStyles__AccordionContent",componentId:"hqtwjy-12"})(["overflow:hidden;padding-left:40px;span{width:100%;margin:8px 0;font-size:0.875rem;color:#ea281e;display:block;font-weight:300;}"])},h4ow:function(e,t,i){"use strict";var a=i("q1tI"),n=i.n(a),r=i("hiXJ"),o=i("ZMKu"),d=i("ob4f");t.a=function(e){var t=Object(o.c)(),i=Object(d.a)({triggerOnce:!0,rootMargin:"-100px"}),l=i[0],s=i[1];return Object(a.useEffect)((function(){s&&t.start("visible")}),[t,s]),n.a.createElement(r.h,{ref:l,animate:t,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:200}}},n.a.createElement("div",{className:"skill-flex"},n.a.createElement("div",{className:"tech-list"},n.a.createElement("h3",null,"Project Scope"),e.scope,n.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},e.linkDescription)),n.a.createElement("div",{className:"tech-list"},n.a.createElement("h3",null,"Technology used"),n.a.createElement("ul",null,e.skills))))}},hiXJ:function(e,t,i){"use strict";i.d(t,"h",(function(){return r})),i.d(t,"f",(function(){return o})),i.d(t,"a",(function(){return d})),i.d(t,"e",(function(){return l})),i.d(t,"g",(function(){return s})),i.d(t,"i",(function(){return c})),i.d(t,"b",(function(){return f})),i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return p}));var a=i("vOnD"),n=i("ZMKu"),r=Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ProjectSkillsContainer",componentId:"ft16yj-0"})(["box-sizing:border-box;background:",";color:",";padding:10px;margin:50px 0;width:100%;overflow:hidden;.skill-flex{max-width:850px;margin:auto;display:flex;@media (max-width:768px){flex-direction:column;}.tech-list{width:40%;padding-bottom:20px;@media (max-width:768px){width:100%;}&:first-child{flex-grow:2;width:60%;padding-right:30px;@media (max-width:768px){width:100%;}}a{color:",";text-decoration:underline;font-weight:600;font-size:1.3rem;}p{font-weight:450;font-size:1rem;}ul{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;li{box-sizing:border-box;font-weight:450;font-size:1rem;padding-right:0.5rem;}}}}"],(function(e){return e.theme.pink}),(function(e){return e.theme.text}),(function(e){return e.theme.text})),o=Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ProjectOneColumnFlex",componentId:"ft16yj-1"})(["display:flex;max-width:900px;margin:50px auto;"]),d=(Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ProjectTwoColumnFlex",componentId:"ft16yj-2"})(["display:flex;flex-direction:row;max-width:900px;margin:50px auto;"]),Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__Column",componentId:"ft16yj-3"})(["box-sizing:border-box;flex-grow:1;overflow:hidden;"])),l=a.default.p.withConfig({displayName:"projectStyles__ProjectCopy",componentId:"ft16yj-4"})(["max-width:850px;color:",";font-size:1.3rem;font-weight:450;margin:0 auto 50px auto;"],(function(e){return e.theme.text})),s=Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ProjectOneColumnFlexPadding",componentId:"ft16yj-5"})(["box-sizing:border-box;display:flex;max-width:900px;margin:50px auto;padding:20px;background:",";@media (max-width:768px){padding:10px;}"],(function(e){return e.theme.pink})),c=Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ProjectTwoColumnFlexPadding",componentId:"ft16yj-6"})(["box-sizing:border-box;display:flex;width:100%;max-width:900px;flex-direction:row;margin:50px auto;padding:20px;overflow:hidden;background:",";@media (max-width:768px){flex-direction:column;padding:10px;}"],(function(e){return e.theme.pink})),f=Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ColumnOne",componentId:"ft16yj-7"})(["box-sizing:border-box;width:50%;overflow:hidden;margin-right:10px;@media (max-width:768px){margin-right:0;margin-bottom:10px;}"]),u=Object(a.default)(n.b.div).withConfig({displayName:"projectStyles__ColumnTwo",componentId:"ft16yj-8"})(["box-sizing:border-box;width:50%;overflow:hidden;margin-left:10px;@media (max-width:768px){margin-left:0;}"]),p=a.default.div.withConfig({displayName:"projectStyles__HumanRotate",componentId:"ft16yj-9"})([".top-fun{position:relative;height:500px;width:100%;overflow:hidden;.magazine-rotate{position:absolute;top:50%;left:50%;transform-style:preserve-3d;will-change:transform;pointer-events:none;.face{position:absolute;background-size:cover;overflow:hidden;}.face-cover{height:31vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) translateZ(0.5vw);}.face-side{height:31vw;width:1vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateY(90deg) translateZ(11vw);}.face-spine{height:31vw;width:1vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateY(-90deg) translateZ(11vw);}.face-top{height:1vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateX(90deg) translateZ(15.5vw);}.face-bottom{height:1vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateX(-90deg) translateZ(15.5vw);}.face-back{height:31vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateY(-180deg) translateZ(0.5vw);}}}"])}}]);
//# sourceMappingURL=b26019549014cc811de94870dc9016bb414cd5bb-d6627b1ed983a57c7b12.js.map