# Slide 1 — UniChat Overview
- One codebase, three platforms (iOS/Android/Web) with Ionic + Capacitor.
- Simple multilingual chat that feels native everywhere.
- Visuals: onboarding and language choices (`assests/onboarding.png`, `assests/translation-preferences.png`).

# Slide 2 — Problem & Rationale
- Chat translation is often an afterthought, slow, or awkward.
- Two native apps mean double work and drifting designs.
- Use a hybrid Ionic app with a small client-side translator to stay fast and consistent.

# Slide 3 — Architecture
- Ionic React UI (`IonPage`/`IonHeader`/`IonContent`) with platform-aware styling.
- Translation broker on the client; primary provider with a simple fallback and cache.
- Messages keep both original and translated text; offline queue retries when back online.
- Capacitor plugins for secure storage, clipboard, and network status; native shells via `ionic cap build`.
- Visual: login (`assests/fig1.png`) or conversation list (`assests/fig2.png`).

# Slide 4 — Method in Brief
- Small bilingual group across four language pairs.
- Tasks: onboard, set languages, start a chat, send and read translated messages, go offline then back online.
- Logs: translation and delivery speed, cache use, stability, network quality; short usability surveys.
- Devices: iPhone, Android phone, and web browser from the same codebase.

# Slide 5 — Results
- Translation stayed quick and accurate enough for casual chat.
- Experience felt the same on iOS, Android, and web.
- Worked even on slow networks thanks to caching and retry.
- Users liked the language badges and offline queue; no major crashes noted.
- Visuals: chat detail (`assests/fig3.png`), analytics cards (`assests/fig4.png`), runtime dashboard (`assests/performance-dashboard.png`).

# Slide 6 — Conclusion
- Hybrid Ionic + client translation met the goals without building two native apps.
- Next: try on-device translation, smarter caching for bad networks, better RTL/tone support, and add end-to-end encryption.
