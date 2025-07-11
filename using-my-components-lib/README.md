# 🧪 Using My Components Library

This React project demonstrates how to **import and use components** from a custom component library (`my-components-lib`) built by Balaj.

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

---

## 📥 How It Works

This project installs the custom component library using:

```bash
npm install ../my-components-lib
```

> Note: You must have the `my-components-lib` folder next to this one for local installation to work.

---

## 💡 Importing Components

```js
import { Button, Card, Modal } from 'my-components-lib';
```

Then use them in your React app like:

```jsx
<Button label="Open Modal" onClick={() => setOpen(true)} />
<Card title="Hello Balaj">Reusable content here.</Card>
<Modal isOpen={open} onClose={() => setOpen(false)}>Modal content</Modal>
```

---

## 🔗 Component Library Location

This project uses the component library from:
```
../my-components-lib
```

Ensure it's present before running the app.

---

## 👨‍💻 Created By

**Balaj Maqbool**
