import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ref } from './Ref';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption: any[] = []
  public refsData!: Ref[]
  refUrl: string = "https://jsonplaceholder.typicode.com/photos/?_limit=10";

  constructor(private http: HttpClient) { }

  getRefs(): Observable<Ref[]> {
    return this.http.get<Ref[]>(this.refUrl);

  }
  filteredListOptions() {
    let refs = this.refsData;
    let filteredRefsList = [];
    for (let ref of refs) {
      for (let options of this.searchOption) {
        if (options.title === ref.title) {
          filteredRefsList.push(ref);
        }
      }
    }
    console.log(filteredRefsList);
    return filteredRefsList;
  }
}
