import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import SafetyPage from './pages/SafetyPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', onLocationChange);

    // Handle initial load if no hash
    if (!window.location.hash) {
        window.history.replaceState(null, '', '#/');
    }

    return () => {
      window.removeEventListener('hashchange', onLocationChange);
    };
  }, []);

  const renderPage = () => {
    const path = currentPath.replace(/^#/, '');
    switch (path) {
      case '/safety':
        return <SafetyPage />;
      default:
        return <HomePage />;
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-200 min-h-screen selection:bg-black/10 dark:selection:bg-white/20 transition-colors duration-300">
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
