export class Type {
    name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  }
  
  export class Genre {
    type: Type;
  
    public constructor(type: Type) {
      this.type = type;
    }
  }

  export class Director {
    name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  }
  
  
  export class Movie {
    id: number;
    title: string;
    poster: string;
    duration: number;
    country: string;
    releaseDate: Date;
    popularity: number;
    genre: Genre; 
    director: Director; 

    public constructor(
      id: number,
      title: string,
      poster: string,
      duration: number,
      country: string,
      releaseDate: Date,
      popularity: number,
      genre: Genre,
      director: Director 
    ) {
      this.id = id;
      this.title = title;
      this.poster = poster;
      this.duration = duration;
      this.country = country;
      this.releaseDate = releaseDate;
      this.popularity = popularity;
      this.genre = genre;
      this.director = director; 
    }
  }
  
  