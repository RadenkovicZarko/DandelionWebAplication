import { Component } from '@angular/core';
import {EntityExtractionApiService} from "../../entity-extraction-api.service";
import {Annotation, EntityExtractionResponse} from "../../model";
import {ApiHistoryService} from "../../api-history.service";

@Component({
  selector: 'app-entity-extraction-component',
  templateUrl: './entity-extraction-component.component.html',
  styleUrls: ['./entity-extraction-component.component.css']
})
export class EntityExtractionComponentComponent {
  text: string = '';
  minConfidence: number = 0;
  includeImage: boolean = false;
  includeAbstract: boolean = false;
  includeCategories: boolean = false;
  annotations: Annotation[] = [];

  constructor(private entityExtractionApiService: EntityExtractionApiService) {}

  submit() {
    // Formirajte parametre zahteva ka API-ju na osnovu korisničkog unosa
    const params = {
      text: this.text,
      min_confidence: this.minConfidence,
      include: this.getIncludeParameters(),
    };

    this.entityExtractionApiService.extractEntities(params.text,params.min_confidence,params.include).subscribe((respond: EntityExtractionResponse) => {
      this.annotations = respond.annotations
    });
  }

  getIncludeParameters() {
    const includeParams = [];
    if (this.includeImage) {
      includeParams.push('image');
    }
    if (this.includeAbstract) {
      includeParams.push('abstract');
    }
    if (this.includeCategories) {
      includeParams.push('categories');
    }
    return includeParams.join(',');
  }
}
