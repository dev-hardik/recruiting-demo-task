# Recruiting Task

This project is a Next.js application that demonstrates filtering functionality using Tailwind CSS for design. It replicates a specific filtering interface as outlined in the provided requirements.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Folder Structure](#folder-structure)
4. [Project Explanation](#project-explanation)

---

### Installation 

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dev-hardik/recruiting-demo-task
   cd recruiting-task
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed. Then, install dependencies using npm or yarn.

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   After completing the installation steps, you can start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

##### This will start the development server at http://localhost:3000

### Folder structure

```markdown
recruiting-task/
├── @core/
│   ├── interfaces       # All types interfaces
│   │   ├── index.ts     
│   ├── schema           # All related schemas
│   │   ├── schema.ts    
│    
├── components/          # React components
│   ├── dashboard        # All dashboard related components
│   ├── utils            # All generic components
│
├── lib/
│   ├── api              # Mock data
│   │   ├── mock-data.tsx
│
├── app/                 # Next.js app (app router)
│   ├── layout.tsx       # Root entry point
│   └── page.tsx         # Main page
│   └── ...              # Other pages if any
│
├── public/              # Static assets
│   └── ...              # Images, etc.
│
├── README.md            # This file
└── package.json         # Node.js dependencies and scripts
```

### Project Explanation
This project is built with Next.js and Tailwind CSS for styling. It includes:

**Components**: Various React components (components/table.tsx, components/dashboard/filters.tsx, etc.) structured in the components directory.

**Pages**: Next.js pages in the app directory, with layout.tsx serving as the main entry point.

**Data Handling**: Sample data (lib/api/mock-data.tsx) and data schema (schema.ts) used for populating and filtering the data table.

**Styling**: Tailwind CSS setup in the styles directory for responsive and utility-first styling.
