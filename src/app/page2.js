const Page2 = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full bg-yellow-500 mb-4 flex items-center justify-center">
          {/* Replace with actual image */}
          <img src="/avatar.png" alt="Profile" className="rounded-full" />
        </div>

        {/* Name and Role */}
        <h1 className="text-5xl font-bold font-paytone">Namık Korona</h1>
        <p className="text-gray-400 flex justify-center gap-4 mt-5">
          <span>Designer </span>| <span>Developer</span>
        </p>

        {/* Follow Button */}
        <button className="mt-4 bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-600 transition underline">
          Follow
        </button>

        {/* Social Icons */}
        <div className="flex gap-16 mt-16">
          {/* Telegram */}
          <div className=" flex flex-row items-center justify-between gap-3 ">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              {/* Add Telegram Icon */}
              <span className="text-lg">📲</span>
            </div>
            <div>
              <p className=" text-sm">Telegram</p>
              <p className="text-xs text-orange-200">@↗️</p>
            </div>
          </div>

          {/* Mail */}
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              {/* Add Mail Icon */}
              <span className="text-lg">📧</span>
            </div>
            <div>
              <p className=" text-sm">Mail</p>
              <p className="text-xs text-orange-200">@gmail.com</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              {/* Add GitHub Icon */}
              <span className="text-lg">🐙</span>
            </div>
            <div>
              <p className=" text-sm">GitHub</p>
              <p className="text-xs text-orange-200">@↗️</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page2;
