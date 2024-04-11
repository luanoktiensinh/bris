const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: process.env.BE_URL.replace(/\/$/g, '') + '/graphql'
            }
        ]
    }
};

module.exports = nextConfig;
