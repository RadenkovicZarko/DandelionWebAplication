import { Component } from '@angular/core';
import {ApiHistoryService} from "../../api-history.service";

@Component({
  selector: 'app-api-history',
  templateUrl: './api-history.component.html',
  styleUrls: ['./api-history.component.css']
})
export class ApiHistoryComponent {
  apiCalls: { timestamp: string; url: string }[];

  constructor(private apiHistoryService: ApiHistoryService) {
    this.apiCalls = apiHistoryService.getApiHistory();
  }

}
