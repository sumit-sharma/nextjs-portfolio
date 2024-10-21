import { Button } from "@/components/ui/button";
import { Atom, Menu, Moon, Sun, SunMoon } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="border fixed  w-full py-2 px-5 bg-white-500">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
          <div className="flex">
            <span>SUMIT SHARMA</span>
          </div>
          <ul className="md:flex mx-4 gap-6 hidden">
            <li className="inline-flex">Home</li>
            <li className="inline-flex">About</li>
            <li className="inline-flex">Projects</li>
            <li className="inline-flex">Contact Us</li>
          </ul>
          <div className="flex">
            <span className="inline-flex">
              <Sun fill="white" />
              {/* <Moon fill="white"  /> */}
            </span>
            <span className="inline-flex md:hidden">
              <Menu />
            </span>
            <a href="#">
              <Button variant="outline">Let&apos;s Connect</Button>
              </a>

          </div>
        </nav>
      </header>
    </>
  );
}
