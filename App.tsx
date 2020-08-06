import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';

export default () => (
	<NavigationContainer>
		<StatusBar style="auto" />
		<AppNavigation />
	</NavigationContainer>
);
