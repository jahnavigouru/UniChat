// Translation service for handling message translations
// Uses Google Translate API (requires API key in environment)

export interface Language {
  name: string;
  code: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'Spanish', code: 'es' },
  { name: 'French', code: 'fr' },
  { name: 'German', code: 'de' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Korean', code: 'ko' },
  { name: 'Japanese', code: 'ja' },
  { name: 'Chinese (Simplified)', code: 'zh-CN' },
  { name: 'Portuguese', code: 'pt' },
  { name: 'Italian', code: 'it' },
  { name: 'Russian', code: 'ru' },
  { name: 'Arabic', code: 'ar' },
];

/**
 * Translate text using Google Translate API
 * Note: This requires a Google Cloud API key
 * For production, this should be done server-side
 */
export async function translateText(
  text: string,
  sourceLanguageCode: string,
  targetLanguageCode: string
): Promise<string> {
  // If languages are the same, return original text
  if (sourceLanguageCode === targetLanguageCode) {
    return text;
  }

  try {
    console.log(`[Translation] Translating from ${sourceLanguageCode} to ${targetLanguageCode}: "${text}"`);
    
    // Option 1: Use Google Translate API (requires API key)
    // You can set this up via environment variable or config
    const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
    
    if (apiKey) {
      console.log('[Translation] Using Google Translate API');
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: sourceLanguageCode,
            target: targetLanguageCode,
            format: 'text',
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const translated = data.data.translations[0].translatedText;
        console.log(`[Translation] Google Translate result: "${translated}"`);
        return translated;
      } else {
        console.warn('[Translation] Google Translate API failed, trying fallback');
      }
    } else {
      console.log('[Translation] No Google API key found, using MyMemory free API');
    }

    // Option 2: Fallback - Use a free translation API (MyMemory)
    // This is a free service with rate limits
    console.log('[Translation] Using MyMemory translation API...');
    const fallbackResponse = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLanguageCode}|${targetLanguageCode}`
    );

    if (fallbackResponse.ok) {
      const fallbackData = await fallbackResponse.json();
      if (fallbackData.responseStatus === 200) {
        const translated = fallbackData.responseData.translatedText;
        console.log(`[Translation] MyMemory result: "${translated}"`);
        return translated;
      } else {
        console.warn('[Translation] MyMemory API returned error:', fallbackData.responseStatus);
      }
    } else {
      console.warn('[Translation] MyMemory API request failed');
    }

    // If all else fails, return original text
    console.warn('[Translation] All translation methods failed, returning original text');
    return text;
  } catch (error) {
    console.error('[Translation] Error:', error);
    return text;
  }
}

/**
 * Get language code from language name
 */
export function getLanguageCode(languageName: string): string {
  const language = SUPPORTED_LANGUAGES.find(
    (lang) => lang.name === languageName
  );
  return language?.code || 'en';
}

/**
 * Get language name from language code
 */
export function getLanguageName(languageCode: string): string {
  const language = SUPPORTED_LANGUAGES.find(
    (lang) => lang.code === languageCode
  );
  return language?.name || 'English';
}

