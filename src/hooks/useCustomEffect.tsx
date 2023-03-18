import { useEffect } from "react";
import { useOpenState } from "hooks/useOpenState";

const useCustomEffect = () => {
  const { isOpen, setIsOpen } = useOpenState();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, []);
  return;
};

export default useCustomEffect;
