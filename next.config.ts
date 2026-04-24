import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    SES_REGION: process.env.SES_REGION,
    SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID,
    SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY,
    SES_FROM_EMAIL: process.env.SES_FROM_EMAIL,
    SES_TO_EMAIL: process.env.SES_TO_EMAIL,
  },
};

export default nextConfig;
