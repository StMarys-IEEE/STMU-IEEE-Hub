// Person class for IEEE members
export class Person {
  private id: string;
  private name: string;
  private role: string;
  private type: 'current' | 'alumni';
  private avatar?: string;
  private bio?: string;
  private funFacts: string[];
  private contributions: string[];
  
  // Contact information
  private contactInfo: {
    email?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
  
  // Alumni-specific information
  private alumniInfo?: {
    graduationYear?: string;
    currentPosition?: string;
    company?: string;
  };

  constructor(
    id: string,
    name: string,
    role: string,
    type: 'current' | 'alumni' = 'current'
  ) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.type = type;
    this.funFacts = [];
    this.contributions = [];
    this.contactInfo = {};
  }

  // Getters
  getId(): string { return this.id; }
  getName(): string { return this.name; }
  getRole(): string { return this.role; }
  getType(): 'current' | 'alumni' { return this.type; }
  getAvatar(): string | undefined { return this.avatar; }
  getBio(): string | undefined { return this.bio; }
  getFunFacts(): string[] { return this.funFacts; }
  getContributions(): string[] { return this.contributions; }
  getContactInfo() { return this.contactInfo; }
  getAlumniInfo() { return this.alumniInfo; }

  // Setters
  setAvatar(avatar: string): Person {
    this.avatar = avatar;
    return this;
  }

  setBio(bio: string): Person {
    this.bio = bio;
    return this;
  }

  addFunFact(fact: string): Person {
    this.funFacts.push(fact);
    return this;
  }

  addContribution(contribution: string): Person {
    this.contributions.push(contribution);
    return this;
  }

  // Contact information methods
  setEmail(email: string): Person {
    this.contactInfo.email = email;
    return this;
  }

  setGitHub(github: string): Person {
    this.contactInfo.github = github;
    return this;
  }

  setInstagram(instagram: string): Person {
    this.contactInfo.instagram = instagram;
    return this;
  }

  setLinkedIn(linkedin: string): Person {
    this.contactInfo.linkedin = linkedin;
    return this;
  }

  // Alumni-specific methods
  setGraduationYear(year: string): Person {
    if (!this.alumniInfo) this.alumniInfo = {};
    this.alumniInfo.graduationYear = year;
    return this;
  }

  setCurrentPosition(position: string): Person {
    if (!this.alumniInfo) this.alumniInfo = {};
    this.alumniInfo.currentPosition = position;
    return this;
  }

  setCompany(company: string): Person {
    if (!this.alumniInfo) this.alumniInfo = {};
    this.alumniInfo.company = company;
    return this;
  }

  // Utility methods
  hasContactInfo(): boolean {
    return Object.keys(this.contactInfo).length > 0;
  }

  hasEmail(): boolean {
    return !!this.contactInfo.email;
  }

  hasGitHub(): boolean {
    return !!this.contactInfo.github;
  }

  hasInstagram(): boolean {
    return !!this.contactInfo.instagram;
  }

  hasLinkedIn(): boolean {
    return !!this.contactInfo.linkedin;
  }

  isAlumni(): boolean {
    return this.type === 'alumni';
  }

  hasAlumniInfo(): boolean {
    return !!this.alumniInfo && Object.keys(this.alumniInfo).length > 0;
  }

  // Convert to JSON format for compatibility with existing code
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      type: this.type,
      avatar: this.avatar,
      bio: this.bio,
      funFacts: this.funFacts,
      contributions: this.contributions,
      email: this.contactInfo.email,
      github: this.contactInfo.github,
      instagram: this.contactInfo.instagram,
      linkedin: this.contactInfo.linkedin,
      graduationYear: this.alumniInfo?.graduationYear,
      currentPosition: this.alumniInfo?.currentPosition,
      company: this.alumniInfo?.company,
    };
  }

  // Static method to create from JSON
  static fromJSON(data: any): Person {
    const person = new Person(data.id, data.name, data.role, data.type);
    
    if (data.avatar) person.setAvatar(data.avatar);
    if (data.bio) person.setBio(data.bio);
    if (data.funFacts) data.funFacts.forEach((fact: string) => person.addFunFact(fact));
    if (data.contributions) data.contributions.forEach((contrib: string) => person.addContribution(contrib));
    
    if (data.email) person.setEmail(data.email);
    if (data.github) person.setGitHub(data.github);
    if (data.instagram) person.setInstagram(data.instagram);
    if (data.linkedin) person.setLinkedIn(data.linkedin);
    
    if (data.graduationYear) person.setGraduationYear(data.graduationYear);
    if (data.currentPosition) person.setCurrentPosition(data.currentPosition);
    if (data.company) person.setCompany(data.company);
    
    return person;
  }
}
