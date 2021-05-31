import { render, screen } from '@testing-library/react';
import App from './App';

it("Renders the loading message", () => {

  render(<App />);

  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();

});

it("Renders the testMessage with mock Api", async () => {
  const data = {
    message: "testData"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(data)
    })
  );

  render(<App />);

  const testMsg = await screen.findByText('testData')
  expect(testMsg).toBeInTheDocument();

  global.fetch.mockRestore();
});

