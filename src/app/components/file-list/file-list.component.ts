import { Component, OnInit } from '@angular/core';

import { FileUploadFunction } from "../../functions/file-upload.function";
import { FileUploadModel } from "../../models/file-upload.model";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['../../app.component.css', './file-list.component.css']
})
export class FileListComponent implements OnInit {
  isLoading: boolean = false;
  fileList: FileUploadModel[] = [];
  tableColumns: string[] = ["id", "companyName", "uploadDate", "fileSize", "actions"];

  constructor(
    private _FileUploadFunction: FileUploadFunction
  ) {}

  ngOnInit(): void {
    this.isLoading = true
    this.getFileList();
    this.isLoading = false;
  }

  getFileList() {
    this.fileList = this._FileUploadFunction.getFileList();
  }

  onDelete(file: FileUploadModel) {
    this._FileUploadFunction.deleteFile(file);
    this.getFileList();
  }
}
