import {TermType} from "./term"
export enum PurposeType {
    Money = "Money",
    RefinanceCredit = "RefinanceCredit",
    NewCar = "NewCar",
    UsedCar = "UsedCar",
    Mortgage = "Mortgage",
    RefinanceMortgage ="RefinanceMortgage"
}

export const purposeTypes: PurposeType[] = [
    PurposeType.Money,
    PurposeType.RefinanceCredit,
    PurposeType.NewCar,
    PurposeType.UsedCar,
    PurposeType.Mortgage,
    PurposeType.RefinanceCredit
];

export const purposeTypeTitles: Record<PurposeType, string> = {
    [PurposeType.Money]: "Просто деньги",
    [PurposeType.RefinanceCredit]: "Рефинансирование кредита",
    [PurposeType.NewCar]: "Покупка нового автомобиля",
    [PurposeType.UsedCar]: "Покупка подержанного автомобиля",
    [PurposeType.Mortgage]: "Ипотека",
    [PurposeType.RefinanceMortgage]: "Рефинансирование ипотеки"
};

export interface Request {
    amount: number,
    purpose: PurposeType | null,
    term: TermType | null,
    // locationRoute: string
}
