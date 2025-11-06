import { useDeviceType } from './hooks/useDeviceType';
import MobileApp from './components/MobileApp';
import DesktopApp from './components/DesktopApp';

function App() {
  const { isMobile, isTablet } = useDeviceType();
  
  if (isMobile || isTablet) {
    return <MobileApp />;
  }
  
  return <DesktopApp />;
}

export default App;
