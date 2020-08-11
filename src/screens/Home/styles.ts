import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: '10%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	flashCardContainer: {
		maxWidth: '100%',
	},
	flashCardRow: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	inputsContainer: {
		flexDirection: 'row',
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	textInput: {
		width: '30%',
		padding: 8,
	},
});
