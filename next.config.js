/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ['@uniswap/widgets', '@uniswap/conedison'],
	assetPrefix: '/ogpepe/',
};

module.exports = nextConfig;
