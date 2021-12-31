import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  userModel = new User ("","","")


  onSubmit(){
    console.log(this.userModel)
  }

}
