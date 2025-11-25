import React from 'react';
import { Sparkles, Target, Lightbulb } from 'lucide-react';

export default function PersonalVision() {
  return (
    <section id="vision" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6 py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-12">
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold">
                YN
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your Name
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light">
              Aspiring Scientist & Researcher
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <Sparkles className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-4">My Vision</h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Write your personal vision here. What drives you as a scientist? What are your goals 
                    and aspirations? What impact do you want to make in your field? This is your space to 
                    share your passion and motivation for scientific research and discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold">Research Focus</h3>
                </div>
                <p className="text-slate-300">
                  Catalysis, Computational Chemistry, Materials Science, Quantum Chemistry, 
                  and Sustainable Technologies
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold">Philosophy</h3>
                </div>
                <p className="text-slate-300">
                  Bridging theoretical knowledge with hands-on experimentation to solve 
                  real-world challenges through innovative research
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              Scroll to explore my work
              <span className="animate-bounce">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}