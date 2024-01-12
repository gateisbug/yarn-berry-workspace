// noinspection NodeCoreCodingAssistance
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import babel from '@rollup/plugin-babel';

export default {
  input: {
    '.': 'src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name]/index.js',
      chunkFileNames: 'shared/[name]-[hash].js'
    }
  ],
  plugins: [
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
        '@babel/preset-typescript',
        '@babel/preset-env',
        '@babel/preset-react'
      ],
    })
  ],
  external: ['react', 'react-dom'] // 이곳에 포함되지 않은 라이브러리는 번들링시 포함됨.
};