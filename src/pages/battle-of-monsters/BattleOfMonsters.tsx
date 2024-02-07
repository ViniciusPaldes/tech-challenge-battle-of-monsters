import { useEffect } from 'react';
import { TextStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { PageTitle } from '../../components/title/Title';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import { colors } from '../../constants/colors';
import {
  fetchMonstersData,
  startBattle,
} from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectOpponentMonster,
  selectSelectedMonster,
  selectWinner,
} from '../../reducers/monsters/monsters.selectors';
import {
  PageContainer,
  BattleSection,
  StartBattleButton,
  StartButtonStyles,
} from './BattleOfMonsters.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const opponentMonster = useSelector(selectOpponentMonster);
  const winner = useSelector(selectWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    dispatch(startBattle());
  };

  return (
    <PageContainer>
      <PageTitle>Battle of Monsters</PageTitle>

      <MonstersList monsters={monsters} />

      <BattleSection horizontal>
        <MonsterBattleCard
          monster={selectedMonster}
          title={selectedMonster?.name || 'Player'}
        />
        <MonsterBattleCard monster={opponentMonster} title="Computer" />
      </BattleSection>
      {winner ? (
        <WinnerDisplay text={winner?.name} />
      ) : (
        <StartBattleButton
          color={colors.white}
          dark={false}
          testID="start-battle-button"
          disabled={selectedMonster === null}
          labelStyle={StartButtonStyles as TextStyle}
          uppercase={false}
          onPress={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
      )}
    </PageContainer>
  );
};

export default BattleOfMonsters;
