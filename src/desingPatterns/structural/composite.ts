interface FileSystemItem {
    getName(): string;

    getSize(): number;
}

class FileItem implements FileSystemItem {
    constructor(private name: string, private size: number) {
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }
}

class FolderItem implements FileSystemItem {
    private children: FileSystemItem[] = [];

    constructor(private name: string) {
    }

    add(item: FileSystemItem): void {
        this.children.push(item);
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.children.reduce((total, item) => total + item.getSize(), 0);
    }

}
const file1 = new FileItem('file1.txt', 100);
const file2 = new FileItem('foto.png', 1500);

const subFolder = new FolderItem("Imagens")
subFolder.add(file2);

const root = new FolderItem('root');
root.add(subFolder);


