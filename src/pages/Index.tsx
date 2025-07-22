import React from 'react';
import { FileUpload } from '@/components/FileUpload';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { useDocumentAnalysis } from '@/hooks/useDocumentAnalysis';
import { Brain, FileText } from 'lucide-react';

const Index = () => {
  const { isProcessing, results, analyzeDocuments, downloadCSV, downloadWordCloud } = useDocumentAnalysis();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Document Analyzer</h1>
              <p className="text-muted-foreground">
                AI-powered document analysis with topic modeling and insights
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
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
        </div>
      </main>
    </div>
  );
};

export default Index;
