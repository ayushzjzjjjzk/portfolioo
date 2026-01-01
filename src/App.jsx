import React from 'react'
import Navbar from './components/ui/navbar.jsx'
import Hero from './components/ui/Hero.jsx'
import MagicCard from './components/ui/Magic-card.jsx'
import Experience from './components/ui/experience.jsx'
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
        title="Project Title"
        description="Enrich Hair Salon is a salon booking system with
         online payments and an admin dashboard for managing services and bookings."
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
    website="#"
  source="#"
        />
        <MagicCard
        icon="💰"
        title="Project Title"
        description="Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and bookings."
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
    website="#"
  source="#"/>

    
        <MagicCard
        icon="💰"
        title="Project Title"
        description="Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and booking."
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
    website="#"
  source="#"
  />
       
        <MagicCard
        icon="💰"
        title="Project Title"
        description="Enrich Hair Salon is a salon booking system with online payments and an admin dashboard for managing services and booking."
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
    website="#"
  source="#"
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
