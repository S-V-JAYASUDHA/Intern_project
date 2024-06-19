import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const images = [
  'images/wri1.jpeg',
  'images/wr2.jpg'
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="image-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className="collaborate-image"
          style={{ display: index === currentImage ? 'block' : 'none' }}
        />
      ))}
      <div className="text-overlay">
        <h1>Welcome to our website...</h1>
      </div>
    </div>
  );
};

export default ImageSlider;
