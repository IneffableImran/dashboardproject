(this.webpackJsonpanalyticsdashboard=this.webpackJsonpanalyticsdashboard||[]).push([[0],{20:function(e,t,a){},30:function(e,t,a){e.exports=a(46)},35:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(35),a(6)),i=a(7),s=a(9),u=a(8),m=a(10),h=a(23),p=a(21),E=a.n(p),d=(a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){console.log(e.target.value),a.setState({value:e.target.value}),a.setState({options:Object(h.a)({},a.state.options,{chart:{type:e.target.value}})})},a.state={options:{chart:{type:"line"},xaxis:{categories:[1991,1992,1993,1994,1995,1996,1997,1998]}},series:[{name:"series-1",data:[30,40,45,50,49,60,70,91]}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Widget: ","1")),r.a.createElement("h1",null,"Description : ","Chart (Line/Bar/Area)"),r.a.createElement("hr",null),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"mixed-chart"},r.a.createElement("select",{value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"line"},"Line"),r.a.createElement("option",{value:"bar"},"Bar"),r.a.createElement("option",{value:"area"},"Area")),r.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:this.state.options.chart.type,width:"500"}))))))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){console.log(e.target.value),a.setState({value:e.target.value}),a.setState({options:Object(h.a)({},a.state.options,{chart:{type:e.target.value}})})},a.state={options:{chart:{type:"donut"}},series:[44,55,41,17,15],labels:["A","B","C","D","E"]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Widget: ","2")),r.a.createElement("h1",null,"Description : ","Chart (Donut/Pie)"),r.a.createElement("hr",null),r.a.createElement("div",{className:"donut"},r.a.createElement("select",{value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"donut"},"Donut"),r.a.createElement("option",{value:"pie"},"Pie")),r.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:this.state.options.chart.type,width:"380"}))))}}]),t}(n.Component),b=a(19),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.ComposableMap,null,r.a.createElement(b.ZoomableGroup,{zoom:1},r.a.createElement(b.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){return r.a.createElement(b.Geography,{key:e.rsmKey,geography:e})}))})))))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Widget: ","3")),r.a.createElement("h1",null,"Description : ","World Map"),r.a.createElement("hr",null),r.a.createElement(g,null)))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container"},r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(j,null)))}}]),t}(n.Component),O=a(64),y=a(69),C=a(66),w=a(67),k=a(68),N=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function B(){var e=N();return r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{position:"static"},r.a.createElement(C.a,{variant:"dense"},r.a.createElement(k.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),r.a.createElement(w.a,{variant:"h6",color:"inherit"},r.a.createElement("h1",null,"Analytics Dashboard")))))}var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.eff175ac.chunk.js.map