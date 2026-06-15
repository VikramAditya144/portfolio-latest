import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Footer, Hero, Honors, Journey, Navbar, ScrollProgress, Skills, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='aurora-bg' />
        <ScrollProgress />
        <div className='relative z-10'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Skills />
          <Tech />
          <Works />
          <Honors />
          <Journey />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
