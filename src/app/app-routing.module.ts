import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { GameComponent } from './views/game/game.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"categoria", component: CategoriaComponent},
  {path:"game", component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
