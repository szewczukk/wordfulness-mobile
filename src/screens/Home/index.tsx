import React, { Component, useEffect } from 'react';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './styles';
import { AppState } from '../../constans/types';
import * as routes from '../../constans/routes';
import { getAllFlashCardsRequest } from '../../redux/actions/flashcard';
import { StackParamsList } from '../../navigation/AppNavigation';
import { FlatList } from 'react-native-gesture-handler';

type NavigationProps = {
	navigation: StackNavigationProp<StackParamsList>;
	flashCards: { frontPage: string; backPage: string }[];
};

const mapStateToProps = (state: AppState) => ({
	flashCards: state.flashCards.flashCards,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
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

	render() {
		const { flashCards } = this.props;
		return (
			<View style={styles.container}>
				<Text>Welcome Home!</Text>

				<FlatList
					data={flashCards}
					renderItem={({ item }) => (
						<View>
							<Text>{JSON.stringify(item)}</Text>
						</View>
					)}
				/>

				<Button onPress={this.handleButtonPress} title={'Take me learn'} />
			</View>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
