import { useSelector } from 'react-redux';
import { Exercise } from '../../../../../../../corelogic/domain/models/exercise.model';
import { RootState } from '../../../../../../../corelogic/redux/set-configuration-store';
import Container from '../../../../components/container/container.component';
import Grid from '../../../../components/grid/grid.component';
import ExerciseDeletion from '../exercise-deletion/exercise-deletion.component';
import { ExerciseUpdate } from '../exercise-update';

const ExerciseCatalog: React.FunctionComponent = () => {
  const { exercises, error } = useSelector(
    (state: RootState) => state.exercise,
  );

  return (
    <>
      {!error ? null : error}
      <Grid repeat={6} rowGap={15}>
        {exercises.map((exercise: Exercise) => (
          <Container key={exercise.id}>
            {exercise.name}
            <hr />
            <ExerciseDeletion id={exercise.id} />
            <ExerciseUpdate exercise={exercise} />
          </Container>
        ))}
      </Grid>
    </>
  );
};

export default ExerciseCatalog;
