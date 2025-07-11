# 🧩 My Components Library

A reusable React UI component library built by **Balaj**, containing:

- ✅ Button
- ✅ Card
- ✅ Modal

Designed to be reused across multiple React projects.

---

## 📦 Installation (for use in other projects)

### Local installation from file system:

In your other project folder:
```bash
npm install ../my-components-lib
```

Then you can import like this:
```js
import { Button, Card, Modal } from 'my-components-lib';
```

---

## 🧪 Usage Example

```jsx
<Button label="Click Me" variant="primary" onClick={() => console.log("Clicked!")} />

<Card title="Welcome">
  <p>This is a reusable Card component.</p>
</Card>

<Modal isOpen={true} onClose={() => console.log("Closed!")}>
  <p>This is a Modal!</p>
</Modal>
```

---

## 🛠 Component List

### Button Props:
- `label` (string)
- `onClick` (function)
- `variant` (primary | secondary)

### Card Props:
- `title` (string)
- `children` (ReactNode)

### Modal Props:
- `isOpen` (boolean)
- `onClose` (function)
- `children` (ReactNode)

---

## 🔄 Development

```bash
npm install
npm run dev
```

Feel free to extend the library with more components.

---

## 👨‍💻 Author

Created by **Balaj Maqbool**
