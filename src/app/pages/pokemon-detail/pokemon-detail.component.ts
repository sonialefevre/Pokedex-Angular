import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  pokemon: any;

  ngOnDestroy(): void {}
  ngOnInit(): void {
    let pokeName = this.activatedRoute.snapshot.params['name'];
    this.dataService.getOne(pokeName).subscribe((response) => {
      var data: any = response;
      this.pokemon = data;
      console.log(this.pokemon);
    });
  }
}
