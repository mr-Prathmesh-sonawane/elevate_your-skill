import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Information from './pages/Information';
import './App.css';
import CareerVideo from './pages/CareerVideo';
import RecommendChannels from './pages/RecommendChannels';
import InterviewQuestions from './pages/InterviewQuestions';
import PersonalizedPath from './pages/PersonalizedLearningPath';
import UnderProgress from './pages/UnderProgress';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/check-auth', {
          withCredentials: true,
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
          setUsername(response.data.username);
        }
      } catch (error) {
        console.error('Not authenticated', error);
        setIsAuthenticated(false);
      }
    };
    checkAuth(); // Close the useEffect properly
  }, []); // Add an empty dependency array to run the effect once

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isAuthenticated={isAuthenticated} logout={logout} username={username} />
        <Routes>
          <Route path="*" element={<HomePage username={username} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin login={login} />} />
          <Route path="/information" element={<Information />} />
          <Route path="/create-video" element={<CareerVideo username={username} />} />
          <Route path="/recommend-channels" element={<RecommendChannels username={username} />} />
          <Route path="/interview-questions" element={<InterviewQuestions username={username} />} />
          <Route path='/learning-path' element={<PersonalizedPath/>}/>
          <Route path='/underprogress' element={<UnderProgress/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
