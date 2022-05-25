import Apple from "../../assets/img/infoMenu/apple.svg";
import Cheeseburger from "../../assets/img/infoMenu/cheeseburger.svg";
import Chicken from "../../assets/img/infoMenu/chicken.svg";
import Energy from "../../assets/img/infoMenu/energy.svg";

class User {
  constructor(source) {
    this.id = source.id;
    this.firstName = source.firstName;
    this.lastName = source.lastName;
    this.age = source.age;
    this.score = source.score;
    this.nutrition = [
      {
        image: Energy,
        text: source.nutrition.calorie,
        title: "Calories",
        color: "#FBEAEA",
      },
      {
        image: Chicken,
        text: source.nutrition.protein,
        title: "Proteines",
        color: "#E9F4FB",
      },
      {
        image: Apple,
        text: source.nutrition.carbs,
        title: "Glucides",
        color: "#FBF6E5",
      },
      {
        image: Cheeseburger,
        text: source.nutrition.lipid,
        title: "Lipides",
        color: "#FBEAEF",
      },
    ];
    this.sessions = source.sessions;
    this.averageSessions = source.averageSessions;
    this.performance = source.performance;
  }
}

export default User;
