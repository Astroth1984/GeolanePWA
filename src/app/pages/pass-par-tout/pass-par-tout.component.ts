import { Component, OnInit, ViewChild, forwardRef, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SharedDimensionsService } from 'src/app/services/shared-dimensions.service';
import { DataService } from './data.service';
import { Passe } from './Passe';
import { Ref } from './Ref';

@Component({
  selector: 'app-pass-par-tout',
  templateUrl: './pass-par-tout.component.html',
  styleUrls: ['./pass-par-tout.component.css']
})
export class PassParToutComponent implements OnInit, OnDestroy {
  /* Shared dimensions */
  longueur!: number;
  hauteur!: number;
  subscription!: Subscription;

  personaliser: boolean = false;
  confRef: boolean = true;

  selectedRef: Ref = {
    'id': null,
    'title': '',
    'url': '',
    'haut': null,
    'bas': null,
    'gauche': null,
    'droit': null,
  };

  selectedFinalPasse: Passe = {
    'id': null,
    'title': '',
    'url': '',
    'haut': null,
    'bas': null,
    'gauche': null,
    'droit': null,
    'colors': [],
    'rectangle': false,
    'ovale': false
  }

  /*test*/
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions!: Observable<string[]>;

  myControl = new FormControl('', Validators.required,);
  options: Ref[] = [
    {
      'id': 1,
      'title': '25630C',
      'url': 'assets/passe-par-tout/25630C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 2,
      'title': '25631C',
      'url': 'assets/passe-par-tout/25631C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 3,
      'title': '25634C',
      'url': 'assets/passe-par-tout/25634C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 4,
      'title': '25638C',
      'url': 'assets/passe-par-tout/25638C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 5,
      'title': '25426C',
      'url': 'assets/passe-par-tout/25642C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 6,
      'title': '25657C',
      'url': 'assets/passe-par-tout/25657C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 7,
      'title': '25661C',
      'url': 'assets/passe-par-tout/25661C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 8,
      'title': '25684C',
      'url': 'assets/passe-par-tout/25684C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 9,
      'title': '25688C',
      'url': 'assets/passe-par-tout/25688C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 10,
      'title': '25691C',
      'url': 'assets/passe-par-tout/25691C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 11,
      'title': '25733C',
      'url': 'assets/passe-par-tout/25733C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 12,
      'title': '25741C',
      'url': 'assets/passe-par-tout/25741C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    },
    {
      'id': 13,
      'title': '25736C',
      'url': 'assets/passe-par-tout/25736C.jpg',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,

    }
  ];

  passes: Passe[] = [
    {
      'id': 13,
      'title': 'Simple',
      'url': 'https://www.ikea.com/pimg/0638336_pe698860_s5.jpg?f=s',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,
      'colors': [
        { label: 'color1', value: 'FFFFFF' },
        { label: 'color2', value: '000000' },
        { label: 'color3', value: '603813' },
        { label: 'color4', value: 'FF0000' },
        { label: 'color5', value: '2E3192' }
      ],
      'rectangle': true,
      'ovale': true
    },
    {
      'id': 14,
      'title': 'Double',
      'url': 'https://www.ikea.com/pimg/0638336_pe698860_s5.jpg?f=s',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,
      'colors': [
        { label: 'color1', value: 'FFD400' },
        { label: 'color2', value: 'F15A24' },
        { label: 'color3', value: 'CCCCCC' },
        { label: 'color4', value: 'DBC0B5' },
        { label: 'color5', value: 'FAB49B' }
      ],
      'rectangle': true,
      'ovale': true
    },
    {
      'id': 17,
      'title': 'Epais',
      'url': 'https://www.ikea.com/pimg/0638336_pe698860_s5.jpg?f=s',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,
      'colors': [
        { label: 'color1', value: '87B2C7' },
        { label: 'color2', value: 'ACD58A' },
        { label: 'color3', value: 'FFF9AE' }
      ],
      'rectangle': true,
      'ovale': false
    },
    {
      'id': 56,
      'title': 'Simple avec filet',
      'url': 'https://www.ikea.com/pimg/0638336_pe698860_s5.jpg?f=s',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,
      'colors': [
        { label: 'color1', value: 'FFFFFF' },
        { label: 'color2', value: '000000' },
        { label: 'color3', value: '603813' },
        { label: 'color4', value: 'FF0000' },
        { label: 'color5', value: '2E3192' }
      ],
      'rectangle': true,
      'ovale': true
    },
    {
      'id': 19,
      'title': 'Biseau Anglais',
      'url': 'https://www.ikea.com/pimg/0638336_pe698860_s5.jpg?f=s',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,
      'colors': [
        { label: 'color1', value: 'FFFFFF' },
        { label: 'color2', value: '000000' },
        { label: 'color3', value: '603813' },
        { label: 'color4', value: 'FF0000' },
        { label: 'color5', value: '2E3192' }
      ],
      'rectangle': false,
      'ovale': true
    }

  ];
  selectedPasse!: Passe

  filteredOptions!: Observable<Ref[]>;


  ref!: Ref[];
  specificRef!: Ref;

  margeRef = new FormGroup({
    basForm: new FormControl(
      this.selectedRef.bas,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$")
      ]
    ),
    hautForm: new FormControl(
      this.selectedRef.haut,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$")
      ]
    ),
    gaucheForm: new FormControl(
      this.selectedRef.gauche,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$")
      ]
    ),
    droitForm: new FormControl(
      this.selectedRef.droit,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$")
      ]
    )
  });

  margeSimple = new FormGroup({
    basSimple: new FormControl(
      this.selectedFinalPasse.bas,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    hautSimple: new FormControl(
      this.selectedFinalPasse.haut,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    gaucheSimple: new FormControl(
      this.selectedFinalPasse.gauche,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    droitSimple: new FormControl(
      this.selectedFinalPasse.droit,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    )
  });

  margeEpais = new FormGroup({
    basEpais: new FormControl(
      this.selectedFinalPasse.haut,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    hautEpais: new FormControl(
      this.selectedFinalPasse.bas,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    gaucheEpais: new FormControl(
      this.selectedFinalPasse.gauche,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    droitEpais: new FormControl(
      this.selectedFinalPasse.droit,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    )
  });

  margeBiseau = new FormGroup({
    basBiseau: new FormControl(
      this.selectedFinalPasse.haut,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    hautBiseau: new FormControl(
      this.selectedFinalPasse.bas,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    gaucheBiseau: new FormControl(
      this.selectedFinalPasse.gauche,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    ),
    droitBiseau: new FormControl(
      this.selectedFinalPasse.droit,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3)
      ]
    )
  });

  margeDouble = new FormGroup({
    basDouble: new FormControl(
      this.selectedFinalPasse.haut,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3.5)
      ]
    ),
    hautDouble: new FormControl(
      this.selectedFinalPasse.bas,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3.5)
      ]
    ),
    gaucheDouble: new FormControl(
      this.selectedFinalPasse.gauche,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3.5)
      ]
    ),
    droitDouble: new FormControl(
      this.selectedFinalPasse.droit,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(3.5)
      ]
    )
  });

  margeFilet = new FormGroup({
    basFilet: new FormControl(
      this.selectedFinalPasse.haut,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(4)
      ]
    ),
    hautFilet: new FormControl(
      this.selectedFinalPasse.bas,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(4)
      ]
    ),
    gaucheFilet: new FormControl(
      this.selectedFinalPasse.gauche,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(4)
      ]
    ),
    droitFilet: new FormControl(
      this.selectedFinalPasse.droit,
      [
        Validators.required,
        Validators.pattern("^[0-9]{1,4}(\,[0-9])?$"),
        Validators.min(4)
      ]
    )
  });


  constructor(private dataService: DataService, private sharedDim: SharedDimensionsService) {

  }


  ngOnInit(): void {

    this.subscription = this.sharedDim.currentLongueur.subscribe(longueur => this.longueur = longueur);
    this.subscription = this.sharedDim.currentHauteur.subscribe(hauteur => this.hauteur = hauteur);

    console.log(this.longueur);
    console.log(this.hauteur);

    this.dataService.getRefs().subscribe(refs => {
      this.ref = refs;
      this.dataService.refsData = refs;
      this.ref = this.dataService.filteredListOptions();
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._filter(title) : this.options.slice())
      );

  }
  displayFn(ref: Ref): string {
    return ref && ref.title ? ref.title : '';
  }

  private _filter(title: string): Ref[] {
    const filterValue = title.toLowerCase();

    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  selectedOption(event: any) {
    this.selectedRef = event.option.value;
    console.log(this.selectedRef);
  }

  perso(): void {
    this.personaliser = true;
    this.confRef = false;
  }
  parRef(): void {
    this.personaliser = false;
    this.confRef = true;
  }

  public checkError = (groupName: FormGroup, controlName: string, errorName: string) => {
    return groupName.controls[controlName].hasError(errorName);
  }


  resetPasse() {
    this.selectedRef = {
      'id': null,
      'title': '',
      'url': '',
      'haut': null,
      'bas': null,
      'gauche': null,
      'droit': null,
    };

    this.margeRef.reset();
    this.errorMargeSup = false;
    this.errorMargeInf = false;
    this.autoCompValid = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sansPasseAlert: boolean = false;

  sansPasse() {
    if (this.longueur * this.hauteur < 15 * 15) {
      this.sansPasseAlert = true;
    }
  }

  errorMargeInf!: boolean;
  errorMargeSup!: boolean;

  margeCheckError() {
    if (this.selectedRef.gauche != null && this.selectedRef.droit != null && this.selectedRef.haut != null && this.selectedRef.bas != null) {
      if (this.longueur + this.selectedRef.gauche + this.selectedRef.droit < 15 || this.hauteur + this.selectedRef.bas + this.selectedRef.haut < 15) {
        this.errorMargeInf = true;
        this.errorMargeSup = false;
      }
      else if ((this.longueur + this.selectedRef.gauche + this.selectedRef.droit > 80 && this.hauteur + this.selectedRef.bas + this.selectedRef.haut > 120) || (this.longueur + this.selectedRef.gauche + this.selectedRef.droit > 120 && this.hauteur + this.selectedRef.bas + this.selectedRef.haut > 80)) {
        this.errorMargeSup = true;
        this.errorMargeInf = false;
      }
    }

  }

  errorFinalPasseInf!: boolean;
  errorFinalPasseSup!: boolean;

  finalPasseCheckError() {

    if (this.selectedFinalPasse.gauche != null && this.selectedFinalPasse.droit != null && this.selectedFinalPasse.haut != null && this.selectedFinalPasse.bas != null) {
      if (this.longueur + this.selectedFinalPasse.gauche + this.selectedFinalPasse.droit < 15) {
        this.errorFinalPasseInf = true;
        this.errorFinalPasseSup = false;
      }
      else if ((this.longueur + this.selectedFinalPasse.gauche + this.selectedFinalPasse.droit > 80 && this.hauteur + this.selectedFinalPasse.bas + this.selectedFinalPasse.haut > 120) || (this.longueur + this.selectedFinalPasse.gauche + this.selectedFinalPasse.droit > 120 && this.hauteur + this.selectedFinalPasse.bas + this.selectedFinalPasse.haut > 80)) {
        this.errorFinalPasseSup = true;
        this.errorFinalPasseInf = false;
      }
    }

  }

  autoCompValid: boolean = false;
  autoComp() {
    if (this.myControl.valid) {
      this.autoCompValid = true;
    }
  }

  onCheck() {
    console.log(this.selectedPasse);
  }

  resetPasseFinal() {
    this.personaliser = false;
  }



}






