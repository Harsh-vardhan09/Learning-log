import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg flex items-center justify-center w-screen h-screen ">
      <div>
        TODO application
        <br />
        <Link className="border border-gray-200" href="/signin">
          Sign in
        </Link>
        <br />
        <Link className="border border-gray-200" href="/sign up">
          Signup
        </Link>
      </div>
    </div>
  );
}
