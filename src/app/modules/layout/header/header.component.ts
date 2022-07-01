import { Component, OnInit } from '@angular/core';
import { AuthService } from'../../../appServices/auth.service'
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:any;

  constructor(
    private AuthService:AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
    
    let dataLocal: any = localStorage.getItem('_session.subio.CU')
     this.currentUser = JSON.parse(dataLocal)
    
  }

  

  onPressSignOut(){
    alert("sing out call ")
    this.AuthService.logout()
    this.router.navigate(['/login'])
    location.reload()

  }

}
