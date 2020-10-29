import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJob } from '../../application/actions/job';
import Spinner from '../common/Spinner';
import parse from 'html-react-parser';
import { useHistory, withRouter } from 'react-router-dom';

const Job = ({ match, getJob, jobs: { job, loading } }) => {
  useEffect(() => {
    getJob(match.params.id);
  }, [match.params.id, getJob]);

  let history = useHistory();

  function goBack() {
    history.goBack();
  }

  var date = new Date(job && job.created_at);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  if (loading || job === null) return <Spinner />;
  return (
    <div className='search-body job'>
      <small style={{ color: '#777777' }} onClick={() => goBack()}>
        <i className='fas fa-long-arrow-alt-left' /> Back to search
      </small>
      <div className='job-top' style={{ marginTop: '1em' }}>
        {job.company_logo && (
          <div>
            <img alt='company' src={job.company_logo} />
          </div>
        )}
        <div>
          <h3>{job.title}</h3>
          <p>
            <a
              style={{ color: '#0e6cff', textDecoration: 'none' }}
              href={job.company_url}
              rel='noopener noreferrer'
              target='_blank'
            >
              {job.company}
            </a>
            <span style={{ margin: '0 1em' }}>•</span>
            <small style={{ color: '#777777' }}>{job.type}</small>
          </p>
          <small>
            <i className={'fas fa-map-marker-alt'} /> {job.location}
          </small>
        </div>
      </div>

      <div
        style={{
          margin: '1em 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <a href={job.url} className='button-link'>
          View on github
        </a>
        <small>{date.toLocaleDateString('en-US', options)}</small>
      </div>
      <div style={{ marginTop: '2em' }}>
        <h5 style={{ color: '#777777' }}>How to apply?</h5>
        {parse(job.how_to_apply)}
      </div>
      <div className='job-body'>
        <small style={{ color: '#777777', display: 'block' }}>
          Job description
        </small>
        {parse(job.description)}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  jobs: state.jobs
});

export default connect(mapState, { getJob })(withRouter(Job));
