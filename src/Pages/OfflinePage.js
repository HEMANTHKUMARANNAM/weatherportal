import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OfflinePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => {
      if (navigator.onLine) {
        navigate('/home'); // Redirect to the main page when back online
      }
    };

    // Add event listeners to detect when the user comes online or goes offline
    window.addEventListener('online', handleOnline);

    // Clean up the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [navigate]);

  return (
    <div>
      <h2>You are offline</h2>
      <p>Please check your internet connection. The app will automatically reload when you are back online.</p>
    </div>
  );
};

export default OfflinePage;
