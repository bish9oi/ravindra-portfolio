import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Trophy, Users, Target } from 'lucide-react';

export const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "450+ Problems Solved",
      description: "Across LeetCode, GeeksforGeeks, and InterviewBit",
      color: "text-neon"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "1616 LeetCode Rating",
      description: "Highest rating achieved in competitive programming",
      color: "text-neon-secondary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CP Lead",
      description: "Led RTU Coders college club",
      color: "text-accent"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Java Expert",
      description: "Go-to language for tackling challenging problems",
      color: "text-green-400"
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
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Hey there! I'm <span className="text-neon font-semibold">Ravindra Bishnoi</span>, 
                a Pre-final year B.Tech student, passionate about{' '}
                <span className="text-neon-secondary">Competitive Programming</span>, development, 
                and mastering DSA.
              </p>
              
              <p className="text-muted-foreground">
                I thrive on delivering state-of-the-art software solutions and have solved{' '}
                <span className="text-neon font-bold">450+ problems</span> across platforms like 
                LeetCode, GeeksforGeeks, and InterviewBit.
              </p>
              
              <p className="text-muted-foreground">
                <span className="text-green-400 font-semibold">Java</span> is my go-to language for 
                tackling challenging problems. I was the Competitive Programming (CP) Lead for{' '}
                <span className="text-accent font-semibold">RTU Coders</span>, a college club.
              </p>
              
              <p className="text-muted-foreground">
                In the future, I want to become a great{' '}
                <span className="text-neon-secondary font-semibold">software engineer</span>, 
                and I am working on it.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Java', 'React.js', 'JavaScript', 'DSA', 'Competitive Programming'].map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-glow p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className={`mb-4 ${achievement.color} mx-auto`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};