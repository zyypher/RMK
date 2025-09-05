// components/partials/CourseCardSimple.jsx
import React, { useMemo, useState } from "react";

/** Optional static fallback in /public (use any png/webp/svg you like) */
const STATIC_FALLBACK = "/images/placeholders/course-fallback.webp";

/** Always-available final fallback (SVG data URI) */
const makeSVGPlaceholder = (title = "Course") => {
    const initials = (title || "Course")
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("");

    const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#f3f6f9'/>
        <stop offset='100%' stop-color='#e9eef4'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <g fill='#0f1f2b' opacity='0.08'>
      <rect x='0' y='0' width='1200' height='675' />
    </g>
    <text x='50%' y='50%' dy='.35em'
      text-anchor='middle'
      font-family='system-ui, -apple-system, Segoe UI, Roboto, Arial'
      font-size='140'
      fill='#0f1f2b'
      opacity='0.22'
      letter-spacing='4'>
      ${initials || "RMK"}
    </text>
  </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const CourseCardSimple = ({ data, onOpen }) => {
    const { tag, title, duration, description, image } = data || {};
    const [loaded, setLoaded] = useState(false);
    const [src, setSrc] = useState(image || STATIC_FALLBACK);

    // If the static fallback is missing, we still land on an SVG
    const svgFallback = useMemo(() => makeSVGPlaceholder(title), [title]);

    const handleError = (e) => {
        // First failure: switch to static fallback (if we weren't already using it)
        if (src !== STATIC_FALLBACK) {
            setSrc(STATIC_FALLBACK);
            return;
        }
        // Second failure: inline SVG (can’t fail)
        setSrc(svgFallback);
    };

    return (
        <div className="card h-100 border-0 shadow-sm">
            {/* Media container with aspect ratio & shimmer */}
            <div className="media">
                {!loaded && <div className="media-skeleton" />}
                <img
                    src={src}
                    alt={title || "Course image"}
                    className={`media-img ${loaded ? "is-visible" : ""}`}
                    onLoad={() => setLoaded(true)}
                    onError={handleError}
                    loading="lazy"
                />
            </div>

            <div className="card-body">
                {tag && (
                    <span className="badge bg-success-subtle text-success mb-2">
                        {tag}
                    </span>
                )}

                <h6 className="mb-1">{title}</h6>

                {duration && (
                    <div className="text-muted small mb-2">
                        Course Duration: {duration}
                    </div>
                )}

                <p className="mb-0 small" style={{ lineHeight: 1.6 }}>
                    {description}
                </p>

                <div className="mt-3">
                    <button type="button" className="btn btn-outline-dark btn-sm"
                        onClick={() => onOpen && onOpen(data)}>
                        View Details
                    </button>
                </div>

                {/* Ratings hidden as requested
        <div className="d-flex align-items-center mt-2">
          <span className="me-1">4.9</span>
          <i className="fa fa-star text-warning"></i>
          <span className="text-muted ms-1">(526)</span>
        </div>
        */}
            </div>

            <style jsx>{`
        /* Aspect ratio (16:9), rounded top corners, overflow hidden */
        .media {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          background: #f4f7fa;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          overflow: hidden;
        }
        .media-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 200ms ease;
        }
        .media-img.is-visible {
          opacity: 1;
        }
        /* Shimmer skeleton */
        .media-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              90deg,
              rgba(240, 244, 248, 0) 0%,
              rgba(240, 244, 248, 0.9) 50%,
              rgba(240, 244, 248, 0) 100%
            ),
            #e9eef4;
          background-size: 200% 100%, 100% 100%;
          animation: shimmer 1.2s infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0, 0 0;
          }
          100% {
            background-position: 200% 0, 0 0;
          }
        }
      `}</style>
        </div>
    );
};

export default CourseCardSimple;
