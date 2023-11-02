import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FileUploadFunction {

  private companyName: string = '';

  constructor(

  ) {

  }

  setCompanyName(companyName: string) {
    this.companyName = companyName;
  }

  getCompanyName(): string {
    return this.companyName;
  }


}
