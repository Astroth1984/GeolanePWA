import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-par-tout',
  templateUrl: './pass-par-tout.component.html',
  styleUrls: ['./pass-par-tout.component.css']
})
export class PassParToutComponent implements OnInit {

  keyword = 'title';
  ref: any[] = [];
  refrences = [
    {
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952"
    },
    {
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/150/771796"
    },
    {
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/150/24f355"
    },
    {
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/150/d32776"
    },
    {
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/150/f66b97"
    },
    {
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/150/54176f"
    },
    {
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/150/51aa97"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectEvent(item: any) {
    // do something with selected item
    //update the ui
    this.ref = item;
    console.log(this.ref);
  }



}
