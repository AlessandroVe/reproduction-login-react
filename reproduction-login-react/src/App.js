import './App.css';
import Login from './screens/Login/Login';
// import i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import locales
import translationEn from './locales/en.json'
import translationIt from './locales/it.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: translationIt },
      en: { translation: translationEn },
    },
    lng: "it",
    fallbackLng: "it",
    interpolation: { escapeValue: false },
  });

function App() {

  const changeLanguage = (lng) => () => {
    i18n.changeLanguage(lng)
  }

  //nella ocomponente login devi mettere la callback che prende changeLanguage
  return (
    <div className="App">
      <Login />

    </div>
  );
}

export default App;

