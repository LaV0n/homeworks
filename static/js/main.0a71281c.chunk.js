(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports={link_active:"HW5_link_active__1BQWp",link_inactive:"HW5_link_inactive__3bEoh",navlinks:"HW5_navlinks__3W6_K",navlinks_hid:"HW5_navlinks_hid__2H76F",navBar:"HW5_navBar__2BuyE",navButton:"HW5_navButton__1erMp",checkbox:"HW5_checkbox__2S8VZ",error:"HW5_error__1zquH"}},,,function(e,a,t){e.exports={message:"Message_message__DjZpr",block:"Message_block__2eXQ8",name:"Message_name__3FJ2x",text:"Message_text__2dv5K",time:"Message_time__2nvpI"}},function(e,a,t){e.exports={someClass:"Greeting_someClass___iaj0",errorClass:"Greeting_errorClass__26OhZ",block:"Greeting_block__2s4FR",redError:"Greeting_redError__1oqpt",blueError:"Greeting_blueError__2m07r"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__Wl1b0",errorInput:"SuperInputText_errorInput__RZ1UX",error:"SuperInputText_error__2NE3r"}},function(e,a,t){e.exports={default:"SuperButton_default__1Fqrr",red:"SuperButton_red__3b6_X"}},function(e,a,t){e.exports={blue:"HW4_blue__3ia8W",column:"HW4_column__1naU8",testSpanError:"HW4_testSpanError__10qsW"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__26zhf",spanClassName:"SuperCheckbox_spanClassName__3eWNf"}},,,function(e,a,t){e.exports={App:"App_App__PC0NS"}},function(e,a,t){e.exports={select:"SuperSelect_select__2Q7EW"}},function(e,a,t){e.exports=t(41)},,,,,,,,function(e,a,t){},,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__38g6h"}},,,,,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(15),c=t.n(l),o=(t(26),t(16)),u=t.n(o),i=t(2),s=t(6),m=t(0),E=t(7),p=t.n(E);var d=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:e.avatar,alt:"0"}),r.a.createElement("div",{className:p.a.block},r.a.createElement("p",{className:p.a.name},e.name),r.a.createElement("p",{className:p.a.text},e.message),r.a.createElement("div",{className:p.a.time},e.time)))},_={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"some text",time:"22:00"};var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(d,{avatar:_.avatar,name:_.name,message:_.message,time:_.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=(t(30),t(5)),f=t(11),g=t.n(f),b=function(e){var a=e.red,t=e.className,n=Object(h.a)(e,["red","className"]),l="".concat(a?g.a.red:g.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var k=function(e){return r.a.createElement("div",{style:{padding:"8px",width:"250px",display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,e.affair.name)," ",r.a.createElement("span",null,e.affair.priority),r.a.createElement(b,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var C=function(e){var a=e.data.map(function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})});return r.a.createElement("div",null,a,r.a.createElement(b,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(b,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(b,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(b,{onClick:function(){e.setFilter("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}],N=function(e,a){return"all"===a?e:e.filter(function(e){return e.priority===a})},j=function(e,a){return e.filter(function(e){return e._id!==a})};var y=function(){var e=Object(n.useState)(O),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=N(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(j(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(9),S=t(8),w=t.n(S),I=t(10),W=t.n(I),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(W.a.error," ").concat(u||""),m=i.value?"".concat(W.a.superInput," ").concat(o):"".concat(W.a.errorInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},F=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=!1,u=w.a.redError,i=0===a.length?w.a.errorClass:w.a.someClass;return 0===a.length?(l="empty name",o=!0):(l="good name",u=w.a.blueError),r.a.createElement("div",{className:w.a.block},r.a.createElement(U,{value:a,onChange:t,className:i}),r.a.createElement("span",{className:u},l),r.a.createElement(b,{disabled:o,onClick:n},"add"),r.a.createElement("span",null,c))},R=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),E=m[0],p=(m[1],a.length);return r.a.createElement(F,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){alert("Hello  ".concat(o,"!")),t(o),u("")},error:E,totalUsers:p})},A=t(43);var B=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(R,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};l([].concat(Object(x.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=t(12),J=t.n(H),P=t(13),T=t.n(P),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(T.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:T.a.spanClassName},l))};var M=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],E=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(U,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(U,{className:J.a.blue}),r.a.createElement(b,null,"default"),r.a.createElement(b,{red:!0,onClick:o},"delete "),r.a.createElement(b,{disabled:!0},"disabled"),r.a.createElement(L,{checked:m,onChangeChecked:E},"some text "),r.a.createElement(L,{checked:m,onChange:function(e){return E(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var G=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(y,null),r.a.createElement(B,null),r.a.createElement(M,null))},q=t(4),K=t.n(q);var X=function(){return r.a.createElement("div",{className:K.a.error},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var Z=function(){return r.a.createElement("div",null,"still empty")};var D=function(){return r.a.createElement("div",null,"empty page")},z={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var Q=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:z.PRE_JUNIOR})}),r.a.createElement(m.b,{path:z.PRE_JUNIOR,element:r.a.createElement(G,null)}),r.a.createElement(m.b,{path:z.JUNIOR,element:r.a.createElement(D,null)}),r.a.createElement(m.b,{path:z.JUNIOR_PLUS,element:r.a.createElement(Z,null)}),r.a.createElement(m.b,{path:"/*",element:r.a.createElement(X,null)})))};var V=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:K.a.navBar},r.a.createElement("input",{id:"menu__toggle",type:"checkbox",onChange:function(e){e.target.checked?l(!0):l(!1)},className:K.a.checkbox}),r.a.createElement("label",{className:K.a.navButton,htmlFor:"menu__toggle"},r.a.createElement("span",null,"menu")),r.a.createElement("div",{className:t?K.a.navlinks:K.a.navlinks_hid},r.a.createElement(s.b,{to:z.PRE_JUNIOR,className:function(e){return e.isActive?K.a.link_active:K.a.link_inactive}},"pre-junior"),r.a.createElement(s.b,{to:z.JUNIOR,className:function(e){return e.isActive?K.a.link_active:K.a.link_inactive}},"junior"),r.a.createElement(s.b,{to:z.JUNIOR_PLUS,className:function(e){return e.isActive?K.a.link_active:K.a.link_inactive}}," junior + ")))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(V,null),r.a.createElement(Q,null)))},$=(t(38),function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(h.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],E=l||{},p=E.children,d=E.onDoubleClick,_=(E.className,Object(h.a)(E,["children","onDoubleClick","className"]));return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:"editable-span"},_),p||c.value))});function ee(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ae(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ee("test",{x:"A",y:1});ae("test",{x:"",y:0});var te=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement($,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(b,{onClick:function(){ee("editable-span-value",t)}},"save"),r.a.createElement(b,{onClick:function(){l(ae("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ne=t(17),re=t.n(ne),le=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(h.a)(e,["options","onChange","onChangeOption"]),c=a?a.map(function(e,a){return r.a.createElement("option",{key:a,value:e},e)}):[];return r.a.createElement("select",Object.assign({className:re.a.select,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ce=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(h.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map(function(t,o){return r.a.createElement("label",{key:a+"-"+o},r.a.createElement("input",{type:"radio",name:a,checked:n===t,value:t,onChange:(Object(h.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)})}),t)}):[]);return r.a.createElement(r.a.Fragment,null,o)},oe=["x","y","z"];var ue=function(){var e=Object(n.useState)(oe[1]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(le,{options:oe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ce,{name:"radio",options:oe,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ie=function(e,a){switch(a.type){case"sort":var t=Object(x.a)(e);return"up"===a.payload?t.sort(function(e,a){return e.name.toLowerCase()>a.name.toLowerCase()?1:-1}):t.sort(function(e,a){return e.name.toLowerCase()<a.name.toLowerCase()?1:-1});case"check":return e.filter(function(e){return e.age>=a.payload});default:return e}},se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(n.useState)(se),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t.map(function(e){return r.a.createElement("div",{key:e._id},e.name," age : ",e.age)});return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(b,{onClick:function(){return l(ie(se,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(b,{onClick:function(){return l(ie(se,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(b,{onClick:function(){return l(ie(se,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ee=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Y,null),r.a.createElement(te,null),r.a.createElement(ue,null),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[18,2,1]]]);
//# sourceMappingURL=main.0a71281c.chunk.js.map