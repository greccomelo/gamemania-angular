import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User ("","","")

  onSubmit(){
    console.log(this.userModel)
  }

}
