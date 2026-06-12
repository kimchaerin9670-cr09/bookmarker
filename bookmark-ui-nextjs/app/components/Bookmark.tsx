import React from 'react';
import type { Bookmark } from '../types/bookmark';
import Link from 'next/link';

interface BookmarkProps {
  bookmark: Bookmark;
}

const Bookmark = ({ bookmark }: BookmarkProps) => {
  const createdDate = new Date(bookmark.createdAt).toLocaleString('ko-KR');

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title mb-1">
              <Link
                href={bookmark.url}
                target="_blank"
                className="text-decoration-none"
              >
                🔖 {bookmark.title}
              </Link>
            </h5>

            <p className="text-muted small mb-2">
              {bookmark.url}
            </p>
          </div>

          <span className="badge bg-primary">
            북마크
          </span>
        </div>

        <hr />

        <div className="d-flex justify-content-end">
          <small className="text-secondary">
            등록일 : {createdDate}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;