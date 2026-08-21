import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import logoImg from "@/assets/logo.svg";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-3 bg-[#1F263E] ", className)}
      {...props}
    >
      <Card className="h-screen">
        <CardHeader className="flex justify-center ">
          <CardTitle>
            <img src={logoImg} alt="Logo" className="w-100 mx-auto" />
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className=" w-xl mx-auto">
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email" hidden>
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="bg-[#ffffff] text-[#1F263E]"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="Password" hidden>
                    Password
                  </FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-white"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="password"
                  className="bg-[#ffffff] text-[#1F263E]"
                />
              </Field>
              <Field>
                <Button
                  type="submit"
                  className="text-white bg-[#3AA3A3] hover:bg-[#2e8b8b]"
                >
                  Login
                </Button>

                <FieldDescription className="text-center text-white">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
