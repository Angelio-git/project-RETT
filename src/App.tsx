import { ParallaxFloatingDemo } from './components/ui/parallax-floating-demo';
import { TimelineDemo } from './components/ui/timeline-demo';
import { SocialFooter } from './components/ui/social-footer';
import './App.css';

function App() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-screen bg-red-600">
        <ParallaxFloatingDemo />
      </div>
      
      {/* Timeline Section */}
      <TimelineDemo />
      
      {/* Social Footer */}
      <SocialFooter />
    </div>
  );
}

export default App;