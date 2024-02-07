import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setOpponentMonster = createAction<Monster | null>(
  'monsters/setOpponentMonster',
);

export const startBattle = createAsyncThunk(
  'monsters/startBattle',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const { selectedMonster, opponentMonster } = state.monsters;

    if (!selectedMonster || !opponentMonster) {
      rejectWithValue('Please select the monster before starting the battle');
    }

    try {
      const data = await MonsterService.battle(
        selectedMonster.id,
        opponentMonster.id,
      );
      return data;
    } catch (error) {
      // console.error('Error: ', error);
    }
  },
);
