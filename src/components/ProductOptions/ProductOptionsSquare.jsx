import './ProductOptionsSquare.css';
import { useState} from 'react';

export default function ProductOptionsSquare() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };


return (
    <div className='quadradoMain'>
     <p>Tamanho</p>
     <div className='quadrados5'>
     <div className={activeIndex === 0 ? 'active' : ''} onClick={() => handleSelect(0)}>39</div>
     <div className={activeIndex === 1 ? 'active' : ''} onClick={() => handleSelect(1)}>40</div>
     <div className={activeIndex === 2 ? 'active' : ''} onClick={() => handleSelect(2)}>41</div>
     <div className={activeIndex === 3 ? 'active' : ''} onClick={() => handleSelect(3)}>42</div>
     <div className={activeIndex === 4 ? 'active' : ''} onClick={() => handleSelect(4)}>43</div>
     </div>
    </div>
   )

};