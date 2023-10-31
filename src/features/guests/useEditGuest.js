import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addEditGuest } from "../../services/apiGuests";

export default function useEditGuest() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editGuest } = useMutation({
    mutationFn: ({ newGuestData, id }) => addEditGuest(newGuestData, id),

    onSuccess: () => {
      toast.success("Guest edited successfully.");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editGuest };
}

