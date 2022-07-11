import s from './Modal.module.css';

import { useEffect } from 'react';

export default function Modal ({ activeImgURL, activeImgAlt, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
          onClose();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
          window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
  onClose();
    }
  };

    
    return (
      <div className={s.Overlay} onClick={onOverlayClick}>
        <div className={s.Modal}>
          <img src={activeImgURL} alt={activeImgAlt} />
        </div>
      </div>
    );
  }

