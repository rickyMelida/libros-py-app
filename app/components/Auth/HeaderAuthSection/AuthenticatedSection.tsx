import Link from "next/link";

const AuthenticatedSection = () => {
  return (
    <>
      <li className="nav-item dropdown users-details" id="users-details">
        <span
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Perfil
        </span>
        <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
          <li>
            <Link
              className="dropdown-item"
              id="my-profile-item"
              href="/profile"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              Mi Perfil
            </Link>
          </li>
          <li>
            <Link
              href="/favorite"
              className="dropdown-item"
              id="favourite-item"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              id="messages-item"
              href="/messages"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              Mensajes
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default AuthenticatedSection;