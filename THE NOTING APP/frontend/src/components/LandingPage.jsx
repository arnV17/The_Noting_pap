import React, { useState, useRef, useEffect } from 'react';
import DocumentUpload from './DocumentUpload';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import Chatbot from './Chatbot';
import QuizSection from './quizz/QuizzPage';
import VariableProximity from './ui/VariableProximity';
import { useDocumentText } from './DocumentTextContext';
// Import desired icons from react-icons
import { FiDownload, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import AnimatedBackground from './ui/AnimatedBackground';
import { exportMarkdownToPdf } from '../lib/exportMarkdownToPdf';

const LandingPage = () => {
  const containerRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const { documentText, setDocumentText } = useDocumentText();
  const [showUploader, setShowUploader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUploader(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFileUpload = async (file) => {
    setUploadedFile(file);
    setIsProcessing(true);
    setDownloadUrl(null); // Reset previous results
    setDocumentText('');
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('https://the-noting-app.onrender.com/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) throw new Error('Upload failed');
      
      const data = await response.json();
      console.log('data from upload', data);
      setDownloadUrl(data.downloadUrl);
      setDocumentText(data.textContent || '');

    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    if (!documentText) return;
    exportMarkdownToPdf(documentText, uploadedFile ? `${uploadedFile.name.split('.')[0]}-summary.pdf` : 'summary.pdf');
  };
  
  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <div className="container" ref={containerRef}>
            <div className="hero-content">
              <h1 className="hero-title swoop-in-blur swoop-delay-1">
                <VariableProximity
                  label={'Transform Your Documents into Smart Notes'}
                  className={'hero-title swoop-in-blur swoop-delay-1'}
                  fromFontVariationSettings="'wght' 600, 'opsz' 9"
                  toFontVariationSettings="'wght' 1800, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff='linear'
                  highlightWords={['Smart', 'Notes']}
                  />
              </h1> 
              
              <p className="hero-subtitle swoop-in-blur swoop-delay-2">
                Upload any document and get AI-powered summaries, key insights, and organized notes in seconds. Perfect for students, researchers, and professionals.
              </p>
              
              <div
                style={{
                  transition: 'all 0.7s',
                  opacity: showUploader ? 1 : 0,
                  filter: showUploader ? 'blur(0px)' : 'blur(8px)',
                  pointerEvents: showUploader ? 'auto' : 'none',
                  marginBottom: 20,
                }}
              >
                <DocumentUpload 
                  onFileUpload={handleFileUpload}
                  isProcessing={isProcessing}
                  uploadedFile={uploadedFile}
                  downloadUrl={downloadUrl}
                  onOpenChat={() => setIsChatbotOpen(true)}
                />
                {/* Removed the long Open Chat button below */}
              </div>
            </div>
          </div>
        </section>
        
        {documentText && <QuizSection docText={documentText} />}
        <Features />
        
        {console.log("documentText in LandingPage before Chatbot", documentText)}
      </main>

      {documentText && !isChatbotOpen && (
        <button 
        className="floating-chatbot-btn" 
        onClick={() => setIsChatbotOpen(true)}
        title="Open Chatbot"
        >
           <FaRobot />
        </button>
      )}

      {console.log("documentText in LandingPage before Chatbot", documentText)}
      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
      
      <Footer />
    </div>
  );
};

export default LandingPage;