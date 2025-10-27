import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteCabinApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClinet = useQueryClient();

  const { mutate: deletebooking, isLoading: isDeletingbooking } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Booking sucessfully delected");

      queryClinet.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeletingbooking, deletebooking };
}
