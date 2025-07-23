import React from 'react';
import { FileUpload } from '@/components/FileUpload';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { useDocumentAnalysis } from '@/hooks/useDocumentAnalysis';
import { Brain, FileText, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Demo() {
  const { isProcessing, results, analyzeDocuments, downloadCSV, downloadWordCloud } = useDocumentAnalysis();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Interactive Demo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Try Document Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your documents and experience the power of AI-driven analysis in real-time
          </p>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Demo Mode:</strong> This frontend connects to your Python backend via the <code>/api/analyze</code> endpoint.  
              If the backend is not properly connected, the app will switch to demo mode and display mock data.  
              Please note that values shown in demo mode may be inaccurate or misleading.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                How to Use
              </CardTitle>
              <CardDescription>
                Follow these simple steps to analyze your documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    1
                  </div>
                  <h3 className="font-medium mb-1">Upload Files</h3>
                  <p className="text-sm text-muted-foreground">
                    Drag & drop or select PDF, TXT, or DOCX files
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    2
                  </div>
                  <h3 className="font-medium mb-1">Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Click analyze to start AI processing
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    3
                  </div>
                  <h3 className="font-medium mb-1">Explore Results</h3>
                  <p className="text-sm text-muted-foreground">
                    View topics, sentiment, and download reports
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upload Section */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Upload Documents</h2>
            </div>
            <FileUpload onFilesUploaded={analyzeDocuments} isProcessing={isProcessing} />
          </section>

          {/* Results Section */}
          {results.length > 0 && (
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Brain className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Analysis Results</h2>
              </div>
              <ResultsDisplay
                results={results}
                onDownloadCSV={downloadCSV}
                onDownloadWordCloud={downloadWordCloud}
              />
            </section>
          )}

          {/* Features Preview */}
          {results.length === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>What You'll Get</CardTitle>
                <CardDescription>
                  Comprehensive analysis results for your documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Topic Discovery</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify key themes and topics
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Word Clouds</h4>
                    <p className="text-sm text-muted-foreground">
                      Visual representation of content
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Info className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Sentiment Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Emotional tone detection
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-medium mb-1">Entity Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Extract names, places, organizations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}