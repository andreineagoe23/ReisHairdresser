import { motion } from "framer-motion";
import {
  FaCut,
  FaPaintBrush,
  FaMagic,
  FaSpa,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const serviceCategories = [
    {
      icon: <FaCut className="text-5xl" />,
      title: "Haircuts & Styling",
      color: "from-primary-400 to-primary-600",
      services: [
        { name: "Women's Cut & Blow Dry", price: "£45" },
        { name: "Men's Cut", price: "£25" },
        { name: "Children's Cut (under 12)", price: "£18" },
        { name: "Restyle & Consultation", price: "£55" },
        { name: "Blow Dry", price: "£30" },
        { name: "Updo / Special Occasion", price: "from £60" },
      ],
    },
    {
      icon: <FaPaintBrush className="text-5xl" />,
      title: "Hair Colouring",
      color: "from-gold-400 to-gold-600",
      services: [
        { name: "Full Head Colour", price: "from £65" },
        { name: "Highlights (Full Head)", price: "from £90" },
        { name: "Balayage", price: "from £110" },
        { name: "Ombre", price: "from £100" },
        { name: "Root Touch-Up", price: "from £45" },
        { name: "Toner", price: "£30" },
      ],
    },
    {
      icon: <FaMagic className="text-5xl" />,
      title: "Hair Treatments",
      color: "from-primary-500 to-primary-700",
      services: [
        { name: "Keratin Treatment", price: "from £150" },
        { name: "Deep Conditioning", price: "£35" },
        { name: "Olaplex Treatment", price: "£45" },
        { name: "Hair Botox", price: "from £120" },
        { name: "Permanent Wave", price: "from £80" },
        { name: "Hair Extensions Consultation", price: "Free" },
      ],
    },
    {
      icon: <FaSpa className="text-5xl" />,
      title: "Beauty Services",
      color: "from-pink-400 to-pink-600",
      services: [
        { name: "Eyebrow Shaping & Tint", price: "£25" },
        { name: "Eyelash Tint", price: "£20" },
        { name: "Facial Treatment", price: "from £50" },
        { name: "Makeup Application", price: "from £45" },
        { name: "Bridal Makeup", price: "from £100" },
        { name: "Manicure", price: "£30" },
      ],
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              From classic cuts to the latest trends, we offer a full range of
              hair and beauty services designed to make you look and feel your
              best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${category.color} p-8 text-white`}
                >
                  <div className="flex items-center space-x-4">
                    <div>{category.icon}</div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {category.services.map((service, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex items-start space-x-3">
                          <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {service.name}
                          </span>
                        </div>
                        <span className="text-gray-800 font-bold text-lg">
                          {service.price}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Important Information
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    All prices are starting from and may vary based on hair
                    length and thickness
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    We offer complimentary consultations for all colour services
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    Please arrive 5 minutes early for your appointment
                  </span>
                </p>
                <p className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>24 hours notice required for cancellations</span>
                </p>
                <p className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    Gift vouchers available - the perfect present for someone
                    special
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get in touch with us today to schedule your appointment
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-500 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
