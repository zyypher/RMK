import React, { useEffect } from "react";

const FallbackHero =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'>
       <rect width='100%' height='100%' fill='#eef2f6'/>
       <text x='50%' y='50%' text-anchor='middle' dy='.35em'
         style='font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;
         font-size:40px; fill:#0f1f2b; opacity:.3'>Course Overview</text>
     </svg>`
  );

const CourseQuickView = ({ open, onClose, data }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !data) return null;

  const { title, duration, details = {} } = data || {};
  const { hero, overview, sections = [] } = details;

  return (
    <div className="qv" role="dialog" aria-modal="true" aria-label={`${title} details`}>
      <div className="qv__backdrop" onClick={onClose} />
      <div className="qv__panel">
        <button className="qv__close" onClick={onClose} aria-label="Close">×</button>

        {/* Media */}
        <div className="qv__media">
          <img src={hero || FallbackHero} alt={title} onError={(e)=>{e.currentTarget.src = FallbackHero;}} />
        </div>

        <div className="qv__body">
          <h3 className="mb-2">{title}</h3>
          {duration && <div className="text-muted mb-3"><strong>Course Duration:</strong> {duration}</div>}
          {overview && <p className="lead" style={{lineHeight:1.6}}>{overview}</p>}

          {sections.map((sec, i) => (
            <div key={i} className="mt-4">
              <h6 className="mb-2">{sec.title}</h6>
              {sec.bullets ? (
                <ul className="qv__list">
                  {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              ) : sec.text ? (
                <p>{sec.text}</p>
              ) : null}
            </div>
          ))}

          <div className="mt-4 d-flex gap-2">
            <a href="/contact" className="btn btn-dark">Enquire / Book</a>
            <button className="btn btn-outline-dark" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .qv { position: fixed; inset: 0; z-index: 1050; }
        .qv__backdrop { position:absolute; inset:0; background: rgba(15,31,43,.45); }
        .qv__panel {
          position: absolute; inset: 5% 50% auto 5%;
          right: 5%;
          max-width: 980px; max-height: 90%;
          background: #fff; border-radius: 16px; overflow: hidden;
          box-shadow: 0 30px 80px rgba(12,31,43,.35);
          display: grid; grid-template-columns: 1fr; grid-auto-rows: min-content;
        }
        .qv__close {
          position: absolute; top: 10px; right: 14px;
          width: 38px; height: 38px; border-radius: 999px;
          border: none; background: #0c1f2b; color: #fff; font-size: 22px;
          line-height: 1; cursor: pointer;
          box-shadow: 0 8px 16px rgba(12,31,43,.25);
        }
        .qv__media img { width: 100%; height: 320px; object-fit: cover; display: block; }
        .qv__body { padding: 20px 22px 26px; overflow: auto; max-height: calc(90vh - 320px); }
        .qv__list { padding-left: 1.1rem; margin: 0; }
        .qv__list li { margin: .25rem 0; }
        @media (min-width: 992px) {
          .qv__panel {
            grid-template-columns: 48% 52%;
            grid-template-rows: auto 1fr;
          }
          .qv__media { grid-column: 1 / 2; grid-row: 1 / 3; }
          .qv__body { grid-column: 2 / 3; grid-row: 1 / 3; max-height: none; }
        }
      `}</style>
    </div>
  );
};

export default CourseQuickView;
