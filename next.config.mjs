/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repo ? `/${repo}` : '',
  assetPrefix: repo ? `/${repo}/` : '',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
