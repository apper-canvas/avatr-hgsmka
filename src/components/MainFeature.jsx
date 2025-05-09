import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import getIcon from '../utils/iconUtils'

export default function MainFeature() {
  // Icon declarations
  const Download = getIcon('Download')
  const RefreshCw = getIcon('RefreshCw')
  const Sliders = getIcon('Sliders')
  const EyeIcon = getIcon('Eye')
  const Smile = getIcon('Smile')
  const User = getIcon('User')
  const ShirtIcon = getIcon('Shirt')
  const Palette = getIcon('Palette')
  const Save = getIcon('Save')
  const Sparkles = getIcon('Sparkles')
  const Layers = getIcon('Layers')
  
  // State for avatar customization
  const [activeTab, setActiveTab] = useState('face')
  const [previewMode, setPreviewMode] = useState(false)
  const [avatarOptions, setAvatarOptions] = useState({
    faceShape: 'round',
    faceColor: '#F8D5C2',
    eyeStyle: 'normal',
    eyeColor: '#634E34',
    hairStyle: 'short',
    hairColor: '#634E34',
    mouthStyle: 'smile',
    clothingStyle: 'tshirt',
    clothingColor: '#6C63FF',
    backgroundColor: '#ffffff'
  })
  
  // Available options for each category
  const options = {
    faceShapes: ['round', 'square', 'oval', 'heart', 'long'],
    eyeStyles: ['normal', 'round', 'slim', 'wink', 'closed'],
    hairStyles: ['short', 'long', 'curly', 'straight', 'bald', 'bob'],
    mouthStyles: ['smile', 'laugh', 'neutral', 'surprise', 'serious'],
    clothingStyles: ['tshirt', 'formal', 'hoodie', 'sweater', 'tank']
  }
  
  const handleOptionChange = (category, value) => {
    setAvatarOptions(prev => ({
      ...prev,
      [category]: value
    }))
  }
  
  const handleColorChange = (category, color) => {
    setAvatarOptions(prev => ({
      ...prev,
      [category]: color
    }))
  }
  
  const randomizeAvatar = () => {
    const randomFaceShape = options.faceShapes[Math.floor(Math.random() * options.faceShapes.length)]
    const randomEyeStyle = options.eyeStyles[Math.floor(Math.random() * options.eyeStyles.length)]
    const randomHairStyle = options.hairStyles[Math.floor(Math.random() * options.hairStyles.length)]
    const randomMouthStyle = options.mouthStyles[Math.floor(Math.random() * options.mouthStyles.length)]
    const randomClothingStyle = options.clothingStyles[Math.floor(Math.random() * options.clothingStyles.length)]
    
    const randomColors = {
      faceColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      eyeColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      hairColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      clothingColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
    }
    
    setAvatarOptions({
      faceShape: randomFaceShape,
      faceColor: randomColors.faceColor,
      eyeStyle: randomEyeStyle,
      eyeColor: randomColors.eyeColor,
      hairStyle: randomHairStyle,
      hairColor: randomColors.hairColor,
      mouthStyle: randomMouthStyle,
      clothingStyle: randomClothingStyle,
      clothingColor: randomColors.clothingColor,
      backgroundColor: avatarOptions.backgroundColor
    })
    
    toast.info("Avatar randomized! Feel free to make further adjustments.", {
      icon: "🎲"
    })
  }
  
  const saveAvatar = () => {
    // This would connect to a real backend in a full implementation
    // For the MVP, just show a toast notification
    toast.success("Avatar saved successfully! In a full version, this would be stored to your collection.", {
      icon: "💾"
    })
  }
  
  const downloadAvatar = () => {
    // In a real implementation, this would generate and download the avatar
    // For the MVP, just show a toast notification
    toast.success("Your avatar has been downloaded! In a full version, this would generate a PNG file.", {
      icon: "📥"
    })
  }
  
  const togglePreviewMode = () => {
    setPreviewMode(prev => !prev)
    if (!previewMode) {
      toast.info("Preview mode enabled - see your avatar without the UI", {
        icon: "👁️"
      })
    }
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Avatar preview area */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div 
              className="avatar-canvas w-full max-w-md mx-auto"
              style={{ backgroundColor: avatarOptions.backgroundColor }}
            >
              <div className="aspect-square relative flex items-center justify-center">
                {/* This would be a real SVG-based avatar in a full implementation */}
                <div className="relative w-3/4 h-3/4">
                  {/* Face shape */}
                  <div 
                    className={`absolute inset-0 rounded-full ${avatarOptions.faceShape === 'square' ? 'rounded-2xl' : avatarOptions.faceShape === 'oval' ? 'rounded-[40%]' : 'rounded-full'}`}
                    style={{ backgroundColor: avatarOptions.faceColor }}
                  />
                  
                  {/* Eyes */}
                  <div className="absolute w-full top-1/3 flex justify-center">
                    <div className="flex gap-8 w-full justify-center">
                      <div 
                        className={`w-5 h-${avatarOptions.eyeStyle === 'slim' ? '2' : avatarOptions.eyeStyle === 'round' ? '5 rounded-full' : '4'} rounded-lg`}
                        style={{ backgroundColor: avatarOptions.eyeColor }}
                      />
                      <div 
                        className={`w-5 h-${avatarOptions.eyeStyle === 'slim' ? '2' : avatarOptions.eyeStyle === 'round' ? '5 rounded-full' : '4'} rounded-lg`}
                        style={{ backgroundColor: avatarOptions.eyeColor }}
                      />
                    </div>
                  </div>
                  
                  {/* Hair */}
                  <div className="absolute top-0 left-0 right-0">
                    {avatarOptions.hairStyle === 'short' && (
                      <div className="w-full h-16 rounded-t-full overflow-hidden"
                        style={{ backgroundColor: avatarOptions.hairColor }}
                      />
                    )}
                    {avatarOptions.hairStyle === 'long' && (
                      <div className="w-full h-32 rounded-t-full overflow-hidden"
                        style={{ backgroundColor: avatarOptions.hairColor }}
                      />
                    )}
                    {avatarOptions.hairStyle === 'curly' && (
                      <div className="w-full h-20 rounded-t-full overflow-hidden"
                        style={{ backgroundColor: avatarOptions.hairColor }}
                      >
                        <div className="flex justify-between px-2">
                          <div className="w-5 h-5 rounded-full mt-16" style={{ backgroundColor: avatarOptions.faceColor }}></div>
                          <div className="w-5 h-5 rounded-full mt-14" style={{ backgroundColor: avatarOptions.faceColor }}></div>
                          <div className="w-5 h-5 rounded-full mt-16" style={{ backgroundColor: avatarOptions.faceColor }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Mouth */}
                  <div className="absolute bottom-1/4 w-full flex justify-center">
                    {avatarOptions.mouthStyle === 'smile' && (
                      <div className="w-12 h-5 border-b-4 border-black rounded-b-full"></div>
                    )}
                    {avatarOptions.mouthStyle === 'laugh' && (
                      <div className="w-12 h-6 bg-black rounded-b-full"></div>
                    )}
                    {avatarOptions.mouthStyle === 'neutral' && (
                      <div className="w-8 h-1 bg-black rounded-full"></div>
                    )}
                    {avatarOptions.mouthStyle === 'surprise' && (
                      <div className="w-6 h-6 bg-black rounded-full"></div>
                    )}
                  </div>
                  
                  {/* Clothing */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full">
                    {avatarOptions.clothingStyle === 'tshirt' && (
                      <div className="w-full h-24 rounded-t-lg" style={{ backgroundColor: avatarOptions.clothingColor }}></div>
                    )}
                    {avatarOptions.clothingStyle === 'formal' && (
                      <div className="relative w-full h-24">
                        <div className="absolute left-0 w-1/2 h-full rounded-tr-3xl" style={{ backgroundColor: avatarOptions.clothingColor }}></div>
                        <div className="absolute right-0 w-1/2 h-full rounded-tl-3xl" style={{ backgroundColor: avatarOptions.clothingColor }}></div>
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-12 bg-white rounded-b-lg"></div>
                      </div>
                    )}
                    {avatarOptions.clothingStyle === 'hoodie' && (
                      <div className="relative w-full h-24 rounded-t-lg" style={{ backgroundColor: avatarOptions.clothingColor }}>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 rounded-t-lg" style={{ backgroundColor: `${avatarOptions.clothingColor}99` }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Controls overlay */}
            <AnimatePresence>
              {!previewMode && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 flex gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={randomizeAvatar}
                    className="avatar-control"
                    aria-label="Randomize avatar"
                  >
                    <RefreshCw size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={saveAvatar}
                    className="avatar-control"
                    aria-label="Save avatar"
                  >
                    <Save size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={downloadAvatar}
                    className="avatar-control"
                    aria-label="Download avatar"
                  >
                    <Download size={20} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Preview mode toggle */}
            <div className="absolute bottom-4 right-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePreviewMode}
                className={`p-3 rounded-full ${previewMode ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700'}`}
                aria-label="Toggle preview mode"
              >
                <EyeIcon size={20} />
              </motion.button>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {['#ffffff', '#F0F4F8', '#FFEFD5', '#F0FFF0', '#FFEBEE'].map(color => (
                <button
                  key={color}
                  onClick={() => handleColorChange('backgroundColor', color)}
                  className="w-8 h-8 rounded-full border-2 border-surface-300 dark:border-surface-600"
                  style={{ backgroundColor: color }}
                  aria-label={`Set background to ${color}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Customization panel */}
        <AnimatePresence mode="wait">
          {!previewMode && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-full lg:w-1/2 card"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('face')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'face' ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                >
                  <User size={18} />
                  <span>Face</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('eyes')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'eyes' ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                >
                  <EyeIcon size={18} />
                  <span>Eyes</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('hair')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'hair' ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                >
                  <Layers size={18} />
                  <span>Hair</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('mouth')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'mouth' ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                >
                  <Smile size={18} />
                  <span>Mouth</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('clothing')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === 'clothing' ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                >
                  <ShirtIcon size={18} />
                  <span>Clothing</span>
                </button>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    {activeTab === 'face' && 'Face Options'}
                    {activeTab === 'eyes' && 'Eye Options'}
                    {activeTab === 'hair' && 'Hair Options'}
                    {activeTab === 'mouth' && 'Mouth Options'}
                    {activeTab === 'clothing' && 'Clothing Options'}
                  </h3>
                  
                  <div className="flex items-center">
                    <Sparkles size={18} className="mr-2 text-primary" />
                    <span className="text-sm">Customize your avatar</span>
                  </div>
                </div>
                
                {/* Dynamic form based on active tab */}
                {activeTab === 'face' && (
                  <div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Face Shape</label>
                      <div className="flex flex-wrap gap-2">
                        {options.faceShapes.map(shape => (
                          <button
                            key={shape}
                            onClick={() => handleOptionChange('faceShape', shape)}
                            className={`px-3 py-2 rounded-lg text-sm capitalize ${avatarOptions.faceShape === shape ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                          >
                            {shape}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Face Color</label>
                      <div className="flex flex-wrap gap-3">
                        {['#F8D5C2', '#FFDFC4', '#EFD3B9', '#D8A990', '#BB917B', '#9B6B4E', '#774936', '#5C3425'].map(color => (
                          <button
                            key={color}
                            onClick={() => handleColorChange('faceColor', color)}
                            className={`w-10 h-10 rounded-lg transition-transform ${avatarOptions.faceColor === color ? 'ring-2 ring-primary scale-110' : ''}`}
                            style={{ backgroundColor: color }}
                            aria-label={`Set face color to ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'eyes' && (
                  <div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Eye Style</label>
                      <div className="flex flex-wrap gap-2">
                        {options.eyeStyles.map(style => (
                          <button
                            key={style}
                            onClick={() => handleOptionChange('eyeStyle', style)}
                            className={`px-3 py-2 rounded-lg text-sm capitalize ${avatarOptions.eyeStyle === style ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Eye Color</label>
                      <div className="flex flex-wrap gap-3">
                        {['#634E34', '#3D3121', '#634A25', '#1E1D1B', '#2E5090', '#366339', '#542A26', '#634E34'].map(color => (
                          <button
                            key={color}
                            onClick={() => handleColorChange('eyeColor', color)}
                            className={`w-10 h-10 rounded-lg transition-transform ${avatarOptions.eyeColor === color ? 'ring-2 ring-primary scale-110' : ''}`}
                            style={{ backgroundColor: color }}
                            aria-label={`Set eye color to ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'hair' && (
                  <div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Hair Style</label>
                      <div className="flex flex-wrap gap-2">
                        {options.hairStyles.map(style => (
                          <button
                            key={style}
                            onClick={() => handleOptionChange('hairStyle', style)}
                            className={`px-3 py-2 rounded-lg text-sm capitalize ${avatarOptions.hairStyle === style ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Hair Color</label>
                      <div className="flex flex-wrap gap-3">
                        {['#634E34', '#2A1B0E', '#532C1B', '#855939', '#C9AF90', '#DCB881', '#A74A28', '#220F00'].map(color => (
                          <button
                            key={color}
                            onClick={() => handleColorChange('hairColor', color)}
                            className={`w-10 h-10 rounded-lg transition-transform ${avatarOptions.hairColor === color ? 'ring-2 ring-primary scale-110' : ''}`}
                            style={{ backgroundColor: color }}
                            aria-label={`Set hair color to ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'mouth' && (
                  <div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Mouth Style</label>
                      <div className="flex flex-wrap gap-2">
                        {options.mouthStyles.map(style => (
                          <button
                            key={style}
                            onClick={() => handleOptionChange('mouthStyle', style)}
                            className={`px-3 py-2 rounded-lg text-sm capitalize ${avatarOptions.mouthStyle === style ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'clothing' && (
                  <div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Clothing Style</label>
                      <div className="flex flex-wrap gap-2">
                        {options.clothingStyles.map(style => (
                          <button
                            key={style}
                            onClick={() => handleOptionChange('clothingStyle', style)}
                            className={`px-3 py-2 rounded-lg text-sm capitalize ${avatarOptions.clothingStyle === style ? 'bg-primary text-white' : 'bg-surface-100 dark:bg-surface-700 hover:bg-surface-200 dark:hover:bg-surface-600'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Clothing Color</label>
                      <div className="flex flex-wrap gap-3">
                        {['#6C63FF', '#FF6C9D', '#36F1CD', '#FF7846', '#3A86FF', '#FB5607', '#8338EC', '#023047'].map(color => (
                          <button
                            key={color}
                            onClick={() => handleColorChange('clothingColor', color)}
                            className={`w-10 h-10 rounded-lg transition-transform ${avatarOptions.clothingColor === color ? 'ring-2 ring-primary scale-110' : ''}`}
                            style={{ backgroundColor: color }}
                            aria-label={`Set clothing color to ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={randomizeAvatar}
                  className="btn btn-outline flex items-center gap-2"
                >
                  <RefreshCw size={16} />
                  <span>Randomize</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={downloadAvatar}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Download Avatar</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}