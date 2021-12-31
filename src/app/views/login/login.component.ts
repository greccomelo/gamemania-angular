import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.carregarLogin();
  }

  carregarLogin(){
    this.loginService.getLogin().subscribe((loginRecebido: Login[]) => {
      this.login = loginRecebido;
      console.log(this.login)
    })
  }

  salvarLogin(){
    this.loginService.postLogin(this.userForm).subscribe(() => {
      this.carregarLogin();
    })
  }

  userModel = new User ("","","")

  onSubmit(){
    console.log(this.userModel)
  }

}
