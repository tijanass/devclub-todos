(this["webpackJsonpdevclub-todos"]=this["webpackJsonpdevclub-todos"]||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(41),c=a.n(o),r=(a(54),a(55),a(15)),l=a(42),i=a(43),m=a(47),u=a(44),d=a(48),k=a(45),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[{text:"Read React Documentation",isComplete:!0},{text:"Make First App",isComplete:!0},{text:"Make Awesome App",isComplete:!1}],task:""},a.completeTask=function(e){var t=Object(r.a)(a.state.tasks);t[e].isComplete=!t[e].isComplete,a.setState({tasks:t})},a.setTask=function(e){a.setState({task:e})},a.removeTask=function(e){var t=Object(r.a)(a.state.tasks);t.splice(e,1),a.setState({tasks:t})},a.handleEnterPress=function(e){"Enter"===e.key&&a.addTask()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"addTask",value:function(){if(""!==this.state.task){var e=Object(r.a)(this.state.tasks);e.push({text:this.state.task,isComplete:!1});this.setState({tasks:e,task:""})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.tasks,n=t.task;return s.a.createElement("div",null,s.a.createElement("div",{className:"todoes-container row w-75 h-50 mx-auto mt-5 h-500 shadow"},s.a.createElement("div",{className:"col-md-5 bg-dark-pink p-5 rounded-left"},s.a.createElement("div",{className:"m-auto d-block"},s.a.createElement("h1",{className:"h3 text-center mb-5"},"My Tasks"),s.a.createElement("label",null,"Task:"),s.a.createElement("input",{value:n,onChange:function(t){return e.setTask(t.target.value)},onKeyPress:this.handleEnterPress,type:"text",className:"form-control"}),s.a.createElement("button",{onClick:function(){return e.addTask()},className:"mt-3 btn btn-outline-light w-100 my-btn shadow mb-5"},"Add Task"),s.a.createElement(k.a,{data:{labels:["Done","ToDo"],datasets:[{data:[a.filter((function(e){return e.isComplete})).length,a.filter((function(e){return!e.isComplete})).length],backgroundColor:["#5ac5ac","#eceef0"],hoverBackgroundColor:["#5bcbb2","#eceef0"],borderWidth:[0,0]}]},options:{legend:{labels:{fontColor:"#ffffff"},onClick:function(e){return e.stopPropagation()}}},onElementsClick:this.filterTasks}))),s.a.createElement("div",{className:"col-md-7 bg-light rounded-right font-gray p-5"},s.a.createElement("h3",{className:"mb-4"},"Tasks"),a.map((function(t,a){return s.a.createElement("div",{key:a,className:"card shadow-sm card-task flex-row justify-content-between"},s.a.createElement("div",null,s.a.createElement("label",{className:t.isComplete?"cb-checkbox checked":"cb-checkbox"},s.a.createElement("span",{className:"cb-inner"},s.a.createElement("i",null,s.a.createElement("input",{onClick:function(){return e.completeTask(a)},type:"checkbox"}))),t.text)),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(){return e.removeTask(a)},className:"fas fa-trash"})))})))))}}]),t}(n.Component);var f=function(){return s.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(151);c.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){e.exports=a(152)},54:function(e,t,a){},55:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.100179a1.chunk.js.map