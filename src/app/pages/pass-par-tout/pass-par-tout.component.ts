import { Component, OnInit } from '@angular/core';
import { Ref } from './Ref'

@Component({
  selector: 'app-pass-par-tout',
  templateUrl: './pass-par-tout.component.html',
  styleUrls: ['./pass-par-tout.component.css']
})
export class PassParToutComponent implements OnInit {

  keyword = 'title';
  ref!: Ref;
  refrences = [
    {
      "id": 1,
      "title": "18654 - REF",
      "url": "https://via.placeholder.com/600/92c952"
    },
    {
      "id": 2,
      "title": "23569 - REF",
      "url": "https://via.placeholder.com/150/771796"
    },
    {
      "id": 3,
      "title": "58693 - REF",
      "url": "https://via.placeholder.com/150/24f355"
    },
    {
      "id": 4,
      "title": "15689 - REF",
      "url": "https://via.placeholder.com/150/d32776"
    },
    {
      "id": 5,
      "title": "3654128 - REF",
      "url": "https://via.placeholder.com/150/f66b97"
    },
    {
      "id": 6,
      "title": "98745 - REF",
      "url": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "id": 7,
      "title": "32541 - REF",
      "url": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "id": 8,
      "title": "852369 - REF",
      "url": "https://via.placeholder.com/150/54176f"
    },
    {
      "id": 9,
      "title": "32589 - REF",
      "url": "https://via.placeholder.com/150/51aa97"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectEvent(item: any) {
    // do something with selected item
    //update the ui
    // this.ref = item.target.value;
    // this.ref.push(item.target.value);
    console.log(item)
    item = this.ref;
  }




}
