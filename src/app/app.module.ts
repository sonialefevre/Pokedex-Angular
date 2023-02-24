import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonTypeListComponent } from './pages/pokemon-type-list/pokemon-type-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    PokemonListComponent,
    AboutComponent,
    PokemonDetailComponent,
    PokemonTypeListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
