import Link from "next/link";

export const LastSection = () => {
    return (
        <div className="mt-4">
            <small
                id="emailHelp"
                className="form-text text-muted d-flex justify-content-center"
            >
                ¿Eres nuevo por aqui? &nbsp; <br />
                <Link
                    href="/create-session"
                    style={{
                        fontWeight: "bold",
                        color: "#E65C35",
                    }}
                >
                    Cree su cuenta en Change Books
                </Link>
            </small>
        </div>
    );
};
