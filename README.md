# API First with TypeSpec, OpenAPI, React/TanStack and Microsoft Dynamics 365 Business Central

This repository contains the complete source code for the article series published on Medium about building type-safe APIs for Microsoft Dynamics 365 Business Central using TypeSpec and consuming them with React/TanStack Query.

## 📚 Article Series

- [Part 1: TypeSpec & OpenAPI Generation](https://medium.com/@hpeide/api-first-with-typespec-openapi-react-tanstack-and-microsoft-dynamics-365-business-central-part-5b034f1dbfd1)
- [Part 2: React Frontend with TanStack Query](https://medium.com/@hpeide/api-first-with-typespec-openapi-react-tanstack-and-microsoft-dynamics-365-business-central-part-7b4ed5eaab3d)

## 🎯 What This Project Demonstrates

- **API-First Development**: Define your Business Central API contracts using TypeSpec
- **End-to-End Type Safety**: From AL/OData endpoints to React frontend
- **OpenAPI Generation**: Automatically generate OpenAPI 3.0 specifications from TypeSpec
- **Type-Safe React**: Consume BC APIs with full TypeScript support using TanStack Query
- **Automatic Type Generation**: Generate TypeScript types directly from OpenAPI specs
- **Mock Data Support**: Develop against mock Business Central responses

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/sn4h/vite-tanstack-typespec-openapi.git
cd vite-tanstack-typespec-openapi

# Install dependencies
npm install

# Build the complete API (TypeSpec → OpenAPI → TypeScript types)
npm run api:build

# Start development server
npm run dev
```

## 📁 Project Structure
```
.
├── api-doc/
│   ├── src/
│   │   ├── main.tsp              # Main TypeSpec entry point
│   │   └── SalesOrder.tsp        # Sales Order API definitions
│   └── tspconfig.yaml            # TypeSpec configuration
├── public/
│   ├── definition/
│   │   └── openapi.yaml          # Generated OpenAPI specification
│   └── bc-sales-order-data.json  # Mock Business Central data
├── src/
│   ├── @types/
│   │   └── openapi.d.ts          # Generated TypeScript types
│   ├── lib/
│   │   └── axios-client.ts       # Type-safe API client
│   └── routes/
│       └── index.tsx             # Main route with TanStack Query
└── package.json
```

## 🔧 Available Scripts

### TypeSpec & API

- `npm run tsp:compile` - Compile TypeSpec to OpenAPI
- `npm run tsp:watch` - Watch mode for TypeSpec files
- `npm run tsp:format` - Format TypeSpec files
- `npm run api:build` - Complete build: TypeSpec → OpenAPI → TypeScript types

### Development

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📖 What You'll Learn

### Part 1: TypeSpec & OpenAPI
1. Setting up TypeSpec for Business Central API definitions
2. Modeling OData responses with proper type safety
3. Generating OpenAPI 3.0 specs automatically
4. Implementing `$expand` and other OData features

### Part 2: React & TanStack Query
1. Generating TypeScript types from OpenAPI specs
2. Creating type-safe API clients with openapi-client-axios
3. Using TanStack Query for server state management
4. Building React components with full type safety
5. Working with mock data during development

## 🏗️ Example: Sales Order API

This project demonstrates modeling the Business Central Sales Order API, including:

- **Sales Order headers** with essential properties (number, customer, totals)
- **Sales Order lines** with `$expand` support for nested data
- **OData response structures** (@odata.context, @odata.count)
- **Type-safe query parameters** with IntelliSense support
- **Mock data** for development without Business Central instance

### Type Safety Flow
```
TypeSpec Definition → OpenAPI Spec → TypeScript Types → React Components
```

When the API changes:
1. Update TypeSpec models
2. Run `npm run api:build`
3. TypeScript compiler catches breaking changes
4. Fix components before deployment

## 🔑 Key Technologies

- **[TypeSpec](https://typespec.io/)** - API definition language
- **[TanStack Query](https://tanstack.com/query)** - Async state management
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
- **[openapi-client-axios](https://github.com/openapistack/openapi-client-axios)** - Type-safe API client
- **[Vite](https://vitejs.dev/)** - Fast build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

## 🤝 Contributing

Found an issue or have a suggestion? Feel free to open an issue or submit a pull request!

## 📝 License

MIT

## 👤 Author

**Hans Philip Eide**
- GitHub: [@sn4h](https://github.com/sn4h)
- Medium: [@hpeide](https://medium.com/@hpeide)
- LinkedIn: [@hpeide](https://linkedin.com/in/hpeide)

## 🙏 Acknowledgments

- Microsoft for creating TypeSpec and Business Central
- The TanStack team for their amazing libraries
- The Business Central developer community

## 📚 Related Resources

- [TypeSpec Documentation](https://typespec.io/)
- [Business Central API Reference](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [OpenAPI Specification](https://swagger.io/specification/)

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!