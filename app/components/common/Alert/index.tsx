const index = ({ message }: { message: string }) => {
  return (
    <div className="alert alert-danger my-3 text-center" role="alert">
      {message}
    </div>
  );
};

export default index;
