import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/write/Editor';
import { changeField, initialize } from '../../modules/write';

const EditorContainers = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch],
  );
  useEffect(() => {
    return () => {
      dispatch(initialize);
    };
  }, [dispatch]);

  return <Editor title={title} body={body} onChangeField={onChangeField} />;
};

export default EditorContainers;
