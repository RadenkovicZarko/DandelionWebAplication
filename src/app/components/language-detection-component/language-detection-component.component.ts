import { Component } from '@angular/core';
import {LanguageDetectionService} from "../../language-detection.service";
import {DetectedLangs} from "../../model";
@Component({
  selector: 'app-language-detection-component',
  templateUrl: './language-detection-component.component.html',
  styleUrls: ['./language-detection-component.component.css']
})
export class LanguageDetectionComponentComponent {
  text: string = '';
  clean: boolean = false;
  detectedLangs: DetectedLangs[] = [];

  constructor(private languageDetectionService: LanguageDetectionService) {}

  detectLanguage() {
    this.languageDetectionService.detectLanguage(this.text,this.clean).subscribe((response) => {
      this.detectedLangs = response.detectedLangs;
      console.log(response);
    });


  }
}
