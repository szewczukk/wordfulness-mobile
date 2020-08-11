import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
	Text,
	View,
	Button,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import { AppState, FlashCard } from '../../constans/types';
import * as routes from '../../constans/routes';
import {
	getAllFlashCardsRequest,
	createFlashCardRequest,
} from '../../redux/actions/flashcard';
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
			createFlashCardRequest,
		},
		dispatch,
	);

type Props = NavigationProps &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

type State = {
	isAddingMode: boolean;
	frontpage: string;
	backpage: string;
};

class HomeComponent extends Component<Props, State> {
	state = {
		isAddingMode: false,
		frontpage: '',
		backpage: '',
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
		const { frontpage, backpage } = this.state;

		if (frontpage !== '' && backpage !== '') {
			this.props.createFlashCardRequest({ frontpage, backpage });
		}
		this.setState({ isAddingMode: false });
	};

	renderFlashCard = ({ item }: { item: FlashCard }) => {
		return (
			<View style={styles.flashCardRow}>
				<Text>{item.frontpage}</Text>
				<Text>{item.backpage}</Text>
			</View>
		);
	};

	render() {
		const { flashCards } = this.props;
		const { isAddingMode } = this.state;

		return (
			<KeyboardAvoidingView behavior="height" style={styles.container}>
				<FlatList
					data={flashCards}
					keyExtractor={(item) => item._id}
					renderItem={this.renderFlashCard}
					contentContainerStyle={styles.flashCardContainer}
				/>

				{isAddingMode && (
					<View style={styles.inputsContainer}>
						<TextInput
							placeholder="front page"
							style={styles.textInput}
							onChangeText={(text) => this.setState({ frontpage: text })}
						/>
						<TextInput
							placeholder="back page"
							style={styles.textInput}
							onChangeText={(text) => this.setState({ backpage: text })}
						/>
						<Button onPress={this.handleNewFlashCard} title="Ok" />
					</View>
				)}

				<View style={styles.buttonsContainer}>
					<Button onPress={this.handleButtonPress} title={'Take me learn'} />
					<Button onPress={this.handleAddingMode} title={'Add'} />
				</View>
			</KeyboardAvoidingView>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
