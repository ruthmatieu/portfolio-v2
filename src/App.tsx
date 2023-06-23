import React from 'react';
import "./App.css";
import Menu from './components/Menu';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div style={{ backgroundColor: '#000D18' }} className="py-20 lg:py-40">
      <div className="mx-auto w-full px-6" style={{ maxWidth: '1100px' }}>
        <div className="lg:fixed">
          <Intro />
          <div className='hidden lg:block'>
            <Menu />
          </div>
         
        </div>
        <div className="lg:ml-[500px]">
          <About />
          <Experience />
          <Projects />
          <BlogPosts />
        </div>
      </div>
    </div>
  );
}

export default App;

