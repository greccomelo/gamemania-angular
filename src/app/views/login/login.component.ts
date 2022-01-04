import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  
  // userForm = {
  //   email:"Primeiro",
  //   senha:"senha"
  // }

  loginModel = new Login1("","")

  mensagem = "";

  constructor(private router: Router, private loginService: Login1Service) { }

  ngOnInit(): void {
    // this.loginService.login1(this.loginModel).subscribe((response)=>{
    //   console.log(response)
    // })
    
    // this.carregarLogin();
  }

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

  // userModel = new User ("","","")

  onSubmit(){
    
    //black-list (contra ataques por SQL injection)
    const listaPalavras:string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "\"", "\'", "--", "#", ";"];

    listaPalavras.forEach(palavra => {
      if(this.loginModel.email?.toLowerCase().includes(palavra)){
        this.mensagem="Dados inválidos " + palavra;
        return;
      }
    });

      this.loginService.login1(this.loginModel).subscribe((response)=>{
        this.mensagem = "Login realizado com sucesso!";
        this.router.navigateByUrl("/");
      }, (error) => {
        if(error.status == 400){
          this.mensagem = "Usuário ou senha inválidos!";
        }
        
          // this.mensagem = error.error;
        })
  }

}
