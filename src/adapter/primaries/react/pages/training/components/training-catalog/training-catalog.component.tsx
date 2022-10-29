import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../corelogic/redux/set-configuration-store';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GiWeight, GiWeightLiftingUp } from 'react-icons/gi';
import Container from '../../../../components/container/container.component';
import Grid from '../../../../components/grid/grid.component';
import styles from './training-catalog.module.scss';
import TrainingUpdate from '../training-update/training-update.component';
import { TrainingDeletion } from '../training-deletion';

const TrainingCatalog: React.FunctionComponent = () => {
  const { trainings } = useSelector((state: RootState) => state.training);

  return (
    <Grid repeat={1} rowGap={15} className={styles.trainingContainer}>
      {trainings.map((training, index) => (
        <Container key={training.id}>
          <Grid repeat={3} rowGap={15}>
            <div>
              <div className={styles.trainingName}>{training.name}</div>
              <Grid repeat={1} rowGap={4}>
                <div>
                  <GiWeightLiftingUp /> {index + 1} trainings
                </div>
                <div>
                  <AiOutlineCalendar /> '03/06/1991'
                </div>
                <div>
                  <GiWeight /> {training.totalWeight} kg
                </div>
              </Grid>
            </div>
            <div>
              {training.exercises.map((exercise) => (
                <div key={exercise.id}>
                  <div>
                    <span className={styles.exerciseName}>{exercise.name}</span>
                    : {exercise.weight}kg x {exercise.repetitions} @
                    {exercise.rpe}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.trainingCommentary}>
              {training.commentary}
            </div>
            <div>
              <TrainingDeletion id={training.id} />
              <TrainingUpdate training={training} />
            </div>
          </Grid>
        </Container>
      ))}
    </Grid>
  );
};

export default TrainingCatalog;
