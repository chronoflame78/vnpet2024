export const HOME_PATH = '/home';
export const BATTLE_PATH = '/battle';
export const ABOUT_PATH = '/about';
export const CONTACT_PATH = '/contact';

export const mobileWidth = 1023;

export const TYPES = {
	FIRE: 'Fire',
	WATER: 'Water',
	GRASS: 'Grass',
	ELECTRIC: 'Electric',
	ICE: 'Ice',
	PSYCHIC: 'Psychic',
	DRAGON: 'Dragon',
	DARK: 'Dark',
	FAIRY: 'Fairy',
	NORMAL: 'Normal',
	FIGHTING: 'Fighting',
	FLYING: 'Flying',
	POISON: 'Poison',
	GROUND: 'Ground',
	ROCK: 'Rock',
	BUG: 'Bug',
	GHOST: 'Ghost',
	STEEL: 'Steel',
};

export interface Skill {
	name: string;
	type: string;
	multiplier: number;
	isSpecial?: boolean;
}

export interface Pet {
	name: string;
	type: string;
	max_health: number;
	curr_health: number;
	phy_atk: number;
	spe_atk: number;
	def: number;
	res: number;
	speed: number;
	skillList: Skill[];
}

export interface ISquare {
	hasMonster: boolean;
	hasItem: boolean;
	isEnterable: boolean;
	type: SquareType;
}

export enum SquareType {
	GRASS = 'GRASS',
	WATER = 'WATER',
	MOUNTAIN = 'MOUNTAIN',
}

export interface MapInfo {
	name: string;
	width: number;
	height: number;
	gridData: ISquare[][];
}
