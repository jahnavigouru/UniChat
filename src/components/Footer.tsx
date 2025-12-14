import React from 'react';
import { IonFooter, IonToolbar, IonText, IonIcon, IonButton } from '@ionic/react';
import { logoGithub, mail, informationCircle, globe } from 'ionicons/icons';
import './Footer.css';

interface FooterProps {
  showOnPages?: string[]; // Pages where footer should be shown
  hideOnPages?: string[]; // Pages where footer should be hidden
}

const Footer: React.FC<FooterProps> = ({ showOnPages, hideOnPages }) => {
  const currentPath = window.location.pathname;

  // Hide footer on login page
  if (currentPath === '/login') {
    return null;
  }

  // Hide footer on chat detail pages (they start with /chat/)
  if (currentPath.startsWith('/chat/') && currentPath !== '/chats') {
    return null;
  }

  // Hide footer on specified pages
  if (hideOnPages?.some(page => currentPath === page || currentPath.startsWith(page))) {
    return null;
  }

  // Show only on specific pages if specified
  if (showOnPages && !showOnPages.some(page => currentPath === page || currentPath.startsWith(page))) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <IonFooter className="app-footer">
      <IonToolbar>
        <div className="footer-content">
          <div className="footer-section">
            <IonText className="footer-title">LinguaChat</IonText>
            <IonText className="footer-subtitle">Multilingual Messaging App</IonText>
            <IonText className="footer-description">
              Connect with people across languages with real-time translation
            </IonText>
          </div>

          <div className="footer-section">
            <IonText className="footer-section-title">Quick Links</IonText>
            <div className="footer-links">
              <a href="/chats" className="footer-link">Messages</a>
              <a href="/settings" className="footer-link">Settings</a>
              <a href="/profile" className="footer-link">Profile</a>
            </div>
          </div>

          <div className="footer-section">
            <IonText className="footer-section-title">Features</IonText>
            <div className="footer-links">
              <span className="footer-feature">🌐 Real-time Translation</span>
              <span className="footer-feature">💬 Multi-language Chat</span>
              <span className="footer-feature">🔔 Notifications</span>
              <span className="footer-feature">👥 Online Status</span>
            </div>
          </div>

          <div className="footer-section">
            <IonText className="footer-section-title">Connect</IonText>
            <div className="footer-social">
              <IonButton
                fill="clear"
                size="small"
                className="social-button"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IonIcon icon={logoGithub} />
              </IonButton>
              <IonButton
                fill="clear"
                size="small"
                className="social-button"
                href="mailto:support@linguachat.com"
              >
                <IonIcon icon={mail} />
              </IonButton>
              <IonButton
                fill="clear"
                size="small"
                className="social-button"
                href="https://linguachat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IonIcon icon={globe} />
              </IonButton>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <IonText className="footer-copyright">
            © {currentYear} LinguaChat. All rights reserved.
          </IonText>
          <div className="footer-meta">
            <IonText className="footer-version">Version 1.0.0</IonText>
            <IonButton
              fill="clear"
              size="small"
              className="info-button"
              routerLink="/about"
            >
              <IonIcon icon={informationCircle} />
              <span>About</span>
            </IonButton>
          </div>
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;

