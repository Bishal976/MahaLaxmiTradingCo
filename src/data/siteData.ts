import { url } from "inspector";

// Company Information
export const companyInfo = {
  name: "Maha Laxmi Trading",
  tagline: "Quality Construction Materials for Every Project",
  description: "Maha Laxmi Trading provides premium construction materials to build a stronger tomorrow",
  foundedYear: 1998,
  stats: {
    yearsOfExperience: "25+",
    projectsSupplied: "500+"
  },
  businessHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
    weekends: "Sunday: Opened"
  }
};

// Contact Information
export const contactInfo = {
  address: {
    street: "Opposite of Rajoun Block",
    area: "Kifayatpur, Rajoun",
    cityState: "Banka 813107"
  },
  phone: {
    primary: "+91 91352 26485",
    secondary: "+91 94308 62239",
    hotline: "+91 91352 26485"
  },
  email: {
    info: "singhbasukinath9@gmail.com",
  },
  urgentDeliveryText: "Need Products Urgently?",
  urgentDeliveryDescription: "Contact our express delivery team for same-day deliveries within city limits."
};

// Products Data
export const productCategories = [
  {
    id: 1,
    title: "Shree Cement CNF ship",
    description: "Premium quality cement for structural integrity and durability, delievered through our dealer networks.",
    url: "https://www.shreecement.com/our-business#products",
    image: "../assets/shree01.png",
  },
  {
    id: 2,
    title: "Tufcon Steel CNF ship",
    description: "High-grade reinforcement steel and structural steel, delievered through our dealer networks.",
    url: "https://tufcon.com/tmt-rebars.php",
    image: "../assets/tufcon.webp",
  },
  {
    id: 3,
    title: "Maa Tara Transports",
    description: "Reliable transportation services for cement shipment from factory to individual dealers, covering five states.",
    url: "https://maps.app.goo.gl/5YvRKbkZgA8TWHeF6",
    image: "../assets/maaTaraTransports",
  },
  {
    id: 4,
    title: "Sand & Stone Chips",
    description: "High quality Sand, Stone Chips and other misc raw materials, delievered from our main office Rajoun.",
    url: "https://maps.app.goo.gl/5YvRKbkZgA8TWHeF6",
    image: "../assets/mahaLaxmiTradingCo",
  },
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Construction Manager",
    content: "Maha Laxmi Trading has been our go-to supplier for construction materials for the past 5 years. Their quality is consistent and delivery is always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunita Patel",
    role: "Architect",
    content: "I recommend Maha Laxmi Trading to all my clients. Their range of materials is extensive and the quality is excellent. The team is also very knowledgeable and helpful.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Civil Engineer",
    content: "We've completed several large projects using materials from Maha Laxmi Trading. Their products meet all industry standards and their prices are competitive.",
    rating: 4,
  },
];

// About Section Data
export const aboutData = {
  title: "About Maha Laxmi Trading",
  subtitle: "Your trusted partner in construction materials for over two decades",
  story: {
    title: "Our Story",
    paragraphs: [
      "Founded in 1998, Maha Laxmi Trading has evolved from a modest supplier to one of the most trusted names in the construction material industry in the region. Our success is built on the Commitment to Quality and Reliability.",
      "We take pride in offering premium construction materials that meet the highest industry standards. Every product in our inventory is carefully selected to ensure durability, performance, and value for money."
    ]
  },
  services: [
    {
      title: "Cement Distribution and Transportation",
      points: [
        "We manage a self-operated **CNF ship** for **Shree Cement Ltd** at key locations, including **Banka**, **Lakhisaray**, and **Munger**.",
        "Our transportation arm, **Maa Tara Transport**, specializes in cement delivery across five states—**Bengal**, **Bihar**, **Jharkhand**, and **Uttar Pradesh**.",
        "As an authorized transporter for **Shree Cement Ltd**, the **second-largest cement producer in India**, we ensure timely and efficient delivery of high-quality cement."
      ]
    },
    {
      title: "Steel Distribution Leadership",
      points: [
        "We are one of the **largest distributors of steel** in **Banka** and **Bhagalpur** (Bihar).",
        "Our strong partnerships with **Mongia Steel Ltd.** and **Shree Langta Bata Pvt. Ltd.** (Tufcon, Giridih Jharkhand) enable us to supply top-quality steel products to meet the needs of construction projects across the region."
      ]
    }
  ],
  carouselImages: [
    "../assets/car01.jpg", 
    "../assets/car02.jpg", 
    "../assets/car03.jpg", 
  ],
  tagline: "Quality You Can Trust"
};

// Hero Section Data
export const heroData = {
  backgroundImage: "../assets/hero-background.jpg",
  title: "Quality Construction Materials for Every Project",
  description: "Maha Laxmi Trading provides premium construction materials to build a stronger tomorrow",
  buttons: {
    primary: {
      text: "Our Products",
      target: "products"
    },
    secondary: {
      text: "Contact Us",
      target: "contact"
    }
  }
};

// Products Section Data
export const productsData = {
  title: "Our Products",
  description: "We provide a comprehensive range of high-quality construction materials through our dealership networks.",
  customOrderText: "Looking for specific construction materials/ Services not listed here? We offer a wide range of products and services to meet your project needs.",
  buttonText: "Contact for Custom Orders"
};

// Contact Section Data
export const contactSectionData = {
  title: "Contact Us",
  description: "Have questions about our products/services? Get in touch with us.",
  formTitle: "Send Us a Message",
  formSubmitButtonText: "Send Message",
  infoTitle: "Contact Information",
  urgentDeliveryTitle: "Need Products Urgently?"
};
