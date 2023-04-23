import { SignUp } from "@clerk/nextjs/app-beta";

function SignUpPage() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <SignUp
        path="/auth/sign-up"
        signInUrl="/auth/sign-in"
        afterSignInUrl="/dashboard"
        afterSignUpUrl="/dashboard"
        redirectUrl="/dashboard"
      />
    </div>
  );
}

export default SignUpPage;
