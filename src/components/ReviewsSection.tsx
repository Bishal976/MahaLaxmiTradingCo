
 
import ReviewForm from './ReviewForm';
import Testimonials from './Testimonials';
import { reviewsData } from '@/data/siteData';

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-heading center-heading">{reviewsData.title}</h2>
          <p className="text-construction-gray text-lg mt-8">
            {reviewsData.description}
          </p>
        </div>

        <Testimonials />
        
        <div className="mt-16">
          <div className="max-w-xl mx-auto">
            <ReviewForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
