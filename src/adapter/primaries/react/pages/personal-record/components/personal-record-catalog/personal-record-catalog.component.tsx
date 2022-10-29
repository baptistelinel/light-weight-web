import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../corelogic/redux/set-configuration-store';

const PersonalRecordCatalog: React.FunctionComponent = () => {
  const { personalRecords, error } = useSelector(
    (state: RootState) => state.personalRecord,
  );
  return (
    <>
      {!error ? null : error}
      {personalRecords.map((personalRecord) => (
        <span key={personalRecord.id}>
          {personalRecord.exercise.name} - {personalRecord.exercise.weight}
        </span>
      ))}
    </>
  );
};

export default PersonalRecordCatalog;
