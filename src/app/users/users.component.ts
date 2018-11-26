import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
//edituser:any;
//deleteuser:any;
newuser ={
  users_name:'',
  users_password:'',
  users_status:'',
  users_fullname:'',
  users_phone:'',
  users_email:'',
  users_name_old:''

}
  edituser = this.newuser;
  deleteuser = this.newuser;
  constructor(private userService: UsersService) { }

   ngOnInit() {
  this.getUsers();
}
 async getUsers(){
  this.users =await this.userService.getAllUsers();
}
async addUser(){
    let result =await this.userService.inserUser(this.newuser); 
   if (result == true){
    alert('lnsert Success');
    this.getUsers();
   }else{
    alert('lnsert Error.!!!');
   }
}
async editUserM(user){
   this.edituser = JSON.parse(JSON.stringify(user));
   this.edituser.users_password ='';
   this.edituser.users_name_old = user.users_name;
}
  async editUser(){
  if (this.edituser.users_password=='')
  delete this.edituser.users_password;
  let result =await this.userService.updateUser(this.edituser);
 
 //console.log(result);
  if (result == true){
    alert('Edit user Success');
    this.getUsers();
   }else{
    alert('Edit user Error.!!!');
   }
  //console.log(this.edituser);

}
deleteUserM(user){
  this.deleteuser = JSON.parse(JSON.stringify(user));
}
}
