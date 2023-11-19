export class Actor {
    id: string;
    name: string;
    photo: string;
    nationality: string;
    birthDate: Date;
    biography: string;
    formattedBirthDate: string;
  
    public constructor(
      id: string,
      name: string,
      photo: string,
      nationality: string,
      birthDate: Date,
      biography: string,
      formattedBirthDate: string
    ) {
      this.id = id;
      this.name = name;
      this.photo = photo;
      this.nationality = nationality;
      this.birthDate = birthDate;
      this.biography = biography;
      this.formattedBirthDate = formattedBirthDate;
    }
}