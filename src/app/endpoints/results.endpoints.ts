import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';
import { Observable } from "rxjs";
import { Results } from "../models/resuts.model";
@Injectable()
export class ResultsEndpoints {
    public url;
    constructor(private http: HttpClient){
        this.url = "https://reqres.in/api/users?page=1";
    }

    getResults(){
        return this.http.get(this.url);
    }
}