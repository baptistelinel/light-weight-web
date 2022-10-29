import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Exercise } from '../../../../../../../corelogic/domain/models/exercise.model';
import { updateExercise } from '../../../../../../../corelogic/redux/exercise/exercise.slice';
import Button from '../../../../components/button/button.component';
import Input from '../../../../components/input/input.component';
import Modal from '../../../../components/modal/modal.component';
import { ExerciseFormValues } from '../../types/exercise-form-values.type';

interface Props {
  exercise: Exercise;
}

export const ExerciseUpdate: React.FC<Props> = ({ exercise }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<ExerciseFormValues>({
    defaultValues: { name: exercise.name },
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const onSubmit: SubmitHandler<ExerciseFormValues> = (data) => {
    dispatch(
      updateExercise({
        id: exercise.id,
        exerciseUpdateDTO: { name: data.name },
      }),
    );
  };

  return (
    <>
      <AiOutlineEdit
        className="cursorPointer"
        onClick={() => setIsOpen(true)}
      />
      {isOpen ? (
        <Modal title="Update Exercise" isOpen={isOpen} toggle={toggle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Enter the exercise name"
              {...register('name')}
            />
            <Button type="submit">Update</Button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default ExerciseUpdate;
