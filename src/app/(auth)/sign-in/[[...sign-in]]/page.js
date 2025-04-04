import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div>
      <h1>Sign-in Page</h1>
      <SignIn/>
    </div>
  );
}