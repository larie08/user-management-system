import{a as x,b as T}from"./chunk-FWEY4UKP.js";import{b as ee,d as te,g as ne,i as ie,l as oe,m as k,n as A,o as re,r as se}from"./chunk-DCNBK2HR.js";import{$ as E,B as G,Ba as R,D as l,E as f,Ea as z,H as g,J as c,K as H,M as i,N as o,P as j,Q as $,R as y,S as p,T as d,W as r,X as b,Y as I,Z as Q,a as F,aa as S,b as U,ba as O,ha as J,ia as K,o as W,p as M,pa as w,qa as P,r as B,ra as X,sa as Y,t as v,ta as Z,u as q,x as _,y as h,za as N}from"./chunk-ORHOKJTR.js";var L=(()=>{class t{constructor(e){this.http=e}getAll(){return this.http.get(`${x.apiUrl}/requests`)}getById(e){return this.http.get(`${x.apiUrl}/requests/${e}`)}getByEmployeeId(e){return this.http.get(`${x.apiUrl}/requests/employee/${e}`)}create(e){return console.log("Creating request in service:",e),e.employeeId&&(e.employeeId=Number(e.employeeId)),this.http.post(`${x.apiUrl}/requests`,e)}update(e,n){return n.employeeId&&(n.employeeId=Number(n.employeeId)),this.http.put(`${x.apiUrl}/requests/${e}`,n)}delete(e){return this.http.delete(`${x.apiUrl}/requests/${e}`)}static{this.\u0275fac=function(n){return new(n||t)(B(Z))}}static{this.\u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ue(t,m){if(t&1&&(i(0,"div",19),r(1),o()),t&2){let e=d();l(),b(e.errorMessage)}}function ge(t,m){if(t&1){let e=y();i(0,"div",20)(1,"div",21)(2,"input",22),O("ngModelChange",function(s){let a=_(e).$implicit;return S(a.name,s)||(a.name=s),h(s)}),o()(),i(3,"div",23)(4,"input",24),O("ngModelChange",function(s){let a=_(e).$implicit;return S(a.quantity,s)||(a.quantity=s),h(s)}),o()(),i(5,"button",25),p("click",function(){let s=_(e).index,a=d();return h(a.removeItem(s))}),r(6,"\xD7"),o()()}if(t&2){let e=m.$implicit;l(2),E("ngModel",e.name),l(2),E("ngModel",e.quantity)}}var C=(()=>{class t{constructor(e,n,s,a){this.router=e,this.route=n,this.requestService=s,this.accountService=a,this.close=new G,this.request={type:"",items:[],requestItems:[],employeeId:null},this.errorMessage="",this.loading=!1}ngOnInit(){console.log("Component initialized with employeeId:",this.employeeId),this.employeeId?(this.request.employeeId=Number(this.employeeId),console.log("Set employeeId in request:",this.request.employeeId)):this.route.params.subscribe(e=>{if(e.employeeId)this.request.employeeId=Number(e.employeeId),console.log("Set employeeId from route params:",this.request.employeeId);else{let n=this.accountService.accountValue?.employeeId;n?(this.request.employeeId=Number(n),console.log("Set employeeId from account service:",this.request.employeeId)):(console.error("No employeeId available from any source"),this.errorMessage="Employee ID is required")}}),this.id&&this.loadRequest()}loadRequest(){this.loading=!0,this.requestService.getById(this.id).subscribe({next:e=>{this.request=e,this.loading=!1},error:e=>{console.error("Error loading request:",e),this.errorMessage="Error loading request",this.loading=!1}})}addItem(){this.request.items.push({name:"",quantity:1})}removeItem(e){this.request.items.splice(e,1)}save(){if(!this.request.employeeId)if(this.employeeId)this.request.employeeId=Number(this.employeeId);else{let e=this.accountService.accountValue?.employeeId;e&&(this.request.employeeId=Number(e))}if(console.log("Current account value:",this.accountService.accountValue),console.log("Saving request with data:",{employeeId:this.request.employeeId,type:this.request.type,items:this.request.items}),!this.request.type){this.errorMessage="Please select a request type";return}if(!this.request.items||this.request.items.length===0){this.errorMessage="Please add at least one item";return}if(!this.request.employeeId){this.errorMessage="Employee ID is required";return}this.request.requestItems=[...this.request.items],this.loading=!0,this.id?this.requestService.update(this.id,this.request).subscribe({next:()=>{this.close.emit()},error:e=>{console.error("Error updating request:",e),this.errorMessage="Error updating request",this.loading=!1}}):(console.log("Creating new request with data:",this.request),this.requestService.create(this.request).subscribe({next:()=>{this.close.emit()},error:e=>{console.error("Error creating request:",e),console.error("Request data that failed:",this.request),this.errorMessage=e.error?.message||"Error creating request",this.loading=!1}}))}cancel(){this.close.emit()}static{this.\u0275fac=function(n){return new(n||t)(f(R),f(N),f(L),f(T))}}static{this.\u0275cmp=v({type:t,selectors:[["app-add-edit"]],inputs:{id:"id",employeeId:"employeeId"},outputs:{close:"close"},decls:35,vars:6,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"close-button",3,"click"],[1,"modal-body"],["class","alert alert-danger",4,"ngIf"],[1,"form-container"],[1,"form-group"],[1,"form-label"],[1,"form-control",3,"ngModelChange","ngModel"],["value",""],[1,"items-container"],["class","item-row",4,"ngFor","ngForOf"],[1,"btn-add",3,"click"],[1,"modal-footer"],[1,"btn-secondary",3,"click"],[1,"btn-primary",3,"click"],[1,"alert","alert-danger"],[1,"item-row"],[1,"item-name"],["type","text","placeholder","Name",1,"form-control",3,"ngModelChange","ngModel"],[1,"item-quantity"],["type","number","min","1","placeholder","Qty",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn-remove",3,"click"]],template:function(n,s){n&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),r(5),o(),i(6,"button",5),p("click",function(){return s.cancel()}),r(7,"\xD7"),o()(),i(8,"div",6),g(9,ue,2,1,"div",7),i(10,"div",8)(11,"div",9)(12,"label",10),r(13,"Type"),o(),i(14,"select",11),O("ngModelChange",function(u){return S(s.request.type,u)||(s.request.type=u),u}),i(15,"option",12),r(16,"Select type"),o(),i(17,"option"),r(18,"Equipment"),o(),i(19,"option"),r(20,"Leave"),o(),i(21,"option"),r(22,"Resources"),o()()(),i(23,"div",9)(24,"label",10),r(25,"Items"),o(),i(26,"div",13),g(27,ge,7,2,"div",14),o(),i(28,"button",15),p("click",function(){return s.addItem()}),r(29,"Add Item"),o()()()(),i(30,"div",16)(31,"button",17),p("click",function(){return s.cancel()}),r(32,"Cancel"),o(),i(33,"button",18),p("click",function(){return s.save()}),r(34,"Save"),o()()()()()),n&2&&(H("show",!0),l(5),I("",s.id?"Edit":"Add"," Request"),l(4),c("ngIf",s.errorMessage),l(5),E("ngModel",s.request.type),l(13),c("ngForOf",s.request.items))},dependencies:[w,P,k,A,ee,ie,oe,te,re,ne],styles:[`.modal[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.25);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1050;
}

.modal-dialog[_ngcontent-%COMP%] {
    max-width: 540px;
    width: 100%;
    margin: 0;
}

.modal-content[_ngcontent-%COMP%] {
    border-radius: 14px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    background: #fff;
}

.modal-header[_ngcontent-%COMP%] {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #e5e5e5;
    background: #f7fafd;
    border-radius: 14px 14px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-title[_ngcontent-%COMP%] {
    font-size: 1.35rem;
    font-weight: 700;
    color: #234;
    margin: 0;
}

.close-button[_ngcontent-%COMP%] {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #888;
    cursor: pointer;
    transition: color 0.2s;
}

.close-button[_ngcontent-%COMP%]:hover {
    color: #555;
}

.modal-body[_ngcontent-%COMP%] {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    background: #fafdff;
}

.form-container[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.form-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-label[_ngcontent-%COMP%] {
    font-weight: 500;
    color: #345;
}

.form-control[_ngcontent-%COMP%] {
    padding: 0.4rem;
    border-radius: 6px;
    border: 1px solid #ccd;
    font-size: 1rem;
    transition: border-color 0.2s;
}

.form-control[_ngcontent-%COMP%]:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
}

.items-container[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.item-row[_ngcontent-%COMP%] {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    margin-bottom: 0.5rem;
}

.item-name[_ngcontent-%COMP%] {
    flex: 1;
}

.item-quantity[_ngcontent-%COMP%] {
    width: 100px;
}

.btn-remove[_ngcontent-%COMP%] {
    background: #f44336;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-remove[_ngcontent-%COMP%]:hover {
    background: #d32f2f;
}

.btn-add[_ngcontent-%COMP%] {
    align-self: flex-start;
    background: #e3e8ef;
    color: #234;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1.25rem;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-add[_ngcontent-%COMP%]:hover {
    background: #d1d9e6;
}

.modal-footer[_ngcontent-%COMP%] {
    padding: 1.25rem 1.5rem;
    border-top: 1px solid #e5e5e5;
    background: #f7fafd;
    border-radius: 0 0 14px 14px;
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
}

.btn-secondary[_ngcontent-%COMP%] {
    background: #e3e8ef;
    color: #234;
    border: none;
    border-radius: 6px;
    padding: 0.6rem 1.5rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-secondary[_ngcontent-%COMP%]:hover {
    background: #d1d9e6;
}

.btn-primary[_ngcontent-%COMP%] {
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 0.6rem 1.5rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-primary[_ngcontent-%COMP%]:hover {
    background: #1565c0;
}

.alert[_ngcontent-%COMP%] {
    margin-bottom: 1.25rem;
    border-radius: 6px;
    padding: 1rem;
}

.alert-danger[_ngcontent-%COMP%] {
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ffcdd2;
}`]})}}return t})();function _e(t,m){if(t&1&&(i(0,"span"),r(1),o()),t&2){let e=d(2).$implicit;l(),b(e.employee.account.email)}}function he(t,m){if(t&1&&(i(0,"span"),r(1),o()),t&2){let e=d(2).$implicit;l(),I("ID: ",e.employee.employeeId,"")}}function be(t,m){t&1&&(i(0,"span"),r(1,"Unknown"),o())}function ye(t,m){if(t&1&&(j(0),g(1,_e,2,1,"span",8)(2,he,2,1,"span",8)(3,be,2,0,"span",8),$()),t&2){let e=d().$implicit;l(),c("ngIf",e.employee.account==null?null:e.employee.account.email),l(),c("ngIf",!(e.employee.account!=null&&e.employee.account.email)&&e.employee.employeeId),l(),c("ngIf",!(e.employee.account!=null&&e.employee.account.email)&&!e.employee.employeeId)}}function xe(t,m){t&1&&(i(0,"span"),r(1,"Unknown"),o())}function Ie(t,m){if(t&1&&(j(0),i(1,"span",16),r(2),o(),i(3,"div",17),r(4),o(),$()),t&2){let e=d().$implicit,n=d();l(2),I(" ",n.getItemsSummary(e)," "),l(2),Q(" ",e.items&&e.items.length>0?e.items.length:e.requestItems?e.requestItems.length:0," Item",e.items&&e.items.length>1||e.requestItems&&e.requestItems.length>1?"s":""," ")}}function Ce(t,m){t&1&&(i(0,"span"),r(1,"No items"),o())}function Me(t,m){if(t&1){let e=y();i(0,"button",18),p("click",function(){_(e);let s=d().$implicit,a=d();return h(a.edit(s.id))}),r(1,"Edit"),o()}}function ve(t,m){if(t&1){let e=y();i(0,"button",19),p("click",function(){_(e);let s=d().$implicit,a=d();return h(a.delete(s.id))}),r(1,"Delete"),o()}}function qe(t,m){if(t&1){let e=y();i(0,"tr")(1,"td"),r(2),o(),i(3,"td"),g(4,ye,4,3,"ng-container",8)(5,xe,2,0,"span",8),o(),i(6,"td"),r(7),o(),i(8,"td"),g(9,Ie,5,3,"ng-container",8)(10,Ce,2,0,"span",8),o(),i(11,"td"),r(12),o(),i(13,"td"),r(14),J(15,"date"),o(),i(16,"td")(17,"div",9),g(18,Me,2,0,"button",10),i(19,"select",11),p("change",function(s){let a=_(e).$implicit,u=d();return h(u.status(a.id,s.target.value))}),i(20,"option",12),r(21,"Status"),o(),i(22,"option",13),r(23,"Approve"),o(),i(24,"option",14),r(25,"Reject"),o()(),g(26,ve,2,0,"button",15),o()()()}if(t&2){let e=m.$implicit,n=d();l(2),b(e.id),l(2),c("ngIf",e.employee),l(),c("ngIf",!e.employee),l(2),b(e.type),l(2),c("ngIf",e.items&&e.items.length>0||e.requestItems&&e.requestItems.length>0),l(),c("ngIf",(!e.items||e.items.length===0)&&(!e.requestItems||e.requestItems.length===0)),l(2),b(e.status),l(2),b(K(15,10,e.createdDate,"short")),l(4),c("ngIf",(n.account==null?null:n.account.role)==="Admin"),l(8),c("ngIf",(n.account==null?null:n.account.role)==="Admin")}}function Ee(t,m){if(t&1){let e=y();i(0,"app-add-edit",20),p("close",function(){_(e);let s=d();return h(s.closeModal())}),o()}if(t&2){let e=d();c("id",e.selectedId)("employeeId",e.selectedEmployeeId)}}var D=(()=>{class t{constructor(e,n,s,a){this.router=e,this.route=n,this.requestService=s,this.accountService=a,this.requests=[],this.errorMessage="",this.showModal=!1,this.selectedId=null,this.employeeId=null,this.selectedEmployeeId=null,this.account=this.accountService.accountValue}ngOnInit(){this.route.params.subscribe(e=>{if(console.log("Route params:",e),e.employeeId)this.employeeId=Number(e.employeeId),this.selectedEmployeeId=this.employeeId,console.log("Parsed employeeId:",this.employeeId),console.log("Set selectedEmployeeId:",this.selectedEmployeeId);else{let n=this.accountService.accountValue?.employeeId;n?(this.employeeId=Number(n),this.selectedEmployeeId=this.employeeId,console.log("Set employeeId from account service:",this.employeeId)):console.error("No employeeId available")}this.loadRequests()})}loadRequests(){this.employeeId?this.requestService.getByEmployeeId(this.employeeId).subscribe({next:e=>{console.log("Loaded employee requests:",e),this.requests=e},error:e=>{console.error("Error loading requests:",e),this.errorMessage="Error loading requests"}}):this.requestService.getAll().subscribe({next:e=>{console.log("Loaded all requests:",e),this.requests=e},error:e=>{console.error("Error loading requests:",e),this.errorMessage="Error loading requests"}})}add(){if(this.selectedId=null,this.showModal=!0,this.employeeId)this.selectedEmployeeId=Number(this.employeeId),console.log("Setting selectedEmployeeId for new request:",this.selectedEmployeeId);else{let e=this.accountService.accountValue?.employeeId;e?(this.selectedEmployeeId=Number(e),console.log("Setting selectedEmployeeId from account service:",this.selectedEmployeeId)):(console.error("No employeeId available"),this.errorMessage="Employee ID is required")}}edit(e){this.selectedId=e,this.showModal=!0}closeModal(){this.showModal=!1,this.selectedId=null,this.loadRequests()}delete(e){confirm("Are you sure you want to delete this request?")&&this.requestService.delete(e).subscribe({next:()=>{this.loadRequests()},error:n=>{console.error("Error deleting request:",n),this.errorMessage="Error deleting request"}})}getItemsSummary(e){return console.log("Getting items summary for request:",e),e.items&&e.items.length>0?(console.log("Using items property:",e.items),e.items.map(n=>`${n.name} (${n.quantity})`).join(", ")):e.requestItems&&e.requestItems.length>0?(console.log("Using requestItems property:",e.requestItems),e.requestItems.map(n=>`${n.name} (${n.quantity})`).join(", ")):(console.log("No items found in request"),"")}status(e,n){if(!confirm(`Are you sure you want to set this request to ${n}?`))return;let s=this.requests.find(u=>u.id===e);if(!s){this.errorMessage="Request not found.";return}let a=U(F({},s),{status:n});this.requestService.update(e,a).subscribe({next:()=>{this.loadRequests()},error:u=>{console.error(`Error updating status for request ${e}:`,u),this.errorMessage=`Error updating status: ${u.error?.message||u.message}`}})}static{this.\u0275fac=function(n){return new(n||t)(f(R),f(N),f(L),f(T))}}static{this.\u0275cmp=v({type:t,selectors:[["app-list"]],decls:29,vars:2,consts:[[1,"card","wider-card"],[1,"card-header"],[1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[3,"id","employeeId","close",4,"ngIf"],[4,"ngIf"],[1,"action-buttons"],["class","btn btn-sm btn-primary me-1",3,"click",4,"ngIf"],[1,"form-select","form-select-sm","me-1","status-select",3,"change"],["value","","disabled","","selected",""],["value","Approved"],["value","Rejected"],["class","btn btn-sm btn-danger",3,"click",4,"ngIf"],[1,"item-summary"],[1,"item-count"],[1,"btn","btn-sm","btn-primary","me-1",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"],[3,"close","id","employeeId"]],template:function(n,s){n&1&&(i(0,"div",0)(1,"div",1)(2,"span"),r(3,"Employee Requests"),o(),i(4,"div")(5,"button",2),p("click",function(){return s.add()}),r(6,"Add Request"),o()()(),i(7,"div",3)(8,"div",4)(9,"table",5)(10,"thead")(11,"tr")(12,"th"),r(13,"Request ID"),o(),i(14,"th"),r(15,"Employee"),o(),i(16,"th"),r(17,"Type"),o(),i(18,"th"),r(19,"Items"),o(),i(20,"th"),r(21,"Status"),o(),i(22,"th"),r(23,"Created"),o(),i(24,"th"),r(25,"Actions"),o()()(),i(26,"tbody"),g(27,qe,27,13,"tr",6),o()()()()(),g(28,Ee,1,2,"app-add-edit",7)),n&2&&(l(27),c("ngForOf",s.requests),l(),c("ngIf",s.showModal))},dependencies:[w,P,k,A,C,X],styles:[`

.wider-card[_ngcontent-%COMP%] {
    max-width: 1200px;
    margin: 2rem auto;
    border-radius: 14px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    background: #fff;
    border: none;
}

.card-header[_ngcontent-%COMP%] {
    padding: 1.25rem 1.5rem;
    background: #f7fafd;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 14px 14px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    font-size: 1.35rem;
    font-weight: 700;
    color: #234;
}

.card-body[_ngcontent-%COMP%] {
    padding: 1.5rem;
    background: #fafdff;
}



.table[_ngcontent-%COMP%] {
    width: 100%;
    margin-bottom: 0;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
}

.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    background: #f7fafd;
    color: #345;
    font-weight: 600;
    padding: 1rem;
    border-bottom: 2px solid #e5e5e5;
}

.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 1rem;
    vertical-align: middle;
    border-bottom: 1px solid #e5e5e5;
    color: #234;
}

.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {
    background-color: #fafdff;
}



.btn[_ngcontent-%COMP%] {
    border-radius: 6px;
    padding: 0.6rem 1.5rem;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.2s;
    border: none;
}

.btn-primary[_ngcontent-%COMP%] {
    background: #1976d2;
    color: #fff;
}

.btn-primary[_ngcontent-%COMP%]:hover {
    background: #1565c0;
}

.btn-danger[_ngcontent-%COMP%] {
    background: #f44336;
    color: #fff;
}

.btn-danger[_ngcontent-%COMP%]:hover {
    background: #d32f2f;
}

.btn-sm[_ngcontent-%COMP%] {
    padding: 0.4rem 0.75rem;
    font-size: 0.875rem;
}



.status-select[_ngcontent-%COMP%] {
    background: #ffc107;
    color: #234;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    padding: 0.4rem 0.75rem;
    height: 32px;
    min-width: 120px;
    width: auto;
    display: inline-block;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 0.875rem;
}

.status-select[_ngcontent-%COMP%]:focus {
    background: #ffcd39;
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.2);
}

.status-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {
    background: #fff;
    color: #234;
    padding: 8px;
}



.action-buttons[_ngcontent-%COMP%] {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
}



.me-1[_ngcontent-%COMP%] {
    margin-right: 0.25rem;
}



.item-summary[_ngcontent-%COMP%] {
    color: #234;
    font-size: 0.95rem;
}

.item-count[_ngcontent-%COMP%] {
    color: #888;
    font-size: 0.85rem;
    margin-top: 0.25rem;
}



@media (max-width: 768px) {
    .wider-card[_ngcontent-%COMP%] {
        margin: 1rem;
    }
    
    .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {
        display: none;
    }
    
    .table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
        display: block;
        width: 100%;
    }
    
    .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
        margin-bottom: 1rem;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 1rem;
    }
    
    .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
        padding: 0.5rem 0;
        border: none;
    }
    
    .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {
        content: attr(data-label);
        font-weight: 600;
        display: inline-block;
        width: 120px;
    }
    
    .action-buttons[_ngcontent-%COMP%] {
        justify-content: flex-start;
        margin-top: 0.5rem;
    }
}`]})}}return t})();var Se=[{path:"",component:D},{path:"add",component:C},{path:"edit/:id",component:C},{path:":employeeId",component:D}],ae=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=q({type:t})}static{this.\u0275inj=M({imports:[z.forChild(Se),z]})}}return t})();var He=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=q({type:t})}static{this.\u0275inj=M({imports:[Y,se,ae]})}}return t})();export{He as RequestsModule};
