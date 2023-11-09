import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonModel } from "../../models/person.model";

import { PersonService } from "../../services/person.service";


import { PersonFunction } from "../../functions/person.function";
import { FileUploadFunction } from "../../functions/file-upload.function";
import { GlobalFunction } from "../../functions/global.function";


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['../../app.component.css', './person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  personList: PersonModel[] = [];
  tableColumns: string[] = ["id", "namesurname", "department", "company", "actions"];

  constructor(
    private _PersonFunction: PersonFunction,
    private _FileUploadFunction: FileUploadFunction
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.personList = this._PersonFunction.getPersonList();
    this.isLoading = false;
  }

  findCompanyName(fileId: string): string {
    let fileList = this._FileUploadFunction.getFileList();
    let companyName: string = fileList.find(f => f.id == fileId)!.companyName;

    return companyName;
  }

  onEdit(person: PersonModel) {

  }

  onDelete(person: PersonModel) {
    this.isLoading = true;
    this._PersonFunction.deletePerson(person);
    this.personList = this._PersonFunction.getPersonList();
    this.isLoading = false;
  }

  ngOnDestroy(): void {

  }
}
