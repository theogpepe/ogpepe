/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ['@uniswap/widgets', '@uniswap/conedison'],
};

module.exports = nextConfig;
