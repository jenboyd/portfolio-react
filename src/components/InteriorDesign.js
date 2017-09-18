import React from 'react'

import Agency1 from '../img/design/Agency_1.jpg';
import Agency2 from '../img/design/Agency_2.jpg';
import Agency3 from '../img/design/Agency_3.jpg';

import Apt1 from '../img/design/Apt_1.jpg';
import Apt2 from '../img/design/Apt_2.jpg';

import Hermosa1 from '../img/design/hermosa_1.jpg';
import Hermosa2 from '../img/design/hermosa_2.jpg';

import Hotel1 from '../img/design/hotel_1.jpg';
import Hotel2 from '../img/design/hotel_2.jpg';

import Lounge1 from '../img/design/lounge_1.jpg';
import Workstation1 from '../img/design/Workstation.jpg';

import Rehab1 from '../img/design/rehab_1.jpg';
import Rehab2 from '../img/design/rehab_2.jpg';

import Spa1 from '../img/design/spa_1.jpg';
import Spa2 from '../img/design/spa_2.jpg';
import Spa3 from '../img/design/spa_3.jpg';
import Spa4 from '../img/design/spa_4.jpg';

const InteriorDesign = () => (
  <div className='interior-design'>
    <h2>Interior Design</h2>
    <p>All renderings are undergraduate projects created using a combination of Sketchup, Revit, and Photoshop.</p>

    <div className='images'>
      <div>
        <img src={Agency1} alt="Design Project Image" />
        <img src={Agency3} alt="Design Project Image" />
      </div>

      <div>
        <img src={Apt1} alt="Design Project Image" />
        <img src={Apt2} alt="Design Project Image" />
      </div>

      <div>
        <img src={Hermosa1} alt="Design Project Image" />
        <img src={Hermosa2} alt="Design Project Image" />
      </div>

      <div>
        <img src={Lounge1} alt="Design Project Image" />
        <img src={Workstation1} alt="Design Project Image" />
      </div>

      <div>
        <img src={Rehab1} alt="Design Project Image" />
        <img src={Rehab2} alt="Design Project Image" />
      </div>

      <div>
        <img src={Spa1} alt="Design Project Image" />
        <img src={Spa2} alt="Design Project Image" />
        <img src={Spa4} alt="Design Project Image" />
      </div>
    </div>
  </div>
)

export default InteriorDesign
