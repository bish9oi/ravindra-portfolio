import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const contactMethods = [
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      description: "Check out my projects and contributions",
      link: "https://github.com/bish9oi",
      color: "text-neon hover:text-neon-secondary"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      link: "https://www.linkedin.com/in/ravindra-bishnoi-1601a125a/",
      color: "text-secondary hover:text-secondary-glow"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Drop me a message",
      link: "mailto:ravindra@example.com",
      color: "text-accent hover:text-accent-glow"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
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
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div key={method.title} variants={itemVariants}>
              <Card className="card-glow p-6 text-center group cursor-pointer h-full">
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`mb-4 mx-auto ${method.color} transition-colors duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-primary group-hover:text-primary-glow transition-colors">
                    <span>Connect</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="card-glow p-8 text-center bg-gradient-to-br from-card to-muted">
            <h3 className="text-2xl font-bold mb-4 text-neon">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you need a front-end developer, competitive programming mentor, or just want to chat about tech!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="btn-cyber">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button className="btn-cyber-secondary">
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};