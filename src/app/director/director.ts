export class Director {
    id: string;
    name: string;
    photo: string;
    nationality: string;
    birthDate: Date;
    formattedBirthDate: string;
    biography: string;

    public constructor(
        id : string,
        name: string,
        photo: string,
        nationality: string,
        birthDate: Date,
        formattedBirthDate: string,
        biography: string
    )
    {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.nationality = nationality;
        this.birthDate = birthDate;
        this.formattedBirthDate = formattedBirthDate;
        this.biography = biography;
    }

}
