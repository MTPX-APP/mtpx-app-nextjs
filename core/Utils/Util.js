
class Util {

	static isValidURL = () => {
    	return new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?")
	}

	static isValidFacebookURL = () => {
		return new RegExp('facebook\.com\/[a-zA-Z0-9_]*$');
	}

	static isValidInstagramURL = () => {
		return new RegExp('instagram\.com\/[a-zA-Z0-9_]*$');
	}

	static isValidDribbbleURL = () => {
		return new RegExp('dribbble\.com\/[a-zA-Z0-9_]*$');
	}

	static isValidTwitterURL = () => {
		return new RegExp('twitter\.com\/[a-zA-Z0-9_]*$');
	}

	static isValidEmail = () => {
		return new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
	}
}

export default Util