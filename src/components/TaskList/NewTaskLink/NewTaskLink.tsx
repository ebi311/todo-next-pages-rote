import Link from 'next/link';
import React from 'react';

export const NewTaskLink: React.FC = () => {
  return (
    <Link
      className="btn btn-primary btn-sm"
      href="/tasks"
      aria-label="new-task"
      role="button"
    >
      新しいタスク
    </Link>
  );
};
