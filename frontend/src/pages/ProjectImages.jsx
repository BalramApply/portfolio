import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Eye, X, ZoomIn, ZoomOut, RotateCw,
  Download, ChevronLeft, ChevronRight
} from 'lucide-react';
import './ProjectImages.css';
import { WaveCanvas } from "@/components/WaveEmbed";
const projectsGallery = {
  2: {
     name: ".NET MAUI",
     images: [
    "/Assets/Screenshots/maui22.png",
    "/Assets/Screenshots/maui21.png",
    "/Assets/Screenshots/maui20.png",
    "/Assets/Screenshots/maui19.png",
    "/Assets/Screenshots/maui18.png",
    "/Assets/Screenshots/maui17.png",
    "/Assets/Screenshots/maui16.png",
    "/Assets/Screenshots/maui15.png",
    "/Assets/Screenshots/maui14.png",
    "/Assets/Screenshots/maui13.png",
    "/Assets/Screenshots/maui12.png",
    "/Assets/Screenshots/maui11.png",
    "/Assets/Screenshots/maui10.png",
    "/Assets/Screenshots/maui9.png",
    "/Assets/Screenshots/maui8.png",
    "/Assets/Screenshots/maui7.png",
    "/Assets/Screenshots/maui6.png",
    "/Assets/Screenshots/maui5.png",
    "/Assets/Screenshots/maui4.png",
    "/Assets/Screenshots/maui3.png",
    "/Assets/Screenshots/maui2.png",
    "/Assets/Screenshots/maui1.png",
    ],
  },
  3: {
     name: "Personal Finance Tracker",
     images: [
    "/Assets/Screenshots/66.jpg",
    "/Assets/Screenshots/67.jpg",
    "/Assets/Screenshots/68.jpg",
    "/Assets/Screenshots/69.jpg",
    "/Assets/Screenshots/70.jpg",
    "/Assets/Screenshots/71.jpg",
    "/Assets/Screenshots/72.jpg",
    "/Assets/Screenshots/73.jpg",
    "/Assets/Screenshots/74.jpg",
    "/Assets/Screenshots/75.jpg",
    ],
  },
};

const ProjectGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsGallery[id];
const images = project?.images || [];
const projectName = project?.name || "Project";


  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
    resetImageState();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    resetImageState();
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    resetImageState();
  }, [images.length]);

  const resetImageState = () => {
    setZoomLevel(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 5));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  const rotate = () => setRotation(prev => prev + 90);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = images[currentImageIndex];
    link.download = `screenshot-${currentImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showModal) return;
      switch (e.key) {
        case 'Escape': closeModal(); break;
        case 'ArrowLeft': prevImage(); break;
        case 'ArrowRight': nextImage(); break;
        case '+':
        case '=': zoomIn(); break;
        case '-': zoomOut(); break;
        case 'r':
        case 'R': rotate(); break;
        default: break;
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showModal, nextImage, prevImage]);

  if (!images || images.length === 0) {
    return (
      <div className="gallery-container">
        <div className="empty-state">
          <h2>No images available for this project</h2>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container"><div className="absolute inset-0 z-0 pointer-events-none">
                <WaveCanvas />
            </div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Back to Projects
      </button>
      <h1 className="gallery-title">{projectName} Images</h1>


      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={src} alt={`Screenshot ${index + 1}`} className="thumbnail" />
            <div className="overlay"><Eye size={20} /></div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          <div className="modal-container">
            <div className="modal-toolbar">
              <ChevronLeft onClick={prevImage} className="nav-btn" />
              <ChevronRight onClick={nextImage} className="nav-btn" />
              <ZoomIn onClick={zoomIn} className="tool-btn" />
              <ZoomOut onClick={zoomOut} className="tool-btn" />
              <RotateCw onClick={rotate} className="tool-btn" />
              <Download onClick={downloadImage} className="tool-btn" />
              <X onClick={closeModal} className="tool-btn close-btn" />
            </div>
            <div
              className="modal-image-wrapper"
              onMouseDown={handleMouseDown}
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                cursor: zoomLevel > 1 ? 'grab' : 'default'
              }}
            >
              <img src={images[currentImageIndex]} alt="Full view" className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;