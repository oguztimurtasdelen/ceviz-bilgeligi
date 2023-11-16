import { Injectable } from "@angular/core";

import { PersonModel } from "../models/person.model";

import { PersonService } from "../services/person.service";
import { FileUploadModel } from "../models/file-upload.model";

@Injectable({
  providedIn: 'root'
})
export class PersonFunction {

  private personList: PersonModel[] = [];

  constructor(
    private _PersonService: PersonService
  ) {

  }

  getPersonList(): PersonModel[] {
    return this.personList;
  }

  setPersonList(person: PersonModel) {

  }

  pushPersonList(person: PersonModel) {
    this.personList.push(person);
  }

  createPerson(person: PersonModel) {
  }

  updatePerson(person: PersonModel) {
  }

  deletePerson(person: PersonModel) {
    const personIndex: number = this.personList.findIndex(p => p.id == person.id && p.fileId == person.fileId);
    const filteredPersonList: PersonModel[] = this.personList.filter((p, index) => personIndex !== index);
    this.personList = filteredPersonList;
  }

  deletePersonByFileId(file: FileUploadModel) {
    const filteredPersonList: PersonModel[] = this.personList.filter(p => p.fileId !== file.id);
    this.personList = filteredPersonList;
  }

}
