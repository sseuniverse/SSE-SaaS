import{_ as $,a as x}from"./CE8B7cHA.js";import P from"./CVRp7blG.js";import{_ as S,a as U}from"./S7fiqoUZ.js";import{d as B,x as b,ah as d,ai as E,aj as N,G as R,ab as t,c as r,N as p,a1 as T,w as c,g as l,al as m,aE as j,ap as A,h as i,e as D,s as f,an as H}from"./Dzs-k-Wa.js";import"./DV9ej0bc.js";import"./Dnd51l0P.js";const I={key:1},K=B({__name:"[...slug]",async setup(M){let a,o;const s=b(),{data:e}=([a,o]=d(()=>m(s.path,()=>f(s.path).findOne(),"$wI9CjIpWtR")),a=await a,o(),a);if(!e.value)throw E({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=d(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(H(s.path)),{default:()=>[]})),a=await a,o(),a);N({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=R(()=>j(e.value));return(V,q)=>{const g=$,k=P,y=S,v=x,C=U,w=A;return t(e)?(r(),p(w,{key:0},T({default:c(()=>[i(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),i(v,{prose:""},{default:c(()=>{var n;return[t(e).body?(r(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(r(),D("hr",I)):l("",!0),i(y,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,_;return[i(C,{links:(_=(n=t(e).body)==null?void 0:n.toc)==null?void 0:_.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{K as default};
