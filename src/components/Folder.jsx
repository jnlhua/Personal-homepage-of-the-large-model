import { useState } from 'react';
import './Folder.css';

const Folder = ({ color = '#6366f1', size = 1, items = [], className = '', hint = '点击打开文件夹' }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-scale': size,
  };

  return (
    <div className={`folder-component ${className}`}>
      {/* Closed folder */}
      <div
        className={`folder-visual ${open ? 'folder-visual--open' : ''}`}
        style={folderStyle}
        onClick={handleClick}
      >
        <div className="folder-visual__back">
          <div className="folder-visual__tab"></div>
        </div>
        {items.map((item, i) => (
          <div key={i} className={`folder-visual__paper folder-visual__paper--${i}`}>
            {item.preview}
          </div>
        ))}
        <div className="folder-visual__front"></div>
        <div className="folder-visual__front-right"></div>
      </div>

      {!open && (
        <p className="folder-hint">{hint}</p>
      )}

      {/* Spread out cards */}
      <div className={`folder-cards ${open ? 'folder-cards--open' : ''}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className="folder-card"
            style={{ transitionDelay: open ? `${i * 0.1}s` : '0s' }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folder;
