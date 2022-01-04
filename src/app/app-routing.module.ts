import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { GameComponent } from './views/game/game.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"categoria", component: CategoriaComponent},
  {path:"game", component: GameComponent},
  {path:"404", component: NotfoundComponent},
  {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
