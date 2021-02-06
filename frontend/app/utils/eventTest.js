import hobbiesTest from "./hobbiesTest.js";

const eventTest = [
  {
    key: 1,
    category: "Running",
    imageUri: hobbiesTest[3].imageUri,
    title: `Busniess Festival `,
    description:
      "We welcome you to the Spring Business Festival, it's gonna be the occasion for our company to do networking with the rest of the community. ",
    date: "10/02/2021",
    time: "10:00 - 21:00",
    location: "Rue du Bourdon 100, 1180 Bruxelles",
    coordinate: { longitude: 4.3325027560946365, latitude: 50.78558617252944 },
  },
  {
    key: 2,
    category: "Restaurant",
    imageUri: hobbiesTest[0].imageUri,
    title: "Burgers for everyone ! ",
    description:
      "Hey guys, I am organizing a dinner for every burger lover outhere ! So if you want to meet other expat while eating big bugers, feel free to join! ",
    date: "21/02/2021",
    time: "Today 19:00 - 20:00",
    location: "Parvis de Saint-Gilles 28, 1060 Saint-Gilles",
    coordinate: { longitude: 4.345936195998279, latitude: 50.83090781978249 },
  },
  {
    key: 3,
    category: "Sightseeing",
    imageUri: hobbiesTest[10].imageUri,
    title: "Brussels by Water ! ",
    description: `This week will be Playa Resorts for Families. Join us along with your children for a fun night of Family Travel to the Caribbean. Michelle with Playa Resorts will take us on a tour of 11 resorts that are family friendly. After registering for this FREE event, you will receive a confirmation email containing information about joining the webinar. Join us from the comforts of your own home to experience where a family can go when it is safe again! `,
    date: "01/03/2021",
    time: "09:00 - 20:00",
    location: "Quai des Péniches 2BIS, 1000 Bruxelles",
    coordinate: { longitude: 4.347127413767099, latitude: 50.859398143056644 },
  },
];

export default eventTest;
