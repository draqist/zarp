import { User } from "@supabase/supabase-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { JobSearchFilters, JobSearchResponse } from "../lib/types/database";

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: (): Promise<User> =>
      axios.get("/api/user").then((res) => res.data.user),
  });
};

export const useGetJobs = (filters: JobSearchFilters) => {
  return useQuery({
    queryKey: ["jobs", filters],
    queryFn: async (): Promise<JobSearchResponse> =>
      axios
        .get("/api/jobs/search", {
          params: {
            ...filters,
          },
        })
        .then((res) => res.data),
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      first_name: string;
      last_name: string;
      linkedin_profile?: string;
      resume_url?: string;
      bio?: string;
    }) => axios.put("/api/user", data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
};

export const useUploadAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return axios
        .post("/api/user/avatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
};
