const CustomError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class Unathenticated extends CustomError {
  constructor(message) {
    super(message);

    this.StatusCodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unathenticated;
