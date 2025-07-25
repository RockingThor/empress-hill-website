"use client";

import React from "react";
import ImageSlider from "./ImageSlider";

const ImageSliderDemo = () => {
  // Sample images - you can replace these with your actual images
  const sampleImages = [
    "/assets/Hero_Section_Desktop.png",
    "/assets/clouds_left.png",
    "/assets/clouds_right.png",
    // Add more images as needed
  ];

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Image Slider Demo</h2>

      {/* Basic Image Slider */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Basic Image Slider (Auto-rotates every 5 seconds)
        </h3>
        <div className="w-full h-96">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={true}
          />
        </div>
      </div>

      {/* Custom Interval */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Fast Auto-rotation (2 seconds)
        </h3>
        <div className="w-full h-96">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={2000}
            showArrows={true}
            showDots={true}
          />
        </div>
      </div>

      {/* Without Dots */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Without Dots Indicator</h3>
        <div className="w-full h-96">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={5000}
            showArrows={true}
            showDots={false}
          />
        </div>
      </div>

      {/* Without Arrows */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Without Navigation Arrows</h3>
        <div className="w-full h-96">
          <ImageSlider
            images={sampleImages}
            autoPlayInterval={5000}
            showArrows={false}
            showDots={true}
          />
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Usage Instructions</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Features:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Auto-rotates images every 5 seconds (configurable)</li>
            <li>Pause on hover functionality</li>
            <li>Manual navigation with arrow buttons</li>
            <li>Dot indicators for direct slide access</li>
            <li>Keyboard navigation (left/right arrow keys)</li>
            <li>Slide counter display</li>
            <li>Pause/play indicator</li>
            <li>Responsive design</li>
          </ul>

          <p className="mt-4">
            <strong>Props:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <code>images</code>: Array of image URLs (required)
            </li>
            <li>
              <code>autoPlayInterval</code>: Time in milliseconds between
              auto-advances (default: 5000)
            </li>
            <li>
              <code>showArrows</code>: Show/hide navigation arrows (default:
              true)
            </li>
            <li>
              <code>showDots</code>: Show/hide dot indicators (default: true)
            </li>
            <li>
              <code>className</code>: Additional CSS classes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderDemo;
