const Contact = () => {
  return (
    <div className="w-full m-4 p-4 bg-gray-300">
      <h1 className="font-bold text-xl m-1 p-1">Contact Us Page</h1>
      <form>
        <input
          className="m-1 p-1 border-white bg-gray-300 font-thin"
          text="name"
          placeholder="name"
        />
        <input
          className="m-1 p-1 border-black bg-gray-300  font-thin"
          text="suggesions"
          placeholder="suggest"
         
        />
        <button className="bg-slate-100 m-2 p-2 rounded-md font-bold">Contact</button>
      </form>
    </div>
  );
};
export default Contact;
