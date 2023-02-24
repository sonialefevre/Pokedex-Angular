import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  constructor(private dataService: DataService) {}

  types: any;

  ngOnInit(): void {
    this.dataService.getAllTypes().subscribe((response) => {
      var data: any = response;
      this.types = data;
      console.log(this.types);
    });
  }
}
