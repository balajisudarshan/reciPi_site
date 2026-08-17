"use client";
import React, { useState } from "react";
import { FaAndroid, FaDownload, FaTimes, FaStar } from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";

const DOWNLOAD_URL =
  "https://drive.google.com/file/d/1UW8kLpZXhu_L7UAnbsgmqg4Xwn098i7F/view?usp=sharing";

const DownloadBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="download-banner" id="download-banner" aria-label="Download the reciPi app">
      {/* Background decorative orbs */}
      <div className="banner-orb banner-orb-1" aria-hidden="true" />
      <div className="banner-orb banner-orb-2" aria-hidden="true" />

      <div className="banner-inner">
        {/* Icon + Text group */}
        <div className="banner-left">
          <div className="banner-app-icon" aria-hidden="true">
            <MdLocalFireDepartment size={28} />
          </div>

          <div className="banner-text">
            <div className="banner-title">
              <span className="banner-badge">🔥 FREE</span>
              Download the reciPi App
            </div>
            <div className="banner-subtitle">
              <FaStar className="banner-star" />
              <FaStar className="banner-star" />
              <FaStar className="banner-star" />
              <FaStar className="banner-star" />
              <FaStar className="banner-star" />
              <span>1,000+ recipes · Cook offline · Android APK</span>
            </div>
          </div>
        </div>

        {/* CTA + close */}
        <div className="banner-right">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="banner-download-btn"
            className="banner-cta"
          >
            <FaDownload className="banner-cta-icon" />
            <span>Download APK</span>
          </a>

          <button
            onClick={() => setVisible(false)}
            className="banner-close"
            aria-label="Dismiss banner"
            id="banner-close-btn"
          >
            <FaTimes size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
