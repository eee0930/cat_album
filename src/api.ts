const FETCH_ROOT =
  'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev';
const IMG_PATH =
  'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public';

export const fetchDirOrFilesById = async (nodeId: string | null) => {
  let response;
  if (nodeId) {
    response = await fetch(`${FETCH_ROOT}/${nodeId}`);
  } else {
    response = await fetch(FETCH_ROOT);
  }
  const data = await response.json();
  console.log(data);
  return data;
};

export const fetchImageByPath = (path: string | null) => {
  return `${IMG_PATH}${path}`;
};
