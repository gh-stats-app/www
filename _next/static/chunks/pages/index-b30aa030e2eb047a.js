(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7545)}])},7545:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return Q}});var n=i(5893),t=i(6817),r=i(2445),c=i(9236),a=i(5117),l=i(8949),d=i(2870),h=i(7414),o=i(6980),m=i(9834),x=i(9153),u=i(2162),j=i(8903),g=i(50),p=i(1017),f=i(8623);let v="https://api.gh-stats.app",b=()=>fetch("".concat(v,"/achievements")).then(e=>e.json()),y=()=>fetch("".concat(v,"/achievements/stats")).then(e=>e.json()),z=()=>fetch("".concat(v,"/achievements/feed")).then(e=>e.json()),k=e=>fetch("".concat(v,"/users/").concat(e)).then(e=>e.json());var w=i(8767);function _(){let{isLoading:e,data:s}=(0,w.useQuery)("achievements",b),{data:i}=(0,w.useQuery)("achievements-stats",y);return e?(0,n.jsxs)(g.r,{children:[(0,n.jsx)(g.r.Col,{md:3,children:(0,n.jsxs)(p.Z,{p:"lg",children:[(0,n.jsx)(f.O,{height:156,width:156,radius:"sm"}),(0,n.jsx)(f.O,{height:20,width:156,radius:"sm",sx:e=>({marginBottom:5,marginTop:e.spacing.sm})})]})}),(0,n.jsx)(g.r.Col,{md:3,children:(0,n.jsx)(p.Z,{p:"lg",children:(0,n.jsx)(f.O,{height:156,width:156,radius:"sm"})})}),(0,n.jsx)(g.r.Col,{md:3,children:(0,n.jsx)(p.Z,{p:"lg",children:(0,n.jsx)(f.O,{height:156,width:156,radius:"sm"})})}),(0,n.jsx)(g.r.Col,{md:3,children:(0,n.jsx)(p.Z,{p:"lg",children:(0,n.jsx)(f.O,{height:156,width:156,radius:"sm"})})})]}):(0,n.jsx)(g.r,{children:s.map(e=>(0,n.jsx)(g.r.Col,{md:3,children:(0,n.jsx)(N,{achievement:e,stats:i})},e.id))})}function N(e){let{achievement:s,stats:i={}}=e;return(0,n.jsxs)(p.Z,{p:"lg",display:"flex",sx:{flexDirection:"column"},children:[(0,n.jsx)(d.E,{src:"".concat(v).concat(s.image),sx:e=>({padding:e.spacing.sm}),alt:s.id}),(0,n.jsx)(a.x,{weight:500,align:"center",sx:e=>({marginBottom:5,marginTop:e.spacing.sm}),children:s.id}),(0,n.jsxs)(a.x,{size:"xs",dimmed:!0,align:"center",children:[i[s.id]||"0"," unlocks"]})]},s.id)}var S=i(5266),C=i(9737),T=i(7564),E=i(6137),W=i(9985),Z=i(4685);function O(e){let{id:s}=e,{data:i,isLoading:t}=(0,w.useQuery)(["feed",s],()=>k(s));return t?(0,n.jsx)(C.f,{visible:!0}):(0,n.jsx)(r.W,{size:"xl",children:(0,n.jsx)(T.K,{children:i.map(e=>{let s=e.achievement;return(0,n.jsxs)(E.Z,{noWrap:!0,children:[(0,n.jsx)(W.q,{src:"https://api.gh-stats.app"+s.image,size:94,radius:"md"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.x,{size:"xs",sx:{textTransform:"uppercase"},weight:700,color:"dimmed"}),(0,n.jsx)(a.x,{size:"lg",weight:500,children:s.name}),(0,n.jsx)(a.x,{size:"xs",color:"dimmed",children:s.description}),(0,n.jsx)(a.x,{size:"xs",color:"dimmed",children:(0,n.jsxs)(Z.e,{href:"https://github.com/search?q=".concat(e.commitId,"&type=commits"),target:"_blank",children:[e.commitId.substr(1,16),"…"]})}),(0,n.jsx)(a.x,{size:"xs",color:"dimmed",children:e.unlockedAt})]})]},s.id)})})})}var D=i(2064),I=i(6313),A=i(5089);function q(){let{isLoading:e,data:s}=(0,w.useQuery)("achievements-feed",z);return e?(0,n.jsx)(D.E,{}):(0,n.jsx)(r.W,{py:"xl",children:(0,n.jsx)(I.T,{active:1,bulletSize:24,lineWidth:2,children:s.map(e=>{let s=e.achievementDefinition;return(0,n.jsxs)(I.T.Item,{bullet:(0,n.jsx)(W.q,{size:32,radius:"xl",src:"".concat(v).concat(s.icon)}),children:[(0,n.jsxs)(a.x,{color:"dimmed",size:"sm",children:[e.userName.value," unlocked ",(0,n.jsx)("strong",{children:s.name})," achievement"]}),(0,n.jsx)(a.x,{size:"xs",mt:4,children:(0,A.Z)(Date.parse(e.unlockedAt),{addSuffix:!0})})]},e.unlockedAt)})})})}let P=(0,t.k)(e=>({inner:{display:"flex",justifyContent:"space-between",paddingTop:4*e.spacing.xl,paddingBottom:e.spacing.xl},content:{maxWidth:480,marginRight:3*e.spacing.xl,[e.fn.smallerThan("md")]:{maxWidth:"100%",marginRight:0}},title:{color:"dark"===e.colorScheme?e.white:e.black,fontSize:44,lineHeight:1.2,fontWeight:900,[e.fn.smallerThan("xs")]:{fontSize:28}},image:{flex:1,[e.fn.smallerThan("md")]:{display:"none"}},highlight:{position:"relative",backgroundColor:e.fn.variant({variant:"light",color:e.primaryColor}).background,borderRadius:e.radius.sm,padding:"4px 12px"}}));function Q(){let{classes:e}=P(),s=(0,j.c)({initialValues:{username:""}});return(0,n.jsxs)(r.W,{children:[(0,n.jsxs)("div",{className:e.inner,children:[(0,n.jsxs)("div",{className:e.content,children:[(0,n.jsxs)(c.D,{className:e.title,children:["A ",(0,n.jsx)("span",{className:e.highlight,children:"happy"})," place ",(0,n.jsx)("br",{})," for developers"]}),(0,n.jsx)(a.x,{color:"dimmed",mt:"md",children:"Feel encouraged to push more commits."}),(0,n.jsxs)(l.a,{mt:30,spacing:"sm",size:"sm",children:[(0,n.jsxs)(l.a.Item,{children:[(0,n.jsx)("strong",{children:"Earn"})," badges for your contributions!"]}),(0,n.jsxs)(l.a.Item,{children:[(0,n.jsx)("strong",{children:"Celebrate"})," your team's achievements and motivate them to continue delivering high-quality code with our easy-to-use Slack bot."]})]})]}),(0,n.jsx)(d.E,{alt:"hero-image",src:"https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg",className:e.image})]}),(0,n.jsx)(h.x,{my:20,children:(0,n.jsx)("form",{onSubmit:s.onSubmit(e=>{(0,S.h7)({title:"".concat(e.username," unlocked achievements"),children:(0,n.jsx)(O,{id:e.username})}),s.reset()}),children:(0,n.jsx)(o.o,{icon:(0,n.jsx)(x.Z,{size:18,stroke:1.5}),radius:"xl",size:"md",rightSection:(0,n.jsx)(m.A,{type:"submit",size:32,radius:"xl",variant:"filled",children:(0,n.jsx)(u.Z,{size:18,stroke:1.5})}),placeholder:"Search user",rightSectionWidth:42,...s.getInputProps("username")})})}),(0,n.jsx)(c.D,{className:e.title,style:{fontSize:36},children:"Possible achievements:"}),(0,n.jsx)(_,{}),(0,n.jsx)(c.D,{className:e.title,style:{fontSize:36},children:"Recently unlocked"}),(0,n.jsx)(q,{})]})}}},function(e){e.O(0,[620,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);