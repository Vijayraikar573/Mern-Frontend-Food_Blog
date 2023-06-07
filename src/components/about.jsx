import Banner from "./banner";
import "../styles/about.css";

const About = () => {
    let titles="About page"
    return (
        <div className="about">
            <Banner data={titles}/>
            <div className="ab2">

               <div className="ab3">
                
                  <img src="/images/Ab2.jpg" alt="" height="500px" width="600px"/>
               </div> 

                   <div className="ab4">
                     <h1>About Stories</h1>
                     <p>Far far away, behind the word mountains, far from the countries</p>
                    <p>Vokalia and Consonantia</p>

                       <div className="mat">
             
                           <div className="n10">
                              <h1>10</h1>
                              <p>year of experience</p>
                           </div>

                           <div className="n200">
                           <h1>200</h1>
                           <p>Foods</p>
                           </div>

                    </div> 

                    <div className="mat1">
             
                           <div className="n30">
                              <h1>300</h1>
                              <p>LifeStyle</p>
                           </div>

                           <div className="n400">
                           <h1>40</h1>
                           <p>Happy Customers</p>
                           </div>

                    </div> 

                </div>
            </div>
           
           <div className="watch"> 
           <div className="roger">
           <h1>Roger Bosch</h1>
           <p>A small river named Duden flows by their</p>
           <p>place and supplies it with the neccessary</p>
           </div>
           <div className="black">
            <img src="/images/Ab3.jpg" alt="" />
           </div>
           
             </div>
         
        </div>
      );
}
 
export default About;