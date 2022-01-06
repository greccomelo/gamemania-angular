import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias';
import { User } from 'src/app/models/user';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaNoticias = [] as Noticias[]
  
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.carregarNoticias();
    }

  carregarNoticias(){
     this.noticiasService.getNoticias().subscribe( (noticiasRecebidas: Noticias[]) => {
       this.listaNoticias = noticiasRecebidas;
       console.log(this.listaNoticias);
     })
    }
 

  // userModel = new User ("","","")


  onSubmit(){
    // console.log(this.userModel)
  }
}
