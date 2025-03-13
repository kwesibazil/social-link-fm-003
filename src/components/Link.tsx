export default function Link({social}:{social:string}):React.JSX.Element{
  return(
    <li className="card-link">
      {social}
    </li>
  );
};