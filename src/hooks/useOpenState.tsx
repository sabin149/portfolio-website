import { useOutletContext } from "react-router-dom";
import { openStateType } from "types/Types";

export function useOpenState() {
  return useOutletContext<openStateType>();
}
