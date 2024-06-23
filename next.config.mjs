/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		outputFileTracingIncludes: {
			'/content': ['./public/**/*'],
		},
	},
};

export default nextConfig;
