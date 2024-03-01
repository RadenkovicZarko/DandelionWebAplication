import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguageDetectionResponse} from "./model";
import {ApiHistoryService} from "./api-history.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private apiUrl = 'https://api.dandelion.eu/datatxt/li/v1/';

  constructor(private http: HttpClient,private apiHistoryService: ApiHistoryService) {}

  detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionResponse> {
    const token = localStorage.getItem('apiToken');
    if (!token) {
      throw new Error('API token not found in localStorage');
    }
    const params = new HttpParams()
      .set('text', text)
      .set('clean', clean.toString())
      .set('token', token);
    this.apiHistoryService.recordApiCall(this.apiUrl+"/?"+params);
    return this.http.get<LanguageDetectionResponse>(this.apiUrl, { params });
  }
}
