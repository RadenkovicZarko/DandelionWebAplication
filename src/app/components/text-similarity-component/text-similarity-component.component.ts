import { Component } from '@angular/core';
import {TextSimilarityService} from "../../text-similarity.service";

@Component({
  selector: 'app-text-similarity-component',
  templateUrl: './text-similarity-component.component.html',
  styleUrls: ['./text-similarity-component.component.css']
})
export class TextSimilarityComponentComponent {
  text1: string = '';
  text2: string = '';
  similarityResult: number = 0;

  constructor(private textSimilarityService: TextSimilarityService) {}

  compareTexts() {
    this.textSimilarityService.compareTexts(this.text1, this.text2).subscribe((response) => {
      this.similarityResult = response.similarity;
    });
  }
}
