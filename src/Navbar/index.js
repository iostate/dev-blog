import React, { useState, MouseEventHandler } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className='bg-gray-800'></nav>
    </div>
  );
}

export default Navbar;
