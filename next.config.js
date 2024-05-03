const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE == 'true',
})
const path = require("path");
const { createHash } = require('node:crypto');

const getHash = (source, length) => createHash('shake256', { outputLength: length }).update(source).digest('hex');

const localIdent = ({resourcePath}, localIdentName, localName) => {
    const { dir } = path.parse(resourcePath);
    let moduleName = /\\components\\([\w\\]+)/g.exec(dir) ?? "";
    if(moduleName) {
        moduleName = moduleName[1].replace(/\\/g, '_');
    }
    return `${moduleName}--${localName}--${getHash(resourcePath, 4)}`;
};
const nextConfig = {
    sassOptions: {
        additionalData: `@import "common";`
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: ''
            },
            {
              protocol: 'https',
              hostname: 'integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud',
              port: ''
            },
        ],
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
    webpack(config, { dev }){
        config.resolve.alias['common'] = `${path.resolve(__dirname)}/src/styles/_common.scss`;
        let rule, moduleRules, cssLoader;
        if ((rule = config.module.rules.find((rule) => Object.keys(rule).includes('oneOf')))) {
            if (
                (moduleRules = rule.oneOf.filter(
                    (r) =>
                        ('test.module.scss'.match(r.test) || 'test.module.css'.match(r.test)) &&
                        Array.isArray(r.use),
                ))
            ) {
                for (const moduleRule of moduleRules) {
                    if ((cssLoader = moduleRule.use.find((u) => u.loader.match(/\\css-loader/g)))) {
                        // delete cssLoader.options.modules.getLocalIdent;
                        cssLoader.options = {
                            ...cssLoader.options,
                            modules: {
                                ...cssLoader.options.modules,
                                getLocalIdent: localIdent
                            },
                        };
                    }
                }
            }
        }
        return config;
    }
};

module.exports = withBundleAnalyzer(nextConfig);
