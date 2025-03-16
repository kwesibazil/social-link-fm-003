import {memo, useRef, useEffect} from 'react';


export type Social = {
  name: string;
  url: string;
};

interface LinkProps{
  index:number;
  social: Social;
  current: boolean;

};

function Link({social, current, index}:LinkProps):React.JSX.Element{
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(()=>{
    if (current && ref.current) 
      ref.current.focus();
  },[current]);

  return(
    <li className="card-item" role="presentation">
      <a 
        ref={ref}
        role="tab" 
        target="_blank"
        href={social.url} 
        data-index={index}
        aria-selected={current}
        rel="noopener noreferrer"
        className={`card-link ${current ? 'focused' : ''}`}
      >
        {social.name}</a>
    </li>
  );
};


export default memo(Link);
