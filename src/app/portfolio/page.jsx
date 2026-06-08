'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Portfolio from "@/app/ui/Portfolio";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import { useState } from "react";

const portfolioData = [
  {
    title: 'Al Kabayel Prime Show 2025',
    subtitle: 'See Details',
    href: '/portfolio/kabayel',
    src: '/images/projects/kabayel/kabayel 1.webp',
    category: 'event_managment, digital_marketing, media_buying, pr_publication',
  },
  {
    title: 'Grohe',
    subtitle: 'See Details',
    href: '/portfolio/grohe',
    src: '/images/projects/grohe.png',
    category: 'event_managment, pr_publication, digital_marketing, media_buying',
  },
  {
    title: 'Kohler Al Hashimiya Opening Event',
    subtitle: 'See Details',
    href: '/portfolio/kohler',
    src: '/images/projects/kohler.webp',
    category: 'event_managment, pr_publication',
  },
  {
    title: 'MultiBank Group Gala',
    subtitle: 'See Details',
    href: '/portfolio/multibank-group-gala',
    src: '/images/projects/snapinsta.jpg',
    category: 'event_managment, pr_publication',
  },
  {
    title: 'GF Corys Creatives & Digital Innovation',
    subtitle: 'See Details',
    href: '/portfolio/gf-corys',
    src: '/images/projects/gfcorys/rec.webp',
    category: 'event_managment, pr_publication',
  },
  {
    title: 'Ideal Standard Showroom',
    subtitle: 'See Details',
    href: '/portfolio/ideal-standard',
    src: '/images/projects/ideal-standard/3.webp',
    category: 'digital_marketing',
  },
  {
    title: 'Giorgio Collection x Interiors Furniture',
    subtitle: 'See Details',
    href: '/portfolio/interior-furniture',
    src: '/images/projects/interior-furniture/1.webp',
    category: 'event_managment',
  },
  {
    title: 'Chattels & More OOH Campaign',
    subtitle: 'See Details',
    href: '/portfolio/chattels-and-more',
    src: '/images/projects/chattels and more/IMG_5983.webp',
    category: 'media_buying, digital_marketing',
  },
  {
    title: 'Pegasus - Liora Unveiling',
    subtitle: 'See Details',
    href: '/portfolio/pegasus',
    src: '/images/projects/pegasus/pega1.webp',
    category: 'pr_publication',
  },
  {
    title: 'OFIS - Capisco Product Launch',
    subtitle: 'See Details',
    href: '/portfolio/ofis',
    src: '/images/projects/ofis/Ofis1-NEW.webp',
    category: 'event_managment',
  },
  {
    title: 'Homes R Us',
    subtitle: 'See Details',
    href: '/portfolio/homes-r-us',
    src: '/images/projects/homesrus.jpg',
    category: 'digital_marketing',
  },
  {
    title: 'Al Hazaifa',
    subtitle: 'See Details',
    href: '/portfolio/al-hazaifa',
    src: '/images/projects/hazaifa/3.webp',
    category: 'pr_publication',
  },
  {
    title: 'Dahua Technology',
    subtitle: 'See Details',
    href: '/portfolio/daluha',
    src: '/images/projects/aluha.png',
    category: 'event_managment',
  },
  {
    title: 'Design Middle East Awards 2023',
    subtitle: 'See Details',
    href: '/portfolio/design-middle-east-awards-2023',
    src: '/images/projects/middle.jpg',
    category: 'digital_marketing',
  },
  {
    title: 'Dubai Police',
    subtitle: 'See Details',
    href: '/portfolio/dubai-police',
    src: '/images/projects/dubai police/2.webp',
    category: 'event_managment',
  },
  {
    title: 'Hanif',
    subtitle: 'See Details',
    href: '/portfolio/hanif',
    src: '/images/projects/hanif.jpg',
    category: 'pr_publication',
  },
  {
    title: 'Walid Atallah',
    subtitle: 'See Details',
    href: '/portfolio/walid-atallah',
    src: '/images/projects/walid event.png',
    category: 'event_managment',
  },
];
const categoryMenu = [
  {
    title: 'PR & Publications',
    category: 'pr_publication',
  },
  {
    title: 'Event Managment',
    category: 'event_managment',
  },
  {
    title: 'Media Buying',
    category: 'media_buying',
  },
  {
    title: 'Digital Marketing',
    category: 'digital_marketing',
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="MediaOnClick Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                } ${active === 'all'
                  ? ''
                  : !item.category.includes(active)
                    ? 'd-none'
                    : ''
                }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="info@mediaonclick.me"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
