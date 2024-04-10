import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotionApiService {

  constructor(private http: HttpClient) { }

  obeterAreaAtuacao$(): Observable<any>{
    const headers = new HttpHeaders().set('Accept', '*/*');
    const params = new HttpParams().set('access_token', environment.ACCESS_TOKEN)
    return this.http.get(environment.API_CONTENTFUL, {headers, params}).pipe(res => res);
  }
}
