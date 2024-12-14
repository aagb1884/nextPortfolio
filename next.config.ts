import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
      NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
      NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID
    }
};

export default nextConfig;