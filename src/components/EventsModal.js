import React, { useState } from 'react';
import './EventsModal.css';

import img1 from '../assets/events/099b41f5-527e-4acf-8b4b-df81bb845a08.jpeg';
import img2 from '../assets/events/17d55873-bcb4-4842-b983-bc1df44199d3.jpeg';
import img3 from '../assets/events/1d64e0d7-896c-4ae6-b270-903ce430231b.jpeg';
import img4 from '../assets/events/4362fe26-22e0-4c87-bbc0-9025d8a94b44.jpeg';
import img5 from '../assets/events/77d967ec-d1d0-4c38-8039-326d757adf67.jpeg';
import img6 from '../assets/events/8454c3f0-4978-4668-911c-42d8ade03bf6.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

const EventsModal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setSelectedImage(null);
    onClose();
  };

  return (
    <div className="events-overlay" onClick={handleClose}>
      <div className="events-modal" onClick={(e) => e.stopPropagation()}>
        <div className="events-modal-header">
          <h2>Events</h2>
          <button className="events-close" onClick={handleClose} aria-label="Close">
            ✕
          </button>
        </div>

        {selectedImage !== null ? (
          <div className="events-lightbox">
            <button 
              className="lightbox-back" 
              onClick={() => setSelectedImage(null)}
              aria-label="Back to gallery"
            >
              ← Back
            </button>
            <div className="lightbox-image">
              <img src={images[selectedImage]} alt={`Event ${selectedImage + 1}`} />
            </div>
            <div className="lightbox-nav">
              <button 
                className="lightbox-arrow"
                onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
                aria-label="Previous"
              >
                ‹
              </button>
              <span className="lightbox-counter">{selectedImage + 1} / {images.length}</span>
              <button 
                className="lightbox-arrow"
                onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        ) : (
          <div className="events-grid">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="events-item"
                onClick={() => setSelectedImage(index)}
                role="button"
                tabIndex={0}
                aria-label={`View event ${index + 1}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(index)}
              >
                <img src={img} alt={`Event ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsModal;
