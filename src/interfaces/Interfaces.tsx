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

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
