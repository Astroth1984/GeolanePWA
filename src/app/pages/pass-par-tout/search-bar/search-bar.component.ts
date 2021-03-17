import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Ref } from '../Ref';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;
  allRefs: Ref[] = [];
  autoCompleteList!: any[];

  @ViewChild('autocompleteInput') autocompleteInput!: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRefs().subscribe(refs => {
      this.allRefs = refs

    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input: any) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val: any) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allRefs.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allRefs;
  }

  displayFn(ref: Ref) {
    let k = ref ? ref.title : ref;
    return k;
  }

  filterRefList(event: any) {
    var refs = event.source.value;
    if (!refs) {
      this.dataService.searchOption = []
    }
    else {
      console.log("not")

      this.dataService.searchOption.push(refs);
      this.onSelectedOption.emit(this.dataService.searchOption)
    }

    this.focusOnPlaceInput();

  }

  removeOption(option: any) {

    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
      this.dataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.dataService.searchOption)
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }

}
