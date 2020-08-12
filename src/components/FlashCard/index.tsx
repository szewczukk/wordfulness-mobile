import { connect } from 'react-redux';
import React, { useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { Text, TouchableOpacity, Button } from 'react-native';

import styles from './styles';
import { FlashCard } from '../../constans/types';
import { deleteFlashCardRequest } from '../../redux/actions/flashcard';

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			deleteFlashCardRequest,
		},
		dispatch,
	);

type Props = FlashCard & ReturnType<typeof mapDispatchToProps>;

const FlashCardComponent = (props: Props) => {
	const [clicked, setClicked] = useState(false);
	const { _id, frontpage, backpage } = props;

	const handleContainerPress = () => {
		setClicked(!clicked);
	};

	const handleButtonPress = () => {
		props.deleteFlashCardRequest(_id);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handleContainerPress}>
			<Text>{frontpage}</Text>
			<Text>{backpage}</Text>
			{clicked && <Button onPress={handleButtonPress} title="Delete" />}
		</TouchableOpacity>
	);
};

export default connect(null, mapDispatchToProps)(FlashCardComponent);
