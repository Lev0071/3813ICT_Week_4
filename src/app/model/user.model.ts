export class User{
    public id:number;
    public name:string;
    public description:string;
    public imagePath:string;
    public password:string = "qwerty";

    constructor(id:number,name:string,desc:string,imagePath:string,){
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}