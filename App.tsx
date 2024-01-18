import { ErrorBoundary } from '@/components';
import { AppNavigation } from '@/navigator';
import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigation />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
