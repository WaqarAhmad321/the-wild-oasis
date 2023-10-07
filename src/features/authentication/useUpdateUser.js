import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCurrentUser } from "../../services/apiAuth";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdatingUser, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("User account successfully updated.");

      queryClient.setQueryData(["user"], user);
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdatingUser, updateUser };
}
