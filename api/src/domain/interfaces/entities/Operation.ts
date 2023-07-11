export interface Operation {
    id: string;
    assetId: string;
    type: OperationType;
	quantity: number;
	price: number;
    date: Date;
}

export enum OperationType {
    ACHAT = "achat",
    VENTE = "vente"
}