export interface EntityExtractionResponse {
  time: number;
  annotations: Annotation[];
  lang: string;
  timestamp: string;
}

export interface Annotation {
  start: number;
  end: number;
  spot: string;
  confidence: number;
  id: number;
  title: string;
  uri: string;
  abstract: string;
  label: string;
  categories: string[];
  image: Image;
}

export interface Image {
  full: string;
  thumbnail: string;
}

export interface TextSimilarityResponse {
  time: number;
  similarity: number;
  lang: string;
  langConfidence: number;
  timestamp: string;
}


export interface LanguageDetectionResponse {
  time: number;
  detectedLangs: DetectedLangs[];
  timestamp: string;
}

export interface DetectedLangs {
  lang: string;
  confidence: number;
}


export interface SentimentAnalysisResponse {
  timestamp: string;
  time: number;
  lang: string;
  sentiment: Sentiment;
}

export interface Sentiment{
  score: number;
  type: string;
};
