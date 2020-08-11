export type FlashCard = {
	frontPage: string;
	backPage: string;
};

export type AppState = {
	flashCards: {
		flashCards: FlashCard[];
		error: {
			stringField: string;
		};
	};
};
