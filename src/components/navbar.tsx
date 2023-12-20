import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex h-10 w-10 z-40 font-semibold items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              quality={100}
            />
            <span>Leterhead</span>
          </Link>

          {/* Add mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                className={buttonVariants({ variant: "ghost", size: "sm" })}
                href="/pricing"
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Sign in
              </LoginLink>
              <RegisterLink className={buttonVariants({ size: "sm" })}>
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
