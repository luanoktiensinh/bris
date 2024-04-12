const path = require("path");

const nextConfig = {
    sassOptions: {
        additionalData: `@import "common";`
    },
    images: {
        deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
      },
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: process.env.BE_URL.replace(/\/$/g, '') + '/graphql'
            },
            {
                source: '/media/:path*',
                destination: process.env.BE_URL.replace(/\/$/g, '') + '/media/:path*'
            }
        ]
    },
    webpack(config){
        config.resolve.alias['common'] = `${path.resolve(__dirname)}/src/styles/_common.scss`;
        // console.log(config.resolve);
        return config;
    }
};

module.exports = nextConfig;
