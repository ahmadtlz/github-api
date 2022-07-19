/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTJS_APP_GITHUB_URL: 'https://api.github.com',
    NEXTJS_APP_GITHUB_TOKEN: 'put-token-here',
  },
}

module.exports = nextConfig
