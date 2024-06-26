import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BattleScreen from '../../common/battleScreen/battleScreen';
interface Props {

}

class BattleComponent extends React.Component<Props, any> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="battle-component-container position-relative">
				<BattleScreen />
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
