// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader?.includes('css-loader') && 
          !moduleLoader.loader?.includes('postcss-loader')
        ) {
          moduleLoader.options.modules = {
            ...moduleLoader.options.modules,
            localIdentName: '[name]__[local]'
          };
        }
      });
    });

    return config;
  }
};

export default nextConfig;