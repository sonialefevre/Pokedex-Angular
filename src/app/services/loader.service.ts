import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loader.asObservable;

  constructor() {}
}
