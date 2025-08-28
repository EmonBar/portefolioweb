/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const nwo = process.env.GITHUB_REPOSITORY || '';
const isUserSite = nwo.endsWith('.github.io');
const repo = process.env.NEXT_PUBLIC_BASE_PATH
  || (isCI && !isUserSite ? nwo.split('/')[1] : '');

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
