import { useEffect } from 'react';

const useEscapeClose = (open, handleCloseForm) => {
  useEffect(() => {
    if (open) {
      const handleEscape = (e) => {
        if (e.code === 'Escape') {
          handleCloseForm();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [open, handleCloseForm]);
};

export default useEscapeClose;
