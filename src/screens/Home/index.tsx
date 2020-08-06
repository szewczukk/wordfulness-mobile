import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';

type RootStackParamList = {
	Home: undefined;
	Learn: undefined;
};

type LearnScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Learn'
>;

type Props = {
	navigation: LearnScreenNavigationProp;
};

export default (props: Props) => {
	const handleButtonPress = () => {
		const { navigation } = props;

		navigation.navigate('Learn');
	};

	return (
		<View style={styles.container}>
			<Text>Welcome Home!</Text>

			<Button onPress={handleButtonPress} title={'Take me Learn'} />
		</View>
	);
};
