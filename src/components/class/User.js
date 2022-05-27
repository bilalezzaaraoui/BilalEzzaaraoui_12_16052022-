import Apple from "../../assets/img/infoMenu/apple.svg";
import Cheeseburger from "../../assets/img/infoMenu/cheeseburger.svg";
import Chicken from "../../assets/img/infoMenu/chicken.svg";
import Energy from "../../assets/img/infoMenu/energy.svg";

/**
 * Class representing a user
 */
class User {
  /**
   *
   * @param {object} source Information of a user
   */
  constructor(source) {
    /**
     * @property {number} id Id of the user
     */
    this.id = source.id;
    /**
     * @property {string} firstName Firsname of the user
     */
    this.firstName = source.firstName;
    /**
     * @property {string} lastName Lastname of the user
     */
    this.lastName = source.lastName;
    /**
     * @property {number} age Age of the user
     */
    this.age = source.age;
    /**
     * @property {number} score Score of the user
     */
    this.score = source.score;
    /**
     * @property {array} nutrition Information of the nutrition of the user
     */
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
    /**
     * @property {array} sessions Information of the daily activities of the user
     */
    this.sessions = source.sessions;
    /**
     * @property {array} nutrition Information of the length of workouts of the user
     */
    this.averageSessions = source.averageSessions;
    /**
     * @property {array} nutrition Information of the performances of the user
     */
    this.performance = source.performance;
  }
}

export default User;
