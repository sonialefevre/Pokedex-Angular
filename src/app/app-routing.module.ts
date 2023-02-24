import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonTypeListComponent } from './pages/pokemon-type-list/pokemon-type-list.component';

const routes: Routes = [
  { path: 'home', component: AccueilComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-detail/:name', component: PokemonDetailComponent },
  { path: 'pokemon-type/:name', component: PokemonTypeListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AccueilComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
