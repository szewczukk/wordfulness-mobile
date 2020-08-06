import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import * as routes from '../../constans/routes';
import { StackParamsList } from '../../navigation/AppNavigation';

type Props = {
	navigation: StackNavigationProp<StackParamsList>;
};

export default (props: Props) => {
	const handleButtonPress = () => {
		const { navigation } = props;

		navigation.navigate(routes.HOME);
	};

	return (
		<View style={styles.container}>
			<Text>Learn!</Text>

			<Button onPress={handleButtonPress} title={'Take me Home'} />
		</View>
	);
};
