import React, { Component } from 'react';
import { bindActionCreators, Dispatch, Store } from 'redux';
import { connect } from 'react-redux';
import {
	View,
	Button,
	TextInput,
	KeyboardAvoidingView,
	RefreshControl,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import FlashCard from '../../components/FlashCard';
import * as routes from '../../constans/routes';
import * as actions from '../../redux/actions/flashcard';
import { StoreType } from '../../redux';
import { StackParamsList } from '../../navigation/AppNavigation';
import { FlatList } from 'react-native-gesture-handler';
import { FlashCard as FlashCardType } from '../../constans/types';

type NavigationProps = {
	navigation: StackNavigationProp<StackParamsList>;
};

const mapStateToProps = (state: StoreType) => ({
	flashCards: state.flashCards.flashCards,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			getAllFlashCardsRequest: actions.getAllFlashCardsRequest,
			createFlashCardRequest: actions.createFlashCardRequest,
		},
		dispatch,
	);

type Props = NavigationProps &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

type State = {
	isAddingMode: boolean;
	refreshing: boolean;
	frontpage: string;
	backpage: string;
};

class HomeComponent extends Component<Props, State> {
	state = {
		isAddingMode: false,
		refreshing: false,
		frontpage: '',
		backpage: '',
	};

	componentDidMount() {
		const { navigation, getAllFlashCardsRequest } = this.props;

		navigation.addListener('focus', () => {
			getAllFlashCardsRequest();
		});
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
			this.setState({ frontpage: '', backpage: '' });
		}
		this.setState({ isAddingMode: false });
	};

	render() {
		const { flashCards } = this.props;
		const { isAddingMode } = this.state;

		return (
			<KeyboardAvoidingView
				behavior="padding"
				keyboardVerticalOffset={40}
				style={styles.container}
			>
				<FlatList
					data={flashCards}
					keyExtractor={(item: FlashCardType) => item._id}
					renderItem={({ item }) => <FlashCard {...item} />}
					contentContainerStyle={styles.flashCardContainer}
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={() => this.props.getAllFlashCardsRequest()}
						/>
					}
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
