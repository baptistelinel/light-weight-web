import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createExercise } from '../../../../../../../corelogic/redux/exercise/exercise.slice';
import Button from '../../../../components/button/button.component';
import Container from '../../../../components/container/container.component';
import Input from '../../../../components/input/input.component';
import Label from '../../../../components/label/label.component';
import { ExerciseFormValues } from '../../types/exercise-form-values.type';

const ExerciseCreation: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<ExerciseFormValues>();

  const onSubmit: SubmitHandler<ExerciseFormValues> = (data) => {
    dispatch(createExercise({ name: data.name }));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Exercise name</Label>
        <Input
          type="text"
          placeholder="Enter the exercise name"
          {...register('name')}
        />
        <Button type="submit">Create</Button>
      </form>
    </Container>
  );
};

export default ExerciseCreation;
