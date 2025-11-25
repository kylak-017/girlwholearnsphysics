import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, FileText, Image, Github, Atom, Cpu, Microscope, Droplet } from 'lucide-react';

export default function ResearchSection() {
  const researchProjects = [
    {
      id: 'khu-lab',
      title: 'KHU Lab',
      icon: FlaskConical,
      category: 'Laboratory',
      description: 'Details about your work at KHU Lab. Describe the research environment, your role, and key experiments conducted.',
      tags: ['Laboratory', 'Experimental'],
      content: 'Add detailed content about your KHU Lab experience here.'
    },
    {
      id: 'research-report',
      title: 'Research Report',
      icon: FileText,
      category: 'Documentation',
      description: 'Comprehensive research reports documenting methodology, findings, and conclusions.',
      tags: ['Report', 'Analysis'],
      content: 'Link to your research reports or embed key findings here.'
    },
    {
      id: 'photo-evidence',
      title: 'Photo Evidence',
      icon: Image,
      category: 'Documentation',
      description: 'Visual documentation of experiments, setups, and results from laboratory work.',
      tags: ['Documentation', 'Visual'],
      content: 'Add photos from your experiments here. You can use image URLs or upload them.'
    },
    {
      id: 'github-code',
      title: 'Github Code Evidence',
      icon: Github,
      category: 'Code',
      description: 'Repository of computational research code, analysis scripts, and simulation tools.',
      tags: ['Programming', 'Open Source'],
      githubUrl: 'https://github.com/yourusername',
      content: 'Link your GitHub repositories showcasing your computational research work.'
    },
    {
      id: 'hea-catalyst',
      title: 'HEA Catalyst Research',
      icon: Atom,
      category: 'Catalysis',
      description: 'High-Entropy Alloy catalyst research exploring novel materials for catalytic applications.',
      tags: ['Catalysis', 'Materials Science', 'HEA'],
      content: 'Detailed information about your HEA catalyst research, methodology, and findings.'
    },
    {
      id: 'ksef-catalyst',
      title: 'KSEF Catalyst',
      icon: FlaskConical,
      category: 'Catalysis',
      description: 'KSEF-funded catalyst research project investigating new catalytic pathways.',
      tags: ['Catalysis', 'Funded Research'],
      content: 'Details about your KSEF catalyst project, objectives, and outcomes.'
    },
    {
      id: 'dft-process',
      title: 'DFT Process',
      icon: Cpu,
      category: 'Computational',
      description: 'Density Functional Theory calculations and computational modeling of molecular systems.',
      tags: ['DFT', 'Computational Chemistry', 'Modeling'],
      content: 'Explain your DFT workflow, software used (e.g., VASP, Gaussian), and key calculations.'
    },
    {
      id: 'quantum-chem',
      title: 'Learning Quantum Chemistry',
      icon: Atom,
      category: 'Theoretical',
      description: 'Journey through quantum chemistry principles and their applications in research.',
      tags: ['Quantum Chemistry', 'Theory', 'Education'],
      content: 'Share your learning process, key concepts mastered, and how you apply quantum chemistry.'
    },
    {
      id: 'modeling',
      title: 'Modeling Process',
      icon: Cpu,
      category: 'Computational',
      description: 'Molecular modeling and simulation workflows for predicting material properties.',
      tags: ['Modeling', 'Simulation', 'Computational'],
      content: 'Describe your modeling approach, tools, and typical workflows.'
    },
    {
      id: 'topological',
      title: 'Topological Invariants In Strongly Correlated Systems',
      icon: Microscope,
      category: 'Theoretical Physics',
      description: 'Advanced research on topological properties in strongly correlated quantum systems.',
      tags: ['Topology', 'Quantum Physics', 'Advanced Theory'],
      content: 'Detailed explanation of your work on topological invariants and correlated systems.'
    },
    {
      id: 'wastewater',
      title: 'Wastewater to Bioplastic',
      icon: Droplet,
      category: 'Sustainability',
      description: 'Innovative research converting wastewater into biodegradable plastic materials.',
      tags: ['Sustainability', 'Bioplastics', 'Environmental'],
      content: 'Overview of your wastewater-to-bioplastic project and its environmental impact.',
      subsections: [
        {
          id: 'method1',
          title: 'Method 1',
          description: 'First methodology for bioplastic synthesis from wastewater.',
          content: 'Detailed explanation of Method 1, including process steps and results.'
        },
        {
          id: 'method2',
          title: 'Method 2',
          description: 'Alternative approach to bioplastic production.',
          content: 'Detailed explanation of Method 2, comparing it with Method 1.'
        }
      ]
    }
  ];

  return (
    <section id="research" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Research Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From computational chemistry to experimental catalysis and sustainable technologies
          </p>
        </div>

        <div className="space-y-6">
          {researchProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-slate-900 mb-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-slate-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 border">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Content Area */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <p className="text-slate-700">
                        {project.content}
                      </p>
                      
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      )}
                    </div>

                    {/* Subsections */}
                    {project.subsections && (
                      <div className="mt-6 space-y-4">
                        <h4 className="font-semibold text-slate-900">Methods:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.subsections.map((sub, idx) => (
                            <div 
                              key={idx}
                              className="bg-blue-50 rounded-lg p-4 border border-blue-100"
                            >
                              <h5 className="font-semibold text-slate-900 mb-2">{sub.title}</h5>
                              <p className="text-sm text-slate-600 mb-2">{sub.description}</p>
                              <p className="text-sm text-slate-700">{sub.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}