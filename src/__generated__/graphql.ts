export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The ISO 8601 date format. */
  DateTime: any;
  /**
   * A year using the in-universe standard of BBY
   * (Before the Battle of Yavin) or ABY (After the Battle of Yavin).
   */
  StarWarsYear: any;
  /** The URL format. */
  URI: any;
};




/** The possible gender for a human. */
export enum HumanGender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN'
}





export type V0HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type V0HomeQuery = { readonly lukeSkywalker?: Maybe<{ readonly name?: Maybe<string> }>, readonly leiaOrgana?: Maybe<{ readonly name?: Maybe<string> }>, readonly hanSolo?: Maybe<{ readonly name?: Maybe<string> }> };

export type V1HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type V1HomeQuery = { readonly lukeSkywalker?: Maybe<{ readonly name?: Maybe<string> }>, readonly leiaOrgana?: Maybe<{ readonly name?: Maybe<string> }>, readonly hanSolo?: Maybe<{ readonly name?: Maybe<string> }> };

export type V2HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type V2HomeQuery = { readonly lukeSkywalker?: Maybe<{ readonly name?: Maybe<string> }>, readonly leiaOrgana?: Maybe<{ readonly name?: Maybe<string> }>, readonly hanSolo?: Maybe<{ readonly name?: Maybe<string> }> };

export type V3HomeQuery_CharacterFragment = { readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }> };

export type V3HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type V3HomeQuery = { readonly lukeSkywalker?: Maybe<{ readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }> }>, readonly leiaOrgana?: Maybe<{ readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }> }>, readonly hanSolo?: Maybe<{ readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }> }> };

export type V4CharacterQuery_CharacterFragment = { readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }>, readonly appearsIn?: Maybe<ReadonlyArray<Maybe<{ readonly title?: Maybe<string>, readonly posterUrl?: Maybe<string>, readonly episodeNumber?: Maybe<number>, readonly releaseDate?: Maybe<any>, readonly featuredPlanets?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>>, readonly featuredHumans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>> }>>> };

export type V4HanSoloQueryVariables = Exact<{ [key: string]: never; }>;


export type V4HanSoloQuery = { readonly hanSolo?: Maybe<{ readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }>, readonly appearsIn?: Maybe<ReadonlyArray<Maybe<{ readonly title?: Maybe<string>, readonly posterUrl?: Maybe<string>, readonly episodeNumber?: Maybe<number>, readonly releaseDate?: Maybe<any>, readonly featuredPlanets?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>>, readonly featuredHumans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>> }>>> }> };

export type V4LeiaOrganaQueryVariables = Exact<{ [key: string]: never; }>;


export type V4LeiaOrganaQuery = { readonly leiaOrgana?: Maybe<{ readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }>, readonly appearsIn?: Maybe<ReadonlyArray<Maybe<{ readonly title?: Maybe<string>, readonly posterUrl?: Maybe<string>, readonly episodeNumber?: Maybe<number>, readonly releaseDate?: Maybe<any>, readonly featuredPlanets?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>>, readonly featuredHumans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>> }>>> }> };

export type V4LukeSkywalkerQueryVariables = Exact<{ [key: string]: never; }>;


export type V4LukeSkywalkerQuery = { readonly lukeSkywalker?: Maybe<{ readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }>, readonly appearsIn?: Maybe<ReadonlyArray<Maybe<{ readonly title?: Maybe<string>, readonly posterUrl?: Maybe<string>, readonly episodeNumber?: Maybe<number>, readonly releaseDate?: Maybe<any>, readonly featuredPlanets?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>>, readonly featuredHumans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>> }>>> }> };

export type V4HomeQuery_CharacterFragment = { readonly name?: Maybe<string>, readonly avatarUrl?: Maybe<any> };

export type V4HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type V4HomeQuery = { readonly humans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string>, readonly avatarUrl?: Maybe<any> }>>> };

export type V5Character_HumanFragment = { readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }>, readonly appearsIn?: Maybe<ReadonlyArray<Maybe<{ readonly title?: Maybe<string>, readonly posterUrl?: Maybe<string>, readonly episodeNumber?: Maybe<number>, readonly releaseDate?: Maybe<any>, readonly featuredPlanets?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>>, readonly featuredHumans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>> }>>> };

export type V5CharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type V5CharacterQuery = { readonly human?: Maybe<{ readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly height?: Maybe<number>, readonly mass?: Maybe<number>, readonly gender?: Maybe<HumanGender>, readonly birthYear?: Maybe<any>, readonly isJedi?: Maybe<boolean>, readonly avatarUrl?: Maybe<any>, readonly homeWorld?: Maybe<{ readonly name?: Maybe<string>, readonly diameter?: Maybe<number> }>, readonly appearsIn?: Maybe<ReadonlyArray<Maybe<{ readonly title?: Maybe<string>, readonly posterUrl?: Maybe<string>, readonly episodeNumber?: Maybe<number>, readonly releaseDate?: Maybe<any>, readonly featuredPlanets?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>>, readonly featuredHumans?: Maybe<ReadonlyArray<Maybe<{ readonly name?: Maybe<string> }>>> }>>> }> };

export type V5PreviewCharacter_HumanFragment = { readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly gender?: Maybe<HumanGender>, readonly avatarUrl?: Maybe<any> };

export type V5HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type V5HomeQuery = { readonly humans?: Maybe<ReadonlyArray<Maybe<{ readonly id?: Maybe<string>, readonly name?: Maybe<string>, readonly gender?: Maybe<HumanGender>, readonly avatarUrl?: Maybe<any> }>>> };
