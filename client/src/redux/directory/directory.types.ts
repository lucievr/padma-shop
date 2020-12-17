export interface DirectoryItem {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export interface directoryState {
  readonly sections: DirectoryItem[];
}
