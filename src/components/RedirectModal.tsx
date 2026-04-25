"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

interface RedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  targetName: string;
}

export default function RedirectModal({ isOpen, onClose, onConfirm, targetName }: RedirectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass rounded-3xl p-8 shadow-2xl border-white/20 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <ExternalLink size={24} />
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">External Redirect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              You are about to be redirected to <span className="text-primary font-semibold">{targetName}</span>. 
              Do you want to proceed?
            </p>

            <div className="flex gap-4">
              <button 
                onClick={onClose}
                className="flex-1 py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all text-gray-300"
              >
                No, Stay Here
              </button>
              <button 
                onClick={onConfirm}
                className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
              >
                Yes, Redirect
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
