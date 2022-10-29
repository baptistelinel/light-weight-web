import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeTraining } from '../../../../../../../corelogic/redux/training/training.slice';

interface Props {
  id: string;
}

export const TrainingDeletion: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <AiOutlineDelete
      className="cursorPointer"
      onClick={() => dispatch(removeTraining(id))}
    />
  );
};

export default TrainingDeletion;
