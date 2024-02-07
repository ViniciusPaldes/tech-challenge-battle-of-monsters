import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then(response => response.json());

const battle = async (selectedMonsterId: string, opponentMonsterId: string) => {
  return await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monster1Id: selectedMonsterId,
      monster2Id: opponentMonsterId,
    }),
  }).then(response => response.json());
};

export const MonsterService = {
  getAll,
  battle,
};
