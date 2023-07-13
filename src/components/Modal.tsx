import { useState, useEffect } from 'react';
import { fetchImageByPath } from '../api';
import { Content, Img, ModalConatainer } from '../utils/modalStyles';

interface IModal {
  filePath: string | null;
  isOpen: boolean;
  callback: (isOpen: boolean) => void;
}
export function Modal({ filePath, isOpen, callback }: IModal) {
  const [imagePath, setImagePath] = useState<string>();
  const [modalOpen, setModalOpen] = useState(isOpen);
  useEffect(() => {
    const path = fetchImageByPath(filePath);
    console.log('이미지!', path);
    setImagePath(path);
  }, [filePath]);

  useEffect(() => setModalOpen(isOpen), [isOpen]);

  return (
    <ModalConatainer onClick={() => callback(modalOpen)}>
      <Content>
        <Img src={imagePath} alt="image" />
      </Content>
    </ModalConatainer>
  );
}

export function Loading() {
  return (
    <ModalConatainer>
      <Content>
        <Img src={`${process.env.PUBLIC_URL}/img/nyan-cat.gif`} alt="loading" />
      </Content>
    </ModalConatainer>
  );
}
