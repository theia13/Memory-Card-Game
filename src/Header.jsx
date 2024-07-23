function Header() {
  return (
    <>
      <div className="header">
        {" "}
        <h2>Memory Card Game</h2>
        <p>
          {" "}
          Your goal is to match pairs of cards with identical symbols. Simply
          click to flip a card, then click another to find its match. Matched
          pairs remain face-up, while non-matches flip back down. Win by
          matching all card pairs!
        </p>
      </div>
    </>
  );
}

export default Header;
