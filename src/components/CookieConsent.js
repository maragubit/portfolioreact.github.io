import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Almacenar en una cookie que el usuario ha aceptado
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent">
      <p>Este sitio web usa cookies propias para mejorar tu experiencia. ¿ Aceptas el uso de <a href="/cookies" target="_blank">cookies</a> ?</p>
      <button onClick={handleAcceptCookies}>Aceptar</button>
    </div>
  );
};

export default CookieConsent;
