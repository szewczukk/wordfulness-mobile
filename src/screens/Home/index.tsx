import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import { AppState, FlashCard } from '../../constans/types';
import * as routes from '../../constans/routes';
import { getAllFlashCardsRequest } from '../../redux/actions/flashcard';
import { StackParamsList } from '../../navigation/AppNavigation';
import { FlatList } from 'react-native-gesture-handler';

type NavigationProps = {
	navigation: StackNavigationProp<StackParamsList>;
};

const mapStateToProps = (state: AppState) => ({
	flashCards: state.flashCards.flashCards,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			getAllFlashCardsRequest,
		},
		dispatch,
	);

type Props = NavigationProps &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

type State = {
	isAddingMode: boolean;
};

class HomeComponent extends Component<Props, State> {
	state = {
		isAddingMode: false,
	};

	componentDidMount() {
		this.props.getAllFlashCardsRequest();
	}

	handleButtonPress = () => {
		const { navigation } = this.props;

		navigation.navigate(routes.LEARN);
	};

	handleAddingMode = () => {
		this.setState((prevState) => ({ isAddingMode: !prevState.isAddingMode }));
	};

	handleNewFlashCard = () => {
		this.setState({ isAddingMode: false });
	};

	renderFlashCard = ({ item }: { item: FlashCard }) => {
		return (
			<View style={styles.flashCardRow}>
				<Text>{item.frontpage}</Text>
				<Text>-</Text>
				<Text>{item.backpage}</Text>
			</View>
		);
	};

	render() {
		const { flashCards } = this.props;
		const { isAddingMode } = this.state;

		return (
			<View style={styles.container}>
				<FlatList
					data={flashCards}
					keyExtractor={(item) => item._id}
					renderItem={this.renderFlashCard}
					contentContainerStyle={styles.flashCardContainer}
				/>

				{isAddingMode && (
					<View style={styles.inputsContainer}>
						<TextInput placeholder="front page" style={styles.textInput} />
						<TextInput placeholder="back page" style={styles.textInput} />
						<Button onPress={this.handleNewFlashCard} title="Ok" />
					</View>
				)}

				<View style={styles.buttonsContainer}>
					<Button onPress={this.handleButtonPress} title={'Take me learn'} />
					<Button onPress={this.handleAddingMode} title={'Add'} />
				</View>
			</View>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
