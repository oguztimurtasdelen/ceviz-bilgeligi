import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { systemMessages } from "../assets/messages.asset";

@Injectable({
  providedIn: 'root'
})
export class GlobalFunction {
  public snackBar: Subject<string> = new Subject();

  constructor(
    private _snackBar: MatSnackBar,
  ) {

  }

  showSystemMessage(messageCode: any) {
    this._snackBar.open(systemMessages[messageCode], "Tamam", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 5000
    });
  }
}
