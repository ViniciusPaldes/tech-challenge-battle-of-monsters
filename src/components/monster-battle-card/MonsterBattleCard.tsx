import React from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterInfo,
  BattleMonsterName,
  BattleMonsterStatsLabel,
  BattleMonsterTitle,
  Img,
  ProgressBar,
} from './MonsterBattleCard.styled';
import { colors } from '../../constants/colors';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  return (
    <BattleMonsterCard>
      {monster ? (
        <BattleMonsterInfo>
          <Img source={{ uri: monster.imageUrl }} resizeMode="contain" />
          <BattleMonsterName>{monster.name}</BattleMonsterName>
          <BattleMonsterStatsLabel>HP</BattleMonsterStatsLabel>
          <ProgressBar
            progress={monster.hp / 100}
            color={colors.progressColor}
          />
          <BattleMonsterStatsLabel>Attack</BattleMonsterStatsLabel>
          <ProgressBar
            progress={monster.attack / 100}
            color={colors.progressColor}
          />
          <BattleMonsterStatsLabel>Defense</BattleMonsterStatsLabel>
          <ProgressBar
            progress={monster.defense / 100}
            color={colors.progressColor}
          />
          <BattleMonsterStatsLabel>Speed</BattleMonsterStatsLabel>
          <ProgressBar
            progress={monster.speed / 100}
            color={colors.progressColor}
          />
        </BattleMonsterInfo>
      ) : (
        <BattleMonsterTitle>{title}</BattleMonsterTitle>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
