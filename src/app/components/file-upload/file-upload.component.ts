import { Component, Input } from '@angular/core';

import { PersonFunction } from "../../functions/person.function";
import { FileUploadFunction } from "../../functions/file-upload.function";
import { GlobalFunction } from "../../functions/global.function";

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['../../app.component.css', './file-upload.component.css']
})
export class FileUploadComponent {
  isLoading: boolean = false;
  @Input() fileName: string = '';
  @Input() fileSize: string = '';

  constructor(
    private _PersonFunction: PersonFunction,
    private _FileUploadFunction: FileUploadFunction,
    private _GlobalFunction: GlobalFunction
  ) {

  }


  onFilePicked(event: Event) {
    try {
      this.isLoading = true;
      const files = (event.target as HTMLInputElement).files;

      const reader = new FileReader();
      reader.onload = (e: any) => {

        const data: string = e.target.result;
        const workBook: XLSX.WorkBook = XLSX.read(data, {type: 'binary'});

        const personList: XLSX.WorkSheet = workBook.Sheets["Kişi Listesi"]
        const personResultWorkSheet: XLSX.WorkSheet = workBook.Sheets["Kişi Sonuçları"];
        const person10ResultWorkSheet: XLSX.WorkSheet = workBook.Sheets["Kişi 10 Değeri"];
        const occupationResultWorkSheet: XLSX.WorkSheet = workBook.Sheets["Kişi Meslek Sonuçları"];

        const personListJSON: any[] = XLSX.utils.sheet_to_json(personList);
        const personResultJSON: any[] = XLSX.utils.sheet_to_json(personResultWorkSheet);
        const person10ResultJSON: any[] = XLSX.utils.sheet_to_json(person10ResultWorkSheet);
        const occupationResultJSON: any[] = XLSX.utils.sheet_to_json(occupationResultWorkSheet);

        this._PersonFunction.setPersonList(personListJSON);
        this._PersonFunction.setPersonResultList(personResultJSON);
        this._PersonFunction.setPerson10ResultList(person10ResultJSON);
        this._PersonFunction.setOccupationResultList(occupationResultJSON);
        this._PersonFunction.buildPersonsList();

        this.isLoading = false;
        this._GlobalFunction.showSystemMessage("file.upload.success");
      }
      if (files) {
        this.fileName = files[0].name;
        this.fileSize = (files[0].size / (1024 * 1024)).toFixed(2) + ' MB';
        reader.readAsBinaryString(files[0]);
      }

    } catch (error) {
      this.isLoading = false;
      this._GlobalFunction.showSystemMessage("file.upload.success");
    }


  }
}
