/**
 * Class representing a performance
 */
class Performance {
  /**
   *
   * @param {object} source Information of the performance
   */
  constructor(source) {
    /**
     * @property {number} value Value of the performance
     */
    this.value = source.value;
    /**
     * @property {number} kind Type of the performance
     */
    this.kind = source.kind;
  }
}

export default Performance;
