import React from 'react';

function About() {
  return (
    <div className='min-h-screen w-full flex flex-col lg:flex-row lg:justify-around lg:p-4'>
        <div className="w-full flex flex-col justify-around items-center lg:w-1/3 bg-[#54d2d2] p-3">
            <span className='w-3/5'>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/278660500_5251166998276940_1945795077603890117_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGMI5darCcK3VpP2hwflXLwVLjCl9MuNmlUuMKX0y42abmp3iNdU3sTubsCrjpiw7c0pbqLu4Bfr6jvBnrQDsR5&_nc_ohc=MXFvFm4GNxQAX_gPMMk&_nc_ht=scontent-los2-1.xx&oh=00_AfBz2nlmf5mUO-ytBpUwKcC5zh5XNubhH6rkiJhEz5EN_Q&oe=6372FBC1" alt="shev" className='bg-red w-full rounded-full bg-red-400' />
            </span>
            <div className='text-center'>
                <h6 className='font-semibold text-xl '>About Sherif</h6>
                <p>I am a goal-driven, quality-oriented professional with knowledge of web development. I am lifelong
                    learner and a problem solver that always strives for mystery in my craft and offer full commitment in
                    whatever I do and whoever I work with. As a software developer in any organization, I am very confident
                    that I will be a great addition to the team. That said, i'm looking forward to feedbacks from you and i am open to work.</p>
            </div>  
            <a href="mailto: o.d.ALsherif@gmail.com" ><i className="fa-solid fa-envelope"></i> Contact me</a>
        </div>
        <div className="w-full flex flex-col justify-around items-center lg:w-1/3 bg-[#54d2d2] p-3">
            <span className='w-3/5'>
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/311779332_643935707136076_8432575473107482573_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHyDwH8dV72X6BjGUFu6FwICrGsS9cQyd8KsaxL1xDJ3629RpozvZAs2BNhjNhJQ9bZvAtCz20R-OKb-6p0LamP&_nc_ohc=scZd4uBSgokAX_r4srV&tn=mAlohIwx7OS2rslq&_nc_ht=scontent-los2-1.xx&oh=00_AfBlLytD8e5YEy9iawZSiRVOOjX5TVRTJuZEpEOJC6csyQ&oe=63733ECFF" className='bg-red w-full rounded-full bg-red-400' />
            </span>
            <div className='text-center'>
                <h6 className='font-semibold text-xl '>About Rasheedah</h6>
                <p>A front end developer, passionate with building anything that lives on the web.
                    A graduate of food science from University of ilorin.
                    I'm detailed oriented and profound in creativity,I Strive to keep developing myself personally and so i am open to learning new things and I easily adapt to situations and environment. I look forward to hearing from you.</p>
            </div>  
            <a href="mailto: imamrasheedatahmad1993@gmail.com" ><i class="fa-solid fa-envelope"></i> Contact me</a>
        </div>
    </div>
  )
}
export default About;
