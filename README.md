# orbit-kit

![CI](https://img.shields.io/github/actions/workflow/status/yinonbyjj/orbit-kit/ci.yml?branch=main&label=CI) ![Node](https://img.shields.io/badge/node-18+-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6) ![License](https://img.shields.io/github/license/yinonbyjj/orbit-kit?color=blue)

orbit-kit is a production-ready Express.js REST API written in TypeScript. It provides CRUD endpoints for items with Zod request-body validation, JWT authentication middleware, Helmet security headers, CORS, and structured Morgan HTTP logging. Ships with Docker support and a full Jest test suite.

## Features

- Morgan HTTP request logging with dev format
- Express.js with full TypeScript type safety and strict mode
- Helmet security headers and CORS configuration
- Error-handling middleware chain for consistent error responses
- Request body validation with Zod schemas and structured error responses

## Prerequisites

- Node.js 18 or higher
- npm 9 or higher

## Installation

```bash
git clone https://github.com/yinonbyjj/orbit-kit.git
cd orbit-kit
npm install
cp .env.example .env  # then edit with your settings
```

## Usage

```bash
# Start the development server (auto-reload on changes)
npm run dev

# The API will be available at http://localhost:3000
curl http://localhost:3000/api/health
# => {"status":"ok","timestamp":"2024-01-15T10:30:00Z"}

# Create an item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Widget","value":9.99}'

# List all items
curl http://localhost:3000/api/items

# Run tests
npm test

# Build for production
npm run build && npm start
```

## Project Structure

```
orbit-kit/
├── src/
│   ├── index.ts
│   └── routes/items.ts
├── tests/
│   └── items.test.ts
├── package.json  tsconfig.json  Dockerfile  .env.example
├── README.md  LICENSE  CHANGELOG.md  CONTRIBUTING.md  CODE_OF_CONDUCT.md
├── .github/
│   ├── workflows/ci.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
└── .gitignore
```

## Running Tests

```bash
npm test
# with coverage
npm test -- --coverage
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

Quick start:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and run tests (see [Running Tests](#running-tests) above)
4. Commit with a clear message: `git commit -am 'Add: my feature'`
5. Push to your fork: `git push origin feature/my-feature`
6. Open a Pull Request

Please ensure all tests pass before submitting a pull request.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## License

This project is licensed under the Apache-2.0 -- see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 chen kumar.
