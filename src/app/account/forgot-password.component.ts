import { Component, OnInit } from '@angular/core';
import { UntypeFormBuilder, UntypeFormGroup, Validations } from '@angular/forms';
import { first, finalize } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl:  'forgot-password.component.html'})
export class ForgotPasswordComponent implements OnInit {
    form: UntypeFormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuild: UntypeFormBuilder,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['',[Validators.required, Validators.email]]
        });
    }

    //
}