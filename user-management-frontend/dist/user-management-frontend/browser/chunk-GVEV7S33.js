import{a as u,b as B}from"./chunk-FWEY4UKP.js";import{Ba as R,D as r,E as g,Ea as U,H as f,J as a,M as i,N as n,R as O,S as k,T as d,W as l,X as w,Y as h,a as x,b as y,ga as P,ha as W,ia as j,o as _,oa as $,p as I,pa as A,qa as D,r as b,ra as N,sa as T,t as E,ta as L,u as C,x as S,y as M,za as F}from"./chunk-ORHOKJTR.js";var G=(()=>{class t{constructor(e){this.http=e}getAll(){return this.http.get(`${u.apiUrl}/workflows`)}getById(e){return this.http.get(`${u.apiUrl}/workflows/${e}`)}getByEmployeeId(e){return this.http.get(`${u.apiUrl}/workflows/employee/${e}`)}create(e){return this.http.post(`${u.apiUrl}/workflows`,e)}update(e,o){let s=typeof e=="string"?parseInt(e):e;return console.log(`WorkflowService: Updating workflow ${s}`,o),this.http.put(`${u.apiUrl}/workflows/${s}`,o)}delete(e){return this.http.delete(`${u.apiUrl}/workflows/${e}`)}static{this.\u0275fac=function(o){return new(o||t)(b(L))}}static{this.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var q=(t,c,e)=>({"bg-warning":t,"bg-success":c,"bg-danger":e});function H(t,c){if(t&1&&(i(0,"div",13),l(1),n()),t&2){let e=d();r(),w(e.errorMessage)}}function z(t,c){t&1&&(i(0,"th",14),l(1,"Actions"),n())}function Q(t,c){if(t&1&&(i(0,"div")(1,"strong"),l(2),n(),l(3),n()),t&2){let e=c.$implicit,o=d(2).$implicit;r(2),h("",e,":"),r(),h(" ",o.workflowData[e]," ")}}function X(t,c){if(t&1&&(i(0,"div",19),f(1,Q,4,2,"div",10),n()),t&2){let e=d().$implicit,o=d();r(),a("ngForOf",o.getObjectKeys(e.workflowData))}}function Y(t,c){if(t&1){let e=O();i(0,"td",20)(1,"div",21)(2,"select",22),k("change",function(s){S(e);let m=d().$implicit,p=d();return M(p.updateWorkflowStatus(m,s.target.value))}),i(3,"option",23),l(4,"Pending"),n(),i(5,"option",24),l(6,"Approved"),n(),i(7,"option",25),l(8,"Rejected"),n()()()()}if(t&2){let e=d().$implicit;r(2),a("value",e.status)}}function Z(t,c){if(t&1&&(i(0,"tr")(1,"td",15),l(2),n(),i(3,"td",15)(4,"div"),l(5),n(),f(6,X,2,1,"div",16),n(),i(7,"td",15),l(8),W(9,"date"),n(),i(10,"td",15)(11,"span",17),l(12),n()(),f(13,Y,9,1,"td",18),n()),t&2){let e=c.$implicit,o=d();r(2),w(e.requestType),r(3),w(e.description),r(),a("ngIf",e.workflowData),r(2),w(j(9,7,e.createdAt,"shortDate")),r(3),a("ngClass",P(10,q,e.status==="PENDING",e.status==="APPROVED",e.status==="REJECTED")),r(),h(" ",e.status," "),r(),a("ngIf",(o.account==null?null:o.account.role)==="Admin")}}function ee(t,c){if(t&1&&(i(0,"tr")(1,"td",26),l(2,"No workflows found for this employee"),n()()),t&2){let e=d();r(),a("colSpan",(e.account==null?null:e.account.role)==="Admin"?5:4)}}var J=(()=>{class t{constructor(e,o,s,m){this.router=e,this.route=o,this.workflowService=s,this.accountService=m,this.workflows=[],this.errorMessage="",this.employeeId=null,this.showModal=!1,this.selectedWorkflowId=null,this.account=this.accountService.accountValue}ngOnInit(){this.route.params.subscribe(e=>{if(console.log("Route params:",e),e.employeeId)this.employeeId=Number(e.employeeId),console.log("Parsed employeeId:",this.employeeId);else{let o=this.accountService.accountValue?.employeeId;o?(this.employeeId=Number(o),console.log("Set employeeId from account service:",this.employeeId)):console.error("No employeeId available")}this.loadWorkflows()})}loadWorkflows(){this.employeeId?(console.log("Loading workflows for employee ID:",this.employeeId),this.workflowService.getByEmployeeId(this.employeeId).subscribe({next:e=>{console.log("Workflows received from API:",e),this.workflows=e,e.length===0&&console.log("No workflows found for this employee")},error:e=>{console.error("Error loading workflows:",e),this.errorMessage="Error loading workflows"}})):(console.log("Loading all workflows"),this.workflowService.getAll().subscribe({next:e=>{console.log("All workflows received from API:",e),this.workflows=e,e.length===0&&console.log("No workflows found")},error:e=>{console.error("Error loading workflows:",e),this.errorMessage="Error loading workflows"}}))}addWorkflow(){this.selectedWorkflowId=null,this.showModal=!0}editWorkflow(e){this.selectedWorkflowId=e,this.showModal=!0}closeModal(){this.showModal=!1,this.selectedWorkflowId=null,this.loadWorkflows()}deleteWorkflow(e){confirm("Are you sure you want to delete this workflow?")&&this.workflowService.delete(e).subscribe({next:()=>{this.loadWorkflows()},error:o=>{console.error("Error deleting workflow:",o),this.errorMessage="Error deleting workflow"}})}updateWorkflowStatus(e,o){console.log("Updating workflow:",e),console.log("New status:",o);let s=y(x({},e),{status:o});this.workflowService.update(e.id,s).subscribe({next:m=>{console.log("Workflow updated successfully:",m);let p=this.workflows.findIndex(v=>v.id===e.id);p!==-1&&(this.workflows[p]=m,this.workflows=[...this.workflows])},error:m=>{console.error("Error updating workflow:",m),this.errorMessage="Error updating workflow status";let p=this.workflows.findIndex(v=>v.id===e.id);p!==-1&&(this.workflows[p].status=e.status,this.workflows=[...this.workflows])}})}isObject(e){return e!==null&&typeof e=="object"}getObjectKeys(e){return Object.keys(e).filter(o=>o!=="items")}goBackToEmployees(){this.router.navigate(["/admin/employees"])}static{this.\u0275fac=function(o){return new(o||t)(g(R),g(F),g(G),g(B))}}static{this.\u0275cmp=E({type:t,selectors:[["app-list"]],decls:24,vars:5,consts:[[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],["class","alert alert-danger",4,"ngIf"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"col-2"],[1,"col-4"],["class","col-2 text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-secondary","mt-3",3,"click"],[1,"alert","alert-danger"],[1,"col-2","text-center"],[1,"align-middle"],["class","small text-muted mt-1",4,"ngIf"],[1,"badge",3,"ngClass"],["class","align-middle text-center",4,"ngIf"],[1,"small","text-muted","mt-1"],[1,"align-middle","text-center"],[1,"action-buttons"],[1,"form-select","form-select-sm","d-inline-block","w-auto","me-2",3,"change","value"],["value","PENDING"],["value","APPROVED"],["value","REJECTED"],[1,"text-center","py-3",3,"colSpan"]],template:function(o,s){o&1&&(i(0,"div",0)(1,"div",1)(2,"h5",2),l(3),n()(),i(4,"div",3),f(5,H,2,1,"div",4),i(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),l(11,"Type"),n(),i(12,"th",8),l(13,"Details"),n(),i(14,"th",7),l(15,"Created Date"),n(),i(16,"th",7),l(17,"Status"),n(),f(18,z,2,0,"th",9),n()(),i(19,"tbody"),f(20,Z,14,14,"tr",10)(21,ee,3,1,"tr",11),n()(),i(22,"button",12),k("click",function(){return s.goBackToEmployees()}),l(23,"Back to Employees"),n()()()()),o&2&&(r(3),h("Workflows for Employee ",s.employeeId,""),r(2),a("ngIf",s.errorMessage),r(13),a("ngIf",(s.account==null?null:s.account.role)==="Admin"),r(2),a("ngForOf",s.workflows),r(),a("ngIf",s.workflows.length===0))},dependencies:[$,A,D,N],styles:[`.table[_ngcontent-%COMP%] {
    width: 100%;
    margin-bottom: 0;
}

.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    background-color: #f8f9fa;
    font-weight: 600;
    padding: 0.75rem;
    border-bottom: 2px solid #dee2e6;
}

.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 0.75rem;
    vertical-align: middle;
}

.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
    background-color: rgba(0,0,0,.02);
}

.badge[_ngcontent-%COMP%] {
    padding: 0.5em 0.75em;
    font-weight: 500;
}

.action-buttons[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: center;
}



.modal.show[_ngcontent-%COMP%] {
    background-color: rgba(0,0,0,0.5);
}



@media (max-width: 992px) {
    .action-buttons[_ngcontent-%COMP%] {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .form-select[_ngcontent-%COMP%] {
        width: 100% !important;
        margin-right: 0 !important;
        margin-bottom: 0.5rem;
    }
}`]})}}return t})();var te=[{path:":employeeId",component:J}],pe=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=C({type:t})}static{this.\u0275inj=I({imports:[T,U.forChild(te)]})}}return t})();export{pe as WorkflowsModule};
