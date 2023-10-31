import { useQuery } from "@tanstack/react-query";
import { getGuests } from "./../../services/apiGuests";

function useGuests() {
  const { data: guests, isLoading: isLoadingGuests } = useQuery({
    queryKey: ["guests"],
    queryFn: getGuests,
  });

  return { guests, isLoadingGuests };
}

export default useGuests;
