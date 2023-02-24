import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-type-list',
  templateUrl: './pokemon-type-list.component.html',
  styleUrls: ['./pokemon-type-list.component.scss'],
})
export class PokemonTypeListComponent implements OnInit, OnChanges {
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.typeName = this.activatedRoute.snapshot.params['name'];
      this.ngOnInit();
    });
  }

  pokemons: any;
  typeName: any;

  ngOnInit(): void {
    this.dataService.getOneType(this.typeName).subscribe((response) => {
      var data: any = response;
      this.pokemons = data;
      console.log(this.pokemons);
    });
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
