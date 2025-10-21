import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Reis</span> Hair & Beauty
            </h3>
            <p className="text-gray-400 mb-4">
              Your destination for style, beauty, and confidence in Ilford.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span>122 New North Road, Ilford, IG6 2XJ, United Kingdom</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-primary-400 flex-shrink-0" />
                <span>+44 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-400 flex-shrink-0" />
                <span>reishairbeauty@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">10am - 4pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Reis Hair & Beauty. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
