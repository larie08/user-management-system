import{e as K}from"./chunk-JNVOJ2J6.js";import{d as J}from"./chunk-6SARZJB7.js";import{b as S}from"./chunk-FWEY4UKP.js";import{b as O,c as v,d as k,e as F,h as q,j as D,k as L,l as j,m as A,n as R,q as V,s as G}from"./chunk-DCNBK2HR.js";import{Aa as z,Ba as H,Ca as h,D as r,E as p,Ea as P,H as s,J as m,M as n,N as t,O as c,S as M,T as f,W as o,Y as N,_ as w,ea as u,l as E,oa as I,p as _,qa as U,sa as T,t as g,u as C,za as B}from"./chunk-ORHOKJTR.js";var W=(()=>{class e{static{this.\u0275fac=function(d){return new(d||e)}}static{this.\u0275cmp=g({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(d,i){d&1&&(n(0,"div",0)(1,"div",1),c(2,"router-outlet"),t()())},dependencies:[z],encapsulation:2})}}return e})();var X=(()=>{class e{constructor(a){this.accountService=a,this.account=this.accountService.accountValue}static{this.\u0275fac=function(d){return new(d||e)(p(S))}}static{this.\u0275cmp=g({type:e,selectors:[["ng-component"]],decls:13,vars:4,consts:[["routerLink","update"]],template:function(d,i){d&1&&(n(0,"h1"),o(1,"My Profile"),t(),n(2,"p")(3,"strong"),o(4,"Name: "),t(),o(5),c(6,"br"),n(7,"strong"),o(8,"Email: "),t(),o(9),t(),n(10,"p")(11,"a",0),o(12,"Update Profile"),t()()),d&2&&(r(5),w(" ",i.account.title," ",i.account.firstName," ",i.account.lastName," "),r(4),N(" ",i.account.email,`
`))},dependencies:[h],encapsulation:2})}}return e})();var b=e=>({"is-invalid":e});function te(e,l){e&1&&(n(0,"div"),o(1,"Title is required"),t())}function ne(e,l){if(e&1&&(n(0,"div",32),s(1,te,2,0,"div",33),t()),e&2){let a=f();r(),m("ngIf",a.f.title.errors.required)}}function ie(e,l){e&1&&(n(0,"div"),o(1,"First Name is required"),t())}function oe(e,l){if(e&1&&(n(0,"div",32),s(1,ie,2,0,"div",33),t()),e&2){let a=f();r(),m("ngIf",a.f.firstName.errors.required)}}function re(e,l){e&1&&(n(0,"div"),o(1,"Last Name is required"),t())}function ae(e,l){if(e&1&&(n(0,"div",32),s(1,re,2,0,"div",33),t()),e&2){let a=f();r(),m("ngIf",a.f.lastName.errors.required)}}function me(e,l){e&1&&(n(0,"div"),o(1,"Email is required"),t())}function de(e,l){e&1&&(n(0,"div"),o(1,"Email must be valid email address"),t())}function le(e,l){if(e&1&&(n(0,"div",32),s(1,me,2,0,"div",33)(2,de,2,0,"div",33),t()),e&2){let a=f();r(),m("ngIf",a.f.email.errors.required),r(),m("ngIf",a.f.email.errors.email)}}function se(e,l){e&1&&(n(0,"div"),o(1,"Password is required"),t())}function ce(e,l){e&1&&(n(0,"div"),o(1,"Password must be at least 6 characters"),t())}function pe(e,l){if(e&1&&(n(0,"div",32),s(1,se,2,0,"div",33)(2,ce,2,0,"div",33),t()),e&2){let a=f();r(),m("ngIf",a.f.password.errors.required),r(),m("ngIf",a.f.password.errors.minlength)}}function fe(e,l){e&1&&(n(0,"div"),o(1,"Confirm Password is required"),t())}function ue(e,l){e&1&&(n(0,"div"),o(1,"Passwords must match"),t())}function ve(e,l){if(e&1&&(n(0,"div",32),s(1,fe,2,0,"div",33)(2,ue,2,0,"div",33),t()),e&2){let a=f();r(),m("ngIf",a.f.confirmPassword.errors.required),r(),m("ngIf",a.f.confirmPassword.errors.mustMatch)}}function ge(e,l){e&1&&c(0,"span",34)}function be(e,l){e&1&&c(0,"span",34)}var Y=(()=>{class e{constructor(a,d,i,x,$){this.formBuilder=a,this.route=d,this.router=i,this.accountService=x,this.alertService=$,this.account=this.accountService.accountValue,this.loading=!1,this.submitted=!1,this.deleting=!1}ngOnInit(){this.form=this.formBuilder.group({title:[this.account.title,v.required],firstName:[this.account.firstName,v.required],lastName:[this.account.lastName,v.required],email:[this.account.email,[v.required,v.email]],password:["",[v.minLength(6)]],confirmPassword:[""]},{validators:K("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.accountService.update(this.account.id,this.form.value).pipe(E()).subscribe({next:()=>{this.alertService.success("Update Successful",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:a=>{this.alertService.error(a),this.loading=!1}}))}onDelete(){confirm("Are you sure?")&&(this.deleting=!0,this.accountService.delete(this.account.id).pipe(E()).subscribe(()=>{this.alertService.success("Account deleted successfully",{keepAfterRouteChange:!0})}))}static{this.\u0275fac=function(d){return new(d||e)(p(V),p(B),p(H),p(S),p(J))}}static{this.\u0275cmp=g({type:e,selectors:[["ng-component"]],decls:75,vars:29,consts:[[1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"row","mb-4"],[1,"col-12"],[1,"text-muted","mb-3"],[1,"col-md-2"],[1,"form-group"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"col-md-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"col-md-12"],["type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"text-muted","small","mb-3"],[1,"col-md-6"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"form-group","d-flex","gap-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-2",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"click","disabled"],["routerLink","../",1,"btn","btn-outline-secondary"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-2"]],template:function(d,i){d&1&&(n(0,"div",0)(1,"div",1)(2,"h3",2),o(3,"Update Profile"),t()(),n(4,"div",3)(5,"form",4),M("ngSubmit",function(){return i.onSubmit()}),n(6,"div",5)(7,"div",6)(8,"h4",7),o(9,"Personal Information"),t()(),n(10,"div",8)(11,"div",9)(12,"label",10),o(13,"Title"),t(),n(14,"select",11)(15,"option",12),o(16,"Select Title"),t(),n(17,"option",13),o(18,"Mr"),t(),n(19,"option",14),o(20,"Mrs"),t(),n(21,"option",15),o(22,"Miss"),t(),n(23,"option",16),o(24,"Ms"),t()(),s(25,ne,2,1,"div",17),t()(),n(26,"div",18)(27,"div",9)(28,"label",10),o(29,"First Name"),t(),c(30,"input",19),s(31,oe,2,1,"div",17),t()(),n(32,"div",18)(33,"div",9)(34,"label",10),o(35,"Last Name"),t(),c(36,"input",20),s(37,ae,2,1,"div",17),t()()(),n(38,"div",5)(39,"div",6)(40,"h4",7),o(41,"Contact Information"),t()(),n(42,"div",21)(43,"div",9)(44,"label",10),o(45,"Email"),t(),c(46,"input",22),s(47,le,3,2,"div",17),t()()(),n(48,"div",5)(49,"div",6)(50,"h4",7),o(51,"Change Password"),t(),n(52,"p",23),o(53,"Leave blank to keep the same password"),t()(),n(54,"div",24)(55,"div",9)(56,"label",10),o(57,"Password"),t(),c(58,"input",25),s(59,pe,3,2,"div",17),t()(),n(60,"div",24)(61,"div",9)(62,"label",10),o(63,"Confirm Password"),t(),c(64,"input",26),s(65,ve,3,2,"div",17),t()()(),n(66,"div",27)(67,"button",28),s(68,ge,1,0,"span",29),o(69," Update Profile "),t(),n(70,"button",30),M("click",function(){return i.onDelete()}),s(71,be,1,0,"span",29),o(72," Delete Account "),t(),n(73,"a",31),o(74,"Cancel"),t()()()()()),d&2&&(r(5),m("formGroup",i.form),r(9),m("ngClass",u(17,b,i.submitted&&i.f.title.errors)),r(11),m("ngIf",i.submitted&&i.f.title.errors),r(5),m("ngClass",u(19,b,i.submitted&&i.f.firstName.errors)),r(),m("ngIf",i.submitted&&i.f.firstName.errors),r(5),m("ngClass",u(21,b,i.submitted&&i.f.lastName.errors)),r(),m("ngIf",i.submitted&&i.f.lastName.errors),r(9),m("ngClass",u(23,b,i.submitted&&i.f.email.errors)),r(),m("ngIf",i.submitted&&i.f.email.errors),r(11),m("ngClass",u(25,b,i.submitted&&i.f.password.errors)),r(),m("ngIf",i.submitted&&i.f.password.errors),r(5),m("ngClass",u(27,b,i.submitted&&i.f.confirmPassword.errors)),r(),m("ngIf",i.submitted&&i.f.confirmPassword.errors),r(2),m("disabled",i.loading),r(),m("ngIf",i.loading),r(2),m("disabled",i.deleting),r(),m("ngIf",i.deleting))},dependencies:[I,U,h,q,A,R,O,j,k,F,D,L],styles:[`.card[_ngcontent-%COMP%] {
    border: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.card-header[_ngcontent-%COMP%] {
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem 1.25rem;
}

.form-label[_ngcontent-%COMP%] {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #495057;
}

.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn[_ngcontent-%COMP%] {
    padding: 0.5rem 1rem;
    font-weight: 500;
    border-radius: 0.25rem;
    transition: all 0.15s ease-in-out;
}

.btn-primary[_ngcontent-%COMP%] {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary[_ngcontent-%COMP%]:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}

.btn-danger[_ngcontent-%COMP%] {
    background-color: #dc3545;
    border-color: #dc3545;
}

.btn-danger[_ngcontent-%COMP%]:hover {
    background-color: #c82333;
    border-color: #bd2130;
}

.btn-outline-secondary[_ngcontent-%COMP%] {
    color: #6c757d;
    border-color: #6c757d;
}

.btn-outline-secondary[_ngcontent-%COMP%]:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}

.invalid-feedback[_ngcontent-%COMP%] {
    font-size: 0.875rem;
    color: #dc3545;
}

.text-muted[_ngcontent-%COMP%] {
    color: #6c757d !important;
}

.gap-2[_ngcontent-%COMP%] {
    gap: 0.5rem !important;
}`]})}}return e})();var _e=[{path:"",component:W,children:[{path:"",component:X},{path:"update",component:Y}]}],Z=(()=>{class e{static{this.\u0275fac=function(d){return new(d||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=_({imports:[P.forChild(_e),P]})}}return e})();var Ve=(()=>{class e{static{this.\u0275fac=function(d){return new(d||e)}}static{this.\u0275mod=C({type:e})}static{this.\u0275inj=_({imports:[T,Z,G]})}}return e})();export{Ve as ProfileModule};
