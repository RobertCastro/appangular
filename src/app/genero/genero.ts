export class Genero {
    type:string;
    movies: Array<Movie> = [];

    public constructor(type:string, movies: Array<Movie>){
        this.type = type;
        this.movies = movies;
    }

    public darPelis(): Array<Movie>{
        return this.movies;
    }

}

export class Movie{
    id: number;
    title: string;
    poster: string;
    duration: number;
    country: string;
    releaseDate: Date;
    popularity: number;

    public constructor(id:number, title:string, poster:string, duration:number, country:string, releaseDate:Date, popularity:number){
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.duration = duration;
        this.country = country;
        this.releaseDate = releaseDate;
        this.popularity = popularity;
    }

    
}