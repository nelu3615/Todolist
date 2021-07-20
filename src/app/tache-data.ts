import { InMemoryDbService } from "angular-in-memory-web-api";
import { Tache } from "./tache.model";

export class TacheData implements InMemoryDbService {
  createDb() {
    const taches: Tache[] = [
      {
      Id : "1",
      Designation : 'faire les courses'
      },
        {
      Id : "2",
      Designation : 'acheter médicaments'
      },
        {
      Id :"3",
      Designation : 'conduire ma voiture'
      },
        {
      Id : "4",
      Designation : 'travailler sur un projet todoList'
      },
        {
      Id : "5",
      Designation : 'créer BdD pour le projet todoList'
      },
        {
      Id :"6",
      Designation : 'faire le ménage'
      },
    ];
    return {taches};
  }
}
