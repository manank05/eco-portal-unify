
import { Leaf, Recycle, Users, UserRound, Shield, Upload, Video, Wind, Car, Award } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import PortalCard from "../ui-components/PortalCard";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-nature">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Recycle className="h-10 w-10 text-eco-600" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-eco-800">
              EcoRecycle
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto eco-glass px-6 py-3 rounded-full"
          >
            Revolutionizing waste management with AI-powered sorting and rewarding sustainable actions
          </motion.p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            <div className="p-6 bg-white/90 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="p-3 bg-eco-50 rounded-full mb-4">
                <Upload className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="font-semibold mb-2">Waste Collection</h3>
              <p className="text-sm text-gray-600">Upload waste images, schedule pickups, and earn eco-points</p>
            </div>
            
            <div className="p-6 bg-white/90 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="p-3 bg-eco-50 rounded-full mb-4">
                <Video className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="font-semibold mb-2">Eco Reels</h3>
              <p className="text-sm text-gray-600">Share environmental videos and get rewarded for awareness</p>
            </div>
            
            <div className="p-6 bg-white/90 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="p-3 bg-eco-50 rounded-full mb-4">
                <Wind className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="font-semibold mb-2">Air Quality</h3>
              <p className="text-sm text-gray-600">Monitor local air quality and take eco-friendly actions</p>
            </div>
            
            <div className="p-6 bg-white/90 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="p-3 bg-eco-50 rounded-full mb-4">
                <Award className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="font-semibold mb-2">Earn Rewards</h3>
              <p className="text-sm text-gray-600">Convert eco-points to real cash via UPI payments</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          <PortalCard
            icon={UserRound}
            title="User Portal"
            description="Submit waste, upload eco reels, participate in cleanliness drives, and earn rewards."
            link="/auth/user"
            delay={1}
          />
          
          <PortalCard
            icon={Users}
            title="Staff Portal"
            description="Collect waste from users, verify with OTP, and submit to sorting centers."
            link="/auth/staff"
            delay={2}
          />
          
          <PortalCard
            icon={Shield}
            title="Admin Portal"
            description="Monitor waste collection, approve user submissions, and analyze system performance."
            link="/auth/admin"
            delay={3}
          />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center text-white/80 backdrop-blur-sm py-2"
      >
        <p className="text-sm">© 2023 EcoRecycle. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
