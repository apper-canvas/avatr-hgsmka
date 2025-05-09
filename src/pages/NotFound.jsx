import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import getIcon from '../utils/iconUtils'

export default function NotFound() {
  const Home = getIcon('Home')
  const AlertTriangle = getIcon('AlertTriangle')
  
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-xl"
      >
        <div className="w-24 h-24 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mb-6">
          <AlertTriangle size={40} className="text-secondary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 mb-8">
          Oops! We couldn't find the page you're looking for. Let's get you back to creating avatars.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="btn btn-primary flex items-center gap-2 px-6 py-3"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}