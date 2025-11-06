import { useDeviceType } from './hooks/useDeviceType';
import MobileApp from './components/MobileApp';
import DesktopApp from './components/DesktopApp';

function App() {
  const { isMobile, isTablet } = useDeviceType();
  
  // Для мобильных и планшетов показываем мобильную версию
  // Для десктопов - десктопную версию
  if (isMobile || isTablet) {
    return <MobileApp />;
  }
  
  return <DesktopApp />;
}

export default App;
