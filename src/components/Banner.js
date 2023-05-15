import React from 'react';
// imagens





// tipo de naimação
import {TypeAnimation} from 'react-type-animation';

// movimentação
import {motion} from 'framer-motion';

// variantes
import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section className='section' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:itens-center lg:gap-x-12'>
        <div>
        <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Paloma <span>Monteiro</span>
        </h1>
        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary '>
          <span className='mr-4'>Sou programadora</span>
          <TypeAnimation
           sequence={[
            'Front-end',
            2000,
            'Back-end',
            2000
          ]} 
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
        </div>

        <p>Este é o meu portifolio em uma pagina React</p>
        </div>
         
        </div>
      </div>
  </section>

  );
};

export default Banner;
