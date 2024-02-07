import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  setOpponentMonster,
  setSelectedMonster,
  startBattle,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  opponentMonster: Monster | null;
  winner: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  opponentMonster: null,
  winner: null,
};

export const monstersReducer = createReducer(initialState, builder => {
  builder.addCase(fetchMonstersData.pending, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setOpponentMonster, (state, action) => {
    /**
     * Get state
     * Get the selected
     * Created the list with other monsters
     * Create random number to select the opponent
     */

    const monsters = state.monsters;
    const otherMonsters = monsters.filter(
      monster => monster.id !== action.payload?.id,
    );
    const randomIndex = Math.floor(Math.random() * otherMonsters.length);

    const opponent = otherMonsters[randomIndex];

    return {
      ...state,
      opponentMonster: opponent,
    };
  });

  builder.addCase(startBattle.rejected, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(startBattle.fulfilled, (state, action) => {
    const { winner } = action.payload;
    return {
      ...state,
      winner: winner,
    };
  });
});
