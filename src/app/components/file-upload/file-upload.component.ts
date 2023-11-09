import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { PersonFunction } from "../../functions/person.function";
import { FileUploadFunction } from "../../functions/file-upload.function";
import { GlobalFunction } from "../../functions/global.function";

import { FileUploadModel } from "../../models/file-upload.model";
import { PersonModel } from 'src/app/models/person.model';
import { PersonResultModel } from 'src/app/models/person-result.model';
import { Person10Model } from 'src/app/models/person-10.model';
import { PersonOccupationResultModel } from 'src/app/models/person-occupation-result.model';

import { fileMimeTypeList } from "../../assets/file-mime-type.list";

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['../../app.component.css', './file-upload.component.css']
})
export class FileUploadComponent implements OnDestroy {
  isLoading: boolean = false;
  fileUploadSubmitForm!: FormGroup;

  private fileInfo: FileUploadModel = <FileUploadModel>{};
  private personListJSON: any[] = [];
  private personResultJSON: any[] = [];
  private person10ResultJSON: any[] = [];
  private personOccupationResultJSON: any[] = [];

  constructor(
    private _PersonFunction: PersonFunction,
    private _FileUploadFunction: FileUploadFunction,
    private _GlobalFunction: GlobalFunction
  ) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fileUploadSubmitForm = new FormGroup({
      id: new FormControl(null, {validators: []}),
      companyName: new FormControl(null, {validators: [Validators.required]}),
      uploadDate: new FormControl(null, { validators: [Validators.required] }),
      fileAttachment: new FormControl(null, {validators: [Validators.required]}),
      fileName: new FormControl(null, {validators: [Validators.required]}),
      fileSize: new FormControl(null, {validators: [Validators.required]}),
      fileType: new FormControl(null, {validators: [Validators.required]})
    });
    this.isLoading = false;

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


        this.personListJSON = XLSX.utils.sheet_to_json(personList);
        this.personResultJSON = XLSX.utils.sheet_to_json(personResultWorkSheet);
        this.person10ResultJSON = XLSX.utils.sheet_to_json(person10ResultWorkSheet);
        this.personOccupationResultJSON = XLSX.utils.sheet_to_json(occupationResultWorkSheet);

        this.isLoading = false;
        this._GlobalFunction.showSystemMessage("file.upload.success");
      }
      if (files) {
        const file = files[0];
        this.fileUploadSubmitForm.patchValue({fileAttachment: file, fileName: file.name, fileSize: file.size, fileType: file.type});
        if (this.fileUploadValidater(file.type, file.size)) {
          reader.readAsBinaryString(file);
        } else {
          this.fileUploadSubmitForm.get('fileAttachment')?.setValue(null);
          throw new Error();
        }
      }
    } catch (error) {
      this.isLoading = false;
      this._GlobalFunction.showSystemMessage("file.upload.failure");
    }
  }

  fileUploadValidater(fileType: string, fileSize: number): boolean {
    let isValid = false;
    const mimeTypeArray = fileMimeTypeList;
    isValid = (mimeTypeArray.find((element) => {return element == fileType}) ? true : false) && fileSize < 8388608; // 8MB limitation
    return isValid;
  }

  onSubmitForm() {
    if (this.fileUploadSubmitForm.valid) {
      this.isLoading = true;

      this.fileInfo.id = Date.now().toString();
      this.fileInfo.companyName = this.fileUploadSubmitForm.get('companyName')?.value;
      this.fileInfo.uploadDate = this.fileUploadSubmitForm.get('uploadDate')?.value;
      this.fileInfo.fileName = this.fileUploadSubmitForm.get('fileName')?.value;
      this.fileInfo.fileSize = this.fileUploadSubmitForm.get('fileSize')?.value;
      this.fileInfo.fileType = this.fileUploadSubmitForm.get('fileType')?.value;
      this.fileInfo.companyEvaluation = null;

      this._FileUploadFunction.fileImport(
        this.fileInfo,
        this.personListJSON,
        this.personResultJSON,
        this.person10ResultJSON,
        this.personOccupationResultJSON
      );
      this.isLoading = false;
      this.resetForm();
      this._GlobalFunction.showSystemMessage("system.save.success");
    } else {
      this._GlobalFunction.showSystemMessage("form.invalid");
    }
  }

  resetForm() {
    this.fileUploadSubmitForm.reset();
    this.fileInfo = <FileUploadModel>{};
    this.personListJSON = [];
    this.personResultJSON = [];
    this.person10ResultJSON = [];
    this.personOccupationResultJSON = [];
  }

  ngOnDestroy(): void {

  }
}
