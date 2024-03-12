import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import grass1 from '../../../assets/grass-1.png';
import water1 from '../../../assets/water-1.png';

interface Props {
	restricted?: boolean;
}

class BattleScreen extends React.Component<Props, any> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { restricted } = this.props;
		return <div className="battle-bg-1">
            {/* <img className='ground-1' src={water1} alt=''/>
            <img className='ground-2' src={grass1} alt=''/> */}
            <img className='mon-1' src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard"/>
            <img className='mon-2' src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif" alt="Lugia"/>
            <div className='action-text'>
                A wild Charizard appear!
            </div>
            <div className='action-menu'>
                <div className='menu-item'>Fight</div>
                <div className='menu-item'>Item</div>
                <div className='menu-item'>Mon</div>
                <div className='menu-item'>Run</div>
            </div>
        </div>;
	}
}

const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleScreen);
