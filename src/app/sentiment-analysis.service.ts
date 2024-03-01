import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {SentimentAnalysisResponse} from "./model";
import {Observable} from "rxjs";
import {ApiHistoryService} from "./api-history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private apiUrl = 'https://api.dandelion.eu/datatxt/sent/v1';

  constructor(private http: HttpClient,private apiHistoryService: ApiHistoryService) {}

  sentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysisResponse> {

    const token = localStorage.getItem('apiToken');
    if (!token) {
      throw new Error('API token not found in localStorage');
    }
    const params = new HttpParams()
      .set('text', text)
      .set('lang', lang)
      .set('token', token);
    this.apiHistoryService.recordApiCall(this.apiUrl+"/?"+params);
    return this.http.get<SentimentAnalysisResponse>(this.apiUrl, { params });
  }

}
