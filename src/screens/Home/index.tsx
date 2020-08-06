import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import * as routes from '../../constans/routes';
import { StackParamsList } from '../../navigation/AppNavigation';

type LearnScreenNavigationProp = StackNavigationProp<StackParamsList>;

type Props = {
	navigation: LearnScreenNavigationProp;
};

export default (props: Props) => {
	const handleButtonPress = () => {
		const { navigation } = props;

		navigation.navigate(routes.LEARN);
	};

	return (
		<View style={styles.container}>
			<Text>Welcome Home!</Text>

			<Button onPress={handleButtonPress} title={'Take me Learn'} />
		</View>
	);
};
