import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Brain, Building } from 'lucide-react';

export default function TeamProjects() {
  const teams = [
    {
      id: 'cmu-ai',
      title: 'CMU AI Team',
      institution: 'Carnegie Mellon University',
      icon: Brain,
      role: 'Team Member / Researcher',
      period: 'Dates',
      description: 'Describe your work with the CMU AI team. What projects did you work on? What technologies did you use? What did you learn and contribute?',
      achievements: [
        'Key achievement or contribution 1',
        'Key achievement or contribution 2',
        'Key achievement or contribution 3'
      ],
      tags: ['AI', 'Machine Learning', 'Research'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      id: 'northwestern-ai',
      title: 'Northwestern AI Team',
      institution: 'Northwestern University',
      icon: Brain,
      role: 'Team Member / Researcher',
      period: 'Dates',
      description: 'Detail your experience with the Northwestern AI team. What were the research objectives? What methodologies did you employ? What were the outcomes?',
      achievements: [
        'Key achievement or contribution 1',
        'Key achievement or contribution 2',
        'Key achievement or contribution 3'
      ],
      tags: ['AI', 'Neural Networks', 'Data Science'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'
    }
  ];

  return (
    <section id="teams" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Team Research Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Collaborative research experiences with leading AI teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teams.map((team) => {
            const IconComponent = team.icon;
            return (
              <Card 
                key={team.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Team Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img 
                    src={team.image}
                    alt={team.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Institution Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-900 border-0 flex items-center gap-2 px-4 py-2 backdrop-blur-sm">
                      <Building className="w-4 h-4" />
                      {team.institution}
                    </Badge>
                  </div>

                  {/* Team Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="p-4 bg-blue-600 rounded-xl shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 mb-2">
                    {team.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {team.role}
                    </span>
                    <span className="text-slate-500">{team.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-slate-700 leading-relaxed">
                    {team.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {team.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {team.tags.map((tag, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700"
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