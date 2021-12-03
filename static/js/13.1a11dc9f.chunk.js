(this["webpackJsonpacentswap-frontend"]=this["webpackJsonpacentswap-frontend"]||[]).push([[13],{1081:function(e,n,t){"use strict";t.r(n);t(0);var i,c,s,r,a,l,o,d,j=t(6),b=t(185),x=t.n(b),p=t(48),u=t(160),O=t(28),m=t(27),h=t(9),f=t(92),g=t(3),v=h.e.div(i||(i=Object(m.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=h.e.div(c||(c=Object(m.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),w=h.e.div(s||(s=Object(m.a)(["\n  flex: 1;\n"]))),F=h.e.img(r||(r=Object(m.a)(["\n  border-radius: 50%;\n"]))),S=Object(h.e)(j.R).attrs({as:"h3"})(a||(a=Object(m.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),z=h.e.div(l||(l=Object(m.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),F,(function(e){return e.theme.mediaQueries.md})),Q=h.e.div(o||(o=Object(m.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),F),k=Object(h.e)(j.t)(d||(d=Object(m.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),D=function(e){var n=e.rank,t=e.team,i=Object(O.b)().t,c=Object(g.jsx)(F,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(k,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.Ob,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(w,{children:[Object(g.jsxs)(j.Q,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(z,{children:c}),Object(g.jsx)(S,{children:t.name})]}),Object(g.jsx)(j.Ob,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.Q,{children:[Object(g.jsxs)(j.Q,{children:[Object(g.jsx)(j.zb,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.Ob,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.Q,{ml:"24px",children:[Object(g.jsx)(j.J,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.Ob,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.p,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:i("See More")}),Object(g.jsx)(Q,{children:c})]})]})},I=t(869);n.default=function(){var e=Object(O.b)().t,n=Object(p.G)(),t=n.teams,i=n.isLoading,c=Object.values(t),s=x()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)(j.Q,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.R,{size:"xl",children:e("Teams")}),i&&Object(g.jsx)(j.g,{spin:!0})]}),s.map((function(e,n){return Object(g.jsx)(D,{rank:n+1,team:e},e.id)}))]})}},869:function(e,n,t){"use strict";t(0);var i,c=t(6),s=t(48),r=t(28),a=t(27),l=t(9).e.div(i||(i=Object(a.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle})),o=t(92),d=t(3),j=function(){var e=Object(r.b)().t;return Object(d.jsx)(c.t,{mb:"32px",isActive:!0,children:Object(d.jsx)(c.u,{children:Object(d.jsxs)(c.Q,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(c.R,{size:"lg",mb:"8px",children:e("You haven't set up your profile yet!")}),Object(d.jsx)(c.Ob,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(d.jsx)(c.p,{as:o.a,to:"/profile",mt:["16px",null,0],children:e("Set up now")})]})})})};n.a=function(){var e=Object(r.b)().t,n=Object(s.D)(),t=n.isInitialized,i=n.profile,a=t&&!i;return Object(d.jsxs)(d.Fragment,{children:[a&&Object(d.jsx)(j,{}),Object(d.jsxs)(l,{children:[Object(d.jsx)(c.R,{as:"h1",size:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(d.jsx)(c.Ob,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=13.1a11dc9f.chunk.js.map