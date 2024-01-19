import { ErrorBoundary } from '@/components';
import { AppNavigation } from '@/navigator';
import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
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

export default gestureHandlerRootHOC(App);
