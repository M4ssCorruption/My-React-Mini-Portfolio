import img1 from './images/daniel.jpeg';

import img4 from './images/login.jpeg';
import img5 from './images/main.jpeg';
import img2 from './images/games.jpeg';
import img3 from './images/athletics.jpeg';

import Footer from './Footer';
import './App.css'
function App() {
  return (
    <div>
      <div className="Header-Wrap">
      <h1>My Portfolio</h1>
      </div>
      <div className="Body">
      <h3>About Daniel!</h3>
      
      
      <img src={img1} alt="" />
      
      <p>Hello! My name is Daniel Marais and I am 23 years old! I attended CAMPST High School, short for The Cape Academy of Mathematics, Science and Technology and matriculated in 2017. I took a gap year in 2018 because i was unsure of my interests after I left highschool but soon after I realised that I love doing IT. I got accepted for the higher certificate course in 2019 and persued my journey on getting my 3 year diploma. Today i stand tall with how far I've come because I achieved my 3 year diploma through hard work and discipline. I now want to build myself up not only in skills and experiences but as a strong and healthy minded individual and I hope to give back all that will be taught to me through the compnany that employes me.</p>
      </div>
      <hr />
      <div className="Body">
      <h3>Education</h3>

      
      <p>I was at Cape Acadamedy from 2015 to 2017 and the school was very academic oriented so it prpared me to cope and handle the intense workloads of univeristy. I started studying officially in 2019 for the diploma ICT which Information and Communications Technology and finished my dimploma in 2022 at the Cape Paninsual University of Technology. My graduation ceremony takes place between the 17th to the 24th of April 2023. Being at this university taught me a lot of discipline and that  I cant always rely on the lecturers to teach me everything, I had to do a lot of self teaching as not only did this help myself, but my friends and peers who I worked with and supported throughout my years of studies. I applied for my Advanced Dilploma to be completed part-time because I want to advance my studies while gaininng working experience.</p>
      </div>
      <hr />
      <div className="Body">
      <h3>Volunteer Work</h3>
      <p>
      Up until now my work experience has been mostly volunteer work from 2020 to 2022 at Folding Door Systems or FDS for short and this company taught me a lot of communication skills as i had to deal/handle in-person customer communication as a representative of the company. I have very minimul work experience as Ive only been working for 3 months as a graphic designer but wish to gain experience in the field that I studied.
      </p>
      </div>
      <hr />
      <div className="Body">
      <h3>Projects Completed</h3>
      <p>Ive Completed 2 mobile applications, one on my own and one in a group with me being the group leader. 
        The first mobile application was created in 2021 using Android Studio where I made a registration app for a game called rocket League. The application had all the CRUD functionalities including calculations and basic UX/UI design.</p>
      <p>The second mobile application was created in 2022 using Android Studio as well and this was an anime list application that had the CRUD functions and on this app users could add reviews to certain anime and change ratings after maing reviews and also viewing different anime records ands discriptions.</p>
      <div className="Resize">
      <img src={img5} alt="" />
      <img src={img4} alt="" />
      </div>
      </div>
      
      <hr />
      <div className="Body">
      <h3>Hobbies and Interests</h3>
      <p>I love playing games, listening to music, and watching anime in my free time as a means of relaxing. I am also an athlete that has made Western Province in the 10 Discipline event known as the Decathlon. I first got my province colours in 2014 and achieved my first national medal for second place at the ASA Senior Championship</p>
      <img src={img3} alt="" />
      </div>
      <div className="content-wrap">
      <Footer />
    </div>
    
    </div>
  );
}

export default App;

