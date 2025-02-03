export default function Work() {
  
  
  const works = [
    { id: 1, image: '../src/Media/images.png', URL:"https://github.com/vkumar36000/Pokedex-Project-"},
    { id: 2, image: '../src/Media/unnamed.png', URL:"https://github.com/vkumar36000/Weather-App" },
    { id: 3, image: '../src/Media/tic tac toe.png', URL:"https://github.com/vkumar36000/TIC-TAC-TOE" },
    { id: 3, image: '../src/Media/amazon.jpg', URL:"https://github.com/vkumar36000/UI-Clones-of-websites" },
  ];

  return (
    <section id="work" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <a 
              key={work.id}
              href={work.URL} 
              target="_blank"
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={work.image} 
                alt={`Work ${work.id}`} 
                className="w-full h-48 object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}