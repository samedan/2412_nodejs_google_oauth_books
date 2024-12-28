const moment = require("moment");

module.exports = {
  formatDate: function (date, format) {
    // return moment(date).format(format);
    // var localLocale = moment(date);
    return moment(date).locale("fr").format("LLLL");
  },
};

// var localLocale = moment();

// localLocale.locale('fr'); // set this instance to use French
// localLocale.format('LLLL'); // dimanche 15 juillet 2012 11:01
