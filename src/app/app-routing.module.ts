import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";
import {TokenConfigurationComponent} from "./components/token-configuration/token-configuration.component";
import {
  EntityExtractionComponentComponent
} from "./components/entity-extraction-component/entity-extraction-component.component";
import {
  TextSimilarityComponentComponent
} from "./components/text-similarity-component/text-similarity-component.component";
import {
  LanguageDetectionComponentComponent
} from "./components/language-detection-component/language-detection-component.component";
import {
  SentimentAnalysisComponentComponent
} from "./components/sentiment-analysis-component/sentiment-analysis-component.component";
import {ApiHistoryComponent} from "./components/api-history/api-history.component";

const routes: Routes = [
  {
    path: "",
    component: TokenConfigurationComponent,
  },
  {
    path: "entityExtraction",
    component: EntityExtractionComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "languageDetection",
    component: LanguageDetectionComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sentimentAnalysis",
    component: SentimentAnalysisComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "apiHistory",
    component: ApiHistoryComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
