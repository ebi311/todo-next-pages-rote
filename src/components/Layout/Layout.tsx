import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  pageTitle: string;
} & PropsWithChildren;

const containerClassName = classNames(
  'w-screen',
  'h-screen',
  'flex',
  'flex-col',
  'bg-base-300',
);

const navbarClassName = classNames(
  'navbar',
  'bg-primary',
  'text-primary-content',
  'flex',
  'gap-4',
);

export const Layout: React.FC<Props> = (props) => {
  return (
    <div className={containerClassName}>
      <div className={navbarClassName}>
        <Link href="/" role="banner" className="text-xl">
          TODO
        </Link>
        <h1 aria-label="page-title" className="text-2xl">
          {props.pageTitle}
        </h1>
      </div>
      <main>{props.children}</main>
    </div>
  );
};
