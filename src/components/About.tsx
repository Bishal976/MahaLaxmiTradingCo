import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { aboutData, companyInfo } from '@/data/siteData';

const About = () => {
    const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="font-semibold text-slate-700">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const carouselImages = [
  "https://images.unsplash.com/photo-1581093588401-7c2d2a17d8a5", // construction site
  "https://images.unsplash.com/photo-1528892952291-009c663ce843", // materials on transport
  "https://images.unsplash.com/photo-1556761175-4b46a572b786",   // business meeting
];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-heading center-heading">{aboutData.title}</h2>
          <p className="text-construction-gray text-lg mt-8">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-construction-darkBlue mb-4">{aboutData.story.title}</h3>
            {aboutData.story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-construction-gray mb-6">
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-construction-lightGray p-6 rounded-lg text-center">
                <h4 className="text-4xl font-bold text-construction-blue mb-2">{companyInfo.stats.yearsOfExperience}</h4>
                <p className="text-construction-gray">Years of Experience</p>
              </div>
              <div className="bg-construction-lightGray p-6 rounded-lg text-center">
                <h4 className="text-4xl font-bold text-construction-blue mb-2">{companyInfo.stats.projectsSupplied}</h4>
                <p className="text-construction-gray">Projects Supplied</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full rounded-lg overflow-hidden">
              <div className="mt-16 inset-0">
                <Carousel autoPlayInterval={4000}>
                  <CarouselContent className="items-center">
                    {carouselImages.map((src, index) => (
                      <CarouselItem key={index} className="flex items-center justify-center">
                        <img
                          src={src}
                          alt={`Slide ${index + 1}`}
                          className="max-h-[500px] w-auto object-contain mx-auto"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-construction-orange rounded-lg flex items-center justify-center p-6">
              <p className="text-white text-xl font-bold text-center">
                {aboutData.tagline}
              </p>
            </div>
          </div>

        </div>

        {/* Services Section */}
        <div className="mt-16">
          {aboutData.services && aboutData.services.map((service, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-bold text-construction-darkBlue mb-6 border-b pb-3 border-construction-lightBlue">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-construction-gray flex items-start">
                    <span className="text-construction-orange mr-2 mt-1">•</span>
                    <span>{parseBold(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
