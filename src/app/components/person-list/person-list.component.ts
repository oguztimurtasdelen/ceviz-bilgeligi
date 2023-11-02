import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonModel } from "../../models/person.model";
import { PersonFunction } from "../../functions/person.function";
import { PersonService } from "../../services/person.service";

import { FileUploadFunction } from "../../functions/file-upload.function";

import { GlobalFunction } from "../../functions/global.function";


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['../../app.component.css', './person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  personsList: PersonModel[] = [];
  private personsListSubscription?: Subscription;
  tableColumns: string[] = ["id", "namesurname", "occupation", "actions"];

  constructor(
    private _PersonFunction: PersonFunction,
    private _PersonService: PersonService,
    private _GlobalFunction: GlobalFunction,
    private _FileUploadFunction: FileUploadFunction,
  ) {
    this.personsListSubscription = this._PersonService.getPersonsListUpdateListener()
      .subscribe({
        next: (data: PersonModel[]) => {
          this.personsList = data;
          this.isLoading = false;
        }
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._PersonService.getPersonsList();
  }

  onEdit(person: PersonModel) {
    this.isLoading = true;
    this._PersonFunction.updatePerson(person);
  }

  onDelete(person: PersonModel) {
    this.isLoading = true;
    this._PersonFunction.deletePerson(person);
  }

  ngOnDestroy(): void {
    this.personsListSubscription?.unsubscribe();
  }
}
