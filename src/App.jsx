import { useEffect, Suspense, lazy } from 'react';
import './App.css';
import Lenis from '@studio-freight/lenis';

const Allrouters = lazy(() =>
  import('./AllRouters/Allrouters').then(module => ({ default: module.Allrouters }))
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Allrouters />
      </Suspense>
    </div>
  );
}

export default App;
