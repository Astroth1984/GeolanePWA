import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDimensionsService {

  private longueurSource = new BehaviorSubject(0);
  currentLongueur = this.longueurSource.asObservable();

  private hauteurSource = new BehaviorSubject(0);
  currentHauteur = this.hauteurSource.asObservable();

  constructor() { }

  changeLongueur(longueur: number) {
    this.longueurSource.next(longueur)
  }

  changeHauteur(hauteur: number) {
    this.hauteurSource.next(hauteur)
  }
}
