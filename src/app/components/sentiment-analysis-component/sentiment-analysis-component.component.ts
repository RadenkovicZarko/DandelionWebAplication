import { Component } from '@angular/core';
import {SentimentAnalysisService} from "../../sentiment-analysis.service";

@Component({
  selector: 'app-sentiment-analysis-component',
  templateUrl: './sentiment-analysis-component.component.html',
  styleUrls: ['./sentiment-analysis-component.component.css']
})
export class SentimentAnalysisComponentComponent {
  text: string = '';
  selectedLanguage: string = 'en';
  sentimentScore: number | null = null;
  sentimentType: string = '';
  sentimentColor: string = '';

  constructor(private sentimentAnalysisService:SentimentAnalysisService) {}

  analyzeSentiment() {
    this.sentimentAnalysisService.sentimentAnalysis(this.text,this.selectedLanguage).subscribe((response) => {
      this.sentimentScore = response.sentiment.score;
      this.sentimentType = response.sentiment.type;
      this.sentimentColor = this.getSentimentColor(response.sentiment.score);
      console.log(response);
    });


  }

  getSentimentColor(score: number): string {
    const red = 255 * (1 - score);
    const green = 255 * (score + 1);
    const blue = 0;

    return `rgb(${red}, ${green}, ${blue})`;
  }

}
