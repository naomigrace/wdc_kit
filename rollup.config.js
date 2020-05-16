import babel from "@rollup/plugin-babel"
import image from '@rollup/plugin-image'
import url from '@rollup/plugin-url'
import resolve from '@rollup/plugin-node-resolve'
import scss from "rollup-plugin-scss"
import pkg from "./package.json"

export default {
  input: "src/index.js",
  output: {
    file: "dist/wdc_kit.js",
    format: "esm",
    sourcemap: "true",
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
      url(),
      image(),
      babel({ 
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"]
      }),
      scss(),
      resolve()
    ],
}
