export const siteConfig = {
  name: "NeuraForge",
  tagline: "Turning Data into Power. Code into Profits.",
  description: "AI-native boutique studio shipping revenue-driving products quickly (weeks, not months).",
  url: "https://neuraforge.tech",
  email: "hello@neuraforge.tech",
  phone: {
    whatsapp1: "+855763860322",
    whatsapp2: "+917305427957"
  },
  social: {
    github: "https://github.com/neuraforge",
    linkedin: "https://linkedin.com/company/neuraforge",
    twitter: "https://twitter.com/neuraforge"
  },
  brand: {
    colors: {
      deep: "#0B0714",
      primary: "#7C3AED", 
      accent: "#60A5FA",
      gray: "#C7C9D1"
    },
    fonts: {
      display: "Poppins",
      body: "Inter"
    }
  }
} as const;

export const SITE = {
  calendlyUrl: "https://calendly.com/neuraforge/consultation",
  whatsappTel: "+855763860322",
  whatsappMsg: "Hi! I'm interested in NeuraForge's AI development services. Can we discuss my project?",
  socials: {
    github: "https://github.com/neuraforgetech",
    linkedin: "https://www.linkedin.com/in/neura-forge-986093389/", 
    twitter: "https://x.com/ForgeNeura21457",
    instagram: "https://www.instagram.com/neura_forge_official/",
    facebook: "https://www.facebook.com/profile.php?id=61581948205580",
    reddit: "https://www.reddit.com/user/Neura_Forge/",
    telegram: "https://t.me/+xgd8x5xp1vFkMWY1"
  },
  contact: {
    email: siteConfig.email,
    whatsapp1: siteConfig.phone.whatsapp1,
    whatsapp2: siteConfig.phone.whatsapp2,
    scheduleCall: "https://calendly.com/neuraforge/consultation"
  }
} as const;