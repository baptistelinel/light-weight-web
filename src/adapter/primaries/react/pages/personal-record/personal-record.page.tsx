import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrievePersonalRecords } from '../../../../../corelogic/redux/personal-record/personal-record.slice';
import { RootState } from '../../../../../corelogic/redux/set-configuration-store';
import Grid from '../../components/grid/grid.component';
import LoadingData from '../../components/loading-data/loading-data.component';
import PersonalRecordCatalog from './components/personal-record-catalog/personal-record-catalog.component';

const PersonalRecord: React.FunctionComponent = () => {
  const { isLoading } = useSelector((state: RootState) => state.personalRecord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrievePersonalRecords());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Personal records</h2>
      <Grid repeat={2} rowGap={15}>
        <div>{isLoading ? <LoadingData /> : <PersonalRecordCatalog />}</div>
      </Grid>
    </>
  );
};

export default PersonalRecord;
