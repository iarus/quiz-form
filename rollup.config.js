import path from "path";
import svelte from "rollup-plugin-svelte";
import alias from "@rollup/plugin-alias";
import clear from 'rollup-plugin-clear'
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import styles from "rollup-plugin-styles";
import url from "@rollup/plugin-url";
import preprocess from "svelte-preprocess";
import mqpacker from "node-css-mqpacker";
import tailwindcss from "tailwindcss";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";

const production = !process.env.ROLLUP_WATCH;
const BUILD_PATH = "public/build";
const PUBLIC_PATH = "/build/";

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        },
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  preserveEntrySignatures: false,
  output: {
    sourcemap: !production,
    format: "es",
    entryFileNames: "bundle.js",
    dir: BUILD_PATH,
    chunkFileNames: "chunk-[hash].js"
  },
  plugins: [
    clear({
      targets: [BUILD_PATH],
    }),
    svelte({
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
      preprocess: [
        preprocess({
          scss: true,
          globalStyle: true,
          postcss: {
            plugins: [
              postcssImport,
              tailwindcss,
              mqpacker({ sort: true }),
              ...( production ? [autoprefixer] : [])
            ],
          },
        })
      ],
    }),

    url({
      limit: 0,
      destDir: path.join(__dirname, BUILD_PATH),
      publicPath: PUBLIC_PATH,
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
      extensions: [".mjs", ".js", ".json", ".node", ".svelte"],
    }),

    alias({
      entries: [
        {
          find: "@Root",
          replacement: path.join(__dirname + "/src"),
        },
        {
          find: "@Components",
          replacement: path.join(__dirname + "/src/components"),
        },
        {
          find: "@Content",
          replacement: path.join(__dirname + "/src/content"),
        }
      ],
    }),

    // we'll extract any component CSS
    styles({
      mode: [
        "inject",
      ],
      url : {
        inline: false,
        publicPath: PUBLIC_PATH,
        hash: "[hash:16].[ext]"
      },
      config: false
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
