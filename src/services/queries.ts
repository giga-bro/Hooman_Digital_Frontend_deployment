import { useQuery } from "@tanstack/react-query";
import { getLatest } from "./api";

export function useLatest() {
  return useQuery({
    queryKey: ["latest"],
    queryFn: getLatest
  });
}
