// productsData.js

import dolClassicImage from "../image/dolclassic.jpg";
import msdImage from "../image/msd.jpg";

const productsData = [
    {
      id: "DolClassic",
      name: 'Direct Online Starters',
      category: '1',
      image: dolClassicImage,
      description: 'Apex Direct Online Starter (DOL Starter) is a type of motor starter that is commonly used to start high-power motors. Its primary function is to connect a motor directly to the power supply, bypassing any kind of soft-start or reduced-voltage starting mechanisms.',
    },
    {
        id: "MSD",
        name: 'Manual Star-Delta Starters',
        category: '1',
        image: msdImage,
        description: 'Apex Manual Star-Delta Starter is a type of motor starter used to reduce the starting current and torque of an electric motor during its startup. This is achieved by initially connecting the motor in a star configuration and then switching to a delta configuration after a certain period. The transition from star to delta is manually controlled, typically using a switch.',
      },
    // Add more products as needed
  ];
  
  export default productsData;
  