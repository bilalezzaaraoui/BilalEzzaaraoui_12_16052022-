/**
 * Class representing a daily activity
 */
class DailyActivities {
  /**
   *
   * @param {object} source Information of a daily activity
   */
  constructor(source) {
    /**
     * @property {string} day Day of the activity
     */
    this.day = source.day;
    /**
     * @property {number} kilogram Weight of the day of the activity
     */
    this.kilogram = source.kilogram;
    /**
     * @property {number} calories Calories burnt the day of the activity
     */
    this.calories = source.calories;
  }
}

export default DailyActivities;
