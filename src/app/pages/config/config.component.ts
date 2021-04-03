import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedDimensionsService } from 'src/app/services/shared-dimensions.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],

})
export class ConfigComponent implements OnInit, OnDestroy {


  subscription!: Subscription;

  public forcedState = false;
  isCondition: boolean | undefined;
  longueur!: number;
  hauteur!: number;
  previsual: string | undefined;

  orientHide: boolean = true;

  dimensions = new FormGroup({
    largeurForm: new FormControl(
      this.longueur,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.max(180),
        Validators.min(2)
      ]
    ),
    hauteurForm: new FormControl(
      this.hauteur,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.max(180),
        Validators.min(2)
      ]
    )
  });

  constructor(private sharedDim: SharedDimensionsService) {

  }

  ngOnInit(): void {

    this.subscription = this.sharedDim.currentLongueur.subscribe(longueur => this.longueur = longueur);
    this.subscription = this.sharedDim.currentHauteur.subscribe(hauteur => this.hauteur = hauteur);


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
  getErrorMessage() {
    if (this.dimensions.hasError('required')) {
      return 'You must enter a value';
    }

    return this.dimensions.hasError('pattern') ? 'Not a valid email' : '';
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.dimensions.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.orientHide = false;
    this.sharedDim.changeLongueur(this.longueur);
    this.sharedDim.changeHauteur(this.hauteur);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
