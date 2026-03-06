import "./App.css";
import { RPConfig } from "@react-pdf-kit/viewer";
import { AppPdfViewer } from "./components/AppPdfViewer";

function App() {
  return (
    <RPConfig licenseKey="">
      <div className="container">
        <h1>React PDF Kit Starter Toolkit in React.js, TypeScript and Vite</h1>
        <br />
        <h2>Default Toolbar</h2>
        <AppPdfViewer />
        <h2>Without Toolbar</h2>
        <AppPdfViewer
          showToolbar={false}
          defaultLayoutProps={{
            style: { width: "100%", height: "550px" },
          }}
        />
        <h2>Mobile</h2>
        <AppPdfViewer
          defaultLayoutProps={{
            style: { width: "500px" },
          }}
        />
      </div>
    </RPConfig>
  );
}

export default App;
