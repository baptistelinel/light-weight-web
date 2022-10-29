import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Training } from '../../../../../../../corelogic/domain/models/training.model';
import { RootState } from '../../../../../../../corelogic/redux/set-configuration-store';
import { updateTraining } from '../../../../../../../corelogic/redux/training/training.slice';
import Button from '../../../../components/button/button.component';
import Grid from '../../../../components/grid/grid.component';
import Input from '../../../../components/input/input.component';
import Label from '../../../../components/label/label.component';
import Modal from '../../../../components/modal/modal.component';
import Select from '../../../../components/select/select.component';
import Textarea from '../../../../components/textarea/textarea.component';
import { exerciseDoneDefaultValues } from '../../form/exercise-done-default-values.interface';
import { TrainingFormValues } from '../../types/training-form-values.type';

interface Props {
  training: Training;
}

const TrainingUpdate: React.FC<Props> = ({ training }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { trainings } = useSelector((state: RootState) => state.training);
  const { exercises } = useSelector((state: RootState) => state.exercise);
  const { register, control, handleSubmit } = useForm<TrainingFormValues>({
    defaultValues: {
      commentary: training.commentary,
      name: training.name,
      exercises: training.exercises,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exercises',
  });

  const toggle = () => setIsOpen(!isOpen);
  const onSubmit: SubmitHandler<TrainingFormValues> = (data) => {
    dispatch(
      updateTraining({
        id: training.id,
        trainingUpdateDTO: {
          name: data.name,
          commentary: data.commentary,
          exercises: data.exercises,
        },
      }),
    );
    toggle();
  };

  return (
    <>
      <AiOutlineEdit
        className="cursorPointer"
        onClick={() => setIsOpen(true)}
      />
      {isOpen ? (
        <Modal
          title={`Update ${training.name} training`}
          isOpen={isOpen}
          toggle={toggle}
        >
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
                  <Label htmlFor={`exercises.${index}.name`}>
                    Exercise name
                  </Label>
                  <Select {...register(`exercises.${index}.name`)}>
                    {exercises.map((exercise) => (
                      <option key={`exercises.${exercise.id}.${index}.name`}>
                        {exercise.name}
                      </option>
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
              onClick={() => append(exerciseDoneDefaultValues)}
            >
              Add exercise
            </Button>
            <Button type="submit">Update</Button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default TrainingUpdate;
