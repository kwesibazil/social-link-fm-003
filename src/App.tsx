import {useState} from 'react';
import Link, {type Social} from "@components/Link";
import profileImg from '@assets/images/avatar-jessica.jpeg';


const links: Social[] = [
  {name:'github', url: 'https://github.com/kwesibazil'},
  {name:'frontend mentor', url: 'https://www.frontendmentor.io/profile/kwesibazil'},
  {name:'linkedIn', url: 'https://www.linkedin.com/'},
  {name:'twitter', url: 'https://x.com/'},
  {name:'instagram', url: 'https://www.instagram.com/'},
];



export default function App():React.JSX.Element{
  const [tab, setTab] = useState<number | null>(null)
  const [disableHover, setDisableHover] = useState(false)


  const handleKeyDown = (event:React.KeyboardEvent<HTMLUListElement>):void=>{
    if(event.key === 'Tab' || event.key === 'ArrowUp' || event.key === 'ArrowDown')
      setDisableHover(true);

    if(event.key ==='ArrowUp')
      setTab(currentTab => (currentTab === null || currentTab === 0) ? links.length - 1 : currentTab -1) ;

    else if(event.key === 'ArrowDown')
      setTab(currentTab => currentTab === null ? 0 : (currentTab + 1) % links.length);  
  };


  const handleMouseOver = (event:React.MouseEvent<HTMLUListElement>):void => {
    if(event.target instanceof HTMLAnchorElement){
      setTab(Number(event.target.getAttribute('data-index')));
      setDisableHover(false);
    }
  };
  



  return( 
    <article  className="card">
      <img className="card-img" src={profileImg} alt="profile" />
      <h1 className="card-title">Jessica Randall</h1>
      <p className="card-location">London, United Kingdom</p>
      <p className="card-text">"Front-end developer and avid reader"</p>
      <ul 
        role="tablist" 
        onKeyDown={handleKeyDown} 
        onMouseOver={handleMouseOver}
        className={`card-link-group ${disableHover ? 'disable-hover' : ''}`}
      >
        {links.map((link, index) =>(
          <Link
            index={index}
            social={link} 
            key={link.name} 
            current={tab === index}
          />
        ))}
      </ul>
    </article>
  );
};



