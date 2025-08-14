# Traq Development Makefile
# This file contains all development commands and automation

.PHONY: help install-hooks check lint type-check test format lint-fix dev build clean install-deps setup-db

# Default target
help:
	@echo "Available commands:"
	@echo "  install-hooks  - Install development hooks and dependencies"
	@echo "  check          - Run all checks (lint, type-check, test)"
	@echo "  lint           - Run ESLint on all files"
	@echo "  type-check     - Run TypeScript type checking"
	@echo "  test           - Run test suite"
	@echo "  format         - Format code with Prettier"
	@echo "  lint-fix       - Fix linting issues automatically"
	@echo "  dev            - Start development server"
	@echo "  build          - Build for production"
	@echo "  clean          - Clean build artifacts"
	@echo "  install-deps   - Install all dependencies"
	@echo "  setup-db       - Setup database schema"

# Install development hooks and dependencies
install-hooks: install-deps
	@echo "Installing development hooks..."
	@chmod +x pre-commit
	@chmod +x pre-push
	@echo "✅ Development hooks installed successfully!"

# Install all dependencies
install-deps:
	@echo "Installing dependencies..."
	yarn install
	@echo "✅ Dependencies installed successfully!"

# Run all checks
check: lint type-check test
	@echo "✅ All checks passed!"

# Run linting
lint:
	@echo "Running ESLint..."
	yarn lint
	@echo "✅ Linting completed!"

# Run type checking
type-check:
	@echo "Running TypeScript type checking..."
	yarn type-check
	@echo "✅ Type checking completed!"

# Run tests
test:
	@echo "Running tests..."
	yarn test
	@echo "✅ Tests completed!"

# Format code
format:
	@echo "Formatting code with Prettier..."
	yarn format
	@echo "✅ Code formatting completed!"

# Fix linting issues
lint-fix:
	@echo "Fixing linting issues..."
	yarn lint:fix
	@echo "✅ Linting issues fixed!"

# Start development server
dev:
	@echo "Starting development server..."
	yarn dev

# Build for production
build:
	@echo "Building for production..."
	yarn build
	@echo "✅ Build completed!"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf .next
	rm -rf dist
	rm -rf node_modules/.cache
	@echo "✅ Clean completed!"

# Setup database (helper command)
setup-db:
	@echo "Database setup instructions:"
	@echo "1. Go to your Supabase Dashboard"
	@echo "2. Navigate to SQL Editor"
	@echo "3. Copy and paste the content from app/lib/supabase/schema.sql"
	@echo "4. Click 'Run' to create all tables"
	@echo "5. Copy and paste the content from app/lib/supabase/populate-sample-data.sql"
	@echo "6. Click 'Run' to populate with sample data"
	@echo "✅ Database setup instructions displayed!"

# Development environment setup
setup: install-hooks setup-db
	@echo "✅ Development environment setup completed!"
	@echo "Next steps:"
	@echo "1. Copy env.example to .env.local"
	@echo "2. Configure your environment variables"
	@echo "3. Run 'make dev' to start development"

# Quick start for new contributors
quick-start: setup
	@echo "🎉 Welcome to Traq development!"
	@echo "Your development environment is ready."
	@echo "Run 'make dev' to start coding!"
