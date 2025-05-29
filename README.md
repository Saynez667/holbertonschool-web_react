# 📘 TypeScript Project – Holberton School

Welcome to the TypeScript module of the **holbertonschool-web_react** repository!  
This project focuses on mastering TypeScript fundamentals, interfaces, classes, DOM manipulation, namespaces, and more 🚀

---

## 📚 Resources

To get started, make sure you’ve read/watched:

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [TypeScript DOM Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
- [TypeScript Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

---

## 🎯 Learning Objectives

By the end of this project, you should be able to explain (without Google 😉):

- Basic types in TypeScript
- Interfaces, classes, and functions
- DOM manipulation with TypeScript
- Generic types
- Namespaces and declaration merging
- Ambient namespaces and importing external libraries
- Nominal typing in TypeScript

---

## 🛠️ Requirements

- Editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- Files must end with a new line
- Transpilation: Ubuntu 18.04 environment
- Tests: ✅ `jest` (version 24.9.*)
- File extension: `.ts`
- No TypeScript compilation errors or warnings
- A `README.md` at the root of the project ✔️

---

## ⚙️ Configuration Files

Each task folder contains the following:

- `package.json` 📦
- `.eslintrc.js` 🧹
- `tsconfig.json` ⚙️
- `webpack.config.js` 📦

Use these to compile and lint your code.

---

## ✅ Tasks Overview

### 0️⃣ Interface for a Student  
📁 `task_0/`
- Create `Student` interface
- Create and render a table of students in the DOM

### 1️⃣ Teacher Interface  
📁 `task_1/`
- Define `Teacher` interface (with index signature)
- Add optional and readonly properties

### 2️⃣ Director Interface  
📁 `task_1/`
- Extend `Teacher` to `Directors` with additional `numberOfReports` field

### 3️⃣ Print Teachers  
📁 `task_1/`
- Implement `printTeacher` function with interface

### 4️⃣ Student Class  
📁 `task_1/`
- Class implementing interfaces with methods: `workOnHomework`, `displayName`

### 5️⃣ Director & Teacher Interfaces  
📁 `task_2/`
- Create interfaces for both
- Implement logic with `createEmployee` based on salary

### 6️⃣ Type Predicates & Task Execution  
📁 `task_2/`
- Create `isDirector` type predicate
- Implement `executeWork` function

### 7️⃣ String Literal Types  
📁 `task_2/`
- Define literal type `Subjects`
- Function `teachClass(todayClass: Subjects)`

### 8️⃣ Ambient Namespaces  
📁 `task_3/`
- Create type declarations (`crud.d.ts`)
- Use external library (`crud.js`) with typings

### 9️⃣ Namespaces & Declaration Merging  
📁 `task_4/`
- Use `Subjects` namespace
- Merge declarations
- Create subject-specific classes (Cpp, React, Java)

### 🔟 Nominal Typing & Branding  
📁 `task_5/`
- Create branded types `MajorCredits`, `MinorCredits`
- Functions to sum credits safely

---

## 🧪 Running the Project

1. Install dependencies:
```bash
npm install
```
Build the project:

```sh
npm run build
```
Run tests:
```sh
npm test
```
💡 Tips
- Use your IDE’s IntelliSense to validate types and interfaces 🧠

- Keep TypeScript strict mode enabled for better type safety ✅

- Always check the terminal output after building

🧑‍💻 Author
- [Saynez667](https://github.com/Saynez667)