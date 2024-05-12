import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from '../../../utils/constant';

import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BattleScreen from '../../common/battleScreen/battleScreen';
interface Props {
	restricted?: boolean;
}

class HomePage extends React.Component<Props, any> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { restricted } = this.props;
		return (<div className="home-container">
      <h1>VN Pet</h1>
    </div>);
	}
}

const mapStateToProps = (state: any) => {
	return {

	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
