import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from "environments/environment.prod";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetDataService {

    standardEncoding(v) {
        return encodeURIComponent(v)
            .replace(/%40/gi, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/gi, '$')
            .replace(/%2C/gi, ',')
            .replace(/%3B/gi, ';')
            .replace(/%2B/gi, '+')
            .replace(/%3D/gi, '=')
            .replace(/%3F/gi, '?')
            .replace(/%2F/gi, '/')
            .replace(/%7B/gi, '{')
            .replace(/%22/gi, '"');
    }
    appendParams(params: URLSearchParams, obj: any) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                params.append(key, obj[key])
            }
        }
    }
    constructor(
        private http: Http
    ) { }
    fnPost(method: string, paramsForRecieve: string):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let paramPost = new URLSearchParams();
        paramPost.append('input_type', 'JSON');
        paramPost.append('response_type', 'JSON');
        paramPost.append('method', method);
        //console.log(environment.UrlServiceSuiteCRM + '?' + paramPost.toString() + '&rest_data=' + paramsForRecieve);
        return this.http.get(environment.UrlServiceSuiteCRM + '?' + paramPost.toString() + '&rest_data=' + paramsForRecieve) // ...using post request
            .map((res: Response) => {
                //console.log(res.json());
                return res.json();
            });
    }
    GetProfile(username:string){
        var sessionId;
        sessionId = localStorage.getItem('sessionId');
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
        //console.log(environment.UrlServiceRest+'?input_type=JSON&response_type=JSON&method=get_entry_list&rest_data={"session":"'+sessionId +'","module_name":"Employees","query":"users.user_name=\''+ username +'\' "}' );
         return this.http.get(environment.UrlServiceSuiteCRM+'?input_type=JSON&response_type=JSON&method=get_entry_list&rest_data={"session":"'+sessionId +'","module_name":"Employees","query":"users.user_name=\''+ username +'\'"}') 
            .map((res: Response) => {
                 return res.json();
            });
    }
    ListEmp(method:string){
         var sessionId;
         sessionId = localStorage.getItem('sessionId');
         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        // console.log("ListEmp");
        //console.log(environment.UrlServiceSuiteCRM + '?input_type=JSON&response_type=JSON&method=get_entry_list&rest_data={"session":"'+sessionId+'","module_name":"Employees","order_by":"first_name","query":"","order_by":"","offset":null,"select_fields":"","link_name_to_fields_array":"","max_results":1000}');
         return this.http.get(environment.UrlServiceSuiteCRM + '?input_type=JSON&response_type=JSON&method=get_entry_list&rest_data={"session":"'+sessionId+'","module_name":"Employees","order_by":"first_name","query":"","order_by":"","offset":null,"select_fields":"","link_name_to_fields_array":"","max_results":1000}') // ...using post request
            .map((res: Response) => {
                // console.log(res.json());
                
                return res.json();
            });
    }
    OppList(method: string):Observable<any>{
        var sessionId;
        var Opportunities;
        sessionId = localStorage.getItem('sessionId');
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let paramPost = new URLSearchParams();
        paramPost.append('input_type', 'JSON');
        paramPost.append('response_type', 'JSON');
        paramPost.append('method', method);
        //console.log("ListOpp");
       // console.log(environment.UrlServiceSuiteCRM +'?input_type=JSON&response_type=JSON&method=get_entry_list&rest_data={"session":"'+sessionId+'","module_name":"Opportunities","query":"datediff(year, GETDATE(), date_closed) in (0,1)","order_by":"","offset":null,"select_fields":"","link_name_to_fields_array":"","max_results":10000}');
         return this.http.get(environment.UrlServiceSuiteCRM +'?input_type=JSON&response_type=JSON&method=get_entry_list&rest_data={"session":"'+sessionId+'","module_name":"Opportunities","query":"datediff(year, GETDATE(), date_closed) in (0,1)","order_by":"","offset":null,"select_fields":"","link_name_to_fields_array":"","max_results":10000}', { headers: headers }) // ...using post request
            .map((res: Response) => {
                 return res.json();
            });

    }
}