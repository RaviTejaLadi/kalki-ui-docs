import { useClickOutside } from '@/modules/hooks';
import  { useRef, useState } from 'react';


const DropdownExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handler to close the dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Use the hook to close dropdown on outside click
  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div style={{ position: 'relative', width: '200px', margin: '50px auto' }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Toggle Dropdown
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: '50px',
            left: '0',
            right: '0',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: '10px' }}>
            <li style={{ padding: '8px 10px', cursor: 'pointer' }}>Option 1</li>
            <li style={{ padding: '8px 10px', cursor: 'pointer' }}>Option 2</li>
            <li style={{ padding: '8px 10px', cursor: 'pointer' }}>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownExample;
