import { Injectable } from "@angular/core";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ErrorHandler{

    constructor(){
    }

    public handleError(error: HttpErrorResponse) {

        let errors: ErrorObservable<any>;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(error);
            console.error(
                `Backend returned code , ${error.status}` +
                `body  was: ${error.error}`);

            // Handling Client Errors.
            if (error.status === 400) {
                errors = new ErrorObservable();
            }
            else if (error.status === 401) {
               // this.authHelper.login();
                errors = new ErrorObservable();
            }
            else if (error.status === 403) {
                errors = new ErrorObservable();
            } else if (error.status === 404) {
                errors = new ErrorObservable();
            }
            // Handling Server Error
            else if (error.status === 500) {
                errors = new ErrorObservable();
            }
            else if (error.status === 504) {
                errors = new ErrorObservable();
            }else{
                errors = new ErrorObservable();
            }

        }


        return errors;
    };

}
