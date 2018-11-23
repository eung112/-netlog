import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  
  constructor(private  router:Router) { }

  ngOnInit() {
    let loginuser: any = JSON.parse (sessionStorage.getItem('loginuser'))||{users_status:''};
    if (loginuser.users_name !='admin')
    this.router.navigate(['/login']);
  }

}
