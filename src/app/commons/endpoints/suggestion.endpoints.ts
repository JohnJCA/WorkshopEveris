import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SuggestionsEndpoints {
    public url;
    constructor(private http: HttpClient){
        this.url = "http://localhost:4000/suggestions";
    }

    getSuggestions(){
        return this.http.get(this.url);
    }
}