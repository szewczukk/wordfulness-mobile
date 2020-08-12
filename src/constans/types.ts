export type FlashCard = {
	_id: string;
	frontpage: string;
	backpage: string;
};

export type AppState = {
	flashCards: {
		flashCards: FlashCard[];
		getAllErrors: string;
		createErrors: string;
	};
};

export type Action = {
	type: string;
	payload: any;
};
