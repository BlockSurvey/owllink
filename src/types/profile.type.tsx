export interface Profiles {
  profile: Profile[];
}

export interface Profile {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}
