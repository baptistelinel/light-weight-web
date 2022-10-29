import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveExercises } from '../../../../../corelogic/redux/exercise/exercise.slice';
import { RootState } from '../../../../../corelogic/redux/set-configuration-store';
import Grid from '../../components/grid/grid.component';
import LoadingData from '../../components/loading-data/loading-data.component';
import ExerciseCatalog from './components/exercise-catalog/exercise-catalog.component';
import ExerciseCreation from './components/exercise-creation/exercise-creation.component';

const ExerciseManagement: React.FunctionComponent = () => {
  const { isLoading } = useSelector((state: RootState) => state.exercise);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveExercises());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Exercises</h2>
      <Grid repeat={2} rowGap={15}>
        <div>{isLoading ? <LoadingData /> : <ExerciseCatalog />}</div>
        <div>
          <ExerciseCreation />
        </div>
      </Grid>
    </>
  );
};

export default ExerciseManagement;
