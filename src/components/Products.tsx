
 
import { Button } from "@/components/ui/button";
import { productCategories, productsData } from '@/data/siteData';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-heading center-heading">{productsData.title}</h2>
          <p className="text-construction-gray text-lg mt-8">
            {productsData.description}
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productCategories.map((category, index) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-2"
          >
            {/* Fixed height image container */}
            <div className="h-56 overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className={`w-full h-full transform hover:scale-105 transition-transform duration-500 ${
                            index === 0 ? 'object-contain' : 'object-cover'
                  }`}
              />
            </div>

            {/* Content section */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-construction-darkBlue mb-2">
                {category.title}
              </h3>
              <p className="text-construction-gray mb-4">{category.description}</p>

              {/* Button at the bottom */}
              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-construction-blue text-construction-blue hover:bg-construction-blue hover:text-white"
                  onClick={() => window.open(category.url, '_blank')}
                >
                  Check out
                </Button>
              </div>
            </div>
          </div>
        ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-construction-gray mb-6">
            {productsData.customOrderText}
          </p>
          <Button 
            className="bg-construction-darkBlue hover:bg-construction-blue text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {productsData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
