import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],

})
export class ConfigComponent implements OnInit {
  public forcedState = false;
  isCondition: boolean | undefined;
  longueur: number = 0;
  hauteur: number = 0;
  previsual: string | undefined;
  constructor() { }

  ngOnInit(): void {

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  // visual() {
  //   if (this.hauteur > this.longueur) {
  //     this.previsual === 'portrait';

  //   } else {
  //     this.previsual === 'paysage';

  //   }
  // }
}
