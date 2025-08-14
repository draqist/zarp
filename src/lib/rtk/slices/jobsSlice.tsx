import {
  ApplicationStatus,
  JobPost,
  JobSearchFilters,
} from "@/app/lib/types/database";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobsState {
  searchFilters: JobSearchFilters;
  savedJobs: JobPost[];
  appliedJobs: Array<{
    job: JobPost;
    status: ApplicationStatus;
    appliedDate: string;
  }>;
  recentSearches: string[];
  selectedJob: JobPost | null;
}

const initialState: JobsState = {
  searchFilters: {
    title: "",
    location: "",
    job_type: [],
    remote_type: [],
    experience_level: [],
    salary_min: undefined,
    salary_max: undefined,
    sectors: [],
    skills: [],
    source: [],
  },
  savedJobs: [],
  appliedJobs: [],
  recentSearches: [],
  selectedJob: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearchFilters: (
      state,
      action: PayloadAction<Partial<JobSearchFilters>>
    ) => {
      state.searchFilters = { ...state.searchFilters, ...action.payload };
    },
    clearSearchFilters: (state) => {
      state.searchFilters = initialState.searchFilters;
    },
    addSavedJob: (state, action: PayloadAction<JobPost>) => {
      const exists = state.savedJobs.some(
        (job) => job.id === action.payload.id
      );
      if (!exists) {
        state.savedJobs.push(action.payload);
      }
    },
    removeSavedJob: (state, action: PayloadAction<string>) => {
      state.savedJobs = state.savedJobs.filter(
        (job) => job.id !== action.payload
      );
    },
    addAppliedJob: (
      state,
      action: PayloadAction<{
        job: JobPost;
        status: ApplicationStatus;
        appliedDate: string;
      }>
    ) => {
      const exists = state.appliedJobs.some(
        (app) => app.job.id === action.payload.job.id
      );
      if (!exists) {
        state.appliedJobs.push(action.payload);
      }
    },
    updateApplicationStatus: (
      state,
      action: PayloadAction<{
        jobId: string;
        status: ApplicationStatus;
      }>
    ) => {
      const app = state.appliedJobs.find(
        (app) => app.job.id === action.payload.jobId
      );
      if (app) {
        app.status = action.payload.status;
      }
    },
    addRecentSearch: (state, action: PayloadAction<string>) => {
      const search = action.payload.trim();
      if (search && !state.recentSearches.includes(search)) {
        state.recentSearches.unshift(search);
        // Keep only last 10 searches
        state.recentSearches = state.recentSearches.slice(0, 10);
      }
    },
    clearRecentSearches: (state) => {
      state.recentSearches = [];
    },
    setSelectedJob: (state, action: PayloadAction<JobPost | null>) => {
      state.selectedJob = action.payload;
    },
    clearJobsState: (state) => {
      state.savedJobs = [];
      state.appliedJobs = [];
      state.recentSearches = [];
      state.selectedJob = null;
    },
  },
});

export const {
  setSearchFilters,
  clearSearchFilters,
  addSavedJob,
  removeSavedJob,
  addAppliedJob,
  updateApplicationStatus,
  addRecentSearch,
  clearRecentSearches,
  setSelectedJob,
  clearJobsState,
} = jobsSlice.actions;

export default jobsSlice.reducer;
