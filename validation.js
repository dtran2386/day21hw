/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        var regexp = new RegExp('^([a-z\-A-Z]{2,})[ ]([a-zA-Z]{2,})$');
        
        return regexp.test(input);
    },

    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits.
     */
    phone: function (input) {
        var regexp = new RegExp('^[ (]*([0-9]{3})[ )]*([0-9]{3})[ -]*([0-9]{4})$');
        var ok = regexp.exec(input);
        if (!ok) {
            return false;
        } else {
            return true;
        }        
    },
    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        var regexp = new RegExp('^[A-Za-z0-9_.]+[@]{1}([a-zA-Z]{3,})+[.]+([a-zA-Z]{2,})+([.][a-zA-Z]{2,})*$');
        var ok = regexp.exec(input);
        if (!ok) {
            return false;
        } else {
            return true;
        }
    },
    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by either {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        var regexp = new RegExp('^([0-9]{1,})+[ ]{1}([a-zA-Z]{2,})+[ ]{1}([a-zA-Z]{2,}[ ])*[\<Ave\>|\<St\>|\<Park\>|\<Lane\>|\<Blvd\>]+$');
        
        return regexp.test(input);
    },
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        var regexp = new RegExp('^[a-zA-Z]{1}[a-zA-Z0-9]{4,16}$');
        
        return regexp.test(input);
    },
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
        var regexp = new RegExp('^[\<http\>|\<https\>]+[:]{1}[//]{2}[a-zA-Z]+[.]{1}([a-zA-Z]{2,})$');
        var ok = regexp.exec(input);
        if (!ok) {
            return false;
        } else {
            return true;
        }
    },

    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
        var regexp = new RegExp('^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$');
//        var ok = regexp.exec(input);
//        if (!ok) {
//            return false;
//        } else {
//            return true;
//        }
        return regexp.test(input); //this one or commented out one works. either or same for any of the above as well.
    },
};


















