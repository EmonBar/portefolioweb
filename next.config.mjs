const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portefolioweb' : '',
  assetPrefix: isProd ? '/portefolioweb/' : '',
  images: { unoptimized: true },
}

export default nextConfig
