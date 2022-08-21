(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{31:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(27),c=a.n(l),i=a(12),r=a(8),o=a(9),u=a(11),d=a(10),m=a(1),h=(a(36),a(37),a(2)),b=a(28),k=a.n(b).a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),p=new(function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getAll",value:function(){return k.get("/tasks")}},{key:"get",value:function(e){return k.get("/tasks/".concat(e))}},{key:"create",value:function(e){return k.post("/tasks",e)}},{key:"update",value:function(e,t){return k.put("/tasks/".concat(e),t)}},{key:"delete",value:function(e){return k.delete("/tasks/".concat(e))}},{key:"deleteAll",value:function(){return k.delete("/tasks")}},{key:"findByTitle",value:function(e){return k.get("/tasks?title=".concat(e))}}]),e}()),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(h.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(h.a)(n)),n.saveTask=n.saveTask.bind(Object(h.a)(n)),n.newTask=n.newTask.bind(Object(h.a)(n)),n.state={id:null,title:"",description:"",published:!1,submitted:!1},n}return Object(o.a)(a,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"saveTask",value:function(){var e=this,t={title:this.state.title,description:this.state.description};p.create(t).then((function(t){e.setState({id:t.data.id,title:t.data.title,description:t.data.description,published:t.data.published,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"newTask",value:function(){this.setState({id:null,title:"",description:"",published:!1,submitted:!1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"submit-form"},this.state.submitted?s.a.createElement("div",null,s.a.createElement("h4",null,"You submitted successfully!"),s.a.createElement("button",{className:"btn btn-success",onClick:this.newTask},"Add")):s.a.createElement("div",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.title,onChange:this.onChangeTitle,name:"title"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"description"},"Description"),s.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.description,onChange:this.onChangeDescription,name:"description"})),s.a.createElement("button",{onClick:this.saveTask,className:"btn btn-success"},"Submit")))}}]),a}(n.Component),g=a(14),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(h.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(h.a)(n)),n.getTask=n.getTask.bind(Object(h.a)(n)),n.updatePublished=n.updatePublished.bind(Object(h.a)(n)),n.updateTask=n.updateTask.bind(Object(h.a)(n)),n.deleteTask=n.deleteTask.bind(Object(h.a)(n)),n.state={currentTask:{id:null,title:"",description:"",published:!1},message:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getTask(this.props.match.params.id)}},{key:"onChangeTitle",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTask:Object(g.a)(Object(g.a)({},e.currentTask),{},{title:t})}}))}},{key:"onChangeDescription",value:function(e){var t=e.target.value;this.setState((function(e){return{currentTask:Object(g.a)(Object(g.a)({},e.currentTask),{},{description:t})}}))}},{key:"getTask",value:function(e){var t=this;p.get(e).then((function(e){t.setState({currentTask:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"updatePublished",value:function(e){var t=this,a={id:this.state.currentTask.id,title:this.state.currentTask.title,description:this.state.currentTask.description,published:e};p.update(this.state.currentTask.id,a).then((function(a){t.setState((function(t){return{currentTask:Object(g.a)(Object(g.a)({},t.currentTask),{},{published:e})}})),console.log(a.data)})).catch((function(e){console.log(e)}))}},{key:"updateTask",value:function(){var e=this;p.update(this.state.currentTask.id,this.state.currentTask).then((function(t){console.log(t.data),e.setState({message:"The Task was updated successfully!"})})).catch((function(e){console.log(e)}))}},{key:"deleteTask",value:function(){var e=this;p.delete(this.state.currentTask.id).then((function(t){console.log(t.data),e.props.history.push("/Tasks")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.currentTask;return s.a.createElement("div",null,t?s.a.createElement("div",{className:"edit-form"},s.a.createElement("h4",null,"Task"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement("input",{type:"text",className:"form-control",id:"title",value:t.title,onChange:this.onChangeTitle})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"description"},"Description"),s.a.createElement("input",{type:"text",className:"form-control",id:"description",value:t.description,onChange:this.onChangeDescription})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,s.a.createElement("strong",null,"Status:")),t.published?"Published":"Pending")),t.published?s.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!1)}},"UnPublish"):s.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return e.updatePublished(!0)}},"Publish"),s.a.createElement("button",{className:"badge badge-danger mr-2",onClick:this.deleteTask},"Delete"),s.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:this.updateTask},"Update"),s.a.createElement("p",null,this.state.message)):s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("p",null,"Please click on a Task...")))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChangeSearchTitle=n.onChangeSearchTitle.bind(Object(h.a)(n)),n.retrieveTasks=n.retrieveTasks.bind(Object(h.a)(n)),n.refreshList=n.refreshList.bind(Object(h.a)(n)),n.setActiveTask=n.setActiveTask.bind(Object(h.a)(n)),n.removeAllTasks=n.removeAllTasks.bind(Object(h.a)(n)),n.searchTitle=n.searchTitle.bind(Object(h.a)(n)),n.state={Tasks:[],currentTask:null,currentIndex:-1,searchTitle:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.retrieveTasks()}},{key:"onChangeSearchTitle",value:function(e){var t=e.target.value;this.setState({searchTitle:t})}},{key:"retrieveTasks",value:function(){var e=this;p.getAll().then((function(t){e.setState({Tasks:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveTasks(),this.setState({currentTask:null,currentIndex:-1})}},{key:"setActiveTask",value:function(e,t){this.setState({currentTask:e,currentIndex:t})}},{key:"removeAllTasks",value:function(){var e=this;p.deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))}},{key:"searchTitle",value:function(){var e=this;this.setState({currentTask:null,currentIndex:-1}),p.findByTitle(this.state.searchTitle).then((function(t){e.setState({Tasks:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchTitle,n=t.Tasks,l=t.currentTask,c=t.currentIndex;return s.a.createElement("div",{className:"list row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by title",value:a,onChange:this.onChangeSearchTitle}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchTitle},"Search")))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h4",null,"Tasks List"),s.a.createElement("ul",{className:"list-group"},n&&n.map((function(t,a){return s.a.createElement("li",{className:"list-group-item "+(a===c?"active":""),onClick:function(){return e.setActiveTask(t,a)},key:a},t.title)}))),s.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAllTasks},"Remove All")),s.a.createElement("div",{className:"col-md-6"},l?s.a.createElement("div",null,s.a.createElement("h4",null,"Task"),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("strong",null,"Title:"))," ",l.title),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("strong",null,"Description:"))," ",l.description),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement("strong",null,"Status:"))," ",l.published?"Published":"Pending"),s.a.createElement(i.b,{to:"/Tasks/"+l.id,className:"badge badge-warning"},"Edit")):s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("p",null,"Please click on a Task..."))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},s.a.createElement(i.b,{to:"/tasks",className:"navbar-brand"},"HoneyDo"),s.a.createElement("div",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(i.b,{to:"/tasks",className:"nav-link"},"Tasks")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(i.b,{to:"/add",className:"nav-link"},"Add")))),s.a.createElement("div",{className:"container mt-3"},s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:["/","/tasks"],component:f}),s.a.createElement(m.a,{exact:!0,path:"/add",component:v}),s.a.createElement(m.a,{path:"/tasks/:id",component:T}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(i.a,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f4420b1e.chunk.js.map