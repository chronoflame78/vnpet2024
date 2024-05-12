import { Component } from 'react';
import { ISquare, MapInfo, SquareType } from '../../../utils/constant';

interface Props {}

interface Position {
	x: number;
	y: number;
}

// Define the interface for the state
interface State {
	position: Position;
	gridData: ISquare[][];
}

// Example map initialization
const mapInfo: MapInfo = {
	name: 'Example Map',
	width: 5,
	height: 5,
	gridData: [
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
	],
};

class MapComponent extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			position: { x: 0, y: 0 },
			gridData: this.initializeGridData(),
		};
	}

	initializeGridData(): ISquare[][] {
		const grid: ISquare[][] = [];
		for (let row = 0; row < 5; row++) {
			const currentRow: ISquare[] = [];
			for (let col = 0; col < 5; col++) {
				currentRow.push({
					hasMonster: false,
					hasItem: false,
					isEnterable: true,
					type: SquareType.GRASS,
				});
			}
			grid.push(currentRow);
		}
		return grid;
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = (event) => {
		this.setState((prevState) => {
			const newPosition = { ...prevState.position };

			switch (event.key) {
				case 'ArrowUp':
					if (newPosition.y > 0) newPosition.y -= 1;
					break;
				case 'ArrowDown':
					if (newPosition.y < 4) newPosition.y += 1;
					break;
				case 'ArrowLeft':
					if (newPosition.x > 0) newPosition.x -= 1;
					break;
				case 'ArrowRight':
					if (newPosition.x < 4) newPosition.x += 1;
					break;
				default:
					break;
			}

			return { position: newPosition };
		});
	};

	renderGrid() {
		const { position } = this.state;
		const { gridData, width, height } = mapInfo;
		const grid: JSX.Element[] = [];

		for (let row = 0; row < height; row++) {
			for (let col = 0; col < width; col++) {
				const square = gridData[row][col];
				const isActive = position.x === col && position.y === row;

				grid.push(
					<div key={`${row}-${col}`} className={`square ${square.type.toLowerCase()}`}>
						{isActive && <img width={24} src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard" className="sprite-image" />}
						{square.hasMonster && <span className="monster">M</span>}
						{square.hasItem && <span className="item">I</span>}
					</div>
				);
			}
		}
		return grid;
	}

	render() {
		const { width, height } = mapInfo;
		return (
			<div className="map-component-container">
				<div
					className="grid w-100 h-100"
					style={{
						gridTemplateColumns: `repeat(${width}, 1fr)`,
						gridTemplateRows: `repeat(${height}, 1fr)`,
					}}
				>
					{this.renderGrid()}
				</div>
			</div>
		);
	}
}

export default MapComponent;
