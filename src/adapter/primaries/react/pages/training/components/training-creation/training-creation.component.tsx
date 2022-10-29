import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { ExerciseName } from '../../../../../../../corelogic/domain/models/exercise.model';
import { ExerciseDone } from '../../../../../../../corelogic/domain/models/training.model';
import { RootState } from '../../../../../../../corelogic/redux/set-configuration-store';
import { createTraining } from '../../../../../../../corelogic/redux/training/training.slice';
import { TrainingCreateDTO } from '../../../../../../secondaries/training/training-create.dto';
import Button from '../../../../components/button/button.component';
import Container from '../../../../components/container/container.component';
import Grid from '../../../../components/grid/grid.component';
import Input from '../../../../components/input/input.component';
import Label from '../../../../components/label/label.component';
import Select from '../../../../components/select/select.component';
import Textarea from '../../../../components/textarea/textarea.component';
import { exerciseDoneDefaultValues } from '../../form/exercise-done-default-values.interface';
import { TrainingFormValues } from '../../types/training-form-values.type';

const TrainingCreation: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { trainings } = useSelector((state: RootState) => state.training);
  const { exercises } = useSelector((state: RootState) => state.exercise);
  const { register, control, reset, handleSubmit } =
    useForm<TrainingFormValues>({
      defaultValues: {
        commentary: '',
        name: '',
        exercises: [
          {
            name: ExerciseName.SQUAT,
            weight: 0,
            repetitions: 0,
            rpe: 0,
          } as ExerciseDone,
        ],
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exercises',
  });

  const onSubmit: SubmitHandler<TrainingFormValues> = (data) => {
    const training: TrainingCreateDTO = {
      name: data.name,
      commentary: data.commentary,
      exercises: data.exercises,
    };
    dispatch(createTraining(training));
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name :</Label>
        <Input
          type="text"
          placeholder="training name"
          list="trainingNames"
          {...register('name')}
        />
        <datalist id="trainingNames">
          {trainings.map((training) => (
            <option key={training.id}>{training.name}</option>
          ))}
        </datalist>
        {fields.map((_, index) => (
          <Grid key={index} repeat={5} rowGap={15}>
            <div>
              <Label htmlFor={`exercises.${index}.name`}>Exercise name</Label>
              <Select {...register(`exercises.${index}.name`)}>
                {exercises.map((exercise, i) => (
                  <option key={`exercises.${i}.name`}>{exercise.name}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor={`exercises.${index}.weight`}>Weight</Label>
              <Input
                type="number"
                placeholder="exercise weight"
                {...register(`exercises.${index}.weight`)}
              />
            </div>
            <div>
              <Label htmlFor={`exercises.${index}.repetitions`}>
                Repetitions
              </Label>
              <Input
                type="number"
                placeholder="exercise repetitions"
                {...register(`exercises.${index}.repetitions`)}
              />
            </div>
            <div>
              <Label htmlFor={`exercises.${index}.rpe`}>RPE</Label>
              <Input
                type="number"
                placeholder="exercise rpe"
                {...register(`exercises.${index}.rpe`)}
              />
            </div>
            <AiOutlineClose
              className="cursorPointer"
              onClick={() => remove(index)}
            />
          </Grid>
        ))}
        <Label htmlFor="commentary">Commentary :</Label>
        <Textarea
          rows={5}
          cols={50}
          placeholder="training commentary"
          {...register('commentary')}
        />
        <Button
          type="button"
          onClick={() => append([exerciseDoneDefaultValues])}
        >
          Add exercise
        </Button>
        <Button type="submit">Save training</Button>
      </form>
    </Container>
  );
};

export default TrainingCreation;
