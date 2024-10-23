import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Obtiene la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll a la posición superior izquierda
  }, [pathname]); // Ejecuta cada vez que cambie la ruta

  return null; // Este componente no necesita renderizar nada
};

export default ScrollToTop;
