import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotionApiService {

  private url = environment.URL_API_NOTION;

  constructor(private http: HttpClient) { }

  obterAtuacoes(){
    const headers = new HttpHeaders().set('Notion-Version', '2022-06-28').set('Bearer', environment.NOTION_API_KEY);

    return this.http.post(this.url + environment.DATABASE_ID + '/query', '', {headers});
  }
}
