import React from 'react';
import email from '../assets/email.png';
import tel from '../assets/telefone.png';
import end from '../assets/endereco.png';
import link from '../assets/linkedin.png';
import git from '../assets/github.png';

const Contact = () => {
  return (
    <section className='section ' id='contact'>
      
     <div className='container mx-auto'>
      <div>
        <div className='text-[40px] font-bold leading-[1.10] lg:text-[99px]'>Contato</div>
       <div className='contact'>
      <br>
      </br>
       <div className='img'><img src={email} alt=''/></div><p> palomamonteirodeoliveira2@gmail.com</p><br></br> 
        <div className='img'><img src={tel} alt=''/></div><p>(11) 91753-0189 </p><br></br>
        <div className='img'><img src={end} alt=''/></div><p>Santana de Parnaiba, São Paulo </p><br></br>
        <div className='img'><img src={link} alt=''/></div><p>linkedin.com/in/paloma-monteiro-312871230 </p><br></br>
        <div className='img'><img src={git} alt=''/></div><p>https://github.com/palomaMO</p><br></br>

       </div>
        </div>
        </div>
      
     
    
    </section>
    );
};

export default Contact;
