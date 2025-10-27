import { useQuery } from "@tanstack/react-query";
import { getCuttentUser } from "../../services/ApiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCuttentUser,
  });

  return { isLoading, user, isAuthenticate: user?.role === "authenticated" };
}
