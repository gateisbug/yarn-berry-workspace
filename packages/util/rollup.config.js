// noinspection NodeCoreCodingAssistance

import { dts } from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.ts',
    output:  {
      file: 'dist/index.js',
      format: 'esm',
    },
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
];
