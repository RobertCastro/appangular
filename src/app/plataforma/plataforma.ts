export class Plataforma {
    id:number;
    name:string;
    url:string;
    movies: Array<Movie> ;

    
    public constructor(id:number, name:string, url:string, movies: Array<Movie>){
        this.id = id;
        this.name = name;
        this.url = url;
        this.movies = movies;
    }

    public darPelis(): Array<Movie>{
        return this.movies;
    }

}

//TODO: revisar esta clase no deberia estar aca
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