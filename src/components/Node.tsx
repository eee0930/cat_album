import { NodeEle } from '../utils/nodeStyles';

interface IFile {
  name: string;
  filePath: string | null;
  callback: (filePath: string | null) => void;
}
export function File({ name, filePath, callback }: IFile) {
  return (
    <NodeEle onClick={() => callback(filePath)}>
      <img src={`${process.env.PUBLIC_URL}/img/file.png`} alt="file" />
      <div>{name}</div>
    </NodeEle>
  );
}

interface IDirectory {
  id: string;
  name: string;
  callback: (id: string, name: string) => void;
}
export function Directory({ id, name, callback }: IDirectory) {
  return (
    <NodeEle onClick={() => callback(id, name)}>
      <img src={`${process.env.PUBLIC_URL}/img/directory.png`} alt="dir" />
      <div>{name}</div>
    </NodeEle>
  );
}
