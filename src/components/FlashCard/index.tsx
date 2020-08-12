import React, { useState } from 'react';
import { Text, TouchableOpacity, Button } from 'react-native';

import styles from './styles';
import { FlashCard } from '../../constans/types';

export default (props: FlashCard) => {
	const [clicked, setClicked] = useState(false);
	const { frontpage, backpage } = props;

	const handleContainerPress = () => {
		setClicked(!clicked);
	};

	const handleButtonPress = () => {
		console.log('Hello');
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handleContainerPress}>
			<Text>{frontpage}</Text>
			<Text>{backpage}</Text>
			{clicked && <Button onPress={handleButtonPress} title="Delete" />}
		</TouchableOpacity>
	);
};
