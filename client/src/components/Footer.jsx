import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    'For Candidates': [
      'Browse Jobs',
      'Browse Categories',
      'Candidate Dashboard',
      'Job Alerts',
      'My Bookmarks'
    ],
    'For Employers': [
      'Post A Job',
      'Browse Candidates',
      'Employer Dashboard',
      'Applications',
      'Pricing Plans'
    ],
    'About Us': [
      'About Company',
      'Contact Us',
      'Terms & Conditions',
      'Privacy Policy',
      'Cookie Policy'
    ],
    'Helpful Resources': [
      'Career Advice',
      'Interview Tips',
      'Resume Templates',
      'Blog',
      'Help Center'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', icon: 'fab fa-instagram' }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

  

        {/* Social Links & Copyright */}
        <div className="mt-12 border-t border-blue-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © {new Date().getFullYear()} JobLelo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
