import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
      SANITY_API_VERSION: process.env.SANITY_API_VERSION,
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
      SANITY_DATASET: process.env.SANITY_DATASET,
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID
    }
};

export default nextConfig;