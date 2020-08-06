import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Learn from '../screens/Learn';

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator>
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Learn" component={Learn} />
	</Stack.Navigator>
);
