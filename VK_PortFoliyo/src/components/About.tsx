export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
              alt="About" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">I&apos;m VIJAY</h3>
            <p className="text-gray-600 leading-relaxed">
            I am an enthusiastic Frontend Developer with six months of internship
            experience at DMATICS Technologies. I specialize in developing
            responsive and user-friendly web interfaces using modern frontend
            technologies. My skills include HTML5, CSS3, JavaScript, React.js, and
            Tailwind CSS, Shadcn UI among others. I am committed to delivering quality work
            and continuously improving my skills.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}