import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useOnClickOutside } from '@hooks';

const StyledResumeMenu = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: ${({ variant }) => (variant === 'big' ? 'center' : 'stretch')};

  .resume-trigger {
    ${({ theme, variant }) =>
      variant === 'big' ? theme.mixins.bigButton : theme.mixins.smallButton};
    ${({ variant }) =>
      variant === 'big'
        ? css`
            padding: 18px 50px;
          `
        : css`
            font-size: var(--fz-xs);
          `}
    cursor: pointer;
  }

  .resume-options {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    z-index: 20;
    min-width: 180px;
    padding: 8px 0;
    margin: 0;
    list-style: none;
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);

    ${({ variant }) =>
      variant === 'big' &&
      css`
        right: auto;
        left: 50%;
        transform: translateX(-50%);
        min-width: 220px;
      `}

    li {
      margin: 0;

      a {
        display: block;
        padding: 10px 16px;
        color: var(--light-slate);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        text-align: left;
        text-decoration: none;
        white-space: nowrap;
        transition: var(--transition);

        &:hover,
        &:focus {
          background-color: var(--navy);
          color: var(--green);
          outline: 0;
        }
      }
    }
  }
`;

const ResumeDropdown = ({ variant, onSelect }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef();

  useOnClickOutside(wrapperRef, () => setOpen(false));

  const handleSelect = () => {
    setOpen(false);
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <StyledResumeMenu variant={variant} ref={wrapperRef}>
      <button
        type='button'
        className='resume-trigger'
        aria-haspopup='true'
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        Resume
      </button>

      {open && (
        <ul className='resume-options'>
          <li>
            <a
              href='/realmohsin-resume-2026.pdf'
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleSelect}
            >
              View PDF
            </a>
          </li>
          <li>
            <a
              href='/realmohsin-resume-2026.docx'
              download='realmohsin-resume-2026.docx'
              onClick={handleSelect}
            >
              Download Word (.docx)
            </a>
          </li>
        </ul>
      )}
    </StyledResumeMenu>
  );
};

ResumeDropdown.propTypes = {
  variant: PropTypes.oneOf(['small', 'big']),
  onSelect: PropTypes.func,
};

ResumeDropdown.defaultProps = {
  variant: 'small',
  onSelect: null,
};

export default ResumeDropdown;
