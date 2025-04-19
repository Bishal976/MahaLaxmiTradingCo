
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/siteData";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section min-h-[80vh] flex items-center text-white bg-construction-darkBlue relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${heroData.backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-construction-orange hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById(heroData.buttons.primary.target)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {heroData.buttons.primary.text}
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-sky-800 hover:text-construction-darkBlue font-semibold px-8 py-6 text-lg"
              onClick={() => document.getElementById(heroData.buttons.secondary.target)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {heroData.buttons.secondary.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
