import { SignIn } from "@clerk/nextjs/app-beta/client";

function SignInPage() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <SignIn
        path="/auth/sign-in"
        signUpUrl="/auth/sign-up"
        afterSignInUrl="/dashboard"
        afterSignUpUrl="/dashboard"
        redirectUrl="/dashboard"
      />
    </div>
  );
}

export default SignInPage;
