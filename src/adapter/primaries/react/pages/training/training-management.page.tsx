import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveExercises } from '../../../../../corelogic/redux/exercise/exercise.slice';
import { RootState } from '../../../../../corelogic/redux/set-configuration-store';
import { retrieveTrainings } from '../../../../../corelogic/redux/training/training.slice';
import Grid from '../../components/grid/grid.component';
import LoadingData from '../../components/loading-data/loading-data.component';
import TrainingCatalog from './components/training-catalog/training-catalog.component';
import TrainingCreation from './components/training-creation/training-creation.component';

const TrainingManagement: React.FunctionComponent = () => {
  const { isLoading } = useSelector((state: RootState) => state.exercise);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveTrainings());
    dispatch(retrieveExercises());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Trainings</h2>
      <Grid repeat={2} rowGap={15}>
        <div>{isLoading ? <LoadingData /> : <TrainingCatalog />}</div>
        <div>
          <TrainingCreation />
        </div>
      </Grid>
    </>
  );
};

export default TrainingManagement;
