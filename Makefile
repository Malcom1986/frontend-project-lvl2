install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npx test -- --coverage

lint:
	npx eslint .

publish:
	npm publish --dry-run
jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage: 
	npx -n '--experimental-vm-modules  --no-warnings' jest --coverage