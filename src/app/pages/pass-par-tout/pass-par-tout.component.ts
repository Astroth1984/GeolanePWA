import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from './data.service';
import { Ref } from './Ref'

@Component({
  selector: 'app-pass-par-tout',
  templateUrl: './pass-par-tout.component.html',
  styleUrls: ['./pass-par-tout.component.css']
})
export class PassParToutComponent implements OnInit {
  dimFormControl = new FormControl('', [
    Validators.required
  ]);
  ref!: Ref[];
  specificRef!: Ref;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getRefs().subscribe(refs => {
      this.ref = refs;
      this.dataService.refsData = refs;
      this.ref = this.dataService.filteredListOptions();
    });
  }

  onSelectedOption(e: any) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {

    if (this.dataService.searchOption.length > 0)
      this.ref = this.dataService.filteredListOptions();
    else {
      this.ref = [];
    }

    console.log(this.ref);
  }





}
