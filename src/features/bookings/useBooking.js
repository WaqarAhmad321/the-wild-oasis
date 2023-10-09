import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoadingBooking,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoadingBooking, booking, error, bookingId };
}

export default useBooking;
