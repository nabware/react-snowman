import { fireEvent, render, screen } from '@testing-library/react';
import Snowman from './Snowman';

test('smoketest: render snowman', () => {
  render(<Snowman />);
});

// test('snapshot test', () =>{
//   const { container } = render(<Snowman
//     words={["apple"]}
//     maxWrong={6}
//   />);

//   expect(container).toMatchSnapshot();
// })

test('should only allow no more than maxWrong guesses', () => {
  const { container } = render(<Snowman
    words={["apple"]}
    maxWrong={1}
  />);

  const zButton = container.querySelector('button[class="z"]');
  fireEvent.click(zButton);

  const gallowImage = container.querySelector('img');
  expect(gallowImage).toHaveAttribute("src");
});
