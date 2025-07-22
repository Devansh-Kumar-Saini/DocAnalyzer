import React from 'react';
import { Brain, Heart, Users, Target, Github, Mail, Linkedin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const team = [
    {
      name: 'Devansh Kumar',
      role: 'AIML Developer',
      bio: 'Final Year B.Tech student at Amity University Punjab, specializing in machine learning',
      image: 'images/devansh.jpg'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Privacy First',
      description: 'We believe your data should stay yours. All processing happens locally without external dependencies.'
    },
    {
      icon: Users,
      title: 'Open Source',
      description: 'Built with transparency in mind, our codebase is open for community contributions and improvements.'
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'We use state-of-the-art algorithms and continuously improve our models for the most accurate results.'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Constantly researching and implementing cutting-edge NLP techniques to stay ahead of the curve.'
    }
  ];

  const stats = [
    { label: 'Documents Analyzed', value: '10,000+' },
    { label: 'Topics Discovered', value: '25,000+' },
    { label: 'Languages Supported', value: '15+' },
    { label: 'Accuracy Rate', value: '94%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making advanced document analysis accessible to everyone through 
            cutting-edge AI technology and user-friendly design.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  DocAnalyzer was born from a simple observation: despite the wealth of information 
                  in documents, extracting meaningful insights remained a complex, time-consuming process 
                  requiring specialized knowledge.
                </p>
                <p>
                  Our team of AI researchers and developers set out to democratize document analysis, 
                  creating tools that make advanced NLP techniques accessible to researchers, 
                  businesses, and individuals alike.
                </p>
                <p>
                  Today, DocAnalyzer processes thousands of documents daily, helping users discover 
                  hidden patterns, understand sentiment, and extract actionable insights from their content.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Centered */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Presented By</h2>
            <p className="text-xl text-muted-foreground">
              The experts behind DocAnalyzer's cutting-edge technology
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="mailto:devanshkumarsaini@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
            </a>
            <a href="https://github.com/Devansh-Kumar-Saini" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/devansh-kumar-b2b972261/" target="_blank" rel="noopener noreferrer">            
            <Button variant="outline" className="flex items-center">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}