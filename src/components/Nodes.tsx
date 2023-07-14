import { useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';
import { fetchDirOrFilesById, INodeData } from '../api';
import { nowNodeState, INowNode, categoriesState, ICategories } from '../atoms';
// components
import { File, Directory } from './Node';
import { Modal, Loading } from './Modal';
// styles
import { NodeList, Prev } from '../utils/nodeStyles';
import { getDatas, saveDatas } from '../hooks/handleLocalStorage';
import { handleError } from '../hooks/handleError';

function Nodes() {
  const [nowNode, setNowNode] = useRecoilState<INowNode>(nowNodeState);
  const [categories, setCategories] =
    useRecoilState<ICategories>(categoriesState);
  const [nodeList, setNodeList] = useState<INodeData[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const nodeListContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getNodeList(nowNode.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowNode]);

  const getNodeList = async (id: string) => {
    setIsLoading(true);
    let nodes;
    if (!!getDatas(id)) {
      nodes = getDatas(id);
    } else {
      const fetchedData = (await fetchDirOrFilesById(id)) as INodeData[];
      if (!!fetchedData) {
        nodes = fetchedData;
        saveDatas(id, nodes);
      } else {
        if (nodeListContainer.current) {
          console.log('에러닷 에러!!!⭐️');
          handleError(nodeListContainer.current, getNodeList);
        }
        setIsLoading(false);
        return;
      }
    }
    setNodeList(nodes);
    setIsLoading(false);
  };

  const handleClickPrev = () => {
    const nowCategories = [...categories];
    nowCategories.pop();
    setCategories(nowCategories);
    setNowNode(nowCategories[nowCategories.length - 1]);
  };
  const settingImageModal = (filePath: string) => {
    setImagePath(filePath);
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
    setCategories((prev) => [...prev, newNode]);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NodeList ref={nodeListContainer}>
            <>
              {nowNode.id !== '0' && (
                <Prev onClick={handleClickPrev}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/prev.png`}
                    alt="prev"
                  />
                </Prev>
              )}
              {nodeList !== undefined &&
                nodeList.map((node, i) => {
                  if (node.type === 'FILE') {
                    return (
                      <File
                        key={i}
                        name={node.name}
                        filePath={node.filePath}
                        callback={settingImageModal}
                      />
                    );
                  } else {
                    return (
                      <Directory
                        key={i}
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
