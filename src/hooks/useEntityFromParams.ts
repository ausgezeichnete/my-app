// hooks/useEntityFromParams.ts
import { useParams } from "react-router-dom";

export function useEntityFromParams<T extends { id: number }>(
  data: T[],
  paramKey: string,
) {
  const params = useParams();
  const id = Number(params[paramKey]);
  const entity = data.find((item) => item.id === id);
  return { id, entity };
}
