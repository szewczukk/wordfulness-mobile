import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import * as routes from '../../constans/routes';
import { Answer } from '../../constans/enums';
import { StoreType } from '../../redux';
import { answer, initLearning } from '../../redux/actions/learning';
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
			initLearning,
			answer,
		},
		dispatch,
	);

type Props = NavigationProps &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

class LearnScreen extends Component<Props> {
	componentDidMount() {
		this.props.navigation.addListener('focus', () => {
			this.props.initLearning(this.props.allFlashCards);
		});
	}

	handleHome = () => {
		this.props.navigation.navigate(routes.HOME);
	};

	handleAnswerButtons = (ans: Answer) => {
		this.props.answer({ id: this.props.currentFlashCard?._id, answer: ans });
	};

	render() {
		return (
			<View style={styles.container}>
				{!this.props.finished ? (
					<>
						<Text>
							{this.props.currentFlashCard?.frontpage} -{' '}
							{this.props.currentFlashCard?.backpage}
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
