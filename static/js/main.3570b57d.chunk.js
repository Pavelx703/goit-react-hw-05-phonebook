(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={contactForm:"contactForm_contactForm__2Xko5",submit_form:"contactForm_submit_form__1_CvU",input:"contactForm_input__1xLyT"}},,,,,,,function(e,t,n){e.exports={onDelete:"contactList_onDelete__ghXCf"}},,function(e,t,n){e.exports={enter:"slide_enter__UT3iI",enterActive:"slide_enterActive__1gaVh",exit:"slide_exit__su5-m",exitActive:"slide_exitActive__37Dti"}},,function(e,t,n){e.exports={enter:"alert_enter__3hqXW",enterActive:"alert_enterActive__2nFah",exit:"alert_exit__QWEk1",exitActive:"alert_exitActive__cK8gX"}},function(e,t,n){e.exports={alert:"Alert_alert__3YgB_"}},function(e,t,n){e.exports={title:"Title_title__3amqf"}},function(e,t,n){e.exports={enter:"slideTitle_enter__3AdF4",enterActive:"slideTitle_enterActive__2N5he"}},,,,function(e,t,n){e.exports=n(30)},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),i=n(20),l=n(6),s=n(7),u=n(10),m=n(9);var h=function(e){var t=e.title,n=e.children;return c.a.createElement("section",null,t&&c.a.createElement("h2",null,t),n)},f=n(12),_=n.n(f),p=n(34),v=n(32),b=n(14),d=n.n(b),E=function(e){var t=e.contacts,n=e.onRemoveContact;return c.a.createElement(p.a,{component:"ul",className:_.a.contactList},t.map((function(e){var t=e.id,a=e.name,r=e.number;return c.a.createElement(v.a,{key:t,timeout:250,classNames:d.a},c.a.createElement("li",null,c.a.createElement("span",null,a," : ",r),c.a.createElement("button",{type:"button",className:_.a.onDelete,onClick:function(){return n(t)}},"X")))})))},g=n(15),C=n(5),x=n.n(C),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(g.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state.name,e.state.number),e.setState({name:""}),e.setState({number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{className:x.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("label",null,c.a.createElement("p",{className:x.a.input},"Name"),c.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,name:"name",required:!0})),c.a.createElement("p",{className:x.a.input},"Number"),c.a.createElement("input",{type:"tel",value:n,onChange:this.handleChange,name:"number",required:!0}),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:x.a.submit_form},"Add contact"))}}]),n}(a.Component);function S(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{type:"text",className:"TaskEditor-input",value:t,onChange:function(e){return n(e.target.value)}}))}var y=n(33),A=n(16),N=n.n(A),j=n(17),k=n.n(j),F=function(){return c.a.createElement("div",{className:k.a.alert},c.a.createElement("p",null,"\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))},w=n(18),D=n.n(w),T=function(){return c.a.createElement("h1",{className:D.a.title},"Phonebook")},q=n(19),L=n.n(q),X=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:Object(y.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(y.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(y.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(y.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:"",exist:!1,inOn:!1},e.addContact=function(t,n){var a={id:Object(y.a)(),name:t,number:n},c=e.state.contacts.map((function(e){return e.name})).includes(t);e.setState((function(t){return c?(e.setState({exist:!0}),setTimeout((function(){e.setState({exist:!1})}),2e3)):{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getFromlocalStorage(),this.setState({inOn:!0})}},{key:"getFromlocalStorage",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return c.a.createElement(h,null,c.a.createElement(v.a,{in:this.state.inOn,timeout:500,classNames:L.a,unmountOnExit:!0},c.a.createElement(T,null)),c.a.createElement(O,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Find contacts by name"),c.a.createElement(S,{value:e,onChangeFilter:this.changeFilter}),t.length>0&&c.a.createElement(E,{contacts:t,onRemoveContact:this.removeContact}),c.a.createElement(v.a,{in:this.state.exist,timeout:250,classNames:N.a,unmountOnExit:!0},c.a.createElement(F,null)))}}]),n}(a.Component);o.a.render(c.a.createElement(X,null),document.querySelector("#root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.3570b57d.chunk.js.map