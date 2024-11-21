const index = ({ message }: { message: string }) => {
    return (
        <div
            className="alert alert-danger my-3 text-center d-none"
            id="error"
            role="alert"
        >
            {message}
        </div>
    );
};

export default index;
