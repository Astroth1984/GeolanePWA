import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pass } from './pass'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption: any[];
  public passData: Pass[];
  passUrl: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  getPasses(): Observable<Pass[]> {
    return this.http.get<Pass[]>(this.passUrl);

  }
  // filteredListOptions() {
  //   let passes = this.passData;
  //       let filteredPassesList = [];
  //       for (let pass of passes) {
  //           for (let options of this.searchOption) {
  //               if (options.title === pass.title) {
  //                 filteredPostsList.push(pass);
  //               }
  //           }
  //       }
  //       console.log(filteredPassesList);
  //       return filteredPassesList;
  // }
  filteredListOptions() {
    let passes = this.passData;
    let filteredPassesList: Pass[] = [];
    for (let pass of passes) {
      for (let options of this.searchOption) {
        if (options.title === pass.title) {
          filteredPassesList.push(pass);
        }
      }
    }
    console.log(filteredPassesList);
    return filteredPassesList;
  }
}
