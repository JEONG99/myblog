import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 16px;
  margin-bottom: 48px;
  button + button {
    margin-left: 8px;
  }
`;

const StyledButton = styled(Button)`
  height: 34px;
  & + & {
    margin-left: 8px;
  }
`;

const WrtieActionButtons = ({ onPublish, onCancel }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WrtieActionButtons;
