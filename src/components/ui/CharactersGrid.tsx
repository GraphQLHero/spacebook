import React, { FC } from 'react';

const CharactersGrid: FC = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">{children}</div>
);

export default CharactersGrid;
