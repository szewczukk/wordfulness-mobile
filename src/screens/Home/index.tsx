import React, { Component } from 'react';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
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

class HomeComponent extends Component<Props> {
	componentDidMount() {
		this.props.getAllFlashCardsRequest();
	}

	handleButtonPress = () => {
		const { navigation } = this.props;

		navigation.navigate(routes.LEARN);
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
		return (
			<View style={styles.container}>
				<FlatList
					data={flashCards}
					keyExtractor={(item) => item._id}
					renderItem={this.renderFlashCard}
					contentContainerStyle={styles.flashCardContainer}
				/>

				<Button onPress={this.handleButtonPress} title={'Take me learn'} />
			</View>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
