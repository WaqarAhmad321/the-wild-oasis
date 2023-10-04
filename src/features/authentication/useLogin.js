import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLoggingin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.invalidateQueries(["user"], user);
      navigate("/dashboard");
    },

    onError: () => toast.error("Provided email or password are incorrect"),
  });

  return { login, isLoggingin };
}

export default useLogin;
