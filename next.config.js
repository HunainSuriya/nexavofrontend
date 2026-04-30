/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-backend-url.onrender.com'], // Add your backend URL later
  },
  output: 'standalone', // For better Netlify deployment
}

module.exports = nextConfig