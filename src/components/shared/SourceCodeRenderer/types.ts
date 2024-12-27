interface FileType {
  type: 'file';
  id: string;
  name: string;
  content: string;
}

interface FolderType {
  type: 'folder';
  name: string;
  children: (FileType | FolderType)[];
}

type FileSystemItem = FileType | FolderType;

export type { FileSystemItem, FileType, FolderType };
