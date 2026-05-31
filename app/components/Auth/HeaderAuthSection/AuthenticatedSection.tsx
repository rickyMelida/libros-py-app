import { AuthService } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthenticatedSection = () => {
	const router = useRouter();
	const authService = new AuthService();

	const logoutHandle = async () => {
		await authService.logout();
		localStorage.removeItem("user");
		localStorage.removeItem("authUser");
		
		router.push("/login");
	}

	const resetNavbar = () => {
		const collapse = document.getElementById("navbarSupportedContent");
		if (!collapse) return;
		const el = collapse as HTMLElement;
		if (el.classList.contains("show")) {
			const toggler = document.querySelector(".navbar-toggler") as HTMLElement | null;
			toggler?.click();
		}
	};

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
			  onClick={resetNavbar}
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
			  onClick={resetNavbar}
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
			  onClick={resetNavbar}
            >
              Mensajes
            </Link>
          </li>
		  <li>
			<a className="dropdown-item" onClick={logoutHandle}>
              Cerrar Sesión
			</a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default AuthenticatedSection;