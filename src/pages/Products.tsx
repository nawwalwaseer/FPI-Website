import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Zap, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Products = () => {
  const products = [
    {
      icon: <Settings className="h-12 w-12 text-falcon-gold" />,
      title: "PVC Pipes",
      description: "Polyvinyl Chloride Pipes used for Water | Transport, Plumbing, Drainage | Construction infrastructure",
      features: [
        "Ideal for water supply and drainage systems",
        "Lightweight and easy to install",
        "Non-reactive to most chemicals",
        "Long service life with minimal maintenance"
      ],
      image: "https://media.istockphoto.com/id/512524387/photo/pvc-pipes.jpg?s=612x612&w=0&k=20&c=7FkIL4BuSWdyMEm6v2uYAZqqHdW7H8KI7l6NkMtrsTA="
    },
    {
      icon: <Settings className="h-12 w-12 text-falcon-gold" />,
      title: "Electric Conduits",
      description: "PVC Electrical Conduits for Wiring | Homes, Offices, Factories | Safe Cable Management",
      features: [
        "Electrical safety compliance",
        "Protects wires from damage and moisture",
        "Easy installation",
        "Various diameter options"
      ],
      image: "https://www.alphapipes.com.pk/images/pvc-electrical-conduit.jpg"
    },
    {
      icon: <Settings className="h-12 w-12 text-falcon-gold" />,
      title: "PVC Fittings",
      description: "Pipe Fittings for Joints & Bends | Homes, Buildings, Industries | Leak-Free Flow System",
      features: [
        "Connects pipes for smooth water flow",
        "Wide variety of sizes",
        "Industrial grade quality",
        "Easy installation",
        "Compatible connections"
      ],
      image: "https://media.istockphoto.com/id/1489546967/photo/tees-and-corners-and-other-fittings-for-welding-polypropylene-pipes-pipes.jpg?s=612x612&w=0&k=20&c=d6odLxOv-uHWI5eWMj065z9jTJXuh0Gbo_EuFo_LWcw="
    },
     {
      icon: <Settings className="h-12 w-12 text-falcon-gold" />,
      title: "Gas Pipes",
      description: "Pipes for Safe Gas Supply | Domestic Kitchens, Apartments, Commercial Use | Leak-Proof and Durable",
      features: [
        "Made to handle gas pressure safely",
        "Strong material with long lifespan",
        "Heat and weather resistant",
        "Easy to install with tight connections"
      ],
      image: "https://www.iplex.co.nz/assets/Uploads/Product/Variation/YELLOW-COIL-SMALL__FillWzc1NCw2MDBd.jpeg"
    },
         {
      icon: <Settings className="h-12 w-12 text-falcon-gold" />,
      title: "Garden Pipes",
      description: "Flexible Watering Hose | Home Gardens, Lawns, Nurseries | Easy Use & Tangle-Free Flow",
      features: [
         "Soft and flexible for easy handling",
         "Transparent design with durable build",
         "UV and weather resistant",
         "Perfect for outdoor watering needs"
      ],
      image: "https://m.media-amazon.com/images/I/419tzAG4cFL._UF1000,1000_QL80_.jpg"
    }
  ];

  const services = [
    { title: 'Toyline Products', image: 'https://media.istockphoto.com/id/667108156/photo/colorful-plastic-toys-in-childrens-room.jpg?s=612x612&w=0&k=20&c=WJXkRX42gPteAshb1GU0O2vexV9zSowtVfCs9ikciV0=', description: 'High-quality plastic toyline products manufacturing' },
    { title: 'Automobile Parts', image: 'https://5.imimg.com/data5/GA/IM/XH/SELLER-2467895/plastic-molded-products.jpg', description: 'Durable plastic automobile parts production' },
    { title: 'Plastic Products', image: 'https://aradbranding.com/en/wp-content/uploads/2022/07/plastic-housewares-high-density-web.jpg', description: 'High-quality plastic products for industries & commercial use' },
    { title: 'Doorstep Delivery', image: 'https://media.istockphoto.com/id/2137433376/photo/delivery-van-with-cardboard-boxes-on-white-background.jpg?s=612x612&w=0&k=20&c=4odyjHYI71w478uSmeBEbK-hjt84J-NOvgCgO7L8V34=', description: 'Fast and safe doorstep delivery service' },
    { title: 'Custom Plastic Manufacturing', image: 'https://media.istockphoto.com/id/2178594729/photo/top-view-on-grid-of-glasses-filled-with-blue-plastic-polypropylene-granules-masterbatch.jpg?s=612x612&w=0&k=20&c=0pzFZi9Z7o_9LwU1EaS7kM2Vlydmlj4fhLJZEStnTgw=', description: 'Tailored plastic solutions with custom products' },
    { title: 'B2B & B2C', image: 'https://blog.miva.com/hs-fs/hubfs/B2B-and-B2C.png?width=1200&name=B2B-and-B2C.png', description: 'Serving both B2B and B2C markets efficiently' },
  ];

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
            What we Manufacture
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Offering a wide range of plastic products and manufacturing services designed to support industrial, commercial, and household needs with quality and reliability.
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

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professionally engineered plastic products manufactured using state-of-the-art 
              injection molding technology to meet the highest industry standards.
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                  <div className="flex items-center mb-6">
                    {product.icon}
                    <h3 className="text-3xl font-bold text-falcon-dark-blue ml-4">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-falcon-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://wa.me/923218855277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-falcon-blue hover:bg-falcon-dark-blue">
                      Request Quote
                    </Button>
                  </a>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-falcon-light-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              What Services We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-[300px] w-full max-w-sm mx-auto">
                <div className="h-[70%]">
                  {/* <img src={service.image} alt={service.title} className="w-full h-full object-cover" /> */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
                  />
                </div>
                <div className="h-[15%] p-3">
                  <p className="text-gray-700 text-sm line-clamp-2">{service.description}</p>
                </div>
                <div className="h-[15%] flex items-center justify-center p-3">
                                    <a 
                    href="https://wa.me/923218855277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-falcon-blue hover:bg-falcon-dark-blue">
                      Request Quote
                    </Button>
                  </a>

                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-[300px] w-full max-w-sm mx-auto">
                <div className="h-[70%]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
                  />
                </div>
                <div className="h-[15%] p-3">
                  <p className="text-gray-700 text-sm line-clamp-2">{service.description}</p>
                </div>
                <div className="h-[15%] flex items-center justify-center p-3">
                                    <a 
                    href="https://wa.me/923218855277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-falcon-blue hover:bg-falcon-dark-blue">
                      Request Quote
                    </Button>
                  </a>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;


// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Wrench, Zap, Settings } from 'lucide-react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';

// const Products = () => {
//   const products = [
//     {
//       icon: <Wrench className="h-12 w-12 text-falcon-gold" />,
//       title: "PVC Pipes",
//       description: "Durable, high-pressure-resistant PVC pipes available in multiple sizes and specifications. Perfect for water supply, drainage, and industrial applications.",
//       features: [
//         "High-pressure resistance",
//         "Multiple size options",
//         "Corrosion resistant",
//         "Long-lasting durability",
//         "Cost-effective solution"
//       ],
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       icon: <Zap className="h-12 w-12 text-falcon-gold" />,
//       title: "Electric Conduits",
//       description: "Premium conduits for safe and structured electrical installations. Designed to protect electrical wiring in residential, commercial, and industrial settings.",
//       features: [
//         "Electrical safety compliance",
//         "Fire-resistant materials",
//         "Easy installation",
//         "Weather-resistant",
//         "Various diameter options"
//       ],
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       icon: <Settings className="h-12 w-12 text-falcon-gold" />,
//       title: "Fittings",
//       description: "A comprehensive range of fittings to support diverse industrial and construction needs. Precision-manufactured for reliable connections and optimal performance.",
//       features: [
//         "Precision engineering",
//         "Wide variety of sizes",
//         "Industrial grade quality",
//         "Easy installation",
//         "Compatible connections"
//       ],
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     }
//   ];

//   const services = [
//     { title: 'Custom Molding', image: 'https://via.placeholder.com/400x250', description: 'Tailored molding solutions for unique requirements.' },
//     { title: 'Design Assistance', image: 'https://via.placeholder.com/400x250', description: 'Expert help to design your plastic parts.' },
//     { title: 'Prototype Development', image: 'https://via.placeholder.com/400x250', description: 'Create and test your product before full production.' },
//     { title: 'Packaging Services', image: 'https://via.placeholder.com/400x250', description: 'Custom packaging options for finished goods.' },
//     { title: 'Product Assembly', image: 'https://via.placeholder.com/400x250', description: 'Assembly services for multi-component products.' },
//     { title: 'Logistics & Delivery', image: 'https://via.placeholder.com/400x250', description: 'Efficient and timely delivery to your location.' },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section 
//         className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.8), rgba(33, 64, 154, 0.8)), url('https://media.istockphoto.com/id/1125563202/photo/pvc-pipes-stacked-in-warehouse.jpg?s=612x612&w=0&k=20&c=acH74H78RzIOGHRQM-zy4dy49wBzlLn5_mbXUHguNeE=')`
//         }}
//       >
//         <div className="text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-4">What We Manufacture</h1>
//           <p className="text-xl">High-quality plastic products for industrial and construction applications</p>
//         </div>
      
//       </section>

//       {/* Products Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
//               Our Product Range
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Professionally engineered plastic products manufactured using state-of-the-art 
//               injection molding technology to meet the highest industry standards.
//             </p>
//           </div>

//           <div className="space-y-20">
//             {products.map((product, index) => (
//               <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
//                 <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
//                   <div className="flex items-center mb-6">
//                     {product.icon}
//                     <h3 className="text-3xl font-bold text-falcon-dark-blue ml-4">
//                       {product.title}
//                     </h3>
//                   </div>
//                   <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                     {product.description}
//                   </p>
//                   <ul className="space-y-2 mb-8">
//                     {product.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-gray-700">
//                         <div className="w-2 h-2 bg-falcon-gold rounded-full mr-3"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <a 
//                     href="https://wa.me/923218855277"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button className="bg-falcon-blue hover:bg-falcon-dark-blue">
//                       Request Quote
//                     </Button>
//                   </a>
//                 </div>
//                 <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
//                   <img 
//                     src={product.image}
//                     alt={product.title}
//                     className="rounded-lg shadow-2xl w-full h-80 object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-falcon-light-blue/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
//               What Services We Offer
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {services.slice(0, 3).map((service, index) => (
//               <Card key={index} className="overflow-hidden flex flex-col h-[300px] w-full max-w-sm mx-auto">
//                 <div className="h-[70%]">
//                   <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="h-[15%] p-3">
//                   <p className="text-gray-700 text-sm line-clamp-2">{service.description}</p>
//                 </div>
//                 <div className="h-[15%] flex items-center justify-center p-3">
//                   <Button className="bg-falcon-blue hover:bg-falcon-dark-blue text-white text-sm">Request Quote</Button>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.slice(3, 6).map((service, index) => (
//               <Card key={index} className="overflow-hidden flex flex-col h-[300px] w-full max-w-sm mx-auto">
//                 <div className="h-[70%]">
//                   <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="h-[15%] p-3">
//                   <p className="text-gray-700 text-sm line-clamp-2">{service.description}</p>
//                 </div>
//                 <div className="h-[15%] flex items-center justify-center p-3">
//                   <Button className="bg-falcon-blue hover:bg-falcon-dark-blue text-white text-sm">Request Quote</Button>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Products;


// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Wrench, Zap, Settings } from 'lucide-react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';

// const Products = () => {
//   const products = [
//     {
//       icon: <Wrench className="h-12 w-12 text-falcon-gold" />,
//       title: "PVC Pipes",
//       description: "Durable, high-pressure-resistant PVC pipes available in multiple sizes and specifications. Perfect for water supply, drainage, and industrial applications.",
//       features: [
//         "High-pressure resistance",
//         "Multiple size options",
//         "Corrosion resistant",
//         "Long-lasting durability",
//         "Cost-effective solution"
//       ],
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       icon: <Zap className="h-12 w-12 text-falcon-gold" />,
//       title: "Electric Conduits",
//       description: "Premium conduits for safe and structured electrical installations. Designed to protect electrical wiring in residential, commercial, and industrial settings.",
//       features: [
//         "Electrical safety compliance",
//         "Fire-resistant materials",
//         "Easy installation",
//         "Weather-resistant",
//         "Various diameter options"
//       ],
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       icon: <Settings className="h-12 w-12 text-falcon-gold" />,
//       title: "Fittings",
//       description: "A comprehensive range of fittings to support diverse industrial and construction needs. Precision-manufactured for reliable connections and optimal performance.",
//       features: [
//         "Precision engineering",
//         "Wide variety of sizes",
//         "Industrial grade quality",
//         "Easy installation",
//         "Compatible connections"
//       ],
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//         {
//       icon: <Settings className="h-12 w-12 text-falcon-gold" />,
//       title: "Fittings",
//       description: "A comprehensive range of fittings to support diverse industrial and construction needs. Precision-manufactured for reliable connections and optimal performance.",
//       features: [
//         "Precision engineering",
//         "Wide variety of sizes",
//         "Industrial grade quality",
//         "Easy installation",
//         "Compatible connections"
//       ],
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//         {
//       icon: <Settings className="h-12 w-12 text-falcon-gold" />,
//       title: "Fittings",
//       description: "A comprehensive range of fittings to support diverse industrial and construction needs. Precision-manufactured for reliable connections and optimal performance.",
//       features: [
//         "Precision engineering",
//         "Wide variety of sizes",
//         "Industrial grade quality",
//         "Easy installation",
//         "Compatible connections"
//       ],
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section 
//         className="relative h-96 flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.8), rgba(33, 64, 154, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
//         }}
//       >
//         <div className="text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-4">What We Manufacture</h1>
//           <p className="text-xl">High-quality plastic products for industrial and construction applications</p>
//         </div>
//       </section>

//       {/* Products Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
//               Our Product Range
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Professionally engineered plastic products manufactured using state-of-the-art 
//               injection molding technology to meet the highest industry standards.
//             </p>
//           </div>

//           <div className="space-y-20">
//             {products.map((product, index) => (
//               <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
//                 <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
//                   <div className="flex items-center mb-6">
//                     {product.icon}
//                     <h3 className="text-3xl font-bold text-falcon-dark-blue ml-4">
//                       {product.title}
//                     </h3>
//                   </div>
//                   <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                     {product.description}
//                   </p>
//                   <ul className="space-y-2 mb-8">
//                     {product.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-gray-700">
//                         <div className="w-2 h-2 bg-falcon-gold rounded-full mr-3"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <a 
//                     href="https://wa.me/923218855277"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button className="bg-falcon-blue hover:bg-falcon-dark-blue">
//                       Request Quote
//                     </Button>
//                   </a>
//                 </div>
//                 <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
//                   <img 
//                     src={product.image}
//                     alt={product.title}
//                     className="rounded-lg shadow-2xl w-full h-80 object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quality Assurance */}
//       <section className="py-20 bg-falcon-light-blue/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
//               Quality Assurance
//             </h2>
//             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//               Every product undergoes rigorous quality control to ensure it meets our high standards
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-falcon-gold rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl font-bold text-white">1</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
//                   Material Testing
//                 </h3>
//                 <p className="text-gray-600">
//                   All raw materials are tested for quality and composition before production begins.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-falcon-gold rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl font-bold text-white">2</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
//                   Production Monitoring
//                 </h3>
//                 <p className="text-gray-600">
//                   Continuous monitoring during the manufacturing process ensures consistency.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-falcon-gold rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl font-bold text-white">3</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
//                   Final Inspection
//                 </h3>
//                 <p className="text-gray-600">
//                   Every finished product is inspected before packaging and delivery.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-falcon-blue text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Order?
//           </h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
//             Contact us today to discuss your requirements and get a customized quote 
//             for your plastic manufacturing needs.
//           </p>
//           <a 
//             href="https://wa.me/923218855277"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button size="lg" variant="secondary" className="bg-white text-falcon-blue hover:bg-gray-100">
//               Get Quote on WhatsApp
//             </Button>
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Products;
