import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHistoryService {

  constructor() { }

  private apiCalls: { timestamp: string; url: string }[] = [];

  recordApiCall( url: string) {
    const timestamp = new Date().toLocaleString();
    this.apiCalls.push({ timestamp, url });
  }

  getApiHistory(): { timestamp: string; url: string }[] {
    return this.apiCalls;
  }
}
