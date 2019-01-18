import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApplicationsGroupEndpoints {
    public url;
    constructor(private http: HttpClient){
        this.url = "http://localhost:4000/applicationsGroup";
    }

    getApps(){
        return this.http.get(this.url);
    }
}