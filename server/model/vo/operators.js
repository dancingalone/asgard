// Generated by CoffeeScript 1.3.3
(function() {
  var ObjectId, Schema, obj, services;

  services = require('mongoose');

  Schema = services.Schema;

  ObjectId = Schema.ObjectId;

  obj = {
    id: ObjectId,
    username: {
      type: String,
      set: toLower,
      validate: [usernamevalid, '最小位数 >= 2; 最大位数 <= 10']
    },
    alias: String,
    password: {
      type: String,
      validate: [passwordvalid, '最小位数 >= 1; 最大位数 <= 10']
    },
    email: String,
    role: {
      type: String,
      "default": 'operator'
    },
    cdate: {
      type: Date,
      "default": Date.now
    },
    mdate: {
      type: Date,
      "default": Date.now
    }
  };

  exports.OperatorsSchema = new Schema(obj);

  exports.obj2json = function(obj) {
    var json;
    return json = {
      id: obj.id,
      username: obj.username,
      alias: obj.alias,
      password: obj.password,
      email: obj.email,
      role: obj.role,
      cdate: obj.cdate,
      mdate: obj.mdate
    };
  };

  
/**
 * to lower
 */
function toLower ( value ) {
  return value.toLowerCase();
}

/**
 * validator 2 >= x <= 10
 */
function usernamevalid ( value ) {
  return value.length >= 2 && value.length <= 10;
}

/**
 * validator 1 >= x <= 10
 */
function passwordvalid ( value ) {
  return value.length >= 1 && value.length <= 10;
}
;


}).call(this);