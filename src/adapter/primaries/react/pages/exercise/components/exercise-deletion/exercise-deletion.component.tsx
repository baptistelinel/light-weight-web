import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeExercise } from '../../../../../../../corelogic/redux/exercise/exercise.slice';

interface Props {
  id: string;
}

export const ExerciseDeletion: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <AiOutlineDelete
      className="cursorPointer"
      onClick={() => dispatch(removeExercise(id))}
    />
  );
};

export default ExerciseDeletion;
