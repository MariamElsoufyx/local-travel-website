phony: website dev
website:
	@echo "Building website..."
	@cd website && npm install && npm run build

dev: 
	@echo "Starting development server..."
	@npm run dev