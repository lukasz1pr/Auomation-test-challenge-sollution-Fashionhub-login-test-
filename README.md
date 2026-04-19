# Auomation test challenge sollution (Fashionhub login test)

This repository contains an automated testing framework for the FashionHub application. It is built using **Playwright** and **TypeScript**, adhering to industry best practices to prioritize quality, maintainability, and scalability.

## Architecture & Design Decisions

- **Framework:** Playwright (Native cross-browser support, parallel execution, and auto-waiting).
- **Language:** TypeScript (Provides strict typing and serves as the compiled language requirement).
- **Design Pattern:** Page Object Model (POM) to separate UI locators from test logic, ensuring high maintainability.
- **Environment Management:** A hybrid configuration approach. Environments can be passed via CLI (using `cross-env`) or fall back to a default specified in `config.json`.
- **Security:** Sensitive credentials are kept out of version control using `dotenv`.

## Prerequisites

Before running the framework, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)
- [Docker](https://www.docker.com/) (Required to run the local target environment)

## Setup & Installation

**1. Clone the repository and install dependencies:**
```bash
npm install
```

**2. Install Playwright browsers:**
```bash
npx playwright install --with-deps
```

**3. Configure Environment Variables:**
Copy the example environment file and update it with the required credentials.
```bash
cp .env.example .env
```
*(Note: Ensure `MY_USERNAME` and `MY_PASSWORD` are populated in your new `.env` file.)*

## Starting the Local Application

To test against the local environment, you must first spin up the Fashionhub Demo App using Docker. Run the Docker image provided in the challenge description so that the application is accessible at `http://localhost:4000/fashionhub/`.

## Build Procedure

Since this project uses TypeScript (a compiled language), you can verify the compilation build using the following command. This ensures there are no type errors before execution:
```bash
npm run build
```

## Running the Tests

The framework is designed to seamlessly switch between environments. The target URL is resolved by checking the CLI `TEST_ENV` variable first. If omitted, it gracefully falls back to the default environment defined in `config.json`.

**Run against Local (requires Docker container running):**
```bash
npm run test:local
```

**Run against Staging:**
```bash
npm run test:staging
```

**Run against Production:**
```bash
npm run test:prod
```

**Run using the default fallback (Production):**
```bash
npx playwright test
```

### Additional Test Commands
- **Show the HTML Report:** `npx playwright show-report`
- **Run in UI Mode (Great for debugging):** `npx playwright test --ui`
- **Run specific tagged tests:** `npx playwright test --grep @smoke`

## Implemented Scenarios

**Feature: Authentication**
- ✅ **Happy Path:** Verified successful login workflow using valid credentials and validated the dynamic welcome message.
- ✅ **Sad Path (Bonus):** Added negative test scenarios for invalid usernames and passwords.
