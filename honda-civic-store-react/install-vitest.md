1. Run the installs

`npm install --save-dev vitest
npm install --save-dev jsdom
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/react
npm install --save-dev @vitest/coverage-v8`

2. Add testing config to vite.config.js file:

`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';`

`export default defineConfig({
plugins: [react()],
test: {
globals: true,
environment: 'jsdom',
},
});`

3. Add a test script to package.json:

`"scripts": {
"dev": "vite",
"test": "vitest --environment jsdom",
...
}`

4. Test it out!

`npm test`
