import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  window.scrollTo(0, 0);
  return null;
}
