import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel
} from '@ionic/react';
import { 
  globe, 
  language, 
  flash, 
  people, 
  mail, 
  informationCircle, 
  logoGithub,
  code,
  shield,
  star,
  trophy,
  heart,
  documentText,
  checkmarkCircle
} from 'ionicons/icons';
import Tabs from '../components/Tabs';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="about-container">
          <div className="about-header">
            <IonText className="about-title">LinguaChat</IonText>
            <IonText className="about-subtitle">Version 1.0.0</IonText>
            <IonText className="about-description">
              Breaking language barriers, one message at a time
            </IonText>
          </div>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={globe} className="card-icon" />
                About This App
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                LinguaChat is a modern multilingual messaging application that enables seamless 
                communication across different languages. With real-time translation capabilities, 
                users can chat with friends and colleagues regardless of their native language.
              </IonText>
              <div className="about-highlights">
                <div className="highlight-item">
                  <IonIcon icon={checkmarkCircle} className="highlight-icon" />
                  <IonText>Real-time translation</IonText>
                </div>
                <div className="highlight-item">
                  <IonIcon icon={checkmarkCircle} className="highlight-icon" />
                  <IonText>12+ supported languages</IonText>
                </div>
                <div className="highlight-item">
                  <IonIcon icon={checkmarkCircle} className="highlight-icon" />
                  <IonText>Secure and private</IonText>
                </div>
                <div className="highlight-item">
                  <IonIcon icon={checkmarkCircle} className="highlight-icon" />
                  <IonText>Free to use</IonText>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={flash} className="card-icon" />
                Key Features
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="features-grid">
                <div className="feature-item">
                  <IonIcon icon={globe} className="feature-icon" />
                  <IonText className="feature-title">Real-time Translation</IonText>
                  <IonText className="feature-desc">Messages translated instantly</IonText>
                </div>
                <div className="feature-item">
                  <IonIcon icon={language} className="feature-icon" />
                  <IonText className="feature-title">12+ Languages</IonText>
                  <IonText className="feature-desc">Support for major world languages</IonText>
                </div>
                <div className="feature-item">
                  <IonIcon icon={people} className="feature-icon" />
                  <IonText className="feature-title">Online Status</IonText>
                  <IonText className="feature-desc">See who's online</IonText>
                </div>
                <div className="feature-item">
                  <IonIcon icon={flash} className="feature-icon" />
                  <IonText className="feature-title">Fast & Responsive</IonText>
                  <IonText className="feature-desc">Lightning-fast performance</IonText>
                </div>
                <div className="feature-item">
                  <IonIcon icon={shield} className="feature-icon" />
                  <IonText className="feature-title">Secure</IonText>
                  <IonText className="feature-desc">Encrypted messaging</IonText>
                </div>
                <div className="feature-item">
                  <IonIcon icon={star} className="feature-icon" />
                  <IonText className="feature-title">Modern UI</IonText>
                  <IonText className="feature-desc">Beautiful design</IonText>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={language} className="card-icon" />
                Supported Languages
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="languages-grid">
                <span className="language-tag">🇬🇧 English</span>
                <span className="language-tag">🇪🇸 Spanish</span>
                <span className="language-tag">🇫🇷 French</span>
                <span className="language-tag">🇩🇪 German</span>
                <span className="language-tag">🇮🇳 Hindi</span>
                <span className="language-tag">🇰🇷 Korean</span>
                <span className="language-tag">🇯🇵 Japanese</span>
                <span className="language-tag">🇨🇳 Chinese</span>
                <span className="language-tag">🇵🇹 Portuguese</span>
                <span className="language-tag">🇮🇹 Italian</span>
                <span className="language-tag">🇷🇺 Russian</span>
                <span className="language-tag">🇸🇦 Arabic</span>
              </div>
              <IonText className="languages-note">
                More languages coming soon! We're constantly adding support for new languages 
                to make communication easier for everyone.
              </IonText>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={code} className="card-icon" />
                Technology Stack
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                Built with modern web technologies for the best performance and user experience.
              </IonText>
              <div className="tech-stack">
                <span className="tech-badge">React 19</span>
                <span className="tech-badge">Ionic 8</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Vite</span>
                <span className="tech-badge">Google Translate API</span>
                <span className="tech-badge">MyMemory API</span>
              </div>
              <div className="tech-details">
                <IonText className="tech-note">
                  The app uses Google Translate API for high-quality translations and MyMemory 
                  as a free fallback option. All translations are processed securely and 
                  your messages remain private.
                </IonText>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={documentText} className="card-icon" />
                FAQ - Frequently Asked Questions
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem slot="header">
                    <IonLabel>How does translation work?</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <IonText>
                      When you send a message, it's automatically translated to the recipient's 
                      preferred language using Google Translate API or MyMemory translation service. 
                      Recipients can toggle between translated and original text.
                    </IonText>
                  </div>
                </IonAccordion>

                <IonAccordion value="second">
                  <IonItem slot="header">
                    <IonLabel>Is my data secure?</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <IonText>
                      Yes! All messages are encrypted and translations are processed securely. 
                      We don't store your personal conversations permanently.
                    </IonText>
                  </div>
                </IonAccordion>

                <IonAccordion value="third">
                  <IonItem slot="header">
                    <IonLabel>Can I use the app offline?</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <IonText>
                      Currently, translation requires an internet connection. However, you can 
                      view your chat history offline. Offline translation support is coming soon!
                    </IonText>
                  </div>
                </IonAccordion>

                <IonAccordion value="fourth">
                  <IonItem slot="header">
                    <IonLabel>How many languages are supported?</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <IonText>
                      We currently support 12 major languages: English, Spanish, French, German, 
                      Hindi, Korean, Japanese, Chinese, Portuguese, Italian, Russian, and Arabic. 
                      More languages are being added regularly.
                    </IonText>
                  </div>
                </IonAccordion>

                <IonAccordion value="fifth">
                  <IonItem slot="header">
                    <IonLabel>Is LinguaChat free to use?</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <IonText>
                      Yes! LinguaChat is completely free to use. We use free translation APIs 
                      with rate limits. For unlimited translations, you can optionally add your 
                      own Google Translate API key.
                    </IonText>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={trophy} className="card-icon" />
                Changelog
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="changelog-list">
                <div className="changelog-item">
                  <IonText className="changelog-version">Version 1.0.0 (January 2024)</IonText>
                  <ul className="changelog-features">
                    <li>Initial release</li>
                    <li>Real-time translation support</li>
                    <li>12 language support</li>
                    <li>Online/offline status</li>
                    <li>Read receipts</li>
                    <li>Search functionality</li>
                    <li>Modern UI design</li>
                  </ul>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={heart} className="card-icon" />
                Acknowledgments
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                Special thanks to the open-source community and the following services:
              </IonText>
              <div className="acknowledgments-list">
                <div className="ack-item">
                  <IonText className="ack-name">Google Translate API</IonText>
                  <IonText className="ack-desc">For high-quality translations</IonText>
                </div>
                <div className="ack-item">
                  <IonText className="ack-name">MyMemory Translation</IonText>
                  <IonText className="ack-desc">Free translation service</IonText>
                </div>
                <div className="ack-item">
                  <IonText className="ack-name">Ionic Framework</IonText>
                  <IonText className="ack-desc">Mobile app framework</IonText>
                </div>
                <div className="ack-item">
                  <IonText className="ack-name">React Community</IonText>
                  <IonText className="ack-desc">Amazing React ecosystem</IonText>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={globe} className="card-icon" />
                Contact & Support
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="contact-links">
                <IonButton fill="outline" size="small" href="mailto:support@linguachat.com">
                  <IonIcon icon={mail} slot="start" />
                  Email Support
                </IonButton>
                <IonButton fill="outline" size="small" href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <IonIcon icon={logoGithub} slot="start" />
                  GitHub
                </IonButton>
              </div>
              <IonText className="contact-note">
                Have questions or feedback? We'd love to hear from you! Contact our support 
                team or visit our GitHub repository.
              </IonText>
            </IonCardContent>
          </IonCard>

          <IonCard className="about-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={shield} className="card-icon" />
                Privacy & Terms
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>
                Your privacy is important to us. All messages are encrypted and translations 
                are processed securely. We do not store your personal conversations permanently.
              </IonText>
              <div className="legal-links">
                <IonButton fill="clear" size="small">Privacy Policy</IonButton>
                <IonButton fill="clear" size="small">Terms of Service</IonButton>
                <IonButton fill="clear" size="small">Cookie Policy</IonButton>
              </div>
              <IonText className="privacy-note">
                By using LinguaChat, you agree to our Terms of Service and Privacy Policy. 
                We are committed to protecting your data and privacy.
              </IonText>
            </IonCardContent>
          </IonCard>

          <div className="about-footer">
            <IonText className="copyright">
              © {currentYear} LinguaChat. All rights reserved.
            </IonText>
            <IonText className="version">
              Version 1.0.0 | Made with ❤️ for global communication
            </IonText>
          </div>
        </div>
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default AboutPage;
