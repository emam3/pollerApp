(this.webpackJsonpmyform=this.webpackJsonpmyform||[]).push([[0],{36:function(e,t,a){},41:function(e,t,a){e.exports=a(82)},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(37),c=a.n(r),s=(a(46),a(3)),i=a(4),o=a(6),u=a(5),m=(a(47),a(14)),d=a(21),h=a.n(d),f=a(38),p=a(2),b=(a(16),a(49),a(50),a(10)),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(b.b,{class:"navbar-brand",to:"/"},l.a.createElement("img",{src:"https://i.ibb.co/VVgBRcQ/POLLER.png",width:"100",height:"30",class:"d-inline-block align-top",alt:"",loading:"lazy"})),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{class:"navbar-nav ul_nav"},l.a.createElement("li",{className:"li_nav"},l.a.createElement(b.b,{to:"/Home"},"Home")),l.a.createElement("li",{className:"li_nav"},l.a.createElement(b.b,{to:"/Contact"},"Contact us")),l.a.createElement("li",{className:"li_nav"},l.a.createElement(b.b,{to:"/FAQ"},"FAQ"))))))}}]),a}(l.a.Component),g=a(9),E=a.n(g),_=a(40),k=a.n(_),y=(a(71),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).answer_sperate=n.answer_sperate.bind(Object(p.a)(n)),n.handleLogin=n.handleLogin.bind(Object(p.a)(n)),n.set_form=n.set_form.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.state={form:[],shown:[],x:"",y:"",check:0,refresh:0},n}return Object(i.a)(a,[{key:"handleLogin",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("1 handle login"),e.next=3,E.a.get("./form/get_form.php").then((function(e){return t.setState({form:e.data},(function(){t.answer_sperate()}),(function(){t.set_form()}))}));case 3:console.log("2 handle login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"answer_sperate",value:function(){var e=this;console.log("3 ans-seprate"),this.setState((function(t){for(var a=0;t.form[a];){if(("2"===t.form[a].type||"3"===t.form[a].type)&&a>-1){console.log("from if staTEMENT");var n=Object(m.a)(t.form),l=n[a].answers;l=l.split("/"),console.log(l),n[a].answers=l,e.setState({form:n,check:1})}a+=1}}))}},{key:"set_form",value:function(){console.log("4 set form");var e=this.state.form,t=0,a=0,n=e.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",null,1==e.type?l.a.createElement("input",{class:"form-control",name:t+=1,type:"text",placeholder:e.question}):2==e.type?l.a.createElement("div",null,l.a.createElement("label",{className:"ques"},e.question),e.answers.map((function(a){return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",id:t+=1,name:e.question,value:a}),l.a.createElement("label",{className:"pl-2",for:t},a))}))):l.a.createElement("div",null,l.a.createElement("label",{className:"ques",id:a+=1},e.question),e.answers.map((function(a){return l.a.createElement("div",{class:"form-check checkk"},l.a.createElement("input",{class:"form-check-input",type:"radio",id:t+=1,name:e.question,value:a}),l.a.createElement("label",{class:"form-check-label",for:t,name:e.question}," ",a))})))))}));this.setState({shown:n,check:2})}},{key:"handleClick",value:function(e){e.preventDefault();var t=k()(e.target,{hash:!0});E.a.post("./form/index.php",t).then((function(e){console.log(e.config.data)})),this.setState({check:0}),alert("\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0646\u062c\u0627\u062d")}},{key:"componentDidMount",value:function(){this.handleLogin(),this.answer_sperate(),this.set_form()}},{key:"render",value:function(){return l.a.createElement("div",{class:"form_page"},1==this.state.check?this.set_form():null,1==this.state.refresh?this.forceUpdate():null,l.a.createElement(v,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("img",{className:"img-fluid text-center",src:"https://i.ibb.co/VVgBRcQ/POLLER.png"}),l.a.createElement("h1",null,"\u062a\u0648\u0638\u064a\u0641 \u0643\u0648\u0627\u0641\u064a\u0631\u0627\u062a \u0648\u062d\u0644\u0627\u0642\u064a\u0646"),l.a.createElement("p",{className:"gender_p"},"\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0645\u062a\u0644\u0643 \u0627\u0644\u062e\u0628\u0631\u0629 \u0641\u064a \u0645\u062c\u0627\u0644 \u0627\u0644\u0639\u0646\u0627\u064a\u0629 \u0628\u0627\u0644\u0631\u062c\u0644 (\u0627\u0644\u062d\u0644\u0627\u0642\u0629 \u0627\u0644\u0631\u062c\u0627\u0644\u064a\u0629) \u0648\u062a\u0631\u063a\u0628 \u0641\u064a \u0632\u064a\u0627\u062f\u0629 \u062f\u062e\u0644\u0643 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0627\u0644\u0639\u0645\u0644 \u0641\u064a \u0648\u0638\u064a\u0641\u0629 \u062f\u0648\u0627\u0645 \u062c\u0632\u0626\u064a \u0623\u0648 \u062f\u0648\u0627\u0645 \u0643\u0627\u0645\u0644 .. \u0628\u0627\u062f\u0631 \u0628\u062a\u0633\u062c\u064a\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u0643 \u0648\u0633\u0648\u0641 \u0646\u0642\u0648\u0645 \u0628\u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u064a \u0623\u0642\u0631\u0628 \u0641\u0631\u0635\u0629 \u0645\u0645\u0643\u0646\u0629"),l.a.createElement("p",null,"If you have enough experience in grooming services and looking for part-time or full-time job , please fill this form and we will contact you ASAP")),l.a.createElement("div",{className:"col-lg form-pic"},l.a.createElement("div",{className:"form-home"},l.a.createElement("img",{class:"img-fluid phone",src:"https://i.ibb.co/b6W8Vth/IOS.png"}),l.a.createElement("div",{className:"form-t"},l.a.createElement("form",{onSubmit:this.handleClick},l.a.createElement("div",{id:"loginform",className:"form scrollbar scrollbar-track scrollbar-thumb"},l.a.createElement("h1",{className:"head_form"},"\u0642\u064f\u0645 \u0628\u0645\u0644\u0626 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),l.a.createElement("div",{class:"formmmm"},l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"\u0643\u0646 \u0639\u0644\u0649 \u0639\u0644\u0645 \u0623\u0646\u0646\u0627 \u0644\u0646 \u0646\u0634\u0627\u0631\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u0643 \u0623\u0628\u062f\u064b\u0627"),l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted new_small"},"*\u064a\u062c\u0628 \u0645\u0644\u0626 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062d\u062a\u0649 \u062a\u0646\u062a\u0642\u0644 \u0644\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0642\u0627\u062f\u0645\u0629"),this.state.shown,l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-11"},l.a.createElement("button",{type:"submit",className:"btn btn-danger Next float-right"},"\u0625\u0631\u0633\u0627\u0644"))))))))))))}}]),a}(l.a.Component)),O=(a(74),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement(v,null))}}]),a}(l.a.Component)),j=(a(75),a(76),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).collapse=0,n.state={q_s:"",check:0},n}return Object(i.a)(a,[{key:"get_faq",value:function(){var e=this;E.a.get("./form/show_faq.php").then((function(t){return e.setState({q_s:t.data,check:1})}))}},{key:"componentDidMount",value:function(){this.get_faq()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("div",{className:"FAQ container"},l.a.createElement("div",{id:"accordion"},1==this.state.check?this.state.q_s.map((function(e){return l.a.createElement("div",{class:"card "},l.a.createElement("div",{class:"card-header",id:e.idq+1},l.a.createElement("h5",{class:"mb-0"},l.a.createElement("button",{class:"btn btn-link","data-toggle":"collapse","data-target":"#qs"+e.idq,"aria-expanded":"false","aria-controls":e.idq},e.question))),l.a.createElement("div",{id:"qs"+e.idq,class:"collapse hide","aria-labelledby":e.idq+1,"data-parent":"#accordion"},l.a.createElement("div",{class:"card-body"},e.answer,"                                      ")))})):null)))}}]),a}(l.a.Component)),w=a(18),q=(a(36),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).state={response:[],state_edited:!1};return n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"dashboard_nav"},l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(b.b,{class:"navbar-brand",to:"/DashBoard"},l.a.createElement("img",{src:"https://j.top4top.io/p_1717kr32s1.png",width:"150",height:"30",class:"d-inline-block align-top",alt:"",loading:"lazy"})),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement(b.b,{class:"nav-link",to:"/Dashboard"},"Show applicants",l.a.createElement("span",{class:"sr-only"},"(current)"))),l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Dashboard/FormEdit"},"Edit form")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Dashboard/Edit_FAQ"},"Edit FAQ")))))))}}]),a}(l.a.Component)),x=(a(79),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).questions_id=n.questions_id.bind(Object(p.a)(n)),n.state={questions:[],question_ids:[]},n}return Object(i.a)(a,[{key:"handleLogin",value:function(){var e=this;E.a.get("./form/show_questions.php").then((function(t){return e.setState({questions:t.data})}),(function(){e.questions_id()}))}},{key:"questions_id",value:function(){var e=[];this.state.questions.map((function(t){console.log("test");var a=t[1][0];e.push(a)})),this.setState({question_ids:e})}},{key:"handleDelete",value:function(e){var t=e.target.previousSibling._wrapperState.initialValue;E.a.post("./form/delete_form.php",t).then(alert("\u062a\u0645 \u0645\u0633\u062d \u0627\u0644\u0633\u0624\u0627\u0644"))}},{key:"componentDidMount",value:function(){this.handleLogin()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.questions.map((function(t){return l.a.createElement("form",{className:"test_form"},l.a.createElement("input",{class:"form-control delete_input ",type:"label",value:t}),l.a.createElement("button",{onClick:e.handleDelete,type:"button",class:"btn btn-danger margin-question"},"\u0625\u0632\u0627\u0644\u0647 \u0627\u0644\u0633\u0624\u0627\u0644"))})))}}]),a}(l.a.Component)),S=0,C=0,N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(p.a)(n)),n.Add_input_checkbox=n.Add_input_checkbox.bind(Object(p.a)(n)),n.Add_radio_ans=n.Add_radio_ans.bind(Object(p.a)(n)),n.Add_input_radio=n.Add_input_radio.bind(Object(p.a)(n)),n.handleCheckSubmit=n.handleCheckSubmit.bind(Object(p.a)(n)),n.handleInput=n.handleInput.bind(Object(p.a)(n)),n.handle_q_1_ans=n.handle_q_1_ans.bind(Object(p.a)(n)),n.handle_q_2=n.handle_q_2.bind(Object(p.a)(n)),n.Add_checkboc_ans=n.Add_checkboc_ans.bind(Object(p.a)(n)),n.state={my_form:l.a.createElement(x,null),input_field_checkbox:[],input_field_radio:[],input:!1,checkbox:!1,radio:!1,checkBox_answer:[],radio_answer:[],form:[{type:"1",question:""},{type:"2",question:"",answer:[""]},{type:"3",question:"",answer:[""]}]},n}return Object(i.a)(a,[{key:"handleCheckSubmit",value:function(e){var t=e.target.name;this.setState((function(e){return Object(w.a)({},t,!e[t])}))}},{key:"handleInput",value:function(e){var t=e.target.value;this.setState((function(e){var a=e.form.findIndex((function(e){return"1"===e.type}));if(a>-1){var n=Object(m.a)(e.form);return n[a].question=t,{mySites:n}}}))}},{key:"handle_q_1_ans",value:function(e){var t=e.target.value;this.setState((function(e){var a=e.form.findIndex((function(e){return"2"===e.type}));if(a>-1){var n=Object(m.a)(e.form);return n[a].question=t,{mySites:n}}}))}},{key:"handle_q_2",value:function(e){console.log(e.target.name);var t=e.target.value;this.setState((function(e){var a=e.form.findIndex((function(e){return"3"===e.type}));if(a>-1){var n=Object(m.a)(e.form);return n[a].question=t,{mySites:n}}}))}},{key:"andle_q_2_ans",value:function(e){var t=e.target.value;this.setState((function(e){var a=e.form.findIndex((function(e){return"3"===e.type}));if(a>-1){var n=Object(m.a)(e.form);return n[a].question=t,{mySites:n}}}))}},{key:"set_ans_value",value:function(e){var t=e.target.value;this.setState((function(e){return{name:t}}))}},{key:"Add_input_checkbox",value:function(e){var t=l.a.createElement("input",{id:S,onChange:this.Add_checkboc_ans}),a=Object(m.a)(this.state.input_field_checkbox);a[S]=t,this.setState({input_field_checkbox:a}),S++}},{key:"Add_input_radio",value:function(e){var t=l.a.createElement("input",{id:C,onChange:this.Add_radio_ans}),a=Object(m.a)(this.state.input_field_radio);a[C]=t,this.setState({input_field_radio:a}),C++}},{key:"Add_checkboc_ans",value:function(e){var t=e.target.value,a=e.target.id;a>0&&(t="/"+t);var n=Object(m.a)(this.state.checkBox_answer);n[a]=t,this.setState({checkBox_answer:n}),this.setState((function(e){var t=e.form.findIndex((function(e){return"3"===e.type}));if(t>-1){var a=Object(m.a)(e.form);return a[t].answer=n,{form:a}}}))}},{key:"Add_radio_ans",value:function(e){var t=e.target.value,a=e.target.id;a>0&&(t="/"+t);var n=Object(m.a)(this.state.radio_answer);n[a]=t,this.setState({radio_answer:n}),this.setState((function(e){var t=e.form.findIndex((function(e){return"2"===e.type}));if(t>-1){var a=Object(m.a)(e.form);return a[t].answer=n,{form:a}}}))}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault();var a=this.state.form.map((function(e){if(""!==e.question)return e}));E.a.post("./form/addform.php",a).then((function(){return t.set_shown()}),(function(e){console.log(e.config.data)}))}},{key:"set_shown",value:function(){this.setState({shown:l.a.createElement(x,null)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(q,null),l.a.createElement("div",{class:"form_page_edit"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg"},l.a.createElement("h1",{className:"mt-3"},"\u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u0631\u064a\u062f \u0627\u0646 \u062a\u0642\u0648\u0645 \u0628\u0625\u0636\u0627\u0641\u062a\u0647 \u061f"),l.a.createElement("div",{class:"form-check checkk"},l.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"input",name:"input",onClick:this.handleCheckSubmit}),l.a.createElement("label",{class:"form-check-label",htmlFor:"input",name:"input"},"\u062e\u0627\u0646\u0629 \u0641\u0627\u0631\u063a\u0629",l.a.createElement("br",null),this.state.input?l.a.createElement("input",{placeholder:"\u0636\u0639 \u0633\u0624\u0627\u0644\u0643 \u0647\u0646\u0627",onChange:this.handleInput}):null),l.a.createElement("br",null),l.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"radio",name:"radio",onClick:this.handleCheckSubmit}),l.a.createElement("label",{class:"form-check-label",htmlFor:"radio"},"\u0633\u0624\u0627\u0644 \u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0623\u062c\u0648\u0628\u0629",l.a.createElement("br",null),this.state.radio?l.a.createElement("div",null,l.a.createElement("input",{placeholder:"\u0636\u0639 \u0633\u0624\u0627\u0644\u0643 \u0647\u0646\u0627",onChange:this.handle_q_1_ans}),this.state.input_field_radio,l.a.createElement("button",{Style:"color:black",onClick:this.Add_input_radio},"\u0625\u0636\u0627\u0641\u0629 \u0625\u062c\u0627\u0628\u0629")):null),l.a.createElement("br",null),l.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",id:"checkbox",name:"checkbox",onClick:this.handleCheckSubmit}),l.a.createElement("label",{class:"form-check-label",htmlFor:"checkbox"},"\u0633\u0624\u0627\u0644 \u0630\u0648 \u0625\u062c\u0627\u0628\u0629 \u0648\u0627\u062d\u062f\u0629",l.a.createElement("br",null),this.state.checkbox?l.a.createElement("div",null,l.a.createElement("input",{placeholder:"\u0636\u0639 \u0633\u0624\u0627\u0644\u0643 \u0647\u0646\u0627",onChange:this.handle_q_2}),l.a.createElement("br",null),this.state.input_field_checkbox,l.a.createElement("button",{Style:"color:black",onClick:this.Add_input_checkbox},"\u0625\u0636\u0627\u0641\u0629 \u0625\u062c\u0627\u0628\u0629")):null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{Style:"color:black",onClick:this.handleLogin},"\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a")),this.state.my_form),l.a.createElement("div",{className:"col-lg form-pic"},l.a.createElement("div",{className:"form-home"},l.a.createElement("img",{class:"img-fluid phone",src:"https://i.ibb.co/b6W8Vth/IOS.png"}),l.a.createElement("div",{className:"form-t"},l.a.createElement("form",{onSubmit:this.handleClick},l.a.createElement("div",{id:"loginform",className:"form scrollbar scrollbar-track scrollbar-thumb"},l.a.createElement("h1",{className:"head_form"},"\u0642\u064f\u0645 \u0628\u0645\u0644\u0626 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"),l.a.createElement("div",{class:"formmmm"},l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"\u0643\u0646 \u0639\u0644\u0649 \u0639\u0644\u0645 \u0623\u0646\u0646\u0627 \u0644\u0646 \u0646\u0634\u0627\u0631\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u0643 \u0623\u0628\u062f\u064b\u0627"),l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted new_small"},"*\u064a\u062c\u0628 \u0645\u0644\u0626 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u062d\u062a\u0649 \u062a\u0646\u062a\u0642\u0644 \u0644\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0642\u0627\u062f\u0645\u0629"),this.state.shown,l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"col-11"},l.a.createElement("button",{type:"submit",className:"btn btn-danger Next float-right"},"\u0625\u0631\u0633\u0627\u0644")))))))))))))}}]),a}(l.a.Component),A=a(7),D=(a(80),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={question:"",answer:"",shown:[],q_s:[]},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleDelete=n.handleDelete.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=[this.state.question,this.state.answer];E.a.post("./form/add_FAQ.php",a).then((function(){return t.get_faq()}),(function(e){console.log(e.config.data)})),alert("\u062a\u0645\u062a \u0627\u0636\u0627\u0641\u0647 \u0627\u0644\u0633\u0624\u0627\u0644 \u0628\u0646\u062c\u0627\u062d")}},{key:"get_faq",value:function(){var e=this;E.a.get("./form/show_faq.php").then((function(t){return e.setState({q_s:t.data,check:1})}))}},{key:"set_shown",value:function(){var e=[];e.map((function(t){e.push(t)})),this.setState({shown:e})}},{key:"handleDelete",value:function(e){var t=this,a=e.target.previousSibling._wrapperState.initialValue;console.log(a),E.a.post("./form/delete_FAQ.php",a).then((function(){return t.get_faq()}),alert("\u062a\u0645 \u0645\u0633\u062d \u0627\u0644\u0633\u0624\u0627\u0644"))}},{key:"componentDidMount",value:function(){this.get_faq()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(q,null),l.a.createElement("form",{className:"pos_edit",onSubmit:this.handleSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{class:"form-control",name:"question",placeholder:"\u0642\u0645 \u0628\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0633\u0624\u0627\u0644 \u0647\u0646\u0627",onChange:this.handleChange})),l.a.createElement("div",{class:"form-group"},l.a.createElement("input",{class:"form-control",name:"answer",id:"exampleInputPassword1",placeholder:"\u0642\u0645 \u0628\u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0625\u062c\u0627\u0628\u0629 \u0647\u0646\u0627",onChange:this.handleChange})),l.a.createElement("button",{type:"submit",class:"btn btn-primary"},"\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644")),l.a.createElement("div",null,this.state.q_s.map((function(t){return l.a.createElement("form",{className:"pos_edit"},l.a.createElement("input",{class:"form-control delete_input ",type:"label",value:t.question}),l.a.createElement("button",{onClick:e.handleDelete,type:"button",class:"btn btn-danger margin-question"},"\u0625\u0632\u0627\u0644\u0647 \u0627\u0644\u0633\u0624\u0627\u0644"))}))))}}]),a}(l.a.Component)),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).state={response:[],state_edited:!1},n.get_data=n.get_data.bind(Object(p.a)(n));return n}return Object(i.a)(a,[{key:"get_data",value:function(){var e=this;console.log("tessssssssssssssst"),E.a.get("./form/get.php").then((function(t){return e.setState({response:t.data})}))}},{key:"componentDidMount",value:function(){this.get_data(),console.log(this.state.response)}},{key:"render",value:function(){console.log(this.state.response);return l.a.createElement("div",null,l.a.createElement(q,null),l.a.createElement("div",{className:"row no-gutters style_div"},this.state.response.map((function(e){return l.a.createElement("div",{className:"col-lg-4 box"},l.a.createElement("ul",{className:"ul_dash"},l.a.createElement("li",{className:"li_dash"},Object.keys(JSON.parse(e.USER)).map((function(t){return l.a.createElement("li",null,JSON.parse(e.USER)[t])})))))}))))}}]),a}(l.a.Component),L=(a(81),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={un:"",pw:"",real_un:"Fahad",real_pw:"Baharain2020",shown:"",check_login:0},n.handleLogin=n.handleLogin.bind(Object(p.a)(n)),n.set_state=n.set_state.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"set_state",value:function(){var e=l.a.createElement("div",{className:"container login"},l.a.createElement("img",{src:"https://j.top4top.io/p_1717kr32s1.png",width:"300",height:"100",class:"d-inline-block align-top",alt:"",loading:"lazy"}),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"UserName"),l.a.createElement("input",{name:"un",type:"email",onChange:this.handleChange,class:"form-control my_c",id:"exampleInputEmail1","aria-describedby":"emailHelp"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{name:"pw",type:"password",onChange:this.handleChange,class:"form-control my_c",id:"exampleInputPassword1"})),l.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.handleLogin},"Submit"));this.setState({shown:e})}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){if(this.state.un==this.state.real_un&&this.state.pw==this.state.real_pw){this.setState({shown:"",check_login:55}),console.log("login sucess")}else console.log("login failed")}},{key:"componentDidMount",value:function(){this.set_state()}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.shown,55==this.state.check_login?l.a.createElement("div",null,l.a.createElement(I,{check:1})):null)}}]),a}(l.a.Component)),F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(A.a,{exact:!0,path:"/Dashboard",component:L}),l.a.createElement(A.a,{exact:!0,path:"/Dashboard/Formedit",component:N}),l.a.createElement(A.a,{exact:!0,path:"/Dashboard/Edit_FAQ",component:D}),l.a.createElement(A.a,{exact:!0,path:"/FAQ",component:j}),l.a.createElement(A.a,{exact:!0,path:"/contact",component:O}),l.a.createElement(A.a,{exact:!0,path:"/Home",component:y}),l.a.createElement(A.a,{exact:!0,path:"/",component:y}))}}]),a}(l.a.Component);c.a.render(l.a.createElement(b.a,null,l.a.createElement(F,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.15b5d9b5.chunk.js.map