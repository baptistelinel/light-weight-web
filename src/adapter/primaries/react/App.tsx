import ExerciseManagement from './pages/exercise/exercise-management.page';
import PersonalRecord from './pages/personal-record/personal-record.page';
import TrainingManagement from './pages/training/training-management.page';

const App: React.FunctionComponent = () => {
  return (
    <>
      <ExerciseManagement />
      <hr />
      <TrainingManagement />
      <hr />
      <PersonalRecord />
    </>
  );
};

export default App;
