import{c as X,e as D}from"./chunk-6SARZJB7.js";import{b as U}from"./chunk-FWEY4UKP.js";import{b as W,d as q,e as B,f as Y,g as G,h as H,p as J,r as K}from"./chunk-DCNBK2HR.js";import{$ as O,Ba as S,D as d,E as p,Ea as V,H as h,J as l,M as o,N as r,O as _,R as v,S as b,T as g,V as j,W as a,X as C,Y as F,aa as A,ba as P,ea as T,l as f,oa as L,p as w,pa as z,qa as E,sa as R,t as y,u as M,x as m,y as c,za as Q}from"./chunk-ORHOKJTR.js";function ie(n,x){if(n&1){let e=v();o(0,"button",11),b("click",function(){m(e);let t=g();return c(t.add())}),_(1,"i",12),a(2,"Add Department "),r()}}function re(n,x){if(n&1){let e=v();o(0,"button",21),b("click",function(){m(e);let t=g().$implicit,s=g();return c(s.delete(t.id))}),_(1,"i",22),a(2,"Delete "),r()}}function oe(n,x){if(n&1){let e=v();o(0,"tr")(1,"td",13),a(2),r(),o(3,"td",14),a(4),r(),o(5,"td",15)(6,"span",16),a(7),r()(),o(8,"td",14)(9,"div",17)(10,"button",18),b("click",function(){let t=m(e).$implicit,s=g();return c(s.edit(t.id))}),_(11,"i",19),a(12,"Edit "),r(),h(13,re,3,0,"button",20),r()()()}if(n&2){let e=x.$implicit,i=g();d(2),C(e.name),d(2),C(e.description),d(3),C(e.employeeCount),d(6),l("ngIf",(i.account==null?null:i.account.role)==="Admin")}}var Z=(()=>{class n{constructor(e,i,t){this.router=e,this.departmentService=i,this.accountService=t,this.departments=[],this.account=this.accountService.accountValue}ngOnInit(){this.loadDepartments()}loadDepartments(){console.log("Loading departments..."),this.departmentService.getAll().pipe(f()).subscribe({next:e=>{console.log("Departments loaded:",e),this.departments=e},error:e=>{console.error("Error loading departments:",e)}})}add(){this.router.navigate(["/admin/departments/add"])}edit(e){if(console.log("Editing department with ID:",e),!e){console.error("Cannot edit department: Invalid ID");return}this.router.navigate(["/admin/departments/edit",e])}delete(e){if(console.log("Deleting department with ID:",e),!this.departments.find(t=>t.id===e)){console.error("Cannot delete department: Department not found");return}confirm("Are you sure you want to delete this department?")&&this.departmentService.delete(e.toString()).pipe(f()).subscribe({next:()=>{console.log("Department deleted successfully"),this.departments=this.departments.filter(t=>t.id!==e)},error:t=>{console.error("Error deleting department:",t)}})}static{this.\u0275fac=function(i){return new(i||n)(p(S),p(D),p(U))}}static{this.\u0275cmp=y({type:n,selectors:[["app-departments-list"]],decls:20,vars:2,consts:[[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"col-3"],[1,"col-5"],[1,"col-2","text-center"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-plus","me-1"],[1,"align-middle","fw-medium"],[1,"align-middle"],[1,"align-middle","text-center"],[1,"badge","bg-info"],[1,"d-flex","justify-content-center","gap-2"],["title","Edit Department",1,"btn","btn-sm","btn-primary","action-btn",3,"click"],[1,"fas","fa-edit","me-1"],["class","btn btn-sm btn-danger action-btn","title","Delete Department",3,"click",4,"ngIf"],["title","Delete Department",1,"btn","btn-sm","btn-danger","action-btn",3,"click"],[1,"fas","fa-trash","me-1"]],template:function(i,t){i&1&&(o(0,"div",0)(1,"div",1)(2,"h5",2),a(3,"Departments"),r(),h(4,ie,3,0,"button",3),r(),o(5,"div",4)(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),a(11,"Name"),r(),o(12,"th",8),a(13,"Description"),r(),o(14,"th",9),a(15,"Employee Count"),r(),o(16,"th",9),a(17,"Actions"),r()()(),o(18,"tbody"),h(19,oe,14,4,"tr",10),r()()()()()),i&2&&(d(4),l("ngIf",(t.account==null?null:t.account.role)==="Admin"),d(15),l("ngForOf",t.departments))},dependencies:[z,E],styles:[`.table[_ngcontent-%COMP%] {
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

.action-btn[_ngcontent-%COMP%] {
    min-width: 90px;
    height: 32px;
    padding: 0.25rem 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    font-size: 0.875rem;
}

.action-btn[_ngcontent-%COMP%]:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.badge[_ngcontent-%COMP%] {
    padding: 0.5em 0.75em;
    font-weight: 500;
    font-size: 0.875rem;
}

.fw-medium[_ngcontent-%COMP%] {
    font-weight: 500;
}`]})}}return n})();var ae=n=>({"was-validated":n});function de(n,x){if(n&1&&(o(0,"div",17),a(1),r()),n&2){let e=g();d(),C(e.errorMessage)}}function se(n,x){n&1&&_(0,"span",18)}var N=(()=>{class n{constructor(e,i,t){this.router=e,this.route=i,this.departmentService=t,this.department=new X,this.loading=!1}ngOnInit(){console.log("AddEditComponent initialized");let e=this.route.snapshot.params.id;this.id=e?parseInt(e,10):null,console.log("Department ID from route:",this.id),this.id?(this.loading=!0,console.log("Fetching department data for ID:",this.id),this.departmentService.getById(this.id.toString()).pipe(f()).subscribe({next:i=>{console.log("Department data received:",i),this.department=i,this.loading=!1},error:i=>{console.error("Error fetching department:",i),this.errorMessage=i?.error?.message||"An error occurred while loading the department",this.loading=!1}})):(console.log("Creating new department"),this.department={id:null,name:"",description:"",employeeCount:0})}save(){this.loading=!0,this.errorMessage="",console.log("Saving department:",this.department),this.id?this.departmentService.update(this.id.toString(),this.department).pipe(f()).subscribe({next:e=>{console.log("Department updated successfully:",e),this.router.navigate(["/admin/departments"])},error:e=>{console.error("Error updating department:",e),this.errorMessage=e?.error?.message||"An error occurred while updating the department",this.loading=!1}}):this.departmentService.create(this.department).pipe(f()).subscribe({next:e=>{console.log("Department created successfully:",e),this.department=e,this.router.navigate(["/admin/departments"])},error:e=>{console.error("Error creating department:",e),this.errorMessage=e?.error?.message||"An error occurred while creating the department",this.loading=!1}})}cancel(){this.router.navigate(["/admin/departments"])}static{this.\u0275fac=function(i){return new(i||n)(p(S),p(Q),p(D))}}static{this.\u0275cmp=y({type:n,selectors:[["ng-component"]],decls:26,vars:10,consts:[["departmentForm","ngForm"],[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],["class","alert alert-danger",4,"ngIf"],[1,"needs-validation",3,"ngClass"],[1,"row"],[1,"col-md-12","mb-4"],[1,"form-label","fw-bold"],["type","text","name","name","required","","placeholder","Enter department name",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],[1,"invalid-feedback"],["name","description","rows","3","placeholder","Enter department description",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-end","gap-2","mt-4"],[1,"btn","btn-secondary","btn-lg","px-4",3,"click","disabled"],[1,"btn","btn-primary","btn-lg","px-4",3,"click","disabled"],["class","spinner-border spinner-border-sm me-2",4,"ngIf"],[1,"alert","alert-danger"],[1,"spinner-border","spinner-border-sm","me-2"]],template:function(i,t){if(i&1){let s=v();o(0,"div",1)(1,"div",2)(2,"h5",3),a(3),r()(),o(4,"div",4),h(5,de,2,1,"div",5),o(6,"form",6,0)(8,"div",7)(9,"div",8)(10,"label",9),a(11,"Name"),r(),o(12,"input",10),P("ngModelChange",function(u){return m(s),A(t.department.name,u)||(t.department.name=u),c(u)}),r(),o(13,"div",11),a(14,"Department name is required"),r()()(),o(15,"div",7)(16,"div",8)(17,"label",9),a(18,"Description"),r(),o(19,"textarea",12),P("ngModelChange",function(u){return m(s),A(t.department.description,u)||(t.department.description=u),c(u)}),r()()(),o(20,"div",13)(21,"button",14),b("click",function(){return m(s),c(t.cancel())}),a(22," Cancel "),r(),o(23,"button",15),b("click",function(){return m(s),c(t.save())}),h(24,se,1,0,"span",16),a(25," Save "),r()()()()()}if(i&2){let s=j(7);d(3),F("",t.id?"Edit":"Add"," Department"),d(2),l("ngIf",t.errorMessage),d(),l("ngClass",T(8,ae,t.loading)),d(6),O("ngModel",t.department.name),d(7),O("ngModel",t.department.description),d(2),l("disabled",t.loading),d(2),l("disabled",t.loading||!s.form.valid),d(),l("ngIf",t.loading)}},dependencies:[L,E,H,W,q,B,J,G,Y],styles:[`.form-control[_ngcontent-%COMP%] {
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    transition: all 0.2s ease-in-out;
}

.form-control[_ngcontent-%COMP%]:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control-lg[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem;
    font-size: 1rem;
}

textarea.form-control[_ngcontent-%COMP%] {
    resize: vertical;
    min-height: 100px;
}

.btn[_ngcontent-%COMP%] {
    transition: all 0.2s ease-in-out;
}

.btn[_ngcontent-%COMP%]:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn-lg[_ngcontent-%COMP%] {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
}

.fw-bold[_ngcontent-%COMP%] {
    font-weight: 600;
}

.invalid-feedback[_ngcontent-%COMP%] {
    font-size: 0.875rem;
    margin-top: 0.25rem;
}`]})}}return n})();var le=[{path:"",component:Z},{path:"add",component:N},{path:"edit/:id",component:N}],$=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=M({type:n})}static{this.\u0275inj=w({imports:[V.forChild(le),V]})}}return n})();var De=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=M({type:n})}static{this.\u0275inj=w({imports:[R,K,$]})}}return n})();export{De as DepartmentsModule};
