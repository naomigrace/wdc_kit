import babel from "@rollup/plugin-babel"
import image from '@rollup/plugin-image'
import url from '@rollup/plugin-url'
import resolve from '@rollup/plugin-node-resolve'
import scss from "rollup-plugin-scss"
import pkg from "./package.json"

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/wdc_kit.cjs.js",
      format: "cjs",
      sourcemap: "true",
    },
    {
      file: "dist/wdc_kit.esm.js",
      format: "es",
      sourcemap: "true",
    }
  ],
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
