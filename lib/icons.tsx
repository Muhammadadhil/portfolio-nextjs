import type React from "react"
import { Code2, FileCode, Database, Server, Globe, Cpu, Github, GitBranch, MonitorSmartphone, Layers, BarChart, Cloud, Rabbit, Home } from "lucide-react";

export function getIconComponent(iconName: string) {
  const icons: Record<string, React.ComponentType<any>> = {
      react: (props: any) => <Code2 {...props} />,
      typescript: (props: any) => <FileCode {...props} />,
      javascript: (props: any) => <FileCode {...props} />,
      html: (props: any) => <Code2 {...props} />,
      css: (props: any) => <Code2 {...props} />,
      tailwind: (props: any) => <Code2 {...props} />,
      nodejs: (props: any) => <Server {...props} />,
      express: (props: any) => <Server {...props} />,
      mongodb: (props: any) => <Database {...props} />,
      api: (props: any) => <Globe {...props} />,
      graphql: (props: any) => <Cpu {...props} />,
      git: (props: any) => <GitBranch {...props} />,
      github: (props: any) => <Github {...props} />,
      vscode: (props: any) => <MonitorSmartphone {...props} />,
      docker: (props: any) => <Layers {...props} />,
      aws: (props: any) => <Cloud {...props} />,
      analytics: (props: any) => <BarChart {...props} />,
      rabbitmq: (props: any) => <Rabbit {...props} />,
      Nextjs: (props: any) => <Code2 {...props} />,
  };

  return icons[iconName] || null
}

