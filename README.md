# API First with TypeSpec, OpenAPI, React/TanStack and Microsoft Dynamics 365 Business Central

This repository contains the complete source code for the article series published on Medium about building type-safe APIs for Microsoft Dynamics 365 Business Central using TypeSpec and consuming them with React/TanStack Query.

## 📚 Article Series

- [Part 1: TypeSpec & OpenAPI Generation](https://medium.com/@hpeide/api-first-with-typespec-openapi-react-tanstack-and-microsoft-dynamics-365-business-central-part-5b034f1dbfd1)
- Part 2: React Frontend with TanStack Query *(Coming soon)*

## 🎯 What This Project Demonstrates

- **API-First Development**: Define your Business Central API contracts using TypeSpec
- **End-to-End Type Safety**: From AL/OData endpoints to React frontend
- **OpenAPI Generation**: Automatically generate OpenAPI 3.0 specifications from TypeSpec
- **Type-Safe React**: Consume BC APIs with full TypeScript support using TanStack Query

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Access to a Microsoft Dynamics 365 Business Central environment (for testing)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/typespec-bc-api.git
cd typespec-bc-api

# Install dependencies
npm install

# Compile TypeSpec to OpenAPI
npm run tsp:compile

# Watch mode for development
npm run tsp:watch
```

## 🔧 Available Scripts

- `npm run tsp:compile` - Compile TypeSpec to OpenAPI
- `npm run tsp:watch` - Watch mode for TypeSpec files
- `npm run tsp:format` - Format TypeSpec files

## 📖 What You'll Learn

1. **Setting up TypeSpec** for Business Central API definitions
2. **Modeling OData responses** with proper type safety
3. **Generating OpenAPI specs** automatically
4. **Consuming BC APIs** in React with TanStack Query *(Part 2)*
5. **Implementing $expand** and other OData features

## 🏗️ Example: Sales Order API

This project demonstrates modeling the Business Central Sales Order API, including:

- Sales Order headers with all properties
- Sales Order lines with $expand support
- Proper OData response structures (@odata.context, @odata.count)
- Type-safe query parameters

## 🤝 Contributing

Found an issue or have a suggestion? Feel free to open an issue or submit a pull request!

## 📝 License

MIT

## 👤 Author

**Hans Philip Eide**
- GitHub: [@hpeide](https://github.com/@hpeide)
- Medium: [@hpeide](https://medium.com/@hpeide)
- LinkedIn: [@hpeide](https://linkedin.com/in/hpeide)

## 📚 Related Resources

- [TypeSpec Documentation](https://typespec.io/)
- [Business Central API Reference](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)