// Character type definitions based on GET_CHARACTERS query

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
}

export interface CharacterInfo {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

export interface GetCharactersResult {
  characters: {
    results: Character[];
    info: CharacterInfo;
  };
} 