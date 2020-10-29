import {
  LOADING,
  STOP_LOADING,
  GET_JOBS,
  GET_JOB,
  ERROR,
  SORT_NEWEST,
  SORT_OLDEST,
  GET_ALL_JOBS
} from './actionDeclartions';
import axios from 'axios';

// start loading indicator
export const startLoad = () => (dispatch) => {
  dispatch({ type: LOADING });
};

// stop loading indicator
export const stopLoad = () => (dispatch) => {
  dispatch({ type: STOP_LOADING });
};

// load jobs from search
export const getJobs = (description, location) => async (dispatch) => {
  dispatch(startLoad());
  try {
    const response = await axios.get(
      `/positions.json?description=${description}${
        location ? `&location=${location}` : ''
      }`
    );
    dispatch({ type: GET_JOBS, payload: response.data });
    dispatch(stopLoad());
  } catch (error) {
    dispatch(stopLoad());
    console.log(error);
    dispatch({ type: ERROR, payload: 'Error occurred' });
  }
};

axios.defaults.baseURL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com';

//get a single job
export const getJob = (id) => async (dispatch) => {
  dispatch(startLoad());
  try {
    var response = await axios.get(`/positions/${id}.json`);
    dispatch({ type: GET_JOB, payload: response.data });
    dispatch(stopLoad());
  } catch (error) {
    dispatch(stopLoad());
    dispatch({ type: ERROR, payload: error.message });
    console.log(error);
  }
};

// sort by newest
export const sortNewest = () => (dispatch) => {
  dispatch(startLoad());
  dispatch({ type: SORT_NEWEST });
  dispatch(stopLoad());
};

export const sortOldest = () => (dispatch) => {
  dispatch(startLoad());
  dispatch({ type: SORT_OLDEST });
  dispatch(stopLoad());
};

export const getAllJobs = (page) => async (dispatch) => {
  dispatch(startLoad());
  try {
    var response = await axios.get(`/positions.json?search=code&page=${page}`);
    dispatch({ type: GET_ALL_JOBS, payload: response.data });
    dispatch(stopLoad());
  } catch (error) {
    dispatch(stopLoad());
    dispatch({ type: ERROR, payload: 'Error occurred' });
  }
};
