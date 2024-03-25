import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div class="hidden lg:flex">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={100}
          height={24}
          alt="Protocol"
          class="h-6 w-auto"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
