import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	flashCardContainer: {
		width: '50%',
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
	},
	textInput: {
		width: '30%',
		padding: 8,
	},
});
