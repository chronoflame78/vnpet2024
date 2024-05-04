import {
    WINDOW_RESIZE,
  } from "../actions/appAction";
  const mobileWidth = 1023;
  
  export interface IAppReducer {
    loading: boolean;
    windowHeight: number;
    windowWidth: number;
    isMobileView: boolean;
    battleData: any;
    teamData: any;
  }
  
  const InitialState: Partial<IAppReducer> = {
    loading: false,
    windowHeight: window.innerWidth,
    windowWidth: window.innerHeight,
    isMobileView: window.innerWidth <= mobileWidth,
    battleData: {
      ally: {
        name: 'Player 1',
        type: 'WATER',
        health: 200,
        phy_atk: 30,
        spe_atk: 10,
        def: 5,
        res: 5,
        speed: 5
      },
      enemy: {
        name: 'Player 2',
        type: 'FIRE',
        health: 200,
        phy_atk: 50,
        spe_atk: 10,
        def: 5,
        res: 5,
        speed: 7
      }
    }
  };
  export function AppReducer(state = InitialState, action: any): any {
    switch (action.type) {
      case WINDOW_RESIZE:
        return {
          ...state,
          windowWidth: action.response.windowWidth,
          windowHeight: action.response.windowHeight,
          isMobileView: window.innerWidth <= mobileWidth
        };
        default:
            return state;
    }
  }
  