import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iDefaultProviderProps } from "../UserContext/@types";
import { UserContext } from "../UserContext/UserContext";
import { iContact, iDashContext, iSearchValue } from "./@types";

export const DashContext = createContext({} as iDashContext);

export const DashProvider = ({ children }: iDefaultProviderProps) => {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [contacts, setContacts] = useState<iContact[] | []>([]);
  const [modal, setModal] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState<iContact[]>([]);

  const loadContacts = async () => {
    const token = localStorage.getItem("@token");
    try {
      const response = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data === "jwt expired") {
          setUser(null);
          localStorage.removeItem("@token");
          navigate("/");
        }
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      loadContacts();
    } else {
      localStorage.removeItem("@token");
      navigate("/");
    }
  }, []);

  const showContacts = (contactToFilter: iSearchValue) => {
    if (contactToFilter.search === "") {
      setFilteredContacts(contacts);
    } else {
      const searchResults = contacts.filter(
        (contact) =>
          contact.fullName.toLowerCase().includes(contactToFilter.search) ||
          contact.phoneNumber.includes(contactToFilter.search)
      );
      setFilteredContacts(searchResults);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <DashContext.Provider value={{ contacts, filteredContacts, showContacts, modal, handleModal }}>
      {children}
    </DashContext.Provider>
  )
};
