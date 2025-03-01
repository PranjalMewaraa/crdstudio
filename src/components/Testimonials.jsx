import { AnimatedTestimonials } from "../components/ui/testimonial";

export default function AnimatedTestimonialsComp() {
  const testimonials = [
    {
      quote:
        "The custom e-commerce solution built for our brand has significantly boosted our sales and improved customer experience.",
      name: "Rohit Sharma",
      designation: "Founder at TrendyMart",
      src: "https://images.unsplash.com/photo-1607748852122-2a9d5ef592e3?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Our mobile app development project was executed flawlessly, providing an intuitive and engaging experience for our users.",
      name: "Anjali Mehta",
      designation: "CEO at DigiTech Solutions",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "The website redesign was a game-changer for us. The modern UI/UX has significantly increased our engagement rates.",
      name: "Sandeep Verma",
      designation: "Marketing Head at BrightWeb",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
    {
      quote:
        "Exceptional backend development services. Our platform is now more robust and scalable than ever before.",
      name: "Priya Nair",
      designation: "CTO at CodeCrafters",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "The digital transformation solutions provided have streamlined our business operations and boosted efficiency.",
      name: "Vikram Patil",
      designation: "Operations Manager at SmartBiz Tech",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
