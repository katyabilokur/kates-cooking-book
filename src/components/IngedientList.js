function IngedientList({ ingedientSet }) {
  return (
    <div>
      <h5>{ingedientSet.type}</h5>
      <ul className="ingredient-list">
        {ingedientSet.ingredients.map((ingredient) => (
          <li className="ingredient" key={ingredient}>
            &#8212; {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngedientList;
