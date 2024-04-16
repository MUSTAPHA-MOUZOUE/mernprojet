import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png";


const HomePage=()=> {
  return (
    <div className="flex flex-col ga-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col items-center justify-center gap-5 text-center mb-2">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage }></img>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            {" "}
            order takeaway even faster
          </span>
          <span className="text-lg">
            We are a fast-food delivery company that delivers food to your
            doorstep.
          </span>
          <span>
            Download the MernEats app for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage}></img>
        </div>
      </div>
    </div>
  );
};
export default HomePage;