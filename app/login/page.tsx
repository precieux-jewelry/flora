import Link from "next/link";
import { Suspense } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { LoginForm } from "@/components/auth/login-form";

export const metadata = { title: "Sign in — Flora" };

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back."
      subtitle="Sign in to log shoes, share kits, and save the runs you love."
      footer={
        <>
          New here?{" "}
          <Link href="/signup" className="text-flora-700 font-medium hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
