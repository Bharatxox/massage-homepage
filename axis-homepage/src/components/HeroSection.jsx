const HeroSection = () => {
  return (
    <div className="bg-primary p-10 flex flex-col gap-5">
      <h1 className="text text-5xl pb-4">Think Health. Think Massage</h1>
      <p className="font-medium pb-5 px-[120px]">
        we are open at 9pm Monday through Sunday .If you would like to schedule
        ana appointment with us please call us at 987654321 today!
      </p>
      <div className="flex gap-4 justify-center">
        <button className="text-white bg-transparent hover:text-primary hover:bg-white border border-white font-medium text-sm rounded-none outline-none px-7 py-3">
          LEARN MORE ABOUT US
        </button>
        <button className="text-white bg-transparent hover:text-primary hover:bg-white border border-white font-medium text-sm rounded-none outline-none">
          CONTACT US TODAY
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
