import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private urlFilms = 'https://swapi.co/api/films/?search=';
  private urlPeople = 'https://swapi.co/api/people/?search=';
  private urlStarship = 'https://swapi.co/api/starships/?search=';


  constructor(private http: HttpClient) { }

  apiUrl = '';

  getFilm(search) {
    return this.http.get<any>(this.urlFilms + search)
  }

  getPeople(search) {
    return this.http.get<any>(this.urlPeople + search)
  }

  getStarship(search) {
    return this.http.get<any>(this.urlStarship + search)
  }

  getMoreInfo(url) {
    return this.http.get<any>(url)
  }

  getInfo(search) {
    const url = `https://swapi.co/api/${search.searchType}/?search=${search.searchTerm}`
    return this.getMoreInfo(url);
    // returns the functionality of getMoreInfo
  }
}
