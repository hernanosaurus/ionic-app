import {
  IonApp,
  IonContent,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";

setupIonicReact();

interface User {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();

      setUsers(data.results);
    };

    fetchUsers();
  }, []);

  const removeUser = (uuid: string) => {
    setUsers((users) => users.filter((user) => user.login.uuid !== uuid));
  };

  return (
    <IonApp>
      <IonContent>
        {users.map((user) => (
          <IonItemSliding key={user.login.uuid}>
            <IonItem>
              <IonLabel>
                <h2>{`${user.name.first} ${user.name.last}`}</h2>
                <p>{user.email}</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption
                onClick={() => removeUser(user.login.uuid)}
                color="danger"
              >
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonContent>
    </IonApp>
  );
};

export default App;
