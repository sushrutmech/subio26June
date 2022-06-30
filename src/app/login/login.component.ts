import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../shared/requests/login-request';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../appServices/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  returnUrl: string = "";
  submitted: boolean = false;
  defauluRedirectURL: string = '/layout/home'

  constructor(private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,) {
    if (this.authService.userSession) {
      this.router.navigate([this.defauluRedirectURL]);
    }
    console.log(this.returnUrl)
    this.authService.userSession

  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // username: ['chris@subio.co.uk', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.defauluRedirectURL;
  }

  onSubmit() {
    console.log("login inn ", this.loginForm.value)

    this.submitted = true;

    this.spinner.show();
    var params: LoginRequest = {
      emailAddress: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.authService.login(params).subscribe({next:(res:any)=>{
      alert("lonin sucessfully....")
      this.spinner.hide();
      this.router.navigate([this.returnUrl]);
     
    },
    error:err => {
      //console.log(err)
      alert("invallid credential ......" + err)
    }


  })
    


  }

}
