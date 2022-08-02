import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WrtieActionButtons from '../../components/write/WriteActionButtons';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = useCallback(() => {
    dispatch(writePost({ title, body, tags }));
  }, [dispatch, title, body, tags]);
  const onCancel = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WrtieActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainers;
