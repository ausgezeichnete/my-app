// hooks/useRowNavigation.ts
import { useNavigate } from "react-router-dom";

export function useRowNavigation(basePath: string) {
  const navigate = useNavigate();
  return (id: number | string) => navigate(`${basePath}/${id}`);
}
