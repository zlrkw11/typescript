import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const Register = async () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark: bg-black">
      <h2>Register page</h2>
      <form>
        <label>First Name</label>
        <Input
          id="firstname"
          placeholder="first name"
          type="text"
          name="firstname"
        />
        <label>Last Name</label>
        <Input
          id="lastname"
          placeholder="last name"
          type="text"
          name="lastname"
        />
        <Label>Email Address</Label>
        <Input id="email" placeholder="email" type="text" name="email" />
        <Label>Password</Label>
        <Input
          id="password"
          placeholder="password"
          type="text"
          name="password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
