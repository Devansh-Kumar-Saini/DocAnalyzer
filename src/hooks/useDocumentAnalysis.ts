import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Topic {
  id: number;
  keywords: string[];
  weight: number;
  documents: string[];
}

interface DocumentAnalysis {
  filename: string;
  wordCount: number;
  topics: Topic[];
  sentiment?: {
    score: number;
    label: string;
  };
  entities?: string[];
  summary?: string;
}

interface AnalysisResponse {
  documents: DocumentAnalysis[];
  status: string;
}

export function useDocumentAnalysis() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<DocumentAnalysis[]>([]);
  const { toast } = useToast();

  const analyzeDocuments = async (files: File[]): Promise<void> => {
    setIsProcessing(true);
    
    try {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });

      // This would connect to your Python backend
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: AnalysisResponse = await response.json();
      setResults(data.documents);
      
      toast({
        title: "Analysis Complete",
        description: `Successfully analyzed ${files.length} document(s)`,
      });
    } catch (error) {
      console.error('Analysis failed:', error);
      
      // For demo purposes, generate mock data
      const mockResults: DocumentAnalysis[] = files.map((file, index) => ({
        filename: file.name,
        wordCount: Math.floor(Math.random() * 5000) + 1000,
        topics: generateMockTopics(),
        sentiment: {
          score: (Math.random() - 0.5) * 2,
          label: ['Positive', 'Negative', 'Neutral'][Math.floor(Math.random() * 3)]
        },
        entities: generateMockEntities(),
        summary: `This document discusses ${generateMockTopics()[0].keywords.slice(0, 3).join(', ')} and related concepts. The analysis reveals key themes and patterns within the text content.`
      }));
      
      setResults(mockResults);
      
      toast({
        title: "Demo Mode",
        description: "Using mock data. Connect to Python backend for real analysis.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadCSV = () => {
    const csvContent = generateCSV(results);
    downloadFile(csvContent, 'document_topics.csv', 'text/csv');
  };

  const downloadWordCloud = (filename: string) => {
    // This would typically request the word cloud image from the backend
    toast({
      title: "Word Cloud Download",
      description: `Word cloud for ${filename} would be downloaded from backend`,
    });
  };

  return {
    isProcessing,
    results,
    analyzeDocuments,
    downloadCSV,
    downloadWordCloud,
  };
}

function generateMockTopics(): Topic[] {
  const topicWords = [
    ['technology', 'innovation', 'digital', 'software', 'data'],
    ['business', 'management', 'strategy', 'market', 'growth'],
    ['health', 'medical', 'treatment', 'patient', 'care'],
    ['education', 'learning', 'student', 'knowledge', 'skill'],
    ['environment', 'sustainability', 'climate', 'green', 'energy']
  ];

  return topicWords.slice(0, Math.floor(Math.random() * 3) + 2).map((keywords, index) => ({
    id: index,
    keywords: keywords.slice(0, Math.floor(Math.random() * 3) + 3),
    weight: Math.random() * 100,
    documents: [`doc_${index}`]
  }));
}

function generateMockEntities(): string[] {
  const entities = [
    'Apple Inc.', 'Microsoft', 'Google', 'Amazon', 'Tesla',
    'New York', 'California', 'London', 'Tokyo', 'Berlin',
    'John Smith', 'Jane Doe', 'Michael Johnson', 'Sarah Wilson'
  ];
  
  return entities.slice(0, Math.floor(Math.random() * 8) + 3);
}

function generateCSV(results: DocumentAnalysis[]): string {
  const headers = ['Document', 'Word Count', 'Topic Keywords', 'Topic Weight', 'Sentiment Score', 'Entities'];
  const rows = [headers.join(',')];

  results.forEach(doc => {
    doc.topics.forEach(topic => {
      const row = [
        `"${doc.filename}"`,
        doc.wordCount.toString(),
        `"${topic.keywords.join('; ')}"`,
        topic.weight.toFixed(3),
        doc.sentiment?.score.toFixed(3) || 'N/A',
        `"${doc.entities?.join('; ') || 'N/A'}"`
      ];
      rows.push(row.join(','));
    });
  });

  return rows.join('\n');
}

function downloadFile(content: string, filename: string, contentType: string) {
  const blob = new Blob([content], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(url);
}