// vite.config.js
export default {
  root: "src", // Ensures Vite starts in the `src` directory
  base: "/repository-name/", // Replace `repository-name` with your GitHub repo name
  build: {
    outDir: "../dist", // Output directory is `dist` at the root level
    emptyOutDir: true,
  },
  envDir: "../",
};
