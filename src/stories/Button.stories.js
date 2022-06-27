import Button from "../Components/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <Button clickHandler={action("button was clicked")} selected={1 === 1}>
    Hi there
  </Button>
);

export const Selected = () => (
  <Button clickHandler={action("button was clicked")} selected={1 === 2}>
    Hi there
  </Button>
);
