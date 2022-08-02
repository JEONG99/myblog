import Responsive from '../components/common/Responsive';
import EditorContainers from '../containers/write/EditorContainers';
import TagBoxContainers from '../containers/write/TagBoxContainers';
import WriteActionButtonsContainers from '../containers/write/WriteActionButtonsContainers';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainers />
      <TagBoxContainers />
      <WriteActionButtonsContainers />
    </Responsive>
  );
};
export default WritePage;
