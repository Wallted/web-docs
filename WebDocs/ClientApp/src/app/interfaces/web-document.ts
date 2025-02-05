export class WebDocument {
    id: number;
    name: string;
    content: string;
    lastModifiedDate: Date;

    constructor(userId) {
        this.id = 0;
        this.name = '';
        this.content = '';
        this.lastModifiedDate = new Date();
    }
}