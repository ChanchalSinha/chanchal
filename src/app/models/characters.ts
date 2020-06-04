import { Character } from "./character";

export class Characters {
    info: CharacterInfo;
    results: Character[];
}

export class CharacterInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}