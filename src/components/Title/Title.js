const Title = ({ tag, children }) => {
  switch (tag) {
    case "h1":
      return <h1 className={"title-h1"}>{children}</h1>;
    case "h2":
      return <h2 className={"title-h2"}>{children}</h2>;
    case "h3":
      return <h3 className={"title-h3"}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Title;
