import classNames from 'classnames';
import Link from 'next/link';
import React, { ComponentProps } from 'react';
import { MdArrowBack } from 'react-icons/md';

type Props = {
  href: ComponentProps<typeof Link>['href'];
};

const className = classNames(
  'link',
  'link-neutral',
  'text-opacity-75',
  'flex',
  'items-center',
);

export const BackLink: React.FC<Props> = ({ href }) => {
  return (
    <Link href={href} className={className}>
      <MdArrowBack />
      一覧に戻る
    </Link>
  );
};
