import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Link from 'next/link';

export default function IconBox({ title, subtitle, icon, href }) {
  const content = (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <Div className="cs-iconbox_subtitle">{parse(subtitle)}</Div>
    </Div>
  );

  return href ? (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </Link>
  ) : (
    content
  );
}
