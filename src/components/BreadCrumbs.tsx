import { useRecoilState, useSetRecoilState } from 'recoil';
import { BreadCrumbContainer, BreadEle } from '../utils/breadCrumbStyles';
import { categoriesState, nowNodeState } from '../atoms';

function BreadCrumbs() {
  const setNowNode = useSetRecoilState(nowNodeState);
  const [categories, setCategoiries] = useRecoilState(categoriesState);

  const handleClickCategory = (idx: number) => {
    const nowNode = categories[idx];
    const newCategories = categories.slice(0, idx + 1);
    setCategoiries(newCategories);
    setNowNode(nowNode);
  };

  return (
    <BreadCrumbContainer>
      {categories &&
        categories.map((cate, i) => {
          return (
            <BreadEle onClick={() => handleClickCategory(i)} key={i}>
              {cate?.name}
            </BreadEle>
          );
        })}
    </BreadCrumbContainer>
  );
}

export default BreadCrumbs;
