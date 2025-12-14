import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonBadge
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { 
  moon, 
  sunny, 
  notifications, 
  language, 
  person, 
  shield, 
  lockClosed,
  trash,
  download,
  cloud,
  helpCircle,
  informationCircle,
  colorPalette,
  volumeHigh,
  mail,
  statsChart,
  time,
  globe,
  checkmarkCircle,
  warning,
  refresh,
  documentText,
  key,
  eye,
  eyeOff,
  chatbubbles
} from 'ionicons/icons';
import { useTranslation } from '../context/TranslationContext';
import { contacts, chatHistory } from '../data/chatHistory';
import Tabs from '../components/Tabs';
import './SettingsPage.css';

const SettingsPage: React.FC = () => {
  const history = useHistory();
  const { userLanguage, supportedLanguages, setUserLanguage } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoTranslate, setAutoTranslate] = useState(true);
  const [saveHistory, setSaveHistory] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [typingIndicators, setTypingIndicators] = useState(true);

  // Calculate stats
  const totalMessages = Object.values(chatHistory).reduce((sum, msgs) => sum + msgs.length, 0);
  const totalConversations = contacts.length;
  const storageUsed = '2.4 MB';
  const lastBackup = '2 hours ago';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="settings-container">
          {/* Usage Statistics Card */}
          <IonCard className="stats-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={statsChart} className="card-icon" />
                Usage Statistics
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="stats-grid">
                <div className="stat-box">
                  <IonText className="stat-value">{totalMessages}</IonText>
                  <IonText className="stat-label">Total Messages</IonText>
                </div>
                <div className="stat-box">
                  <IonText className="stat-value">{totalConversations}</IonText>
                  <IonText className="stat-label">Conversations</IonText>
                </div>
                <div className="stat-box">
                  <IonText className="stat-value">{storageUsed}</IonText>
                  <IonText className="stat-label">Storage Used</IonText>
                </div>
                <div className="stat-box">
                  <IonText className="stat-value">{lastBackup}</IonText>
                  <IonText className="stat-label">Last Backup</IonText>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Quick Actions Card */}
          <IonCard className="quick-actions-card">
            <IonCardHeader>
              <IonCardTitle>Quick Actions</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="quick-actions">
                <IonButton fill="outline" size="small" onClick={() => history.push('/profile')}>
                  <IonIcon icon={person} slot="start" />
                  View Profile
                </IonButton>
                <IonButton fill="outline" size="small" onClick={() => history.push('/about')}>
                  <IonIcon icon={informationCircle} slot="start" />
                  About App
                </IonButton>
                <IonButton fill="outline" size="small">
                  <IonIcon icon={helpCircle} slot="start" />
                  Help & Support
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>

          <IonList className="settings-list">
            {/* Profile Section */}
            <div className="settings-section">
              <div className="section-header">Account</div>
              <IonItem button onClick={() => history.push('/profile')}>
                <IonIcon icon={person} slot="start" />
                <IonLabel>
                  <h2>Profile</h2>
                  <p>View and edit your profile information</p>
                </IonLabel>
                <IonIcon icon={checkmarkCircle} slot="end" color="success" />
              </IonItem>
              <IonItem>
                <IonIcon icon={key} slot="start" />
                <IonLabel>
                  <h2>Account Security</h2>
                  <p>Manage password and security settings</p>
                </IonLabel>
                <IonText slot="end" className="setting-status">Secure</IonText>
              </IonItem>
            </div>

            {/* Language Section */}
            <div className="settings-section">
              <div className="section-header">Language & Translation</div>
              <IonItem>
                <IonIcon icon={language} slot="start" />
                <IonLabel>
                  <h2>Preferred Language</h2>
                  <p>Your primary language for messages</p>
                </IonLabel>
                <IonSelect
                  value={userLanguage.name}
                  onIonChange={(e) => {
                    const selectedLang = supportedLanguages.find(l => l.name === e.detail.value);
                    if (selectedLang) {
                      setUserLanguage(selectedLang);
                    }
                  }}
                >
                  {supportedLanguages.map((lang) => (
                    <IonSelectOption key={lang.code} value={lang.name}>
                      {lang.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonIcon icon={globe} slot="start" />
                <IonLabel>
                  <h2>Auto-Translate</h2>
                  <p>Automatically translate incoming messages to your language</p>
                </IonLabel>
                <IonToggle
                  checked={autoTranslate}
                  onIonChange={(e) => setAutoTranslate(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={language} slot="start" />
                <IonLabel>
                  <h2>Translation Quality</h2>
                  <p>Prefer accuracy over speed</p>
                </IonLabel>
                <IonText slot="end" className="setting-status">Balanced</IonText>
              </IonItem>
            </div>

            {/* Appearance Section */}
            <div className="settings-section">
              <div className="section-header">Appearance</div>
              <IonItem>
                <IonIcon icon={darkMode ? moon : sunny} slot="start" />
                <IonLabel>
                  <h2>Dark Mode</h2>
                  <p>Switch between light and dark theme</p>
                </IonLabel>
                <IonToggle
                  checked={darkMode}
                  onIonChange={(e) => setDarkMode(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={colorPalette} slot="start" />
                <IonLabel>
                  <h2>Theme Color</h2>
                  <p>Choose your accent color</p>
                </IonLabel>
                <IonText slot="end" className="theme-color-preview">Sky Blue</IonText>
              </IonItem>
              <IonItem>
                <IonIcon icon={documentText} slot="start" />
                <IonLabel>
                  <h2>Font Size</h2>
                  <p>Adjust message text size</p>
                </IonLabel>
                <IonText slot="end" className="setting-status">Medium</IonText>
              </IonItem>
            </div>

            {/* Notifications Section */}
            <div className="settings-section">
              <div className="section-header">Notifications</div>
              <IonItem>
                <IonIcon icon={notifications} slot="start" />
                <IonLabel>
                  <h2>Push Notifications</h2>
                  <p>Receive notifications for new messages</p>
                </IonLabel>
                <IonToggle
                  checked={notificationsEnabled}
                  onIonChange={(e) => setNotificationsEnabled(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={volumeHigh} slot="start" />
                <IonLabel>
                  <h2>Sound</h2>
                  <p>Play sound for new messages</p>
                </IonLabel>
                <IonToggle
                  checked={soundEnabled}
                  onIonChange={(e) => setSoundEnabled(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={time} slot="start" />
                <IonLabel>
                  <h2>Quiet Hours</h2>
                  <p>Disable notifications during specific hours</p>
                </IonLabel>
                <IonText slot="end" className="setting-status">Off</IonText>
              </IonItem>
            </div>

            {/* Privacy & Security Section */}
            <div className="settings-section">
              <div className="section-header">Privacy & Security</div>
              <IonItem>
                <IonIcon icon={eye} slot="start" />
                <IonLabel>
                  <h2>Read Receipts</h2>
                  <p>Let others know when you've read their messages</p>
                </IonLabel>
                <IonToggle
                  checked={readReceipts}
                  onIonChange={(e) => setReadReceipts(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={globe} slot="start" />
                <IonLabel>
                  <h2>Online Status</h2>
                  <p>Show when you're online</p>
                </IonLabel>
                <IonToggle
                  checked={showOnlineStatus}
                  onIonChange={(e) => setShowOnlineStatus(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={chatbubbles} slot="start" />
                <IonLabel>
                  <h2>Typing Indicators</h2>
                  <p>Show when you're typing</p>
                </IonLabel>
                <IonToggle
                  checked={typingIndicators}
                  onIonChange={(e) => setTypingIndicators(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={shield} slot="start" />
                <IonLabel>
                  <h2>Privacy Settings</h2>
                  <p>Manage your privacy preferences</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={lockClosed} slot="start" />
                <IonLabel>
                  <h2>Two-Factor Authentication</h2>
                  <p>Add an extra layer of security to your account</p>
                </IonLabel>
                <IonText slot="end" className="setting-status">Not enabled</IonText>
              </IonItem>
              <IonItem>
                <IonIcon icon={eyeOff} slot="start" />
                <IonLabel>
                  <h2>Blocked Contacts</h2>
                  <p>Manage blocked users</p>
                </IonLabel>
                <IonBadge slot="end" color="medium">0</IonBadge>
              </IonItem>
            </div>

            {/* Data Management Section */}
            <div className="settings-section">
              <div className="section-header">Data Management</div>
              <IonItem>
                <IonIcon icon={cloud} slot="start" />
                <IonLabel>
                  <h2>Cloud Backup</h2>
                  <p>Automatically backup your messages to cloud</p>
                </IonLabel>
                <IonToggle
                  checked={saveHistory}
                  onIonChange={(e) => setSaveHistory(e.detail.checked)}
                />
              </IonItem>
              <IonItem>
                <IonIcon icon={refresh} slot="start" />
                <IonLabel>
                  <h2>Sync Settings</h2>
                  <p>Sync across all your devices</p>
                </IonLabel>
                <IonText slot="end" className="setting-status">Enabled</IonText>
              </IonItem>
              <IonItem>
                <IonIcon icon={download} slot="start" />
                <IonLabel>
                  <h2>Export Data</h2>
                  <p>Download your chat history as JSON file</p>
                </IonLabel>
              </IonItem>
              <IonItem button className="danger-item">
                <IonIcon icon={trash} slot="start" />
                <IonLabel>
                  <h2>Clear Chat History</h2>
                  <p>Permanently delete all your messages</p>
                </IonLabel>
              </IonItem>
              <IonItem button className="danger-item">
                <IonIcon icon={warning} slot="start" />
                <IonLabel>
                  <h2>Delete Account</h2>
                  <p>Permanently delete your account and all data</p>
                </IonLabel>
              </IonItem>
            </div>

            {/* About Section */}
            <div className="settings-section">
              <div className="section-header">About</div>
              <IonItem button onClick={() => history.push('/about')}>
                <IonIcon icon={informationCircle} slot="start" />
                <IonLabel>
                  <h2>About LinguaChat</h2>
                  <p>App information, features, and version details</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Version</h2>
                  <p>1.0.0 (Build 100)</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>App Name</h2>
                  <p>LinguaChat - Multilingual Messaging</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Release Date</h2>
                  <p>January 2024</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Developer</h2>
                  <p>LinguaChat Team</p>
                </IonLabel>
              </IonItem>
            </div>

            {/* Help & Support Section */}
            <div className="settings-section">
              <div className="section-header">Help & Support</div>
              <IonItem button>
                <IonIcon icon={helpCircle} slot="start" />
                <IonLabel>
                  <h2>FAQ</h2>
                  <p>Frequently asked questions</p>
                </IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={documentText} slot="start" />
                <IonLabel>
                  <h2>User Guide</h2>
                  <p>Learn how to use LinguaChat</p>
                </IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={mail} slot="start" />
                <IonLabel>
                  <h2>Contact Support</h2>
                  <p>Get help from our support team</p>
                </IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={informationCircle} slot="start" />
                <IonLabel>
                  <h2>Report a Bug</h2>
                  <p>Help us improve the app</p>
                </IonLabel>
              </IonItem>
            </div>
          </IonList>
        </div>
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default SettingsPage;
