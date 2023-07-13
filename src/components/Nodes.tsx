import { useRecoilState } from 'recoil';
import { fetchDirOrFilesById } from '../api';
import { nowNodeState, INowNode, categoriesState, ICategories } from '../atoms';
import { useEffect, useState } from 'react';
import { File, Directory } from './Node';
import { Modal, Loading } from './Modal';
// styles
import { NodeList, Prev } from '../utils/nodeStyles';

interface IDirDatas {
  [key: string]: INodeData[];
}

interface INodeData {
  id: string;
  name: string;
  type: 'FILE' | 'DIRECTORY';
  filePath: string | null;
  parent: {
    id: string;
  } | null;
}
const saveDatas = (id: string, datas: INodeData[]) => {
  if (id === '0') {
    localStorage.setItem('rootNodes', JSON.stringify(datas));
  } else {
    const dirNodes = localStorage.getItem('dirNodes');
    if (dirNodes) {
      const parcedNodes = JSON.parse(dirNodes);
      if (parcedNodes[id] === undefined) {
        parcedNodes[id] = datas;
        localStorage.setItem('dirNodes', JSON.stringify(parcedNodes));
      }
    } else {
      const nowNodes = {} as IDirDatas;
      nowNodes[id] = datas;
      localStorage.setItem('dirNodes', JSON.stringify(nowNodes));
    }
  }
};
const getDatas = (id: string) => {};
function Nodes() {
  const [nowNode, setNowNode] = useRecoilState<INowNode>(nowNodeState);
  const [categories, setCategories] =
    useRecoilState<ICategories>(categoriesState);
  const [nodeList, setNodeList] = useState<INodeData[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePath, setImagePath] = useState<string | null>('');

  useEffect(() => {
    const getNodeList = async (id: string | null) => {
      setIsLoading(true);
      let nodes;
      if (id) {
        nodes = (await fetchDirOrFilesById(id)) as INodeData[];
      } else {
        nodes = (await fetchDirOrFilesById(null)) as INodeData[];
      }
      setNodeList(nodes);
      setIsLoading(false);
    };
    getNodeList(nowNode.id);
  }, [nowNode]);

  const handleClickPrev = () => {
    const nowCategories = [...categories];
    nowCategories.pop();
    setCategories(nowCategories);
    setNowNode(nowCategories[nowCategories.length - 1]);
  };
  const setImageModal = (filePath: string | null) => {
    setImagePath(filePath);
    console.log(filePath);
    setIsModalOpen(true);
  };
  const openModal = (modalOpen: boolean) => {
    if (modalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };
  const getNextDirectories = (id: string, name: string) => {
    const newNode = {
      id,
      name,
    };
    setNowNode(newNode);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NodeList>
            <>
              {nowNode.id !== null && (
                <Prev onClick={handleClickPrev}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/prev.png`}
                    alt="prev"
                  />
                </Prev>
              )}
              {nodeList &&
                nodeList.map((node) => {
                  if (node.type === 'FILE') {
                    return (
                      <File
                        key={node.id}
                        name={node.name}
                        filePath={node.filePath}
                        callback={setImageModal}
                      />
                    );
                  } else {
                    return (
                      <Directory
                        key={node.id}
                        id={node.id}
                        name={node.name}
                        callback={getNextDirectories}
                      />
                    );
                  }
                })}
            </>
          </NodeList>
          {isModalOpen && (
            <Modal
              filePath={imagePath}
              isOpen={isModalOpen}
              callback={openModal}
            />
          )}
        </>
      )}
    </>
  );
}

export default Nodes;
