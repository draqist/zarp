import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: (): Promise<User> =>
      axios.get("/api/user").then((res) => res.data.user),
  });
};
