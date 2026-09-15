import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to the top whenever the route changes.
 *
 * React Router does NOT do this on its own. Without it, clicking a nav link
 * while scrolled halfway down a page drops you at that same offset on the new
 * page — so you land mid-content with no header in sight, and have to scroll
 * up to work out where you are. Browsers reset scroll on a real navigation;
 * a client-side router has to do it by hand.
 *
 * Renders nothing. Must sit inside <Router>, since it reads location.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' rather than 'smooth' on purpose. A smooth scroll on every
    // navigation animates the whole page past you, which is exactly the
    // motion that makes people feel queasy.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
