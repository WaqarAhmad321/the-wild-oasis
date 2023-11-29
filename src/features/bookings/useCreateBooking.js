import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isCreatingBooking, mutate: createBooking } = useMutation({
    mutationFn,
    mutationKey,

    onSuccess: () => {
      toast.success("New Booking successfully made.");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => toast.error("Booking could not be made."),
  });

  return { isCreatingBooking, createBooking };
}
