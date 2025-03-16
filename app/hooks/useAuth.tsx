"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DecodedIdToken } from "firebase-admin/auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        try {
          const response = await axios.post("/api/auth/validate", { token });
          const { data } = response;

          console.log({ data });

          if (response.status === 200) {
            setIsAuthenticated(true);
            setData(data.data);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error("Error validating token:", error);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error validating token:", error);
        setIsAuthenticated(false);
      }
    };

    validateToken();
  }, []);

  return { isAuthenticated, data };
}
