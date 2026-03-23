import foodGrains from "@/assets/images/ProductPage/food-grains.png";
import headphones from "@/assets/images/ProductPage/headphones.png";
import mood from "@/assets/images/ProductPage/mood.png";
import affiramtions from "@/assets/images/ProductPage/affiramtions.png";
import chatbot from "@/assets/images/ProductPage/chatbot.png";
import library from "@/assets/images/ProductPage/library.png";
import journal from "@/assets/images/ProductPage/journal.png";
import checkIn from "@/assets/images/ProductPage/check-in.png";
import communities from "@/assets/images/ProductPage/communities.png";
import booking from "@/assets/images/ProductPage/booking.png";

export interface Solution {
  icon: string;
  title: string;
  paragraph: string;
}

export const productSolutionsData: Solution[] = [
  {
    icon: foodGrains,
    title: "Mindfulness and Breathing Exercises",
    paragraph:
      "Breathe, relax, and reset. Immerse yourself in guided mindfulness and breathing sessions designed to ease stress and promote relaxation. Thoughtfully crafted with audio-led guidance, soothing animations, and nature-inspired visuals.",
  },
  {
    icon: headphones,
    title: "ASMR",
    paragraph:
      "Experience deep relaxation through sound. Let go of stress with calming ASMR content designed to help you relax and recharge. Customize your experience with a sleep timer, nature-inspired visuals, and a selection of soothing sounds.",
  },
  {
    icon: mood,
    title: "Daily Mood Check-in",
    paragraph:
      "Understand yourself better, one check-in at a time. Track your emotions effortlessly with our intuitive Daily Mood Check-In. Select from a range of moods, express yourself with emojis, and add optional notes for deeper self-reflection.",
  },
];

export const hiddenSolutionsData: Solution[] = [
  {
    icon: affiramtions,
    title: "Daily Affirmations",
    paragraph:
      "Start your day with positivity. Boost your mindset with uplifting daily affirmations tailored to promote self-confidence and resilience. OurPadi delivers fresh, inspiring messages every day, helping you stay motivated and mindful.",
  },
  {
    icon: chatbot,
    title: "AI Chatbot",
    paragraph:
      "Your 24/7 companion for mental wellness. More than just a chatbot, OurPadi’s AI-powered support is designed to listen, respond, and provide guidance—just like a caring friend. Whether you need reassurance, coping strategies.",
  },
  {
    icon: library,
    title: "Pal's Library",
    paragraph:
      "A world of knowledge at your fingertips. Explore a curated collection of mental health articles designed to inform, inspire, and guide you. Save your favorite reads, share valuable insights with friends, and engage with the community.",
  },
  {
    icon: journal,
    title: "Personal Journal",
    paragraph:
      "A private space for self-reflection and growth. Capture your thoughts, emotions, and experiences in a secure digital journal. Express yourself freely with emojis, add personal images, and revisit past entries for deeper insight.",
  },
  {
    icon: checkIn,
    title: "Sleep Check-in",
    paragraph:
      "Better sleep, better well-being. Track your sleep patterns and improve your nightly rest with our Sleep Check-In feature. Log your sleep, assess quality and receive personalized tips to enhance your routine With gentle bedtime reminders.",
  },
  {
    icon: communities,
    title: "Communities",
    paragraph:
      "Find connection, support, and belonging. Join a welcoming space where you can share experiences, connect with like-minded individuals, and find encouragement from a supportive community",
  },
  {
    icon: booking,
    title: "Therapy Booking",
    paragraph:
      "Professional support, made easy. Finding the right therapist shouldn't be overwhelming. With OurPadi's seamless booking system, you can browse therapy options, read real client testimonials, and book a session in just a few clicks.",
  },
];
