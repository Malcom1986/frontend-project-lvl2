
  
install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run
jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage: 
	npx -n '--experimental-vm-modules  --no-warnings' jest --coverage