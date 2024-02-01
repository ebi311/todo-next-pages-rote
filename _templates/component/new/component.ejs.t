---
to: src/<%= path %>/<%= name %>/<%= name %>.tsx
---
import React from 'react';

type Props = {};

export const <%= name %>: React.FC<Props> = props => {
  return <div data-testid="<%= name %>-container"><%= name %></div>;
};