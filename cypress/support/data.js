import moment from "moment";
import { faker } from "@faker-js/faker";

class Data {
  menProductName = "Grunt Blue Slim Fit Jeans";
  womenProductName = "Sleeveless Dress";

  number = moment().unix().toString();

  userFirstName = faker.person.firstName();
  userLastName = faker.person.lastName();
  userName = faker.internet.username({
    firstName: this.userFirstName,
    lastName: this.userLastName,
  });
  userEmail = "test+" + this.number + "@test.test";
  userPassword = "ABCd" + this.number;
  userCompany = faker.company.name();
  userAddress1 = faker.location.streetAddress();
  userAddress2 = faker.location.secondaryAddress();
  userCountry = "Canada";
  userState = faker.location.state();
  userCity = faker.location.city();
  userZipcode = faker.location.zipCode();
  userPhoneNumber = faker.phone.number();
}

export default new Data();
