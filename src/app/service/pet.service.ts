import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Pet} from '../model/Pet';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private urlPath: string;

  constructor(private http: HttpClient) {
    this.urlPath = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.urlPath)
      .pipe(map(pets => pets.sort((pet1, pet2) => pet1.name.localeCompare(pet2.name))));
  }

  // tslint:disable-next-line:typedef
  addPet(pet: Pet) {
    return this.http.post(this.urlPath, pet);
  }

  getPetById(id: number): Observable<any> {
    return this.http.get<Pet>(`${this.urlPath}/${id}`);
  }

  getAllKinds(): Observable<any> {
    return this.http.get<string>(`${this.urlPath}/kind`);
  }

  deletePetById(id: number): Observable<any> {
    return this.http.delete(`${this.urlPath}/${id}`);
  }

  increasePopularity(id: number): Observable<any> {
    return this.http.get(`${this.urlPath}/${id}/incrementPopularity`);
  }

  sendMessage(name: string): Observable<any> {
    return this.http.post(`${this.urlPath}/sendText`, name);
  }
}
