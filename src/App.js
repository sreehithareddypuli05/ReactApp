import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import VideoBackgroundSection from './components/session';
import Session1 from './components/Session1';
import Session2 from './components/Session2';
import Footer from './components/footer';

import Events from './components/events/Events';
import Ui from './components/events/Ui';
import DataScience from './components/events/DataScience';
import Web from './components/events/Web';
import CodeContest from './components/events/CodeContest';
import PaperPresentation from './components/events/PaperPresentation';
import ProjectExpo from './components/events/ProjectExpo';
import TechnicalQuiz from './components/events/TechnicalQuiz';
import Details from './components/Details';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';



export default function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <Router>
        <Header />

        <Routes>
          {/* Homepage Route: All components */}
          <Route
            path="/"
            element={
              <>
                <VideoBackgroundSection />
                <Session1 />
                <Session2 />
                <Footer />
              </>
            }
          />

          {/* About Route */}
          <Route path="/about" element={<Session1 />} />

          {/* Events Route */}
          <Route path="/events" element={<Events />} />

          {/* UI/UX Hackathon Details Route */}
          <Route path="/events/ui" element={<Ui />} />
          <Route path="/events/datascience" element={<DataScience />} />
          <Route path="/events/web" element={<Web />} />
          <Route path="/events/coding" element={<CodeContest />} />
          <Route path="/events/paper" element={<PaperPresentation />} />
          <Route path="/events/projectexpo" element={<ProjectExpo />} />
          <Route path="/events/quiz" element={<TechnicalQuiz />} />
          <Route path="/team" element={<Details />} />
          <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
