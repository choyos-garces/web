export class PipeItem {
    private title : string;
    private message : string;
    private image : string;

    constructor(title : string, message : string, image : string) {

        let baseURL = "img/pipeline/";

        this.title = title;
        this.image = baseURL + image;
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