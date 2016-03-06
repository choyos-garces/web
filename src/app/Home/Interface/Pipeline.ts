export class Pipeline {
    private title : string;
    private message : string;
    private image : string;

    constructor(title : string, message : string, image : string) {

        let baseURL = "img/pipeline/";
        let type = ".svg"
        this.title = title;
        this.image = baseURL + image + type;
        this.message = message;
    }

    public getTitle() {
        return this.title;
    }

    public getContent() {
        return this.message;
    }

    public getImage() {
        return this.image;
    }
}