const FETCH_ROOT =
  'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev';
const IMG_PATH =
  'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public';

export interface INodeData {
  id: string;
  name: string;
  type: 'FILE' | 'DIRECTORY';
  filePath: string;
  parent: {
    id: string;
  } | null;
}

export const fetchDirOrFilesById = async (nodeId: string) => {
  try {
    let response;
    if (nodeId === '0') {
      response = await fetch(FETCH_ROOT);
    } else {
      response = await fetch(`${FETCH_ROOT}/${nodeId}`);
    }
    const data = await response.json();
    return data as INodeData[];
  } catch (e) {
    console.log('Error ❌ ', e);
    return false;
  }
};

export const fetchImageByPath = (path: string | null) => {
  return `${IMG_PATH}${path}`;
};
