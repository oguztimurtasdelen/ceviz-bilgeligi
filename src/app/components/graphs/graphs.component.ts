import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

import { PersonFunction } from "../../functions/person.function";
import { PersonModel } from "../../models/person.model";

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['../../app.component.css', './graphs.component.css']
})
export class GraphsComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  meanCompany: number = 0;
  meanDepartment: number = 0;
  meanPerson: number = 0;
  personList: PersonModel[] = [];
  groupByDepartment: any[] = [];

  @Input() departmentSelection: string = '';
  @Input() personSelectionId: number = 0;

  constructor(
    private _PersonFunction: PersonFunction
  ) {

  }

  ngOnInit(): void {
    this.personList = this._PersonFunction.getPersonsList();
    this.groupByDepartment = this.groupByToDepartment(this.personList);
  }

  groupByToDepartment(personList: PersonModel[]): any[] {
    this.groupByDepartment = [];
    const groupBy = (prop: string) => (data: any[]) => {
      return data.reduce((dict, item) => {
        const { [prop]: _, ...rest } = item;
        dict[item[prop]] = [...(dict[item[prop]] || []), rest];
        return dict;
      }, {});
    };

    const _groupByToFixture = Object.entries(groupBy('occupation')(personList))
      .map(([key, value]) => ({ department: key, personList: value }));

    return _groupByToFixture;
  }

  onDepartmentChange() {

  }

  onPersonChange() {

  }

  getMean(list: any[]): number {
    return 0;
  }

  ngOnDestroy(): void {

  }
}
