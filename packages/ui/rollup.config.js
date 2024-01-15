// noinspection NodeCoreCodingAssistance

import { dts } from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import babel from '@rollup/plugin-babel';

import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import { createHash } from 'crypto';

function hashmaker(string, length = 6) {
  return createHash('md5').update(string).digest('hex').substring(0, length);
}

export default [
  {
    input: 'src/index.ts',
    output:  {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [
      postcss({
        extensions: ['.css', '.module.css', '.scss'],
        plugins: [
          autoprefixer,
          postcssPresetEnv({
            stage: 1,
            minimumVendorImplementations: 2,
          }),
        ],
        modules: {
          generateScopedName: (name, _, css) => {
            const hashcss = hashmaker(css, 3);
            const hashname = hashmaker(name, 2);
            return `css-${hashcss}${hashname}`;
          }
        },
        extract: false
      }),
      swc(defineRollupSwcOption({
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true
          },
          target: "es2015",
          minify: false,
        },
        tsconfig: './tsconfig.json'
      })),
      typescript(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: ['.yarn/**', 'dist'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ],
      })
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  }
]

// export default {
//   input: {
//     '.': 'src/index.ts',
//     // 'ui': 'src/package/ui/index.ts',
//     // 'view': 'src/package/view/index.ts',
//   },
//   output: [
//     {
//       dir: 'dist',
//       format: 'esm',
//       entryFileNames: '[name]/index.js',
//       // chunkFileNames: 'shared/[name]-[hash].js'
//     }
//   ],
//   plugins: [
//     postcss({
//       extensions: ['.css', '.module.css', '.scss'],
//       plugins: [
//         autoprefixer,
//         postcssPresetEnv({
//           stage: 1,
//           minimumVendorImplementations: 2,
//         }),
//       ],
//       modules: {
//         generateScopedName: (name, _, css) => {
//           const hashcss = hashmaker(css, 3);
//           const hashname = hashmaker(name, 2);
//           return `css-${hashcss}${hashname}`;
//         }
//       },
//       extract: false
//     }),
//     swc(defineRollupSwcOption({
//       jsc: {
//         parser: {
//           syntax: "typescript",
//           tsx: true,
//           decorators: true
//         },
//         target: "es2015",
//         minify: false,
//       },
//       tsconfig: './tsconfig.json'
//     })),
//     typescript(),
//     resolve(),
//     commonjs(),
//     babel({
//       babelHelpers: 'bundled',
//       exclude: ['.yarn/**', 'dist'],
//       presets: [
//         '@babel/preset-env',
//         '@babel/preset-react'
//       ],
//     })
//   ],
//   external: ['react', 'react-dom'],
// };
