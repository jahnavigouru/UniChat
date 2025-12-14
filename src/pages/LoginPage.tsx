import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from '../context/TranslationContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const { supportedLanguages, setUserLanguage, userLanguage } = useTranslation();
  const history = useHistory();

  const handleContinue = () => {
    if (name.trim()) {
      // Store user info in sessionStorage
      sessionStorage.setItem('userName', name);
      // Language is already stored in context
      history.push('/chats');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UniChat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="login-content">
        <div className="login-container">
          <div className="welcome-section">
            <IonText color="primary">
              <h1 className="app-title">UniChat</h1>
            </IonText>
            <p className="welcome-text">Connect with friends across languages</p>
          </div>

          <div className="form-section">
            <IonItem className="form-item">
              <IonLabel position="stacked">Your Name</IonLabel>
              <IonInput
                value={name}
                placeholder="Enter your name"
                onIonInput={(e) => setName(e.detail.value!)}
                clearOnEdit={false}
              />
            </IonItem>

            <IonItem className="form-item">
              <IonLabel position="stacked">Preferred Language</IonLabel>
              <IonSelect
                value={userLanguage.name}
                placeholder="Select language"
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

            <IonButton
              expand="block"
              className="continue-button"
              onClick={handleContinue}
              disabled={!name.trim()}
            >
              Continue
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;

