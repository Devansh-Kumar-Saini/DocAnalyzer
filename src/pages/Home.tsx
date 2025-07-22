import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, FileText, TrendingUp, Users, Download, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const features = [
    {
      icon: FileText,
      title: 'Multi-Format Support',
      description: 'Upload and analyze PDF, TXT, and DOCX documents with ease'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced topic modeling using Latent Dirichlet Allocation (LDA)'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Analysis',
      description: 'Understand the emotional tone and sentiment of your documents'
    },
    {
      icon: Users,
      title: 'Entity Recognition',
      description: 'Automatically identify and extract named entities from text'
    },
    {
      icon: Download,
      title: 'Export Results',
      description: 'Download analysis results as CSV files and word cloud images'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Fast document processing with live progress updates'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'All processing happens locally - your documents never leave your system'
    },
    {
      icon: Globe,
      title: 'No Cloud Dependencies',
      description: 'Works entirely offline without requiring external APIs'
    },
    {
      icon: Brain,
      title: 'Advanced NLP',
      description: 'State-of-the-art natural language processing techniques'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Document Analysis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Unlock Insights from Your Documents
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your documents into actionable insights with advanced topic modeling, 
            sentiment analysis, and entity recognition. All powered by AI and processed locally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/demo">Try Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/technical">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze and understand your documents
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DocAnalyzer?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with privacy, performance, and accuracy in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Analyze Your Documents?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start extracting valuable insights from your documents in minutes
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/demo">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}