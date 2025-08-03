import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigationType, useNavigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const { authUser } = useAuthStore();
  const navType = useNavigationType(); // Tells us if this was a refresh (POP) or a link click
  const navigate = useNavigate();

  useEffect(() => {
    // If user is logged in and this is NOT a refresh → redirect to home
    if (authUser && navType !== "POP") {
      navigate("/", { replace: true });
    }
  }, [authUser, navType, navigate]);

  return <>{children}</>;
}
