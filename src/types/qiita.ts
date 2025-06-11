export interface Qiita {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: null;
  team_membership: null;
  organization_url_name: null | string;
  slide: boolean;
}

export interface Tag {
  name: string;
  versions: string[];
}

export interface User {
  description: null | string;
  facebook_id: FacebookID | null;
  followees_count: number;
  followers_count: number;
  github_login_name: null | string;
  id: string;
  items_count: number;
  linkedin_id: LinkedinID | null;
  location: null | string;
  name: string;
  organization: null | string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: null | string;
  website_url: null | string;
}

export enum FacebookID {
  Empty = "",
  ProfilePHPID100006052963505 = "profile.php?id=100006052963505",
}

export enum LinkedinID {
  Empty = "",
  HarukiKondo517073204 = "haruki-kondo-517073204/",
  YumiNanno503712200 = "yumi-nanno-503712200/",
}
