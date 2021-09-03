export type Name = string;

export interface Character {
    name: Name;
    race: string;
    gender: string;
    profession: string;
    level: number;
    guild?:string;
    age: BigInteger;
    created:ISO8601;
    deaths: number;
    title : number;
    crafting: Crafting[];
}

export interface Crafting {
    discipline: Discipline;
    rating: number;
    active: boolean;
}

export enum Discipline {
    "Armorsmith" = "Armorsmith",
    "Artificer" = "Artificer",
    "Chef" = "Chef",
    "Huntsman" = "Huntsman",
    "Jeweler" = "Jeweler",
    "Leatherworker" = "Leatherworker",
    "Scribe" = "Scribe",
    "Tailor" = "Tailor",
    "Weaponsmith" = "Weaponsmith",
}

export type ISO8601 = string;
