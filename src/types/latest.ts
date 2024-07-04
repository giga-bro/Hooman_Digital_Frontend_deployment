export interface LatestItem {
  title: string;
  author: string;
  summary: string;
  sentiment: string;
}

export interface tagType {
  type: "announcements" | "grants_discussions" | "proposals";
}

export interface Latest {
  announcements: LatestItem[];
  grants_discussions: LatestItem[];
  proposals: LatestItem[];
}
