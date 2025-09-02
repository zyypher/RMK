import React from "react";

const OfficesGrid = ({ offices = [] }) => {
  return (
    <section aria-label="All UAE Offices">
      <h4 className="grid-title mb-3">All UAE Offices</h4>

      <div className="row g-3">
        {offices.map((o) => (
          <div key={o.city} className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="office-card p-3 rounded-3 w-100">
              <strong className="office-city d-block">{o.city}</strong>
              <div className="office-line mt-1">{o.address}</div>
              <div className="office-line">Phone: {o.phone}</div>

              {Array.isArray(o.emails) && o.emails.length > 0 && (
                <div className="office-line">
                  Email:&nbsp;
                  {o.emails.map((em, i) => (
                    <span key={em}>
                      <a href={`mailto:${em}`}>{em}</a>{i < o.emails.length - 1 ? " • " : ""}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .grid-title { font-size: 1.25rem; font-weight: 700; }
        .office-card {
          background: #f7f8fb;
          border: 1px solid rgba(0,0,0,0.06);
          min-height: 143px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .office-city { font-size: 1.05rem; }
        .office-line { font-size: 0.98rem; }
      `}</style>
    </section>
  );
};

export default OfficesGrid;
