import hero from"./../assets/hero.png"
const Hero=()=> {
  return (
    <div>
        <img src={hero} className="w-full max-h-[600pc] object-cover"/>
    </div>
  );
};
export default Hero;