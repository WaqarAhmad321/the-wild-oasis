import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGuests } from "./../../services/apiGuests";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useGuests() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading: isLoadingGuests, data: { data: guests, count } = {} } =
    useQuery({
      queryKey: ["guests", page],
      queryFn: () => getGuests({ page }),
    });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["guests", page + 1],
      queryFn: () => getGuests({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryFn: ["guests", page - 1],
      queryKey: () => getGuests({ page: page - 1 }),
    });

  return { guests, isLoadingGuests, count };
}

export default useGuests;
