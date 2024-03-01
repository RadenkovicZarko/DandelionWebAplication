import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {TextSimilarityResponse} from "./model";
import {Observable} from "rxjs";
import {ApiHistoryService} from "./api-history.service";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private apiUrl = 'https://api.dandelion.eu/datatxt/sim/v1';

  constructor(private http: HttpClient,private apiHistoryService: ApiHistoryService) {}

  compareTexts(text1: string, text2: string): Observable<TextSimilarityResponse> {

    const token = localStorage.getItem('apiToken');
    if (!token) {
      throw new Error('API token not found in localStorage');
    }
    const params = new HttpParams()
      .set('text1', text1)
      .set('text2', text2)
      .set('token', token);
    this.apiHistoryService.recordApiCall(this.apiUrl+"/?"+params);
    return this.http.get<TextSimilarityResponse>(this.apiUrl, { params });
  }
}
