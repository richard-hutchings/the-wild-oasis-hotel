import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdatedUser() {
  const queryClient = useQueryClient();

  const { mutate: updatedUser, isLoading: isUpdating } = useMutation({
    mutationFn: useUpdatedUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatedUser, isUpdating };
}
