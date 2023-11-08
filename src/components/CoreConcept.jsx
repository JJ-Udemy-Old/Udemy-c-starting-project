export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

/* better cleaner way */
// function CoreConcept({ image, title, description }) {
//   return (
//     <li>
//       <img src={image} alt={description} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
