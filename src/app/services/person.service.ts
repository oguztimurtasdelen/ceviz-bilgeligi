import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { PersonModel } from "../models/person.model";

@Injectable({providedIn: 'root'})
export class PersonService {
  private personsList: PersonModel[] = [];
  private personsListSubject = new Subject<PersonModel[]>();

  constructor() {}

  getPersonsList() {
    this.personsListSubject.next([...this.personsList]);
  }

  setPersonsList(personsList: PersonModel[]) {
    this.personsList = personsList;
    this.getPersonsList();
  }

  getPersonsListUpdateListener() {
    return this.personsListSubject.asObservable();
  }

  createPerson(person: PersonModel) {
    this.personsList.push(person);
    this.personsListSubject.next([...this.personsList]);
  }

  updatePerson(person: PersonModel) {
    const personIndex = this.personsList.findIndex(p => p.id == person.id && p.name == person.name);
    this.personsList[personIndex] = person;
    this.personsListSubject.next([...this.personsList]);
  }

  deletePerson(person: PersonModel) {
    const filteredPersonsList: PersonModel[] = this.personsList.filter(p => p.id !== person.id);
    this.personsList = filteredPersonsList;
    this.personsListSubject.next([...this.personsList]);
  }
}
