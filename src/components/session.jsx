import React from 'react';

export default function VideoBackgroundSection() {
  return (
    <section style={styles.section}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
        src="/gif.mp4"
        type="video/mp4"
      />
      
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    height: '100vh', // Full screen
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    textAlign: 'center',
    paddingTop: '35vh',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.5rem',
  },
};
