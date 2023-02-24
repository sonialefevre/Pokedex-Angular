import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}

  pokemons: any;

  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      var data: any = response;
      this.pokemons = data;
      console.log(this.pokemons);
    });
  }
}
