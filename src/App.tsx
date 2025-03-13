import Link from "@components/Link";
import profileImg from '@assets/images/avatar-jessica.jpeg'

const links: string[] = ['github', 'frontend mentor', 'linkedIn', 'twitter', 'instagram']

export default function App():React.JSX.Element{
  return(
    <article className="card">
      <img className="card-img" src={profileImg} alt="profile" />
      <h1 className="card-title">Jessica Randall</h1>
      <p className="card-location">London, United Kingdom</p>
      <p className="card-text">"Front-end developer and avid reader"</p>
      <ul className="card-link-group">
        {links.map(link =>(
          <Link key={link} social={link}/>
        ))}
      </ul>
    </article>
  );
};