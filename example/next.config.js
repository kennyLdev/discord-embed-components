const githubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: githubPagesBuild ? "/discord-embed-components" : "",
};

module.exports = nextConfig;
