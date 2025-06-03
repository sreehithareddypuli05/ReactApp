import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers } from 'react-icons/fa';
import './Session1.css';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Session1() {
  return (
    <motion.div
      className="session-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="session-title" variants={itemVariants}>
        <FaRocket className="icon" /> About Techzeon
      </motion.h1>

      <motion.div className="session-section" variants={itemVariants}>
        <p className="session-text">
          <FaRocket className="icon" />
          Techzeon is the flagship technical festival of RGUKT Ongole, designed to ignite curiosity,
          creativity, and innovation among students. It serves as a platform for aspiring engineers
          and technologists to showcase their talents, engage in hands-on experiences, and compete
          in intellectually stimulating events.
        </p>
      </motion.div>

      <motion.div className="session-section" variants={itemVariants}>
        <p className="session-text">
          <FaUsers className="icon" />
          Techzeon isn’t just about competition — it’s about community, learning, and passion for
          technology. Whether you're a first-time coder or a final-year innovator, Techzeon has
          something to challenge and inspire you.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Session1;
