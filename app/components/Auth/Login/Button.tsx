import { useEffect, useState } from "react";

export const Button = ({
  loadingCredentials,
  onclick,
}: {
  loadingCredentials: boolean;
  onclick: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(loadingCredentials);

  useEffect(() => {
    console.log(loadingCredentials);
    
    setLoading(loadingCredentials);
  }, [loadingCredentials]);
  return (
    <div className="d-grid gap-2">
      <button
        type="button"
        className="btn btn-dark text-ligth"
        style={{
          background: "#E65C35",
          border: "1px solid #332211",
        }}
        onClick={onclick}
        disabled={loading}
      >
        {!loading ? (
          "Iniciar Sesión"
        ) : (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </button>
    </div>
  );
};
