import { motion } from "framer-motion";
import { FaAward, FaUsers, FaHeart, FaClock } from "react-icons/fa";

const About = () => {
  const values = [
    {
      icon: <FaAward className="text-4xl" />,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality services using premium products",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Expert Team",
      description:
        "Highly trained professionals passionate about hair and beauty",
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Client Care",
      description: "Your satisfaction and comfort are our top priorities",
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "10+ Years",
      description: "Serving the Ilford community with dedication and expertise",
    },
  ];

  const team = [
    {
      name: "Reis",
      role: "Founder & Master Stylist",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop",
      specialty: "Colouring & Creative Cuts",
    },
    {
      name: "Sarah",
      role: "Senior Stylist",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop",
      specialty: "Balayage & Styling",
    },
    {
      name: "Emma",
      role: "Beauty Specialist",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
      specialty: "Facials & Makeup",
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
              About Us
            </h1>
            <p className="text-xl text-gray-600">
              Where passion meets expertise to create beautiful transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Welcome to Reis Hair & Beauty, your premier destination for
                  hair and beauty services in Ilford. Established over a decade
                  ago, we've been dedicated to helping our clients look and feel
                  their absolute best.
                </p>
                <p>
                  Our salon was born from a passion for the art of hairdressing
                  and beauty. We believe that everyone deserves to feel
                  confident and beautiful, and we're here to make that happen
                  with personalized services tailored to your unique style.
                </p>
                <p>
                  At Reis Hair & Beauty, we combine traditional techniques with
                  the latest trends and technologies. Our team stays updated
                  with continuous training and education to bring you the best
                  in hair and beauty care.
                </p>
                <p>
                  We pride ourselves on creating a warm, welcoming atmosphere
                  where you can relax and enjoy being pampered. Your
                  satisfaction is our success, and we're committed to exceeding
                  your expectations every time you visit.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop"
                  alt="Reis Hair & Beauty Salon"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="text-lg">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to your beauty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
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
              Experience the Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Visit us today and discover why we're Ilford's favorite salon
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-500 font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
