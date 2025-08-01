# Copilot Instructions for AI Agents

## Project Overview
This is a Node.js backend structured for RESTful API development, likely for an e-commerce or order management system. The architecture is modular, separating concerns into models, controllers, and routes.

## Architecture & Data Flow
- **Entry Point:** `index.js` initializes the Express app and wires up routes.
- **Routes:** Defined in `routes/` (e.g., `userRoute.js`, `productRoute.js`, `orderRoute.js`). Each route file imports its corresponding controller.
- **Controllers:** Located in `controllers/`. Controllers handle request logic and interact with models.
- **Models:** Located in `models/`. Models define data structures and interface with the database (likely Mongoose for MongoDB, but check for specifics).
- **Configuration:** Deployment config is in `vercel.json`.

## Developer Workflows
- **Start Server:**
  - Common: `node index.js` or `npm start` (check `package.json` for scripts).
- **Dependencies:**
  - Managed via `package.json` and `package-lock.json`. Use `npm install` to sync dependencies.
- **Testing:**
  - No test files detected. If adding tests, follow the modular structure (e.g., `tests/controllers/userController.test.js`).
- **Debugging:**
  - Use VS Code or Node.js debugging tools. Entry point is `index.js`.

## Project-Specific Patterns
- **File Naming:**
  - Singular for models (`userModel.js`), plural for controllers/routes (`userController.js`, `userRoute.js`).
- **Route-Controller-Model Convention:**
  - Each route imports its controller, which imports its model. Example:
    - `routes/userRoute.js` → `controllers/userController.js` → `models/userModel.js`
- **Error Handling:**
  - Typically handled in controllers. Check for custom error middleware in `index.js`.
- **External Integrations:**
  - Deployment via Vercel (`vercel.json`).
  - Database integration details are in models (look for Mongoose or other ODM usage).

## Integration Points
- **Adding New Features:**
  - Add a model in `models/`, a controller in `controllers/`, and a route in `routes/`. Wire them up in `index.js`.
- **Environment Variables:**
  - Not detected, but if needed, use `.env` and `dotenv`.

## Examples
- To add a new resource (e.g., `Category`):
  1. Create `models/categoryModel.js`.
  2. Create `controllers/categoryController.js`.
  3. Create `routes/categoryRoute.js`.
  4. Register the route in `index.js`.

## Key Files & Directories
- `index.js`: App entry, route registration
- `routes/`: API endpoints
- `controllers/`: Business logic
- `models/`: Data schema & DB logic
- `vercel.json`: Deployment config

---
**Update this file as project conventions evolve.**
