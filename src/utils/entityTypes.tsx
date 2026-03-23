export interface menuType {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  maxNumOfSpecial: number;
  numOfSpecials: number;
  seasonal: boolean;
  season: string | null;
  active: boolean;
}

export interface menuItemType {
  id: string;
  name: string;
  price: number;
  menuId: string;
  menu: string;
  special: boolean;
  mainIngredients: string[];
  active: boolean;
  seasonal: boolean;
  season: string | null;
}

export interface reservationType {
  id: string;
  name: string;
  phoneNumber: string;
  numberOfPeople: number;
  time: string;
  dateMade: string;
  active: boolean;
  cancelled: boolean;
}

export interface contactType {
  id: string;
  name: string;
  subject: string;
  message: string;
  active: boolean;
  resolved: boolean;
}
