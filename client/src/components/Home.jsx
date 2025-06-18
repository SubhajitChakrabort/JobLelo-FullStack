import { motion } from 'framer-motion';
import { useState } from 'react';


function Home() {
  const trendingJobs = ['Web Designer', 'Web Developer', 'IOS Developer', 'Android Developer'];
  const [activeFilter, setActiveFilter] = useState('latest');

  const jobs = [
    {
      title: "Senior React Developer",
      skills: ["React", "JavaScript", "TypeScript", "Node.js"],
      experience: "3-5 years",
      qualification: "Bachelor's in Computer Science",
      location: "New York, USA",
      company: "Tech Solutions Inc."
    },
    {
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
      experience: "2-4 years",
      qualification: "Degree in Design or related field",
      location: "London, UK",
      company: "Creative Studios"
    },
    {
      title: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      experience: "4-6 years",
      qualification: "Master's in Computer Science",
      location: "San Francisco, USA",
      company: "Innovation Labs"
    },
    {
      title: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      experience: "3-5 years",
      qualification: "Bachelor's in Engineering",
      location: "Toronto, Canada",
      company: "Cloud Tech"
    },
    {
      title: "Product Manager",
      skills: ["Agile", "Scrum", "JIRA", "Product Strategy"],
      experience: "5-7 years",
      qualification: "MBA or equivalent",
      location: "Berlin, Germany",
      company: "Product House"
    },
    {
      title: "Mobile Developer",
      skills: ["React Native", "iOS", "Android", "Flutter"],
      experience: "2-4 years",
      qualification: "Bachelor's in Software Engineering",
      location: "Singapore",
      company: "Mobile Apps Inc"
    }
  ];

  return (
    <div>
      <div className="relative min-h-screen">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 pt-20 lg:pt-32">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Search Your Dream Job
            </motion.h1>

            {/* Search Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Job Title"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="Location"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Category</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-400 transition duration-300"
              >
                Search Jobs
              </motion.button>
            </div>

            {/* Trending Keywords */}
            <div className="mb-8">
              <h2 className="text-white text-xl mb-4">Trending Jobs Keywords:</h2>
              <div className="flex flex-wrap gap-3">
                {trendingJobs.map((job, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition duration-300"
                  >
                    {job}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <div className="bg-white rounded-lg shadow-md p-2 inline-flex">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter('latest')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === 'latest'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Latest Jobs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter('oldest')}
              className={`px-8 py-3 rounded-lg font-semibold ml-2 transition-all duration-300 ${
                activeFilter === 'oldest'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Oldest Jobs
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Job Listings Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">New</span>
              </div>
              <p className="text-gray-600 mb-2">{job.company}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Experience:</span> {job.experience}</p>
                <p><span className="font-semibold">Qualification:</span> {job.qualification}</p>
                <p className="flex items-center">
                  <span className="font-semibold mr-1">Location:</span> {job.location}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-400 transition duration-300"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* View All Jobs Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            View All Jobs
          </motion.button>
        </motion.div>
      </div>
      {/* Testimonial Section */}
<div className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Users Say</h2>
      <p className="text-gray-600">Discover success stories from our job seekers and employers</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <div className="flex overflow-x-hidden">
        <motion.div
          animate={{
            x: [-1000, 0, 0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 min-w-full"
        >
          {[
            {
              name: "Sarah Johnson",
              role: "Software Engineer",
              company: "Tech Corp",
              image: "https://randomuser.me/api/portraits/women/1.jpg",
              rating: 5,
              text: "Found my dream job through this platform. The process was smooth and professional."
            },
            {
              name: "Michael Chen",
              role: "UI/UX Designer",
              company: "Design Studio",
              image: "https://randomuser.me/api/portraits/men/2.jpg",
              rating: 5,
              text: "Outstanding platform for creative professionals. Connected me with top companies."
            },
            {
              name: "Emily Davis",
              role: "Product Manager",
              company: "Innovation Hub",
              image: "https://randomuser.me/api/portraits/women/3.jpg",
              rating: 4,
              text: "Great experience using this platform. Very user-friendly and effective."
            },
            {
              name: "James Wilson",
              role: "DevOps Engineer",
              company: "Cloud Systems",
              image: "https://randomuser.me/api/portraits/men/4.jpg",
              rating: 5,
              text: "The best job portal for tech professionals. Found multiple great opportunities."
            },
            {
              name: "Lisa Anderson",
              role: "Marketing Director",
              company: "Global Media",
              image: "https://randomuser.me/api/portraits/women/5.jpg",
              rating: 5,
              text: "Exceptional platform for finding high-quality marketing positions."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg min-w-[300px] md:min-w-[350px]"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  </div>
</div>


    </div>
  );
}

export default Home;
