/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};


