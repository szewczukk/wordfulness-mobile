import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux';

export default () => (
	<Provider store={store}>
		<NavigationContainer>
			<StatusBar style="auto" />
			<SafeAreaView style={{ flex: 1 }}>
				<AppNavigation />
			</SafeAreaView>
		</NavigationContainer>
	</Provider>
);
