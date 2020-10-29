import {
  LOADING,
  STOP_LOADING,
  GET_JOBS,
  GET_JOB,
  ERROR,
  SORT_NEWEST,
  SORT_OLDEST,
  GET_ALL_JOBS
} from '../actions/actionDeclartions';

const initialState = {
  loading: false,
  jobs: [],
  job: null,
  errors: ''
};

const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case GET_ALL_JOBS:
    case GET_JOBS: {
      return {
        ...state,
        jobs: payload,
        loading: false
      };
    }
    case GET_JOB: {
      return {
        ...state,
        job: payload,
        loading: false
      };
    }
    case ERROR: {
      return {
        ...state,
        errors: payload
      };
    }
    case SORT_NEWEST: {
      return {
        ...state,
        jobs: state.jobs.sort((a, b) => {
          var oldDate = new Date(a.created_at);
          var newDate = new Date(b.created_at);
          return oldDate.getTime() - newDate.getTime();
        }),
        loading: false
      };
    }
    case SORT_OLDEST: {
      return {
        ...state,
        jobs: state.jobs.sort((a, b) => {
          var oldDate = new Date(a.created_at);
          var newDate = new Date(b.created_at);
          return newDate.getTime() - oldDate.getTime();
        }),
        loading: false
      };
    }
    default:
      return state;
  }
};

export default jobReducer;
