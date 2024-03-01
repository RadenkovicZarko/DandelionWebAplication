import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenConfigurationComponent } from './components/token-configuration/token-configuration.component';
import { EntityExtractionComponentComponent } from './components/entity-extraction-component/entity-extraction-component.component';
import { TextSimilarityComponentComponent } from './components/text-similarity-component/text-similarity-component.component';
import { LanguageDetectionComponentComponent } from './components/language-detection-component/language-detection-component.component';
import { SentimentAnalysisComponentComponent } from './components/sentiment-analysis-component/sentiment-analysis-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiHistoryComponent } from './components/api-history/api-history.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenConfigurationComponent,
    EntityExtractionComponentComponent,
    TextSimilarityComponentComponent,
    LanguageDetectionComponentComponent,
    SentimentAnalysisComponentComponent,
    ApiHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
