class Contact {
    id?: number;
    first_name: string;
    last_name: string;
    job: string;
    description: string
    constructor(id: number, first_name: string, last_name: string, job: string, description: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.job = job;
        this.description = description;
    }
}

export default Contact;