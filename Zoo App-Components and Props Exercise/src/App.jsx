import React from 'react';
import './style.css';
import { animals } from './data/animal';
import Card from './components/Card';
import '../public/yooLogo.svg';
import linksData from './data/links';
import Links from './components/Links';

// #### Task 2: Card Component Creation

// export default function App() {
//   return (
//     <>
//       <div className="App">
//         <Card
//           description={animals[0].description}
//           title={animals[0].title}
//           imageUrl={animals[0].imageUrl}
//         />
//       </div>
//     </>
//   );
// }

// #### Task 3: Showcasing All Animals

// - Map over the animals dataset and display each card using your new Card component

// export default function App() {
//   return (
//     <>
//       <div className="App">
//         {animals.map((animal, index) => (
//           <Card
//             key={index}
//             description={animal.description}
//             title={animal.title}
//             imageUrl={animal.imageUrl}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// #### 🌟 Bonus Tasks

// Add the Berlin Zoo logo to your page, it can be found in the pulic folder
// It has a white fill so you may need to adjust your page background color

// - Display the links from ./data/links.js along the bottom of the page using another component
// - Make the card prettier with CSS

export default function App() {
  return (
    <>
      <div className="logo-container">
        <img className="zoo-logo" src="yooLogo.svg" alt="Zoo Logo" />
      </div>
      <div className="App">
        {animals.map((animal, index) => (
          <Card
            key={index}
            imageUrl={animal.imageUrl}
            description={animal.description}
            title={animal.title}
          />
        ))}
      </div>
      <div className="links-wrapper">
        {linksData.map((link, index) => (
          <Links key={index} imgUrl={link.imgUrl} url={link.url} />
        ))}
      </div>
    </>
  );
}
