import{d as L,G as U,Z as j,V as O,W as w,c as r,e as o,O as u,h,w as f,f as x,n as c,ab as e,g as p,k as A,t as C,F as M,M as B,N as $,P as k,U as G,am as K,l as D,aI as Z,aJ as Q,aK as ee,r as q,aL as P,aM as te,aN as ae,av as ne,aO as se,aP as T,aw as re,ax as H,ay as oe,az as E,H as F,p as R,j as J,I as ie,ah as le,ai as ce,aj as de,al as ue,s as pe,ao as ge}from"./Dzs-k-Wa.js";import{_ as fe}from"./BSLoGe2r.js";import{_ as X}from"./AOrFA1zL.js";const me=L({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const s=a,d=U(()=>{const n=j("gap-16 sm:gap-y-24",s.orientation==="vertical"&&"flex flex-col",s.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),g=s.orientation==="vertical"?"text-center":"",m=j("mt-10 flex flex-wrap gap-x-6 gap-y-3",s.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:n,base:g,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:m}}),{ui:t,attrs:y}=O("landing.hero",w(s,"ui"),d,w(s,"class"),!0);return(n,g)=>{const m=G,v=K;return r(),o("div",k({class:e(t).wrapper},e(y)),[u(n.$slots,"top"),h(v,{class:c(e(t).container)},{default:f(()=>{var i;return[x("div",{class:c(e(t).base)},[n.$slots.headline?(r(),o("div",{key:0,class:c(e(t).headline)},[u(n.$slots,"headline")],2)):p("",!0),x("h1",{class:c(e(t).title)},[u(n.$slots,"title",{},()=>[A(C(a.title),1)])],2),a.description||n.$slots.description?(r(),o("div",{key:1,class:c(e(t).description)},[u(n.$slots,"description",{},()=>[A(C(a.description),1)])],2)):p("",!0),(i=a.links)!=null&&i.length||n.$slots.links?(r(),o("div",{key:2,class:c(e(t).links)},[u(n.$slots,"links",{},()=>[(r(!0),o(M,null,B(a.links,(_,b)=>(r(),$(m,k({key:b,ref_for:!0},_,{onClick:_.click}),null,16,["onClick"]))),128))])],2)):p("",!0)],2),u(n.$slots,"default")]}),_:3},8,["class"]),u(n.$slots,"bottom")],16)}}}),he={},ye={class:"bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4"},be=Z('<div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"><svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none"><defs><pattern id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path></pattern></defs><rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%"></rect></svg></div>',1),ke=[be];function ve(a,s){return r(),o("div",ye,ke)}const _e=D(he,[["render",ve]]),xe=Q(ee);function we(a,s={}){const{x:d,y:t}=xe(s),y=q(a??(window==null?void 0:window.document.body)),n=q(0),g=q(0);return P&&te([y,d,t],()=>{const m=ae(y);if(!m)return;const{left:v,top:i}=m.getBoundingClientRect(),_=d.value-(v+P.scrollX),b=t.value-(i+P.scrollY);Math.abs(_)>1500||Math.abs(b)>1500||P.screen.width<=800||(n.value=_,g.value=b)},{immediate:!0,throttle:50}),{x:d,y:t,elementX:n,elementY:g}}const $e=a=>(R("data-v-a8ea38d3"),a=a(),J(),a),Se=$e(()=>x("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),Ce=L({inheritAttrs:!1,__name:"LandingCard",props:{...ne,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){se(l=>({"5ea46820":e(d),"662dd548":e(t)}));const s=a,d=U(()=>{var l;return s.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((l=T[s.color])==null?void 0:l["500"])||T[s.color]||s.color}),t=U(()=>{var l;return s.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((l=T[s.color])==null?void 0:l["400"])||T[s.color]||s.color}),y=U(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:j("gap-x-8 gap-y-4 rounded-xl flex-1",s.orientation==="vertical"&&"flex flex-col",!!g.default&&s.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),n=q(),g=re(),{elementX:m,elementY:v}=we(n),{ui:i,attrs:_}=O("landing.card",w(s,"ui"),y,w(s,"class"),!0),b=U(()=>H(s)),z=U(()=>(s.title||g.title&&oe(g.title())||"Card link").trim());return(l,Y)=>{const N=E,V=F,S=X;return r(),o("div",k({ref_key:"el",ref:n,style:{"--x":`${e(m)}px`,"--y":`${e(v)}px`},class:[e(i).wrapper,l.to&&e(i).to]},e(_)),[h(S,{ui:e(i)},{default:f(()=>[x("div",{class:c(e(i).container)},[l.to?(r(),$(N,k({key:0,"aria-label":e(z)},e(b),{class:"focus:outline-none",tabindex:"-1"}),{default:f(()=>[Se]),_:1},16,["aria-label"])):p("",!0),a.icon||l.$slots.icon?(r(),o("div",{key:1,class:c(e(i).icon.wrapper)},[u(l.$slots,"icon",{},()=>[h(V,{name:a.icon,class:c(e(i).icon.base)},null,8,["name","class"])],!0)],2)):p("",!0),a.title||l.$slots.title?(r(),o("p",{key:2,class:c(e(i).title)},[u(l.$slots,"title",{},()=>[A(C(a.title),1)],!0)],2)):p("",!0),a.description||l.$slots.description?(r(),o("div",{key:3,class:c(e(i).description)},[u(l.$slots,"description",{},()=>[A(C(a.description),1)],!0)],2)):p("",!0),u(l.$slots,"container",{},void 0,!0)],2),l.$slots.default?u(l.$slots,"default",{key:0},void 0,!0):p("",!0)]),_:3},8,["ui"])],16)}}}),Ue=D(Ce,[["__scopeId","data-v-a8ea38d3"]]),Ae=L({inheritAttrs:!1,__name:"PageGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const s={wrapper:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},d=a,{ui:t,attrs:y}=O("page.grid",w(d,"ui"),s,w(d,"class"),!0);return(n,g)=>(r(),o("div",k({class:e(t).wrapper},e(y)),[u(n.$slots,"default")],16))}}),Le=x("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),je=L({inheritAttrs:!1,__name:"LandingTestimonial",props:{icon:{type:String,default:void 0},quote:{type:String,required:!0},author:{type:Object,default:void 0},card:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const s=a,d=U(()=>{const n={};s.card||(n.ring="",n.rounded="",n.background="",n.shadow="",n.divide="");const g=s.card?void 0:"";return{...n,body:{base:"flex flex-col",padding:g},wrapper:"relative",quote:"text-gray-600 dark:text-gray-300",icon:{wrapper:"mb-6 flex",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},author:{wrapper:"flex items-center gap-3 mt-6 relative",name:"font-semibold text-gray-900 dark:text-white text-sm",description:"text-gray-500 dark:text-gray-400 text-sm",avatar:{base:"",size:"md"}}}}),{ui:t,attrs:y}=O("landing.testimonial",w(s,"ui"),d,w(s,"class"),!0);return(n,g)=>{const m=F,v=ie,i=X;return r(),$(i,k({class:e(t).wrapper},e(y),{ui:e(t)}),{default:f(()=>[x("div",null,[a.icon||n.$slots.icon?(r(),o("div",{key:0,class:c(e(t).icon.wrapper)},[u(n.$slots,"icon",{},()=>[h(m,{name:a.icon,class:c(e(t).icon.base)},null,8,["name","class"])])],2)):p("",!0),a.quote||n.$slots.quote?(r(),o("q",{key:1,class:c(e(t).quote)},[u(n.$slots,"quote",{},()=>[A(C(a.quote),1)])],2)):p("",!0),a.author?(r(),o("div",{key:2,class:c(e(t).author.wrapper)},[a.author.avatar?(r(),$(v,k({key:0,alt:a.author.name},{size:e(t).author.avatar.size,...a.author.avatar},{class:e(t).author.avatar.base}),null,16,["alt","class"])):p("",!0),x("div",null,[a.author.to?(r(),$(e(E),k({key:0,"aria-label":a.author.name},e(H)(a.author),{class:"focus:outline-none",tabindex:"-1"}),{default:f(()=>[Le]),_:1},16,["aria-label"])):p("",!0),x("p",{class:c(e(t).author.name)},C(a.author.name),3),x("p",{class:c(e(t).author.description)},C(a.author.description),3)])],2)):p("",!0)])]),_:3},16,["class","ui"])}}}),Oe=L({inheritAttrs:!1,__name:"PageColumns",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const s={wrapper:"column-1 md:columns-2 lg:columns-3 gap-8 space-y-8"},d=a,{ui:t,attrs:y}=O("page.columns",w(d,"ui"),s,w(d,"class"),!0);return(n,g)=>(r(),o("div",k({class:e(t).wrapper},e(y)),[u(n.$slots,"default")],16))}}),Ie={key:1},Me=L({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const s=a,d=U(()=>{const n={};s.card?n.rounded="rounded-xl":(n.ring="",n.rounded="",n.background="",n.shadow="",n.divide="");const g=j("",s.align==="center"&&"text-center",s.align==="right"&&"lg:order-last"),m=j("flex flex-col",s.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),v=s.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",i=j("mt-10 flex items-center gap-x-6",s.align==="center"&&"justify-center");return{...n,wrapper:"relative",container:g,body:{base:m,padding:v},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:i}}),{ui:t,attrs:y}=O("landing.cta",w(s,"ui"),d,w(s,"class"),!0);return(n,g)=>{const m=G,v=X;return r(),$(v,k({class:e(t).wrapper},e(y),{ui:e(t)}),{default:f(()=>{var i;return[x("div",{class:c(e(t).container)},[a.title||n.$slots.title?(r(),o("h2",{key:0,class:c(e(t).title)},[u(n.$slots,"title",{},()=>[A(C(a.title),1)])],2)):p("",!0),a.description||n.$slots.description?(r(),o("div",{key:1,class:c(e(t).description)},[u(n.$slots,"description",{},()=>[A(C(a.description),1)])],2)):p("",!0),(i=a.links)!=null&&i.length||n.$slots.links?(r(),o("div",{key:2,class:c(e(t).links)},[u(n.$slots,"links",{},()=>[(r(!0),o(M,null,B(a.links,(_,b)=>(r(),$(m,k({key:b,ref_for:!0},_,{onClick:_.click}),null,16,["onClick"]))),128))])],2)):p("",!0)],2),n.$slots.default?u(n.$slots,"default",{key:0}):a.align==="right"?(r(),o("div",Ie)):p("",!0)]}),_:3},16,["class","ui"])}}}),W=a=>(R("data-v-ceca76b9"),a=a(),J(),a),Be={key:0},Pe=W(()=>x("div",{class:"absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"},null,-1)),Te=W(()=>x("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),qe=L({__name:"index",async setup(a){let s,d;const{data:t}=([s,d]=le(()=>ue("index",()=>pe("/").findOne())),s=await s,d(),s);if(!t.value)throw ce({statusCode:404,statusMessage:"Page not found",fatal:!0});return de({titleTemplate:"",title:t.value.title,ogTitle:t.value.title,description:t.value.description,ogDescription:t.value.description}),(y,n)=>{const g=E,m=F,v=ge,i=me,_=_e,b=fe,z=Ue,l=Ae,Y=je,N=Oe,V=Me;return e(t)?(r(),o("div",Be,[h(i,{title:e(t).hero.title,description:e(t).hero.description,links:e(t).hero.links},{headline:f(()=>[e(t).hero.headline?(r(),$(v,{key:0,variant:"subtle",size:"lg",class:"relative rounded-full font-semibold"},{default:f(()=>[h(g,{to:e(t).hero.headline.to,target:"_blank",class:"focus:outline-none",tabindex:"-1"},{default:f(()=>[Te]),_:1},8,["to"]),A(" "+C(e(t).hero.headline.label)+" ",1),e(t).hero.headline.icon?(r(),$(m,{key:0,name:e(t).hero.headline.icon,class:"ml-1 w-4 h-4 pointer-events-none"},null,8,["name"])):p("",!0)]),_:1})):p("",!0)]),default:f(()=>[Pe]),_:1},8,["title","description","links"]),h(b,{class:"!pt-0"},{default:f(()=>[h(_)]),_:1}),(r(!0),o(M,null,B(e(t).sections,(S,I)=>(r(),$(b,{key:I,title:S.title,description:S.description,align:S.align,features:S.features},{default:f(()=>[h(_)]),_:2},1032,["title","description","align","features"]))),128)),h(b,{title:e(t).features.title,description:e(t).features.description},{default:f(()=>[h(l,null,{default:f(()=>[(r(!0),o(M,null,B(e(t).features.items,(S,I)=>(r(),$(z,k({key:I,ref_for:!0},S),null,16))),128))]),_:1})]),_:1},8,["title","description"]),h(b,{headline:e(t).testimonials.headline,title:e(t).testimonials.title,description:e(t).testimonials.description},{default:f(()=>[h(N,{class:"xl:columns-4"},{default:f(()=>[(r(!0),o(M,null,B(e(t).testimonials.items,(S,I)=>(r(),o("div",{key:I,class:"break-inside-avoid"},[h(Y,k({ref_for:!0},S,{class:"bg-gray-100/50 dark:bg-gray-800/50"}),null,16)]))),128))]),_:1})]),_:1},8,["headline","title","description"]),h(b,null,{default:f(()=>[h(V,k(e(t).cta,{class:"bg-gray-100/50 dark:bg-gray-800/50"}),null,16)]),_:1})])):p("",!0)}}}),De=D(qe,[["__scopeId","data-v-ceca76b9"]]);export{De as default};
