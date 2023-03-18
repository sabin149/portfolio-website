export type openStateType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export interface formDataInterface {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  subject: string;
  message: string;
}

export const initialState: formDataInterface = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
  subject: "",
  message: "",
};

export const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export const phoneNumberRegex = /^\d{10,}$/;
