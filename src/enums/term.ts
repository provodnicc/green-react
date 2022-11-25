export enum TermType {
    P1Y = "P1Y",
    P2Y = "P2Y",
    P3Y = "P3Y",
    P4Y = "P4Y",
    P5Y = "P5Y",
    P10Y = "P10Y",
    P15Y= "P15Y"
}
export const termTypes: TermType[] = [
    TermType.P1Y,
    TermType.P2Y,
    TermType.P3Y,
    TermType.P4Y,
    TermType.P5Y,
    TermType.P10Y,
    TermType.P15Y
];
export const termTypeTitles: Record<TermType, string> = {
    [TermType.P1Y]: "1 год",
    [TermType.P2Y]: "2 года",
    [TermType.P3Y]: "3 года",
    [TermType.P4Y]: "4 года",
    [TermType.P5Y]: "5 лет",
    [TermType.P10Y]: "10 лет",
    [TermType.P15Y]: "15 лет"
};