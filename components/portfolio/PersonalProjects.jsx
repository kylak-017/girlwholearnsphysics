import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Flame, Beaker, Zap, Lock, Droplets, Cpu, 
  Timer, Calendar, Globe, Sun, Wrench, CircuitBoard 
} from 'lucide-react';

export default function PersonalProjects() {
  const projects = [
    {
      id: 'thermite',
      title: 'Thermite Project',
      icon: Flame,
      category: 'Chemistry',
      description: 'Experimental project on thermite reactions, exploring exothermic redox reactions and their applications.',
      tags: ['Chemistry', 'Experimental', 'Thermodynamics'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80'
    },
    {
      id: 'copper-oxide',
      title: 'Curating Copper Oxide',
      icon: Beaker,
      category: 'Materials Science',
      description: 'Synthesis and characterization of copper oxide materials for various applications.',
      tags: ['Materials Science', 'Synthesis', 'Characterization'],
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&q=80'
    },
    {
      id: 'piezoelectricity',
      title: 'Piezoelectricity',
      icon: Zap,
      category: 'Physics',
      description: 'Investigation of piezoelectric materials and their energy conversion properties.',
      tags: ['Physics', 'Energy', 'Materials'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80'
    },
    {
      id: 'door-lock',
      title: 'Door Lock',
      icon: Lock,
      category: 'Engineering',
      description: 'Smart door lock system integrating electronics and programming.',
      tags: ['Engineering', 'Electronics', 'IoT'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80'
    },
    {
      id: 'luminol',
      title: 'Luminol Experiment',
      icon: Droplets,
      category: 'Chemistry',
      description: 'Chemiluminescence experiments using luminol for forensic applications.',
      tags: ['Chemistry', 'Forensics', 'Experimental'],
      image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&q=80'
    },
    {
      id: 'ieee-simulation',
      title: 'IEEE Simulation',
      icon: Cpu,
      category: 'Computational',
      description: 'Circuit and system simulation project following IEEE standards.',
      tags: ['Simulation', 'IEEE', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
    },
    {
      id: 'forest-app',
      title: 'Forest App (Time Management for ADHD)',
      icon: Timer,
      category: 'Software',
      description: 'Time management application designed specifically for users with ADHD.',
      tags: ['Software', 'ADHD', 'Productivity'],
      image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a8?w=600&q=80'
    },
    {
      id: 'pomofocus',
      title: 'Pomofocus (Technovation)',
      icon: Calendar,
      category: 'Software',
      description: 'Pomodoro-based focus application developed for Technovation competition.',
      tags: ['Software', 'Productivity', 'Technovation'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80'
    },
    {
      id: 'gems-website',
      title: 'GEMS Website',
      icon: Globe,
      category: 'Web Development',
      description: 'Website development project for GEMS organization.',
      tags: ['Web Development', 'Design', 'Frontend'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      id: 'solar-panel',
      title: 'Solar Panel Project GiC',
      icon: Sun,
      category: 'Renewable Energy',
      description: 'Solar panel implementation and optimization project.',
      tags: ['Renewable Energy', 'Engineering', 'Sustainability'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80'
    },
    {
      id: 'autocad',
      title: 'AUTOCAD',
      icon: Wrench,
      category: 'Design',
      description: 'CAD design projects and technical drawings.',
      tags: ['CAD', 'Design', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80'
    },
    {
      id: 'electric-connections',
      title: 'Electric Connections',
      icon: CircuitBoard,
      category: 'Electronics',
      description: 'Electrical circuit design and implementation projects.',
      tags: ['Electronics', 'Circuits', 'Engineering'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Personal Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hands-on experiments and projects spanning chemistry, physics, engineering, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-500 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-900 border-0 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
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