import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectOpponentMonster = (state: RootState) =>
  state.monsters.opponentMonster;

export const selectWinner = (state: RootState) => state.monsters.winner;
