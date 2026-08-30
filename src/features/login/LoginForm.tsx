import { LoginForm } from "./LoginForm";
export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#252b3f] p-6">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
