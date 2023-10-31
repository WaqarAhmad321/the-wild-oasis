import toast from "react-hot-toast";
import { addEditGuest } from "../../services/apiGuests";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAddGuest() {
  const queryClient = useQueryClient();

  const { isLoading: isAddingGuest, mutate: addGuest } = useMutation({
    mutationFn: addEditGuest,


    onSuccess: () => {
      toast.success("New Guest successfully added.");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isAddingGuest, addGuest };
}
