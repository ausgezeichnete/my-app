import "./App.css";
import { queryClient } from "./lib/queryClient";
import { AppToaster } from "./lib/toast/appToaster";
import { AppRouter } from "./routes/layouts/Router";
import { QueryClientProvider } from "@tanstack/react-query";
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AppLayout /> */}
      <AppToaster />
      <AppRouter />
    </QueryClientProvider>
  );
}
