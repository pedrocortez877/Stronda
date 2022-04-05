import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return [open, toggle];
};
