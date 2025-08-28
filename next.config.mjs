/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === 'true';
const repoFromCI = isCI && process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';
const repo = process.env.NEXT_PUBLIC_BASE_PATH || repoFromCI || '';

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
