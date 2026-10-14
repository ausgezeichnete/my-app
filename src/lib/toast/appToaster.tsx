import { Toaster } from "react-hot-toast";
// AppToaster is a component that renders a Toaster component from the react-hot-toast library. It is used to display toast notifications in the application.
export const AppToaster = () => {
  return (
    <Toaster
      position={"top-center"}
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
