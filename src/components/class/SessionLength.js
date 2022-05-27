/**
 * Class representing length of a workout session
 */
class SessionLength {
  /**
   *
   * @param {object} source Information of length of a workout session
   */
  constructor(source) {
    /**
     * @property {number} day Day of the workout session
     */
    this.day = source.day;
    /**
     * @property {number} sessionLength Length of the workout session
     */
    this.sessionLength = source.sessionLength;
  }
}

export default SessionLength;
