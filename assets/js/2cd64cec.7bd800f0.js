"use strict";(self.webpackChunkpijs_doc=self.webpackChunkpijs_doc||[]).push([[557],{7737:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>j});var e=s(5893),r=s(1151);const l={},t="\u542f\u52a8\u5f15\u5bfc\u6d41\u7a0b",c={id:"pijs/start_the_boot_process",title:"\u542f\u52a8\u5f15\u5bfc\u6d41\u7a0b",description:"- \u542f\u52a8cli\u5206\u6790\u5904\u7406\u542f\u52a8\u53c2\u6570",source:"@site/docs/pijs/start_the_boot_process.md",sourceDirName:"pijs",slug:"/pijs/start_the_boot_process",permalink:"/docs/pijs/start_the_boot_process",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quickstart",permalink:"/docs/pijs/quickstart"},next:{title:"\u4ee3\u7801\u5757\u6d4b\u8bd5",permalink:"/docs/\u4ee3\u7801\u5757\u6d4b\u8bd5"}},d={},j=[{value:"\u9879\u76ee\u52a0\u8f7d(\u57fa\u4e8escript)",id:"\u9879\u76ee\u52a0\u8f7d\u57fa\u4e8escript",level:2}];function h(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"\u542f\u52a8\u5f15\u5bfc\u6d41\u7a0b",children:"\u542f\u52a8\u5f15\u5bfc\u6d41\u7a0b"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u542f\u52a8cli\u5206\u6790\u5904\u7406\u542f\u52a8\u53c2\u6570"}),"\n",(0,e.jsx)(i.li,{children:"\u6ce8\u518c\u81ea\u52a8\u751f\u6210\u4ee3\u7801"}),"\n",(0,e.jsx)(i.li,{children:"\u6ce8\u518c\u624b\u52a8\u751f\u6210\u4ee3\u7801"}),"\n",(0,e.jsx)(i.li,{children:"\u6ce8\u518cpi_serv_lib\u9700\u8981\u7684\u5404\u79cd\u8fd0\u884c\u65f6"}),"\n",(0,e.jsx)(i.li,{children:"\u8fd0\u884c\u5b50\u547d\u4ee4Script\u3001WebServer\u3001Test"}),"\n",(0,e.jsxs)(i.li,{children:["\u6267\u884c script","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u521b\u5efa1\u4e2a\u975e\u5feb\u7167\u865a\u62df\u673a\u7528\u4e8e\u8fd0\u884c\u811a\u672c"}),"\n",(0,e.jsxs)(i.li,{children:["\u521b\u5efapid\u5e76\u6ce8\u5165\u57fa\u7840\u73af\u5883","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u521b\u5efa\u9ed8\u8ba4context\u4e0a\u4e0b\u6587(\u63d2\u4ef6\u4ee3\u7801\u52a0\u8f7d)","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u63d2\u4ef6\u4ee3\u7801(pi_js_builtin),\u7531pi_serv_builtin\u5f15\u7528"}),"\n",(0,e.jsxs)(i.li,{children:["\u4e3b\u8981\u63d2\u4ef6:","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"node modules"}),"\n",(0,e.jsx)(i.li,{children:"path"}),"\n",(0,e.jsx)(i.li,{children:"fs"}),"\n",(0,e.jsx)(i.li,{children:"\u5176\u4ed6node\u5df2\u96c6\u6210\u7684\u57fa\u7840\u6a21\u5757"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.li,{children:"\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570\uff1a process.argv"}),"\n",(0,e.jsx)(i.li,{children:"\u8bbe\u7f6epi_env\u7528\u4e8e\u6807\u8bc6\u5728pijs\u73af\u5883\uff1aprocess.env.PI_ENV"}),"\n",(0,e.jsx)(i.li,{children:"\u8bbe\u7f6epromise\u76d1\u542c\u5668\uff1aglobalThis.process.addPromiseHooks()"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\u52a0\u8f7d\u542f\u52a8\u811a\u672c\uff1a","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Ts\u6587\u4ef6\uff1a\u8c03\u7528typescript.js,\u628ats\u8f6c\u6210js\u6587\u4ef6"}),"\n",(0,e.jsx)(i.li,{children:"js\u6587\u4ef6\uff1a\u4f7f\u7528nodeModules._compile\u52a0\u8f7d\u5e76\u6267\u884c\u811a\u672c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"\u9879\u76ee\u52a0\u8f7d\u57fa\u4e8escript",children:"\u9879\u76ee\u52a0\u8f7d(\u57fa\u4e8escript)"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u6267\u884c\u547d\u4ee4\u542f\u52a8\u9879\u76ee ",(0,e.jsx)(i.code,{children:"pijs index.js"})]}),"\n",(0,e.jsxs)(i.li,{children:["index.js","\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-JavaScript",children:'const { run } = require("pi_pt/init_pijs");\r\n\r\n// \u591a\u7248\u672c\u65b9\u5f0f\u542f\u52a8\r\n// run("../dst_server_publish/0", "../dst_server_publish/0/pi_pt/init.js");\r\n\r\n// \u5355\u7248\u672c\u65b9\u5f0f\u542f\u52a8\r\nrun("../dst_server", "../dst_server/pi_pt/init.js");\n'})}),"\n"]}),"\n",(0,e.jsx)(i.li,{children:"\u4f7f\u7528pi_pt\u7684\u6a21\u5757\u7cfb\u7edf\u52a0\u8f7d\u4f9d\u8d56\u4ee3\u7801"}),"\n",(0,e.jsx)(i.li,{children:"\u8bbe\u7f6e\u5fc5\u8981\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5982\uff1aWORK_VM_COUNT\u3001EXT_VM_COUNT\u3001PROJECT\u3001PROJECT_ROOT"}),"\n",(0,e.jsx)(i.li,{children:"\u8c03\u7528pi_serv_lib\u7684init_project\u65b9\u6cd5\u52a0\u8f7d\u65b0\u7248\u672c"}),"\n",(0,e.jsxs)(i.li,{children:["\u542f\u52a8\u9879\u76ee\u4ee3\u7801","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u542f\u52a8\u6570\u636e\u5e93(\u5168\u5c40\u53ea\u542f\u52a8\u4e00\u6b21)"}),"\n",(0,e.jsxs)(i.li,{children:["\u4f7f\u7528pi_pt/init.js\u521b\u5efa\u5feb\u7167","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u5feb\u7167\u5305\u62ecpi_pt\u53ca\u5176\u4f9d\u8d56\u7684\u6a21\u5757\uff0c\u4ee5\u53ca\u9879\u76eeserver/index.js\u4e2d\u4f9d\u8d56\u7684\u6a21\u5757"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.li,{children:"\u521b\u5efaworker\u865a\u62df\u673a\u53ca\u7ba1\u7406pid"}),"\n",(0,e.jsx)(i.li,{children:"\u521b\u5efaext_worker\u865a\u62df\u673a"}),"\n",(0,e.jsx)(i.li,{children:"\u8bbe\u7f6e\u7070\u5ea6\u7248\u672c"}),"\n",(0,e.jsxs)(i.li,{children:["\u521d\u59cb\u5316(pi_pt/init/init.js)","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u914d\u7f6e"}),"\n",(0,e.jsx)(i.li,{children:"\u6570\u636e\u8868"}),"\n",(0,e.jsx)(i.li,{children:"\u6570\u636e\u5e93\u76d1\u542c\u5668"}),"\n",(0,e.jsx)(i.li,{children:"\u914d\u7f6e\u5199\u5165\u6570\u636e\u5e93(event\u4e8b\u4ef6\u914d\u7f6e)"}),"\n",(0,e.jsx)(i.li,{children:"\u53d1\u9001SharedArrayBuffer\u5230\u6240\u6709\u7684\u7ba1\u7406pid"}),"\n",(0,e.jsx)(i.li,{children:"\u521d\u59cb\u5316\u7f51\u7edc\u914d\u7f6e"}),"\n",(0,e.jsx)(i.li,{children:"\u6e05\u7406\u914d\u7f6e\u7f13\u5b58"}),"\n",(0,e.jsx)(i.li,{children:"\u6267\u884c\u5b9a\u65f6\u670d\u52a1"}),"\n",(0,e.jsx)(i.li,{children:"\u6267\u884cmfa"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.li,{children:"\u521b\u5efalistener pid(mqtt\u3001http)"}),"\n",(0,e.jsx)(i.li,{children:"\u542f\u52a8\u7f51\u7edc\u76d1\u542c"}),"\n"]}),"\n"]}),"\n"]})]})}function o(n={}){const{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(h,{...n})}):h(n)}},1151:(n,i,s)=>{s.d(i,{Z:()=>c,a:()=>t});var e=s(7294);const r={},l=e.createContext(r);function t(n){const i=e.useContext(l);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),e.createElement(l.Provider,{value:i},n.children)}}}]);