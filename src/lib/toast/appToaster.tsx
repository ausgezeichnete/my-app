import { Toaster } from "react-hot-toast";
export const AppToaster = () => {
  return (
    <Toaster
      position={"top-left"}
      toastOptions={{
        duration: 5000,
        style: {
          fontSize: "1.125rem",
          padding: "1rem",
          borderRadius: "0.5rem",
          border: "1px solid #e0e0e0",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        },
      }}
    />
  );
};
