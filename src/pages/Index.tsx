import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
              RB
            </div>
            <span className="text-lg font-semibold text-neon">Ravindra Bishnoi</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Building the future, one line of code at a time.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Ravindra Bishnoi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;