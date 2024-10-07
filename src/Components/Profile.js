import React, { useState, useEffect } from 'react';
import { auth, database } from '../firebase'; // Import the database
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { ref, get, update } from 'firebase/database'; // Import database methods
import { useTheme } from '../context/ThemeContext';
import userdark from '../Images/user-dark.png';
import userlight from '../Images/user-light.png';

function Profile() {
  const { theme } = useTheme();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Set initial loading to true
  const [error, setError] = useState(null);
  const [hometown, setHometown] = useState(''); // State to store hometown
  const [cityInput, setCityInput] = useState(''); // State for updating city

  // Function to fetch the user's hometown from Firebase and store in localStorage
  const fetchHometown = async (uid) => {
    try {
      const userRef = ref(database, `users/${uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const userHometown = data.hometown || 'Nellore'; // Default to "Nellore" if no hometown is set
        setHometown(userHometown);
        localStorage.setItem('hometown', userHometown); // Store hometown in localStorage
      } else {
        setHometown('Nellore');
        localStorage.setItem('hometown', 'Nellore'); // Default hometown if no data
      }
    } catch (error) {
      console.error('Error fetching hometown:', error);
    }
  };

  // Function to update the hometown in Firebase and localStorage
  const updateHometown = async (uid, newHometown) => {
    try {
      const userRef = ref(database, `users/${uid}`);
      await update(userRef, { hometown: newHometown });
      setHometown(newHometown);
      setCityInput(''); // Reset input after updating

      // Store updated hometown in localStorage
      localStorage.setItem('hometown', newHometown);
    } catch (error) {
      console.error('Error updating hometown:', error);
    }
  };

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider);
      const userData = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL || (theme === 'light' ? userlight : userdark),
        email: result.user.email,
        uid: result.user.uid,
      };
      setUser(userData);

      // Fetch hometown from database
      fetchHometown(userData.uid);
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setHometown('');

      // Clear hometown from localStorage on sign out
      localStorage.removeItem('hometown');
    } catch (error) {
      console.error('Error during sign-out:', error);
      setError('Failed to sign out. Please try again.');
    }
  };

  // Use Firebase's onAuthStateChanged to check if a user is already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL || (theme === 'light' ? userlight : userdark),
          email: currentUser.email,
          uid: currentUser.uid,
        };
        setUser(userData);

        // Check if hometown is stored in localStorage
        const storedHometown = localStorage.getItem('hometown');
        if (storedHometown) {
          setHometown(storedHometown); // Use the hometown stored in localStorage
        } else {
          // If no hometown is found in localStorage, fetch it from Firebase
          fetchHometown(currentUser.uid);
        }
      }
      setLoading(false); // Set loading to false once auth state is checked
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, [theme]);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner while auth state is being checked
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
            height: '50vh',
            gap: '20px',
          }}
        >
          {error && <div style={{ color: 'red' }}>{error}</div>}
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
              <p>Hometown: {hometown}</p> {/* Display hometown */}
              <button onClick={handleSignOut} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
                Sign Out
              </button>

              {/* Hometown and Input for updating hometown */}
              <div style={{ marginTop: '20px' }}>
                {/* Display the current hometown */}
                <p>Hometown: {hometown}</p>

                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="Enter new hometown"
                  style={{ padding: '10px', fontSize: '16px' }}
                />
                <button
                  onClick={() => updateHometown(user.uid, cityInput)}
                  style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
                >
                  Update Hometown
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Profile;
