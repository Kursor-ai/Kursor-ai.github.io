/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './src/components/Image.js',
    },
}

module.exports = nextConfig
