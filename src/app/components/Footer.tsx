import React from "react";
import { FaAndroid, FaGithub, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";

const DOWNLOAD_URL =
  "https://drive.google.com/file/d/1UW8kLpZXhu_L7UAnbsgmqg4Xwn098i7F/view?usp=sharing";

const appLinks = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download APK", href: DOWNLOAD_URL, external: true },
];

const Footer = () => {
  return (
    <footer className="footer-root" id="footer">
      <div className="footer-body">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <MdLocalFireDepartment size={20} />
              </div>
              <span className="footer-logo-text">reciPi</span>
            </div>

            <p className="footer-tagline">
              Cook smarter, eat better. Thousands of recipes, personalised
              recommendations, and beautiful cooking experiences — right in your
              pocket.
            </p>

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-download-btn"
              className="footer-download-btn"
            >
              <FaAndroid size={16} />
              <span>Download for Android</span>
            </a>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social-icon" id="footer-instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="footer-social-icon" id="footer-twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="footer-social-icon" id="footer-github">
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* App Links Column */}
          <div className="footer-link-col">
            <h4 className="footer-link-heading">App</h4>
            <ul className="footer-link-list">
              {appLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-link"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} reciPi. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="footer-heart" aria-hidden="true" /> by the reciPi team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
