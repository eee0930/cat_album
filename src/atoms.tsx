import { atom } from 'recoil';

export interface INowNode {
  id: string;
  name: string;
}

export type ICategories = INowNode[];

export const nowNodeState = atom<INowNode>({
  key: 'nowNode',
  default: {
    id: '0',
    name: 'root',
  },
});

export const categoriesState = atom<ICategories>({
  key: 'categories',
  default: [{ id: '0', name: 'root' }],
});
