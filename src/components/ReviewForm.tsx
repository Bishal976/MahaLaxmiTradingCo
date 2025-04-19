
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ReviewForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !review || rating === 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and provide a rating.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a server
    console.log({ name, email, role, review, rating });
    
    // Show success message
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! Your review has been submitted successfully.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setRole('');
    setReview('');
    setRating(0);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold text-construction-darkBlue mb-6">Share Your Experience</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              placeholder="Your Email"
            />
          </div>
          
          <div>
            <Label htmlFor="role">Company/Position</Label>
            <Input
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1"
              placeholder="Your Company or Position"
            />
          </div>
          
          <div>
            <Label>Rating *</Label>
            <div className="flex mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={28}
                  className={`cursor-pointer ${
                    (hoverRating || rating) >= star 
                      ? "text-yellow-500 fill-yellow-500" 
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="review">Your Review *</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mt-1"
              placeholder="Share your experience with our products and services"
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-construction-blue hover:bg-construction-darkBlue text-white"
          >
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
