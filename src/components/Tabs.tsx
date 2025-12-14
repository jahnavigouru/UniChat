import React from 'react';
import { IonIcon, IonLabel } from '@ionic/react';
import { chatbubbles, settings, person, informationCircle } from 'ionicons/icons';
import { useLocation, useHistory } from 'react-router-dom';
import './Tabs.css';

const Tabs: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const currentPath = location.pathname;

  // Hide tabs on login and chat detail pages
  if (currentPath === '/login' || currentPath.startsWith('/chat/')) {
    return null;
  }

  const handleTabClick = (path: string) => {
    if (currentPath !== path) {
      history.push(path);
    }
  };

  return (
    <div className="app-tabs-container">
      <div className="app-tabs">
        <button 
          className={`tab-button ${currentPath === '/chats' ? 'active' : ''}`}
          onClick={() => handleTabClick('/chats')}
        >
          <IonIcon icon={chatbubbles} />
          <IonLabel>Messages</IonLabel>
        </button>

        <button 
          className={`tab-button ${currentPath === '/settings' ? 'active' : ''}`}
          onClick={() => handleTabClick('/settings')}
        >
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </button>

        <button 
          className={`tab-button ${currentPath === '/profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('/profile')}
        >
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </button>

        <button 
          className={`tab-button ${currentPath === '/about' ? 'active' : ''}`}
          onClick={() => handleTabClick('/about')}
        >
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </button>
      </div>
    </div>
  );
};

export default Tabs;

