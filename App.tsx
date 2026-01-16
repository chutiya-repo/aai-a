import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import SafetyPage from './pages/SafetyPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
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
      setCurrentPath(window.location.pathname);
    };

    const handleLinkClick = (event: MouseEvent) => {
        let target = event.target as HTMLElement;
        const anchor = target.closest('a');

        // Handle internal navigation for SPA-like experience
        if (anchor && anchor.target !== '_blank' && anchor.href && anchor.origin === window.location.origin) {
            const path = anchor.pathname;
            if(path !== window.location.pathname) {
                event.preventDefault();
                window.history.pushState({}, '', path);
                onLocationChange();
                window.scrollTo(0, 0); // Scroll to top on page change
            }
        }
    };
    
    window.addEventListener('popstate', onLocationChange);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
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
