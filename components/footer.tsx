import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
      <footer className="w-full border-t bg-background py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
              <p className="text-center text-sm text-muted-foreground md:text-left">© {new Date().getFullYear()} Muhammad Adhil. All rights reserved.</p>
              <div className="flex items-center gap-4">
                  <Link href="https://github.com/muhammadadhil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://linkedin.com/in/muhammadadhil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:muhammadadhil934@gmail.com" className="text-muted-foreground hover:text-foreground">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                  </Link>
              </div>
          </div>
      </footer>
  );
}

