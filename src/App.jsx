import React from 'react'
import Navbar from './components/ui/navbar.jsx'
import Hero from './components/ui/Hero.jsx'
import MagicCard from './components/ui/Magic-card.jsx'
import Experience from './components/ui/Experience.jsx'
import Skills from './components/ui/Skills.jsx'
import Contact from './components/ui/Contact.jsx'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar  />

      <Hero />

      <section id='projects' className='min-h-screen bg-black py-20'>
      <h1 className=' text-4xl text-white font-semibold  flex justify-center'>
        proof of work
       </h1>

       <div className='p-10 flex justify-center  gap-10 flex-wrap  flex-row bg-black w-full'>
        <div className='max-w-6xl mx-auto px-6 space-y-10'>

        <MagicCard
        icon="💰"
        title="movie website "
        description="create an movie application using react and js which help to find your favorate movies ."
        tech={[
    "React ",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "js",
  ]}
    website ="https://movie-iota-inky.vercel.app/"
  source ="https://github.com/ayushzjzjjjzk/movie"
      />
       

    
        <MagicCard
        icon="⌛"
        title="Project Title"
        description="An counter application have features to staart pause and reset ."
        tech={[
    "React",
    "js",
    "Tailwind CSS",
    "Node.js",
    
  ]}
    website="https://counter-lovat-two.vercel.app/"
  source="https://github.com/ayushzjzjjjzk/counter"
  />
       
        <MagicCard
        icon="🛒"
        title="superkicks"
        description="application for sneakers "
        tech={[
    "React",
    "MUI",
    "Tailwind CSS",
    "Razorpay",
    "Nodemailer",
    "Node.js",
    "Express.js",
    "MongoDB",
  ]}
    website="https://super-kicks-kappa.vercel.app/"
  source="https://github.com/ayushzjzjjjzk/SuperKicks"
         />

         <MagicCard
        icon="🎬"
        title="chess "
        description="chess website with game logic and UI."
        tech={[
    "React ",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "js",
  ]}
    website ="https://chess-delta-plum.vercel.app/"
  source ="https://github.com/ayushzjzjjjzk/chess"
      />
        </div>
        </div>

      </section>

      <Experience />

      <Skills />

      <Contact />

    </div>
  )
}

export default App
