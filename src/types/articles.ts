export interface Article {
  _id: string;
  title: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
  bookmarks: any[];
  createdAt: string;
  __v: number;
}
