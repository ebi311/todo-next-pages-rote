import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

type Props = {
  pageTitle: string;
} & PropsWithChildren;

const containerClassName = classNames(
  'mx-auto',
  'max-w-screen-md',
  'h-screen',
  'flex',
  'flex-col',
  'bg-base-100',
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
      <main className="p-4">{props.children}</main>
    </div>
  );
};
