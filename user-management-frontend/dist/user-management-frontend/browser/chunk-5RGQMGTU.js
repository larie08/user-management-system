import{d as ae,e as A,f as T}from"./chunk-6SARZJB7.js";import{b as z}from"./chunk-FWEY4UKP.js";import{b as $,d as j,e as ee,f as te,g as L,h as ne,l as W,m as q,n as R,p as ie,r as oe}from"./chunk-DCNBK2HR.js";import{$ as S,Ba as P,Ca as re,D as l,E as p,Ea as H,H as h,J as d,M as n,N as i,O as y,R as I,S as v,T as C,V as G,W as r,X as _,Y as M,aa as w,ba as E,ea as D,fa as X,ha as J,ia as K,l as g,oa as N,p as V,pa as k,qa as O,ra as Q,sa as Z,t as x,u as F,x as f,y as b,za as B}from"./chunk-ORHOKJTR.js";var ue=(o,u)=>({"bg-success":o,"bg-danger":u}),ge=o=>["/admin/requests",o],fe=o=>["/admin/workflows",o];function be(o,u){if(o&1){let e=I();n(0,"button",11),v("click",function(){f(e);let t=C();return b(t.add())}),y(1,"i",12),r(2,"Add Employee "),i()}}function he(o,u){if(o&1){let e=I();n(0,"button",25),v("click",function(){f(e);let t=C().$implicit,s=C();return b(s.delete(t.id))}),y(1,"i",26),r(2,"Delete "),i()}}function ye(o,u){if(o&1){let e=I();n(0,"tr")(1,"td",13),r(2),i(),n(3,"td",13),r(4),i(),n(5,"td",13),r(6),i(),n(7,"td",13),r(8),i(),n(9,"td",13),r(10),J(11,"date"),i(),n(12,"td",13)(13,"span",14),r(14),i()(),n(15,"td",13)(16,"div",15)(17,"button",16),v("click",function(){let t=f(e).$implicit,s=C();return b(s.edit(t.id))}),y(18,"i",17),r(19,"Edit "),i(),n(20,"button",18),y(21,"i",19),r(22,"Request "),i(),n(23,"button",20),v("click",function(){let t=f(e).$implicit,s=C();return b(s.transfer(t.id))}),y(24,"i",21),r(25,"Transfer "),i(),n(26,"button",22),y(27,"i",23),r(28,"Workflows "),i(),h(29,he,3,0,"button",24),i()()()}if(o&2){let e=u.$implicit,a=C();l(2),_(e.employeeId),l(2),_(e.account==null?null:e.account.email),l(2),_(e.position),l(2),_(a.getDepartmentName(e)),l(2),_(K(11,10,e.hireDate,"shortDate")),l(3),d("ngClass",X(13,ue,e.status==="Active",e.status!=="Active")),l(),M(" ",e.status," "),l(6),d("routerLink",D(16,ge,e.id)),l(6),d("routerLink",D(18,fe,e.id)),l(3),d("ngIf",(a.account==null?null:a.account.role)==="Admin")}}var me=(()=>{class o{constructor(e,a,t,s){this.router=e,this.employeeService=a,this.accountService=t,this.departmentService=s,this.employees=[],this.departments=[],this.account=this.accountService.accountValue}ngOnInit(){this.loadDepartments(),this.loadEmployees()}loadDepartments(){this.departmentService.getAll().pipe(g()).subscribe(e=>this.departments=e)}loadEmployees(){this.employeeService.getAll().pipe(g()).subscribe({next:e=>{console.log("Received employees:",e),this.employees=e},error:e=>{console.error("Error loading employees:",e)}})}getDepartmentName(e){if(e.department&&e.department.name)return e.department.name;let a=this.departments.find(t=>t.id===e.departmentId);return a?a.name:""}add(){this.router.navigate(["/admin/employees/add"])}edit(e){this.router.navigate(["/admin/employees/edit",e])}transfer(e){this.router.navigate(["/admin/employees/transfer",e])}delete(e){this.employees.find(t=>t.id===e)&&confirm("Are you sure you want to delete this employee?")&&this.employeeService.delete(e).pipe(g()).subscribe(()=>this.employees=this.employees.filter(t=>t.id!==e))}static{this.\u0275fac=function(a){return new(a||o)(p(P),p(T),p(z),p(A))}}static{this.\u0275cmp=x({type:o,selectors:[["app-employees-list"]],decls:26,vars:2,consts:[[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"col-1"],[1,"col-2"],[1,"col-3","text-center"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-plus","me-1"],[1,"align-middle"],[1,"badge",3,"ngClass"],[1,"action-buttons"],["title","Edit Employee",1,"btn","btn-sm","btn-primary","action-btn",3,"click"],[1,"fas","fa-edit","me-1"],["title","View Requests",1,"btn","btn-sm","btn-info","action-btn",3,"routerLink"],[1,"fas","fa-file-alt","me-1"],["title","Transfer Employee",1,"btn","btn-sm","btn-warning","action-btn",3,"click"],[1,"fas","fa-exchange-alt","me-1"],["title","View Workflows",1,"btn","btn-sm","btn-secondary","action-btn",3,"routerLink"],[1,"fas","fa-tasks","me-1"],["class","btn btn-sm btn-danger action-btn","title","Delete Employee",3,"click",4,"ngIf"],["title","Delete Employee",1,"btn","btn-sm","btn-danger","action-btn",3,"click"],[1,"fas","fa-trash","me-1"]],template:function(a,t){a&1&&(n(0,"div",0)(1,"div",1)(2,"h5",2),r(3,"Employees"),i(),h(4,be,3,0,"button",3),i(),n(5,"div",4)(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),r(11,"Employee ID"),i(),n(12,"th",8),r(13,"User"),i(),n(14,"th",8),r(15,"Position"),i(),n(16,"th",8),r(17,"Department"),i(),n(18,"th",7),r(19,"Hire Date"),i(),n(20,"th",7),r(21,"Status"),i(),n(22,"th",9),r(23,"Actions"),i()()(),n(24,"tbody"),h(25,ye,30,20,"tr",10),i()()()()()),a&2&&(l(4),d("ngIf",(t.account==null?null:t.account.role)==="Admin"),l(21),d("ngForOf",t.employees))},dependencies:[N,k,O,re,Q],styles:[`.table[_ngcontent-%COMP%] {
    width: 100%;
    margin-bottom: 0;
}

.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    background-color: #f8f9fa;
    font-weight: 600;
    padding: 1rem 0.75rem;
    border-bottom: 2px solid #dee2e6;
}

.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 1rem 0.75rem;
    vertical-align: middle;
}

.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
    background-color: rgba(0,0,0,.02);
}

.action-buttons[_ngcontent-%COMP%] {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.action-btn[_ngcontent-%COMP%] {
    min-width: 100px;
    height: 32px;
    padding: 0.25rem 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    font-size: 0.875rem;
    white-space: nowrap;
}

.action-btn[_ngcontent-%COMP%]:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
    font-size: 0.875rem;
}



.btn-primary[_ngcontent-%COMP%]:hover {
    background-color: #0b5ed7;
}

.btn-info[_ngcontent-%COMP%]:hover {
    background-color: #31d2f2;
}

.btn-warning[_ngcontent-%COMP%]:hover {
    background-color: #ffc107;
}

.btn-secondary[_ngcontent-%COMP%]:hover {
    background-color: #6c757d;
}

.btn-danger[_ngcontent-%COMP%]:hover {
    background-color: #bb2d3b;
}



[title][_ngcontent-%COMP%] {
    position: relative;
}

[title][_ngcontent-%COMP%]:hover::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    background-color: rgba(0,0,0,0.8);
    color: white;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1000;
}



@media (max-width: 1200px) {
    .action-buttons[_ngcontent-%COMP%] {
        flex-wrap: wrap;
        gap: 0.25rem;
    }
    
    .action-btn[_ngcontent-%COMP%] {
        min-width: 90px;
        font-size: 0.8rem;
        padding: 0.25rem 0.5rem;
    }
}



.badge[_ngcontent-%COMP%] {
    padding: 0.5em 0.75em;
    font-weight: 500;
    font-size: 0.875rem;
}`]})}}return o})();var _e=o=>({"was-validated":o});function Ce(o,u){if(o&1&&(n(0,"div",26),r(1),i()),o&2){let e=C();l(),_(e.errorMessage)}}function Se(o,u){if(o&1&&(n(0,"option",27),r(1),i()),o&2){let e=u.$implicit;d("value",e.id),l(),M(" ",e.email," ")}}function we(o,u){if(o&1&&(n(0,"option",27),r(1),i()),o&2){let e=u.$implicit;d("value",e.id),l(),M(" ",e.name," ")}}function Ee(o,u){o&1&&y(0,"span",28)}var Y=(()=>{class o{constructor(e,a,t,s,c){this.router=e,this.route=a,this.employeeService=t,this.departmentService=s,this.accountService=c,this.departments=[],this.users=[],this.loading=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.departmentService.getAll().pipe(g()).subscribe({next:e=>{this.departments=e},error:e=>{this.errorMessage=e}}),this.accountService.getAll().pipe(g()).subscribe({next:e=>{if(this.id&&this.employee&&this.employee.userId){let a=e.find(s=>String(s.id)===String(this.employee.userId)),t=e.filter(s=>s.status==="Active");a&&a.status!=="Active"&&!t.some(s=>String(s.id)===String(a.id))&&(t=[a,...t]),this.users=t}else this.users=e.filter(a=>a.status==="Active")},error:e=>{this.errorMessage=e}}),this.id?this.employeeService.getById(this.id).pipe(g()).subscribe({next:e=>{this.employee=e},error:e=>{this.errorMessage=e}}):this.employee={employeeId:"",userId:0,position:"",hireDate:new Date,status:"Active"}}save(){this.loading=!0,this.errorMessage="",this.id?this.employeeService.update(this.id,this.employee).pipe(g()).subscribe({next:()=>{this.router.navigate(["/admin/employees"])},error:e=>{this.errorMessage=e,this.loading=!1}}):this.employeeService.create(this.employee).pipe(g()).subscribe({next:()=>{this.router.navigate(["/admin/employees"])},error:e=>{this.errorMessage=e,this.loading=!1}})}cancel(){this.router.navigate(["/admin/employees"])}static{this.\u0275fac=function(a){return new(a||o)(p(P),p(B),p(T),p(A),p(z))}}static{this.\u0275cmp=x({type:o,selectors:[["ng-component"]],decls:66,vars:17,consts:[["employeeForm","ngForm"],[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],["class","alert alert-danger",4,"ngIf"],[1,"needs-validation",3,"ngClass"],[1,"row"],[1,"col-md-6","mb-3"],[1,"form-label","fw-bold"],["type","text","name","employeeId","required","","placeholder","Enter Employee ID",1,"form-control","form-control-lg",3,"ngModelChange","ngModel","disabled"],[1,"invalid-feedback"],[1,"dropdown-wrapper"],["name","userId","required","",1,"form-select","form-select-lg","custom-select",3,"ngModelChange","ngModel"],["value","","disabled","","selected","",1,"placeholder-option"],["class","dropdown-option",3,"value",4,"ngFor","ngForOf"],["type","text","name","position","required","","placeholder","Enter Position",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["name","departmentId",1,"form-select","form-select-lg","custom-select",3,"ngModelChange","ngModel"],["type","date","name","hireDate","required","",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["name","status","required","",1,"form-select","form-select-lg","custom-select",3,"ngModelChange","ngModel"],["value","Active",1,"dropdown-option","status-active"],["value","Inactive",1,"dropdown-option","status-inactive"],[1,"d-flex","justify-content-end","gap-2","mt-4"],[1,"btn","btn-secondary","btn-lg","px-4",3,"click","disabled"],[1,"btn","btn-primary","btn-lg","px-4",3,"click","disabled"],["class","spinner-border spinner-border-sm me-2",4,"ngIf"],[1,"alert","alert-danger"],[1,"dropdown-option",3,"value"],[1,"spinner-border","spinner-border-sm","me-2"]],template:function(a,t){if(a&1){let s=I();n(0,"div",1)(1,"div",2)(2,"h5",3),r(3),i()(),n(4,"div",4),h(5,Ce,2,1,"div",5),n(6,"form",6,0)(8,"div",7)(9,"div",8)(10,"label",9),r(11,"Employee ID"),i(),n(12,"input",10),E("ngModelChange",function(m){return f(s),w(t.employee.employeeId,m)||(t.employee.employeeId=m),b(m)}),i(),n(13,"div",11),r(14,"Employee ID is required"),i()(),n(15,"div",8)(16,"label",9),r(17,"User"),i(),n(18,"div",12)(19,"select",13),E("ngModelChange",function(m){return f(s),w(t.employee.userId,m)||(t.employee.userId=m),b(m)}),n(20,"option",14),r(21,"Select User"),i(),h(22,Se,2,2,"option",15),i(),n(23,"div",11),r(24,"User is required"),i()()()(),n(25,"div",7)(26,"div",8)(27,"label",9),r(28,"Position"),i(),n(29,"input",16),E("ngModelChange",function(m){return f(s),w(t.employee.position,m)||(t.employee.position=m),b(m)}),i(),n(30,"div",11),r(31,"Position is required"),i()(),n(32,"div",8)(33,"label",9),r(34,"Department"),i(),n(35,"div",12)(36,"select",17),E("ngModelChange",function(m){return f(s),w(t.employee.departmentId,m)||(t.employee.departmentId=m),b(m)}),n(37,"option",14),r(38,"Select Department"),i(),h(39,we,2,2,"option",15),i()()()(),n(40,"div",7)(41,"div",8)(42,"label",9),r(43,"Hire Date"),i(),n(44,"input",18),E("ngModelChange",function(m){return f(s),w(t.employee.hireDate,m)||(t.employee.hireDate=m),b(m)}),i(),n(45,"div",11),r(46,"Hire Date is required"),i()(),n(47,"div",8)(48,"label",9),r(49,"Status"),i(),n(50,"div",12)(51,"select",19),E("ngModelChange",function(m){return f(s),w(t.employee.status,m)||(t.employee.status=m),b(m)}),n(52,"option",14),r(53,"Select Status"),i(),n(54,"option",20),r(55,"Active"),i(),n(56,"option",21),r(57,"Inactive"),i()(),n(58,"div",11),r(59,"Status is required"),i()()()(),n(60,"div",22)(61,"button",23),v("click",function(){return f(s),b(t.cancel())}),r(62," Cancel "),i(),n(63,"button",24),v("click",function(){return f(s),b(t.save())}),h(64,Ee,1,0,"span",25),r(65," Save "),i()()()()()}if(a&2){let s=G(7);l(3),M("",t.id?"Edit":"Add"," Employee"),l(2),d("ngIf",t.errorMessage),l(),d("ngClass",D(15,_e,t.loading)),l(6),S("ngModel",t.employee.employeeId),d("disabled",!!t.id),l(7),S("ngModel",t.employee.userId),l(3),d("ngForOf",t.users),l(7),S("ngModel",t.employee.position),l(7),S("ngModel",t.employee.departmentId),l(3),d("ngForOf",t.departments),l(5),S("ngModel",t.employee.hireDate),l(7),S("ngModel",t.employee.status),l(10),d("disabled",t.loading),l(2),d("disabled",t.loading||!s.form.valid),l(),d("ngIf",t.loading)}},dependencies:[N,k,O,ne,q,R,$,W,j,ee,ie,L,te],styles:[`.dropdown-wrapper[_ngcontent-%COMP%] {
    position: relative;
}

.custom-select[_ngcontent-%COMP%] {
    appearance: none;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.custom-select[_ngcontent-%COMP%]:hover {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.custom-select[_ngcontent-%COMP%]:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    outline: 0;
}

.placeholder-option[_ngcontent-%COMP%] {
    color: #6c757d;
    font-style: italic;
}

.dropdown-option[_ngcontent-%COMP%] {
    color: #212529;
    padding: 8px 12px;
}

.status-active[_ngcontent-%COMP%] {
    color: #198754;
    font-weight: 500;
}

.status-inactive[_ngcontent-%COMP%] {
    color: #dc3545;
    font-weight: 500;
}



.dropdown-wrapper[_ngcontent-%COMP%]::after {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #6c757d;
    pointer-events: none;
}



.dropdown-option[_ngcontent-%COMP%]:hover {
    background-color: #f8f9fa;
}



.custom-select[_ngcontent-%COMP%]:focus    + .dropdown-wrapper[_ngcontent-%COMP%]::after {
    border-top-color: #0d6efd;
}`]})}}return o})();function Me(o,u){if(o&1&&(n(0,"option",16),r(1),i()),o&2){let e=u.$implicit;d("value",e.id),l(),_(e.name)}}function xe(o,u){o&1&&y(0,"span",17)}var pe=(()=>{class o{constructor(e,a,t,s,c){this.router=e,this.route=a,this.employeeService=t,this.departmentService=s,this.alertService=c,this.departments=[],this.loading=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.departmentService.getAll().pipe(g()).subscribe(e=>this.departments=e),this.employeeService.getById(this.id).pipe(g()).subscribe(e=>{this.employee=e,this.departmentId=e.departmentId})}transfer(){this.loading=!0,this.employeeService.transfer(this.id,this.departmentId).pipe(g()).subscribe({next:()=>{this.alertService.success("Employee transferred successfully",{keepAfterRouteChange:!0}),this.router.navigate(["/admin/employees"])},error:e=>{this.alertService.error(e),this.loading=!1}})}cancel(){this.router.navigate(["/admin/employees"])}static{this.\u0275fac=function(a){return new(a||o)(p(P),p(B),p(T),p(A),p(ae))}}static{this.\u0275cmp=x({type:o,selectors:[["ng-component"]],decls:20,vars:6,consts:[["tabindex","-1",1,"modal","fade","show","d-block"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-3"],[1,"form-label"],[1,"form-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"btn","btn-warning",3,"click","disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"btn","btn-secondary",3,"click","disabled"],[1,"modal-backdrop","fade","show"],[3,"value"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(a,t){a&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),r(5),i(),n(6,"button",5),v("click",function(){return t.cancel()}),i()(),n(7,"div",6)(8,"div",7)(9,"label",8),r(10,"Department"),i(),n(11,"select",9),E("ngModelChange",function(c){return w(t.departmentId,c)||(t.departmentId=c),c}),h(12,Me,2,2,"option",10),i()()(),n(13,"div",11)(14,"button",12),v("click",function(){return t.transfer()}),h(15,xe,1,0,"span",13),r(16," Transfer "),i(),n(17,"button",14),v("click",function(){return t.cancel()}),r(18,"Cancel"),i()()()()(),y(19,"div",15)),a&2&&(l(5),M("Transfer Employee: ",t.employee==null?null:t.employee.employeeId,""),l(6),S("ngModel",t.departmentId),l(),d("ngForOf",t.departments),l(2),d("disabled",t.loading),l(),d("ngIf",t.loading),l(2),d("disabled",t.loading))},dependencies:[k,O,q,R,W,j,L],encapsulation:2})}}return o})();var Ie=[{path:"",component:me},{path:"add",component:Y},{path:"edit/:id",component:Y},{path:"transfer/:id",component:pe}],ce=(()=>{class o{static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275mod=F({type:o})}static{this.\u0275inj=V({imports:[H.forChild(Ie),H]})}}return o})();var Xe=(()=>{class o{static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275mod=F({type:o})}static{this.\u0275inj=V({imports:[Z,oe,ce]})}}return o})();export{Xe as EmployeesModule};
