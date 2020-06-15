import { IUserLogin } from "../models/Auth";
import { IRowsData } from "../models/home";

export class RequestService {
  getSensorsData = (url: string): Promise<IRowsData[]> => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3200/" + url)
        .then((response: any) => response.json())
        .then((res: { sensors: IRowsData[] }) => {
          const { sensors } = res;
          resolve(sensors);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  getUsersData = (url: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3200/" + url)
        .then((response: any) => response.json())
        .then((res: any) => {
          const { users } = res;
          resolve(users);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  addUsersData = (url: string, data: any): Promise<IUserLogin[]> => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3200/" + url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response: any) => response.json())
        .then((res) => {
          // const { users } = res;
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updateUserData = (url: string, data: any) => {
    console.log("data:", data);
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3200/" + url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res: any) => res.json()).then((response: any) =>{
        console.log('response:', response);
        resolve(response);
      })
      .catch(error => {
        reject(error)
      })

    });
  };

  deleteSensor = (data: any) => {
    console.log("data:", data);
    Promise.all(data.map((x: any) => {
      fetch("http://localhost:3200/delete/" + x.id, {
        method: "DELETE"
      })
      })).then(response => console.log("Deleted Successfully!"))
      .catch(err => {
        console.log(err)
      })
  };


}

export default RequestService;
