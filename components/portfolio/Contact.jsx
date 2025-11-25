import React from 'react';
import { Mail, Linkedin, Github, MapPin, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "City, Country",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or just want to connect? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-200 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Curriculum Vitae</h3>
              <p className="text-slate-300 mb-6">
                Download my complete CV for detailed information about my academic background, 
                research experience, and accomplishments.
              </p>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm w-full"
                size="lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-slate-300 mb-6">
                Follow my research journey and stay updated on my latest projects
              </p>
              <div className="flex gap-4">
                <a 
                  href="#"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all hover:scale-110 backdrop-blur-sm"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all hover:scale-110 backdrop-blur-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="#"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all hover:scale-110 backdrop-blur-sm"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Your Name
                </label>
                <Input 
                  placeholder="John Doe"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Your Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Subject
                </label>
                <Input 
                  placeholder="Research Collaboration Inquiry"
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your inquiry..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400">
            © 2024 Your Name. Built with passion for science and discovery.
          </p>
        </div>
      </div>
    </section>
  );
}