import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import About from './pages/About';
import Contact from './pages/Contact';
import EducationCert from './pages/EducationCert';
// import ProjectExp from './pages/Project_exp';
import Skills from './pages/Skills';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Contacts from './pages/Contacts';
import ProjHome from './pages/components/ProjHome';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Frontpage />
              <About />
              <ProjHome/>
              {/* <ProjectExp /> */}
              <Contact />
              {/* <Contacts/> */}
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/education_and_certifications"
          element={
            <>
              <EducationCert /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/tech"
          element={
            <>
              <Skills />
              <Footer />
            </>
          }
        />
        {/* <Route exact path="/admin/login" element={<Login />} />
        <Route exact path="/user-backend" element={<AdminUser />} /> */}
      </Routes>
    </>
  );
};

export default App;
