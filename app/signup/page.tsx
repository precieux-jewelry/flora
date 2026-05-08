import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata = { title: "Create account — Flora" };

export default function SignupPage() {
  return (
    <AuthCard
      title="Join Flora."
      subtitle="A few seconds. Then start logging your rotation."
      footer={
        <>
          Have an account?{" "}
          <Link href="/login" className="text-flora-700 font-medium hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthCard>
  );
}
