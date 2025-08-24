import { useEffect } from "react";
import bg from "@static/bg5original.jpg";

/**
 * Preloads critical background images to ensure instant loading
 * when users navigate to pages that use them
 */
const ImagePreloader = () => {
  useEffect(() => {
    // Preload the contact page background image
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload the contact background image
    preloadImage(bg).catch(err => {
      console.warn("Failed to preload contact background image:", err);
    });
  }, []);

  // This component doesn't render anything
  return null;
};

export default ImagePreloader;