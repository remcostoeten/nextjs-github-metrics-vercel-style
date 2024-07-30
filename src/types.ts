import { ReactNode } from "react";

export interface HoverCardProps {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  className?: string;
}

export interface Activity {
  imageUrl: string;
  content: string;
  timestamp: string;
}

export interface ActivityItemProps {
  imageUrl: string;
  content: React.ReactNode | string;
  time: string;
}

export interface GitHubEvent {
  type: string;
  actor: {
    avatar_url: string;
    login: string;
  };
  repo: {
    name: string;
  };
  created_at: string;
  payload?: any;
}

export interface CardBodyProps {
  productionUrl: string;
  latestUrl: string;
  productionTime: string;
  latestTime: string;
}

export interface UrlInfoProps {
  url: string;
  label: string;
  time: string;
}

export interface RepoData {
  id: string;
  imageUrl: string;
  content: string;
  commitMessage?: string;
  timestamp: number;
}

export interface NavigationProps {
  className?: string;
  rounded?: string;
}

export interface ProjectData {
  name: string;
  html_url: string;
  pushed_at: string;
  updated_at: string;
  full_name: string;
  productionUrl: string;
  latestUrl: string;
  url: string;
  lastDeployedAt: string;
}

export interface ProjectCardProps {
  repoName: string;
  url: string;
}
export type Tab = {
  id: number;
  label: string;
  path: string;
  isActive: boolean;
  content: ReactNode;
};

export type LayoutProps = {
  children: ReactNode;
};

export interface RepoData {
  id: string;
  imageUrl: string;
  type: string;
  repoName: string;
  content: string;
  timestamp: string;
  payload: any;
}
