import { atom } from 'recoil';

export interface INowNode {
  id: string | null;
  name: string;
}

export type ICategories = INowNode[];

export const nowNodeState = atom<INowNode>({
  key: 'nowNode',
  default: {
    id: null,
    name: 'root',
  },
});

export const categoriesState = atom<ICategories>({
  key: 'categories',
  default: [{ id: null, name: 'root' }],
});
