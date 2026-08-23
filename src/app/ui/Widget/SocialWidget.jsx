import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.facebook.com/mediaonclick.me' className="cs-center" aria-label="Facebook">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href='https://www.instagram.com/mediaonclick.me/' className="cs-center" aria-label="Instagram">
        <Icon icon="fa6-brands:instagram" />               
      </Link>
      <Link href='https://www.youtube.com/@mediaonclick' className="cs-center" aria-label="YouTube">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
      <Link href='https://www.linkedin.com/company/media-onclick/' className="cs-center" aria-label="LinkedIn">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
    </Div>
  )
}
