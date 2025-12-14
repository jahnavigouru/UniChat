import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonBadge,
  IonToggle,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { 
  chatbubbles, 
  globe, 
  time, 
  trophy, 
  trendingUp,
  calendar,
  people,
  language,
  create,
  checkmarkCircle,
  star,
  medal,
  flame,
  settings,
  notifications,
  shield
} from 'ionicons/icons';
import { useTranslation } from '../context/TranslationContext';
import { contacts, chatHistory } from '../data/chatHistory';
import Tabs from '../components/Tabs';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const history = useHistory();
  const { userLanguage } = useTranslation();
  const userName = sessionStorage.getItem('userName') || 'User';
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  // Calculate profile stats
  const totalConversations = contacts.length;
  const totalMessages = Object.values(chatHistory).reduce((sum, msgs) => sum + msgs.length, 0);
  const languagesUsed = new Set(contacts.map(c => c.language)).size;
  const onlineContacts = contacts.filter(c => c.isOnline).length;
  
  // Recent activity
  const recentMessages = Object.values(chatHistory)
    .flat()
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 10);

  // Calculate account age (mock data)
  const accountCreated = new Date('2024-01-01');
  const daysActive = Math.floor((new Date().getTime() - accountCreated.getTime()) / (1000 * 60 * 60 * 24));
  
  // Language proficiency (mock data)
  const languageProficiency = [
    { language: userLanguage.name, level: 'Native', percentage: 100 },
    { language: 'Spanish', level: 'Intermediate', percentage: 65 },
    { language: 'French', level: 'Beginner', percentage: 30 }
  ];

  // Calculate activity streak
  const activityStreak = 15; // days
  const longestStreak = 30;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="profile-container">
          <div className="profile-header">
            <IonAvatar className="profile-avatar">
              <div className="avatar-initials-large">{getInitials(userName)}</div>
            </IonAvatar>
            {isEditing ? (
              <IonInput
                value={editName}
                onIonInput={(e) => setEditName(e.detail.value!)}
                className="edit-name-input"
              />
            ) : (
              <IonText className="profile-name">{userName}</IonText>
            )}
            <IonText className="profile-language">
              <IonIcon icon={language} /> {userLanguage.name}
            </IonText>
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <IonButton 
                    fill="solid" 
                    size="small" 
                    onClick={() => {
                      sessionStorage.setItem('userName', editName);
                      setIsEditing(false);
                      window.location.reload();
                    }}
                  >
                    Save
                  </IonButton>
                  <IonButton 
                    fill="outline" 
                    size="small" 
                    onClick={() => {
                      setEditName(userName);
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </IonButton>
                </>
              ) : (
                <IonButton fill="outline" className="edit-button" onClick={() => setIsEditing(true)}>
                  <IonIcon icon={create} slot="start" />
                  Edit Profile
                </IonButton>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="profile-stats-grid">
            <IonCard className="profile-stat-card">
              <IonCardHeader>
                <IonIcon icon={chatbubbles} className="stat-icon" />
                <IonCardTitle className="stat-number">{totalMessages}</IonCardTitle>
                <IonText className="stat-text">Messages</IonText>
              </IonCardHeader>
            </IonCard>
            <IonCard className="profile-stat-card">
              <IonCardHeader>
                <IonIcon icon={people} className="stat-icon" />
                <IonCardTitle className="stat-number">{totalConversations}</IonCardTitle>
                <IonText className="stat-text">Conversations</IonText>
              </IonCardHeader>
            </IonCard>
            <IonCard className="profile-stat-card">
              <IonCardHeader>
                <IonIcon icon={globe} className="stat-icon" />
                <IonCardTitle className="stat-number">{languagesUsed}</IonCardTitle>
                <IonText className="stat-text">Languages</IonText>
              </IonCardHeader>
            </IonCard>
            <IonCard className="profile-stat-card">
              <IonCardHeader>
                <IonIcon icon={calendar} className="stat-icon" />
                <IonCardTitle className="stat-number">{daysActive}</IonCardTitle>
                <IonText className="stat-text">Days Active</IonText>
              </IonCardHeader>
            </IonCard>
          </div>

          <div className="profile-details">
            <IonCard className="detail-card">
              <IonCardHeader>
                <IonCardTitle>Account Information</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem className="detail-item">
                  <IonLabel position="stacked">Display Name</IonLabel>
                  <IonInput value={userName} readonly={!isEditing} />
                </IonItem>
                <IonItem className="detail-item">
                  <IonLabel position="stacked">Preferred Language</IonLabel>
                  <IonInput value={userLanguage.name} readonly />
                </IonItem>
                <IonItem className="detail-item">
                  <IonLabel position="stacked">Language Code</IonLabel>
                  <IonInput value={userLanguage.code} readonly />
                </IonItem>
                <IonItem className="detail-item">
                  <IonLabel position="stacked">Member Since</IonLabel>
                  <IonInput value={accountCreated.toLocaleDateString()} readonly />
                </IonItem>
                <IonItem className="detail-item">
                  <IonLabel position="stacked">User ID</IonLabel>
                  <IonInput value={`user_${userName.toLowerCase().replace(' ', '_')}`} readonly />
                </IonItem>
              </IonCardContent>
            </IonCard>

            <IonCard className="detail-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={flame} className="card-title-icon" />
                  Activity Streak
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="streak-info">
                  <div className="streak-main">
                    <IonText className="streak-number">{activityStreak}</IonText>
                    <IonText className="streak-label">Day Streak</IonText>
                  </div>
                  <div className="streak-details">
                    <IonText className="streak-detail">🔥 Keep it up!</IonText>
                    <IonText className="streak-detail">Longest: {longestStreak} days</IonText>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="detail-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={language} className="card-title-icon" />
                  Language Proficiency
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="proficiency-list">
                  {languageProficiency.map((lang, index) => (
                    <div key={index} className="proficiency-item">
                      <div className="proficiency-header">
                        <IonText className="proficiency-lang">{lang.language}</IonText>
                        <IonText className="proficiency-level">{lang.level}</IonText>
                      </div>
                      <div className="proficiency-bar">
                        <div 
                          className="proficiency-fill" 
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                      <IonText className="proficiency-percent">{lang.percentage}%</IonText>
                    </div>
                  ))}
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="detail-card">
              <IonCardHeader>
                <IonCardTitle>Recent Activity</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="activity-list">
                  {recentMessages.length > 0 ? (
                    recentMessages.map((msg, index) => (
                      <div key={index} className="activity-item">
                        <IonIcon icon={chatbubbles} className="activity-icon" />
                        <div className="activity-content">
                          <IonText className="activity-text">
                            {msg.sender === userName ? 'You' : msg.sender} sent a message
                          </IonText>
                          <IonText className="activity-time">
                            {new Date(msg.timestamp).toLocaleString()}
                          </IonText>
                        </div>
                      </div>
                    ))
                  ) : (
                    <IonText className="no-activity">No recent activity</IonText>
                  )}
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="detail-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={trophy} className="card-title-icon" />
                  Achievements
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="achievements-list">
                  <div className="achievement-item">
                    <IonIcon icon={trophy} className="achievement-icon" />
                    <div className="achievement-content">
                      <IonText className="achievement-title">First Message</IonText>
                      <IonText className="achievement-desc">Sent your first message</IonText>
                    </div>
                    <IonBadge color="success">✓</IonBadge>
                  </div>
                  <div className="achievement-item">
                    <IonIcon icon={globe} className="achievement-icon" />
                    <div className="achievement-content">
                      <IonText className="achievement-title">Multilingual</IonText>
                      <IonText className="achievement-desc">Chatted in 3+ languages</IonText>
                    </div>
                    <IonBadge color="success">✓</IonBadge>
                  </div>
                  <div className="achievement-item">
                    <IonIcon icon={trendingUp} className="achievement-icon" />
                    <div className="achievement-content">
                      <IonText className="achievement-title">Active User</IonText>
                      <IonText className="achievement-desc">30+ days active</IonText>
                    </div>
                    <IonBadge color="success">✓</IonBadge>
                  </div>
                  <div className="achievement-item">
                    <IonIcon icon={flame} className="achievement-icon" />
                    <div className="achievement-content">
                      <IonText className="achievement-title">Streak Master</IonText>
                      <IonText className="achievement-desc">7+ day activity streak</IonText>
                    </div>
                    <IonBadge color="success">✓</IonBadge>
                  </div>
                  <div className="achievement-item">
                    <IonIcon icon={star} className="achievement-icon" />
                    <div className="achievement-content">
                      <IonText className="achievement-title">Social Butterfly</IonText>
                      <IonText className="achievement-desc">10+ conversations</IonText>
                    </div>
                    <IonBadge color="success">✓</IonBadge>
                  </div>
                  <div className="achievement-item locked">
                    <IonIcon icon={medal} className="achievement-icon" />
                    <div className="achievement-content">
                      <IonText className="achievement-title">Polyglot</IonText>
                      <IonText className="achievement-desc">Chat in 10+ languages</IonText>
                    </div>
                    <IonBadge color="medium">🔒</IonBadge>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>

            <IonCard className="detail-card">
              <IonCardHeader>
                <IonCardTitle>
                  <IonIcon icon={settings} className="card-title-icon" />
                  Quick Settings
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem button onClick={() => history.push('/settings')}>
                  <IonIcon icon={settings} slot="start" />
                  <IonLabel>
                    <h2>App Settings</h2>
                    <p>Manage all app preferences</p>
                  </IonLabel>
                </IonItem>
                <IonItem button onClick={() => history.push('/settings')}>
                  <IonIcon icon={notifications} slot="start" />
                  <IonLabel>
                    <h2>Notification Settings</h2>
                    <p>Configure notifications</p>
                  </IonLabel>
                </IonItem>
                <IonItem button onClick={() => history.push('/settings')}>
                  <IonIcon icon={shield} slot="start" />
                  <IonLabel>
                    <h2>Privacy Settings</h2>
                    <p>Manage privacy and security</p>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default ProfilePage;
