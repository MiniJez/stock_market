export interface Asset {
    id: string;
    name: string;
    symbol: string;
    type: AssetType;
    category: AssetCategory;
}

export enum AssetType {
    ACTION = "action",
    CRYPTO = "crypto",
    ETF = "etf",
    OR = "or"
}

export enum AssetCategory {
    OFFENSIVE = "offensive",
    DEFENSIVE = "defensive"
}