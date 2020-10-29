import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllJobs, getJobs } from '../../application/actions/job';
import Spinner from '../common/Spinner';
import SearchBody from './SearchBody';
import TopSearch from './TopSearch';
import { withRouter } from 'react-router-dom';
import Paginate from './Paginate';

const SearchPage = ({ job: { loading, jobs }, match, getJobs, getAllJobs }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (match.params.location && match.params.description) {
      getJobs(match.params.description, match.params.location);
    } else {
      getAllJobs(page);
    }
  }, [
    match.params.description,
    match.params.location,
    getJobs,
    getAllJobs,
    page
  ]);
  return (
    <div className='search-body'>
      <TopSearch
        locations={match.params.location}
        description={match.params.description}
      />
      <hr className='divider' />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <SearchBody
            jobs={jobs}
            page={page}
            location={match.params.location}
            description={match.params.description}
          />
          {!match.params.description && !match.params.location && (
            <Paginate page={page} setPage={setPage} />
          )}
        </div>
      )}
    </div>
  );
};

const mapState = (state) => ({
  job: state.jobs
});

export default connect(mapState, { getJobs, getAllJobs })(
  withRouter(SearchPage)
);
