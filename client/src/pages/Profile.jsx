import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3">
      <h2 className="text-center text-2xl font-semibold my-5">Profile</h2>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-transparent border rounded-lg p-3 focus:outline-slate-200"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-transparent border rounded-lg p-3 focus:outline-slate-200"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-transparent border rounded-lg p-3 focus:outline-slate-200"
        />
        <button className="bg-slate-700 text-white p-3 font-bold uppercase rounded-lg">
          Update
        </button>
      </form>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-red-600 hover:underline cursor-pointer">
          Delete Account
        </span>
        <span className="text-red-600 hover:underline cursor-pointer">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;
