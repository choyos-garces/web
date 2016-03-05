export class Partner {
    public logo : string;
    public url : string;
    public name : string;

    constructor(l : string, u : string, n : string) {
        this.name = n;
        this.logo = l;
        this.url = u;
    }
}