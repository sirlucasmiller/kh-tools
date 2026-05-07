import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase =
  process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
