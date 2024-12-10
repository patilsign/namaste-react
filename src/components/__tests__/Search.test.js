/* import Body from "../Body";
import { BrowserRouter } from "react-dom";
import resData from "../../utils/mockdata";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resData);
    },
  });
});

test("Should be render Body Component in App", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
});
 */