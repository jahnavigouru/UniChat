import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonAvatar,
  IonText,
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { chatbubbles, people, globe, trendingUp, time } from 'ionicons/icons';
import { contacts, chatHistory } from '../data/chatHistory';
import { useTranslation } from '../context/TranslationContext';
import Tabs from '../components/Tabs';
import './ChatsPage.css';

const ChatsPage: React.FC = () => {
  const history = useHistory();
  const { userLanguage } = useTranslation();
  const userName = sessionStorage.getItem('userName') || 'User';
  const [searchQuery, setSearchQuery] = useState('');

  const handleContactClick = (contactName: string) => {
    history.push(`/chat/${contactName}`);
  };

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getLastMessage = (contactName: string) => {
    const messages = chatHistory[contactName] || [];
    if (messages.length === 0) return 'Started a conversation';
    
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.body) {
      try {
        const parsed = JSON.parse(lastMessage.body);
        const isOwn = lastMessage.sender === userName || lastMessage.sender === 'Sophie';
        return isOwn 
          ? (parsed.original || lastMessage.text)
          : (parsed.translated || parsed.original || lastMessage.text);
      } catch {
        return lastMessage.text;
      }
    }
    return lastMessage.text || 'Started a conversation';
  };

  const getLastMessageTime = (contactName: string) => {
    const messages = chatHistory[contactName] || [];
    if (messages.length === 0) return '';
    
    const lastMessage = messages[messages.length - 1];
    const date = new Date(lastMessage.timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getUnreadCount = (contactName: string) => {
    const contact = contacts.find(c => c.name === contactName);
    return contact?.unreadCount || 0;
  };

  // Calculate stats
  const totalMessages = Object.values(chatHistory).reduce((sum, msgs) => sum + msgs.length, 0);
  const totalConversations = contacts.length;
  const totalUnread = contacts.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
  const onlineContacts = contacts.filter(c => c.isOnline).length;

  // Filter contacts based on search
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort contacts: unread first, then alphabetically
  const sortedContacts = [...filteredContacts].sort((a, b) => {
    const aUnread = getUnreadCount(a.name);
    const bUnread = getUnreadCount(b.name);
    if (aUnread > 0 && bUnread === 0) return -1;
    if (aUnread === 0 && bUnread > 0) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="chats-page-container">
          {/* Stats Cards */}
          <div className="stats-section">
            <IonCard className="stat-card">
              <IonCardHeader>
                <IonIcon icon={chatbubbles} className="stat-icon" />
                <IonCardTitle className="stat-value">{totalMessages}</IonCardTitle>
                <IonText className="stat-label">Total Messages</IonText>
              </IonCardHeader>
            </IonCard>
            <IonCard className="stat-card">
              <IonCardHeader>
                <IonIcon icon={people} className="stat-icon" />
                <IonCardTitle className="stat-value">{totalConversations}</IonCardTitle>
                <IonText className="stat-label">Conversations</IonText>
              </IonCardHeader>
            </IonCard>
            <IonCard className="stat-card">
              <IonCardHeader>
                <IonIcon icon={trendingUp} className="stat-icon" />
                <IonCardTitle className="stat-value">{totalUnread}</IonCardTitle>
                <IonText className="stat-label">Unread</IonText>
              </IonCardHeader>
            </IonCard>
            <IonCard className="stat-card">
              <IonCardHeader>
                <IonIcon icon={globe} className="stat-icon" />
                <IonCardTitle className="stat-value">{onlineContacts}</IonCardTitle>
                <IonText className="stat-label">Online</IonText>
              </IonCardHeader>
            </IonCard>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <IonSearchbar
              value={searchQuery}
              onIonInput={(e) => setSearchQuery(e.detail.value!)}
              placeholder="Search conversations..."
              className="chat-searchbar"
            />
          </div>

          {/* Language Badge */}
          <div className="language-header">
            <IonText className="user-language-badge">
              <IonIcon icon={globe} /> Your language: {userLanguage.name}
            </IonText>
          </div>

          {/* Conversations List */}
          <div className="conversations-container">
            {sortedContacts.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">💬</div>
                <IonText color="medium">
                  <h2>No conversations found</h2>
                  <p>{searchQuery ? 'Try a different search term' : 'Start a new conversation!'}</p>
                </IonText>
              </div>
            ) : (
              sortedContacts.map((contact) => {
                const lastMessageText = getLastMessage(contact.name);
                const lastMessageTime = getLastMessageTime(contact.name);
                const unreadCount = getUnreadCount(contact.name);
                
                return (
                  <div
                    key={contact.name}
                    onClick={() => handleContactClick(contact.name)}
                    className={`conversation-item ${unreadCount > 0 ? 'has-unread' : ''}`}
                  >
                    <div className="avatar-wrapper">
                      <IonAvatar className="conversation-avatar">
                        <div className="avatar-initials">{getInitials(contact.name)}</div>
                      </IonAvatar>
                      {contact.isOnline && (
                        <div className="online-indicator"></div>
                      )}
                    </div>
                    <div className="conversation-content">
                      <div className="conversation-header">
                        <span className="conversation-name">{contact.name}</span>
                        {lastMessageTime && (
                          <span className="conversation-time">{lastMessageTime}</span>
                        )}
                      </div>
                      <div className="conversation-preview">
                        <span className={`conversation-message ${unreadCount > 0 ? 'unread' : ''}`}>
                          {lastMessageText}
                        </span>
                        <span className="language-badge-small">{contact.language}</span>
                      </div>
                    </div>
                    {unreadCount > 0 && (
                      <IonBadge color="primary" className="unread-badge">
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </IonBadge>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </IonContent>
      <Tabs />
    </IonPage>
  );
};

export default ChatsPage;
