import { Injectable } from '@angular/core';
import {appConfig} from '../assets/appConfig';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  poeditorUrl = 'poeditor/languages/list';
  lingohubUrl = `lingohub/${appConfig.lingoHubUsername}/projects/${appConfig.lingoHubProjectName}?auth_token=${appConfig.lingoHubToken}`;

  constructor(private http: HttpClient) { }

  getPoEditorLangs() {
    const body = new HttpParams()
      .set('api_token', appConfig.poEditorToken)
      .set('id', appConfig.poEditorProjectId);

    return this.http
      .post(this.poeditorUrl, body.toString(), {headers: this.headers})
      .pipe(
        map((data: any) => data.result)
      );
  }


  getLingohubLangs() {
    return this.http.get(this.lingohubUrl);
  }




}
