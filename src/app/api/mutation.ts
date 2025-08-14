import { AuthSchema, SignUpSchemaType } from "@/lib/schema/auth-scema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const usePostSignUp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SignUpSchemaType) =>
      axios.post("/api/auth/signup", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
};

export const usePostLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AuthSchema) => axios.post("/api/auth/login", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
  });
};
