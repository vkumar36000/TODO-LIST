import { Github, Linkedin, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hi,<br />
            I&apos;m <span className="text-blue-500">Vijay</span><br />
            Web Developer
          </h1>
          <a href="#contact" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Contact
          </a>
          <div className="mt-8 flex gap-4">
            <a href="https://www.linkedin.com/in/vijay-kumar-239199306" target='_blank' className="text-gray-600 hover:text-blue-500"><Linkedin size={24} /></a>
            <a href="../src/Media/Vijya-kumar-resume.pdf" target='_blank' className="text-gray-600 hover:text-blue-500"><Briefcase size={24} /></a>
            <a href="https://github.com/vkumar36000" target='_blank' className="text-gray-600 hover:text-blue-500"><Github size={24} /></a>
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 mx-auto bg-blue-500 rounded-full overflow-hidden">
            <img 
              src="../src/Media/Work_3.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}