import { useState } from "react";
import {
  Button,
  Input,
  Loader,
  Toast,
  Modal,
} from "../components/ui";

function ComponentsDemo() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-page" : "light-page"}>
      <div className="demo-container">
        <h1>UI Components Demo</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-btn"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <section>
          <h2>Input</h2>
          <Input placeholder="Enter your name" />
        </section>

        <section>
          <h2>Buttons</h2>
          <Button>Primary Button</Button>
          <Button>Secondary Button</Button>
        </section>

        <section>
          <h2>Loader</h2>
          <Loader />
        </section>

        <section>
          <h2>Toast</h2>
          <Toast message="This is a toast message!" />
        </section>

        <section>
          <h2>Modal</h2>
          <Modal
            title="Modal Title"
            content="This is a modal component."
          />
        </section>
      </div>
    </div>
  );
}

export default ComponentsDemo;
