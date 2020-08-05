export interface Image {
    Containers: number;
    Created: number;
    Id: string;
    Labels: string;
    ParentId: string;
    RepoDigests: string;
    RepoTags: string[];
    SharedSize: number;
    Size: number;
    VirtualSize: number;
}
