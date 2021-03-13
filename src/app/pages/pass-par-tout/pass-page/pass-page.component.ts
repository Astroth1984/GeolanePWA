import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Pass } from '../pass';

@Component({
  selector: 'app-pass-page',
  templateUrl: './pass-page.component.html',
  styleUrls: ['./pass-page.component.css']
})
export class PassPageComponent implements OnInit {

  pass: Pass[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPasses().subscribe(passes => {
      this.pass = passes;
      this.dataService.passData = passes;
    });
  }


  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.pass = this.dataService.filteredListOptions();
    else {
      this.pass = this.dataService.passData;
    }

  }


}
