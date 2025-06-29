
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
            <section 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.8), rgba(33, 64, 154, 0.8)), url('https://media.istockphoto.com/id/1125563202/photo/pvc-pipes-stacked-in-warehouse.jpg?s=612x612&w=0&k=20&c=acH74H78RzIOGHRQM-zy4dy49wBzlLn5_mbXUHguNeE=')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start a Conversation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
           From idea to production — we’re here to help you every step of the way.
          </p>
          <a
            href="https://wa.me/923218855277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-falcon-gold text-falcon-dark-blue hover:bg-yellow-400 text-lg px-8 py-3">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to discuss your project? Reach out to us through any of the channels below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <a target='_blank' href="https://maps.app.goo.gl/K8JwjoX67ddSebDc7?g_st=com.google.maps.preview.copy">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                
                  <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Location
                </h3>
                <p className="text-gray-600">
                  Bund Road<br />
                  Lahore, Pakistan
                </p>
                
              </CardContent>
            </Card>
            </a>

            <a 
  target='_blank'
  href="https://wa.me/923218855277" 
  className="text-falcon-blue hover:text-falcon-dark-blue transition-colors"
>
  <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
    <CardContent className="p-8 flex flex-col justify-between h-full">
      <Phone className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
        WhatsApp
      </h3>
      <p className="text-gray-600">
        +92 321 885 5277
      </p>
    </CardContent>
  </Card>
</a>

<Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
  <CardContent className="p-8">
    <Mail className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
      Email
    </h3>
    <a
      href="mailto:falconplasticindustry@gmail.com"
      className="text-falcon-blue hover:text-falcon-dark-blue transition-colors break-all block"
    >
      falconplasticindustry@gmail.com
    </a>
  </CardContent>
</Card>



            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Saturday<br />
                  9:00 AM - 8:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Person */}
          <div className="bg-falcon-light-blue/10 rounded-lg p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-falcon-dark-blue mb-4">
                Contact Person
              </h3>
              <div className="max-w-md mx-auto">
                <p className="text-lg font-semibold text-falcon-blue mb-2">
                  Shawwal Waseer
                </p>
                <p className="text-gray-700 mb-4">
                  Business Development Manager
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/923218855277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-falcon-blue hover:bg-falcon-dark-blue w-full sm:w-auto">
                      WhatsApp Chat
                    </Button>
                  </a>
                  <a 
                    href="mailto:falconplasticindustry@gmail.com"
                  >
                    <Button variant="outline" className="border-falcon-blue text-falcon-blue hover:bg-falcon-blue hover:text-white w-full sm:w-auto">
                      Send Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-falcon-dark-blue mb-4">
              Visit Our Facility
            </h3>
            <p className="text-gray-700 mb-6">
              Located on Bund Road, Lahore - easily accessible for meetings and facility tours
            </p>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <a target='_blank' href="https://maps.app.goo.gl/K8JwjoX67ddSebDc7?g_st=com.google.maps.preview.copy">
              <p className="text-sm text-gray-600 italic">
                Google Maps integration available - Contact us for detailed directions
              </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-falcon-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait - reach out to us today and let's discuss how we can help 
            with your plastic manufacturing requirements.
          </p>
          <a 
            href="https://wa.me/923218855277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="bg-falcon-gold text-falcon-dark-blue hover:bg-yellow-400 text-lg px-8 py-3">
              Start Conversation
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
