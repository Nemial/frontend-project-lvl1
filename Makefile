install:
		npm ci
brain-games:
		bin/brain-games.js
publish:
		npm publish --dry-run
lint:
		npx eslint .
build:
		npm run build --if-present
