import '../styles/tailwind.css'
import Header from './layouts/header';
import Footer from './layouts/footer';
// src/App.tsx
import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME } from './themes';
import { applyTheme } from './themes/utils';
// import './App.css';
const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    applyTheme(theme);
    // alert(theme)
  }, [theme]);
  const toggleTheme = () => {

    theme == 'dark' ? setTheme('base') : setTheme('dark')
  }
  return (

    <div >
      <Header theme={theme} />
      <Component {...pageProps} theme={theme} />
      <Footer theme={theme} />
      <div onClick={() => toggleTheme()} className="flex items-center justify-center fixed h-8 w-8 border bg-sec-background top-44">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="rounded-md cursor-pointer icon-setting bi bi-gear-fill" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
      </div>
    </div>
  );

}

export default MyApp
