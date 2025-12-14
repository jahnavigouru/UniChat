import React, { useState, useEffect, useRef } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  IonItem,
  IonButtons,
  IonBackButton,
  IonText,
  IonAvatar,
  IonPopover,
  IonList,
  IonLabel,
  IonActionSheet,
  IonBadge
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { 
  send, 
  language, 
  ellipsisVertical, 
  copy, 
  trash, 
  happy,
  checkmarkDone,
  checkmark,
  time,
  informationCircle
} from 'ionicons/icons';
import { chatHistory, contacts, Message } from '../data/chatHistory';
import { useTranslation } from '../context/TranslationContext';
import { translateText, getLanguageCode } from '../services/translationService';
import Footer from '../components/Footer';
import './ChatDetailPage.css';

const ChatDetailPage: React.FC = () => {
  const params = useParams<{ contactName: string }>();
  const contactName = params.contactName || '';
  const [messages, setMessages] = useState<Message[]>(chatHistory[contactName] || []);
  const [newMessage, setNewMessage] = useState('');
  const [seeOriginal, setSeeOriginal] = useState<{ [key: number]: boolean }>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showInfoPopover, setShowInfoPopover] = useState<{ [key: number | string]: boolean }>({});
  const contentRef = useRef<HTMLIonContentElement>(null);
  const { userLanguage } = useTranslation();
  const userName = sessionStorage.getItem('userName') || 'Sophie';
  
  // Get the contact's language
  const contact = contacts.find(c => c.name === contactName);
  const contactLanguage = contact?.language || 'English';
  const contactLanguageCode = getLanguageCode(contactLanguage);
  const userLanguageCode = userLanguage.code;

  useEffect(() => {
    if (contactName) {
      setMessages(chatHistory[contactName] || []);
    }
  }, [contactName]);

  useEffect(() => {
    setTimeout(() => {
      contentRef.current?.scrollToBottom(300);
    }, 100);
  }, [messages, isTyping]);

  // Close popovers when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.info-popover') && !target.closest('.text-info-button') && !target.closest('.read-receipt-button')) {
        setShowInfoPopover({});
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Typing indicator simulation
  useEffect(() => {
    if (newMessage.length > 0) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 2000);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [newMessage]);

  const handleSendMessage = async () => {
    if (newMessage.trim() && !isTranslating) {
      setIsTranslating(true);
      const messageText = newMessage.trim();
      
      let translatedText = messageText;
      let messageBody: string;
      
      if (userLanguageCode !== contactLanguageCode) {
        console.log(`[Chat] Languages differ - User: ${userLanguageCode}, Contact: ${contactLanguageCode}`);
        console.log(`[Chat] Translating message: "${messageText}"`);
        try {
          translatedText = await translateText(messageText, userLanguageCode, contactLanguageCode);
          console.log(`[Chat] Translation complete: "${translatedText}"`);
          messageBody = JSON.stringify({
            original: messageText,
            translated: translatedText
          });
        } catch (error) {
          console.error('[Chat] Translation error:', error);
          messageBody = JSON.stringify({ original: messageText });
        }
      } else {
        console.log(`[Chat] Languages match (${userLanguageCode}), no translation needed`);
        messageBody = JSON.stringify({ original: messageText });
      }

      const message: Message = {
        id: `msg-${Date.now()}`,
        sender: userName,
        text: translatedText,
        originalText: messageText,
        translatedText: translatedText,
        originalLanguage: userLanguage.name,
        timestamp: new Date().toISOString(),
        body: messageBody,
        isTranslated: userLanguageCode !== contactLanguageCode,
        read: false
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
      setIsTranslating(false);
      setIsTyping(false);
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const isToday = date.toDateString() === now.toDateString();
    const isYesterday = diffMs < 86400000 && diffMs > 0 && !isToday;

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (isToday) return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    if (isYesterday) return 'Yesterday';
    if (diffHours < 24 * 7) return date.toLocaleDateString('en-US', { weekday: 'short' });
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const toggleOriginal = (index: number) => {
    setSeeOriginal(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleMessageAction = (message: Message, action: string) => {
    setSelectedMessage(message);
    if (action === 'copy') {
      navigator.clipboard.writeText(message.originalText || message.text);
      setShowActionSheet(false);
    } else if (action === 'delete') {
      setMessages(messages.filter(m => m.id !== message.id));
      setShowActionSheet(false);
    }
  };

  const getMessageDisplayText = (message: Message, index: number): string => {
    const isSent = message.sender === userName || message.sender === 'Sophie';
    
    if (isSent) {
      if (message.body) {
        try {
          const parsed = JSON.parse(message.body);
          return parsed.original || message.text;
        } catch {
          return message.originalText || message.text;
        }
      }
      return message.originalText || message.text;
    } else {
      if (seeOriginal[index]) {
        if (message.body) {
          try {
            const parsed = JSON.parse(message.body);
            return parsed.original || message.originalText || message.text;
          } catch {
            return message.originalText || message.text;
          }
        }
        return message.originalText || message.text;
      }
      
      if (message.body) {
        try {
          const parsed = JSON.parse(message.body);
          return parsed.translated || parsed.original || message.text;
        } catch {
          return message.text;
        }
      }
      return message.translatedText || message.text;
    }
  };

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Group messages by date
  const groupMessagesByDate = () => {
    const grouped: { [key: string]: Message[] } = {};
    messages.forEach((message, index) => {
      const date = new Date(message.timestamp);
      const dateKey = date.toDateString();
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(message);
    });
    return grouped;
  };

  const groupedMessages = groupMessagesByDate();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="chat-header-toolbar">
          <IonButtons slot="start" className="header-back-button">
            <IonBackButton defaultHref="/chats" className="custom-back-button" />
          </IonButtons>
          <div className="header-content-wrapper">
            <IonAvatar className="header-avatar">
              <div className="avatar-initials">{getInitials(contactName)}</div>
            </IonAvatar>
            <div className="header-info">
              <IonTitle className="header-title">{contactName}</IonTitle>
              {contact?.isOnline ? (
                <IonText className="online-status">Online</IonText>
              ) : (
                <IonText className="offline-status">{contact?.lastSeen || 'Offline'}</IonText>
              )}
            </div>
          </div>
          <IonButtons slot="end" className="header-end-buttons">
            <IonButton fill="clear" onClick={() => {/* Profile drawer */}}>
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={contentRef} className="chat-content">
        <div className="chat-wrapper">
          <div className="messages-container">
            {Object.entries(groupedMessages).map(([dateKey, dateMessages]) => (
              <React.Fragment key={dateKey}>
                <div className="date-divider">
                  <span>{new Date(dateKey).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                {dateMessages.map((message, index) => {
                  const isSent = message.sender === userName || message.sender === 'Sophie';
                  const displayText = getMessageDisplayText(message, index);
                  const hasTranslation = !isSent && (() => {
                    if (message.body) {
                      try {
                        const parsed = JSON.parse(message.body);
                        return parsed.translated && parsed.translated !== parsed.original;
                      } catch {
                        return false;
                      }
                    }
                    return !!(message.originalText && message.translatedText && message.originalText !== message.translatedText);
                  })();
                  const showingOriginal = seeOriginal[index];
                  
                  // Get original and translated text for info display
                  const getOriginalText = () => {
                    if (message.body) {
                      try {
                        const parsed = JSON.parse(message.body);
                        return parsed.original || message.originalText || message.text;
                      } catch {
                        return message.originalText || message.text;
                      }
                    }
                    return message.originalText || message.text;
                  };

                  const getTranslatedText = () => {
                    if (message.body) {
                      try {
                        const parsed = JSON.parse(message.body);
                        return parsed.translated || message.translatedText || message.text;
                      } catch {
                        return message.translatedText || message.text;
                      }
                    }
                    return message.translatedText || message.text;
                  };

                  const originalText = getOriginalText();
                  const translatedText = getTranslatedText();
                  const isTranslated = originalText !== translatedText && translatedText !== message.text;
                  
                  return (
                    <div
                      key={message.id || index}
                      className={`message-container ${isSent ? 'message-sent' : 'message-received'}`}
                    >
                      <div className={`message-avatar-wrapper ${isSent ? 'avatar-sent' : 'avatar-received'}`}>
                        <IonAvatar className="message-avatar">
                          <div className="avatar-initials">{getInitials(isSent ? userName : contactName)}</div>
                        </IonAvatar>
                        {!isSent && hasTranslation && (
                          <button
                            onClick={() => toggleOriginal(index)}
                            className="translate-button"
                            title={showingOriginal ? 'Show translated' : 'Show original'}
                          >
                            <IonIcon icon={language} />
                          </button>
                        )}
                      </div>
                      <div className={`message-body ${isSent ? 'body-sent' : 'body-received'}`}>
                        {!isSent && (
                          <div className="message-sender-info">
                            <span className="sender-name">{message.sender}</span>
                            <span className="message-time-header">{formatMessageTime(message.timestamp)}</span>
                          </div>
                        )}
                        <div 
                          className={`message-bubble ${isSent ? 'bubble-sent' : showingOriginal ? 'bubble-received-original' : 'bubble-received'}`}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            setSelectedMessage(message);
                            setShowActionSheet(true);
                          }}
                        >
                          <div className="message-text-wrapper">
                            <div className="message-text-content">
                              {displayText}
                              {/* Text type badge */}
                              {isTranslated && (
                                <span className={`text-type-badge ${showingOriginal ? 'badge-original' : 'badge-translated'}`}>
                                  {showingOriginal ? '📝 Original' : isSent ? '📝 Sent' : '🌐 Translated'}
                                </span>
                              )}
                            </div>
                            {/* Info icon for text type indicator */}
                            {isTranslated && (
                              <button
                                className="text-info-button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowInfoPopover(prev => ({
                                    ...prev,
                                    [index]: !prev[index]
                                  }));
                                }}
                                title={showingOriginal ? 'Click to see translation details' : isSent ? 'Click to see translation details' : 'Click to see original text'}
                              >
                                <IonIcon icon={informationCircle} />
                              </button>
                            )}
                          </div>
                          <div className="message-footer">
                            <span className="message-time">{formatMessageTime(message.timestamp)}</span>
                            <div className="message-status-group">
                              {/* Read receipt info icon */}
                              {isSent && (
                                <button
                                  className="read-receipt-button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowInfoPopover(prev => ({
                                      ...prev,
                                      [`read-${index}`]: !prev[`read-${index}`]
                                    }));
                                  }}
                                  title={message.read ? 'Read' : 'Sent'}
                                >
                                  {message.read ? (
                                    <span className="double-checkmark">
                                      <IonIcon icon={checkmark} className="read-icon checkmark-first" />
                                      <IonIcon icon={checkmark} className="read-icon checkmark-second" />
                                    </span>
                                  ) : (
                                    <IonIcon icon={time} className="sent-icon" />
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                          {/* Info Popover for text type */}
                          {showInfoPopover[index] && (
                            <div className="info-popover">
                              <div className="info-popover-content">
                                <div className="info-item">
                                  <IonText className="info-label">
                                    {showingOriginal ? '📝 Original Text' : isSent ? '📝 Your Message' : '🌐 Translated Text'}
                                  </IonText>
                                  <IonText className="info-value">{displayText}</IonText>
                                </div>
                                {isTranslated && !showingOriginal && !isSent && (
                                  <div className="info-item">
                                    <IonText className="info-label">📝 Original Text ({message.originalLanguage || contactLanguage})</IonText>
                                    <IonText className="info-value">{originalText}</IonText>
                                  </div>
                                )}
                                {isTranslated && isSent && (
                                  <div className="info-item">
                                    <IonText className="info-label">🌐 Translated for {contactLanguage}</IonText>
                                    <IonText className="info-value">{translatedText}</IonText>
                                  </div>
                                )}
                                <button
                                  className="close-popover-button"
                                  onClick={() => setShowInfoPopover(prev => ({ ...prev, [index]: false }))}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                          {/* Read receipt popover */}
                          {showInfoPopover[`read-${index}`] && isSent && (
                            <div className="info-popover read-receipt-popover">
                              <div className="info-popover-content">
                                <div className="info-item">
                                  <IonText className="info-label">📬 Message Status</IonText>
                                  <IonText className="info-value">
                                    {message.read ? (
                                      <>
                                        <span className="double-checkmark-inline">
                                          <IonIcon icon={checkmark} className="read-status-icon" />
                                          <IonIcon icon={checkmark} className="read-status-icon" />
                                        </span>
                                        Read by {contactName}
                                      </>
                                    ) : (
                                      <>
                                        <IonIcon icon={time} className="sent-status-icon" />
                                        Sent - Not read yet
                                      </>
                                    )}
                                  </IonText>
                                </div>
                                <div className="info-item">
                                  <IonText className="info-label">🕐 Sent Time</IonText>
                                  <IonText className="info-value">{formatTime(message.timestamp)}</IonText>
                                </div>
                                {message.read && (
                                  <div className="info-item">
                                    <IonText className="info-label">👁️ Read Time</IonText>
                                    <IonText className="info-value">Just now</IonText>
                                  </div>
                                )}
                                <button
                                  className="close-popover-button"
                                  onClick={() => setShowInfoPopover(prev => ({ ...prev, [`read-${index}`]: false }))}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        {message.reactions && message.reactions.length > 0 && (
                          <div className="message-reactions">
                            {message.reactions.map((emoji, i) => (
                              <span key={i} className="reaction-emoji">{emoji}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <IonText className="typing-text">{contactName} is typing...</IonText>
              </div>
            )}
            
            {isTranslating && (
              <div className="translating-indicator">
                <IonText color="medium">Translating...</IonText>
              </div>
            )}
          </div>

          <div className="input-container">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="input-form">
              <IonItem className="input-item" lines="none">
                <IonButton
                  fill="clear"
                  slot="start"
                  className="emoji-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowEmojiPicker(!showEmojiPicker);
                  }}
                >
                  <IonIcon icon={happy} />
                </IonButton>
                <IonInput
                  value={newMessage}
                  placeholder="Write a message"
                  onIonInput={(e) => setNewMessage(e.detail.value!)}
                  className="message-input"
                  disabled={isTranslating}
                />
                <IonButton
                  type="submit"
                  fill="clear"
                  className="send-button"
                  disabled={!newMessage.trim() || isTranslating}
                >
                  <IonIcon icon={send} />
                </IonButton>
              </IonItem>
            </form>
          </div>
        </div>
      </IonContent>

      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: 'Copy',
            icon: copy,
            handler: () => {
              if (selectedMessage) {
                handleMessageAction(selectedMessage, 'copy');
              }
            }
          },
          {
            text: 'Delete',
            icon: trash,
            role: 'destructive',
            handler: () => {
              if (selectedMessage) {
                handleMessageAction(selectedMessage, 'delete');
              }
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]}
      />
      {/* Footer hidden on chat detail pages to save space */}
    </IonPage>
  );
};

export default ChatDetailPage;
