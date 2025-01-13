import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const handleReload = () => {
    router.push("/").then(() => {
      router.reload();
    });
  };
  return (
    <aside className="pl-16 pt-10 text-3xl font-bold">
      <div>
        <button onClick={handleReload}>
          <div>Ogw&apos;s Portfolio</div>
        </button>
      </div>
      <nav className="mt-16">
        <ul>
          <li className="mt-4 "><Link href="/#about" className="hover:underline">About</Link></li>
          <li className="mt-4"><Link href="/#career" className="hover:underline">Career</Link></li>
          <li className="mt-4"><Link href="/#skills" className="hover:underline">Skills</Link></li>
          <li className="mt-4"><Link href="/#works" className="hover:underline">Works</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;