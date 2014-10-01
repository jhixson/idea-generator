/**
 * setRemoteAddress
 *
 * @module      :: Policy
 * @description :: Sets IP address on vote and idea create
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function setRemoteAddress(req, res, next) {
  req.body.ip_address = req.connection.remoteAddress;
  next();
};
