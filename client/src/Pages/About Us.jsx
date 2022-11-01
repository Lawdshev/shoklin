import React from 'react';

function About() {
  return (
    <div className='min-h-screen w-full flex flex-col lg:flex-row lg:justify-around lg:p-4'>
        <div className="w-full flex flex-col justify-around items-center lg:w-1/3 bg-[#54d2d2] p-3">
            <span className='w-3/5'>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/278660500_5251166998276940_1945795077603890117_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMI5darCcK3VpP2hwflXLwVLjCl9MuNmlUuMKX0y42abmp3iNdU3sTubsCrjpiw7c0pbqLu4Bfr6jvBnrQDsR5&_nc_ohc=HVbABb9Tw90AX9P_LZ6&_nc_ht=scontent-los2-1.xx&oh=00_AfBUhzvzepixWT_iWfeMMBaRhnW7phKmj8_Qf94H3XApUQ&oe=636329C1" alt="shev" className='bg-red w-full rounded-full bg-red-400' />
            </span>
            <div className='text-center'>
                <h6 className='font-semibold text-xl '>About Sherif</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur, ipsa obcaecati voluptate vel recusandae molestias perspiciatis ratione reprehenderit inventore aliquam voluptatem ipsam vero, nam odit quibusdam, repellendus delectus accusantium. Unde magni natus optio numquam voluptas iure fuga illo. Architecto, consequatur. Autem quaerat hic dolores totam quod recusandae earum? Obcaecati!</p>
            </div>   
            <a href="mailto: o.d.ALsherif@gmail.com" ><i className="fa-solid fa-envelope"></i> Contact me</a>
        </div>
        <div className="w-full flex flex-col justify-around items-center lg:w-1/3 bg-[#54d2d2] p-3">
            <span className='w-3/5'>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/311779332_643935707136076_8432575473107482573_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHyDwH8dV72X6BjGUFu6FwICrGsS9cQyd8KsaxL1xDJ3629RpozvZAs2BNhjNhJQ9bZvAtCz20R-OKb-6p0LamP&_nc_ohc=muWoM762eKEAX_bYJw6&tn=mAlohIwx7OS2rslq&_nc_ht=scontent-los2-1.xx&oh=00_AfCsQlq-itMWr9_q_ItKQjfeXnMgOto0Os57TnLO9oid6Q&oe=6365670F" className='bg-red w-full rounded-full bg-red-400' />
            </span>
            <div className='text-center'>
                <h6 className='font-semibold text-xl '>About Rasheedah</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur, ipsa obcaecati voluptate vel recusandae molestias perspiciatis ratione reprehenderit inventore aliquam voluptatem ipsam vero, nam odit quibusdam, repellendus delectus accusantium. Unde magni natus optio numquam voluptas iure fuga illo. Architecto, consequatur. Autem quaerat hic dolores totam quod recusandae earum? Obcaecati!</p>
            </div>   
            <a href="mailto: imamrasheedatahmad1993@gmail.com" ><i class="fa-solid fa-envelope"></i> Contact me</a>
        </div>
        

    </div>
  )
}

export default About;