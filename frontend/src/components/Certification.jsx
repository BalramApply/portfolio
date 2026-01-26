import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ChevronLeft, ChevronRight, Award, Calendar, Building2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import './Certification.css';
export const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showConfetti, setShowConfetti] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Sample certificate data - Replace with your actual data
  const certificates = [
    {
      id: 1,
      title: 'Data structures and algorithms',
      issuer: 'Apna College',
      date: 'june 2024',
      category: 'DSA',
      thumbnail: '/Assets/certificate/alphaDSA.jpg', // Replace with your image
      pdf: '/Assets/Balram_Resume.pdf', // Replace with your PDF
      description: 'Advanced Data structures and algorithms with java'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: 'December 2024',
      category: 'Python',
      thumbnail: '/certificates/python-cert.jpg',
      pdf: '/certificates/python-cert.pdf',
      description: 'Data analysis and machine learning with Python'
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      issuer: 'edX',
      date: 'November 2024',
      category: 'AI',
      thumbnail: '/certificates/ai-cert.jpg',
      pdf: '/certificates/ai-cert.pdf',
      description: 'Deep learning and neural networks'
    },
    {
      id: 4,
      title: 'Full Stack Development',
      issuer: 'freeCodeCamp',
      date: 'October 2024',
      category: 'React',
      thumbnail: '/certificates/fullstack-cert.jpg',
      pdf: '/certificates/fullstack-cert.pdf',
      description: 'MERN stack development certification'
    },
    {
      id: 5,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon',
      date: 'September 2024',
      category: 'Cloud',
      thumbnail: '/certificates/aws-cert.jpg',
      pdf: '/certificates/aws-cert.pdf',
      description: 'Cloud computing fundamentals'
    },
    {
      id: 6,
      title: 'JavaScript Algorithms',
      issuer: 'HackerRank',
      date: 'August 2024',
      category: 'JavaScript',
      thumbnail: '/certificates/js-cert.jpg',
      pdf: '/certificates/js-cert.pdf',
      description: 'Data structures and algorithms in JavaScript'
    },
  ];

  const categories = ['All', ...new Set(certificates.map(cert => cert.category))];

  const filteredCertificates = activeFilter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleNext = () => {
    const currentIndex = filteredCertificates.findIndex(c => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % filteredCertificates.length;
    setSelectedCert(filteredCertificates[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredCertificates.findIndex(c => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + filteredCertificates.length) % filteredCertificates.length;
    setSelectedCert(filteredCertificates[prevIndex]);
  };

  const handleDownload = () => {
    if (selectedCert?.pdf) {
      const link = document.createElement('a');
      link.href = selectedCert.pdf;
      link.download = `${selectedCert.title.replace(/\s+/g, '_')}.pdf`;
      link.click();
    }
  };

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certification" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            My <span className="text-white">Certificates</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A collection of my achievements and certifications in various technologies
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Certificate Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="certificate-card group cursor-pointer"
                  onClick={() => handleCertClick(cert)}
                  whileHover={{ y: -10 }}
                >
                  <div className="certificate-inner">
                    {/* Front */}
                    <div className="certificate-front">
                      <div className="certificate-image-wrapper">
                        <img 
                          src={cert.thumbnail} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ECertificate%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        <div className="certificate-overlay">
                          <Award className="w-12 h-12 text-primary" />
                          <p className="text-sm mt-2">Click to view</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{cert.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                          <Building2 className="w-4 h-4" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="certificate-back">
                      <div className="p-6 flex flex-col justify-center items-center text-center h-full">
                        <Award className="w-16 h-16 text-primary mb-4" />
                        <h3 className="font-bold text-xl mb-3">{cert.title}</h3>
                        <p className="text-gray-300 mb-4">{cert.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-center gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span>{cert.issuer}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Confetti */}
            {showConfetti && (
              <div className="confetti-container">
                {[...Array(50)].map((_, i) => (
                  <div key={i} className="confetti" style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    backgroundColor: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 4)]
                  }} />
                ))}
              </div>
            )}

            {/* Modal Content */}
            <motion.div
              className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10"
              initial={{ scale: 0.5, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 180 }}
              transition={{ type: 'spring', duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{selectedCert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedCert.date}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-6 overflow-auto max-h-[60vh]">
                <motion.img
                  src={selectedCert.thumbnail}
                  alt={selectedCert.title}
                  className="w-full rounded-lg shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23374151" width="800" height="600"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ECertificate Preview%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-white/10">
                <div className="flex gap-2">
                  <motion.button
                    onClick={handlePrev}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
                <motion.button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-full flex items-center gap-2 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};