function LinkCard(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.aLink}</p>
    </li>
  );
}

export default function Footer(props) {
  const mappedLinks = props.links.map((link) => <LinkCard {...link} />);
  return (
    <footer>
      <ul>
        <LinkCard>{mappedLinks}</LinkCard>
      </ul>
    </footer>
  );
}
