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

		navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			<Text>Learn!</Text>

			<Button onPress={handleButtonPress} title={'Take me Home'} />
		</View>
	);
};
