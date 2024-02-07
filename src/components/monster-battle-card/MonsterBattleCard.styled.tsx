import styled from '@emotion/native';
import {
  Card,
  Title,
  ProgressBar as PaperProgressBar,
} from 'react-native-paper';
import { colors } from '../../constants/colors';
import { Image, View } from 'react-native';

export const BattleMonsterCard = styled(Card)`
  padding: 13px 11px;
  width: 252px;
  height: 341px;
  background: ${colors.white};
  border-radius: 7px;
  border: 0.5px solid #dddddd;
  flex-direction: column;
  display: flex;
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 5;
`;

export const BattleMonsterInfo = styled(View)`
  flex: 1;
  justify-content: space-between;
`;

export const BattleMonsterTitle = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin: auto;
  color: ${colors.black};
`;

export const BattleMonsterName = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25.78px;
  margin: 8px 0px;
  color: ${colors.black};
`;

export const BattleMonsterStatsLabel = styled(Title)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
  color: ${colors.black};
`;

export const ProgressBar = styled(PaperProgressBar)`
  background-color: ${colors.progressBarBackground};
  border-radius: 4px;
  height: 7px;
`;

export const Img = styled(Image)`
  border-radius: 7px;
  height: 148px;
`;
