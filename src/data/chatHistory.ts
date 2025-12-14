export interface Message {
  sender: string;
  text: string;
  originalLanguage?: string;
  originalText?: string;
  translatedText?: string;
  timestamp: string;
  // New structure to match multilingual app format
  body?: string; // JSON string with {original, translated}
  isTranslated?: boolean;
  read?: boolean; // Read receipt
  reactions?: string[]; // Emoji reactions
  id?: string; // Unique message ID
}

export interface Contact {
  name: string;
  language: string;
  lastMessage?: string;
  isOnline?: boolean;
  lastSeen?: string;
  unreadCount?: number;
  avatar?: string;
}

export interface ChatHistory {
  [contactName: string]: Message[];
}

export const chatHistory: ChatHistory = {
  Alex: [
    {
      id: '1',
      sender: 'Sophie',
      text: 'Hey Alex! Quick question about the meeting.',
      translatedText: 'Hey Alex! Quick question about the meeting.',
      body: JSON.stringify({ original: 'Hey Alex! Quick question about the meeting.', translated: 'Hey Alex! Quick question about the meeting.' }),
      timestamp: '2024-01-12T16:00:00Z',
      read: true
    },
    {
      id: '2',
      sender: 'Alex',
      text: 'Sure, what do you need?',
      body: JSON.stringify({ original: 'Sure, what do you need?', translated: 'Sure, what do you need?' }),
      timestamp: '2024-01-12T16:02:00Z',
      read: true
    },
    {
      id: '3',
      sender: 'Sophie',
      text: 'Can we move it to 4 PM instead of 3?',
      translatedText: 'Can we move it to 4 PM instead of 3?',
      body: JSON.stringify({ original: 'Can we move it to 4 PM instead of 3?', translated: 'Can we move it to 4 PM instead of 3?' }),
      timestamp: '2024-01-12T16:05:00Z',
      read: true
    },
    {
      id: '4',
      sender: 'Alex',
      text: 'No problem! 4 PM works for me.',
      body: JSON.stringify({ original: 'No problem! 4 PM works for me.', translated: 'No problem! 4 PM works for me.' }),
      timestamp: '2024-01-12T16:07:00Z',
      read: true
    },
    {
      id: '5',
      sender: 'Sophie',
      text: 'Thanks! See you then.',
      translatedText: 'Thanks! See you then.',
      body: JSON.stringify({ original: 'Thanks! See you then.', translated: 'Thanks! See you then.' }),
      timestamp: '2024-01-12T16:10:00Z',
      read: true
    },
    {
      id: '6',
      sender: 'Alex',
      text: 'Great. Also, I updated the slides — check them when you can.',
      body: JSON.stringify({ original: 'Great. Also, I updated the slides — check them when you can.', translated: 'Great. Also, I updated the slides — check them when you can.' }),
      timestamp: '2024-01-12T16:15:00Z',
      read: true
    },
    {
      id: '7',
      sender: 'Sophie',
      text: 'Perfect! I\'ll review them before the meeting.',
      translatedText: 'Perfect! I\'ll review them before the meeting.',
      body: JSON.stringify({ original: 'Perfect! I\'ll review them before the meeting.', translated: 'Perfect! I\'ll review them before the meeting.' }),
      timestamp: '2024-01-12T16:20:00Z',
      read: true
    },
    {
      id: '8',
      sender: 'Alex',
      text: 'Sounds good. Let me know if you have any questions.',
      body: JSON.stringify({ original: 'Sounds good. Let me know if you have any questions.', translated: 'Sounds good. Let me know if you have any questions.' }),
      timestamp: '2024-01-12T16:22:00Z',
      read: true
    },
    {
      id: '9',
      sender: 'Sophie',
      text: 'Will do! Thanks for being flexible with the time.',
      translatedText: 'Will do! Thanks for being flexible with the time.',
      body: JSON.stringify({ original: 'Will do! Thanks for being flexible with the time.', translated: 'Will do! Thanks for being flexible with the time.' }),
      timestamp: '2024-01-12T16:25:00Z',
      read: true
    },
    {
      id: '10',
      sender: 'Alex',
      text: 'No worries at all. See you at 4!',
      body: JSON.stringify({ original: 'No worries at all. See you at 4!', translated: 'No worries at all. See you at 4!' }),
      timestamp: '2024-01-12T16:27:00Z',
      read: true
    },
    {
      id: '11',
      sender: 'Sophie',
      text: 'Looking forward to it!',
      translatedText: 'Looking forward to it!',
      body: JSON.stringify({ original: 'Looking forward to it!', translated: 'Looking forward to it!' }),
      timestamp: '2024-01-12T16:30:00Z',
      read: true
    }
  ],
  María: [
    {
      id: '7',
      sender: 'Sophie',
      text: 'Hi María! How are you?',
      translatedText: '¡Hola María! ¿Cómo estás?',
      body: JSON.stringify({ original: 'Hi María! How are you?', translated: '¡Hola María! ¿Cómo estás?' }),
      timestamp: '2024-01-14T14:00:00Z',
      read: true
    },
    {
      id: '8',
      sender: 'María',
      text: '¡Hola! Estoy muy bien, gracias por preguntar.',
      originalLanguage: 'Spanish',
      originalText: '¡Hola! Estoy muy bien, gracias por preguntar.',
      translatedText: 'Hello! I am very well, thank you for asking.',
      body: JSON.stringify({ original: '¡Hola! Estoy muy bien, gracias por preguntar.', translated: 'Hello! I am very well, thank you for asking.' }),
      timestamp: '2024-01-14T14:03:00Z',
      read: true
    },
    {
      id: '9',
      sender: 'Sophie',
      text: 'That\'s wonderful! Did you finish reading that book?',
      translatedText: '¡Eso es maravilloso! ¿Terminaste de leer ese libro?',
      body: JSON.stringify({ original: 'That\'s wonderful! Did you finish reading that book?', translated: '¡Eso es maravilloso! ¿Terminaste de leer ese libro?' }),
      timestamp: '2024-01-14T14:05:00Z',
      read: true
    },
    {
      id: '10',
      sender: 'María',
      text: 'Todavía no, pero ya casi termino. ¡Es muy interesante!',
      originalLanguage: 'Spanish',
      originalText: 'Todavía no, pero ya casi termino. ¡Es muy interesante!',
      translatedText: 'Not yet, but I am almost done. It is very interesting!',
      body: JSON.stringify({ original: 'Todavía no, pero ya casi termino. ¡Es muy interesante!', translated: 'Not yet, but I am almost done. It is very interesting!' }),
      timestamp: '2024-01-14T14:08:00Z',
      read: true
    },
    {
      id: '11',
      sender: 'Sophie',
      text: 'I can\'t wait to hear your thoughts on it!',
      translatedText: '¡No puedo esperar a escuchar tus pensamientos sobre eso!',
      body: JSON.stringify({ original: 'I can\'t wait to hear your thoughts on it!', translated: '¡No puedo esperar a escuchar tus pensamientos sobre eso!' }),
      timestamp: '2024-01-14T14:10:00Z',
      read: true
    },
    {
      id: '12',
      sender: 'María',
      text: '¡Te escribiré cuando lo termine esta noche!',
      originalLanguage: 'Spanish',
      originalText: '¡Te escribiré cuando lo termine esta noche!',
      translatedText: 'I\'ll message you once I finish it tonight!',
      body: JSON.stringify({ original: '¡Te escribiré cuando lo termine esta noche!', translated: 'I\'ll message you once I finish it tonight!' }),
      timestamp: '2024-01-14T14:12:00Z',
      read: false
    },
    {
      id: '13',
      sender: 'Sophie',
      text: 'That sounds perfect! I\'m excited to hear your thoughts.',
      translatedText: '¡Eso suena perfecto! Estoy emocionada de escuchar tus pensamientos.',
      body: JSON.stringify({ original: 'That sounds perfect! I\'m excited to hear your thoughts.', translated: '¡Eso suena perfecto! Estoy emocionada de escuchar tus pensamientos.' }),
      timestamp: '2024-01-14T14:15:00Z',
      read: true
    },
    {
      id: '14',
      sender: 'María',
      text: '¡Gracias! Realmente estoy disfrutando mucho la lectura.',
      originalLanguage: 'Spanish',
      originalText: '¡Gracias! Realmente estoy disfrutando mucho la lectura.',
      translatedText: 'Thank you! I\'m really enjoying reading it a lot.',
      body: JSON.stringify({ original: '¡Gracias! Realmente estoy disfrutando mucho la lectura.', translated: 'Thank you! I\'m really enjoying reading it a lot.' }),
      timestamp: '2024-01-14T14:18:00Z',
      read: true
    },
    {
      id: '15',
      sender: 'Sophie',
      text: 'That\'s wonderful! What chapter are you on?',
      translatedText: '¡Eso es maravilloso! ¿En qué capítulo estás?',
      body: JSON.stringify({ original: 'That\'s wonderful! What chapter are you on?', translated: '¡Eso es maravilloso! ¿En qué capítulo estás?' }),
      timestamp: '2024-01-14T14:20:00Z',
      read: true
    },
    {
      id: '16',
      sender: 'María',
      text: 'Estoy en el capítulo 12. Quedan solo tres capítulos más.',
      originalLanguage: 'Spanish',
      originalText: 'Estoy en el capítulo 12. Quedan solo tres capítulos más.',
      translatedText: 'I\'m on chapter 12. Only three more chapters left.',
      body: JSON.stringify({ original: 'Estoy en el capítulo 12. Quedan solo tres capítulos más.', translated: 'I\'m on chapter 12. Only three more chapters left.' }),
      timestamp: '2024-01-14T14:22:00Z',
      read: true
    },
    {
      id: '17',
      sender: 'Sophie',
      text: 'You\'re almost done! The ending is really good.',
      translatedText: '¡Ya casi terminas! El final es realmente bueno.',
      body: JSON.stringify({ original: 'You\'re almost done! The ending is really good.', translated: '¡Ya casi terminas! El final es realmente bueno.' }),
      timestamp: '2024-01-14T14:25:00Z',
      read: true
    },
    {
      id: '18',
      sender: 'María',
      text: '¡No me digas más! No quiero spoilers.',
      originalLanguage: 'Spanish',
      originalText: '¡No me digas más! No quiero spoilers.',
      translatedText: 'Don\'t tell me more! I don\'t want spoilers.',
      body: JSON.stringify({ original: '¡No me digas más! No quiero spoilers.', translated: 'Don\'t tell me more! I don\'t want spoilers.' }),
      timestamp: '2024-01-14T14:27:00Z',
      read: true
    },
    {
      id: '19',
      sender: 'Sophie',
      text: 'Haha, okay! I\'ll keep quiet. Enjoy the rest!',
      translatedText: '¡Jaja, está bien! Me quedaré callada. ¡Disfruta el resto!',
      body: JSON.stringify({ original: 'Haha, okay! I\'ll keep quiet. Enjoy the rest!', translated: '¡Jaja, está bien! Me quedaré callada. ¡Disfruta el resto!' }),
      timestamp: '2024-01-14T14:30:00Z',
      read: true
    },
    {
      id: '20',
      sender: 'María',
      text: '¡Gracias! Te escribiré cuando termine.',
      originalLanguage: 'Spanish',
      originalText: '¡Gracias! Te escribiré cuando termine.',
      translatedText: 'Thank you! I\'ll message you when I finish.',
      body: JSON.stringify({ original: '¡Gracias! Te escribiré cuando termine.', translated: 'Thank you! I\'ll message you when I finish.' }),
      timestamp: '2024-01-14T14:32:00Z',
      read: false
    }
  ],
  'Min-jun': [
    {
      id: '13',
      sender: 'Sophie',
      text: 'Hello Min-jun! Hope you\'re having a good day.',
      translatedText: '안녕 민준! 좋은 하루 보내고 있길 바라.',
      body: JSON.stringify({ original: 'Hello Min-jun! Hope you\'re having a good day.', translated: '안녕 민준! 좋은 하루 보내고 있길 바라.' }),
      timestamp: '2024-01-13T09:00:00Z',
      read: true
    },
    {
      id: '14',
      sender: 'Min-jun',
      text: '안녕하세요! 네, 제 하루가 잘 지나가고 있습니다. 감사합니다.',
      originalLanguage: 'Korean',
      originalText: '안녕하세요! 네, 제 하루가 잘 지나가고 있습니다. 감사합니다.',
      translatedText: 'Hello! Yes, my day is going well. Thank you.',
      body: JSON.stringify({ original: '안녕하세요! 네, 제 하루가 잘 지나가고 있습니다. 감사합니다.', translated: 'Hello! Yes, my day is going well. Thank you.' }),
      timestamp: '2024-01-13T09:05:00Z',
      read: true
    },
    {
      id: '15',
      sender: 'Sophie',
      text: 'Are we still meeting tomorrow for coffee?',
      translatedText: '내일 커피 마시러 만나기로 한 거 맞지?',
      body: JSON.stringify({ original: 'Are we still meeting tomorrow for coffee?', translated: '내일 커피 마시러 만나기로 한 거 맞지?' }),
      timestamp: '2024-01-13T09:10:00Z',
      read: true
    },
    {
      id: '16',
      sender: 'Min-jun',
      text: '네, 물론입니다! 오후 3시에 뵙겠습니다.',
      originalLanguage: 'Korean',
      originalText: '네, 물론입니다! 오후 3시에 뵙겠습니다.',
      translatedText: 'Yes, of course! I will see you at 3 PM.',
      body: JSON.stringify({ original: '네, 물론입니다! 오후 3시에 뵙겠습니다.', translated: 'Yes, of course! I will see you at 3 PM.' }),
      timestamp: '2024-01-13T09:12:00Z',
      read: true
    },
    {
      id: '17',
      sender: 'Sophie',
      text: 'Perfect! See you then!',
      translatedText: '완벽해! 그때 봐!',
      body: JSON.stringify({ original: 'Perfect! See you then!', translated: '완벽해! 그때 봐!' }),
      timestamp: '2024-01-13T09:15:00Z',
      read: true
    },
    {
      id: '18',
      sender: 'Min-jun',
      text: '혹시 당신을 위해 무엇을 가져갈까요?',
      originalLanguage: 'Korean',
      originalText: '혹시 당신을 위해 무엇을 가져갈까요?',
      translatedText: 'Do you want me to bring anything for you?',
      body: JSON.stringify({ original: '혹시 당신을 위해 무엇을 가져갈까요?', translated: 'Do you want me to bring anything for you?' }),
      timestamp: '2024-01-13T09:17:00Z',
      read: false
    },
    {
      id: '19',
      sender: 'Sophie',
      text: 'No, I\'m good! Just bring yourself.',
      translatedText: '아니요, 괜찮아요! 그냥 오세요.',
      body: JSON.stringify({ original: 'No, I\'m good! Just bring yourself.', translated: '아니요, 괜찮아요! 그냥 오세요.' }),
      timestamp: '2024-01-13T09:20:00Z',
      read: true
    },
    {
      id: '20',
      sender: 'Min-jun',
      text: '알겠습니다! 그럼 내일 봐요.',
      originalLanguage: 'Korean',
      originalText: '알겠습니다! 그럼 내일 봐요.',
      translatedText: 'Okay! See you tomorrow then.',
      body: JSON.stringify({ original: '알겠습니다! 그럼 내일 봐요.', translated: 'Okay! See you tomorrow then.' }),
      timestamp: '2024-01-13T09:22:00Z',
      read: true
    },
    {
      id: '21',
      sender: 'Sophie',
      text: 'Looking forward to it! Have a great day!',
      translatedText: '기대하고 있어요! 좋은 하루 보내세요!',
      body: JSON.stringify({ original: 'Looking forward to it! Have a great day!', translated: '기대하고 있어요! 좋은 하루 보내세요!' }),
      timestamp: '2024-01-13T09:25:00Z',
      read: true
    },
    {
      id: '22',
      sender: 'Min-jun',
      text: '감사합니다! 당신도 좋은 하루 보내세요!',
      originalLanguage: 'Korean',
      originalText: '감사합니다! 당신도 좋은 하루 보내세요!',
      translatedText: 'Thank you! Have a great day too!',
      body: JSON.stringify({ original: '감사합니다! 당신도 좋은 하루 보내세요!', translated: 'Thank you! Have a great day too!' }),
      timestamp: '2024-01-13T09:27:00Z',
      read: true
    }
  ],
  Priya: [
    {
      id: '19',
      sender: 'Sophie',
      text: 'Hi Priya! How are you doing today?',
      translatedText: 'नमस्ते प्रिया! आज तुम कैसी हो?',
      body: JSON.stringify({ original: 'Hi Priya! How are you doing today?', translated: 'नमस्ते प्रिया! आज तुम कैसी हो?' }),
      timestamp: '2024-01-15T10:00:00Z',
      read: true
    },
    {
      id: '20',
      sender: 'Priya',
      text: 'मैं ठीक हूँ, धन्यवाद! आप कैसे हैं?',
      originalLanguage: 'Hindi',
      originalText: 'मैं ठीक हूँ, धन्यवाद! आप कैसे हैं?',
      translatedText: 'I am doing well, thank you! How about you?',
      body: JSON.stringify({ original: 'मैं ठीक हूँ, धन्यवाद! आप कैसे हैं?', translated: 'I am doing well, thank you! How about you?' }),
      timestamp: '2024-01-15T10:02:00Z',
      read: true
    },
    {
      id: '21',
      sender: 'Sophie',
      text: 'Great! I wanted to ask you about the project we discussed.',
      translatedText: 'बढ़िया! मैं आपसे उस प्रोजेक्ट के बारे में पूछना चाहती थी जिस पर हमने चर्चा की थी।',
      body: JSON.stringify({ original: 'Great! I wanted to ask you about the project we discussed.', translated: 'बढ़िया! मैं आपसे उस प्रोजेक्ट के बारे में पूछना चाहती थी जिस पर हमने चर्चा की थी।' }),
      timestamp: '2024-01-15T10:05:00Z',
      read: true
    },
    {
      id: '22',
      sender: 'Priya',
      text: 'हाँ, मैं इस पर काम कर रही हूँ। मैं आपको जल्द ही विवरण भेजूंगी।',
      originalLanguage: 'Hindi',
      originalText: 'हाँ, मैं इस पर काम कर रही हूँ। मैं आपको जल्द ही विवरण भेजूंगी।',
      translatedText: 'Yes, I have been working on it. I will send you the details soon.',
      body: JSON.stringify({ original: 'हाँ, मैं इस पर काम कर रही हूँ। मैं आपको जल्द ही विवरण भेजूंगी।', translated: 'Yes, I have been working on it. I will send you the details soon.' }),
      timestamp: '2024-01-15T10:07:00Z',
      read: true
    },
    {
      id: '23',
      sender: 'Sophie',
      text: 'Perfect! Looking forward to it.',
      translatedText: 'बिल्कुल सही! इसकी प्रतीक्षा कर रही हूँ।',
      body: JSON.stringify({ original: 'Perfect! Looking forward to it.', translated: 'बिल्कुल सही! इसकी प्रतीक्षा कर रही हूँ।' }),
      timestamp: '2024-01-15T10:10:00Z',
      read: true
    },
    {
      id: '24',
      sender: 'Priya',
      text: 'मैं शाम तक पहला ड्राफ्ट भेज दूंगी।',
      originalLanguage: 'Hindi',
      originalText: 'मैं शाम तक पहला ड्राफ्ट भेज दूंगी।',
      translatedText: 'I\'ll send the first draft by evening.',
      body: JSON.stringify({ original: 'मैं शाम तक पहला ड्राफ्ट भेज दूंगी।', translated: 'I\'ll send the first draft by evening.' }),
      timestamp: '2024-01-15T10:12:00Z',
      read: false
    },
    {
      id: '25',
      sender: 'Sophie',
      text: 'That would be perfect! Take your time.',
      translatedText: 'यह बिल्कुल सही होगा! अपना समय लें।',
      body: JSON.stringify({ original: 'That would be perfect! Take your time.', translated: 'यह बिल्कुल सही होगा! अपना समय लें।' }),
      timestamp: '2024-01-15T10:15:00Z',
      read: true
    },
    {
      id: '26',
      sender: 'Priya',
      text: 'धन्यवाद! मैं इसे जल्द से जल्द पूरा करने की कोशिश करूंगी।',
      originalLanguage: 'Hindi',
      originalText: 'धन्यवाद! मैं इसे जल्द से जल्द पूरा करने की कोशिश करूंगी।',
      translatedText: 'Thank you! I\'ll try to complete it as soon as possible.',
      body: JSON.stringify({ original: 'धन्यवाद! मैं इसे जल्द से जल्द पूरा करने की कोशिश करूंगी।', translated: 'Thank you! I\'ll try to complete it as soon as possible.' }),
      timestamp: '2024-01-15T10:18:00Z',
      read: true
    },
    {
      id: '27',
      sender: 'Sophie',
      text: 'No rush! Quality is more important than speed.',
      translatedText: 'कोई जल्दबाजी नहीं! गुणवत्ता गति से अधिक महत्वपूर्ण है।',
      body: JSON.stringify({ original: 'No rush! Quality is more important than speed.', translated: 'कोई जल्दबाजी नहीं! गुणवत्ता गति से अधिक महत्वपूर्ण है।' }),
      timestamp: '2024-01-15T10:20:00Z',
      read: true
    },
    {
      id: '28',
      sender: 'Priya',
      text: 'बिल्कुल सही! मैं इसे ध्यान से करूंगी।',
      originalLanguage: 'Hindi',
      originalText: 'बिल्कुल सही! मैं इसे ध्यान से करूंगी।',
      translatedText: 'Absolutely! I\'ll do it carefully.',
      body: JSON.stringify({ original: 'बिल्कुल सही! मैं इसे ध्यान से करूंगी।', translated: 'Absolutely! I\'ll do it carefully.' }),
      timestamp: '2024-01-15T10:22:00Z',
      read: true
    },
    {
      id: '29',
      sender: 'Sophie',
      text: 'Great! I trust your work completely.',
      translatedText: 'बढ़िया! मुझे आपके काम पर पूरा भरोसा है।',
      body: JSON.stringify({ original: 'Great! I trust your work completely.', translated: 'बढ़िया! मुझे आपके काम पर पूरा भरोसा है।' }),
      timestamp: '2024-01-15T10:25:00Z',
      read: true
    },
    {
      id: '30',
      sender: 'Priya',
      text: 'यह बहुत अच्छा लगा सुनकर! मैं आपको अपडेट रखूंगी।',
      originalLanguage: 'Hindi',
      originalText: 'यह बहुत अच्छा लगा सुनकर! मैं आपको अपडेट रखूंगी।',
      translatedText: 'That means a lot to hear! I\'ll keep you updated.',
      body: JSON.stringify({ original: 'यह बहुत अच्छा लगा सुनकर! मैं आपको अपडेट रखूंगी।', translated: 'That means a lot to hear! I\'ll keep you updated.' }),
      timestamp: '2024-01-15T10:27:00Z',
      read: false
    }
  ],
  // New contacts - 20 more in different languages
  'Jean-Pierre': [
    {
      id: '25',
      sender: 'Sophie',
      text: 'Bonjour Jean-Pierre! Comment allez-vous?',
      translatedText: 'Hello Jean-Pierre! How are you?',
      body: JSON.stringify({ original: 'Bonjour Jean-Pierre! Comment allez-vous?', translated: 'Hello Jean-Pierre! How are you?' }),
      timestamp: '2024-01-16T08:00:00Z',
      read: true
    },
    {
      id: '26',
      sender: 'Jean-Pierre',
      text: 'Je vais très bien, merci! Et vous?',
      originalLanguage: 'French',
      originalText: 'Je vais très bien, merci! Et vous?',
      translatedText: 'I am doing very well, thank you! And you?',
      body: JSON.stringify({ original: 'Je vais très bien, merci! Et vous?', translated: 'I am doing very well, thank you! And you?' }),
      timestamp: '2024-01-16T08:05:00Z',
      read: true
    },
    {
      id: '27',
      sender: 'Sophie',
      text: 'Great! Are you free this weekend?',
      translatedText: 'Parfait! Êtes-vous libre ce week-end?',
      body: JSON.stringify({ original: 'Great! Are you free this weekend?', translated: 'Parfait! Êtes-vous libre ce week-end?' }),
      timestamp: '2024-01-16T08:10:00Z',
      read: false
    },
    {
      id: '28',
      sender: 'Jean-Pierre',
      text: 'Oui, je suis libre samedi après-midi. Ça vous convient?',
      originalLanguage: 'French',
      originalText: 'Oui, je suis libre samedi après-midi. Ça vous convient?',
      translatedText: 'Yes, I\'m free Saturday afternoon. Does that work for you?',
      body: JSON.stringify({ original: 'Oui, je suis libre samedi après-midi. Ça vous convient?', translated: 'Yes, I\'m free Saturday afternoon. Does that work for you?' }),
      timestamp: '2024-01-16T08:15:00Z',
      read: true
    },
    {
      id: '29',
      sender: 'Sophie',
      text: 'Perfect! Saturday afternoon works great for me.',
      translatedText: 'Parfait! Samedi après-midi me convient parfaitement.',
      body: JSON.stringify({ original: 'Perfect! Saturday afternoon works great for me.', translated: 'Parfait! Samedi après-midi me convient parfaitement.' }),
      timestamp: '2024-01-16T08:18:00Z',
      read: true
    },
    {
      id: '30',
      sender: 'Jean-Pierre',
      text: 'Excellent! Où voulez-vous nous rencontrer?',
      originalLanguage: 'French',
      originalText: 'Excellent! Où voulez-vous nous rencontrer?',
      translatedText: 'Excellent! Where would you like to meet?',
      body: JSON.stringify({ original: 'Excellent! Où voulez-vous nous rencontrer?', translated: 'Excellent! Where would you like to meet?' }),
      timestamp: '2024-01-16T08:20:00Z',
      read: true
    },
    {
      id: '31',
      sender: 'Sophie',
      text: 'How about the café on Main Street?',
      translatedText: 'Que diriez-vous du café sur la rue principale?',
      body: JSON.stringify({ original: 'How about the café on Main Street?', translated: 'Que diriez-vous du café sur la rue principale?' }),
      timestamp: '2024-01-16T08:22:00Z',
      read: true
    },
    {
      id: '32',
      sender: 'Jean-Pierre',
      text: 'Parfait! Je connais cet endroit. À 14h?',
      originalLanguage: 'French',
      originalText: 'Parfait! Je connais cet endroit. À 14h?',
      translatedText: 'Perfect! I know that place. At 2 PM?',
      body: JSON.stringify({ original: 'Parfait! Je connais cet endroit. À 14h?', translated: 'Perfect! I know that place. At 2 PM?' }),
      timestamp: '2024-01-16T08:25:00Z',
      read: true
    },
    {
      id: '33',
      sender: 'Sophie',
      text: 'Sounds perfect! See you then!',
      translatedText: 'Ça me va parfaitement! À bientôt!',
      body: JSON.stringify({ original: 'Sounds perfect! See you then!', translated: 'Ça me va parfaitement! À bientôt!' }),
      timestamp: '2024-01-16T08:27:00Z',
      read: true
    }
  ],
  'Hans': [
    {
      id: '28',
      sender: 'Sophie',
      text: 'Hallo Hans! Wie geht es dir?',
      translatedText: 'Hello Hans! How are you?',
      body: JSON.stringify({ original: 'Hallo Hans! Wie geht es dir?', translated: 'Hello Hans! How are you?' }),
      timestamp: '2024-01-16T09:00:00Z',
      read: true
    },
    {
      id: '29',
      sender: 'Hans',
      text: 'Mir geht es gut, danke! Wie kann ich dir helfen?',
      originalLanguage: 'German',
      originalText: 'Mir geht es gut, danke! Wie kann ich dir helfen?',
      translatedText: 'I am fine, thank you! How can I help you?',
      body: JSON.stringify({ original: 'Mir geht es gut, danke! Wie kann ich dir helfen?', translated: 'I am fine, thank you! How can I help you?' }),
      timestamp: '2024-01-16T09:03:00Z',
      read: true
    },
    {
      id: '30',
      sender: 'Sophie',
      text: 'I wanted to discuss the proposal.',
      translatedText: 'Ich wollte den Vorschlag besprechen.',
      body: JSON.stringify({ original: 'I wanted to discuss the proposal.', translated: 'Ich wollte den Vorschlag besprechen.' }),
      timestamp: '2024-01-16T09:05:00Z',
      read: false
    },
    {
      id: '31',
      sender: 'Hans',
      text: 'Natürlich! Wann passt es Ihnen?',
      originalLanguage: 'German',
      originalText: 'Natürlich! Wann passt es Ihnen?',
      translatedText: 'Of course! When would be convenient for you?',
      body: JSON.stringify({ original: 'Natürlich! Wann passt es Ihnen?', translated: 'Of course! When would be convenient for you?' }),
      timestamp: '2024-01-16T09:08:00Z',
      read: true
    },
    {
      id: '32',
      sender: 'Sophie',
      text: 'How about tomorrow morning?',
      translatedText: 'Wie wäre es morgen früh?',
      body: JSON.stringify({ original: 'How about tomorrow morning?', translated: 'Wie wäre es morgen früh?' }),
      timestamp: '2024-01-16T09:10:00Z',
      read: true
    },
    {
      id: '33',
      sender: 'Hans',
      text: 'Das passt mir gut. Um 10 Uhr?',
      originalLanguage: 'German',
      originalText: 'Das passt mir gut. Um 10 Uhr?',
      translatedText: 'That works for me. At 10 AM?',
      body: JSON.stringify({ original: 'Das passt mir gut. Um 10 Uhr?', translated: 'That works for me. At 10 AM?' }),
      timestamp: '2024-01-16T09:12:00Z',
      read: true
    },
    {
      id: '34',
      sender: 'Sophie',
      text: 'Perfect! I\'ll send you the details.',
      translatedText: 'Perfekt! Ich sende Ihnen die Details.',
      body: JSON.stringify({ original: 'Perfect! I\'ll send you the details.', translated: 'Perfekt! Ich sende Ihnen die Details.' }),
      timestamp: '2024-01-16T09:15:00Z',
      read: true
    },
    {
      id: '35',
      sender: 'Hans',
      text: 'Vielen Dank! Bis morgen dann.',
      originalLanguage: 'German',
      originalText: 'Vielen Dank! Bis morgen dann.',
      translatedText: 'Thank you very much! See you tomorrow then.',
      body: JSON.stringify({ original: 'Vielen Dank! Bis morgen dann.', translated: 'Thank you very much! See you tomorrow then.' }),
      timestamp: '2024-01-16T09:17:00Z',
      read: true
    }
  ],
  'Yuki': [
    {
      id: '31',
      sender: 'Sophie',
      text: 'こんにちは、ゆきさん！元気ですか？',
      translatedText: 'Hello Yuki! How are you?',
      body: JSON.stringify({ original: 'こんにちは、ゆきさん！元気ですか？', translated: 'Hello Yuki! How are you?' }),
      timestamp: '2024-01-16T10:00:00Z',
      read: true
    },
    {
      id: '32',
      sender: 'Yuki',
      text: '元気です、ありがとうございます！',
      originalLanguage: 'Japanese',
      originalText: '元気です、ありがとうございます！',
      translatedText: 'I am doing well, thank you very much!',
      body: JSON.stringify({ original: '元気です、ありがとうございます！', translated: 'I am doing well, thank you very much!' }),
      timestamp: '2024-01-16T10:02:00Z',
      read: true
    },
    {
      id: '33',
      sender: 'Sophie',
      text: 'Great! Let\'s meet for lunch tomorrow.',
      translatedText: '素晴らしい！明日ランチをしましょう。',
      body: JSON.stringify({ original: 'Great! Let\'s meet for lunch tomorrow.', translated: '素晴らしい！明日ランチをしましょう。' }),
      timestamp: '2024-01-16T10:05:00Z',
      read: false
    },
    {
      id: '34',
      sender: 'Yuki',
      text: 'いいですね！どこで会いましょうか？',
      originalLanguage: 'Japanese',
      originalText: 'いいですね！どこで会いましょうか？',
      translatedText: 'Sounds good! Where should we meet?',
      body: JSON.stringify({ original: 'いいですね！どこで会いましょうか？', translated: 'Sounds good! Where should we meet?' }),
      timestamp: '2024-01-16T10:08:00Z',
      read: true
    },
    {
      id: '35',
      sender: 'Sophie',
      text: 'How about the restaurant near the station?',
      translatedText: '駅の近くのレストランはどうですか？',
      body: JSON.stringify({ original: 'How about the restaurant near the station?', translated: '駅の近くのレストランはどうですか？' }),
      timestamp: '2024-01-16T10:10:00Z',
      read: true
    },
    {
      id: '36',
      sender: 'Yuki',
      text: '完璧です！12時でいいですか？',
      originalLanguage: 'Japanese',
      originalText: '完璧です！12時でいいですか？',
      translatedText: 'Perfect! Is 12 o\'clock okay?',
      body: JSON.stringify({ original: '完璧です！12時でいいですか？', translated: 'Perfect! Is 12 o\'clock okay?' }),
      timestamp: '2024-01-16T10:12:00Z',
      read: true
    },
    {
      id: '37',
      sender: 'Sophie',
      text: 'Yes, that works perfectly!',
      translatedText: 'はい、完璧です！',
      body: JSON.stringify({ original: 'Yes, that works perfectly!', translated: 'はい、完璧です！' }),
      timestamp: '2024-01-16T10:15:00Z',
      read: true
    },
    {
      id: '38',
      sender: 'Yuki',
      text: '楽しみにしています！',
      originalLanguage: 'Japanese',
      originalText: '楽しみにしています！',
      translatedText: 'Looking forward to it!',
      body: JSON.stringify({ original: '楽しみにしています！', translated: 'Looking forward to it!' }),
      timestamp: '2024-01-16T10:17:00Z',
      read: true
    }
  ],
  'Wei': [
    {
      id: '34',
      sender: 'Sophie',
      text: '你好，伟！最近怎么样？',
      translatedText: 'Hello Wei! How have you been?',
      body: JSON.stringify({ original: '你好，伟！最近怎么样？', translated: 'Hello Wei! How have you been?' }),
      timestamp: '2024-01-16T11:00:00Z',
      read: true
    },
    {
      id: '35',
      sender: 'Wei',
      text: '我工作很忙，但一切都很好。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '我工作很忙，但一切都很好。',
      translatedText: 'I have been very busy with work, but everything is fine.',
      body: JSON.stringify({ original: '我工作很忙，但一切都很好。', translated: 'I have been very busy with work, but everything is fine.' }),
      timestamp: '2024-01-16T11:03:00Z',
      read: true
    },
    {
      id: '36',
      sender: 'Sophie',
      text: 'I understand. Take care of yourself!',
      translatedText: '我理解。照顾好自己！',
      body: JSON.stringify({ original: 'I understand. Take care of yourself!', translated: '我理解。照顾好自己！' }),
      timestamp: '2024-01-16T11:06:00Z',
      read: false
    },
    {
      id: '37',
      sender: 'Wei',
      text: '谢谢你的理解！我会注意的。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '谢谢你的理解！我会注意的。',
      translatedText: 'Thank you for understanding! I\'ll be careful.',
      body: JSON.stringify({ original: '谢谢你的理解！我会注意的。', translated: 'Thank you for understanding! I\'ll be careful.' }),
      timestamp: '2024-01-16T11:08:00Z',
      read: true
    },
    {
      id: '38',
      sender: 'Sophie',
      text: 'Of course! Let me know if you need anything.',
      translatedText: '当然！如果你需要什么，告诉我。',
      body: JSON.stringify({ original: 'Of course! Let me know if you need anything.', translated: '当然！如果你需要什么，告诉我。' }),
      timestamp: '2024-01-16T11:10:00Z',
      read: true
    },
    {
      id: '39',
      sender: 'Wei',
      text: '你真好！我会的。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '你真好！我会的。',
      translatedText: 'You\'re so kind! I will.',
      body: JSON.stringify({ original: '你真好！我会的。', translated: 'You\'re so kind! I will.' }),
      timestamp: '2024-01-16T11:12:00Z',
      read: true
    },
    {
      id: '40',
      sender: 'Sophie',
      text: 'Take care! Talk soon.',
      translatedText: '保重！回头聊。',
      body: JSON.stringify({ original: 'Take care! Talk soon.', translated: '保重！回头聊。' }),
      timestamp: '2024-01-16T11:15:00Z',
      read: true
    }
  ],
  'Carlos': [
    {
      id: '37',
      sender: 'Sophie',
      text: 'Olá Carlos! Como você está?',
      translatedText: 'Hello Carlos! How are you?',
      body: JSON.stringify({ original: 'Olá Carlos! Como você está?', translated: 'Hello Carlos! How are you?' }),
      timestamp: '2024-01-16T12:00:00Z',
      read: true
    },
    {
      id: '38',
      sender: 'Carlos',
      text: 'Estou ótimo! Obrigado por perguntar.',
      originalLanguage: 'Portuguese',
      originalText: 'Estou ótimo! Obrigado por perguntar.',
      translatedText: 'I am doing great! Thank you for asking.',
      body: JSON.stringify({ original: 'Estou ótimo! Obrigado por perguntar.', translated: 'I am doing great! Thank you for asking.' }),
      timestamp: '2024-01-16T12:02:00Z',
      read: true
    },
    {
      id: '39',
      sender: 'Sophie',
      text: 'Perfect! Can we schedule a meeting?',
      translatedText: 'Perfeito! Podemos agendar uma reunião?',
      body: JSON.stringify({ original: 'Perfect! Can we schedule a meeting?', translated: 'Perfeito! Podemos agendar uma reunião?' }),
      timestamp: '2024-01-16T12:05:00Z',
      read: false
    },
    {
      id: '40',
      sender: 'Carlos',
      text: 'Claro! Quando você está disponível?',
      originalLanguage: 'Portuguese',
      originalText: 'Claro! Quando você está disponível?',
      translatedText: 'Of course! When are you available?',
      body: JSON.stringify({ original: 'Claro! Quando você está disponível?', translated: 'Of course! When are you available?' }),
      timestamp: '2024-01-16T12:08:00Z',
      read: true
    },
    {
      id: '41',
      sender: 'Sophie',
      text: 'How about next Tuesday?',
      translatedText: 'Que tal na próxima terça-feira?',
      body: JSON.stringify({ original: 'How about next Tuesday?', translated: 'Que tal na próxima terça-feira?' }),
      timestamp: '2024-01-16T12:10:00Z',
      read: true
    },
    {
      id: '42',
      sender: 'Carlos',
      text: 'Perfeito! Que horas?',
      originalLanguage: 'Portuguese',
      originalText: 'Perfeito! Que horas?',
      translatedText: 'Perfect! What time?',
      body: JSON.stringify({ original: 'Perfeito! Que horas?', translated: 'Perfect! What time?' }),
      timestamp: '2024-01-16T12:12:00Z',
      read: true
    },
    {
      id: '43',
      sender: 'Sophie',
      text: 'How about 2 PM?',
      translatedText: 'Que tal às 14h?',
      body: JSON.stringify({ original: 'How about 2 PM?', translated: 'Que tal às 14h?' }),
      timestamp: '2024-01-16T12:15:00Z',
      read: true
    },
    {
      id: '44',
      sender: 'Carlos',
      text: 'Ótimo! Te vejo então.',
      originalLanguage: 'Portuguese',
      originalText: 'Ótimo! Te vejo então.',
      translatedText: 'Great! See you then.',
      body: JSON.stringify({ original: 'Ótimo! Te vejo então.', translated: 'Great! See you then.' }),
      timestamp: '2024-01-16T12:17:00Z',
      read: true
    }
  ],
  'Marco': [
    {
      id: '40',
      sender: 'Sophie',
      text: 'Ciao Marco! Come stai?',
      translatedText: 'Hello Marco! How are you?',
      body: JSON.stringify({ original: 'Ciao Marco! Come stai?', translated: 'Hello Marco! How are you?' }),
      timestamp: '2024-01-16T13:00:00Z',
      read: true
    },
    {
      id: '41',
      sender: 'Marco',
      text: 'Sto molto bene, grazie! E tu?',
      originalLanguage: 'Italian',
      originalText: 'Sto molto bene, grazie! E tu?',
      translatedText: 'I am very well, thank you! And you?',
      body: JSON.stringify({ original: 'Sto molto bene, grazie! E tu?', translated: 'I am very well, thank you! And you?' }),
      timestamp: '2024-01-16T13:02:00Z',
      read: true
    },
    {
      id: '42',
      sender: 'Sophie',
      text: 'Great! I wanted to talk about the project.',
      translatedText: 'Ottimo! Volevo parlare del progetto.',
      body: JSON.stringify({ original: 'Great! I wanted to talk about the project.', translated: 'Ottimo! Volevo parlare del progetto.' }),
      timestamp: '2024-01-16T13:05:00Z',
      read: false
    },
    {
      id: '43',
      sender: 'Marco',
      text: 'Perfetto! Di cosa vuoi parlare?',
      originalLanguage: 'Italian',
      originalText: 'Perfetto! Di cosa vuoi parlare?',
      translatedText: 'Perfect! What do you want to talk about?',
      body: JSON.stringify({ original: 'Perfetto! Di cosa vuoi parlare?', translated: 'Perfect! What do you want to talk about?' }),
      timestamp: '2024-01-16T13:08:00Z',
      read: true
    },
    {
      id: '44',
      sender: 'Sophie',
      text: 'About the timeline and next steps.',
      translatedText: 'Sul calendario e i prossimi passi.',
      body: JSON.stringify({ original: 'About the timeline and next steps.', translated: 'Sul calendario e i prossimi passi.' }),
      timestamp: '2024-01-16T13:10:00Z',
      read: true
    },
    {
      id: '45',
      sender: 'Marco',
      text: 'Ottimo! Possiamo incontrarci domani?',
      originalLanguage: 'Italian',
      originalText: 'Ottimo! Possiamo incontrarci domani?',
      translatedText: 'Great! Can we meet tomorrow?',
      body: JSON.stringify({ original: 'Ottimo! Possiamo incontrarci domani?', translated: 'Great! Can we meet tomorrow?' }),
      timestamp: '2024-01-16T13:12:00Z',
      read: true
    },
    {
      id: '46',
      sender: 'Sophie',
      text: 'Yes, that works! What time?',
      translatedText: 'Sì, va bene! A che ora?',
      body: JSON.stringify({ original: 'Yes, that works! What time?', translated: 'Sì, va bene! A che ora?' }),
      timestamp: '2024-01-16T13:15:00Z',
      read: true
    },
    {
      id: '47',
      sender: 'Marco',
      text: 'Alle 15:00 va bene?',
      originalLanguage: 'Italian',
      originalText: 'Alle 15:00 va bene?',
      translatedText: 'Is 3 PM okay?',
      body: JSON.stringify({ original: 'Alle 15:00 va bene?', translated: 'Is 3 PM okay?' }),
      timestamp: '2024-01-16T13:17:00Z',
      read: true
    },
    {
      id: '48',
      sender: 'Sophie',
      text: 'Perfect! See you tomorrow!',
      translatedText: 'Perfetto! Ci vediamo domani!',
      body: JSON.stringify({ original: 'Perfect! See you tomorrow!', translated: 'Perfetto! Ci vediamo domani!' }),
      timestamp: '2024-01-16T13:20:00Z',
      read: true
    }
  ],
  'Dmitri': [
    {
      id: '43',
      sender: 'Sophie',
      text: 'Привет Дмитрий! Как дела?',
      translatedText: 'Hello Dmitri! How are you?',
      body: JSON.stringify({ original: 'Привет Дмитрий! Как дела?', translated: 'Hello Dmitri! How are you?' }),
      timestamp: '2024-01-16T14:00:00Z',
      read: true
    },
    {
      id: '44',
      sender: 'Dmitri',
      text: 'Всё хорошо, спасибо!',
      originalLanguage: 'Russian',
      originalText: 'Всё хорошо, спасибо!',
      translatedText: 'Everything is fine, thank you!',
      body: JSON.stringify({ original: 'Всё хорошо, спасибо!', translated: 'Everything is fine, thank you!' }),
      timestamp: '2024-01-16T14:02:00Z',
      read: true
    },
    {
      id: '45',
      sender: 'Sophie',
      text: 'Excellent! Let\'s discuss the proposal.',
      translatedText: 'Отлично! Давайте обсудим предложение.',
      body: JSON.stringify({ original: 'Excellent! Let\'s discuss the proposal.', translated: 'Отлично! Давайте обсудим предложение.' }),
      timestamp: '2024-01-16T14:05:00Z',
      read: false
    },
    {
      id: '46',
      sender: 'Dmitri',
      text: 'Конечно! Когда вам удобно?',
      originalLanguage: 'Russian',
      originalText: 'Конечно! Когда вам удобно?',
      translatedText: 'Of course! When is convenient for you?',
      body: JSON.stringify({ original: 'Конечно! Когда вам удобно?', translated: 'Of course! When is convenient for you?' }),
      timestamp: '2024-01-16T14:08:00Z',
      read: true
    },
    {
      id: '47',
      sender: 'Sophie',
      text: 'How about this Friday?',
      translatedText: 'Как насчет этой пятницы?',
      body: JSON.stringify({ original: 'How about this Friday?', translated: 'Как насчет этой пятницы?' }),
      timestamp: '2024-01-16T14:10:00Z',
      read: true
    },
    {
      id: '48',
      sender: 'Dmitri',
      text: 'Отлично! В какое время?',
      originalLanguage: 'Russian',
      originalText: 'Отлично! В какое время?',
      translatedText: 'Excellent! What time?',
      body: JSON.stringify({ original: 'Отлично! В какое время?', translated: 'Excellent! What time?' }),
      timestamp: '2024-01-16T14:12:00Z',
      read: true
    },
    {
      id: '49',
      sender: 'Sophie',
      text: 'How about 11 AM?',
      translatedText: 'Как насчет 11 утра?',
      body: JSON.stringify({ original: 'How about 11 AM?', translated: 'Как насчет 11 утра?' }),
      timestamp: '2024-01-16T14:15:00Z',
      read: true
    },
    {
      id: '50',
      sender: 'Dmitri',
      text: 'Идеально! До встречи!',
      originalLanguage: 'Russian',
      originalText: 'Идеально! До встречи!',
      translatedText: 'Perfect! See you!',
      body: JSON.stringify({ original: 'Идеально! До встречи!', translated: 'Perfect! See you!' }),
      timestamp: '2024-01-16T14:17:00Z',
      read: true
    }
  ],
  'Ahmed': [
    {
      id: '46',
      sender: 'Sophie',
      text: 'مرحبا أحمد! كيف حالك؟',
      translatedText: 'Hello Ahmed! How are you?',
      body: JSON.stringify({ original: 'مرحبا أحمد! كيف حالك؟', translated: 'Hello Ahmed! How are you?' }),
      timestamp: '2024-01-16T15:00:00Z',
      read: true
    },
    {
      id: '47',
      sender: 'Ahmed',
      text: 'أنا بخير، شكرا جزيلا!',
      originalLanguage: 'Arabic',
      originalText: 'أنا بخير، شكرا جزيلا!',
      translatedText: 'I am doing well, thank you very much!',
      body: JSON.stringify({ original: 'أنا بخير، شكرا جزيلا!', translated: 'I am doing well, thank you very much!' }),
      timestamp: '2024-01-16T15:02:00Z',
      read: true
    },
    {
      id: '48',
      sender: 'Sophie',
      text: 'Great! Are you available for a call?',
      translatedText: 'رائع! هل أنت متاح للمكالمة؟',
      body: JSON.stringify({ original: 'Great! Are you available for a call?', translated: 'رائع! هل أنت متاح للمكالمة؟' }),
      timestamp: '2024-01-16T15:05:00Z',
      read: false
    },
    {
      id: '49',
      sender: 'Ahmed',
      text: 'نعم، أنا متاح الآن.',
      originalLanguage: 'Arabic',
      originalText: 'نعم، أنا متاح الآن.',
      translatedText: 'Yes, I\'m available now.',
      body: JSON.stringify({ original: 'نعم، أنا متاح الآن.', translated: 'Yes, I\'m available now.' }),
      timestamp: '2024-01-16T15:08:00Z',
      read: true
    },
    {
      id: '50',
      sender: 'Sophie',
      text: 'Perfect! I\'ll call you in a few minutes.',
      translatedText: 'ممتاز! سأتصل بك خلال دقائق قليلة.',
      body: JSON.stringify({ original: 'Perfect! I\'ll call you in a few minutes.', translated: 'ممتاز! سأتصل بك خلال دقائق قليلة.' }),
      timestamp: '2024-01-16T15:10:00Z',
      read: true
    },
    {
      id: '51',
      sender: 'Ahmed',
      text: 'سأكون في انتظارك.',
      originalLanguage: 'Arabic',
      originalText: 'سأكون في انتظارك.',
      translatedText: 'I\'ll be waiting for you.',
      body: JSON.stringify({ original: 'سأكون في انتظارك.', translated: 'I\'ll be waiting for you.' }),
      timestamp: '2024-01-16T15:12:00Z',
      read: true
    },
    {
      id: '52',
      sender: 'Sophie',
      text: 'Great! Talk to you soon.',
      translatedText: 'رائع! أتحدث معك قريباً.',
      body: JSON.stringify({ original: 'Great! Talk to you soon.', translated: 'رائع! أتحدث معك قريباً.' }),
      timestamp: '2024-01-16T15:15:00Z',
      read: true
    }
  ],
  'Luca': [
    {
      id: '49',
      sender: 'Sophie',
      text: 'Ciao Luca! Come va?',
      translatedText: 'Hello Luca! How is it going?',
      body: JSON.stringify({ original: 'Ciao Luca! Come va?', translated: 'Hello Luca! How is it going?' }),
      timestamp: '2024-01-17T08:00:00Z',
      read: true
    },
    {
      id: '50',
      sender: 'Luca',
      text: 'Tutto va bene, grazie!',
      originalLanguage: 'Italian',
      originalText: 'Tutto va bene, grazie!',
      translatedText: 'Everything is going well, thank you!',
      body: JSON.stringify({ original: 'Tutto va bene, grazie!', translated: 'Everything is going well, thank you!' }),
      timestamp: '2024-01-17T08:03:00Z',
      read: true
    },
    {
      id: '51',
      sender: 'Sophie',
      text: 'Perfect! Let\'s meet for coffee.',
      translatedText: 'Perfetto! Incontriamoci per un caffè.',
      body: JSON.stringify({ original: 'Perfect! Let\'s meet for coffee.', translated: 'Perfetto! Incontriamoci per un caffè.' }),
      timestamp: '2024-01-17T08:06:00Z',
      read: false
    },
    {
      id: '52',
      sender: 'Luca',
      text: 'Ottima idea! Quando?',
      originalLanguage: 'Italian',
      originalText: 'Ottima idea! Quando?',
      translatedText: 'Great idea! When?',
      body: JSON.stringify({ original: 'Ottima idea! Quando?', translated: 'Great idea! When?' }),
      timestamp: '2024-01-17T08:08:00Z',
      read: true
    },
    {
      id: '53',
      sender: 'Sophie',
      text: 'How about tomorrow afternoon?',
      translatedText: 'Che ne dici di domani pomeriggio?',
      body: JSON.stringify({ original: 'How about tomorrow afternoon?', translated: 'Che ne dici di domani pomeriggio?' }),
      timestamp: '2024-01-17T08:10:00Z',
      read: true
    },
    {
      id: '54',
      sender: 'Luca',
      text: 'Perfetto! Alle 16:00?',
      originalLanguage: 'Italian',
      originalText: 'Perfetto! Alle 16:00?',
      translatedText: 'Perfect! At 4 PM?',
      body: JSON.stringify({ original: 'Perfetto! Alle 16:00?', translated: 'Perfect! At 4 PM?' }),
      timestamp: '2024-01-17T08:12:00Z',
      read: true
    },
    {
      id: '55',
      sender: 'Sophie',
      text: 'Sounds perfect! See you then!',
      translatedText: 'Sembra perfetto! Ci vediamo allora!',
      body: JSON.stringify({ original: 'Sounds perfect! See you then!', translated: 'Sembra perfetto! Ci vediamo allora!' }),
      timestamp: '2024-01-17T08:15:00Z',
      read: true
    }
  ],
  'Sofia': [
    {
      id: '52',
      sender: 'Sophie',
      text: 'Hola Sofia! ¿Qué tal?',
      translatedText: 'Hello Sofia! How are you?',
      body: JSON.stringify({ original: 'Hola Sofia! ¿Qué tal?', translated: 'Hello Sofia! How are you?' }),
      timestamp: '2024-01-17T09:00:00Z',
      read: true
    },
    {
      id: '53',
      sender: 'Sofia',
      text: '¡Estoy muy bien, gracias!',
      originalLanguage: 'Spanish',
      originalText: '¡Estoy muy bien, gracias!',
      translatedText: 'I am doing very well, thank you!',
      body: JSON.stringify({ original: '¡Estoy muy bien, gracias!', translated: 'I am doing very well, thank you!' }),
      timestamp: '2024-01-17T09:02:00Z',
      read: true
    },
    {
      id: '54',
      sender: 'Sophie',
      text: 'Wonderful! Can you send me the document?',
      translatedText: '¡Maravilloso! ¿Puedes enviarme el documento?',
      body: JSON.stringify({ original: 'Wonderful! Can you send me the document?', translated: '¡Maravilloso! ¿Puedes enviarme el documento?' }),
      timestamp: '2024-01-17T09:05:00Z',
      read: false
    },
    {
      id: '55',
      sender: 'Sofia',
      text: '¡Por supuesto! Te lo envío ahora mismo.',
      originalLanguage: 'Spanish',
      originalText: '¡Por supuesto! Te lo envío ahora mismo.',
      translatedText: 'Of course! I\'ll send it right now.',
      body: JSON.stringify({ original: '¡Por supuesto! Te lo envío ahora mismo.', translated: 'Of course! I\'ll send it right now.' }),
      timestamp: '2024-01-17T09:08:00Z',
      read: true
    },
    {
      id: '56',
      sender: 'Sophie',
      text: 'Thank you so much!',
      translatedText: '¡Muchas gracias!',
      body: JSON.stringify({ original: 'Thank you so much!', translated: '¡Muchas gracias!' }),
      timestamp: '2024-01-17T09:10:00Z',
      read: true
    },
    {
      id: '57',
      sender: 'Sofia',
      text: 'De nada! Si necesitas algo más, dímelo.',
      originalLanguage: 'Spanish',
      originalText: 'De nada! Si necesitas algo más, dímelo.',
      translatedText: 'You\'re welcome! If you need anything else, let me know.',
      body: JSON.stringify({ original: 'De nada! Si necesitas algo más, dímelo.', translated: 'You\'re welcome! If you need anything else, let me know.' }),
      timestamp: '2024-01-17T09:12:00Z',
      read: true
    },
    {
      id: '58',
      sender: 'Sophie',
      text: 'I will! Thanks again!',
      translatedText: '¡Lo haré! ¡Gracias de nuevo!',
      body: JSON.stringify({ original: 'I will! Thanks again!', translated: '¡Lo haré! ¡Gracias de nuevo!' }),
      timestamp: '2024-01-17T09:15:00Z',
      read: true
    }
  ],
  'Klaus': [
    {
      id: '55',
      sender: 'Sophie',
      text: 'Hallo Klaus! Wie läuft es?',
      translatedText: 'Hello Klaus! How is it going?',
      body: JSON.stringify({ original: 'Hallo Klaus! Wie läuft es?', translated: 'Hello Klaus! How is it going?' }),
      timestamp: '2024-01-17T10:00:00Z',
      read: true
    },
    {
      id: '56',
      sender: 'Klaus',
      text: 'Alles läuft gut, danke!',
      originalLanguage: 'German',
      originalText: 'Alles läuft gut, danke!',
      translatedText: 'Everything is going well, thank you!',
      body: JSON.stringify({ original: 'Alles läuft gut, danke!', translated: 'Everything is going well, thank you!' }),
      timestamp: '2024-01-17T10:02:00Z',
      read: true
    },
    {
      id: '57',
      sender: 'Sophie',
      text: 'Great! I need your help with something.',
      translatedText: 'Großartig! Ich brauche deine Hilfe bei etwas.',
      body: JSON.stringify({ original: 'Great! I need your help with something.', translated: 'Großartig! Ich brauche deine Hilfe bei etwas.' }),
      timestamp: '2024-01-17T10:05:00Z',
      read: false
    },
    {
      id: '58',
      sender: 'Klaus',
      text: 'Natürlich! Wobei kann ich helfen?',
      originalLanguage: 'German',
      originalText: 'Natürlich! Wobei kann ich helfen?',
      translatedText: 'Of course! What can I help with?',
      body: JSON.stringify({ original: 'Natürlich! Wobei kann ich helfen?', translated: 'Of course! What can I help with?' }),
      timestamp: '2024-01-17T10:08:00Z',
      read: true
    },
    {
      id: '59',
      sender: 'Sophie',
      text: 'I need advice on the technical implementation.',
      translatedText: 'Ich brauche Ratschläge zur technischen Umsetzung.',
      body: JSON.stringify({ original: 'I need advice on the technical implementation.', translated: 'Ich brauche Ratschläge zur technischen Umsetzung.' }),
      timestamp: '2024-01-17T10:10:00Z',
      read: true
    },
    {
      id: '60',
      sender: 'Klaus',
      text: 'Gerne! Lass uns morgen darüber sprechen.',
      originalLanguage: 'German',
      originalText: 'Gerne! Lass uns morgen darüber sprechen.',
      translatedText: 'Gladly! Let\'s talk about it tomorrow.',
      body: JSON.stringify({ original: 'Gerne! Lass uns morgen darüber sprechen.', translated: 'Gladly! Let\'s talk about it tomorrow.' }),
      timestamp: '2024-01-17T10:12:00Z',
      read: true
    },
    {
      id: '61',
      sender: 'Sophie',
      text: 'Perfect! I\'ll prepare some questions.',
      translatedText: 'Perfekt! Ich werde einige Fragen vorbereiten.',
      body: JSON.stringify({ original: 'Perfect! I\'ll prepare some questions.', translated: 'Perfekt! Ich werde einige Fragen vorbereiten.' }),
      timestamp: '2024-01-17T10:15:00Z',
      read: true
    }
  ],
  'Amélie': [
    {
      id: '58',
      sender: 'Sophie',
      text: 'Bonjour Amélie! Comment allez-vous?',
      translatedText: 'Hello Amélie! How are you?',
      body: JSON.stringify({ original: 'Bonjour Amélie! Comment allez-vous?', translated: 'Hello Amélie! How are you?' }),
      timestamp: '2024-01-17T11:00:00Z',
      read: true
    },
    {
      id: '59',
      sender: 'Amélie',
      text: 'Je vais très bien, merci!',
      originalLanguage: 'French',
      originalText: 'Je vais très bien, merci!',
      translatedText: 'I am doing great, thank you!',
      body: JSON.stringify({ original: 'Je vais très bien, merci!', translated: 'I am doing great, thank you!' }),
      timestamp: '2024-01-17T11:02:00Z',
      read: true
    },
    {
      id: '60',
      sender: 'Sophie',
      text: 'Perfect! Are you free this afternoon?',
      translatedText: 'Parfait! Êtes-vous libre cet après-midi?',
      body: JSON.stringify({ original: 'Perfect! Are you free this afternoon?', translated: 'Parfait! Êtes-vous libre cet après-midi?' }),
      timestamp: '2024-01-17T11:05:00Z',
      read: false
    },
    {
      id: '61',
      sender: 'Amélie',
      text: 'Oui, je suis libre! À quelle heure?',
      originalLanguage: 'French',
      originalText: 'Oui, je suis libre! À quelle heure?',
      translatedText: 'Yes, I\'m free! What time?',
      body: JSON.stringify({ original: 'Oui, je suis libre! À quelle heure?', translated: 'Yes, I\'m free! What time?' }),
      timestamp: '2024-01-17T11:08:00Z',
      read: true
    },
    {
      id: '62',
      sender: 'Sophie',
      text: 'How about 3 PM?',
      translatedText: 'Que diriez-vous de 15h?',
      body: JSON.stringify({ original: 'How about 3 PM?', translated: 'Que diriez-vous de 15h?' }),
      timestamp: '2024-01-17T11:10:00Z',
      read: true
    },
    {
      id: '63',
      sender: 'Amélie',
      text: 'Parfait! Je vous verrai alors.',
      originalLanguage: 'French',
      originalText: 'Parfait! Je vous verrai alors.',
      translatedText: 'Perfect! I\'ll see you then.',
      body: JSON.stringify({ original: 'Parfait! Je vous verrai alors.', translated: 'Perfect! I\'ll see you then.' }),
      timestamp: '2024-01-17T11:12:00Z',
      read: true
    },
    {
      id: '64',
      sender: 'Sophie',
      text: 'Looking forward to it!',
      translatedText: 'J\'ai hâte!',
      body: JSON.stringify({ original: 'Looking forward to it!', translated: 'J\'ai hâte!' }),
      timestamp: '2024-01-17T11:15:00Z',
      read: true
    }
  ],
  'Raj': [
    {
      id: '61',
      sender: 'Sophie',
      text: 'नमस्ते राज! आप कैसे हैं?',
      translatedText: 'Hello Raj! How are you?',
      body: JSON.stringify({ original: 'नमस्ते राज! आप कैसे हैं?', translated: 'Hello Raj! How are you?' }),
      timestamp: '2024-01-17T12:00:00Z',
      read: true
    },
    {
      id: '62',
      sender: 'Raj',
      text: 'मैं ठीक हूँ, धन्यवाद!',
      originalLanguage: 'Hindi',
      originalText: 'मैं ठीक हूँ, धन्यवाद!',
      translatedText: 'I am doing well, thank you!',
      body: JSON.stringify({ original: 'मैं ठीक हूँ, धन्यवाद!', translated: 'I am doing well, thank you!' }),
      timestamp: '2024-01-17T12:02:00Z',
      read: true
    },
    {
      id: '63',
      sender: 'Sophie',
      text: 'Great! Let\'s discuss the project.',
      translatedText: 'बढ़िया! चलो प्रोजेक्ट पर चर्चा करते हैं।',
      body: JSON.stringify({ original: 'Great! Let\'s discuss the project.', translated: 'बढ़िया! चलो प्रोजेक्ट पर चर्चा करते हैं।' }),
      timestamp: '2024-01-17T12:05:00Z',
      read: false
    },
    {
      id: '64',
      sender: 'Raj',
      text: 'बिल्कुल! कब चाहिए?',
      originalLanguage: 'Hindi',
      originalText: 'बिल्कुल! कब चाहिए?',
      translatedText: 'Absolutely! When do you need it?',
      body: JSON.stringify({ original: 'बिल्कुल! कब चाहिए?', translated: 'Absolutely! When do you need it?' }),
      timestamp: '2024-01-17T12:08:00Z',
      read: true
    },
    {
      id: '65',
      sender: 'Sophie',
      text: 'Can we meet next week?',
      translatedText: 'क्या हम अगले सप्ताह मिल सकते हैं?',
      body: JSON.stringify({ original: 'Can we meet next week?', translated: 'क्या हम अगले सप्ताह मिल सकते हैं?' }),
      timestamp: '2024-01-17T12:10:00Z',
      read: true
    },
    {
      id: '66',
      sender: 'Raj',
      text: 'हाँ, बिल्कुल! मैं अपने कैलेंडर की जांच करता हूँ।',
      originalLanguage: 'Hindi',
      originalText: 'हाँ, बिल्कुल! मैं अपने कैलेंडर की जांच करता हूँ।',
      translatedText: 'Yes, absolutely! Let me check my calendar.',
      body: JSON.stringify({ original: 'हाँ, बिल्कुल! मैं अपने कैलेंडर की जांच करता हूँ।', translated: 'Yes, absolutely! Let me check my calendar.' }),
      timestamp: '2024-01-17T12:12:00Z',
      read: true
    },
    {
      id: '67',
      sender: 'Sophie',
      text: 'Perfect! Let me know what works for you.',
      translatedText: 'बिल्कुल सही! मुझे बताएं कि आपके लिए क्या सुविधाजनक है।',
      body: JSON.stringify({ original: 'Perfect! Let me know what works for you.', translated: 'बिल्कुल सही! मुझे बताएं कि आपके लिए क्या सुविधाजनक है।' }),
      timestamp: '2024-01-17T12:15:00Z',
      read: true
    }
  ],
  'Hiroshi': [
    {
      id: '64',
      sender: 'Sophie',
      text: 'こんにちは、ひろしさん！お元気ですか？',
      translatedText: 'Hello Hiroshi! How are you?',
      body: JSON.stringify({ original: 'こんにちは、ひろしさん！お元気ですか？', translated: 'Hello Hiroshi! How are you?' }),
      timestamp: '2024-01-17T13:00:00Z',
      read: true
    },
    {
      id: '65',
      sender: 'Hiroshi',
      text: '元気です、ありがとうございます！',
      originalLanguage: 'Japanese',
      originalText: '元気です、ありがとうございます！',
      translatedText: 'I am fine, thank you very much!',
      body: JSON.stringify({ original: '元気です、ありがとうございます！', translated: 'I am fine, thank you very much!' }),
      timestamp: '2024-01-17T13:02:00Z',
      read: true
    },
    {
      id: '66',
      sender: 'Sophie',
      text: 'Excellent! Can we schedule a meeting?',
      translatedText: '素晴らしい！会議をスケジュールできますか？',
      body: JSON.stringify({ original: 'Excellent! Can we schedule a meeting?', translated: '素晴らしい！会議をスケジュールできますか？' }),
      timestamp: '2024-01-17T13:05:00Z',
      read: false
    },
    {
      id: '67',
      sender: 'Hiroshi',
      text: 'もちろんです！いつがよろしいですか？',
      originalLanguage: 'Japanese',
      originalText: 'もちろんです！いつがよろしいですか？',
      translatedText: 'Of course! When would be good?',
      body: JSON.stringify({ original: 'もちろんです！いつがよろしいですか？', translated: 'Of course! When would be good?' }),
      timestamp: '2024-01-17T13:08:00Z',
      read: true
    },
    {
      id: '68',
      sender: 'Sophie',
      text: 'How about next Monday?',
      translatedText: '来週の月曜日はいかがですか？',
      body: JSON.stringify({ original: 'How about next Monday?', translated: '来週の月曜日はいかがですか？' }),
      timestamp: '2024-01-17T13:10:00Z',
      read: true
    },
    {
      id: '69',
      sender: 'Hiroshi',
      text: '完璧です！何時から始めましょうか？',
      originalLanguage: 'Japanese',
      originalText: '完璧です！何時から始めましょうか？',
      translatedText: 'Perfect! What time should we start?',
      body: JSON.stringify({ original: '完璧です！何時から始めましょうか？', translated: 'Perfect! What time should we start?' }),
      timestamp: '2024-01-17T13:12:00Z',
      read: true
    },
    {
      id: '70',
      sender: 'Sophie',
      text: 'How about 10 AM?',
      translatedText: '午前10時はいかがですか？',
      body: JSON.stringify({ original: 'How about 10 AM?', translated: '午前10時はいかがですか？' }),
      timestamp: '2024-01-17T13:15:00Z',
      read: true
    },
    {
      id: '71',
      sender: 'Hiroshi',
      text: '了解しました！その時にお会いしましょう。',
      originalLanguage: 'Japanese',
      originalText: '了解しました！その時にお会いしましょう。',
      translatedText: 'Understood! Let\'s meet then.',
      body: JSON.stringify({ original: '了解しました！その時にお会いしましょう。', translated: 'Understood! Let\'s meet then.' }),
      timestamp: '2024-01-17T13:17:00Z',
      read: true
    }
  ],
  'Li': [
    {
      id: '67',
      sender: 'Sophie',
      text: '你好，李！最近忙吗？',
      translatedText: 'Hello Li! Have you been busy lately?',
      body: JSON.stringify({ original: '你好，李！最近忙吗？', translated: 'Hello Li! Have you been busy lately?' }),
      timestamp: '2024-01-17T14:00:00Z',
      read: true
    },
    {
      id: '68',
      sender: 'Li',
      text: '是的，我一直很忙，但我正在处理。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '是的，我一直很忙，但我正在处理。',
      translatedText: 'Yes, I have been quite busy, but I am managing.',
      body: JSON.stringify({ original: '是的，我一直很忙，但我正在处理。', translated: 'Yes, I have been quite busy, but I am managing.' }),
      timestamp: '2024-01-17T14:02:00Z',
      read: true
    },
    {
      id: '69',
      sender: 'Sophie',
      text: 'I understand. Take your time!',
      translatedText: '我理解。慢慢来！',
      body: JSON.stringify({ original: 'I understand. Take your time!', translated: '我理解。慢慢来！' }),
      timestamp: '2024-01-17T14:05:00Z',
      read: false
    },
    {
      id: '70',
      sender: 'Li',
      text: '谢谢！我会尽快完成的。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '谢谢！我会尽快完成的。',
      translatedText: 'Thank you! I\'ll finish it as soon as possible.',
      body: JSON.stringify({ original: '谢谢！我会尽快完成的。', translated: 'Thank you! I\'ll finish it as soon as possible.' }),
      timestamp: '2024-01-17T14:08:00Z',
      read: true
    },
    {
      id: '71',
      sender: 'Sophie',
      text: 'No pressure! Just let me know when it\'s ready.',
      translatedText: '不要有压力！准备好了告诉我。',
      body: JSON.stringify({ original: 'No pressure! Just let me know when it\'s ready.', translated: '不要有压力！准备好了告诉我。' }),
      timestamp: '2024-01-17T14:10:00Z',
      read: true
    },
    {
      id: '72',
      sender: 'Li',
      text: '好的，我会的。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '好的，我会的。',
      translatedText: 'Okay, I will.',
      body: JSON.stringify({ original: '好的，我会的。', translated: 'Okay, I will.' }),
      timestamp: '2024-01-17T14:12:00Z',
      read: true
    },
    {
      id: '73',
      sender: 'Sophie',
      text: 'Thanks! Talk to you soon.',
      translatedText: '谢谢！回头聊。',
      body: JSON.stringify({ original: 'Thanks! Talk to you soon.', translated: '谢谢！回头聊。' }),
      timestamp: '2024-01-17T14:15:00Z',
      read: true
    }
  ],
  'Ana': [
    {
      id: '70',
      sender: 'Sophie',
      text: 'Olá Ana! Como você está?',
      translatedText: 'Hello Ana! How are you?',
      body: JSON.stringify({ original: 'Olá Ana! Como você está?', translated: 'Hello Ana! How are you?' }),
      timestamp: '2024-01-17T15:00:00Z',
      read: true
    },
    {
      id: '71',
      sender: 'Ana',
      text: 'Estou muito bem, obrigada!',
      originalLanguage: 'Portuguese',
      originalText: 'Estou muito bem, obrigada!',
      translatedText: 'I am doing very well, thank you!',
      body: JSON.stringify({ original: 'Estou muito bem, obrigada!', translated: 'I am doing very well, thank you!' }),
      timestamp: '2024-01-17T15:02:00Z',
      read: true
    },
    {
      id: '72',
      sender: 'Sophie',
      text: 'Wonderful! Let\'s catch up soon.',
      translatedText: 'Maravilhoso! Vamos conversar em breve.',
      body: JSON.stringify({ original: 'Wonderful! Let\'s catch up soon.', translated: 'Maravilhoso! Vamos conversar em breve.' }),
      timestamp: '2024-01-17T15:05:00Z',
      read: false
    },
    {
      id: '73',
      sender: 'Ana',
      text: 'Adoraria! Quando você está livre?',
      originalLanguage: 'Portuguese',
      originalText: 'Adoraria! Quando você está livre?',
      translatedText: 'I\'d love to! When are you free?',
      body: JSON.stringify({ original: 'Adoraria! Quando você está livre?', translated: 'I\'d love to! When are you free?' }),
      timestamp: '2024-01-17T15:08:00Z',
      read: true
    },
    {
      id: '74',
      sender: 'Sophie',
      text: 'How about this weekend?',
      translatedText: 'Que tal este fim de semana?',
      body: JSON.stringify({ original: 'How about this weekend?', translated: 'Que tal este fim de semana?' }),
      timestamp: '2024-01-17T15:10:00Z',
      read: true
    },
    {
      id: '75',
      sender: 'Ana',
      text: 'Perfeito! Sábado ou domingo?',
      originalLanguage: 'Portuguese',
      originalText: 'Perfeito! Sábado ou domingo?',
      translatedText: 'Perfect! Saturday or Sunday?',
      body: JSON.stringify({ original: 'Perfeito! Sábado ou domingo?', translated: 'Perfect! Saturday or Sunday?' }),
      timestamp: '2024-01-17T15:12:00Z',
      read: true
    },
    {
      id: '76',
      sender: 'Sophie',
      text: 'Saturday works better for me!',
      translatedText: 'Sábado funciona melhor para mim!',
      body: JSON.stringify({ original: 'Saturday works better for me!', translated: 'Sábado funciona melhor para mim!' }),
      timestamp: '2024-01-17T15:15:00Z',
      read: true
    },
    {
      id: '77',
      sender: 'Ana',
      text: 'Ótimo! Sábado então!',
      originalLanguage: 'Portuguese',
      originalText: 'Ótimo! Sábado então!',
      translatedText: 'Great! Saturday then!',
      body: JSON.stringify({ original: 'Ótimo! Sábado então!', translated: 'Great! Saturday then!' }),
      timestamp: '2024-01-17T15:17:00Z',
      read: true
    }
  ],
  'Ivan': [
    {
      id: '73',
      sender: 'Sophie',
      text: 'Привет Иван! Как дела?',
      translatedText: 'Hello Ivan! How are you?',
      body: JSON.stringify({ original: 'Привет Иван! Как дела?', translated: 'Hello Ivan! How are you?' }),
      timestamp: '2024-01-17T16:00:00Z',
      read: true
    },
    {
      id: '74',
      sender: 'Ivan',
      text: 'Всё в порядке, спасибо!',
      originalLanguage: 'Russian',
      originalText: 'Всё в порядке, спасибо!',
      translatedText: 'Everything is fine, thank you!',
      body: JSON.stringify({ original: 'Всё в порядке, спасибо!', translated: 'Everything is fine, thank you!' }),
      timestamp: '2024-01-17T16:02:00Z',
      read: true
    },
    {
      id: '75',
      sender: 'Sophie',
      text: 'Great! I wanted to discuss something with you.',
      translatedText: 'Отлично! Я хотел обсудить с тобой кое-что.',
      body: JSON.stringify({ original: 'Great! I wanted to discuss something with you.', translated: 'Отлично! Я хотел обсудить с тобой кое-что.' }),
      timestamp: '2024-01-17T16:05:00Z',
      read: false
    },
    {
      id: '76',
      sender: 'Ivan',
      text: 'Конечно! О чём ты хочешь поговорить?',
      originalLanguage: 'Russian',
      originalText: 'Конечно! О чём ты хочешь поговорить?',
      translatedText: 'Of course! What do you want to talk about?',
      body: JSON.stringify({ original: 'Конечно! О чём ты хочешь поговорить?', translated: 'Of course! What do you want to talk about?' }),
      timestamp: '2024-01-17T16:08:00Z',
      read: true
    },
    {
      id: '77',
      sender: 'Sophie',
      text: 'About the new project proposal.',
      translatedText: 'О новом предложении проекта.',
      body: JSON.stringify({ original: 'About the new project proposal.', translated: 'О новом предложении проекта.' }),
      timestamp: '2024-01-17T16:10:00Z',
      read: true
    },
    {
      id: '78',
      sender: 'Ivan',
      text: 'Отлично! Можем встретиться завтра?',
      originalLanguage: 'Russian',
      originalText: 'Отлично! Можем встретиться завтра?',
      translatedText: 'Excellent! Can we meet tomorrow?',
      body: JSON.stringify({ original: 'Отлично! Можем встретиться завтра?', translated: 'Excellent! Can we meet tomorrow?' }),
      timestamp: '2024-01-17T16:12:00Z',
      read: true
    },
    {
      id: '79',
      sender: 'Sophie',
      text: 'Yes! What time works for you?',
      translatedText: 'Да! В какое время тебе удобно?',
      body: JSON.stringify({ original: 'Yes! What time works for you?', translated: 'Да! В какое время тебе удобно?' }),
      timestamp: '2024-01-17T16:15:00Z',
      read: true
    },
    {
      id: '80',
      sender: 'Ivan',
      text: 'В 11 утра будет хорошо.',
      originalLanguage: 'Russian',
      originalText: 'В 11 утра будет хорошо.',
      translatedText: '11 AM would be good.',
      body: JSON.stringify({ original: 'В 11 утра будет хорошо.', translated: '11 AM would be good.' }),
      timestamp: '2024-01-17T16:17:00Z',
      read: true
    },
    {
      id: '81',
      sender: 'Sophie',
      text: 'Perfect! See you tomorrow!',
      translatedText: 'Отлично! До завтра!',
      body: JSON.stringify({ original: 'Perfect! See you tomorrow!', translated: 'Отлично! До завтра!' }),
      timestamp: '2024-01-17T16:20:00Z',
      read: true
    }
  ],
  'Fatima': [
    {
      id: '76',
      sender: 'Sophie',
      text: 'مرحبا فاطمة! كيف حالك؟',
      translatedText: 'Hello Fatima! How are you?',
      body: JSON.stringify({ original: 'مرحبا فاطمة! كيف حالك؟', translated: 'Hello Fatima! How are you?' }),
      timestamp: '2024-01-17T17:00:00Z',
      read: true
    },
    {
      id: '77',
      sender: 'Fatima',
      text: 'أنا بخير، شكرا جزيلا!',
      originalLanguage: 'Arabic',
      originalText: 'أنا بخير، شكرا جزيلا!',
      translatedText: 'I am doing well, thank you very much!',
      body: JSON.stringify({ original: 'أنا بخير، شكرا جزيلا!', translated: 'I am doing well, thank you very much!' }),
      timestamp: '2024-01-17T17:02:00Z',
      read: true
    },
    {
      id: '78',
      sender: 'Sophie',
      text: 'Perfect! Can we meet tomorrow?',
      translatedText: 'ممتاز! هل يمكننا أن نلتقي غدا؟',
      body: JSON.stringify({ original: 'Perfect! Can we meet tomorrow?', translated: 'ممتاز! هل يمكننا أن نلتقي غدا؟' }),
      timestamp: '2024-01-17T17:05:00Z',
      read: false
    },
    {
      id: '79',
      sender: 'Fatima',
      text: 'نعم بالطبع! في أي وقت؟',
      originalLanguage: 'Arabic',
      originalText: 'نعم بالطبع! في أي وقت؟',
      translatedText: 'Yes, of course! What time?',
      body: JSON.stringify({ original: 'نعم بالطبع! في أي وقت؟', translated: 'Yes, of course! What time?' }),
      timestamp: '2024-01-17T17:08:00Z',
      read: true
    },
    {
      id: '80',
      sender: 'Sophie',
      text: 'How about 2 PM?',
      translatedText: 'ماذا عن الساعة الثانية بعد الظهر؟',
      body: JSON.stringify({ original: 'How about 2 PM?', translated: 'ماذا عن الساعة الثانية بعد الظهر؟' }),
      timestamp: '2024-01-17T17:10:00Z',
      read: true
    },
    {
      id: '81',
      sender: 'Fatima',
      text: 'ممتاز! سأكون هناك.',
      originalLanguage: 'Arabic',
      originalText: 'ممتاز! سأكون هناك.',
      translatedText: 'Excellent! I\'ll be there.',
      body: JSON.stringify({ original: 'ممتاز! سأكون هناك.', translated: 'Excellent! I\'ll be there.' }),
      timestamp: '2024-01-17T17:12:00Z',
      read: true
    },
    {
      id: '82',
      sender: 'Sophie',
      text: 'Great! Looking forward to it!',
      translatedText: 'رائع! أتطلع إلى ذلك!',
      body: JSON.stringify({ original: 'Great! Looking forward to it!', translated: 'رائع! أتطلع إلى ذلك!' }),
      timestamp: '2024-01-17T17:15:00Z',
      read: true
    }
  ],
  'Seo-jin': [
    {
      id: '79',
      sender: 'Sophie',
      text: '안녕하세요 서진님! 잘 지내세요?',
      translatedText: 'Hello Seo-jin! How are you?',
      body: JSON.stringify({ original: '안녕하세요 서진님! 잘 지내세요?', translated: 'Hello Seo-jin! How are you?' }),
      timestamp: '2024-01-18T08:00:00Z',
      read: true
    },
    {
      id: '80',
      sender: 'Seo-jin',
      text: '저는 잘 지내고 있습니다, 감사합니다!',
      originalLanguage: 'Korean',
      originalText: '저는 잘 지내고 있습니다, 감사합니다!',
      translatedText: 'I am doing very well, thank you!',
      body: JSON.stringify({ original: '저는 잘 지내고 있습니다, 감사합니다!', translated: 'I am doing very well, thank you!' }),
      timestamp: '2024-01-18T08:02:00Z',
      read: true
    },
    {
      id: '81',
      sender: 'Sophie',
      text: 'Great! I have a question for you.',
      translatedText: '좋아요! 질문이 있어요.',
      body: JSON.stringify({ original: 'Great! I have a question for you.', translated: '좋아요! 질문이 있어요.' }),
      timestamp: '2024-01-18T08:05:00Z',
      read: false
    },
    {
      id: '82',
      sender: 'Seo-jin',
      text: '물론이죠! 무엇이든 물어보세요.',
      originalLanguage: 'Korean',
      originalText: '물론이죠! 무엇이든 물어보세요.',
      translatedText: 'Of course! Ask me anything.',
      body: JSON.stringify({ original: '물론이죠! 무엇이든 물어보세요.', translated: 'Of course! Ask me anything.' }),
      timestamp: '2024-01-18T08:08:00Z',
      read: true
    },
    {
      id: '83',
      sender: 'Sophie',
      text: 'About the technical specifications.',
      translatedText: '기술 사양에 대해요.',
      body: JSON.stringify({ original: 'About the technical specifications.', translated: '기술 사양에 대해요.' }),
      timestamp: '2024-01-18T08:10:00Z',
      read: true
    },
    {
      id: '84',
      sender: 'Seo-jin',
      text: '네, 알겠습니다. 언제 논의할까요?',
      originalLanguage: 'Korean',
      originalText: '네, 알겠습니다. 언제 논의할까요?',
      translatedText: 'Yes, I understand. When should we discuss it?',
      body: JSON.stringify({ original: '네, 알겠습니다. 언제 논의할까요?', translated: 'Yes, I understand. When should we discuss it?' }),
      timestamp: '2024-01-18T08:12:00Z',
      read: true
    },
    {
      id: '85',
      sender: 'Sophie',
      text: 'Can we schedule a call this week?',
      translatedText: '이번 주에 통화를 예약할 수 있을까요?',
      body: JSON.stringify({ original: 'Can we schedule a call this week?', translated: '이번 주에 통화를 예약할 수 있을까요?' }),
      timestamp: '2024-01-18T08:15:00Z',
      read: true
    },
    {
      id: '86',
      sender: 'Seo-jin',
      text: '물론입니다! 제가 가능한 시간을 확인해 드리겠습니다.',
      originalLanguage: 'Korean',
      originalText: '물론입니다! 제가 가능한 시간을 확인해 드리겠습니다.',
      translatedText: 'Of course! I\'ll check my available times.',
      body: JSON.stringify({ original: '물론입니다! 제가 가능한 시간을 확인해 드리겠습니다.', translated: 'Of course! I\'ll check my available times.' }),
      timestamp: '2024-01-18T08:17:00Z',
      read: true
    }
  ],
  'Giovanni': [
    {
      id: '82',
      sender: 'Sophie',
      text: 'Ciao Giovanni! Come stai?',
      translatedText: 'Hello Giovanni! How are you?',
      body: JSON.stringify({ original: 'Ciao Giovanni! Come stai?', translated: 'Hello Giovanni! How are you?' }),
      timestamp: '2024-01-18T09:00:00Z',
      read: true
    },
    {
      id: '83',
      sender: 'Giovanni',
      text: 'Sto benissimo, grazie!',
      originalLanguage: 'Italian',
      originalText: 'Sto benissimo, grazie!',
      translatedText: 'I am doing great, thank you!',
      body: JSON.stringify({ original: 'Sto benissimo, grazie!', translated: 'I am doing great, thank you!' }),
      timestamp: '2024-01-18T09:02:00Z',
      read: true
    },
    {
      id: '84',
      sender: 'Sophie',
      text: 'Perfect! Let\'s work on the project together.',
      translatedText: 'Perfetto! Lavoriamo insieme al progetto.',
      body: JSON.stringify({ original: 'Perfect! Let\'s work on the project together.', translated: 'Perfetto! Lavoriamo insieme al progetto.' }),
      timestamp: '2024-01-18T09:05:00Z',
      read: false
    },
    {
      id: '85',
      sender: 'Giovanni',
      text: 'Ottima idea! Quando iniziamo?',
      originalLanguage: 'Italian',
      originalText: 'Ottima idea! Quando iniziamo?',
      translatedText: 'Great idea! When do we start?',
      body: JSON.stringify({ original: 'Ottima idea! Quando iniziamo?', translated: 'Great idea! When do we start?' }),
      timestamp: '2024-01-18T09:08:00Z',
      read: true
    },
    {
      id: '86',
      sender: 'Sophie',
      text: 'How about next Monday?',
      translatedText: 'Che ne dici di lunedì prossimo?',
      body: JSON.stringify({ original: 'How about next Monday?', translated: 'Che ne dici di lunedì prossimo?' }),
      timestamp: '2024-01-18T09:10:00Z',
      read: true
    },
    {
      id: '87',
      sender: 'Giovanni',
      text: 'Perfetto! Alle 9:00 va bene?',
      originalLanguage: 'Italian',
      originalText: 'Perfetto! Alle 9:00 va bene?',
      translatedText: 'Perfect! Is 9 AM okay?',
      body: JSON.stringify({ original: 'Perfetto! Alle 9:00 va bene?', translated: 'Perfect! Is 9 AM okay?' }),
      timestamp: '2024-01-18T09:12:00Z',
      read: true
    },
    {
      id: '88',
      sender: 'Sophie',
      text: 'Yes, that works perfectly!',
      translatedText: 'Sì, va benissimo!',
      body: JSON.stringify({ original: 'Yes, that works perfectly!', translated: 'Sì, va benissimo!' }),
      timestamp: '2024-01-18T09:15:00Z',
      read: true
    },
    {
      id: '89',
      sender: 'Giovanni',
      text: 'Fantastico! A lunedì allora!',
      originalLanguage: 'Italian',
      originalText: 'Fantastico! A lunedì allora!',
      translatedText: 'Fantastic! See you Monday then!',
      body: JSON.stringify({ original: 'Fantastico! A lunedì allora!', translated: 'Fantastic! See you Monday then!' }),
      timestamp: '2024-01-18T09:17:00Z',
      read: true
    }
  ],
  'Elena': [
    {
      id: '85',
      sender: 'Sophie',
      text: 'Привет Елена! Как дела?',
      translatedText: 'Hello Elena! How are you?',
      body: JSON.stringify({ original: 'Привет Елена! Как дела?', translated: 'Hello Elena! How are you?' }),
      timestamp: '2024-01-18T10:00:00Z',
      read: true
    },
    {
      id: '86',
      sender: 'Elena',
      text: 'У меня всё хорошо, спасибо!',
      originalLanguage: 'Russian',
      originalText: 'У меня всё хорошо, спасибо!',
      translatedText: 'I am doing well, thank you!',
      body: JSON.stringify({ original: 'У меня всё хорошо, спасибо!', translated: 'I am doing well, thank you!' }),
      timestamp: '2024-01-18T10:02:00Z',
      read: true
    },
    {
      id: '87',
      sender: 'Sophie',
      text: 'Wonderful! Can you help me with something?',
      translatedText: 'Замечательно! Можешь помочь мне с чем-то?',
      body: JSON.stringify({ original: 'Wonderful! Can you help me with something?', translated: 'Замечательно! Можешь помочь мне с чем-то?' }),
      timestamp: '2024-01-18T10:05:00Z',
      read: false
    },
    {
      id: '88',
      sender: 'Elena',
      text: 'Конечно! Чем я могу помочь?',
      originalLanguage: 'Russian',
      originalText: 'Конечно! Чем я могу помочь?',
      translatedText: 'Of course! How can I help?',
      body: JSON.stringify({ original: 'Конечно! Чем я могу помочь?', translated: 'Of course! How can I help?' }),
      timestamp: '2024-01-18T10:08:00Z',
      read: true
    },
    {
      id: '89',
      sender: 'Sophie',
      text: 'I need help with the documentation.',
      translatedText: 'Мне нужна помощь с документацией.',
      body: JSON.stringify({ original: 'I need help with the documentation.', translated: 'Мне нужна помощь с документацией.' }),
      timestamp: '2024-01-18T10:10:00Z',
      read: true
    },
    {
      id: '90',
      sender: 'Elena',
      text: 'Без проблем! Когда вам удобно?',
      originalLanguage: 'Russian',
      originalText: 'Без проблем! Когда вам удобно?',
      translatedText: 'No problem! When is convenient for you?',
      body: JSON.stringify({ original: 'Без проблем! Когда вам удобно?', translated: 'No problem! When is convenient for you?' }),
      timestamp: '2024-01-18T10:12:00Z',
      read: true
    },
    {
      id: '91',
      sender: 'Sophie',
      text: 'How about this Friday?',
      translatedText: 'Как насчет этой пятницы?',
      body: JSON.stringify({ original: 'How about this Friday?', translated: 'Как насчет этой пятницы?' }),
      timestamp: '2024-01-18T10:15:00Z',
      read: true
    },
    {
      id: '92',
      sender: 'Elena',
      text: 'Отлично! Встретимся в пятницу.',
      originalLanguage: 'Russian',
      originalText: 'Отлично! Встретимся в пятницу.',
      translatedText: 'Excellent! Let\'s meet on Friday.',
      body: JSON.stringify({ original: 'Отлично! Встретимся в пятницу.', translated: 'Excellent! Let\'s meet on Friday.' }),
      timestamp: '2024-01-18T10:17:00Z',
      read: true
    }
  ],
  'Mohammed': [
    {
      id: '88',
      sender: 'Sophie',
      text: 'مرحبا محمد! كيف حالك؟',
      translatedText: 'Hello Mohammed! How are you?',
      body: JSON.stringify({ original: 'مرحبا محمد! كيف حالك؟', translated: 'Hello Mohammed! How are you?' }),
      timestamp: '2024-01-18T11:00:00Z',
      read: true
    },
    {
      id: '89',
      sender: 'Mohammed',
      text: 'أنا بخير جدا، شكرا!',
      originalLanguage: 'Arabic',
      originalText: 'أنا بخير جدا، شكرا!',
      translatedText: 'I am doing very well, thank you!',
      body: JSON.stringify({ original: 'أنا بخير جدا، شكرا!', translated: 'I am doing very well, thank you!' }),
      timestamp: '2024-01-18T11:02:00Z',
      read: true
    },
    {
      id: '90',
      sender: 'Sophie',
      text: 'Excellent! Let\'s discuss the proposal.',
      translatedText: 'ممتاز! دعنا نناقش الاقتراح.',
      body: JSON.stringify({ original: 'Excellent! Let\'s discuss the proposal.', translated: 'ممتاز! دعنا نناقش الاقتراح.' }),
      timestamp: '2024-01-18T11:05:00Z',
      read: false
    },
    {
      id: '91',
      sender: 'Mohammed',
      text: 'بالتأكيد! متى تريد أن نلتقي?',
      originalLanguage: 'Arabic',
      originalText: 'بالتأكيد! متى تريد أن نلتقي?',
      translatedText: 'Absolutely! When would you like to meet?',
      body: JSON.stringify({ original: 'بالتأكيد! متى تريد أن نلتقي?', translated: 'Absolutely! When would you like to meet?' }),
      timestamp: '2024-01-18T11:08:00Z',
      read: true
    },
    {
      id: '92',
      sender: 'Sophie',
      text: 'How about next Wednesday?',
      translatedText: 'ماذا عن الأربعاء القادم?',
      body: JSON.stringify({ original: 'How about next Wednesday?', translated: 'ماذا عن الأربعاء القادم?' }),
      timestamp: '2024-01-18T11:10:00Z',
      read: true
    },
    {
      id: '93',
      sender: 'Mohammed',
      text: 'ممتاز! في أي وقت?',
      originalLanguage: 'Arabic',
      originalText: 'ممتاز! في أي وقت?',
      translatedText: 'Excellent! What time?',
      body: JSON.stringify({ original: 'ممتاز! في أي وقت?', translated: 'Excellent! What time?' }),
      timestamp: '2024-01-18T11:12:00Z',
      read: true
    },
    {
      id: '94',
      sender: 'Sophie',
      text: 'How about 1 PM?',
      translatedText: 'ماذا عن الساعة الواحدة بعد الظهر?',
      body: JSON.stringify({ original: 'How about 1 PM?', translated: 'ماذا عن الساعة الواحدة بعد الظهر?' }),
      timestamp: '2024-01-18T11:15:00Z',
      read: true
    },
    {
      id: '95',
      sender: 'Mohammed',
      text: 'رائع! سأكون هناك.',
      originalLanguage: 'Arabic',
      originalText: 'رائع! سأكون هناك.',
      translatedText: 'Great! I\'ll be there.',
      body: JSON.stringify({ original: 'رائع! سأكون هناك.', translated: 'Great! I\'ll be there.' }),
      timestamp: '2024-01-18T11:17:00Z',
      read: true
    }
  ],
  'Chen': [
    {
      id: '91',
      sender: 'Sophie',
      text: '你好，陈！最近怎么样？',
      translatedText: 'Hello Chen! How have you been?',
      body: JSON.stringify({ original: '你好，陈！最近怎么样？', translated: 'Hello Chen! How have you been?' }),
      timestamp: '2024-01-18T12:00:00Z',
      read: true
    },
    {
      id: '92',
      sender: 'Chen',
      text: '我一直很忙但很好，谢谢！',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '我一直很忙但很好，谢谢！',
      translatedText: 'I have been busy but good, thank you!',
      body: JSON.stringify({ original: '我一直很忙但很好，谢谢！', translated: 'I have been busy but good, thank you!' }),
      timestamp: '2024-01-18T12:02:00Z',
      read: true
    },
    {
      id: '93',
      sender: 'Sophie',
      text: 'I understand. Let\'s meet when you\'re free.',
      translatedText: '我理解。有空的时候我们见面吧。',
      body: JSON.stringify({ original: 'I understand. Let\'s meet when you\'re free.', translated: '我理解。有空的时候我们见面吧。' }),
      timestamp: '2024-01-18T12:05:00Z',
      read: false
    },
    {
      id: '94',
      sender: 'Chen',
      text: '谢谢理解！我会尽快联系你的。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '谢谢理解！我会尽快联系你的。',
      translatedText: 'Thank you for understanding! I\'ll contact you as soon as possible.',
      body: JSON.stringify({ original: '谢谢理解！我会尽快联系你的。', translated: 'Thank you for understanding! I\'ll contact you as soon as possible.' }),
      timestamp: '2024-01-18T12:08:00Z',
      read: true
    },
    {
      id: '95',
      sender: 'Sophie',
      text: 'No rush! Take your time.',
      translatedText: '不急！慢慢来。',
      body: JSON.stringify({ original: 'No rush! Take your time.', translated: '不急！慢慢来。' }),
      timestamp: '2024-01-18T12:10:00Z',
      read: true
    },
    {
      id: '96',
      sender: 'Chen',
      text: '你真好！我会记住的。',
      originalLanguage: 'Chinese (Simplified)',
      originalText: '你真好！我会记住的。',
      translatedText: 'You\'re so kind! I\'ll remember that.',
      body: JSON.stringify({ original: '你真好！我会记住的。', translated: 'You\'re so kind! I\'ll remember that.' }),
      timestamp: '2024-01-18T12:12:00Z',
      read: true
    },
    {
      id: '97',
      sender: 'Sophie',
      text: 'Thanks! Talk to you soon.',
      translatedText: '谢谢！回头聊。',
      body: JSON.stringify({ original: 'Thanks! Talk to you soon.', translated: '谢谢！回头聊。' }),
      timestamp: '2024-01-18T12:15:00Z',
      read: true
    }
  ],
  'Isabella': [
    {
      id: '94',
      sender: 'Sophie',
      text: 'Olá Isabella! Como você está?',
      translatedText: 'Hello Isabella! How are you?',
      body: JSON.stringify({ original: 'Olá Isabella! Como você está?', translated: 'Hello Isabella! How are you?' }),
      timestamp: '2024-01-18T13:00:00Z',
      read: true
    },
    {
      id: '95',
      sender: 'Isabella',
      text: 'Estou ótima, obrigada!',
      originalLanguage: 'Portuguese',
      originalText: 'Estou ótima, obrigada!',
      translatedText: 'I am doing great, thank you!',
      body: JSON.stringify({ original: 'Estou ótima, obrigada!', translated: 'I am doing great, thank you!' }),
      timestamp: '2024-01-18T13:02:00Z',
      read: true
    },
    {
      id: '96',
      sender: 'Sophie',
      text: 'Perfect! I wanted to ask you something.',
      translatedText: 'Perfeito! Eu queria te perguntar algo.',
      body: JSON.stringify({ original: 'Perfect! I wanted to ask you something.', translated: 'Perfeito! Eu queria te perguntar algo.' }),
      timestamp: '2024-01-18T13:05:00Z',
      read: false
    },
    {
      id: '97',
      sender: 'Isabella',
      text: 'Claro! O que você gostaria de saber?',
      originalLanguage: 'Portuguese',
      originalText: 'Claro! O que você gostaria de saber?',
      translatedText: 'Of course! What would you like to know?',
      body: JSON.stringify({ original: 'Claro! O que você gostaria de saber?', translated: 'Of course! What would you like to know?' }),
      timestamp: '2024-01-18T13:08:00Z',
      read: true
    },
    {
      id: '98',
      sender: 'Sophie',
      text: 'About the project timeline.',
      translatedText: 'Sobre o cronograma do projeto.',
      body: JSON.stringify({ original: 'About the project timeline.', translated: 'Sobre o cronograma do projeto.' }),
      timestamp: '2024-01-18T13:10:00Z',
      read: true
    },
    {
      id: '99',
      sender: 'Isabella',
      text: 'Posso enviar os detalhes para você.',
      originalLanguage: 'Portuguese',
      originalText: 'Posso enviar os detalhes para você.',
      translatedText: 'I can send you the details.',
      body: JSON.stringify({ original: 'Posso enviar os detalhes para você.', translated: 'I can send you the details.' }),
      timestamp: '2024-01-18T13:12:00Z',
      read: true
    },
    {
      id: '100',
      sender: 'Sophie',
      text: 'That would be great! Thank you!',
      translatedText: 'Isso seria ótimo! Obrigada!',
      body: JSON.stringify({ original: 'That would be great! Thank you!', translated: 'Isso seria ótimo! Obrigada!' }),
      timestamp: '2024-01-18T13:15:00Z',
      read: true
    },
    {
      id: '101',
      sender: 'Isabella',
      text: 'De nada! Enviarei em breve.',
      originalLanguage: 'Portuguese',
      originalText: 'De nada! Enviarei em breve.',
      translatedText: 'You\'re welcome! I\'ll send it soon.',
      body: JSON.stringify({ original: 'De nada! Enviarei em breve.', translated: 'You\'re welcome! I\'ll send it soon.' }),
      timestamp: '2024-01-18T13:17:00Z',
      read: true
    }
  ]
};

export const contacts: Contact[] = [
  { 
    name: 'Priya', 
    language: 'Hindi', 
    lastMessage: 'I will send you the details soon.',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'María', 
    language: 'Spanish', 
    lastMessage: 'It is very interesting!',
    isOnline: false,
    unreadCount: 1
  },
  { 
    name: 'Min-jun', 
    language: 'Korean', 
    lastMessage: 'I will see you at 3 PM.',
    isOnline: true,
    unreadCount: 1
  },
  { 
    name: 'Alex', 
    language: 'English', 
    lastMessage: 'No problem! 4 PM works for me.',
    isOnline: true,
    unreadCount: 0
  },
  // New contacts - 20 more
  { 
    name: 'Jean-Pierre', 
    language: 'French', 
    lastMessage: 'I am doing very well, thank you!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Hans', 
    language: 'German', 
    lastMessage: 'I am fine, thank you!',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Yuki', 
    language: 'Japanese', 
    lastMessage: 'I am doing well, thank you very much!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Wei', 
    language: 'Chinese (Simplified)', 
    lastMessage: 'I have been very busy with work.',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Carlos', 
    language: 'Portuguese', 
    lastMessage: 'I am doing great!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Marco', 
    language: 'Italian', 
    lastMessage: 'I am very well, thank you!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Dmitri', 
    language: 'Russian', 
    lastMessage: 'Everything is fine, thank you!',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Ahmed', 
    language: 'Arabic', 
    lastMessage: 'I am doing well, thank you very much!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Luca', 
    language: 'Italian', 
    lastMessage: 'Everything is going well!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Sofia', 
    language: 'Spanish', 
    lastMessage: 'I am doing very well!',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Klaus', 
    language: 'German', 
    lastMessage: 'Everything is going well!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Amélie', 
    language: 'French', 
    lastMessage: 'I am doing great!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Raj', 
    language: 'Hindi', 
    lastMessage: 'I am doing well!',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Hiroshi', 
    language: 'Japanese', 
    lastMessage: 'I am fine, thank you!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Li', 
    language: 'Chinese (Simplified)', 
    lastMessage: 'I have been quite busy.',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Ana', 
    language: 'Portuguese', 
    lastMessage: 'I am doing very well!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Ivan', 
    language: 'Russian', 
    lastMessage: 'Everything is fine!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Fatima', 
    language: 'Arabic', 
    lastMessage: 'I am doing well!',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Seo-jin', 
    language: 'Korean', 
    lastMessage: 'I am doing very well!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Giovanni', 
    language: 'Italian', 
    lastMessage: 'I am doing great!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Elena', 
    language: 'Russian', 
    lastMessage: 'I am doing well!',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Mohammed', 
    language: 'Arabic', 
    lastMessage: 'I am doing very well!',
    isOnline: true,
    unreadCount: 0
  },
  { 
    name: 'Chen', 
    language: 'Chinese (Simplified)', 
    lastMessage: 'I have been busy but good.',
    isOnline: false,
    unreadCount: 0
  },
  { 
    name: 'Isabella', 
    language: 'Portuguese', 
    lastMessage: 'I am doing great!',
    isOnline: true,
    unreadCount: 0
  }
];
