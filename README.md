## 📄 Documentation

Check **[`Dynamic-Url-Managment_Documentation.docx`](./Dynamic-Url-Managment_Documentation.docx)** in this repository for **step-by-step instructions on how it works**.

---

## 📥 Download Hook

Download [`react-config-hook`](https://www.npmjs.com/package/react-config-hook) from this npm package using [`npm i react-config-hook`] or [`yarn add react-config-hook`] and **use it directly in your React projects** for dynamic backend URL management without hardcoding.

## ⚡ Usage Example

```jsx
import { useConfig } from 'react-config-hook';

function Login() {
  const { config, error, loading } = useConfig();

  if (loading) return <div>Loading configuration...</div>;
  if (error) return <div>Error loading config: {error}</div>;

  const serviceUrl = config.<keyname-you-enter-in-service-via-add : note- remove <> this. like example bottom i show.>;
  const serviceUrl = config.ms; // like this

  const handleLogin = async () => {
    await axios.post(`${serviceUrl}/login`, { username, password });
    // continue your login flow...
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}
```

✅ **Import it into your components, fetch your dynamic service URLs, and replace hardcoded URLs with environment-based, managed endpoints easily.**

## ⚙️ Environment Configuration (`.env` Setup)

To enable **dynamic backend URL management in your React projects using `useConfig`**, add the following to your project’s `.env` file:

```env
REACT_APP_APP_NAME=Your_App_Name_From_Admin_Panel
REACT_APP_ENVIRONMENT=Your_Environment_From_Admin_Panel
REACT_APP_CONFIG_API_KEY=Your_API_Key

⚠️ **Note:**  
Replace the values above with your actual **App Name, Environment, and API Key** from your admin panel.

---
```

### 🛠️ How to Retrieve Your API Key

1️⃣ Go to the [Dynamic URL Management Admin Panel](https://dynamic-url-managment.vercel.app).  
2️⃣ Login using your admin credentials.  
3️⃣ Navigate to your project and copy your **API Key**.  
4️⃣ Paste the copied API Key into your `.env` under:

### ©️ Copyright & Support

**◉** **Developed by Harshal Jariwala.**

**◉** **GitHub:** [Hjgaming](https://github.com/hjgaming)

**◉** **LinkedIn:** [Harshal Jariwala](https://www.linkedin.com/in/harshal-jariwala-1101b2309)

**◉** **Support Email:** dynurl.helpdesk@gmail.com

**◉** **Discord Community:** [Join Here](https://discord.gg/cBM7e87KYj)

```
For feature requests, issues, or guidance on using Dynamic URL Management, feel free to reach out on any of the platforms above.
```

### ⚖️ Legal Notice

```js
This project is protected under applicable copyright and intellectual property laws.

✅ You are allowed to fork, clone, and use this project for personal and company projects with proper credit to the original author.

❌ Unauthorized attempts to hack, exploit vulnerabilities, or use this project for malicious activities are strictly prohibited.

Violations will result in access restrictions, potential bans from support channels, and legal action if necessary.

By using or cloning this project, you agree to these terms and to use this system responsibly for its intended purpose of clean, scalable, dynamic backend URL management.
```
