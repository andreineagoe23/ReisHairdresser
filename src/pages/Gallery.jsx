import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
      title: "Modern Haircut",
      category: "Haircuts",
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
      title: "Balayage Highlights",
      category: "Colouring",
    },
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
      title: "Salon Interior",
      category: "Salon",
    },
    {
      url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
      title: "Hair Styling",
      category: "Styling",
    },
    {
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
      title: "Hair Treatment",
      category: "Treatments",
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop",
      title: "Vibrant Color",
      category: "Colouring",
    },
    {
      url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop",
      title: "Professional Cut",
      category: "Haircuts",
    },
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop",
      title: "Beauty Treatment",
      category: "Beauty",
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=600&fit=crop",
      title: "Elegant Updo",
      category: "Styling",
    },
    {
      url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=600&fit=crop",
      title: "Hair Coloring",
      category: "Colouring",
    },
    {
      url: "https://images.unsplash.com/photo-1522336284037-91f7da073525?w=800&h=600&fit=crop",
      title: "Styling Station",
      category: "Salon",
    },
    {
      url: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&h=600&fit=crop",
      title: "Hair Care",
      category: "Treatments",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-gold-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600">
              Browse through our portfolio of stunning transformations and get
              inspired for your next look
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold text-lg">{image.title}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest work, special offers, and hair
              inspiration
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              @ReisHairBeauty
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-primary-400 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] rounded-2xl"
            />
            <div className="text-white text-center mt-4">
              <p className="text-2xl font-semibold">{selectedImage.title}</p>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
