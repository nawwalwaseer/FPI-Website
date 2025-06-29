import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-falcon-dark-blue text-white ">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/553f0fdb-33fc-4d52-9d60-0d9fa820291f.png" 
                alt="Falcon Plastic Industries" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">Falcon Plastic Industries</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Serving Pakistan since 1993 with reliable plastic products and tailored solutions for homes, industries, and businesses. Trusted by professionals for durable products, efficient services, and on-time nationwide delivery.
            </p>
            <div className="flex space-x-4">
              <a target='_blank' href="https://www.facebook.com/share/19Pb54fh3P/?mibextid=wwXIfr" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a target='_blank' href="https://www.instagram.com/falconplasticindustry?igsh=MXBobGM3cWQ1czFhMQ==" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a target='_blank' href="https://wa.me/923218855277" className="text-gray-300 hover:text-white transition-colors">
                <MessageSquareMore className="h-6 w-6" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
  <div className="space-y-2 text-gray-300">
    <a target="_blank" href="https://maps.app.goo.gl/K8JwjoX67ddSebDc7?g_st=com.google.maps.preview.copy">
      <p className="text-gray-300 hover:text-white transition-colors">Bund Road, Lahore, Pakistan</p>
    </a>
    <p>falconplasticindustry@gmail.com</p>
    <p>Phone & WhatsApp:</p>
    <div className="space-y-1">
      <a target='_blank' href="https://wa.me/923218855277" className="text-falcon-gold hover:text-white transition-colors block">
        +92 321 885 5277
      </a>
      <a target='_blank' href="https://wa.me/923178552771" className="text-falcon-gold hover:text-white transition-colors block">
        +92 317 855 2771
      </a>
      <a target='_blank' href="https://wa.me/923454066271" className="text-falcon-gold hover:text-white transition-colors block">
        +92 345 406 6271
      </a>
    </div>
  </div>
</div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Falcon Plastic Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
