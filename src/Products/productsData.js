// productsData.js

import dolClassicImage from "../image/dolclassic.jpg";
import msdImage from "../image/msd.jpg";

const productsData = [
    {
      id: "DolClassic",
      name: 'Direct Online Starters',
      category: '1',
      image: dolClassicImage,
      description: 'A Direct-On-Line starter connects the motor directly to full line voltage. It is used where inrush current and starting torque are acceptable for the supply and driven load.',
    },
    {
        id: "MSD",
        name: 'Manual Star-Delta Starters',
        category: '1',
        image: msdImage,
        description: 'A manual Star-Delta starter reduces motor starting current by starting in star connection and then switching to delta. The transition is operator-controlled.',
      },
    // Add more products as needed
  ];
  
  export default productsData;
  