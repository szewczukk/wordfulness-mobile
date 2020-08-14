import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import * as routes from '../../constans/routes';
import { Answer } from '../../constans/enums';
import { StoreType } from '../../redux';
import * as actions from '../../redux/actions/learning';
import { StackParamsList } from '../../navigation/AppNavigation';

type NavigationProps = {
	navigation: StackNavigationProp<StackParamsList>;
};

const mapStateToProps = (state: StoreType) => ({
	allFlashCards: state.flashCards.flashCards,
	finished: state.learning.finished,
	queue: state.learning.queue,
	currentFlashCard: state.learning.currentFlashCard,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			initLearning: actions.initLearning,
			answer: actions.answer,
		},
		dispatch,
	);

type Props = NavigationProps &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

class LearnScreen extends Component<Props> {
	componentDidMount() {
		const { navigation, allFlashCards, initLearning } = this.props;

		navigation.addListener('focus', () => {
			initLearning(allFlashCards);
		});
	}

	handleHome = () => {
		this.props.navigation.navigate(routes.HOME);
	};

	handleAnswerButtons = (ans: Answer) => {
		const { currentFlashCard, answer } = this.props;

		answer({ id: currentFlashCard?._id, answer: ans });
	};

	render() {
		const { finished, currentFlashCard } = this.props;

		return (
			<View style={styles.container}>
				{!finished ? (
					<>
						<Text>
							{currentFlashCard?.frontpage} - {currentFlashCard?.backpage}
						</Text>

						<Button
							onPress={() => this.handleAnswerButtons(Answer.OK)}
							title="Easy"
						/>
						<Button
							onPress={() => this.handleAnswerButtons(Answer.DONT_KNOW)}
							title="Hard"
						/>
					</>
				) : (
					<Button onPress={this.handleHome} title="Go home" />
				)}
			</View>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnScreen);
