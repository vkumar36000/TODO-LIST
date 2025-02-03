import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-4">VIJAY</h3>
        <div className="flex justify-center gap-4 mb-4" onClick={()=> alert("sorry i am not add social media handles")}>
          <a href="#" className="hover:text-blue-500"  ><Facebook size={20} /></a>
          <a href="#" className="hover:text-blue-500"><Instagram size={20} /></a>
          <a href="#" className="hover:text-blue-500"><Twitter size={20} /></a>
        </div>
        <p className="text-sm text-gray-400">© 2024 Vijay. All rights reserved</p>
      </div>
    </footer>
  );
}