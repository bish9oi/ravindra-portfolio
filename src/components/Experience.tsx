import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export const Experience = () => {
  const experience = {
    company: "Oxmaint Inc",
    role: "Front-End Developer & Prompt Engineer Intern",
    location: "Remote - California, USA",
    duration: "May 2024 - July 2024",
    description: "Worked on building and optimizing user interfaces for web applications, implementing best coding practices, and reducing code complexity by 20%.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Prompt Engineering"],
    website: "https://community.oxmaint.com/"
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="card-glow p-8 relative overflow-hidden">
            {/* Company Logo Placeholder */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              OX
            </div>
            
            {/* Experience Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neon mb-2">
                  {experience.role}
                </h3>
                <h4 className="text-xl text-neon-secondary font-semibold mb-4">
                  {experience.company}
                </h4>
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
                <a 
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Company</span>
                </a>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="space-y-3">
                <h5 className="font-semibold text-foreground">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="px-3 py-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievement Highlight */}
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-foreground font-medium">
                  ✨ <span className="text-neon">Key Achievement:</span> Reduced code complexity by 20% through implementation of best coding practices
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};