import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";

describe('Greeting', () => {
  it('will match snapshot with null', () => {
    var { component } = render(<Greeting />);
    expect(component).toMatchSnapshot();
  });

  it('will match snapshot with name', () => {
    const name = "Joe";
    var { component } = render(<Greeting name={name} />);
    screen.debug();
    expect(component).toMatchSnapshot();
  });
});
