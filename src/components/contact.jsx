const Contact = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Contact Me</h1>
        <p className="text-center text-neutral-400 mb-8">
          Feel free to reach out to me through the following contact information:
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 text-neutral-300 text-center">
            <h2 className="text-xl font-bold">Email:</h2>
            <p className="text-lg">mappataorem@gmail.com</p>
          </div>
          <div className="text-neutral-300 text-center">
            <h2 className="text-xl font-bold">Phone:</h2>
            <p className="text-lg">+639911675416</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  