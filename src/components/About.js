import React from 'react';

import Image from '../assets/avatar.png';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const[ref, inView]= useInView({
    threshold:0.5,
  });

  return (
  <section className='section ' id='about' ref={ref}>
    <div className='container mx-auto'>
      
      <div className='text-[55px] font-bold leading-[0.8] lg:text-[99px]'>
        Sobre mim
      </div>
          
          <div className='flex-1 bg-avatar bg-contain bg-no-repeat'>
            <img src={Image} alt=''/>
          </div>
    </div>  

      <div className='sobre'>
        <p className='text'>
         Olá, me chamo Paloma, tenho 17 anos e estou cursando o Ensino médio integrado ao curso de Desinvolvimento de Sistemas em uma intituição Etec, aprendo rápido, trabalho bem em grupo e sou comunicativa. Estou em busca do primeiro emprego e estou a disposição de aprendizado
         </p>
      </div>
      
  
  </section>
  );




};

  


export default About;
