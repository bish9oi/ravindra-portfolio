import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"],
      color: "border-primary text-primary"
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Redux.js", "Bootstrap", "Tailwind CSS"],
      color: "border-secondary text-secondary"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "border-accent text-accent"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      color: "border-green-400 text-green-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
            Technologies I Use
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="card-glow p-6 h-full">
                <h3 className={`text-xl font-bold mb-6 ${category.color.split(' ')[1]}`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <Badge 
                        variant="outline" 
                        className={`w-full justify-center py-2 px-4 ${category.color} hover:bg-current hover:text-background transition-colors duration-300`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Programming Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="card-glow p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-neon">
              Competitive Programming Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-neon-secondary">450+</div>
                <div className="text-muted-foreground">Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">1616</div>
                <div className="text-muted-foreground">LeetCode Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">3</div>
                <div className="text-muted-foreground">Platforms Active</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Badge variant="outline" className="border-neon text-neon">LeetCode</Badge>
              <Badge variant="outline" className="border-secondary text-secondary">GeeksforGeeks</Badge>
              <Badge variant="outline" className="border-accent text-accent">InterviewBit</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};