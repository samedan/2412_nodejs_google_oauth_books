const moment = require("moment");

module.exports = {
  formatDate: function (date, format) {
    // return moment(date).format(format);
    // var localLocale = moment(date);
    return moment(date).locale("fr").format("LLLL");
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, ""); // replace HTML tags with ''
  },
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        // class in materialize in fct of AllStories or SingleStory
        return `<a href="/stories/edit/${storyId}" 
                  class="btn-floating halfway-fab blue">
                    <i class="fas fa-edit fa-small"></i>
                  </a>                  
                  `;
      } else {
        return `<a href="/stories/edit/${storyId}">
                  <i class="fas fa-edit"></i>
                </a>`;
      }
    } else {
      return "";
    }
  },
  selectOption: function (selected, options) {
    return options
      .fn(this)
      .replace(new RegExp(' value="' + selected + '"'), '$& selected=selected"')
      .replace(new RegExp(">" + selected + '"'), ' selected=selected"$&');
  },
};

// var localLocale = moment();

// localLocale.locale('fr'); // set this instance to use French
// localLocale.format('LLLL'); // dimanche 15 juillet 2012 11:01
