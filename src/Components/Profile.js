import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useTheme } from '../context/ThemeContext';
import userdark from '../Images/user-dark.png';
import userlight from '../Images/user-light.png';

function Profile() {
  const { theme } = useTheme();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to hold error messages

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    setError(null); // Reset error before sign-in attempt

    try {
      const result = await signInWithPopup(auth, provider);
      const userData = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL || (theme === 'light' ? userlight : userdark), // Fallback image if photoURL is not available
        email: result.user.email,
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('Failed to sign in. Please try again.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error during sign-out:', error);
      setError('Failed to sign out. Please try again.'); // Set error message
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="profile-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh', // Full viewport height to center content vertically
            gap: '20px',
          }}
        >
          {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message if exists */}
          {!user ? (
            <button onClick={handleSignIn} style={{ padding: '10px 20px', fontSize: '16px' }}>
              Sign in with Google
            </button>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <img
                src={user.photoURL}
                alt="User Profile"
                style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <h3>{user.displayName}</h3>
              <button onClick={handleSignOut} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Profile;
