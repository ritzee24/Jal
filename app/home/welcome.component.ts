import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  templateUrl: './welcome.component.html',
  providers : [UserService]
})
export class WelcomeComponent implements OnInit{
  public pageTitle = 'Welcome ! Thousands have lived without love , not one without water.';
  input;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.input={
      username : '',
      password : '',
    };
  }
  onRegister(){
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert("User"+this.input.username+"has been crreated")
      },
      error => console.log('error',error)
      
    );
  }

  onLogin(){
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response)
        alert("User"+this.input.username+"has been crreated")
      },
      error => console.log('error',error)
      
    );
  }
}
