import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Login1 } from 'src/app/models/login1';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Login1Service } from 'src/app/services/login1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = [] as Login[];

  
  userForm = {
    email:"Primeiro",
    senha:"senha"
  }

  constructor(private loginService: Login1Service) { }

  ngOnInit(): void {
    this.loginService.login1(this.loginModel).subscribe((response)=>{
      console.log(response)
    })
    
    // this.carregarLogin();
  }

  loginModel = new Login1();


  // carregarLogin(){
  //   this.loginService.getLogin().subscribe((loginRecebido: Login[]) => {
  //     this.login = loginRecebido;
  //     console.log(this.login)
  //   })
  // }

  // salvarLogin(){
  //   this.loginService.postLogin(this.userForm).subscribe(() => {
  //     this.carregarLogin();
  //   })
  // }

  userModel = new User ("","","")

  onSubmit(){
    console.log(this.loginModel)
  }

}
