import React from 'react';
import { Brain, Code, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Technical() {
  const technologies = [
    {
      category: 'Frontend',
      items: ['React 18', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'React Router']
    },
    {
      category: 'Backend',
      items: ['Python', 'Flask/FastAPI', 'scikit-learn', 'NLTK', 'spaCy']
    },
    {
      category: 'ML/NLP',
      items: ['Latent Dirichlet Allocation', 'TF-IDF', 'Word2Vec', 't-SNE', 'VADER Sentiment']
    },
    {
      category: 'Processing',
      items: ['PyPDF2', 'python-docx', 'pandas', 'numpy', 'matplotlib']
    }
  ];

  const pipeline = [
    {
      step: 1,
      title: 'Document Upload',
      description: 'Secure file upload with format validation and progress tracking'
    },
    {
      step: 2,
      title: 'Text Extraction',
      description: 'Extract clean text from PDF, DOCX, and TXT files'
    },
    {
      step: 3,
      title: 'Preprocessing',
      description: 'Tokenization, stop word removal, and text normalization'
    },
    {
      step: 4,
      title: 'Topic Modeling',
      description: 'Apply LDA algorithm to discover latent topics in documents'
    },
    {
      step: 5,
      title: 'Analysis',
      description: 'Sentiment analysis, entity recognition, and summarization'
    },
    {
      step: 6,
      title: 'Visualization',
      description: 'Generate word clouds, topic clusters, and interactive charts'
    }
  ];

  const features = [
    'Latent Dirichlet Allocation (LDA) for topic discovery',
    'TF-IDF vectorization for feature extraction',
    't-SNE visualization for topic clustering',
    'VADER sentiment analysis for emotional tone',
    'Named Entity Recognition using spaCy',
    'Word cloud generation with frequency weighting',
    'Document summarization using extractive methods',
    'Real-time processing with progress tracking'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            Technical Overview
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How DocAnalyzer Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the technical architecture and AI algorithms powering our document analysis platform
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="pipeline">Processing Pipeline</TabsTrigger>
              <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
              <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            </TabsList>

            <TabsContent value="architecture" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Frontend Architecture</CardTitle>
                    <CardDescription>
                      Modern React application with responsive design
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Component-based React architecture
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        TypeScript for type safety
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Responsive design with Tailwind CSS
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Real-time progress tracking
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Backend Architecture</CardTitle>
                    <CardDescription>
                      Python-powered processing engine
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        RESTful API with Flask/FastAPI
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Asynchronous document processing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Local file processing (no cloud)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Optimized ML pipeline
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pipeline" className="space-y-8">
              <div className="grid gap-6">
                {pipeline.map((stage, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {stage.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
                          <p className="text-muted-foreground">{stage.description}</p>
                        </div>
                        {index < pipeline.length - 1 && (
                          <ArrowRight className="h-5 w-5 text-muted-foreground mt-1" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="algorithms" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Brain className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Topic Modeling</CardTitle>
                    <CardDescription>
                      Latent Dirichlet Allocation (LDA)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      LDA discovers hidden thematic structure in large document collections by modeling each document as a mixture of topics.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Probabilistic generative model</li>
                      <li>• Unsupervised learning approach</li>
                      <li>• Dirichlet priors for topic distributions</li>
                      <li>• Gibbs sampling for inference</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Sentiment Analysis</CardTitle>
                    <CardDescription>
                      VADER Sentiment Analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      VADER is specifically tuned to social media text and works well on text from other domains.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Lexicon and rule-based approach</li>
                      <li>• Handles negations and intensifiers</li>
                      <li>• Compound sentiment scores</li>
                      <li>• Real-time processing capability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Advanced Features</CardTitle>
                  <CardDescription>
                    Additional NLP capabilities powered by state-of-the-art algorithms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tech-stack" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{tech.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tech.items.map((item, idx) => (
                          <Badge key={idx} variant="secondary" className="mr-1 mb-1">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience the Technology?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Try our demo to see these advanced algorithms in action
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/demo">Try the Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}