import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getData() {
    //Fetching only the 151 original pokemons!
    return this.http
      .get(
        'https://pokebuildapi.fr/api/v1/pokemon/generation/1',
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Error'));
        })
      );
  }

  getOne(slug: string) {
    return this.http
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${slug}`, this.httpOptions)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Error'));
        })
      );
  }

  getAllGenerations() {
    return this.http
      .get(
        `https://pokebuildapi.fr/api/v1/pokemon/generation`,
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Error'));
        })
      );
  }

  getAllTypes() {
    return this.http
      .get(`https://pokebuildapi.fr/api/v1/types`, this.httpOptions)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Error'));
        })
      );
  }

  getOneType(name: string) {
    return this.http
      .get(
        `https://pokebuildapi.fr/api/v1/pokemon/type/${name}`,
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Error'));
        })
      );
  }
}
