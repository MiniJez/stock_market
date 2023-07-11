export interface DataBaseWrapper {
    find: (filter: any) => Promise<any[]>;
    create: (data: any) => Promise<any>;
    update: (id: string, data: any) => Promise<any | null>;
    delete: (id: string) => Promise<any | null>;
}