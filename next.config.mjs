/** @type {import('next').NextConfig} */

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  transpilePackages: ['rc-util', '@ant-design', '@ant-design/icons', 'antd', 'rc-pagination', 'rc-picker', 'next-translate-plugin', 'next-translate']
};

export default nextConfig;
