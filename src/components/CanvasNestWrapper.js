import React, { useEffect, useRef } from "react";

const CanvasNestWrapper = () => {
  const canvasNestRef = useRef(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    // Set mounted flag
    isMountedRef.current = true;

    const cleanup = () => {
      // Find and safely remove any canvas-nest elements
      try {
        const existingCanvases = document.querySelectorAll("canvas");
        existingCanvases.forEach((canvas) => {
          if (
            canvas.classList.contains("canvas-nest") ||
            canvas.id === "c_n_canvas" ||
            canvas.style.zIndex === "-1"
          ) {
            // Check if element has a parent before trying to remove it
            if (canvas.parentNode) {
              canvas.parentNode.removeChild(canvas);
            }
          }
        });
      } catch (error) {
        console.error("Error removing canvas elements:", error);
      }

      // Destroy canvas-nest instance - Buggy code I think that the canvasNestRef does not have a destroy() function
      // if (canvasNestRef.current) {
      //   try {
      //     if (typeof canvasNestRef.current.destroy === "function") {
      //       canvasNestRef.current.destroy();
      //     }
      //   } catch (error) {
      //     console.error("Error destroying canvas instance:", error);
      //   }
      //   canvasNestRef.current = null;
      // }
    };

    // Clean up any existing instances first
    cleanup();

    // Only import on the client
    const loadCanvasNest = async () => {
      try {
        // Check if component is still mounted
        if (!isMountedRef.current) return;

        const CanvasNest = (await import("canvas-nest.js")).default;

        if (isMountedRef.current) {
          canvasNestRef.current = new CanvasNest(document.body, {
            color: "255,255,255",
            count: 200,
            opacity: 1,
            zIndex: -1,
          });
        }
      } catch (error) {
        console.error("Failed to load canvas-nest.js:", error);
      }
    };

    loadCanvasNest();

    // Cleanup function for unmount
    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, []);

  return null;
};

export default CanvasNestWrapper;
