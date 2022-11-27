/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env:{
  ourpicture_api_url: process.env.OURPICTURE_API_URL,
  },
}

module.exports = nextConfig
