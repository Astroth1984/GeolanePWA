import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Pass } from '../pass';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allPasses: Pass[];
  autoCompleteList: any[];

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // get all the pass
    this.dataService.getPasses().subscribe(passes => {
      this.allPasses = passes;
    });

    // when user types something in input, the value changes will come through this
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input: any) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  // this is where filtering the data happens according to you typed value
  filterCategoryList(val: any) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allPasses.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPasses;
  }

  // after you clicked an autosuggest option, this function will show the field you want to show in input
  displayFn(pass: Pass) {
    let k = pass ? pass.title : pass;
    return k;
  }

  filterPassList(event) {
    var passes = event.source.value;
    if (!passes) {
      this.dataService.searchOption = []
    }
    else {
      console.log("not")

      this.dataService.searchOption.push(passes);
      this.onSelectedOption.emit(this.dataService.searchOption)
    }

    this.focusOnPlaceInput();



  }


  removeOption(option) {
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
