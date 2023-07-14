import { INodeData } from '../api';

interface IDirDatas {
  [key: string]: INodeData[];
}

/**
 * localStorage dirs 저장
 * @param id
 * @param datas
 */
export const saveDatas = (id: string, datas: INodeData[]) => {
  if (id === '0') {
    localStorage.setItem('rootNodes', JSON.stringify(datas));
  } else {
    const dirNodes = localStorage.getItem('dirNodes');
    let parcedNodes = {} as IDirDatas;
    if (dirNodes) {
      parcedNodes = JSON.parse(dirNodes);
    }
    parcedNodes[id] = datas;
    localStorage.setItem('dirNodes', JSON.stringify(parcedNodes));
  }
};

/**
 * localStarage에서 dirs 가져오기
 * @param id
 */
export const getDatas = (id: string) => {
  let parcedData;
  if (id === '0') {
    const rootNodes = localStorage.getItem('rootNodes');
    if (!!rootNodes) {
      parcedData = JSON.parse(rootNodes);
      return parcedData;
    } else {
      return null;
    }
  } else {
    const dirNodes = localStorage.getItem('dirNodes');
    if (!!dirNodes) {
      parcedData = JSON.parse(dirNodes);
      if (!!parcedData[id]) {
        return parcedData[id];
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
};
