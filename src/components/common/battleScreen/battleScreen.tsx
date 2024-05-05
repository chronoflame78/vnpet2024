import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import grass1 from '../../../assets/grass-1.png';
import water1 from '../../../assets/water-1.png';
import { Pet, Skill, TYPES } from '../../../utils/constant';
import * as SvgIcons from '../../../styles/svgIcons';
import * as _ from 'lodash';
import { TypingAnimationText } from '../typingAnimationText/typingAnimationText';

interface Props {}

interface State {
	isActionMenuOpen: boolean;
	isSkillMenuOpen: boolean;
	isItemMenuOpen: boolean;
	isSwitchMenuOpen: boolean;
	actionText: string;
	battleData: {
		ally: Pet;
		enemy: Pet;
	};
}

class BattleScreen extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			isActionMenuOpen: true,
			isSkillMenuOpen: false,
			isItemMenuOpen: false,
			isSwitchMenuOpen: false,
			actionText: '',
			battleData: {
				ally: {} as Pet,
				enemy: {} as Pet,
			},
		};
	}

	componentDidMount(): void {
		const battleData = {
			ally: {
				name: 'Lugia',
				type: 'WATER',
				max_health: 200,
				curr_health: 200,
				phy_atk: 30,
				spe_atk: 30,
				def: 5,
				res: 5,
				speed: 5,
				skillList: [
					{ name: 'Water Beam', type: TYPES.WATER, multiplier: 1.2, isSpecial: true },
					{ name: 'Hydro Pump', type: TYPES.WATER, multiplier: 1.5, isSpecial: true },
				],
			},
			enemy: {
				name: 'Charizard',
				type: 'FIRE',
				max_health: 200,
				curr_health: 200,
				phy_atk: 50,
				spe_atk: 10,
				def: 5,
				res: 5,
				speed: 7,
				skillList: [
					{ name: 'Fireball', type: TYPES.FIRE, multiplier: 1.5, isSpecial: true },
					{ name: 'Metalclaw', type: TYPES.STEEL, multiplier: 1.2, isSpecial: false },
					{ name: 'Inferno', type: TYPES.FIRE, multiplier: 3, isSpecial: true },
				],
			},
		};

		const initText = `A wild ${battleData.enemy.name} appeared!`;
		this.setState({ battleData, actionText: initText });
	}

	getSkillList = () => {
		return [
			{ id: 1, name: 'Fireball', type: TYPES.FIRE, damage: 10 },
			{ id: 2, name: 'Metalclaw', type: TYPES.STEEL, damage: 10 },
			{ id: 3, name: 'Inferno', type: TYPES.FIRE, damage: 10 },
		];
	};

	toggleSkillMenu = (value: boolean) => {
		if (value) {
			this.setState({ isSkillMenuOpen: true, isActionMenuOpen: false });
		} else {
			this.setState({ isSkillMenuOpen: false, isActionMenuOpen: true });
		}
	};

	executeRandomAction = (actions) => {
		if (!Array.isArray(actions) || actions.length === 0) {
			return;
		}
	
		// Generate a random index based on the length of the validCallbacks array
		const randomIndex = Math.floor(Math.random() * actions.length);
	
		// Execute the callback at the random index
		actions[randomIndex]();
	}

	getRandomSkill= (skills) => {
		if (!Array.isArray(skills) || skills.length === 0) {
			return;
		}

		const randomIndex = Math.floor(Math.random() * skills.length);
	
		return skills[randomIndex];
	}

	performAttack = (isAlly: boolean) => {
		const { battleData } = this.state;
		const { ally, enemy } = battleData;
		const newAllyData = _.cloneDeep(ally);
		const newEnemyData = _.cloneDeep(enemy);
		const actionText = isAlly ? `${ally.name} used attack!` : `${enemy.name} used attack!`;
		if (isAlly) {
			newEnemyData.curr_health = enemy.curr_health - ally.phy_atk;
			if (newEnemyData.curr_health < 0) {
				newEnemyData.curr_health = 0;
			}
			this.setState({ battleData: { ally: newAllyData, enemy: newEnemyData }, actionText, isActionMenuOpen: false, isSkillMenuOpen: false });

			setTimeout(() => {
				this.executeRandomAction([() => this.performAttack(false), () => this.performSkillMove(false, this.getRandomSkill(enemy.skillList))]);
			}, 1500);
		} else {
			newAllyData.curr_health = ally.curr_health - enemy.phy_atk;
			if (newAllyData.curr_health < 0) {
				newAllyData.curr_health = 0;
			}
			this.setState({ battleData: { ally: newAllyData, enemy: newEnemyData }, actionText, isActionMenuOpen: false, isSkillMenuOpen: false });

			setTimeout(() => {
				this.setState({ isActionMenuOpen: true, isSkillMenuOpen: false });
			}, 1500);
		}
		
	};

	performSkillMove = (isAlly: boolean, skill: Skill) => {
		const { battleData } = this.state;
		const { ally, enemy } = battleData;
		const newAllyData = _.cloneDeep(ally);
		const newEnemyData = _.cloneDeep(enemy);
		const actionText = isAlly ? `${ally.name} used ${skill.name}!` : `${enemy.name} used ${skill.name}!`;
		if (isAlly) {
			const skill_damage = skill.isSpecial ? ally.spe_atk * skill.multiplier : ally.phy_atk * skill.multiplier;
			newEnemyData.curr_health = enemy.curr_health - skill_damage;
			if (newEnemyData.curr_health < 0) {
				newEnemyData.curr_health = 0;
			}
			this.setState({ battleData: { ally: newAllyData, enemy: newEnemyData }, actionText, isActionMenuOpen: false, isSkillMenuOpen: false});

			setTimeout(() => {
				this.executeRandomAction([() => this.performAttack(false), () => this.performSkillMove(false, this.getRandomSkill(enemy.skillList))]);
			}, 1500);
		} else {
			const skill_damage = skill.isSpecial ? enemy.spe_atk * skill.multiplier : enemy.phy_atk * skill.multiplier;
			newAllyData.curr_health = ally.curr_health - skill_damage;
			if (newAllyData.curr_health < 0) {
				newAllyData.curr_health = 0;
			}

			this.setState({ battleData: { ally: newAllyData, enemy: newEnemyData }, actionText, isActionMenuOpen: false, isSkillMenuOpen: false });

			setTimeout(() => {
				this.setState({ isActionMenuOpen: true, isSkillMenuOpen: false });
			}, 1500);
		}
		
	};

	render() {
		const { isActionMenuOpen, isSkillMenuOpen } = this.state;
		const { battleData, actionText } = this.state;
		const { ally, enemy } = battleData;
		console.log('rerendering');
		console.log('enemy.current_health', enemy.curr_health);
		console.log('enemy.max_health', enemy.max_health);
		console.log('divide', enemy.curr_health / enemy.max_health);
		console.log('round', Math.round((enemy.curr_health / enemy.max_health) * 100));
		return (
			<div className="battle-bg-1">
				{/* <img className='ground-1' src={water1} alt=''/> */}
				{/* <img className='ground-2' src={grass1} alt=''/> */}
				<img className="enemy" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard" />
				<div className="enemy-health-bar">
					<div className="health-bar" style={{ width: `${Math.round((enemy.curr_health / enemy.max_health) * 100)}%` }}></div>
				</div>
				<img className="ally" src="https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif" alt="Lugia" />
				<div className="ally-health-bar">
					<div className="health-bar" style={{ width: `${Math.round((ally.curr_health / ally.max_health) * 100)}%` }}></div>
				</div>
				<div className="action-text">
					<TypingAnimationText text={actionText} speed={50} />
				</div>
				{isActionMenuOpen && (
					<div className="action-menu">
						<div className="menu-item" onClick={() => this.performAttack(true)}>
							<SvgIcons.ArrowRight />
							<span>Attack</span>
						</div>
						<div className="menu-item" onClick={() => this.toggleSkillMenu(true)}>
							<SvgIcons.ArrowRight />
							<span>Skills</span>
						</div>
						<div className="menu-item">
							<SvgIcons.ArrowRight />
							<span>Items</span>
						</div>
						<div className="menu-item">
							<SvgIcons.ArrowRight />
							<span>Switch</span>
						</div>
						<div className="menu-item">
							<SvgIcons.ArrowRight />
							<span>Run</span>
						</div>
						<div className="menu-item">
							<SvgIcons.ArrowRight />
							<span>Auto</span>
						</div>
					</div>
				)}
				{isSkillMenuOpen && (
					<div className="action-menu">
						{ally.skillList.map((skill, idx) => (
							<div key={idx} className="menu-item" onClick={() => this.performSkillMove(true, skill)}>
								<SvgIcons.ArrowRight />
								<span>{skill.name}</span>
							</div>
						))}
						<div className="menu-item" onClick={() => this.toggleSkillMenu(false)}>
							<SvgIcons.ArrowRight />
							<span>Back</span>
						</div>
					</div>
				)}
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

export default connect(mapStateToProps, mapDispatchToProps)(BattleScreen);
