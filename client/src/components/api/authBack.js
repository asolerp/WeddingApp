import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      // withCredentials: true
    });
    this.service = service;
  }

  login = async (username, password) => {
    const response = await this.service.post("/auth/login", {username,password});
    return response;
  };

  getAllUsers = async () => {
    const response = await this.service.get("/auth/getAllUsers")
    return response;
  }

  getAllParticipants = async () => {
    const response = await this.service.get("/auth/getAllParticipants")
    return response;
  }

  updateForm = async(user) => {
    const response = await this.service.post("/updateForm", {user})
    return response
  }
}

export default AuthService;
