import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import getIcon from './utils/iconUtils'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  
  const Moon = getIcon('Moon')
  const Sun = getIcon('Sun')
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-xl p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" fill="white"/>
              <path d="M12 16.5C7.30558 16.5 3.5 20.3056 3.5 25H20.5C20.5 20.3056 16.6944 16.5 12 16.5Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary">Avatr</h1>
        </div>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-surface-100 dark:bg-surface-800"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer className="container mx-auto px-4 py-6 mt-16 border-t border-surface-200 dark:border-surface-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-surface-500">© {new Date().getFullYear()} Avatr. All rights reserved.</p>
          <p className="text-sm text-surface-500">Crafted with care</p>
        </div>
      </footer>
      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        toastClassName="rounded-xl shadow-soft"
      />
    </div>
  )
}