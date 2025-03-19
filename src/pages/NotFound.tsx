
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-bg-dark p-6">
      <div className="cyber-card max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-cyber-bg-darker border border-cyber-neon-blue/40">
            <AlertTriangle className="w-10 h-10 text-cyber-neon-blue animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-2 text-gradient">404</h1>
        <p className="text-xl text-cyber-text-secondary mb-8">Page not found</p>
        
        <div className="space-y-2">
          <p className="text-cyber-text-secondary mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <a 
            href="/" 
            className="neon-button inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
