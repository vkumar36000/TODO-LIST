import { Code2, Palette, Github } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'React', level: 70, icon: Code2 },
    { name: 'HTML5', level: 95, icon: Code2 },
    { name: 'CSS3', level: 80, icon: Code2 },
    { name: 'JavaScript', level: 75, icon: Code2 },
    { name: 'TailWind', level: 65, icon: Palette },
    { name: 'Bootstrap', level: 50, icon: Palette },
    { name: 'Git/GitHuB', level: 80, icon: Github },


  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Skills</h3>
            <p className="text-gray-600 mb-8">
            As a frontend developer, I possess the following professional skills.
            </p>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full">
                    <div 
                      className="h-2.5 bg-blue-500 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="../src/Media/Top-16-frontend--Technologies.jpg" 
              alt="Skills" 
              className="w-full  h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}