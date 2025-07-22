import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, FileText, TrendingUp, Users, Brain } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

interface ResultsDisplayProps {
  results: DocumentAnalysis[];
  onDownloadCSV: () => void;
  onDownloadWordCloud: (filename: string) => void;
}

export function ResultsDisplay({ results, onDownloadCSV, onDownloadWordCloud }: ResultsDisplayProps) {
  const allTopics = results.flatMap(doc => doc.topics);
  const uniqueTopics = allTopics.reduce((acc, topic) => {
    const existing = acc.find(t => t.keywords.join(',') === topic.keywords.join(','));
    if (!existing) {
      acc.push({
        ...topic,
        weight: topic.weight,
        documents: topic.documents
      });
    } else {
      existing.weight += topic.weight;
      existing.documents = [...new Set([...existing.documents, ...topic.documents])];
    }
    return acc;
  }, [] as Topic[]);

  const getSentimentColor = (score: number) => {
    if (score > 0.1) return 'bg-green-500';
    if (score < -0.1) return 'bg-red-500';
    return 'bg-yellow-500';
  };

  const getSentimentLabel = (score: number) => {
    if (score > 0.1) return 'Positive';
    if (score < -0.1) return 'Negative';
    return 'Neutral';
  };

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{results.length}</p>
                <p className="text-sm text-muted-foreground">Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{uniqueTopics.length}</p>
                <p className="text-sm text-muted-foreground">Topics Found</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {Math.round(results.reduce((acc, doc) => acc + doc.wordCount, 0) / results.length)}
                </p>
                <p className="text-sm text-muted-foreground">Avg Words</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {results.filter(doc => doc.entities && doc.entities.length > 0).length}
                </p>
                <p className="text-sm text-muted-foreground">With Entities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Results */}
      <Tabs defaultValue="topics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Discovered Topics</h3>
            <Button onClick={onDownloadCSV} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
          </div>
          
          <div className="grid gap-4">
            {uniqueTopics.sort((a, b) => b.weight - a.weight).map((topic, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">Topic {index + 1}</CardTitle>
                      <CardDescription>
                        Weight: {topic.weight.toFixed(3)} | 
                        Documents: {topic.documents.length}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{topic.weight.toFixed(1)}%</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {topic.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <h3 className="text-lg font-semibold">Document Analysis</h3>
          <div className="grid gap-4">
            {results.map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base">{doc.filename}</CardTitle>
                      <CardDescription>
                        {doc.wordCount.toLocaleString()} words | {doc.topics.length} topics
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onDownloadWordCloud(doc.filename)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Word Cloud
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {doc.summary && (
                    <div>
                      <h4 className="font-medium mb-2">Summary</h4>
                      <p className="text-sm text-muted-foreground">{doc.summary}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium mb-2">Top Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {doc.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="secondary">
                          {topic.keywords.slice(0, 3).join(', ')}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {doc.entities && doc.entities.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Named Entities</h4>
                      <div className="flex flex-wrap gap-2">
                        {doc.entities.slice(0, 10).map((entity, idx) => (
                          <Badge key={idx} variant="outline">
                            {entity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-4">
          <h3 className="text-lg font-semibold">Sentiment Analysis</h3>
          <div className="grid gap-4">
            {results.filter(doc => doc.sentiment).map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{doc.filename}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div 
                        className={`w-3 h-3 rounded-full ${getSentimentColor(doc.sentiment!.score)}`}
                      />
                      <span className="font-medium">
                        {getSentimentLabel(doc.sentiment!.score)}
                      </span>
                    </div>
                    <Badge variant="outline">
                      Score: {doc.sentiment!.score.toFixed(3)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="visualization" className="space-y-4">
          <h3 className="text-lg font-semibold">Topic Clusters Visualization</h3>
          <Card>
            <CardContent className="p-6">
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    t-SNE visualization will be rendered here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Connect to your Python backend to see interactive plots
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}