import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button"

export default {
  title: 'Buttons',
  component: Button,
};

export const SolidButton = () => <Button color={`primary-mid-wod`}>show filters</Button>

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
