export interface iDashContext {
  contacts: iContact[];
  filteredContacts: iContact[];
  showContacts: (contactsToFilter: iSearchValue) => void;
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
