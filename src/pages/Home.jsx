import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import MainFeature from '../components/MainFeature'
import getIcon from '../utils/iconUtils'

export default function Home() {
  const [showInfo, setShowInfo] = useState(false)
  
  const Info = getIcon('Info')
  const X = getIcon('X')
  
  const toggleInfo = () => {
    setShowInfo(prev => !prev)
  }
  
  const showWelcomeToast = () => {
    toast.success("Welcome to Avatr! Start creating your custom avatar now.", {
      icon: "👋"
    })
  }
  
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Create Your Perfect Digital Avatar
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-surface-600 dark:text-surface-300">
          Customize every detail to express your unique style with our interactive avatar builder
        </p>

        <motion.button 
          onClick={showWelcomeToast}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 btn btn-primary px-6 py-3"
        >
          Get Started
        </motion.button>
      </div>
      
      <MainFeature />
      
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
          <motion.button
            onClick={toggleInfo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600"
            aria-label="Show information"
          >
            {showInfo ? <X size={20} /> : <Info size={20} />}
          </motion.button>
        </div>
        
        {showInfo && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="neu-card mb-10"
          >
            <p className="mb-4">
              Avatr provides a simple yet powerful avatar creation experience. Follow these steps:
            </p>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Choose your avatar's base features from the available categories</li>
              <li>Customize colors, sizes, and positions to your liking</li>
              <li>Preview your creation in real-time</li>
              <li>Download your avatar in your preferred format</li>
            </ol>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Components</h3>
            <p className="text-surface-600 dark:text-surface-300">
              Select from a variety of faces, hairstyles, accessories and more
            </p>
          </div>
          
          <div className="card">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <span className="text-secondary text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customize</h3>
            <p className="text-surface-600 dark:text-surface-300">
              Adjust colors, sizes, and positions to create your unique look
            </p>
          </div>
          
          <div className="card">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <span className="text-accent text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Download</h3>
            <p className="text-surface-600 dark:text-surface-300">
              Save your creation in multiple formats for use anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}