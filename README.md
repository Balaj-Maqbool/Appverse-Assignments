# 📦 React Component Library Demo

This GitHub repository contains two parts:

1. **`my-components-lib/`** – a reusable React component library created by **Balaj**
2. **`using-my-components-lib/`** – a sample React project demonstrating how to use the component library

---

## 📁 1. My Components Library (`my-components-lib/`)

A reusable React UI component library with the following components:

- ✅ `Button`
- ✅ `Card`
- ✅ `Modal`

### 🔧 Installation (from another local project)
```bash
npm install ../my-components-lib
```

### 📥 Importing Components
```js
import { Button, Card, Modal } from 'my-components-lib';
```

### 🧪 Usage Example
```jsx
<Button label="Click Me" variant="primary" onClick={() => console.log("Clicked!")} />

<Card title="Welcome">
  <p>This is a reusable Card component.</p>
</Card>

<Modal isOpen={true} onClose={() => console.log("Closed!")}>
  <p>This is a Modal!</p>
</Modal>
```

### 🛠 Component Props

#### 🔘 Button
- `label` (string)
- `onClick` (function)
- `variant` ("primary" | "secondary")

#### 📦 Card
- `title` (string)
- `children` (ReactNode)

#### 💬 Modal
- `isOpen` (boolean)
- `onClose` (function)
- `children` (ReactNode)

### ▶️ Run Library Dev Server
```bash
cd my-components-lib
npm install
npm run dev
```

---

## 📁 2. Using the Component Library (`using-my-components-lib/`)

This React app demonstrates usage of `my-components-lib` via local npm install.

### ▶️ Run Demo App
```bash
cd using-my-components-lib
npm install
npm run dev
```

### 💡 Component Usage Example
```jsx
import { Button, Card, Modal } from 'my-components-lib';

<Card title="Hello Balaj!">
  <Button label="Open Modal" onClick={() => setOpen(true)} />
</Card>

<Modal isOpen={open} onClose={() => setOpen(false)}>
  <p>This is a reusable Modal</p>
</Modal>
```

> ⚠️ Make sure the component library folder (`my-components-lib`) exists next to the demo project.

---

## 👨‍💻 Author

Built with ❤️ by **Balaj Maqbool**
