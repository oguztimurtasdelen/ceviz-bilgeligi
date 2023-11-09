import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { PersonModel } from "../models/person.model";

@Injectable({providedIn: 'root'})
export class PersonService {
  private personsList: PersonModel[] = [];
  private personsListSubject = new Subject<PersonModel[]>();

  constructor() {}


}
