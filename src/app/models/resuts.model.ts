export class Results {

    public set Id(x: number){
        this.id = x;
    }
    public get Id(): number{
        return this.id;
    }
    private id: number;

    public set Image(x: string){
        this.image = x;
    }
    public get Image(): string{
        return this.image;
    }
    private image: string;

    public set Tittle(x: string){
        this.tittle = x;
    }
    public get Tittle(): string{
        return this.tittle;
    }
    private tittle: string;

    public set Link(x: string){
        this.link = x;
    }
    public get Link(): string{
        return this.link;
    }
    private link: string;
    



}