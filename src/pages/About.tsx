import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Factory } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
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
            About Falcon Plastic Industries
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
           Over 25 years of trusted expertise in quality plastic manufacturing.
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

      {/* <section 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.8), rgba(33, 64, 154, 0.8)), url('https://media.istockphoto.com/id/1125563202/photo/pvc-pipes-stacked-in-warehouse.jpg?s=612x612&w=0&k=20&c=acH74H78RzIOGHRQM-zy4dy49wBzlLn5_mbXUHguNeE=')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Falcon Plastic Industries</h1>
          <p className="text-xl">Excellence in plastic manufacturing since 2019</p>
        </div>
      </section> */}

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-falcon-dark-blue mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 1993 by Sajjad Zahoor Waseer, Falcon Plastic Industries began as a vision to reshape the plastic industry in Pakistan. At a time when quality and accessibility were limited — especially for both B2B and B2C markets — we stepped in with durable solutions and a commitment to trust, integrity, and long-term value.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started with PVC pipes and fittings soon grew into a full-scale manufacturing operation offering a wide range of plastic products and services. Being a family-run business, we blend tradition with innovation, proudly serving homes, businesses, and industries across the nation. Every product we make reflects the same mission we've held since day one — quality that lasts, and relationships that matter.
              </p>

            </div>
            <div className="animate-scale-in">
              <a href="/contact"><img 
                src="https://media.istockphoto.com/id/1214656143/photo/leadership-and-successful-business-ideas-concept-3d-rendering-of-crowd-3d-low-polygon-people.jpg?s=612x612&w=0&k=20&c=DzzMg7VuF0zHAO-2iQQvX0PdqiK6XWL1meN2wh-0qXQ="
                alt="Falcon Plastic Industries facility"
                className="rounded-lg shadow-2xl h-140"
              /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-falcon-light-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg hover:scale-105 transition-transform  duration-300 transform">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-falcon-gold mr-3" />
                  <h3 className="text-2xl font-bold text-falcon-dark-blue">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional plastic manufacturing solutions that exceed customer 
                  expectations through innovation, quality, and sustainable practices. We are 
                  committed to building long-term partnerships with our clients by providing 
                  reliable, cost-effective products that contribute to their success.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:scale-105 transition-transform  duration-300 transform">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-falcon-gold mr-3" />
                  <h3 className="text-2xl font-bold text-falcon-dark-blue">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become Pakistan's most trusted name in plastic manufacturing, recognized 
                  for our commitment to quality, innovation, and environmental responsibility. 
                  We envision a future where our products contribute to building a stronger, 
                  more sustainable industrial infrastructure across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Why Choose Falcon Plastic Industries?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg hover:scale-105 transition-transform  duration-300 transform">
              <CardContent className="p-8">
                <Factory className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  State-of-the-art injection molding machinery ensuring precision and consistency 
                  in every product we manufacture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:scale-105 transition-transform  duration-300 transform">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Dedicated professionals with years of experience in plastic manufacturing 
                  and quality control processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:scale-105 transition-transform  duration-300 transform">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Tailored manufacturing solutions designed to meet specific client requirements 
                  and industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
