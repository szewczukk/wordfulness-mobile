export type FlashCard = {
	_id: string;
	frontpage: string;
	backpage: string;
};

export type Action = {
	type: string;
	payload: any;
};
