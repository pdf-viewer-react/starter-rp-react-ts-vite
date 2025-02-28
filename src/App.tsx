import { RPConfig } from "@pdf-viewer/react";
import { AppPdfViewer } from "./components/AppPdfViewer";

function App() {
  return (
    <RPConfig licenseKey="">
      <div className="container">
        <h1>RP Starter Toolkit: Vite + React</h1>
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
