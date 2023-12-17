export type Person = {
  id: number;
  avatar: string;
  name: string;
  age: number;
  country: string;
  education: string;
  contact: string;
  address: string;
  sex: string;
  skin: string;
  height: number;
  weight: number;
  birthday: string;
  birthplace: string;
  nationality: string;
  religion: string;
  hobby: string;
  maritalStatus: string;
  familyStatus: {
    nameOfSpouse: string;
    childrenNo: number;
    childrenAge: number;
    nameOfFather: string;
    nameOfMother: string;
    ageOfMother: number;
    ageOfFather: number;
  };
  educational: string;
  vocational: string;
  courseCompleted: string;
  specialSkill: string;
  language: {
    english: {
      speaking: string;
      writing: string;
    };
    chinese?: {
      speaking: string;
      writing: string;
    };
    japanese?: {
      speaking: string;
      writing: string;
    };
    vietnamese?: {
      speaking: string;
      writing: string;
    };
    hindi?: {
      speaking: string;
      writing: string;
    };
    tagalog?: {
      speaking: string;
      writing: string;
    };
  };
  cooking: string;
  homeAppliance: string;
  babyCareSkill: string;
  experience: string;
};

export type FilterType = {
  selectFilter: string | null;
  sliderValue: number[];
  searchValue: string;
};
