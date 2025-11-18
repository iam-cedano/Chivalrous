import ServiceType from "@/types/client/Service.type";

/* This is for development only */

const defaultDescription_1 = "🇲🇽 | Lifetime guaranteed | Delivering in 12-24 hours.";
const defaultDescription_2 = "🇮🇳 | Lifetime guaranteed | Delivering in 12-24 hours.";

const Services: ServiceType[] = [
  { service: "Everything", title: "Eveything", image: "build/assets/logos/everything.webp", description: defaultDescription_1 },
  { service: "Instagram", title: "Instagram Followers", image: "build/assets/services/1/logo.webp", description: defaultDescription_1 },
  { service: "Facebook", title: "Facebook Followers", image: "build/assets/services/2/logo.webp", description: defaultDescription_1 },
  { service: "Youtube", title: "Youtube Followers", image: "build/assets/logos/youtube.webp", description: defaultDescription_1 },
  { service: "TikTok", title: "TikTok Followers", image: "build/assets/services/3/logo.webp", description: defaultDescription_1 },
  { service: "Twitch", title: "Twitch Followers", image: "build/assets/logos/twitch.webp", description: defaultDescription_1 },
  { service: "Pinterest", title: "Pinterest Followers", image: "build/assets/logos/pinterest.webp", description: defaultDescription_1 },
  { service: "Linkedin", title: "Linkedin Followers", image: "build/assets/logos/linkedin.webp", description: defaultDescription_2 },
  { service: "Twitter", title: "Twitter Followers", image: "build/assets/logos/twitter.webp", description: defaultDescription_2 },
  { service: "Spotify", title: "Spotify Followers", image: "build/assets/logos/spotify.webp", description: defaultDescription_2 },
  { service: "Whatsapp", title: "Whatsapp Followers", image: "build/assets/logos/whatsapp.webp", description: defaultDescription_2 },
  { service: "Telegram", title: "Telegram Followers", image: "build/assets/logos/telegram.webp", description: defaultDescription_2 },
  { service: "Web", title: "Web", image: "build/assets/logos/website.webp", description: defaultDescription_2 },
  { service: "More", title: "More", image: "build/assets/logos/next.webp", description: defaultDescription_2 }
];

export default Services;