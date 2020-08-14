import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as routes from '../constans/routes';
import Home from '../screens/Home';
import Learn from '../screens/Learn';

export type StackParamsList = {
	[routes.HOME]: undefined;
	[routes.LEARN]: undefined;
};

const Stack = createStackNavigator<StackParamsList>();

export default () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name={routes.HOME} component={Home} />
		<Stack.Screen name={routes.LEARN} component={Learn} />
	</Stack.Navigator>
);
