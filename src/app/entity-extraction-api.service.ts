import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EntityExtractionResponse} from "./model";
import {ApiHistoryService} from "./api-history.service";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionApiService {

  private apiUrl = 'https://api.dandelion.eu/datatxt/nex/v1';

  constructor(private http: HttpClient,private apiHistoryService: ApiHistoryService) {}

  extractEntities(text: string,minConfidence: number,include: string): Observable<EntityExtractionResponse> {
    const token = localStorage.getItem('apiToken');
    if (!token) {
      throw new Error('API token not found in localStorage');
    }
    const params = new HttpParams()
      .set('text', text)
      .set('min_confidence', minConfidence.toString())
      .set('include', include)
      .set('token', token);
    this.apiHistoryService.recordApiCall(this.apiUrl+"/?"+params);
    return this.http.get<EntityExtractionResponse>(this.apiUrl, { params });
  }
}

