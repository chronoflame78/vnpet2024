import { Component } from 'react';
import { ISquare, MapInfo, SquareType } from '../../../utils/constant';

interface Props {}

interface IPosition {
	x: number;
	y: number;
}

// Define the interface for the state
interface State {
	currentPosition: IPosition;
	viewport: IPosition;
	gridData: ISquare[][];
}

// Example map initialization
const mapInfo: MapInfo = {
	name: 'Example Map',
	width: 12,
	height: 12,
	viewPortWidth: 5,
	viewPortHeight: 7,
	gridData: [
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
		[
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.GRASS },
			{ hasMonster: false, hasItem: false, isEnterable: true, type: SquareType.MOUNTAIN },
			{ hasMonster: false, hasItem: true, isEnterable: true, type: SquareType.WATER },
			{ hasMonster: true, hasItem: false, isEnterable: true, type: SquareType.GRASS },
		],
	],
};

class MapComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPosition: { x: 0, y: 0 },
      gridData: mapInfo.gridData,
      viewport: { x: 0, y: 0 },
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState((prevState) => {
      const newPosition = { ...prevState.currentPosition };
      const newViewport = { ...prevState.viewport };

      switch (event.key) {
        case 'ArrowUp':
          if (newPosition.y > 0) newPosition.y -= 1;
          break;
        case 'ArrowDown':
          if (newPosition.y < mapInfo.height - 1) newPosition.y += 1;
          break;
        case 'ArrowLeft':
          if (newPosition.x > 0) newPosition.x -= 1;
          break;
        case 'ArrowRight':
          if (newPosition.x < mapInfo.width - 1) newPosition.x += 1;
          break;
        default:
          break;
      }

      // Update viewport to center on the sprite within bounds
      newViewport.x = Math.max(0, Math.min(newPosition.x - Math.floor(mapInfo.viewPortWidth / 2), mapInfo.width - mapInfo.viewPortWidth));
      newViewport.y = Math.max(0, Math.min(newPosition.y - Math.floor(mapInfo.viewPortHeight / 2), mapInfo.height - mapInfo.viewPortHeight));

      return { currentPosition: newPosition, viewport: newViewport };
    });
  };

  renderGrid() {
    const { currentPosition, viewport } = this.state;
    const { gridData } = mapInfo;
    const grid: JSX.Element[] = [];

    for (let row = viewport.y; row < viewport.y + mapInfo.viewPortHeight; row++) {
      if (row >= mapInfo.height) continue; // Bounds check for rows
      for (let col = viewport.x; col < viewport.x + mapInfo.viewPortWidth; col++) {
        if (col >= mapInfo.width) continue; // Bounds check for columns

        const square = gridData[row][col];
        const isActive = currentPosition.x === col && currentPosition.y === row;

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
    const { viewPortWidth, viewPortHeight } = mapInfo;
    return (
      <div className="map-component-container">
        <div
          className="grid w-100 h-100"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${viewPortWidth}, 1fr)`,
            gridTemplateRows: `repeat(${viewPortHeight}, 1fr)`,
          }}
        >
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}

export default MapComponent;