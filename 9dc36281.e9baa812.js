(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return O}));var n=t(0),s=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),i=function(e){var a=s.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=i(e.components);return s.a.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},j=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,m=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=i(t),j=n,O=l["".concat(m,".").concat(j)]||l[j]||o[j]||c;return t?s.a.createElement(O,r(r({ref:a},p),{},{components:t})):s.a.createElement(O,r({ref:a},p))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,m=new Array(c);m[0]=j;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,m[1]=r;for(var p=2;p<c;p++)m[p]=t[p];return s.a.createElement.apply(null,m)}return s.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},89:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return m})),t.d(a,"metadata",(function(){return r})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return i}));var n=t(3),s=t(7),c=(t(0),t(115)),m={id:"params",title:"Params Interface",sidebar_label:"Params Interface"},r={unversionedId:"dev/params",id:"dev/params",isDocsHomePage:!1,title:"Params Interface",description:"The Interface",source:"@site/docs\\dev\\params.mdx",slug:"/dev/params",permalink:"/dev/params",editUrl:"https://github.com/stefanwebb/flowtorch/edit/master/website/docs/dev/params.mdx",version:"current",sidebar_label:"Params Interface",sidebar:"devsSidebar",previous:{title:"Bijector Interface",permalink:"/dev/bijector"},next:{title:"Docs",permalink:"/dev/docs"}},b=[{value:"The Interface",id:"the-interface",children:[{value:"Parent class",id:"parent-class",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Class Methods",id:"class-methods",children:[]}]}],p={toc:b};function i(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"the-interface"},"The Interface"),Object(c.b)("p",null,'A class satisfying the "Params interface" contains the following elements.'),Object(c.b)("h3",{id:"parent-class"},"Parent class"),Object(c.b)("p",null,"A bijector must inherit from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stefanwebb/flowtorch/blob/master/flowtorch/param.py"}),Object(c.b)("inlineCode",{parentName:"a"},"flowtorch.Params")),". This class defines important methods that are common to all parameter objects, such as ",Object(c.b)("inlineCode",{parentName:"p"},".__call__")," for instantiating a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stefanwebb/flowtorch/blob/master/flowtorch/param.py"}),Object(c.b)("inlineCode",{parentName:"a"},"flowtorch.ParamsModule"))," given shape information."),Object(c.b)("h3",{id:"metadata"},"Metadata"),Object(c.b)("p",null,"The following property is the only one currently used:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"autoregressive"),": a parameter object operating on vectors is autoregressive if the output ",Object(c.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("msub",{parentName:"mrow"},Object(c.b)("mi",{parentName:"msub"},"x"),Object(c.b)("mi",{parentName:"msub"},"i"))),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x_i")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.31166399999999994em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"i")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(c.b)("span",{parentName:"span"}))))))))))," is not a function of any ",Object(c.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("msub",{parentName:"mrow"},Object(c.b)("mi",{parentName:"msub"},"x"),Object(c.b)("mi",{parentName:"msub"},"j"))),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x_j")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.716668em",verticalAlign:"-0.286108em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.311664em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}}),"j")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.286108em"}}),Object(c.b)("span",{parentName:"span"}))))))))))," with ",Object(c.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"j"),Object(c.b)("mo",{parentName:"mrow"},">"),Object(c.b)("mi",{parentName:"mrow"},"i")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"j>i")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),">"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i")))))," (with a straightforward generalization to higher-dimensional objects). This property is used by the testing framework.")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"In the near future, the ",Object(c.b)("inlineCode",{parentName:"p"},"autoregressive")," property is likely to be removed, and a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/users/structure"}),"structured representation")," API used instead."))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Further metadata fields may be defined in the future. However, developers are not permitted to define their own without adding a default value to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stefanwebb/flowtorch/blob/master/flowtorch/param.py"}),Object(c.b)("inlineCode",{parentName:"a"},"flowtorch.Params")),"."))),Object(c.b)("h3",{id:"class-methods"},"Class Methods"),Object(c.b)("p",null,"Class methods define the initization of the lazy parameter object, how to instantiate the parameter object - that is, create any parameter vectors and neural networks, given shape information - and how to calculate the value of the parameters given a value from the distribution and possibly a context variable that is conditioned upon."),Object(c.b)("h4",{id:"__init__self--kwargs"},Object(c.b)("inlineCode",{parentName:"h4"},".__init__(self, *, **kwargs)")),Object(c.b)("p",null,"This optional method initializes a lazy parameter object, taking an arbitrary number of keyword arguments specific to the class. It must call the parent initializer as ",Object(c.b)("inlineCode",{parentName:"p"},"super().__init__()"),". Typically, the initializer is used to store settings and sometimes modify metadata. "),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"__init__")," must have sensible default values for all its arguments so that one can instantiate a params object with, for example, ",Object(c.b)("inlineCode",{parentName:"em"},"p = Params()"),".")," This design allows both easy creation and testing of params."),Object(c.b)("h4",{id:"_buildself-input_shape-torchsize-param_shapes-sequencetorchsize-context_dims-int---tuplennmodulelist-dictstr-any"},Object(c.b)("inlineCode",{parentName:"h4"},"._build(self, input_shape: torch.Size, param_shapes: Sequence[torch.Size], context_dims: int) -> Tuple[nn.ModuleList, Dict[str, Any]]")),Object(c.b)("p",null,"This method builds any necessary ",Object(c.b)("inlineCode",{parentName:"p"},"nn.Parameters")," or ",Object(c.b)("inlineCode",{parentName:"p"},"nn.Module"),"s as well as buffer objects, given the shape of an input, ",Object(c.b)("inlineCode",{parentName:"p"},"input_shape"),", the output shapes, ",Object(c.b)("inlineCode",{parentName:"p"},"param_shapes"),", and the number of dimensions, ",Object(c.b)("inlineCode",{parentName:"p"},"context_dims"),", of an optional context variable. It returns a tuple consisting of an ",Object(c.b)("inlineCode",{parentName:"p"},"nn.ModuleList")," for the learnable parameters and an optional ",Object(c.b)("inlineCode",{parentName:"p"},"Dict[str, Any]")," mapping strings to buffer objects."),Object(c.b)("p",null,"Buffer objects differ from learnable parameters in that they do not partake in gradient descent updates, but share with parameters that they are serialized when the object is saved and loaded to disk. Buffers are typically used to store tensors that are convenient to calculate and cache during the construction of the object, such as masking matrices."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"._build")," method is called by ",Object(c.b)("inlineCode",{parentName:"p"},"Params.__call__")," during the process of instantiating a non-lazy ",Object(c.b)("inlineCode",{parentName:"p"},"flowtorch.ParamsModule")," using the lazy ",Object(c.b)("inlineCode",{parentName:"p"},"flowtorch.Params")," and specified shapes. ",Object(c.b)("inlineCode",{parentName:"p"},"._build")," should operate on any arbitrary input and parameter shapes."),Object(c.b)("h4",{id:"_forwardself-x-torchtensor-context-torchtensor-modules-nnmodulelist---sequencetorchtensor"},Object(c.b)("inlineCode",{parentName:"h4"},"._forward(self, x: torch.Tensor, context: torch.Tensor, modules: nn.ModuleList) -> Sequence[torch.Tensor]")),Object(c.b)("p",null,"This method evaluates the parameters, ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"\u03b8"),Object(c.b)("mo",{parentName:"mrow"},"="),Object(c.b)("mi",{parentName:"mrow"},"f"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(c.b)("mi",{parentName:"mrow"},"x"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),";"),Object(c.b)("mi",{parentName:"mrow"},"z"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"{"),Object(c.b)("msub",{parentName:"mrow"},Object(c.b)("mi",{parentName:"msub"},"\u03b1"),Object(c.b)("mi",{parentName:"msub"},"i")),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"}"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\theta=f(x;z,\\{\\alpha_i\\})")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"\u03b8"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),";"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.04398em"}}),"z"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"{"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.0037em"}}),"\u03b1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.31166399999999994em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.0037em",marginRight:"0.05em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"i")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(c.b)("span",{parentName:"span"})))))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"}"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),", which in general are a function of the input, ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"x")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"))))),", context variable, ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"z")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"z")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.04398em"}}),"z"))))),", and a list of modules, ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"{"),Object(c.b)("msub",{parentName:"mrow"},Object(c.b)("mi",{parentName:"msub"},"\u03b1"),Object(c.b)("mi",{parentName:"msub"},"i")),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"}")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\{\\alpha_i\\}")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"{"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.0037em"}}),"\u03b1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.31166399999999994em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.0037em",marginRight:"0.05em"}}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"i")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(c.b)("span",{parentName:"span"})))))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"}"))))),". Note that this may not always be the case, for instance, when the parameters are ",Object(c.b)("inlineCode",{parentName:"p"},"nn.Parameter")," tensors that do not depend on ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"x")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"))))),", or when the ",Object(c.b)("inlineCode",{parentName:"p"},"Params")," object is a placeholder for no parameters."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Certain ",Object(c.b)("inlineCode",{parentName:"p"},"Params")," are incompatible with certain ",Object(c.b)("inlineCode",{parentName:"p"},"Bijector"),"s. For example, an autoregressive bijector requires an autoregressive params. We are currently deciding on a solution to enforce/check this and will likely release with v2 of the library."))))}i.isMDXComponent=!0}}]);