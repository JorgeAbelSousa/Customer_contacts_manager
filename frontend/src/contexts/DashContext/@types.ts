export interface iDashContext {
  contacts: iContact[];
  modal: boolean;
  handleModal: () => void;
}

export interface iContact {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface iSearchValue {
  search: string;
}
