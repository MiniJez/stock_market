export interface Operation {
    id: string;
    type: OperationType;
    assetName: string;
	assetType: AssetType;
    assetCategory: AssetCategory;
	quantity: number;
	price: number;
    date: Date;
}

export enum OperationType {
    ACHAT = "achat",
    VENTE = "vente"
}

export enum AssetCategory {
    OFFENSIVE = "offensive",
    DEFENSIVE = "defensive"
}

export enum AssetType {
    ACTION = "action",
    CRYPTO = "crypto",
    ETF = "etf",
    OR = "or"
}