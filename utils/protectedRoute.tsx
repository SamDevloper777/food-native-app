// app/utils/ProtectedRoute.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { Redirect, useRouter } from "expo-router";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return null; // Prevent rendering if not authenticated

  return <>{children}</>;
};

export default ProtectedRoute;
