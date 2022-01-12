import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { HttpResponse, Http } from '@capacitor-community/http';
import './Home.css';
import { useCallback } from 'react';

const Home: React.FC = () => {
  const makeRequest = useCallback(async () => {
      const options = {
        url: "http://192.168.86.229:9080/login",
      };

      const response: HttpResponse = await Http.get(options);
      console.log('Got response', response);
  }, []);

  const authedRequest = useCallback(async () => {
      const options = {
        url: "http://192.168.86.229:9080/authed",
      };

      const response: HttpResponse = await Http.get(options);
      console.log('Got response', response);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={makeRequest}>
          Login
        </IonButton>
        <IonButton onClick={authedRequest}>
          Authed Request
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
