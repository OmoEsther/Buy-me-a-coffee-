(this["webpackJsonpbuy-me-a-coffee"]=this["webpackJsonpbuy-me-a-coffee"]||[]).push([[0],{171:function(e,t,n){},179:function(e,t){},189:function(e,t){},207:function(e,t){},243:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(33),s=n.n(a),o=(n(171),n(29)),i=n(41),l=n(5),u=n(301),j=n(290),d=n(306),f=n(1),b=function(e){var t=e.address,n=e.amount,c=e.symbol,r=e.destroy;return t?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(u.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(f.jsxs)(f.Fragment,{children:[n," ",Object(f.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(f.jsx)(j.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(f.jsxs)(u.a.Menu,{className:"shadow-lg border-0",children:[Object(f.jsx)(u.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(f.jsxs)(d.a,{direction:"horizontal",gap:2,children:[Object(f.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(f.jsx)("span",{className:"font-monospace",children:t})]})}),Object(f.jsx)(u.a.Divider,{}),Object(f.jsxs)(u.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){r()},children:[Object(f.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},m=n(300),x=n(304),O=Object({NODE_ENV:"production",PUBLIC_URL:"/Buy-me-a-coffee-",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"coffeedapp.omoesther.testnet";var h=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:O,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:O,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(49),g=n(86),w=h("testnet");function v(){return(v=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},w));case 2:t=e.sent,window.walletConnection=new p.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new p.Contract(window.walletConnection.account(),w.contractName,{viewMethods:["coffee_price","get_coffee_by_range","get_total_number_of_coffee","beneficiary","get_coffee_by_number"],changeMethods:["buyCoffee","update_coffee_price"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){window.walletConnection.requestSignIn(w.contractName)}function C(){window.walletConnection.signOut(),window.location.reload()}var S=n(75),k=(n(235),function(){return Object(f.jsx)(S.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),I=function(e){var t=e.text;return Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(f.jsx)("span",{className:"text-secondary mx-1",children:t})]})},A=function(e){var t=e.text;return Object(f.jsxs)("div",{children:[Object(f.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(f.jsx)("span",{className:"text-secondary mx-1",children:t})]})},E={text:""};I.defaultProps=E,A.defaultProps=E;var D=n(151),P=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(f.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center",style:{background:"#424952",minHeight:"100vh"},children:[Object(f.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(f.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(f.jsx)("img",{src:c,alt:""})}),Object(f.jsx)("h1",{children:t}),Object(f.jsx)("p",{children:"Please connect your wallet to continue."}),Object(f.jsx)(D.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(f.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};P.defaultProps={name:""};var T=P,U=n(10),F=n(302),M=n(303),B=n(153),R=n.n(B),W=function(e){var t=e.buyCoffee,n=e.coffeePrice,r=Object(c.useState)(""),a=Object(l.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),j=u[0],d=u[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=s||"Anonymous",c=j||"Enjoy Your Coffee";console.log(n,c),t({name:n,message:c})},style:{margin:"2rem 0 1rem 0",width:"20rem"},children:[Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{label:"Name",htmlfor:"name",color:"primary",onChange:function(e){var t=e.target.value;o(t)},placeholder:"Enter Name",focused:!0,fullWidth:!0})}),Object(f.jsx)("div",{style:{margin:"1rem 0"},children:Object(f.jsx)(F.a,{label:"Message",htmlfor:"message",color:"primary",onChange:function(e){var t=e.target.value;d(t)},placeholder:"Send the Creator a Message",focused:!0,multiline:!0,fullWidth:!0})}),Object(f.jsxs)(M.a,{startIcon:Object(f.jsx)(R.a,{}),variant:"contained",type:"submit",children:["Support ",p.utils.format.formatNearAmount(n)," NEAR"]})]})})},L=function(){return Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsx)(j.a,{animation:"border",role:"status",className:"opacity-25",children:Object(f.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},H=n(307),K=n(308);function z(e){if(0===e)return"--";var t=new Date(e/1e6);return t.toLocaleDateString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric"})+", "+t.toLocaleString("en-us",{hour:"numeric",minute:"numeric",hour12:!0})}var J=function(e){var t=e.coffee,n=(t.id,t.giver,t.name),c=t.message,r=t.timestamp;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(H.a,{sx:{textAlign:"left",marginY:"0.7rem"},className:"coffee-card",children:[Object(f.jsx)("div",{className:"fancy-line"}),Object(f.jsx)("div",{children:Object(f.jsxs)(K.a,{variant:"string",sx:{textTransform:"capitalize"},children:["Supporter: ",n]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(K.a,{variant:"string",children:["Message: ",c]})}),Object(f.jsx)("div",{children:Object(f.jsxs)(K.a,{variant:"string",children:["Date: ",z(r)]})})]})})},Y=n(154);function q(e,t){return e.id=Object(Y.v4)(),window.contract.buyCoffee({coffee:e},1e14,t)}var V=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),u=s[0],j=s[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),m=b[0],x=b[1],O=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){var t,n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),t=[],e.next=5,window.contract.get_total_number_of_coffee();case 5:return n=e.sent,e.next=8,1===(a=n)?window.contract.get_coffee_by_number({coffee_number:a}):window.contract.get_coffee_by_range({from:1,until:a});case 8:return c=e.sent,1===n?(t.push(c),r(t)):r(c.reverse()),e.t0=j,e.next=13,window.contract.coffee_price();case 13:e.t1=e.sent,(0,e.t0)(e.t1),e.next=20;break;case 17:e.prev=17,e.t2=e.catch(0),console.log({error:e.t2});case 20:return e.prev=20,x(!1),e.finish(20);case 23:case"end":return e.stop()}var a}),e,null,[[0,17,20,23]])}))),[]),h=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{x(!0),q(t,u).then((function(e){Object(S.b)(Object(f.jsx)(I,{text:"Coffee purchased."})),O()}))}catch(n){console.log({error:n}),Object(S.b)(Object(f.jsx)(A,{text:"Failed to create a coffee."}))}finally{x(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[O]),Object(f.jsx)(f.Fragment,{children:m?Object(f.jsx)(L,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"text-6xl font-bold text-blue-600 mb-6 buy-me",children:"Buy Me A Coffee"}),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},children:[Object(f.jsx)(W,{buyCoffee:h,coffeePrice:u}),Object(f.jsx)("div",{children:n.map((function(e){return Object(f.jsx)(J,{coffee:Object(U.a)({},e)},e.id)}))})]})]})})},G=n.p+"static/media/coffee.41643f3f.svg",Q=n.p+"static/media/coffeeBarista.ed19b05b.svg";n(243);var X=function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=a,t.next=4,y();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))),[e]);return Object(c.useEffect)((function(){s()}),[s]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(k,{}),e.accountId?Object(f.jsxs)(m.a,{fluid:"md",children:[Object(f.jsx)(x.a,{className:"justify-content-end pt-3 pb-5",children:Object(f.jsx)(x.a.Item,{children:Object(f.jsx)(b,{address:e.accountId,amount:r,symbol:"NEAR",destroy:C})})}),Object(f.jsx)("main",{className:"flex flex-col items-center justify-center w-full flex-1 px-20 text-center",children:Object(f.jsx)(V,{})})]}):Object(f.jsx)(T,{name:"Buy Me A Coffee DApp",login:_,coverImg:G}),Object(f.jsx)("div",{className:"side-coffee",children:Object(f.jsx)("img",{src:Q,alt:"coffee-guys"})})]})};n(246),n(247);window.nearInitPromise=function(){return v.apply(this,arguments)}().then((function(){s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root"))})).catch(console.error)}},[[248,1,2]]]);
//# sourceMappingURL=main.d733d6d1.chunk.js.map